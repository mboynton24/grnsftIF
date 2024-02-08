"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[960],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||s[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(4137));const i={},o="Command line tool",l={unversionedId:"reference/cli",id:"reference/cli",title:"Command line tool",description:"A core feature of the Impact Framework is the impact-engine command line tool (CLI). This is how you trigger Impact Framework to execute a certain manifest file.",source:"@site/docs/reference/cli.md",sourceDirName:"reference",slug:"/reference/cli",permalink:"/reference/cli",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/ief/docs/reference/cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reference",permalink:"/reference/"},next:{title:"Plugins",permalink:"/reference/plugins"}},p={},m=[{value:"<code>impact-engine</code>",id:"impact-engine",level:2},{value:"<code>--impl</code>",id:"--impl",level:2},{value:"<code>--ompl</code>",id:"--ompl",level:2}],c={toc:m};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command-line-tool"},"Command line tool"),(0,a.kt)("p",null,"A core feature of the Impact Framework is the ",(0,a.kt)("inlineCode",{parentName:"p"},"impact-engine")," command line tool (CLI). This is how you trigger Impact Framework to execute a certain manifest file. "),(0,a.kt)("p",null,"Let's take a look at the various commands exposed by ",(0,a.kt)("inlineCode",{parentName:"p"},"impact-engine"),"."),(0,a.kt)("h2",{id:"impact-engine"},(0,a.kt)("inlineCode",{parentName:"h2"},"impact-engine")),(0,a.kt)("p",null,"If you have globally installed our ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," npm package, you can invoke the CLI using the ",(0,a.kt)("inlineCode",{parentName:"p"},"impact-engine")," command directly in your terminal. The ",(0,a.kt)("inlineCode",{parentName:"p"},"impact-engine")," command is an alias to ",(0,a.kt)("inlineCode",{parentName:"p"},"npx ts-node src/index.ts"),", which executes the Impact Framework's ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.ts")," script and acts as the entry point for Impact Framework."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"impact-engine <args>")),(0,a.kt)("h2",{id:"--impl"},(0,a.kt)("inlineCode",{parentName:"h2"},"--impl")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"--impl")," flag is the only required flag and tells ",(0,a.kt)("inlineCode",{parentName:"p"},"impact-engine")," where to find the manifest file that you want to execute. This command expects to receive the path where your manifest file is saved, as shown in the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"impact-engine --impl examples/impls/my-manifest.yml\n")),(0,a.kt)("h2",{id:"--ompl"},(0,a.kt)("inlineCode",{parentName:"h2"},"--ompl")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"--ompl")," flag is optional and is used for defining a path to save your output data. If you provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ompl")," command with a path, your output data will be saved as a ",(0,a.kt)("inlineCode",{parentName:"p"},".yml")," file to disk. If you omit this command, your output data will be displayed in the terminal."),(0,a.kt)("p",null,"Here is an example of ",(0,a.kt)("inlineCode",{parentName:"p"},"--ompl")," being used to define a path:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"impact-engine --impl examples/impls/my-manifest.yml --ompl examples/ompls/my-outdata.yml\n")))}s.isMDXComponent=!0}}]);