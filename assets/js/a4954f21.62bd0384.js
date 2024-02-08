"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[672],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4296:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(4137));const r={sidebar_position:1},i="Design philosophy",s={unversionedId:"major-concepts/design-philosophy",id:"major-concepts/design-philosophy",title:"Design philosophy",description:"Transparency",source:"@site/docs/major-concepts/design-philosophy.md",sourceDirName:"major-concepts",slug:"/major-concepts/design-philosophy",permalink:"/major-concepts/design-philosophy",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/ief/docs/major-concepts/design-philosophy.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Major Concepts",permalink:"/major-concepts/"},next:{title:"Glossary",permalink:"/major-concepts/glossary"}},l={},p=[{value:"Transparency",id:"transparency",level:2},{value:"Verifiability",id:"verifiability",level:2},{value:"Modularity",id:"modularity",level:2},{value:"Neutrality",id:"neutrality",level:2},{value:"Where to go next",id:"where-to-go-next",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"design-philosophy"},"Design philosophy"),(0,o.kt)("h2",{id:"transparency"},"Transparency"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"manifest file")," is the lifeblood of Impact Framework. It defines all the context for an environmental impact calculation, defining the architecture of an application, the observation period, the pipeline of calculations and transformations to execute, and the environmental impacts to track. This document can then be ",(0,o.kt)("em",{parentName:"p"},"executed")," to generate impact values. This gives unparalleled transparency to an environmental audit, all in a standard, easy to read format that anyone can read or re-execute."),(0,o.kt)("h2",{id:"verifiability"},"Verifiability"),(0,o.kt)("p",null,"An Impact Framework manifest file is powerful because anyone can re-execute it and verify an organization's impact calculation. You can even experiment by swapping out different plugins. The critical concept is that ",(0,o.kt)("em",{parentName:"p"},"everything")," you need to calculate an impact is provided in the manifest file and ",(0,o.kt)("em",{parentName:"p"},"anyone")," can re-run a calculation with the manifest file and the lightweight Impact Framework command line tool."),(0,o.kt)("h1",{id:"flexibility"},"Flexibility"),(0,o.kt)("p",null,"We aim to bake the minimum of constraints into the Imapct Framework, balancing the helpers and standards that make plugins interoperable and consistent against freedom of expression and creativity. The real power of Impact Framework comes from the community. This includes the community of experts contributing to the design decisions and standards baked into the protocol and the community of plugin developers experimenting at the margins, and the organizations using Impact Framework to measure, report and mitigate their environmental imapct. "),(0,o.kt)("p",null,"Impact Framework can be a tool for transparent, verifiable environmental impact audits, but it can also be a platform for experimentation. Your manifest file is a foundation for forecasting into the future or exploring where you can tweak your stack to most effectively minimize your impact. Impact Framework can be a tool for research, hypothesis testing, R&D and business decision making as well as environemntal reporting. To realize this vision, we know we have to make Impact Framework as flexible as possible, imposing the absolute minimum of constraints in the underlying protocol, while also providing the necessary functionality and safeguards our users require."),(0,o.kt)("h2",{id:"modularity"},"Modularity"),(0,o.kt)("p",null,"Impact Framework is the minimal set of features that enable a manifest file to be processed according to some agreed principles. We provide a tool for processing manifest files and a set of standards and norms. This allows builders to create plugins that do some specific task, such as grabbing data from a particular cloud provider, or applying some calculation over some particular data."),(0,o.kt)("p",null,"Anyone can build a plugin and share them with the world, meaning Impact Framework development can be bottom-up and community driven. It also means that if you are not satisfied with how some calculation was done, you can easily fork it and replace it with your own."),(0,o.kt)("p",null,"What we provide is a minimal set of rules and guardrails for model builders to conform to to ensure compatibility with Impact Framework."),(0,o.kt)("h2",{id:"neutrality"},"Neutrality"),(0,o.kt)("p",null,"Impact Framework aims to support maximally decentralized plugin development. We want anyone to be able to build plugins and use them to calculate their environmental impacts. We do not want to gatekeep what people can measure and monitor - we want to encourage people to build freely and experiment on Impact Framework rails! "),(0,o.kt)("p",null,"At the same time, we want to provide the helpers and guardrails that make impact calculations as friction free as possible. This means we focus on providing the minimal ",(0,o.kt)("em",{parentName:"p"},"protocol")," required to support community plugin development and make it as safe as possible from unit errors and other footguns. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"We want to see the universe of Impact Framework plugins grow organically and permissionlessly in ways we can't even imagine today!"))),(0,o.kt)("p",null,"To this end, what we are really building is a protocol. Impact Framework is just a Typescript implementation of the protocol. The protocol itself is a set of fundamental principles that define how a manifest file should be processed, such that any implementation in any language will yield the same result from a given manifest file. "),(0,o.kt)("p",null,"The Impact Protocol is the result of countless discussions, experiments, conversations with industry partners, academics, researchers and developers, and represents a community consensus for how certain actions should be executed, for example, how should a series of observations be aggregated, what standard units should be used, how should a manifest file be structured, etc."),(0,o.kt)("p",null,"This means we can be neutral about what can be built with IF while also providing a set of canonical processes and standards."),(0,o.kt)("h2",{id:"where-to-go-next"},"Where to go next"),(0,o.kt)("p",null,"This page has outlined the design philosophies that guide Impact Framework development. "),(0,o.kt)("p",null,"Explore the other pages in this section to see how these principles have been applied to specific Impact Framework features, or head to our ",(0,o.kt)("a",{parentName:"p",href:"../users/"},"user documentation")," to get started running Impact Framework for yourself."))}m.isMDXComponent=!0}}]);