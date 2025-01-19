function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=globalThis.parcelRequire94c2,r=t.register;r("2Fv9o",function(r,n){Object.defineProperty(r.exports,"__esModule",{value:!0,configurable:!0}),e(r.exports,"FileSystemDirectoryHandle",()=>s),e(r.exports,"default",()=>y);var a=t("bAgeV");let{GONE:i,MOD_ERR:l}=t("jG9Jm").errors,o=Symbol("adapter");class s extends a.default{[o];constructor(e){super(e),this[o]=e}async getDirectoryHandle(e,t={}){if(""===e)throw TypeError("Name can't be an empty string.");if("."===e||".."===e||e.includes("/"))throw TypeError("Name contains invalid characters.");return t.create=!!t.create,new s(await this[o].getDirectoryHandle(e,t))}async *entries(){let{FileSystemFileHandle:e}=await t("iWdfd");for await(let[t,r]of this[o].entries())yield[r.name,"file"===r.kind?new e(r):new s(r)]}async *getEntries(){let{FileSystemFileHandle:e}=await t("iWdfd");for await(let t of(console.warn("deprecated, use .entries() instead"),this[o].entries()))yield"file"===t.kind?new e(t):new s(t)}async getFileHandle(e,r={}){let{FileSystemFileHandle:n}=await t("iWdfd");if(""===e)throw TypeError("Name can't be an empty string.");if("."===e||".."===e||e.includes("/"))throw TypeError("Name contains invalid characters.");return r.create=!!r.create,new n(await this[o].getFileHandle(e,r))}async removeEntry(e,t={}){if(""===e)throw TypeError("Name can't be an empty string.");if("."===e||".."===e||e.includes("/"))throw TypeError("Name contains invalid characters.");return t.recursive=!!t.recursive,this[o].removeEntry(e,t)}async resolve(e){if(await e.isSameEntry(this))return[];let t=[{handle:this,path:[]}];for(;t.length;){let{handle:r,path:n}=t.pop();for await(let a of r.values()){if(await a.isSameEntry(e))return[...n,a.name];"directory"===a.kind&&t.push({handle:a,path:[...n,a.name]})}}return null}async *keys(){for await(let[e]of this[o].entries())yield e}async *values(){for await(let[e,t]of this)yield t}[Symbol.asyncIterator](){return this.entries()}}if(Object.defineProperty(s.prototype,Symbol.toStringTag,{value:"FileSystemDirectoryHandle",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(s.prototype,{getDirectoryHandle:{enumerable:!0},entries:{enumerable:!0},getFileHandle:{enumerable:!0},removeEntry:{enumerable:!0}}),globalThis.FileSystemDirectoryHandle){let e=globalThis.FileSystemDirectoryHandle.prototype;async function c(e){let t=await navigator.storage.getDirectory();if(null===await t.resolve(e))throw new DOMException(...i)}e.resolve=async function(e){if(await e.isSameEntry(this))return[];let t=[{handle:this,path:[]}];for(;t.length;){let{handle:r,path:n}=t.pop();for await(let a of r.values()){if(await a.isSameEntry(e))return[...n,a.name];"directory"===a.kind&&t.push({handle:a,path:[...n,a.name]})}}return null};let t=e.entries;e.entries=async function*(){await c(this),yield*t.call(this)},e[Symbol.asyncIterator]=async function*(){yield*this.entries()};let r=e.removeEntry;e.removeEntry=async function(e,n={}){return r.call(this,e,n).catch(async e=>{if(e instanceof DOMException&&"UnknownError"===e.name&&!n.recursive&&!(await t.call(this).next()).done)throw new DOMException(...l);throw e})}}var y=s}),r("iWdfd",function(e,r){var n=t("if9Ie");e.exports=n("6hwdd").then(()=>t("ggMY5"))}),r("if9Ie",function(e,r){e.exports=function(e){return import(t("b5jdx").resolve(e))}}),r("b5jdx",function(t,r){e(t.exports,"register",()=>n,e=>n=e),e(t.exports,"resolve",()=>a,e=>a=e);var n,a,i=new Map;n=function(e,t){for(var r=0;r<t.length-1;r+=2)i.set(t[r],{baseUrl:e,path:t[r+1]})},a=function(e){var t=i.get(e);if(null==t)throw Error("Could not resolve bundle with id "+e);return new URL(t.path,t.baseUrl).toString()}});
//# sourceMappingURL=FileSystemDirectoryHandle.46b5624a.js.map
