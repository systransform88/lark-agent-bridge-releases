import {mkdirSync,createWriteStream} from 'node:fs';
import {Readable} from 'node:stream';
import {pipeline} from 'node:stream/promises';
if(!/^v\d+\.\d+\.\d+-alpha\.\d+$/.test(process.env.RELEASE_TAG||''))throw Error('Invalid testing release tag.');
mkdirSync('staging/downloads',{recursive:true});
await Promise.all(['WINDOWS','LINUX','MAC'].map(async platform=>{
  const value=process.env['RELEASE_'+platform+'_URL'];if(!value)throw Error('A selected installer artifact URL is missing.');
  const url=new URL(value);if(url.protocol!=='https:'||url.username||url.password||!['.blob.core.windows.net','.actions.githubusercontent.com','.githubusercontent.com'].some(host=>url.hostname.endsWith(host)))throw Error('Untrusted installer artifact origin.');
  const response=await fetch(url,{signal:AbortSignal.timeout(300000)});if(!response.ok)throw Error(platform+' artifact download failed: '+response.status);
  await pipeline(Readable.fromWeb(response.body),createWriteStream(`staging/downloads/${platform}.zip`,{flags:'wx'}));console.log(platform+' installer artifact downloaded.');
}));
