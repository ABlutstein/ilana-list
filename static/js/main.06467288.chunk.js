(this["webpackJsonpilana-list"]=this["webpackJsonpilana-list"]||[]).push([[0],[,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(8),r=a.n(l),o=(a(15),a(9)),i=a(1),m=a(2),s=a(5),u=(a(7),function(e){var t=e.addTask,a={id:null,name:"",completed:""},l=Object(n.useState)(a),r=Object(i.a)(l,2),o=r[0],u=r[1];return c.a.createElement("form",{className:"form-inLine",align:"center",onSubmit:function(e){e.preventDefault(),o.name&&(t(o),u(a))}},c.a.createElement("label",{className:"sub-head"}),c.a.createElement("input",{type:"text",className:"textEnter",name:"name",placeholder:"Enter your task here",value:o.name,onChange:function(e){var t=e.currentTarget,a=t.name,n=t.value;u(Object(s.a)({},o,Object(m.a)({},a,n)))}}),c.a.createElement("button",{className:"button1"},"Add new task"))}),d=function(e){var t=e.updateTask,a=e.setEditing,l=e.currentTask,r=Object(n.useState)(l),o=Object(i.a)(r,2),u=o[0],d=o[1];Object(n.useEffect)((function(){d(l)}),[l]);return c.a.createElement("form",{className:"form-inLine",align:"center",onSubmit:function(e){e.preventDefault(),u.name&&t(u,u)}},c.a.createElement("label",{className:"sub-head"}),c.a.createElement("input",{type:"text",className:"updateEnter",placeholder:"Edit your task here",name:"name",value:u.name,onChange:function(e){var t=e.target,a=t.name,n=t.value;d(Object(s.a)({},u,Object(m.a)({},a,n)))}}),c.a.createElement("button",{className:"button1"},"Update task"),c.a.createElement("button",{className:"button1",onClick:function(){return a(!1)}},"Cancel"))},E=(a(16),function(e){var t=e.id,a=e.deleteTask,n=e.editRow,l=e.tasks,r=e.handleChange;return c.a.createElement("table",{className:"table-1"},c.a.createElement("thead",{align:"center"},c.a.createElement("tr",null,c.a.createElement("th",{className:"completeTab",scope:"col"},"Completed"),c.a.createElement("th",{className:"taskTab",scope:"col"},"Task"),c.a.createElement("th",{className:"actionsTab",scope:"col"},"Actions"))),c.a.createElement("tbody",{align:"center"},l.length>0?l.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",{className:"align-middle"},c.a.createElement("input",{className:"tickBox",type:"checkbox",defaultChecked:e.completed,setEditing:!1,"data-task":t,"data-updateTask":e,onClick:r})),c.a.createElement("td",{className:"align-middle"},!0===e.completed?c.a.createElement("del",null,e.name):e.name),c.a.createElement("td",null,c.a.createElement("button",{type:"button",className:"editButton","data-task":t,onClick:n},"Edit"),c.a.createElement("button",{type:"button",className:"deleteButton","data-task":t,onClick:a},"Delete")))})):c.a.createElement("tr",null,c.a.createElement("td",{colSpan:3},"No tasks today"))))}),p=(a(17),function(){var e=Object(n.useState)([{id:1,name:"Tidy up",completed:!1},{id:2,name:"Feed pippi",completed:!1},{id:3,name:"Eat chocolate",completed:!1}]),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),m=Object(i.a)(r,2),s=m[0],p=m[1],b=Object(n.useState)({id:null,name:"",completed:""}),f=Object(i.a)(b,2),k=f[0],h=f[1];return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"What do I have to do today?"),c.a.createElement("div",null,c.a.createElement("div",null,s?c.a.createElement("div",null,c.a.createElement(d,{editing:s,setEditing:p,currentTask:k,updateTask:function(e){l(a.map((function(t){return e.currenTarget.dataset.task.id?e.currentTarget.dataset.updatedTask:t})))}})):c.a.createElement("div",null,c.a.createElement(u,{addTask:function(e){e.id=a.length,l([].concat(Object(o.a)(a),[e]))}}))),c.a.createElement("div",null,c.a.createElement(E,{tasks:a,editRow:function(e){p(!0),h({id:e.id,name:e.name,completed:e.completed})},deleteTask:function(e){p(!1),l(a.filter((function(t){return e.currentTarget.dataset.task!==t.id})))},handleChange:function(e,t){return function(e){return t.currentTarget.dataset.task===e.id}&&(e.completed=!e.completed),e}}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.06467288.chunk.js.map