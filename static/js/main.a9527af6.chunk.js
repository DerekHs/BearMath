(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{60:function(e,t){},64:function(e,t,a){e.exports=a(87)},87:function(e,t,a){"use strict";a.r(t);a(65);var n=a(0),r=a.n(n),c=a(48),i=a(14),s=a(18),o=a(15),l="OPERATION_BEGIN",u="OPERATION_SUCCESS",m="OPERATION_ERROR",p="UPSERT_MATRIX",d="RENAME_MATRIX",b="DELETE_MATRIX",h=a(26),f=a(5),v=a(6),O=function(){function e(t,a){Object(f.a)(this,e),this.numericValues=t,this.shape=a}return Object(v.a)(e,[{key:"rows",value:function(){return this.shape[0]}},{key:"cols",value:function(){return this.shape[1]}},{key:"toMap",value:function(){return{numericValues:this.numericValues,shape:this.shape}}}]),e}(),j={matrixMap:new h.b({fibonacci_q:new O([1,1,1,0],[2,2]),first_fibonacci_numbers:new O([1,1],[2,1])}),mostRecentError:""},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)({},e,{mostRecentError:""});case p:return e.matrixMap.contains(t.name)?Object(o.a)({},e,{matrixMap:e.matrixMap.updateIn([t.name],function(){return new O(t.numericValues,t.shape)})}):Object(o.a)({},e,{matrixMap:e.matrixMap.set(t.name,new O(t.numericValues,t.shape))});case d:return Object(o.a)({},e,{matrixMap:e.matrixMap.mapKeys(function(e){return e===t.name?t.newName:e})});case b:return Object(o.a)({},e,{matrixMap:e.matrixMap.remove(t.name)});case u:if(t.result.validOperation){var a=t.result.result;return e.matrixMap.contains(t.result.resultVariable)?Object(o.a)({},e,{matrixMap:e.matrixMap.updateIn([t.resultVariable],function(){return new O(a.numericValues,a.shape)})}):Object(o.a)({},e,{matrixMap:e.matrixMap.set(t.resultVariable,new O(a.numericValues,a.shape))})}return Object(o.a)({},e,{mostRecentError:t.result.result});default:return e}},y=a(60),x=a.n(y),N=Object(i.c)({matrices:E,generatedCode:x.a}),g=a(93),w=a(94),C=a(33),M=a(22),k=a(75),R=a(55),S=a(92),V=a(95),D=a(90),I=a(89);function T(e,t,a){return{type:l,command:e,matrixNames:t,resultVariable:a}}function A(e,t){var a=e.map(function(e){return t.get(e).toMap()});return Object.assign.apply(Object,Object(M.a)(e.map(function(e,t){return Object(C.a)({},e,a[t])})))}var _=Object(w.a)(function(e,t){return e.pipe(Object(I.a)(l),Object(k.a)(function(e){return Object(V.a)({url:"https://nzr58np206.execute-api.us-west-2.amazonaws.com/beta-prod/operation",method:"PUT",headers:{"Content-Type":"application/json"},body:{command:e.command,matrices:A(e.matrixNames,t.value.matrices.matrixMap)}}).pipe(Object(R.a)(function(t){return a=e.resultVariable,n=t.response.body,{type:u,resultVariable:a,result:n};var a,n}),Object(S.a)(function(e){return Object(D.a)({type:m,errorMessage:e})}))}))}),P=a(61),W=a(8),B=a(7),L=a(9),F=a(47);function z(e,t,a){return{type:p,name:e,shape:t,numericValues:a}}function q(e,t){return{type:d,name:e,newName:t}}function J(e){return{type:b,name:e}}var U=a(62),X=a.n(U),G=a(63),H=a.n(G),K=function(e){function t(){return Object(f.a)(this,t),Object(W.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(v.a)(t,[{key:"convertStateToLatex",value:function(e){var t,a,n,r=new h.a,c=e.ndarray.numericValues,i=Object(F.a)(e.ndarray.shape,2);for(t=i[0],a=i[1],n=0;n<t;n++)r=r.push(c.slice(n*a,(n+1)*a).join(" & "));return"\\begin{pmatrix}"+r.join(" \\\\ ")+"\\end{pmatrix}"}},{key:"render",value:function(){var e=X.a.renderToString(this.convertStateToLatex(this.props));return r.a.createElement("div",null,H()(e))}}]),t}(r.a.Component),Y=a(3),Q=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(W.a)(this,Object(B.a)(t).call(this,e))).state={modalState:!1},a.toggleModal=a.toggleModal.bind(Object(Y.a)(Object(Y.a)(a))),a}return Object(L.a)(t,e),Object(v.a)(t,[{key:"toggleModal",value:function(){this.setState(function(e,t){return{modalState:!e.modalState}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.cloneElement(this.props.children[0],{onClick:this.toggleModal})),r.a.createElement(Z,{closeModal:this.toggleModal,modalState:this.state.modalState,title:this.props.children[1]},r.a.cloneElement(this.props.children[2],{toggle:this.toggleModal})))}}]),t}(r.a.Component),Z=function(e){var t=e.children,a=e.closeModal,n=e.modalState,c=e.title;return n?r.a.createElement("div",{className:"modal is-active"},r.a.createElement("div",{className:"modal-background",onClick:a}),r.a.createElement("div",{className:"modal-card"},r.a.createElement("header",{className:"modal-card-head"},r.a.createElement("p",{className:"modal-card-title"},c),r.a.createElement("button",{className:"delete",onClick:a})),r.a.createElement("section",{className:"modal-card-body"},r.a.createElement("div",{className:"content"},t)),r.a.createElement("footer",{className:"modal-card-foot"}))):null},$=Q,ee=function(e){function t(e){var a;if(Object(f.a)(this,t),a=Object(W.a)(this,Object(B.a)(t).call(this,e)),e.create)a.state={numRows:e.initialRows,numCols:e.initialCols,matrixName:""},a.finishedPopulating=!0;else if(e.edit)console.log(e.ndarray),a.state={numRows:e.ndarray.rows(),numCols:e.ndarray.cols(),numericValues:e.ndarray.numericValues,matrixName:e.matrixName},a.finishedPopulating=!1;else if(e.clone){var n=new Date,r=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()+" "+(n.getHours()+":"+n.getMinutes()+":"+n.getSeconds());a.state={numRows:e.ndarray.rows(),numCols:e.ndarray.cols(),numericValues:e.ndarray.numericValues,matrixName:e.matrixName+" __CLONED_AT__"+r},a.finishedPopulating=!1}return a.addRow=a.addRow.bind(Object(Y.a)(Object(Y.a)(a))),a.addCol=a.addCol.bind(Object(Y.a)(Object(Y.a)(a))),a.removeRow=a.removeRow.bind(Object(Y.a)(Object(Y.a)(a))),a.removeCol=a.removeCol.bind(Object(Y.a)(Object(Y.a)(a))),a.submit=a.submit.bind(Object(Y.a)(Object(Y.a)(a))),a.updateMatrixName=a.updateMatrixName.bind(Object(Y.a)(Object(Y.a)(a))),a.getStartingValue=a.getStartingValue.bind(Object(Y.a)(Object(Y.a)(a))),a.setFinishedPopulating=a.setFinishedPopulating.bind(Object(Y.a)(Object(Y.a)(a))),a}return Object(L.a)(t,e),Object(v.a)(t,[{key:"addRow",value:function(){this.setState(function(e){return{numRows:Math.min(e.numRows+1,7)}})}},{key:"addCol",value:function(){this.setState(function(e){return{numCols:Math.min(e.numCols+1,7)}})}},{key:"removeRow",value:function(){this.setState(function(e){return{numRows:Math.max(e.numRows-1,1)}})}},{key:"removeCol",value:function(){this.setState(function(e){return{numCols:Math.max(e.numCols-1,1)}})}},{key:"updateMatrixName",value:function(e){this.setState(Object(o.a)({},this.state,{matrixName:e}))}},{key:"submit",value:function(){for(var e=[],t=0;t<this.state.numRows;t++)for(var a=0;a<this.state.numCols;a++)e.push(this["textInput".concat(t,",").concat(a)].value);this.props.edit?(this.props.upsertMatrix(this.props.matrixName,[this.state.numRows,this.state.numCols],e),this.props.renameMatrix(this.props.matrixName,this.state.matrixName)):this.props.upsertMatrix(this.state.matrixName,[this.state.numRows,this.state.numCols],e),this.props.toggle()}},{key:"getStartingValue",value:function(e,t){return this.finishedPopulating?0:this.state.numericValues[e*this.state.numCols+t]}},{key:"setFinishedPopulating",value:function(e){this.finishedPopulating=e}},{key:"render",value:function(){var e=this,t=r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("input",{className:"input",type:"text",value:this.state.matrixName,placeholder:"Matrix Name",onChange:function(t){return e.updateMatrixName(t.target.value)}}),r.a.createElement("div",{className:"columns",style:{paddingTop:"25px"}},r.a.createElement("div",{className:"column is-narrow"},Object(M.a)(Array(this.state.numRows).keys()).map(function(t){return r.a.createElement("div",{key:t},Object(M.a)(Array(e.state.numCols).keys()).map(function(a){return r.a.createElement("input",{type:"text",disabled:e.props.clone,size:"4",style:{fontSize:"20px"},defaultValue:e.getStartingValue(t,a),key:"".concat(t,",").concat(a),ref:function(n){e["textInput".concat(t,",").concat(a)]=n}})}),r.a.createElement("br",null))})),r.a.createElement("div",{className:"column is-one-fifth has-text-left"},r.a.createElement("button",{className:"button is-small",onClick:this.removeRow},"Rem. Row"),r.a.createElement("br",null),r.a.createElement("button",{className:"button is-small",onClick:this.addRow},"Add Row"))),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-narrow has-text-left"},r.a.createElement("span",{className:"button is-small",onClick:this.removeCol},"Rem. Col"),r.a.createElement("span",{className:"button is-small",onClick:this.addCol},"Add Col"),r.a.createElement("div",{style:{paddingTop:"20px"}},r.a.createElement("button",{className:"button",onClick:this.submit},"Submit"))))));return this.setFinishedPopulating(!0),t}}]),t}(r.a.Component);var te=Object(s.b)(null,function(e){return Object(i.b)({upsertMatrix:z,renameMatrix:q},e)})(ee),ae=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(W.a)(this,Object(B.a)(t).call(this,e))).state={hover:!1},a.hoverOn=a.hoverOn.bind(Object(Y.a)(Object(Y.a)(a))),a.hoverOff=a.hoverOff.bind(Object(Y.a)(Object(Y.a)(a))),a}return Object(L.a)(t,e),Object(v.a)(t,[{key:"hoverOn",value:function(){this.setState({hover:!0})}},{key:"hoverOff",value:function(){this.setState({hover:!1})}},{key:"render",value:function(){return r.a.createElement("i",{className:this.state.hover?"fas "+this.props.icon:"far "+this.props.icon,style:{cursor:"pointer"},onMouseEnter:this.hoverOn,onMouseLeave:this.hoverOff,onClick:this.props.onClick,title:this.props.title})}}]),t}(r.a.Component),ne=function(e){function t(){return Object(f.a)(this,t),Object(W.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"box has-text-centered"},r.a.createElement(K,{ndarray:this.props.ndarray}),this.props.matrixName,r.a.createElement("br",null),r.a.createElement("span",{className:"icon has-text-info"},r.a.createElement($,null,r.a.createElement(ae,{icon:"fa-edit",title:"Edit the matrix in place"}),"edit ".concat(this.props.matrixName),r.a.createElement(te,{ndarray:this.props.ndarray,matrixName:this.props.matrixName,edit:!0}))),r.a.createElement("span",{className:"icon has-text-info"},r.a.createElement($,null,r.a.createElement(ae,{icon:"fa-clone",title:"Create a duplicate of this matrix"}),"clone ".concat(this.props.matrixName),r.a.createElement(te,{ndarray:this.props.ndarray,matrixName:this.props.matrixName,clone:!0}))),r.a.createElement("span",{className:"icon has-text-info"},r.a.createElement(ae,{icon:"fa-trash-alt",onClick:function(){return e.props.deleteMatrix(e.props.matrixName)},title:"Delete this matrix"})))}}]),t}(r.a.Component);var re=Object(s.b)(null,function(e){return Object(i.b)({deleteMatrix:J},e)})(ne),ce=function(e){function t(){return Object(f.a)(this,t),Object(W.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Matrix Bank"),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"columns is-multiline"},this.props.matrixMap.entrySeq().map(function(e){var t=Object(F.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"column is-narrow is-mobile",key:a},r.a.createElement(re,{ndarray:n,matrixName:a,key:a}))}))))}}]),t}(n.Component);var ie=Object(s.b)(function(e){return{matrixMap:e.matrices.matrixMap}})(ce),se=function(e){function t(){return Object(f.a)(this,t),Object(W.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement($,null,r.a.createElement("button",{className:"button is-primary"},"Create New Matrix"),"Create New Matrix",r.a.createElement(te,{initialRows:2,initialCols:2,create:!0}))}}]),t}(r.a.Component),oe=a(16),le=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(W.a)(this,Object(B.a)(t).call(this,e))).operate=function(){var e=Object(M.a)(Array(a.props.numDropdowns).keys()).map(function(e){return a["dropdown".concat(e)].value});a.props.operationBegin(a.props.codeCreator(e),e,a.resultName.value),a.showWarning()},a.showWarning=function(){a.setState({displayWarning:!0})},a.closeWarning=function(){a.setState({displayWarning:!1})},a.operate=a.operate.bind(Object(Y.a)(Object(Y.a)(a))),a.showWarning=a.showWarning.bind(Object(Y.a)(Object(Y.a)(a))),a.closeWarning=a.closeWarning.bind(Object(Y.a)(Object(Y.a)(a))),a.state={matrix_1:"",matrix_2:"",resultVariable:"",displayWarning:!1},a}return Object(L.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"level"},r.a.createElement("div",{className:"level-left"},Object(M.a)(Array(this.props.numDropdowns).keys()).map(function(t){return r.a.createElement("div",{className:"level-item",key:t},r.a.createElement("div",{className:"select"},r.a.createElement("select",{defaultValue:"",ref:function(a){e["dropdown".concat(t)]=a}},r.a.createElement("option",{value:"",disabled:!0},"--Select Matrix--"),e.props.matrixMap.keySeq().map(function(e){return r.a.createElement("option",{value:e,key:e},e)}))))})),r.a.createElement("div",{className:"level-right"},r.a.createElement("div",{className:"level-item"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Store Result As",ref:function(t){e.resultName=t}})))),r.a.createElement("br",null),r.a.createElement("div",{className:"level"},r.a.createElement("div",{className:"level-left"},this.state.displayWarning&&this.props.mostRecentError&&r.a.createElement("div",{className:"notification is-warning"},r.a.createElement("button",{className:"delete",onClick:this.closeWarning}),r.a.createElement("p",null,r.a.createElement("b",null,"Numpy Error: "),this.props.mostRecentError))),r.a.createElement("div",{className:"level-right"},r.a.createElement("div",{className:"level-item"},r.a.createElement(oe.Button,{onClick:this.operate},"Operate")))))}}]),t}(r.a.Component);var ue=Object(s.b)(function(e){return{matrixMap:e.matrices.matrixMap,mostRecentError:e.matrices.mostRecentError}},function(e){return Object(i.b)({operationBegin:T},e)})(le);function me(e){return"np.linalg.inv(".concat(e[0],")")}function pe(e){return"np.transpose(".concat(e[0],")")}function de(e){return"np.add(".concat(e[0],", ").concat(e[1],")")}function be(e){return"np.subtract(".concat(e[0],", ").concat(e[1],")")}function he(e){return"np.dot(".concat(e[0],", ").concat(e[1],")")}var fe=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(W.a)(this,Object(B.a)(t).call(this,e))).onChange=function(e){a.setState({selected:e})},a.state={selected:""},a}return Object(L.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"box"},r.a.createElement(oe.Dropdown,{value:this.state.selected,onChange:this.onChange,color:"info"},r.a.createElement(oe.Dropdown.Item,{value:""},"Select"),r.a.createElement(oe.Dropdown.Divider,null),r.a.createElement(oe.Dropdown.Item,{value:"invert"},"Invert"),r.a.createElement(oe.Dropdown.Item,{value:"transpose"},"Transpose"),r.a.createElement(oe.Dropdown.Item,{value:"add"},"Add"),r.a.createElement(oe.Dropdown.Item,{value:"subtract"},"Subtract"),r.a.createElement(oe.Dropdown.Item,{value:"multiply"},"Multiply")),r.a.createElement("hr",null),"invert"===this.state.selected&&r.a.createElement(ue,{numDropdowns:1,codeCreator:me}),"transpose"===this.state.selected&&r.a.createElement(ue,{numDropdowns:1,codeCreator:pe}),"add"===this.state.selected&&r.a.createElement(ue,{numDropdowns:2,codeCreator:de}),"subtract"===this.state.selected&&r.a.createElement(ue,{numDropdowns:2,codeCreator:be}),"multiply"===this.state.selected&&r.a.createElement(ue,{numDropdowns:2,codeCreator:he}))}}]),t}(n.Component),ve=function(e){function t(){return Object(f.a)(this,t),Object(W.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"section"},r.a.createElement(se,null)),r.a.createElement("section",{className:"section"},r.a.createElement(ie,null)),r.a.createElement("section",{className:"section"},r.a.createElement(fe,null)))}}]),t}(n.Component),Oe=function(e){function t(){return Object(f.a)(this,t),Object(W.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ve,null))}}]),t}(n.Component),je=Object(P.createLogger)({stateTransformer:function(e){for(var t={},a=Object.keys(e),n=0;n<a.length;n++){var r=a[n];h.c.Iterable.isIterable(e[r])?t[r]=e[r].toJS():t[r]=e[r]}return t}}),Ee=Object(g.a)(),ye=Object(i.d)(N,Object(i.a)(Ee,je));Ee.run(_),Object(c.render)(r.a.createElement(s.a,{store:ye},r.a.createElement(Oe,null)),document.getElementById("root"))}},[[64,2,1]]]);
//# sourceMappingURL=main.a9527af6.chunk.js.map