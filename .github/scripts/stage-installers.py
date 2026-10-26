import hashlib, json, os, pathlib, re, shutil, zipfile
tag=os.environ['RELEASE_TAG']
if not re.fullmatch(r'v\d+\.\d+\.\d+-alpha\.\d+',tag): raise RuntimeError('Invalid release tag')
version=tag[1:]
expected={
 'WINDOWS':{f'Lark-Agent-Bridge-{version}-win-x64.exe'},
 'LINUX':{f'Lark-Agent-Bridge-{version}-linux-amd64.deb',f'Lark-Agent-Bridge-{version}-linux-x86_64.AppImage'},
 'MAC':{f'Lark-Agent-Bridge-{version}-mac-arm64.dmg',f'Lark-Agent-Bridge-{version}-mac-arm64.zip','mac-verification.json'},
}
output=pathlib.Path('staging/assets');output.mkdir(parents=True)
for platform,names in expected.items():
 with zipfile.ZipFile(f'staging/downloads/{platform}.zip') as archive:
  entries=[entry for entry in archive.infolist() if not entry.is_dir()]
  if len(entries)!=len(names) or {e.filename for e in entries}!=names: raise RuntimeError('Unexpected artifact file set')
  if sum(e.file_size for e in entries)>600*1024*1024: raise RuntimeError('Artifact exceeds its size limit')
  for entry in entries:
   if ((entry.external_attr>>16)&0o170000) not in (0,0o100000): raise RuntimeError('Non-file artifact entry')
   if entry.filename=='mac-verification.json':
    report=json.loads(archive.read(entry))
    if report.get('version')!=version or report.get('signature')!='adhoc' or not all(report.get(key) for key in ['diskImageVerified','copiedAppVerified','zipAppVerified','packagedTestsPassed']): raise RuntimeError('Mac verification failed')
    continue
   with archive.open(entry) as source, (output/entry.filename).open('xb') as destination: shutil.copyfileobj(source,destination)
for name in ['LICENSE.txt','THIRD_PARTY_NOTICES.md']: shutil.copyfile(name,output/name)
lines=[]
for file in sorted(output.iterdir()):
 with file.open('rb') as stream: digest=hashlib.file_digest(stream,'sha256').hexdigest()
 lines.append(f'{digest}  {file.name}')
(output/'SHA256SUMS.txt').write_text('\n'.join(lines)+'\n',encoding='utf-8')
print('Validated five installers and prepared licence notices and SHA-256 checksums.')
