!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class i{constructor(e){this.project=e,this.title="",this.description="",this.dueDate=Date.now(),this.priority=""}titleInput(){const e=document.createElement("div"),t=document.createElement("label"),n=document.createElement("input");return t.innerHTML="Title",n.setAttribute("type","text"),n.onchange=e=>this.title=e.value,e.appendChild(t),e.appendChild(n),e}descriptionInput(){const e=document.createElement("div"),t=document.createElement("label"),n=document.createElement("textarea");return t.innerHTML="Description",n.onchange=e=>this.description=e.value,e.appendChild(t),e.appendChild(n),e}dueDateInput(){const e=document.createElement("div"),t=document.createElement("label"),n=document.createElement("input");return t.innerHTML="Due Date",n.setAttribute("type","date"),n.onchange=e=>this.dueDate=e.value,e.appendChild(t),e.appendChild(n),e}priorityInput(){const e=document.createElement("div"),t=document.createElement("label"),n=document.createElement("select");return t.innerHTML="Priority",n.onChange=e=>this.priority=e.value,["","Green","Yellow","Red"].forEach(e=>{let t=document.createElement(t);t.value=e,t.innerHTML=e,n.appendChild(t)}),e.appendChild(t),e.appendChild(n),e}submitButton(){const e=document.createElement("button");return e.innerHTML="Submit",e.onclick=()=>this.project.addTodo(this.title,this.description,this.dueDate,this.priority),e}render(){const e=document.createElement("div"),t=document.createElement("form");return t.appendChild(this.titleInput()),t.appendChild(this.descriptionInput()),t.appendChild(this.dueDateInput()),t.appendChild(this.priorityInput()),t.appendChild(this.submitButton()),e.appendChild(t),e}}class r{constructor(e,t,n,i){this.title=e,this.description=t,this.dueDate=n,this.priority=i,this.complete=!1}complete(){this.complete=!this.complete}}var o=class{constructor(e="Default",t=[]){this.todos=t}addTodo(){this.todos.push(new r)}};window.onload=function(){const e=new i(new o);document.getElementById("content").appendChild(e.render()),console.log("loaded")}}]);