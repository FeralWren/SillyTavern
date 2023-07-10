var ue=Object.create;var q=Object.defineProperty;var fe=Object.getOwnPropertyDescriptor;var ge=Object.getOwnPropertyNames;var me=Object.getPrototypeOf;var pe=Object.prototype.hasOwnProperty;var ke=(d,e,t)=>e in d?q(d,e,{enumerable:true,configurable:true,writable:true,value:t}):d[e]=t;var J=d=>q(d,"__esModule",{value:true});var P=(d,e)=>q(d,"name",{value:e,configurable:true});var M=(d,e)=>()=>(e||d((e={exports:{}}).exports,e),e.exports);var be=(d,e,t)=>{if(e&&typeof e==="object"||typeof e==="function"){for(let s of ge(e))if(!pe.call(d,s)&&s!=="default")q(d,s,{get:()=>e[s],enumerable:!(t=fe(e,s))||t.enumerable})}return d};var G=d=>{return be(J(q(d!=null?ue(me(d)):{},"default",d&&d.__esModule&&"default"in d?{get:()=>d.default,enumerable:true}:{value:d,enumerable:true})),d)};var T=(d,e,t)=>{ke(d,typeof e!=="symbol"?e+"":e,t);return t};var O=(d,e,t)=>{if(!e.has(d))throw TypeError("Cannot "+t)};var i=(d,e,t)=>{O(d,e,"read from private field");return t?t.call(d):e.get(d)};var y=(d,e,t)=>{if(e.has(d))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(d):e.set(d,t)};var A=(d,e,t,s)=>{O(d,e,"write to private field");s?s.call(d,t):e.set(d,t);return t};var m=(d,e,t)=>{O(d,e,"access private method");return t};var ee=M((Q,Y)=>{var Z=Object.defineProperty;var we=P(d=>Z(d,"__esModule",{value:true}),"f");var Te=P((d,e)=>Z(d,"name",{value:e,configurable:true}),"h");we(Q);var _=Symbol("supermap.date_cache");var H=P(class extends Map{#e;[_]=null;#t=null;constructor(d={}){if("intervalTime"in d&&(!Number.isSafeInteger(d.intervalTime)||d.intervalTime<0))throw new TypeError("options.intervalTime must be a safe positive integer.");if("expireAfter"in d&&(!Number.isSafeInteger(d.expireAfter)||d.expireAfter<0))throw new TypeError("options.expireAfter must be a safe positive integer.");if("itemsLimit"in d&&(!Number.isSafeInteger(d.itemsLimit)||d.itemsLimit<0))throw new TypeError("options.itemsLimit must be a safe positive integer.");if("onSweep"in d&&typeof d.onSweep!=="function")throw new TypeError("options.onSweep must be a function.");d={expireAfter:0,itemsLimit:0,...d};super();this.#e=d;if("intervalTime"in d){this[_]=new Map;this.startInterval()}}toArray(){return Array.from(this.entries())}delete(d){return this[_]?.delete(d),super.delete(d)}set(d,e,t=0){if(!Number.isSafeInteger(t))throw new TypeError("ttl must be a safe integer");const s=this.#e.itemsLimit;if(s>0&&this.size>=s&&!this.has(d)){this.delete(this.first(true))}this[_]?.set(d,Date.now()+t);return super.set(d,e)}clear(d=false){if(d)this.stopInterval();else this[_]?.clear();return super.clear()}first(d){return d?this.keys().next().value:this.values().next().value}last(d=false){const e=this.entries();let t;while(true){const s=e.next();if(s.done)return t&&t[d?0:1];t=s.value}}some(d){const e=this.entries();while(true){const t=e.next();if(t.done)return false;if(d(t.value[1],t.value[0],this))return true}}every(d){const e=this.entries();while(true){const t=e.next();if(t.done)return true;if(!d(t.value[1],t.value[0],this))return false}}sweep(d){if(this.size===0)return-1;const e=this.#e.onSweep;const t=this.size;super.forEach((s,n)=>{if(d(s,n,this)){e?.(s,n);this.delete(n)}});return t-this.size}filter(d){const e=new H(this.#e);const t=this.entries();while(true){const s=t.next();if(s.done)return e;const[n,a]=s.value;if(d(a,n,this))e.set(n,a)}}map(d,e){return Array.from(this.#r(d,e))}find(d,e=false){const t=this.entries();while(true){const s=t.next();if(s.done)return null;const[n,a]=s.value;if(d(a,n,this))return e?n:a}}reduce(d,e){const t=this.entries();var s=e;while(true){const n=t.next();if(n.done)return s;s=d(s,n.value[1],n.value[0],this)}}concat(...d){const e=new H(this.#e);e[_]=this[_];for(const t of d.concat(this)){const s=t.entries();while(true){const n=s.next();if(n.done)break;e.set(...n.value)}}return e}concatMut(...d){for(const e of d){const t=e.entries();while(true){const s=t.next();if(s.done)break;this.set(...s.value)}}return this}sort(d){this.toArray().sort(([e,t],[s,n])=>d(t,n,e,s,this)).forEach(e=>this.set(...e));this.clear();return this}startInterval(){if(this[_]===null||!("intervalTime"in this.#e)){return false}this.stopInterval();this.#t=setInterval(()=>this.#s(),this.#e.intervalTime).unref();return true}stopInterval(){if(this[_]===null)return false;this[_].clear();if(this.#t!==null){clearInterval(this.#t);this.#t=null}return true}#s(){const d=this.entries(),e=this[_].entries();const t=Date.now()-this.#e.expireAfter;const s=this.#e.onSweep;while(true){const n=d.next();if(n.done)return;if(t>(e.next().value?.[1]||0)){const a=n.value[0];s?.(n.value[1],a);this.delete(a)}}}*#r(d,e){const t=this.entries();if(e){while(true){const s=t.next();if(s.done)return;const[n,a]=s.value;if(e(a,n,this)){yield d(a,n,this)}}}while(true){const s=t.next();if(s.done)return;yield d(s.value[1],s.value[0],this)}}},"u");Te(H,"SuperMap");Y.exports=H});var re=M((qe,se)=>{se.exports=P(class Ce{constructor(e,t){this.coreRes=e;this.resOptions=t;this.body=Buffer.alloc(0);this.headers=e.headers;this.statusCode=e.statusCode}_addChunk(e){this.body=Buffer.concat([this.body,e])}async json(){return this.statusCode===204?null:JSON.parse(this.body)}async text(){return this.body.toString()}},"CentraResponse")});var ae=M((Fe,ne)=>{var Pe=require("path");var ye=require("http");var _e=require("https");var xe=require("querystring");var ie=require("zlib");var{URL:Se}=require("url");var Ae=re();var je=["gzip","deflate"];ne.exports=P(class De{constructor(e,t="GET"){this.url=typeof e==="string"?new Se(e):e;this.method=t;this.data=null;this.sendDataAs=null;this.reqHeaders={};this.streamEnabled=false;this.compressionEnabled=false;this.timeoutTime=null;this.coreOptions={};this.resOptions={"maxBuffer":50*1e6};return this}query(e,t){if(typeof e==="object"){Object.keys(e).forEach(s=>{this.url.searchParams.append(s,e[s])})}else this.url.searchParams.append(e,t);return this}path(e){this.url.pathname=Pe.join(this.url.pathname,e);return this}body(e,t){this.sendDataAs=typeof e==="object"&&!t&&!Buffer.isBuffer(e)?"json":t?t.toLowerCase():"buffer";this.data=this.sendDataAs==="form"?xe.stringify(e):this.sendDataAs==="json"?JSON.stringify(e):e;return this}header(e,t){if(typeof e==="object"){Object.keys(e).forEach(s=>{this.reqHeaders[s.toLowerCase()]=e[s]})}else this.reqHeaders[e.toLowerCase()]=t;return this}timeout(e){this.timeoutTime=e;return this}option(e,t){this.coreOptions[e]=t;return this}stream(){this.streamEnabled=true;return this}compress(){this.compressionEnabled=true;if(!this.reqHeaders["accept-encoding"])this.reqHeaders["accept-encoding"]=je.join(", ");return this}send(){return new Promise((e,t)=>{if(this.data){if(!this.reqHeaders.hasOwnProperty("content-type")){if(this.sendDataAs==="json"){this.reqHeaders["content-type"]="application/json"}else if(this.sendDataAs==="form"){this.reqHeaders["content-type"]="application/x-www-form-urlencoded"}}if(!this.reqHeaders.hasOwnProperty("content-length")){this.reqHeaders["content-length"]=Buffer.byteLength(this.data)}}const s=Object.assign({"protocol":this.url.protocol,"host":this.url.hostname,"port":this.url.port,"path":this.url.pathname+(this.url.search===null?"":this.url.search),"method":this.method,"headers":this.reqHeaders},this.coreOptions);let n;const a=P(r=>{let o=r;if(this.compressionEnabled){if(r.headers["content-encoding"]==="gzip"){o=r.pipe(ie.createGunzip())}else if(r.headers["content-encoding"]==="deflate"){o=r.pipe(ie.createInflate())}}let h;if(this.streamEnabled){e(o)}else{h=new Ae(r,this.resOptions);o.on("error",l=>{t(l)});o.on("aborted",()=>{t(new Error("Server aborted request"))});o.on("data",l=>{h._addChunk(l);if(this.resOptions.maxBuffer!==null&&h.body.length>this.resOptions.maxBuffer){o.destroy();t("Received a response which was longer than acceptable when buffering. ("+this.body.length+" bytes)")}});o.on("end",()=>{e(h)})}},"resHandler");if(this.url.protocol==="http:"){n=ye.request(s,a)}else if(this.url.protocol==="https:"){n=_e.request(s,a)}else throw new Error("Bad URL protocol: "+this.url.protocol);if(this.timeoutTime){n.setTimeout(this.timeoutTime,()=>{n.abort();if(!this.streamEnabled){t(new Error("Timeout reached"))}})}n.on("error",r=>{t(r)});if(this.data)n.write(this.data);n.end()})}},"CentraRequest")});var de=M((ve,oe)=>{var Ie=ae();oe.exports=(d,e)=>{return new Ie(d,e)}});J(exports);var te=G(ee());var x=te.default;var u=G(de());var le=G(require("fs"));var ce=G(require("path"));var X;(function(w){w["k_lms"]="k_lms";w["k_heun"]="k_heun";w["k_euler"]="k_euler";w["k_euler_a"]="k_euler_a";w["k_dpm_2"]="k_dpm_2";w["k_dpm_2_a"]="k_dpm_2_a";w["DDIM"]="DDIM";w["PLMS"]="PLMS";w["k_dpm_fast"]="k_dpm_fast";w["k_dpm_adaptive"]="k_dpm_adaptive";w["k_dpmpp_2s_a"]="k_dpmpp_2s_a";w["k_dpmpp_2m"]="k_dpmpp_2m";w["dpmsolver"]="dpmsolver"})(X||(X={}));var N;(function(s){s["img2img"]="img2img";s["inpainting"]="inpainting";s["outpainting"]="outpainting"})(N||(N={}));var L;(function(s){s["GFPGAN"]="GFPGAN";s["RealESRGAN_x4plus"]="RealESRGAN_x4plus";s["CodeFormers"]="CodeFormers"})(L||(L={}));var W;(function(l){l["caption"]="caption";l["interrogation"]="interrogation";l["nsfw"]="nsfw";l["GFPGAN"]="GFPGAN";l["RealESRGAN_x4plus"]="RealESRGAN_x4plus";l["RealESRGAN_x4plus_anime_6B"]="RealESRGAN_x4plus_anime_6B";l["NMKD_Siax"]="NMKD_Siax";l["4x_AnimeSharp"]="4x_AnimeSharp";l["CodeFormers"]="CodeFormers";l["strip_background"]="strip_background"})(W||(W={}));var K;(function(r){r["waiting"]="waiting";r["processing"]="processing";r["done"]="done";r["faulted"]="faulted";r["partial"]="partial";r["cancelled"]="cancelled"})(K||(K={}));var B;(function(l){l["canny"]="canny";l["hed"]="hed";l["depth"]="depth";l["normal"]="normal";l["openpose"]="openpose";l["seg"]="seg";l["scribble"]="scribble";l["fakescribbles"]="fakescribbles";l["hough"]="hough"})(B||(B={}));var U=class extends Error{rawError;status;method;url;requestBody;constructor(e,t,s){super();this.rawError=e;this.status=t.statusCode??0;this.method=t.method??"GET";this.url=t.url??"";this.requestBody=s}get name(){return this.rawError.message}};P(U,"APIError");var F,g,p,f,c,k,b,j,C;var I=class{constructor(e){y(this,k);y(this,j);T(this,"ModelGenerationInputStableSamplers",I.ModelGenerationInputStableSamplers);T(this,"SourceImageProcessingTypes",I.SourceImageProcessingTypes);T(this,"ModelGenerationInputPostProcessingTypes",I.ModelGenerationInputPostProcessingTypes);T(this,"ModelGenerationInputControlTypes",I.ModelGenerationInputControlTypes);T(this,"ModelInterrogationFormTypes",I.ModelInterrogationFormTypes);T(this,"HordeAsyncRequestStates",I.HordeAsyncRequestStates);T(this,"APIError",I.APIError);y(this,F,void 0);y(this,g,void 0);y(this,p,void 0);y(this,f,void 0);T(this,"VERSION");y(this,c,void 0);T(this,"ratings");A(this,F,e?.default_token);A(this,f,e?.api_route??"https://aihorde.net/api/v2");A(this,g,{users:e?.cache?.users??0,generations_check:e?.cache?.generations_check??0,generations_status:e?.cache?.generations_status??0,interrogations_status:e?.cache?.interrogations_status??0,models:e?.cache?.models??0,modes:e?.cache?.modes??0,news:e?.cache?.news??0,performance:e?.cache?.performance??0,workers:e?.cache?.workers??0,teams:e?.cache?.teams??0});if(Object.values(i(this,g)).some(t=>!Number.isSafeInteger(t)||t<0))throw new TypeError("Every cache duration must be a positive safe integer");A(this,p,{users:i(this,g).users?new x({intervalTime:e?.cache_interval??1e3,expireAfter:i(this,g).users}):void 0,generations_check:i(this,g).generations_check?new x({intervalTime:e?.cache_interval??1e3,expireAfter:i(this,g).generations_check}):void 0,generations_status:i(this,g).generations_status?new x({intervalTime:e?.cache_interval??1e3,expireAfter:i(this,g).generations_status}):void 0,interrogations_status:i(this,g).interrogations_status?new x({intervalTime:e?.cache_interval??1e3,expireAfter:i(this,g).interrogations_status}):void 0,models:i(this,g).models?new x({intervalTime:e?.cache_interval??1e3,expireAfter:i(this,g).models}):void 0,modes:i(this,g).modes?new x({intervalTime:e?.cache_interval??1e3,expireAfter:i(this,g).modes}):void 0,news:i(this,g).news?new x({intervalTime:e?.cache_interval??1e3,expireAfter:i(this,g).news}):void 0,performance:i(this,g).performance?new x({intervalTime:e?.cache_interval??1e3,expireAfter:i(this,g).performance}):void 0,workers:i(this,g).workers?new x({intervalTime:e?.cache_interval??1e3,expireAfter:i(this,g).workers}):void 0,teams:i(this,g).teams?new x({intervalTime:e?.cache_interval??1e3,expireAfter:i(this,g).teams}):void 0});try{let t=JSON.parse((0,le.readFileSync)((0,ce.join)(__dirname,"./package.json"),"utf-8"));A(this,c,e?.client_agent??`${t.name}:${t.version}:${t.bugs?.slice(8)}`);this.VERSION=t.version}catch{A(this,c,e?.client_agent??`@zeldafan0225/ai_horde:Version_Unknown:github.com/ZeldaFan0225/ai_horde/issues`);this.VERSION="Unknown"}this.ratings=new D({api_route:e?.ratings_api_route??"https://ratings.aihorde.net/api/v1",default_token:e?.default_token,client_agent:i(this,c)})}clearCache(){Object.values(i(this,p)).forEach(e=>e.clear())}get cache(){return i(this,p)}parseAgent(e){const[t,s,n]=e.split(":");return{name:t,version:s,link:n}}generateFieldsString(e){return e?.join(",")}async findUser(e){const{result:t,fields_string:s}=await m(this,j,C).call(this,"/find_user","GET",e);if(t.statusCode===404)throw new this.APIError(await t.json().then(a=>a),t.coreRes);const n=await t.json();if(i(this,g).users){const a=n;if("id"in a)i(this,p).users?.set(a.id+s,n)}return n}async getUserDetails(e,t){const s=this.generateFieldsString(t?.fields);const n=m(this,k,b).call(this,t?.token);const a=!t?.force&&i(this,p).users?.get(e.toString()+s);if(a)return a;const{result:r}=await m(this,j,C).call(this,`/users/${e}`,"GET",{fields_string:s,token:n});if(r.statusCode===404)throw new this.APIError(await r.json().then(h=>h),r.coreRes);const o=await r.json();if(i(this,g).users){const h=o;if("id"in h)i(this,p).users?.set(h.id+s,o)}return o}async getTeam(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=!t?.force&&i(this,p).teams?.get(e+s);if(a)return a;const r=(0,u.default)(`${i(this,f)}/teams/${e}`,"GET").header("Client-Agent",i(this,c)).header("apikey",n);if(s)r.header("X-Fields",s);const o=await r.send();switch(o.statusCode){case 401:case 403:case 404:{throw new this.APIError(await o.json().then(l=>l),o.coreRes)}}const h=await o.json();if(i(this,g).teams){const l=h;if("id"in l)i(this,p).teams?.set(l.id+s,h)}return h}async getWorkerDetails(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=!t?.force&&i(this,p).workers?.get(e+s);if(a)return a;const r=(0,u.default)(`${i(this,f)}/workers/${e}`,"GET").header("Client-Agent",i(this,c)).header("apikey",n);if(s)r.header("X-Fields",s);const o=await r.send();switch(o.statusCode){case 401:case 403:case 404:{throw new this.APIError(await o.json().then(l=>l),o.coreRes)}}const h=await o.json();if(i(this,g).workers){const l=h;if("id"in l)i(this,p).workers?.set(l.id+s,h)}return h}async getImageGenerationCheck(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=!t?.force&&i(this,p).generations_check?.get(e+s);if(n)return n;const a=(0,u.default)(`${i(this,f)}/generate/check/${e}`,"GET").header("Client-Agent",i(this,c));if(s)a.header("X-Fields",s);const r=await a.send();if(r.statusCode===404)throw new this.APIError(await r.json().then(h=>h),r.coreRes);const o=await r.json();if(i(this,g).generations_check)i(this,p).generations_check?.set(e+s,o);return o}async getImageGenerationStatus(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=!t?.force&&i(this,p).generations_status?.get(e);if(n)return n;const a=(0,u.default)(`${i(this,f)}/generate/status/${e}`,"GET").header("Client-Agent",i(this,c));if(s)a.header("X-Fields",s);const r=await a.send();if(r.statusCode===404)throw new this.APIError(await r.json().then(h=>h),r.coreRes);const o=await r.json();if(i(this,g).generations_status)i(this,p).generations_status?.set(e+s,o);return o}async getTextGenerationStatus(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=!t?.force&&i(this,p).generations_status?.get(e);if(n)return n;const a=(0,u.default)(`${i(this,f)}/generate/text/status/${e}`,"GET").header("Client-Agent",i(this,c));if(s)a.header("X-Fields",s);const r=await a.send();if(r.statusCode===404)throw new this.APIError(await r.json().then(h=>h),r.coreRes);const o=await r.json();if(i(this,g).generations_status)i(this,p).generations_status?.set(e+s,o);return o}async getInterrogationStatus(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=!t?.force&&i(this,p).interrogations_status?.get(e+s);if(n)return n;const a=(0,u.default)(`${i(this,f)}/interrogate/status/${e}`,"GET").header("Client-Agent",i(this,c));if(s)a.header("X-Fields",s);const r=await a.send();if(r.statusCode===404)throw new this.APIError(await r.json().then(h=>h),r.coreRes);const o=await r.json();if(i(this,g).interrogations_status)i(this,p).interrogations_status?.set(e+s,o);return o}async getHeartbeat(){await(0,u.default)(`${i(this,f)}/status/heartbeat`,"GET").header("Client-Agent",i(this,c)).send();return true}async getModels(e){const t=e?.fields?.length?e.fields.join(","):"";const s=!e?.force&&i(this,p).models?.get("CACHE-MODELS"+t);if(s)return s;const n=(0,u.default)(`${i(this,f)}/status/models`,"GET").header("Client-Agent",i(this,c));if(t)n.header("X-Fields",t);const a=await n.send();const r=await a.json();if(i(this,g).models)i(this,p).models?.set("CACHE-MODELS"+t,r);return r}async getModes(e){const t=e?.fields?.length?e.fields.join(","):"";const s=m(this,k,b).call(this,e?.token);const n=!e?.force&&i(this,p).modes?.get("CACHE-MODES"+t);if(n)return n;const a=(0,u.default)(`${i(this,f)}/status/modes`,"GET").header("Client-Agent",i(this,c)).header("apikey",s);if(t)a.header("X-Fields",t);const r=await a.send();const o=await r.json();if(i(this,g).modes)i(this,p).modes?.set("CACHE-MODES"+t,o);return o}async getNews(e){const t=e?.fields?.length?e.fields.join(","):"";const s=!e?.force&&i(this,p).news?.get("CACHE-NEWS"+t);if(s)return s;const n=(0,u.default)(`${i(this,f)}/status/news`,"GET").header("Client-Agent",i(this,c));if(t)n.header("X-Fields",t);const a=await n.send();const r=await a.json();if(i(this,g).news)i(this,p).news?.set("CACHE-NEWS"+t,r);return r}async getPerformance(e){const t=e?.fields?.length?e.fields.join(","):"";const s=!e?.force&&i(this,p).performance?.get("CACHE-PERFORMANCE"+t);if(s)return s;const n=(0,u.default)(`${i(this,f)}/status/performance`,"GET").header("Client-Agent",i(this,c));if(t)n.header("X-Fields",t);const a=await n.send();const r=await a.json();if(i(this,g).performance)i(this,p).performance?.set("CACHE-PERFORMANCE"+t,r);return r}async getUsers(e){const t=e?.fields?.length?e.fields.join(","):"";const s=(0,u.default)(`${i(this,f)}/users`,"GET").header("Client-Agent",i(this,c));if(t)s.header("X-Fields",t);const n=await s.send();const a=await n.json();if(i(this,g).users)a.forEach(r=>{const o=r;if("id"in o)i(this,p).users?.set(o.id+t,r)});return a}async getWorkers(e){const t=e?.fields?.length?e?.fields.join(","):"";const s=(0,u.default)(`${i(this,f)}/workers`,"GET").header("Client-Agent",i(this,c));if(t)s.header("X-Fields",t);const n=await s.send();const a=await n.json();if(i(this,g).workers)a.forEach(r=>{const o=a;if("id"in o)i(this,p).workers?.set(o.id+t,r)});return a}async getImageModelStats(e){const t=e?.fields?.length?e.fields.join(","):"";const{result:s}=await m(this,j,C).call(this,"/stats/img/models","GET",{fields:e?.fields,fields_string:t});const n=await s.json();return n}async getImageTotalStats(e){const t=e?.fields?.length?e.fields.join(","):"";const{result:s}=await m(this,j,C).call(this,"/stats/img/totals","GET",{fields:e?.fields,fields_string:t});const n=await s.json();return n}async getTextModelStats(e){const t=e?.fields?.length?e.fields.join(","):"";const{result:s}=await m(this,j,C).call(this,"/stats/text/models","GET",{fields:e?.fields,fields_string:t});const n=await s.json();return n}async getTextTotalStats(e){const t=e?.fields?.length?e.fields.join(","):"";const{result:s}=await m(this,j,C).call(this,"/stats/text/totals","GET",{fields:e?.fields,fields_string:t});const n=await s.json();return n}async getTeams(e){const t=e?.fields?.length?e?.fields.join(","):"";const s=(0,u.default)(`${i(this,f)}/teams`,"GET").header("Client-Agent",i(this,c));if(t)s.header("X-Fields",t);const n=await s.send();const a=await n.json();if(i(this,g).teams)a.forEach(r=>{const o=r;if("id"in o)i(this,p).teams?.set(o.id+t,r)});return a}async getFilters(e,t){const s=t?.fields?.length?t?.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/filters`,"GET").header("Client-Agent",i(this,c)).header("apikey",n);if(s)a.header("X-Fields",s);if(e)a.header("filter_type",e);const r=await a.send();const o=await r.json();return o}async getFilter(e,t){const s=t?.fields?.length?t?.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/filters/${e}`,"GET").header("Client-Agent",i(this,c)).header("apikey",n);if(s)a.header("X-Fields",s);const r=await a.send();const o=await r.json();return o}async postFilters(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/filters`,"POST").header("Client-Agent",i(this,c)).header("apikey",n).body(e,"json");if(s)a.header("X-Fields",s);const r=await a.send();switch(r.statusCode){case 400:{throw new this.APIError(await r.json().then(o=>o),r.coreRes,e)}}return await r.json()}async postAsyncImageGenerate(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/generate/async`,"POST").header("Client-Agent",i(this,c)).header("apikey",n).body(e,"json");if(s)a.header("X-Fields",s);const r=await a.send();switch(r.statusCode){case 400:case 401:case 429:case 503:{throw new this.APIError(await r.json().then(o=>o),r.coreRes,e)}}return await r.json()}async postAsyncTextGenerate(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/generate/text/async`,"POST").header("Client-Agent",i(this,c)).header("apikey",n).body(e,"json");if(s)a.header("X-Fields",s);const r=await a.send();switch(r.statusCode){case 400:case 401:case 429:case 503:{throw new this.APIError(await r.json().then(o=>o),r.coreRes,e)}}return await r.json()}async postRating(e,t,s){const n=s?.fields?.length?s.fields.join(","):"";const a=m(this,k,b).call(this,s?.token);const r=(0,u.default)(`${i(this,f)}/generate/rate/${e}`,"POST").header("Client-Agent",i(this,c)).header("apikey",a).body(t,"json");if(n)r.header("X-Fields",n);const o=await r.send();switch(o.statusCode){case 400:case 401:case 429:{throw new this.APIError(await o.json().then(h=>h),o.coreRes,t)}}return await o.json()}async postImageGenerationPop(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/generate/pop`,"POST").header("Client-Agent",i(this,c)).header("apikey",n).body(e,"json");if(s)a.header("X-Fields",s);const r=await a.send();switch(r.statusCode){case 401:case 403:{throw new this.APIError(await r.json().then(o=>o),r.coreRes,e)}}return await r.json()}async postTextGenerationPop(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/generate/text/pop`,"POST").header("Client-Agent",i(this,c)).header("apikey",n).body(e,"json");if(s)a.header("X-Fields",s);const r=await a.send();switch(r.statusCode){case 401:case 403:{throw new this.APIError(await r.json().then(o=>o),r.coreRes,e)}}return await r.json()}async postImageGenerationSubmit(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/generate/submit`,"POST").header("Client-Agent",i(this,c)).header("apikey",n).body(e,"json");if(s)a.header("X-Fields",s);const r=await a.send();switch(r.statusCode){case 400:case 401:case 402:case 404:{throw new this.APIError(await r.json().then(o=>o),r.coreRes,e)}}return await r.json()}async postTextGenerationSubmit(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/generate/text/submit`,"POST").header("Client-Agent",i(this,c)).header("apikey",n).body(e,"json");if(s)a.header("X-Fields",s);const r=await a.send();switch(r.statusCode){case 400:case 401:case 402:case 404:{throw new this.APIError(await r.json().then(o=>o),r.coreRes,e)}}return await r.json()}async postAsyncInterrogate(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/interrogate/async`,"POST").header("Client-Agent",i(this,c)).header("apikey",n).body(e,"json");if(s)a.header("X-Fields",s);const r=await a.send();switch(r.statusCode){case 400:case 401:case 429:case 503:{throw new this.APIError(await r.json().then(o=>o),r.coreRes,e)}}return await r.json()}async postInterrogationPop(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/interrogate/pop`,"POST").header("Client-Agent",i(this,c)).header("apikey",n).body(e,"json");if(s)a.header("X-Fields",s);const r=await a.send();switch(r.statusCode){case 400:case 401:case 403:{throw new this.APIError(await r.json().then(o=>o),r.coreRes,e)}}return await r.json()}async postInterrogationSubmit(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/interrogate/submit`,"POST").header("Client-Agent",i(this,c)).header("apikey",n).body(e,"json");if(s)a.header("X-Fields",s);const r=await a.send();switch(r.statusCode){case 400:case 401:case 403:case 404:{throw new this.APIError(await r.json().then(o=>o),r.coreRes,e)}}return await r.json()}async postKudosTransfer(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/kudos/transfer`,"POST").header("Client-Agent",i(this,c)).header("apikey",n).body(e,"json");if(s)a.header("X-Fields",s);const r=await a.send();switch(r.statusCode){case 400:case 401:{throw new this.APIError(await r.json().then(o=>o),r.coreRes,e)}}return await r.json()}async postKoboldTransfer(e,t,s){const n=m(this,k,b).call(this,s?.token);const a=(0,u.default)(`${i(this,f)}/kudos/kai/${e}`,"POST").header("Client-Agent",i(this,c)).header("apikey",n).body(t,"json");const r=await a.send();switch(r.statusCode){case 400:case 401:{throw new this.APIError(await r.json().then(o=>o),r.coreRes,t)}}return null}async createTeam(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/teams`,"POST").header("Client-Agent",i(this,c)).header("apikey",n).body(e,"json");if(s)a.header("X-Fields",s);const r=await a.send();switch(r.statusCode){case 400:case 401:case 403:{throw new this.APIError(await r.json().then(o=>o),r.coreRes,e)}}return await r.json()}async putStatusModes(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/status/modes`,"PUT").header("Client-Agent",i(this,c)).header("apikey",n).body(e,"json");if(s)a.header("X-Fields",s);const r=await a.send();switch(r.statusCode){case 401:case 402:{throw new this.APIError(await r.json().then(o=>o),r.coreRes,e)}}return await r.json()}async updateUser(e,t,s){const n=s?.fields?.length?s.fields.join(","):"";const a=m(this,k,b).call(this,s?.token);const r=(0,u.default)(`${i(this,f)}/users/${t}`,"PUT").header("Client-Agent",i(this,c)).header("apikey",a).body(e,"json");if(n)r.header("X-Fields",n);const o=await r.send();switch(o.statusCode){case 400:case 401:case 402:case 404:{throw new this.APIError(await o.json().then(h=>h),o.coreRes,e)}}if(i(this,g).users)i(this,p).users?.delete(t.toString()+n);return await o.json()}async updateWorker(e,t,s){const n=s?.fields?.length?s.fields.join(","):"";const a=m(this,k,b).call(this,s?.token);const r=(0,u.default)(`${i(this,f)}/workers/${t}`,"PUT").header("Client-Agent",i(this,c)).header("apikey",a).body(e,"json");if(n)r.header("X-Fields",n);const o=await r.send();switch(o.statusCode){case 400:case 401:case 402:case 404:{throw new this.APIError(await o.json().then(h=>h),o.coreRes,e)}}if(i(this,g).workers)i(this,p).workers?.delete(t);return await o.json()}async updateTeam(e,t,s){const n=s?.fields?.length?s.fields.join(","):"";const a=m(this,k,b).call(this,s?.token);const r=(0,u.default)(`${i(this,f)}/teams/${t}`,"PATCH").header("Client-Agent",i(this,c)).header("apikey",a).body(e,"json");if(n)r.header("X-Fields",n);const o=await r.send();switch(o.statusCode){case 400:case 401:case 403:case 404:{throw new this.APIError(await o.json().then(h=>h),o.coreRes,e)}}if(i(this,g).teams)i(this,p).teams?.delete(t);return await o.json()}async addFilter(e,t,s){const n=s?.fields?.length?s.fields.join(","):"";const a=m(this,k,b).call(this,s?.token);const r=(0,u.default)(`${i(this,f)}/filters`,"PUT").header("Client-Agent",i(this,c)).header("apikey",a).body(e,"json");if(n)r.header("X-Fields",n);const o=await r.send();switch(o.statusCode){case 400:case 401:{throw new this.APIError(await o.json().then(h=>h),o.coreRes,e)}}return await o.json()}async updateFilter(e,t,s){const n=s?.fields?.length?s.fields.join(","):"";const a=m(this,k,b).call(this,s?.token);const r=(0,u.default)(`${i(this,f)}/filters/${t}`,"PATCH").header("Client-Agent",i(this,c)).header("apikey",a).body(e,"json");if(n)r.header("X-Fields",n);const o=await r.send();switch(o.statusCode){case 400:case 401:case 404:{throw new this.APIError(await o.json().then(h=>h),o.coreRes,e)}}return await o.json()}async deleteImageGenerationRequest(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=(0,u.default)(`${i(this,f)}/generate/status/${e}`,"DELETE").header("Client-Agent",i(this,c));if(s)n.header("X-Fields",s);const a=await n.send();switch(a.statusCode){case 404:{throw new this.APIError(await a.json().then(o=>o),a.coreRes)}}const r=await a.json();if(i(this,g).generations_status)i(this,p).generations_status?.set(e+s,r);return r}async deleteTextGenerationRequest(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=(0,u.default)(`${i(this,f)}/generate/text/status/${e}`,"DELETE").header("Client-Agent",i(this,c));if(s)n.header("X-Fields",s);const a=await n.send();switch(a.statusCode){case 404:{throw new this.APIError(await a.json().then(o=>o),a.coreRes)}}const r=await a.json();if(i(this,g).generations_status)i(this,p).generations_status?.set(e+s,r);return r}async deleteInterrogationRequest(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=(0,u.default)(`${i(this,f)}/interrogate/status/${e}`,"DELETE").header("Client-Agent",i(this,c));if(s)n.header("X-Fields",s);const a=await n.send();switch(a.statusCode){case 404:{throw new this.APIError(await a.json().then(o=>o),a.coreRes)}}const r=await a.json();if(i(this,g).interrogations_status)i(this,p).interrogations_status?.set(e+s,r);return r}async deleteWorker(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/workers/${e}`,"DELETE").header("Client-Agent",i(this,c)).header("apikey",n);if(s)a.header("X-Fields",s);const r=await a.send();switch(r.statusCode){case 401:case 402:case 404:{throw new this.APIError(await r.json().then(h=>h),r.coreRes)}}const o=await r.json();i(this,p).workers?.delete(e);return o}async deleteTeam(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/teams/${e}`,"DELETE").header("Client-Agent",i(this,c)).header("apikey",n);if(s)a.header("X-Fields",s);const r=await a.send();switch(r.statusCode){case 401:case 403:case 404:{throw new this.APIError(await r.json().then(h=>h),r.coreRes)}}const o=await r.json();i(this,p).teams?.delete(e+s);return o}async deleteIPTimeout(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/operations/ipaddr`,"DELETE").header("Client-Agent",i(this,c)).header("apikey",n).body(e,"json");if(s)a.header("X-Fields",s);const r=await a.send();switch(r.statusCode){case 400:case 401:case 403:{throw new this.APIError(await r.json().then(h=>h),r.coreRes,e)}}const o=await r.json();return o}async deleteFilter(e,t){const s=t?.fields?.length?t.fields.join(","):"";const n=m(this,k,b).call(this,t?.token);const a=(0,u.default)(`${i(this,f)}/filters/${e}`,"DELETE").header("Client-Agent",i(this,c)).header("apikey",n);if(s)a.header("X-Fields",s);const r=await a.send();switch(r.statusCode){case 400:case 401:case 403:{throw new this.APIError(await r.json().then(h=>h),r.coreRes)}}const o=await r.json();return o}};var S=I;P(S,"AIHorde");F=new WeakMap;g=new WeakMap;p=new WeakMap;f=new WeakMap;c=new WeakMap;k=new WeakSet;b=P(function(e){return e||i(this,F)||"0000000000"},"#getToken");j=new WeakSet;C=P(async function(e,t,s){const n=s?.fields?.join(",")||s?.fields_string;const a=m(this,k,b).call(this,s?.token);const r=(0,u.default)(`${i(this,f)}${e}`,t).header("Client-Agent",i(this,c));if(s?.token)r.header("apikey",a);if(s?.body)r.body(s.body,"json");if(n)r.header("X-Fields",n);const o=await r.send();return{result:o,fields_string:n}},"#request");T(S,"ModelGenerationInputStableSamplers",X);T(S,"SourceImageProcessingTypes",N);T(S,"ModelGenerationInputPostProcessingTypes",L);T(S,"ModelGenerationInputControlTypes",B);T(S,"ModelInterrogationFormTypes",W);T(S,"HordeAsyncRequestStates",K);T(S,"APIError",U);var V;(function(r){r[r["FLAWLESS"]=0]="FLAWLESS";r[r["LITTLE_FLAWS"]=1]="LITTLE_FLAWS";r[r["SOME_FLAWS"]=2]="SOME_FLAWS";r[r["OBVIOUS_FLAWS"]=3]="OBVIOUS_FLAWS";r[r["HARMFUL_FLAWS"]=4]="HARMFUL_FLAWS";r[r["GARBAGE"]=5]="GARBAGE"})(V||(V={}));var v,E,R,$,he;var z=class{constructor(e){y(this,$);T(this,"RatingArtifactsRatings",z.RatingArtifactsRatings);T(this,"APIError",S.APIError);y(this,v,void 0);y(this,E,void 0);y(this,R,void 0);A(this,v,e.default_token);A(this,E,e.api_route??"https://ratings.aihorde.net/api/v1");A(this,R,e.client_agent)}async getDatasets(e){const t=e?.fields?.length?e?.fields.join(","):"";const s=(0,u.default)(`${i(this,E)}/datasets`,"GET").header("Client-Agent",i(this,R));if(t)s.header("X-Fields",t);const n=await s.send();const a=await n.json();return a}async getTeams(e){const t=e?.fields?.length?e?.fields.join(","):"";const s=(0,u.default)(`${i(this,E)}/teams`,"GET").header("Client-Agent",i(this,R));if(t)s.header("X-Fields",t);const n=await s.send();const a=await n.json();return a}async getNewRating(e,t){const s=t?.fields?.length?t?.fields.join(","):"";const n=m(this,$,he).call(this,t?.token);const a=(0,u.default)(`${i(this,E)}/rating/new${e?.dataset_id?`/${e.dataset_id}${e?.model_name?`/${e.model_name}`:""}`:""}`,"GET").header("Client-Agent",i(this,R)).header("apikey",n);if(s)a.header("X-Fields",s);const r=await a.send();switch(r.statusCode){case 400:case 401:case 403:case 500:{throw new this.APIError(await r.json().then(h=>h),r.coreRes,{})}}const o=await r.json();return o}async postRating(e,t,s){const n=s?.fields?.length?s?.fields.join(","):"";const a=m(this,$,he).call(this,s?.token);const r=(0,u.default)(`${i(this,E)}/rating/${e}`,"POST").header("Client-Agent",i(this,R)).header("apikey",a).body(t,"json");if(n)r.header("X-Fields",n);const o=await r.send();switch(o.statusCode){case 400:case 401:case 403:{throw new this.APIError(await o.json().then(h=>h),o.coreRes,t)}}return await o.json()}};var D=z;P(D,"AIHordeRatings");v=new WeakMap;E=new WeakMap;R=new WeakMap;$=new WeakSet;he=P(function(e){return e||i(this,v)||"0000000000"},"#getToken");T(D,"RatingArtifactsRatings",V);T(D,"APIError",U);module.exports=S;
