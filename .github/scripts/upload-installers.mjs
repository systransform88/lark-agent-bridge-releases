import {readdirSync,statSync,createReadStream} from 'node:fs';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
const tag=process.env.RELEASE_TAG,repo=process.env.GITHUB_REPOSITORY;
if(!/^v\d+\.\d+\.\d+-alpha\.\d+$/.test(tag||'')||repo!=='systransform88/lark-agent-bridge-releases')throw Error('Unexpected release target.');
function gh(args){const result=spawnSync('gh',args,{encoding:'utf8',maxBuffer:5*1024*1024});if(result.error)throw result.error;if(result.status!==0)throw Error(result.stderr||'GitHub release command failed');return result.stdout;}
const before=JSON.parse(gh(['release','view',tag,'--repo',repo,'--json','isDraft']));if(!before.isDraft)throw Error('Only an existing draft release may be staged.');
const files=readdirSync('staging/assets');if(files.length!==8)throw Error('Incomplete release assets.');
gh(['release','upload',tag,'--repo',repo,'--clobber',...files.map(name=>'staging/assets/'+name)]);
const uploaded=JSON.parse(gh(['release','view',tag,'--repo',repo,'--json','assets,isDraft']));if(!uploaded.isDraft||uploaded.assets.length!==8)throw Error('Release state changed or upload incomplete.');
for(const name of files){const path='staging/assets/'+name,asset=uploaded.assets.find(item=>item.name===name),hash=createHash('sha256');for await(const chunk of createReadStream(path))hash.update(chunk);if(!asset||asset.state!=='uploaded'||asset.size!==statSync(path).size||asset.digest!=='sha256:'+hash.digest('hex'))throw Error('Uploaded asset verification failed: '+name);}
console.log('All eight draft assets verified. The release remains unpublished for final review.');
