"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[375],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),m=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=m(n),c=i,h=d["".concat(r,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var r in t)hasOwnProperty.call(t,r)&&(p[r]=t[r]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(7462),i=(n(7294),n(4137));const o={},l="Impact Engine",p={unversionedId:"specification/impact-engine",id:"specification/impact-engine",title:"Impact Engine",description:"Introduction",source:"@site/docs/04-specification/impact-engine.md",sourceDirName:"04-specification",slug:"/specification/impact-engine",permalink:"/specification/impact-engine",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/ief/docs/04-specification/impact-engine.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Graph",permalink:"/specification/graph"},next:{title:"Impact Framework",permalink:"/specification/impact-framework"}},r={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Design Ideology",id:"design-ideology",level:2},{value:"Lifecycle",id:"lifecycle",level:2},{value:"Expand Shorthand",id:"expand-shorthand",level:3},{value:"Auto Children",id:"auto-children",level:3},{value:"Mirror Pipeline To Component",id:"mirror-pipeline-to-component",level:3},{value:"Namespace Config",id:"namespace-config",level:2},{value:"Initialize Models",id:"initialize-models",level:2},{value:"Compute",id:"compute",level:2},{value:"Aggregate (Not yet implemented)",id:"aggregate-not-yet-implemented",level:2},{value:"Export (TBD)",id:"export-tbd",level:2},{value:"Verbosity (not yet implemented)",id:"verbosity-not-yet-implemented",level:2}],s={toc:m};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"impact-engine"},"Impact Engine"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"impact-engine")," is a command line tool that computes ",(0,i.kt)("a",{parentName:"p",href:"/specification/manifest-file"},"Manifest File")," files. "),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"impact \n-impl [path to the input impl file]\n-ompl [path to the output impl file]\n-format [yaml|csv] (not yet implemented)\n-verbose (not yet implemented)\n-help  (not yet implemented)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"impl"),": path to an input IMPL file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ompl"),": path to the output IMPL file where the results as saved, if none is provided it prints to stdout."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"format"),": the output file format. default to yaml but if csv is specified then it formats the outputs as a csv file for loading into another program."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verbose"),": how much information to output about the calculation to aid investigation and debugging."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"help"),": prints out the above help file.")),(0,i.kt)("p",null,"To use Impact, you must first configure an impl. Then, you can simply pass the path to the impl to Impact on the command line. You can also pass a path where you would like to save the output file to. For example, the following command, run from the project root, loads the ",(0,i.kt)("inlineCode",{parentName:"p"},"mst-eshoppen.yml")," impl file from the examples directory, executes all the models defined in the impl, and saves the output to ",(0,i.kt)("inlineCode",{parentName:"p"},"examples/ompls/e-shoppen.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npx ts-node impact-engine.ts --impl ./examples/impls/msft-eshoppen.yaml --ompl ./examples/ompls/e-shoppen.yml\n")),(0,i.kt)("h2",{id:"design-ideology"},"Design Ideology"),(0,i.kt)("p",null,"The state of an impact computation is stored in a ",(0,i.kt)("inlineCode",{parentName:"p"},"graph")," object."),(0,i.kt)("p",null,"There are a series of functions defined in a ",(0,i.kt)("a",{parentName:"p",href:"#Lifecycle"},"Lifecycle")," section which the ",(0,i.kt)("inlineCode",{parentName:"p"},"graph")," object as input and mutate it somehow."),(0,i.kt)("p",null,"At the end a processed graph is serialized back out to the end user for them to use the data."),(0,i.kt)("h2",{id:"lifecycle"},"Lifecycle"),(0,i.kt)("p",null,"Every ",(0,i.kt)("inlineCode",{parentName:"p"},"impact-engine")," execution goes through a lifecycle, a set of distinct steps which process the graph in stages."),(0,i.kt)("p",null,"Currenty the lifecycle is fixed but in the future this maybe be configurable via plugins."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mermaid"},"flowchart TB\nExpandShorthand --\x3e NamespaceConfig --\x3e InitializeModels --\x3e Compute --\x3e Aggregate --\x3e Export\n")),(0,i.kt)("h3",{id:"expand-shorthand"},"Expand Shorthand"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There is a short-hand way of defining an IMPL file and a long-hand way of defining it."),(0,i.kt)("li",{parentName:"ul"},"The first stage of the lifecycle is to expand out the shorthand format to make the graph object easier to parse for future stages in the lifecycle of a computation."),(0,i.kt)("li",{parentName:"ul"},"The first stage is to analyze the IMPL structure and if you can convert the short hand components over to the long hand form the graph object is restructured.")),(0,i.kt)("h3",{id:"auto-children"},"Auto Children"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Some nodes for brevity leave out the ",(0,i.kt)("inlineCode",{parentName:"li"},"children")," node if it's obvious all the other parameters of that node are ",(0,i.kt)("inlineCode",{parentName:"li"},"children"),"."),(0,i.kt)("li",{parentName:"ul"},"Pseudo Code: If there is no parameter called ",(0,i.kt)("inlineCode",{parentName:"li"},"children"),", add a parameter called ",(0,i.kt)("inlineCode",{parentName:"li"},"children")," and add all the current params as children of that parameter.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Shorthand Notation:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"graph:\n  grouping-node-1:\n    grouping-node-2:\n      component-node-1:\n        pipeline: ~\n        config: ~\n        inputs: ~\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Longhand Notation:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"graph:\n  children:\n    grouping-node-1:\n      children:\n        grouping-node-2:\n          children:\n            component-node-1:\n              pipeline: ~\n              config: ~\n              inputs: ~\n")),(0,i.kt)("h3",{id:"mirror-pipeline-to-component"},"Mirror Pipeline To Component"),(0,i.kt)("p",null,"For simplicity we may express a common pipeline in a higher grouping node rather than express it in every component node, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"graph:\n  grouping-node-1:\n    pipeline:\n      - model-1\n      - model-2\n    grouping-node-2:\n      component-node-1:\n        pipeline: ~\n        config: ~\n        inputs: ~\n      component-node-2:\n        config: ~\n        inputs: ~        \n")),(0,i.kt)("p",null,"If a component doesn't have a pipeline defined, then copy the pipeline from the higher scope down into this component, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"graph:\n  grouping-node-1:\n    pipeline:\n      - model-1\n      - model-2\n    grouping-node-2:\n      component-node-1:\n        pipeline: ~\n        config: ~\n        inputs: ~\n      component-node-2:\n        pipeline:\n          - model-1\n          - model-2      \n        config: ~\n        inputs: ~        \n")),(0,i.kt)("p",null,"In the above example ",(0,i.kt)("inlineCode",{parentName:"p"},"component-node-2")," didn't have a pipeline defined so used the pipeline defined on the ",(0,i.kt)("inlineCode",{parentName:"p"},"grouping-node-1"),"."),(0,i.kt)("h2",{id:"namespace-config"},"Namespace Config"),(0,i.kt)("p",null,"All configuration on all levels of the graph is both merged into an input and also namespaced so that the config for different models do not conflict with each other."),(0,i.kt)("p",null,"Take this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"graph:\n  config:\n    model-1:\n      key-1: value-1\n      key-2: value-2\n  children:\n    grouping-node-1:\n      children:\n        grouping-node-2:\n          config:\n            model-1:\n              key-2: value-2a\n              key-3: value-3        \n          children:\n            component-node-1:\n              pipeline: ~\n              config: ~\n              inputs: ~\n")),(0,i.kt)("p",null,"After the above lifecycle step the graph object turns into this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"graph:\n  config:\n    model-1:\n      key-1: value-1\n      key-2: value-2\n  children:\n    grouping-node-1:\n      children:\n        grouping-node-2:\n          config:\n            model-1:\n              key-2: value-2a\n              key-3: value-3        \n          children:\n            component-node-1:\n              pipeline: ~\n              config: ~\n              inputs:\n                - timestamp: xxxxx\n                  key-1::model-1: value-1\n                  key-2::model-1: value-2a\n                  key-3::model-1: value-3\n")),(0,i.kt)("h2",{id:"initialize-models"},"Initialize Models"),(0,i.kt)("p",null,"This step in the lifecycle loads any configured models, initializes them and makes them available from a global service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},".\n.\ninitialize:\n  models:\n    - name: <model-name>\n      kind: [builtin|plugin|shell]\n      path: <path-model>\n      config:\n           <key>: <value>   \n.\n.\ngraph: ~\n")),(0,i.kt)("p",null,"For every model defined in the initialize -> models configuration."),(0,i.kt)("p",null,"If the model is ",(0,i.kt)("inlineCode",{parentName:"p"},"built-in")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"import it"),(0,i.kt)("li",{parentName:"ul"},"create an instance of it"),(0,i.kt)("li",{parentName:"ul"},"call ",(0,i.kt)("inlineCode",{parentName:"li"},"configure")," with any provided config.")),(0,i.kt)("p",null,"If the model is a ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"dynamically load it from the path provided"),(0,i.kt)("li",{parentName:"ul"},"create an instance of it"),(0,i.kt)("li",{parentName:"ul"},"call ",(0,i.kt)("inlineCode",{parentName:"li"},"configure")," with any provided config.")),(0,i.kt)("p",null,"If the model is a ",(0,i.kt)("inlineCode",{parentName:"p"},"shell")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create an instance of ",(0,i.kt)("inlineCode",{parentName:"li"},"ShellCommandImp")," which allows you to interact with the shell command as if it was any other type of Imp. NOTE: This launches a sub-processes which you have to communicate with using STDIN/OUT.")),(0,i.kt)("p",null,"Make every model available from a global ",(0,i.kt)("inlineCode",{parentName:"p"},"ModelService")," object which returns an instance of the model for a given name."),(0,i.kt)("h2",{id:"compute"},"Compute"),(0,i.kt)("p",null,"After all these steps in the lifecycle every component node should have all the information self-contained to compute itself."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Loop through the nodes in the tree."),(0,i.kt)("li",{parentName:"ul"},"For every component node:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For every model in the pipeline for the component code:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pass the inputs through the model."),(0,i.kt)("li",{parentName:"ul"},"Store the results as sibling to ",(0,i.kt)("inlineCode",{parentName:"li"},"inputs")," called ",(0,i.kt)("inlineCode",{parentName:"li"},"outputs")," on the same component node.")))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Each input input is for a time and duration, and each output impact is for the same time and duration. We should link an impact to the exact input used to generate it.")),(0,i.kt)("p",null,"Represented as ",(0,i.kt)("a",{parentName:"p",href:"/specification/manifest-file"},"Manifest File"),", the calculation phase would compute every component node in the tree with ",(0,i.kt)("strong",{parentName:"p"},"inputs")," like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"component:\n  inputs: \n      - timestamp: 2023-07-06T00:00\n        duration: 15 \n        cpu-util: 33\n      - timestamp: 2023-07-06T00:05\n        duration: 5\n        cpu-util: 23\n      - timestamp: 2023-07-06T00:05\n        duration: 5\n        cpu-util: 11\n")),(0,i.kt)("p",null,"To components with ",(0,i.kt)("strong",{parentName:"p"},"outputs"),", like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"component:\n  outputs:\n      - timestamp: 2023-07-06T00:00\n        duration: 15 \n        energy: 23 mWh\n        cpu-util: 33\n      - timestamp: 2023-07-06T15:00\n        duration: 5\n        cpu-util: 23\n        energy: 20 mWh\n      - timestamp: 2023-07-06T20:00\n        duration: 5\n        cpu-util: 11\n        energy: 18 mWh  \n  inputs: \n      - timestamp: 2023-07-06T00:00\n        duration: 15 \n        cpu-util: 33\n      - timestamp: 2023-07-06T15:00\n        duration: 5\n        cpu-util: 23\n      - timestamp: 2023-07-06T20:00\n        duration: 5\n        cpu-util: 11\n")),(0,i.kt)("h2",{id:"aggregate-not-yet-implemented"},"Aggregate (Not yet implemented)"),(0,i.kt)("p",null,"Once all the component nodes have been computed the next step is to aggregate all the values up."),(0,i.kt)("admonition",{title:"Time Syncing",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This step only makes sense if the nodes have been time synced. That is to say, every impact timestamp and duration snaps to a globally defined grid. If that's true then aggregation is a simple matter, if it's not true then aggregation might not make a lot of sense. ")),(0,i.kt)("h2",{id:"export-tbd"},"Export (TBD)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is curently only possible to export data as an ",(0,i.kt)("inlineCode",{parentName:"p"},"ompl")," (output yaml). Other export options will be implemnted soon.")),(0,i.kt)("p",null,"The final step is to export the graph into a format that has been requested by the end user."),(0,i.kt)("p",null,"If a file param has been provided via ",(0,i.kt)("inlineCode",{parentName:"p"},"-ompl")," then we export as a YAML file format, for now this also means we'll be exporting the long hand notation of the IMPL files and not any shorthand. If no ",(0,i.kt)("inlineCode",{parentName:"p"},"-ompl")," was provided then we print the results to stdout."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Exporting as a CSV file only makes sense of the nodes have been time synced. That is to say, every impact timestamp and duration snaps to a globally defined grid. If that's true then exporting as a CSV is a simple matter, if it's not true then exporting as a CSV might not make a lot of sense. ")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"-format csv")," was specified then instead of outputting a YAML file we output a CSV file with each row being an impact metric for a node in the tree and each column being a specific timestamp and duration."),(0,i.kt)("h2",{id:"verbosity-not-yet-implemented"},"Verbosity (not yet implemented)"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"-verbose")," settings in impact exports a version of the graph after each step in the lifecycle process, so we can see how the lifecycle adjusts the graph and help debug any issues."),(0,i.kt)("p",null,"For example with the settings ",(0,i.kt)("inlineCode",{parentName:"p"},"-ompl path/to/my.yaml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-verbose")," these files might be output instead."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my.yaml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my.expand-shorthand.yaml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my.normalize-config.yaml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my.initialize-models.yaml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my.compute.yaml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my.aggregate.yaml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my.export.yaml"))))}u.isMDXComponent=!0}}]);