(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{63:function(e,t,a){e.exports=a(86)},86:function(e,t,a){"use strict";a.r(t);a(64);var n=a(0),r=a.n(n),l=a(45),i=a(14),c=a(15),s="MULTIPLY_BEGIN",o="MULTIPLY_ERROR",u="UPSERT_MATRIX",m="RENAME_MATRIX",p="DELETE_MATRIX",d=a(11),b=new d.c({fibonacci_q:new d.b({shape:new d.a([2,2]),numericValues:new d.a([1,1,1,0])}),first_fibonacci:new d.b({shape:new d.a([2,1]),numericValues:new d.a([1,1])})}),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return e.contains(t.name)?e.updateIn([t.name],function(){return new d.b({shape:t.shape,numericValues:t.numericValues})}):e.set(t.name,new d.b({shape:t.shape,numericValues:t.numericValues}));case m:return e.mapKeys(function(e){return e===t.name?t.newName:e});case p:return e.remove(t.name);default:return e}},v=new d.a(["import numpy as np"]),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return e.push("".concat(t.name," = np.ndarray(shape=[").concat(t.shape.toJS(),"], buffer=np.array([").concat(t.numericValues.map(function(e){return e+"."}).toJS(),"]), dtype=float)"));case m:return e.push("renamed");case p:return e.push("deleted");default:return e}},O=Object(i.c)({matrices:h,generatedCode:f}),j=a(92),E=a(93),g=a(74),y=a(53),x=a(91),N=a(94),C=a(88),w=a(89);function S(e,t,a){return{type:s,m1:e,m2:t,resultVariable:a}}function k(e,t,a){return{type:u,name:e,shape:t,numericValues:a}}function M(e,t){return{type:m,name:e,newName:t}}function V(e){return{type:p,name:e}}var R=Object(E.a)(function(e,t){return e.pipe(Object(w.a)(s),Object(g.a)(function(e){return Object(N.a)({url:"https://nzr58np206.execute-api.us-west-2.amazonaws.com/beta-prod/operations/multiply",method:"PUT",headers:{"Content-Type":"application/json"},body:{matrix_1:{shape:t.value.matrices.get(e.m1).get("shape").toJS(),data:t.value.matrices.get(e.m1).get("numericValues").toJS()},matrix_2:{shape:t.value.matrices.get(e.m2).get("shape").toJS(),data:t.value.matrices.get(e.m2).get("numericValues").toJS()}}}).pipe(Object(y.a)(function(t){return k(e.resultVariable,new d.a(JSON.parse(t.response.body).shape),new d.a(JSON.parse(t.response.body).data))}),Object(x.a)(function(e){return Object(C.a)({type:o,errorMessage:e})}))}))}),L=a(58),_=a(4),I=a(5),D=a(8),T=a(6),B=a(7),A=a(44),J=a(59),P=a.n(J),q=a(60),z=a.n(q),F=function(e){function t(){return Object(_.a)(this,t),Object(D.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(I.a)(t,[{key:"convertStateToLatex",value:function(e){var t,a,n,r=new d.a,l=e.data.get("numericValues"),i=e.data.get("shape"),c=Object(A.a)(i,2);for(t=c[0],a=c[1],n=0;n<t;n++)r=r.push(l.slice(n*a,(n+1)*a).join(" & "));return"\\begin{pmatrix}"+r.join(" \\\\ ")+"\\end{pmatrix}"}},{key:"render",value:function(){var e=P.a.renderToString(this.convertStateToLatex(this.props));return r.a.createElement("div",null,z()(e))}}]),t}(n.Component),U=a(1),X=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(D.a)(this,Object(T.a)(t).call(this,e))).state={modalState:!1},a.toggleModal=a.toggleModal.bind(Object(U.a)(Object(U.a)(a))),a}return Object(B.a)(t,e),Object(I.a)(t,[{key:"toggleModal",value:function(){this.setState(function(e,t){return{modalState:!e.modalState}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.cloneElement(this.props.children[0],{onClick:this.toggleModal})),r.a.createElement(Y,{closeModal:this.toggleModal,modalState:this.state.modalState,title:this.props.children[1]},r.a.cloneElement(this.props.children[2],{toggle:this.toggleModal})))}}]),t}(r.a.Component),Y=function(e){var t=e.children,a=e.closeModal,n=e.modalState,l=e.title;return n?r.a.createElement("div",{className:"modal is-active"},r.a.createElement("div",{className:"modal-background",onClick:a}),r.a.createElement("div",{className:"modal-card"},r.a.createElement("header",{className:"modal-card-head"},r.a.createElement("p",{className:"modal-card-title"},l),r.a.createElement("button",{className:"delete",onClick:a})),r.a.createElement("section",{className:"modal-card-body"},r.a.createElement("div",{className:"content"},t)),r.a.createElement("footer",{className:"modal-card-foot"}))):null},H=X,G=a(48),K=a(62),Q=function(e){function t(e){var a;if(Object(_.a)(this,t),(a=Object(D.a)(this,Object(T.a)(t).call(this,e))).finishedPopulating=!1,e.create)a.state={numRows:e.initialRows,numCols:e.initialCols,matrixName:""};else if(e.edit)a.state={numRows:e.data.get("shape").get(0),numCols:e.data.get("shape").get(1),numericValues:e.data.get("numericValues"),matrixName:e.matrixName};else if(e.clone){var n=new Date,r=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()+" "+(n.getHours()+":"+n.getMinutes()+":"+n.getSeconds());a.state={numRows:e.data.get("shape").get(0),numCols:e.data.get("shape").get(1),numericValues:e.data.get("numericValues"),matrixName:e.matrixName+" __CLONED_AT__"+r}}return a.addRow=a.addRow.bind(Object(U.a)(Object(U.a)(a))),a.addCol=a.addCol.bind(Object(U.a)(Object(U.a)(a))),a.removeRow=a.removeRow.bind(Object(U.a)(Object(U.a)(a))),a.removeCol=a.removeCol.bind(Object(U.a)(Object(U.a)(a))),a.submit=a.submit.bind(Object(U.a)(Object(U.a)(a))),a.updateMatrixName=a.updateMatrixName.bind(Object(U.a)(Object(U.a)(a))),a.getStartingValue=a.getStartingValue.bind(Object(U.a)(Object(U.a)(a))),a.setFinishedPopulating=a.setFinishedPopulating.bind(Object(U.a)(Object(U.a)(a))),a}return Object(B.a)(t,e),Object(I.a)(t,[{key:"addRow",value:function(){this.setState(function(e){return{numRows:Math.min(e.numRows+1,7)}})}},{key:"addCol",value:function(){this.setState(function(e){return{numCols:Math.min(e.numCols+1,7)}})}},{key:"removeRow",value:function(){this.setState(function(e){return{numRows:Math.max(e.numRows-1,1)}})}},{key:"removeCol",value:function(){this.setState(function(e){return{numCols:Math.max(e.numCols-1,1)}})}},{key:"updateMatrixName",value:function(e){this.setState(Object(K.a)({},this.state,{matrixName:e}))}},{key:"submit",value:function(){for(var e=new d.a,t=0;t<this.state.numRows;t++)for(var a=0;a<this.state.numCols;a++)e=e.push(this["textInput".concat(t,",").concat(a)].value);this.props.edit?(this.props.upsertMatrix(this.props.matrixName,new d.a([this.state.numRows,this.state.numCols]),e),this.props.renameMatrix(this.props.matrixName,this.state.matrixName)):(this.props.upsertMatrix(this.state.matrixName,new d.a([this.state.numRows,this.state.numCols]),e),this.props.toggle())}},{key:"getStartingValue",value:function(e,t){return this.state.numericValues&&e*this.state.numCols+t<this.state.numericValues.size&&!this.finishedPopulating?this.state.numericValues.get(e*this.state.numCols+t):0}},{key:"setFinishedPopulating",value:function(e){this.finishedPopulating=e}},{key:"render",value:function(){var e=this,t=r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("input",{className:"input",type:"text",value:this.state.matrixName,placeholder:"Matrix Name",onChange:function(t){return e.updateMatrixName(t.target.value)}}),r.a.createElement("div",{className:"columns",style:{paddingTop:"25px"}},r.a.createElement("div",{className:"column is-narrow"},Object(G.a)(Array(this.state.numRows).keys()).map(function(t){return r.a.createElement("div",{key:t},Object(G.a)(Array(e.state.numCols).keys()).map(function(a){return r.a.createElement("input",{type:"text",disabled:e.props.clone,size:"4",style:{fontSize:"20px"},defaultValue:e.getStartingValue(t,a),key:"".concat(t,",").concat(a),ref:function(n){e["textInput".concat(t,",").concat(a)]=n}})}),r.a.createElement("br",null))})),r.a.createElement("div",{className:"column is-one-fifth has-text-left"},r.a.createElement("button",{className:"button is-small",onClick:this.removeRow},"Rem. Row"),r.a.createElement("br",null),r.a.createElement("button",{className:"button is-small",onClick:this.addRow},"Add Row"))),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-narrow has-text-left"},r.a.createElement("span",{className:"button is-small",onClick:this.removeCol},"Rem. Col"),r.a.createElement("span",{className:"button is-small",onClick:this.addCol},"Add Col"),r.a.createElement("div",{style:{paddingTop:"20px"}},r.a.createElement("button",{className:"button",onClick:this.submit},"Submit"))))));return this.setFinishedPopulating(!0),t}}]),t}(r.a.Component);var W=Object(c.b)(null,function(e){return Object(i.b)({upsertMatrix:k,renameMatrix:M},e)})(Q),Z=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(D.a)(this,Object(T.a)(t).call(this,e))).state={hover:!1},a.hoverOn=a.hoverOn.bind(Object(U.a)(Object(U.a)(a))),a.hoverOff=a.hoverOff.bind(Object(U.a)(Object(U.a)(a))),a}return Object(B.a)(t,e),Object(I.a)(t,[{key:"hoverOn",value:function(){this.setState({hover:!0})}},{key:"hoverOff",value:function(){this.setState({hover:!1})}},{key:"render",value:function(){return r.a.createElement("i",{className:this.state.hover?"fas "+this.props.icon:"far "+this.props.icon,style:{cursor:"pointer"},onMouseEnter:this.hoverOn,onMouseLeave:this.hoverOff,onClick:this.props.onClick,title:this.props.title})}}]),t}(r.a.Component),$=function(e){function t(){return Object(_.a)(this,t),Object(D.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"box has-text-centered"},r.a.createElement(F,{data:this.props.data}),this.props.matrixName,r.a.createElement("br",null),r.a.createElement("span",{className:"icon has-text-info"},r.a.createElement(H,null,r.a.createElement(Z,{icon:"fa-edit",title:"Edit the matrix in place"}),this.props.name,r.a.createElement(W,{data:this.props.data,matrixName:this.props.matrixName,edit:!0}))),r.a.createElement("span",{className:"icon has-text-info"},r.a.createElement(H,null,r.a.createElement(Z,{icon:"fa-clone",title:"Create a duplicate of this matrix"}),this.props.name,r.a.createElement(W,{data:this.props.data,matrixName:this.props.matrixName,clone:!0}))),r.a.createElement("span",{className:"icon has-text-info"},r.a.createElement(Z,{icon:"fa-trash-alt",onClick:function(){return e.props.deleteMatrix(e.props.matrixName)},title:"Delete this matrix"})))}}]),t}(r.a.Component);var ee=Object(c.b)(null,function(e){return Object(i.b)({deleteMatrix:V},e)})($),te=function(e){function t(){return Object(_.a)(this,t),Object(D.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Matrix Bank"),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"columns is-multiline"},this.props.matrices.entrySeq().map(function(e){var t=Object(A.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"column is-narrow is-mobile",key:a},r.a.createElement(ee,{data:n,matrixName:a,key:a}))}))))}}]),t}(n.Component);var ae=Object(c.b)(function(e){return{matrices:e.matrices}})(te),ne=function(e){function t(){return Object(_.a)(this,t),Object(D.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement(H,null,r.a.createElement("button",{className:"button is-primary"},"Create New Matrix"),"Create New Matrix",r.a.createElement(W,{initialRows:2,initialCols:2,create:!0}))}}]),t}(r.a.Component),re=a(3),le=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(D.a)(this,Object(T.a)(t).call(this,e))).onChange_1=function(e){a.setState({matrix_1:e})},a.onChange_2=function(e){a.setState({matrix_2:e})},a.updateResultVariable=function(e){a.setState({resultVariable:e.target.value})},a.multiply=function(){a.props.multiplyBegin(a.state.matrix_1,a.state.matrix_2,a.state.resultVariable)},a.onChange1=a.onChange_1.bind(Object(U.a)(Object(U.a)(a))),a.onChange2=a.onChange_2.bind(Object(U.a)(Object(U.a)(a))),a.updateResultVariable=a.updateResultVariable.bind(Object(U.a)(Object(U.a)(a))),a.multiply=a.multiply.bind(Object(U.a)(Object(U.a)(a))),a.state={matrix_1:"",matrix_2:"",resultVariable:""},a}return Object(B.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement(re.Box,null,r.a.createElement(re.Level,null,r.a.createElement(re.Level.Side,{align:"left"},r.a.createElement(re.Level.Item,null,r.a.createElement(re.Dropdown,{value:this.state.matrix_1,onChange:this.onChange1},r.a.createElement(re.Dropdown.Item,{value:""},"Select Matrix"),this.props.matrices.keySeq().map(function(e){return r.a.createElement(re.Dropdown.Item,{key:e,value:e},e)}))),r.a.createElement(re.Level.Item,null,r.a.createElement(re.Dropdown,{value:this.state.matrix_2,onChange:this.onChange2},r.a.createElement(re.Dropdown.Item,{value:""},"Select Matrix"),this.props.matrices.keySeq().map(function(e){return r.a.createElement(re.Dropdown.Item,{key:e,value:e},e)})))),r.a.createElement(re.Level.Side,{align:"right"},r.a.createElement(re.Level.Item,null,r.a.createElement("input",{className:"input",type:"text",value:this.state.resultVariable,placeholder:"Store Result As",onChange:this.updateResultVariable})))),r.a.createElement("br",null),r.a.createElement(re.Level,null,r.a.createElement(re.Level.Side,{align:"left"}),r.a.createElement(re.Level.Side,{align:"right"},r.a.createElement(re.Level.Item,null,r.a.createElement(re.Button,{onClick:this.multiply},"Multiply")))))}}]),t}(n.Component);var ie=Object(c.b)(function(e){return{matrices:e.matrices}},function(e){return Object(i.b)({multiplyBegin:S},e)})(le),ce=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(D.a)(this,Object(T.a)(t).call(this,e))).matrixSelected=function(e){console.log(e),this.setState({matrix:e}),""!==e?this.setState({resultVariable:"".concat(e,"_INV")}):this.setState({resultVariable:""})},a.updateResultVariable=function(e){a.setState({resultVariable:e.target.value})},a.multiply=function(){a.props.multiplyBegin(a.state.matrix_1,a.state.matrix_2,a.state.resultVariable)},a.matrixSelected=a.matrixSelected.bind(Object(U.a)(Object(U.a)(a))),a.updateResultVariable=a.updateResultVariable.bind(Object(U.a)(Object(U.a)(a))),a.multiply=a.multiply.bind(Object(U.a)(Object(U.a)(a))),a.state={matrix:"",resultVariable:""},a}return Object(B.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement(re.Box,null,r.a.createElement(re.Level,null,r.a.createElement(re.Level.Side,{align:"left"},r.a.createElement(re.Level.Item,null,r.a.createElement(re.Dropdown,{value:this.state.matrix,onChange:this.matrixSelected},r.a.createElement(re.Dropdown.Item,{value:""},"Select Matrix"),this.props.matrices.keySeq().map(function(e){return r.a.createElement(re.Dropdown.Item,{key:e,value:e},e)})))),r.a.createElement(re.Level.Side,{align:"right"},r.a.createElement(re.Level.Item,null,r.a.createElement("input",{className:"input",type:"text",value:this.state.resultVariable,placeholder:"Store Result As",onChange:this.updateResultVariable})))),r.a.createElement("br",null),r.a.createElement(re.Level,null,r.a.createElement(re.Level.Side,{align:"left"}),r.a.createElement(re.Level.Side,{align:"right"},r.a.createElement(re.Level.Item,null,r.a.createElement(re.Button,{onClick:this.multiply},"Multiply")))))}}]),t}(n.Component);var se=Object(c.b)(function(e){return{matrices:e.matrices}},function(e){return Object(i.b)({multiplyBegin:S},e)})(ce),oe=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(D.a)(this,Object(T.a)(t).call(this,e))).onChange=function(e){a.setState({selected:e})},a.state={selected:""},a}return Object(B.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"box"},r.a.createElement(re.Dropdown,{value:this.state.selected,onChange:this.onChange,color:"info"},r.a.createElement(re.Dropdown.Item,{value:""},"Select"),r.a.createElement(re.Dropdown.Divider,null),r.a.createElement(re.Dropdown.Item,{value:"multiply"},"Multiply")),r.a.createElement("hr",null),"multiply"===this.state.selected&&r.a.createElement(ie,null),"invert"===this.state.selected&&r.a.createElement(se,null))}}]),t}(n.Component);var ue=Object(c.b)(function(e){return{matrices:e.matrices}},function(e){return Object(i.b)({upsertMatrix:k},e)})(oe),me=a(61),pe=function(e){function t(){return Object(_.a)(this,t),Object(D.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(me.a,{className:"textarea",value:this.props.generatedCode.join("\n"),readOnly:!0}))}}]),t}(r.a.Component);var de=Object(c.b)(function(e){return{generatedCode:e.generatedCode}})(pe),be=function(e){function t(){return Object(_.a)(this,t),Object(D.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-two-thirds"},r.a.createElement("section",{className:"section"},r.a.createElement(ne,null)),r.a.createElement("section",{className:"section"},r.a.createElement(ae,null)),r.a.createElement("section",{className:"section"},r.a.createElement(ue,null))),r.a.createElement("div",{className:"column"},r.a.createElement(de,null)))}}]),t}(n.Component),he=function(e){function t(){return Object(_.a)(this,t),Object(D.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement("a",{className:"navbar-item"},"Home")),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"buttons"},r.a.createElement("a",{className:"button is-primary"},r.a.createElement("strong",null,"Sign up")),r.a.createElement("a",{className:"button is-light"},"Log in"))))))}}]),t}(r.a.Component),ve=function(e){function t(){return Object(_.a)(this,t),Object(D.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(he,null),r.a.createElement(be,null))}}]),t}(n.Component),fe=Object(L.createLogger)({stateTransformer:function(e){for(var t={},a=Object.keys(e),n=0;n<a.length;n++){var r=a[n];d.d.Iterable.isIterable(e[r])?t[r]=e[r].toJS():t[r]=e[r]}return t}}),Oe=Object(j.a)(),je=Object(i.d)(O,Object(i.a)(Oe,fe));Oe.run(R),Object(l.render)(r.a.createElement(c.a,{store:je},r.a.createElement(ve,null)),document.getElementById("root"))}},[[63,2,1]]]);
//# sourceMappingURL=main.1b035955.chunk.js.map