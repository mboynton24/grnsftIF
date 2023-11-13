"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Overview","href":"/overview","docId":"overview"},{"type":"link","label":"Background","href":"/background","docId":"background"},{"type":"link","label":"Terminology","href":"/Terminology","docId":"Terminology"},{"type":"category","label":"Specification","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Computation Pipeline","href":"/specification/computation-pipeline","docId":"specification/computation-pipeline"},{"type":"link","label":"Durations","href":"/specification/durations","docId":"specification/durations"},{"type":"link","label":"Granularity","href":"/specification/granularity","docId":"specification/granularity"},{"type":"link","label":"Graph","href":"/specification/graph","docId":"specification/graph"},{"type":"link","label":"Impact Engine","href":"/specification/impact-engine","docId":"specification/impact-engine"},{"type":"link","label":"Impact Framework","href":"/specification/impact-framework","docId":"specification/impact-framework"},{"type":"link","label":"Manifest File","href":"/specification/manifest-file","docId":"specification/manifest-file"},{"type":"link","label":"Model Pipeline","href":"/specification/model-pipeline","docId":"specification/model-pipeline"},{"type":"link","label":"Model Plugin Configuration","href":"/specification/model-plugin-config","docId":"specification/model-plugin-config"},{"type":"link","label":"Model Plugin","href":"/specification/model-plugin","docId":"specification/model-plugin"},{"type":"link","label":"Observations","href":"/specification/observations","docId":"specification/observations"}],"href":"/specification/"},{"type":"category","label":"Model Documentation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Boavizta","href":"/models/boavizta","docId":"models/boavizta"},{"type":"link","label":"Cloud Carbon Footprint","href":"/models/ccf","docId":"models/ccf"},{"type":"link","label":"Cloud Instance Metadata","href":"/models/cloud-instance-metadata","docId":"models/cloud-instance-metadata"},{"type":"link","label":"SCI-E (total energy)","href":"/models/sci-e","docId":"models/sci-e"},{"type":"link","label":"SCI-M: embodied carbon","href":"/models/sci-m","docId":"models/sci-m"},{"type":"link","label":"SCI-O (operational emissions)","href":"/models/sci-o","docId":"models/sci-o"},{"type":"link","label":"SCI (software carbon intensity)","href":"/models/sci","docId":"models/sci"},{"type":"link","label":"Shell-imp","href":"/models/shell","docId":"models/shell"},{"type":"link","label":"Teads\' AWS Estimation Model","href":"/models/teads-aws","docId":"models/teads-aws"},{"type":"link","label":"Teads\' CPU Estimation Model","href":"/models/teads-cpu","docId":"models/teads-cpu"},{"type":"link","label":"WattTime Grid Emissions Model","href":"/models/watt-time","docId":"models/watt-time"}],"href":"/models/"},{"type":"category","label":"Tutorials","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Building model plugins","href":"/tutorials/how-to-build-models","docId":"tutorials/how-to-build-models"},{"type":"link","label":"how-to-import-models","href":"/tutorials/how-to-import-models","docId":"tutorials/how-to-import-models"},{"type":"link","label":"Importing data from Azure","href":"/tutorials/how-to-use-azure-vm","docId":"tutorials/how-to-use-azure-vm"},{"type":"link","label":"IMPL writing guide","href":"/tutorials/how-to-write-impls","docId":"tutorials/how-to-write-impls"}],"href":"/tutorials/"}]},"docs":{"background":{"id":"background","title":"Background","description":"Discussion of the history and evolution of this project in the GSF.","sidebar":"tutorialSidebar"},"models/boavizta":{"id":"models/boavizta","title":"Boavizta","description":"Please note Boavizta is a community model, not part of the IF standard library. This means the IF core team are not closely monitoring these models to keep them up to date. You should do your own research before implementing them!","sidebar":"tutorialSidebar"},"models/ccf":{"id":"models/ccf","title":"Cloud Carbon Footprint","description":"Please note Boavizta is a community cmodel, not part of the IF standard library. This means the IF core team are not closely monitoring these models to keep them up to date. You should do your own research before implementing them!","sidebar":"tutorialSidebar"},"models/cloud-instance-metadata":{"id":"models/cloud-instance-metadata","title":"Cloud Instance Metadata","description":"This plugin allows you to determine an instance\'s physical processor and thermal design power based on its instance name.","sidebar":"tutorialSidebar"},"models/index":{"id":"models/index","title":"Model Documentation","description":"Here you can find documentation for individual model implementations. Each file contains an explanation of the model, its parameters and return values and examples of how to invoke the model in Typescript and from an impl.","sidebar":"tutorialSidebar"},"models/sci":{"id":"models/sci","title":"SCI (software carbon intensity)","description":"SCI is the final value the framework ultimately aims to return for some component or application. It represents the amount of carbon emitted per functional unit.","sidebar":"tutorialSidebar"},"models/sci-e":{"id":"models/sci-e","title":"SCI-E (total energy)","description":"sci-e is a model that simply sums up the contributions to a component\'s energy use. The model retunrs energy which is used as the input to the sci-o model that calculates operational emissions for the component.","sidebar":"tutorialSidebar"},"models/sci-m":{"id":"models/sci-m","title":"SCI-M: embodied carbon","description":"Software systems cause emissions through the hardware that they operate on, both through the energy that the physical hardware consumes and the emissions associated with manufacturing the hardware. Embodied carbon refers to the carbon emitted during the manufacture and eventual disposal of a component. It is added to the operational carbon (carbon emitted when a component is used) to give an overall SCI score.","sidebar":"tutorialSidebar"},"models/sci-o":{"id":"models/sci-o","title":"SCI-O (operational emissions)","description":"Operational emissions refer to the carbon generated by a component while it is in use. It is the product of the energy used by the component in kWh and the grid intensity in gCO2e/kWh. The operational emissions are added to the embodied emissions (calculated using sci-m) to provide an overall SCI score for the component.","sidebar":"tutorialSidebar"},"models/shell":{"id":"models/shell","title":"Shell-imp","description":"The shell-imp is a wrapper enabling models external to IEF to be executed as part of an IEF pipeline. For example, you might have a standalone model written in Python. shell-imp spawns a subprocess to execute that Python model in a dedicated shell and pipes the results back into IEF\'s Typescript process.","sidebar":"tutorialSidebar"},"models/teads-aws":{"id":"models/teads-aws","title":"Teads\' AWS Estimation Model","description":"Please note Teads-AWS is a community model, not part of the IF standard library. This means the IF core team are not closely monitoring these models to keep them up to date. You should do your own research before implementing them!","sidebar":"tutorialSidebar"},"models/teads-cpu":{"id":"models/teads-cpu","title":"Teads\' CPU Estimation Model","description":"Please note Teads-AWS is a community model, not part of the IF standard library. This means the IF core team are not closely monitoring these models to keep them up to date. You should do your own research before implementing them!","sidebar":"tutorialSidebar"},"models/watt-time":{"id":"models/watt-time","title":"WattTime Grid Emissions Model","description":"Please note Watt-time is a community model, not part of the IF standard library. This means the IF core team are not closely monitoring these models to keep them up to date. You should do your own research before implementing them!","sidebar":"tutorialSidebar"},"overview":{"id":"overview","title":"Overview","description":"Impact Framework (IF) aims to make the environmental impacts of software easier to calculate and share.","sidebar":"tutorialSidebar"},"specification/computation-pipeline":{"id":"specification/computation-pipeline","title":"Computation Pipeline","description":"Introduction","sidebar":"tutorialSidebar"},"specification/durations":{"id":"specification/durations","title":"Durations","description":"WARNING Much of the following material is not yet implemented in the alpha releae, but is on the roadmap for future releases.","sidebar":"tutorialSidebar"},"specification/granularity":{"id":"specification/granularity","title":"Granularity","description":"A Graph (graph) can be created that is very coarse-grained, a single top-level component, with a single input of long duration.","sidebar":"tutorialSidebar"},"specification/graph":{"id":"specification/graph","title":"Graph","description":"Introduction","sidebar":"tutorialSidebar"},"specification/impact-engine":{"id":"specification/impact-engine","title":"Impact Engine","description":"Introduction","sidebar":"tutorialSidebar"},"specification/impact-framework":{"id":"specification/impact-framework","title":"Impact Framework","description":"A Framework to Model, Measure, siMulate and Monitor the environmental impacts of software.","sidebar":"tutorialSidebar"},"specification/index":{"id":"specification/index","title":"Specification","description":"Here you will find the IF specification.","sidebar":"tutorialSidebar"},"specification/manifest-file":{"id":"specification/manifest-file","title":"Manifest File","description":"- An Impact Manifest is a file format based on yaml to represent a Graph, it\'s also sometimes called Impact YAML or IMPL.","sidebar":"tutorialSidebar"},"specification/model-pipeline":{"id":"specification/model-pipeline","title":"Model Pipeline","description":"Introduction","sidebar":"tutorialSidebar"},"specification/model-plugin":{"id":"specification/model-plugin","title":"Model Plugin","description":"Calculating outputs for every component in a Graph (graph) requires the use of an Impact Model (model) called through an Impact Model Plugin (model plugin).","sidebar":"tutorialSidebar"},"specification/model-plugin-config":{"id":"specification/model-plugin-config","title":"Model Plugin Configuration","description":"WARNING: this material is not fully implemented in the alpha release. It signals future upgrades on the roadmap for future releases.","sidebar":"tutorialSidebar"},"specification/observations":{"id":"specification/observations","title":"Observations","description":"Describes Observations in the context of a Graph.","sidebar":"tutorialSidebar"},"Terminology":{"id":"Terminology","title":"Terminology","description":"Impact","sidebar":"tutorialSidebar"},"tutorials/how-to-build-models":{"id":"tutorials/how-to-build-models","title":"Building model plugins","description":"The IF is designed to be as composable as possible. This means you can develop your own models and use them in a model pipeline.","sidebar":"tutorialSidebar"},"tutorials/how-to-import-models":{"id":"tutorials/how-to-import-models","title":"how-to-import-models","description":"Models are developed separately to the IF core. However, the IF core developers maintain a standard library of models that can be found in this Github repository. We also provide some implementations of popular community models, but we do notcommit to maintaining these as part of IF.","sidebar":"tutorialSidebar"},"tutorials/how-to-use-azure-vm":{"id":"tutorials/how-to-use-azure-vm","title":"Importing data from Azure","description":"The Azure importer model allows you to provide some basic details about an Azure virtual machine and automatically populate your impl with usage metrics that can then be passed along a model pipeline to calculate energy and carbon impacts.","sidebar":"tutorialSidebar"},"tutorials/how-to-write-impls":{"id":"tutorials/how-to-write-impls","title":"IMPL writing guide","description":"The Impact Framework receives all its configuration and input data in the form of a yaml file known as an impl (input-yaml).","sidebar":"tutorialSidebar"},"tutorials/index":{"id":"tutorials/index","title":"Tutorials","description":"Here you can find tutorials and walk through guides for how to achieve several fundamnetal Impact Framework tasks, such as creating an impl, choosing models and creating new plugins.","sidebar":"tutorialSidebar"}}}')}}]);