(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{59:function(e,t){},65:function(e,t,a){e.exports=a(87)},87:function(e,t,a){"use strict";a.r(t);a(66);var n=a(0),r=a.n(n),i=a(46),c=a(14),s=a(16),l="OPERATION_BEGIN",o="OPERATION_SUCCESS",u="OPERATION_ERROR",m="UPSERT_MATRIX",p="RENAME_MATRIX",d="DELETE_MATRIX",b=a(24),h=a(3),v=a(4),f=function(){function e(t,a){Object(h.a)(this,e),this.numericValues=t,this.shape=a}return Object(v.a)(e,[{key:"rows",value:function(){return this.shape[0]}},{key:"cols",value:function(){return this.shape[1]}}]),e}(),O=function(){function e(t,a){Object(h.a)(this,e),this.namev=t,this.ndarrayv=a}return Object(v.a)(e,[{key:"size",get:function(){return this.namev.length}},{key:"nameMatrixPairs",get:function(){var e=this;return this.namev.map(function(t,a){return[t,e.ndarrayv[a]]})}}]),e}(),j=[new f([1,1,1,0],[2,2]),new f([1,1,1,4],[2,2]),new f([1,1,1,4],[2,2])],E=new b.b({exampleScalar:["SCALAR",5],exampleNdarray:["NDARRAY",new f([1,2,3,4],[2,2])],exampleTuple:["TUPLE",new O(["charmander","bulbasaur","squirtle"],j)]}),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return e.contains(t.name)?e.updateIn([t.name],function(){return new f(t.numericValues,t.shape)}):e.set(t.name,new f(t.numericValues,t.shape));case p:return e.mapKeys(function(e){return e===t.name?t.newName:e});case d:return e.remove(t.name);case o:if(t.result.validOperation&&"NDARRAY"===t.result.dataType){var a=t.result.result;return e.contains(t.result.resultVariable)?e.updateIn([t.resultVariable],function(){return new f(a.numericValues,a.shape)}):e.set(t.resultVariable,new f(a.numericValues,a.shape))}return e;default:return e}},N=a(59),g=a.n(N),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return"";case o:return t.result.validOperation?e:t.result.result;default:return e}},w=Object(c.c)({values:y,generatedCode:g.a,error:x}),C=a(93),k=a(94),R=a(32),M=a(17),S=a(60),A=a(54),T=a(92),V=a(95),P=a(90),D=a(89);function I(e,t,a,n,r){return{type:l,command:e,dataNames:t,dataTypes:a,resultVariable:n,misc:r}}function W(e,t,a){function n(e,t){var n=null;switch(e){case"NDARRAY":n=a.matrices;break;case"TUPLE":n=a.composites;break;case"SCALAR":n=a.scalars;break;default:return null}return n.get(t)}var r=t.map(function(t,a){return[t,n(t,e[a])]});return Object.assign.apply(Object,Object(M.a)(e.map(function(e,t){return Object(R.a)({},e,r[t])})))}var _=Object(k.a)(function(e,t){return e.pipe(Object(D.a)(l),Object(S.a)(function(e){return Object(V.a)({url:"https://nzr58np206.execute-api.us-west-2.amazonaws.com/beta-prod/operation",method:"PUT",headers:{"Content-Type":"application/json"},body:{command:e.command,matrices:W(e.dataNames,e.dataTypes,t.value)}}).pipe(Object(A.a)(function(t){return a=e.resultVariable,n=t.response.body,r=e.misc,{type:o,resultVariable:a,result:n,misc:r};var a,n,r}),Object(T.a)(function(e){return Object(P.a)({type:u,errorMessage:e})}))}))}),L=a(61),U=a(6),z=a(5),B=a(7),F=a(26),Y=a(2),q=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(U.a)(this,Object(z.a)(t).call(this,e))).state={modalState:!1},a.toggleModal=a.toggleModal.bind(Object(Y.a)(Object(Y.a)(a))),a}return Object(B.a)(t,e),Object(v.a)(t,[{key:"toggleModal",value:function(){this.setState(function(e,t){return{modalState:!e.modalState}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.cloneElement(this.props.children[0],{onClick:this.toggleModal})),r.a.createElement(J,{closeModal:this.toggleModal,modalState:this.state.modalState,title:this.props.children[1]},r.a.cloneElement(this.props.children[2],{toggle:this.toggleModal})))}}]),t}(r.a.Component),J=function(e){var t=e.children,a=e.closeModal,n=e.modalState,i=e.title;return n?r.a.createElement("div",{className:"modal is-active"},r.a.createElement("div",{className:"modal-background",onClick:a}),r.a.createElement("div",{className:"modal-card"},r.a.createElement("header",{className:"modal-card-head"},r.a.createElement("p",{className:"modal-card-title"},i),r.a.createElement("button",{className:"delete",onClick:a})),r.a.createElement("section",{className:"modal-card-body"},r.a.createElement("div",{className:"content"},t)),r.a.createElement("footer",{className:"modal-card-foot"}))):null},X=q,G=a(62);function H(e,t,a){return{type:m,name:e,shape:t,numericValues:a}}function K(e,t){return{type:p,name:e,newName:t}}function Q(e){return{type:d,name:e}}var Z=function(e){function t(e){var a;if(Object(h.a)(this,t),a=Object(U.a)(this,Object(z.a)(t).call(this,e)),e.create)a.state={numRows:e.initialRows,numCols:e.initialCols,matrixName:""},a.finishedPopulating=!0;else if(e.edit)console.log(e.ndarray),a.state={numRows:e.ndarray.rows(),numCols:e.ndarray.cols(),numericValues:e.ndarray.numericValues,matrixName:e.matrixName},a.finishedPopulating=!1;else if(e.clone){var n=new Date,r=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()+" "+(n.getHours()+":"+n.getMinutes()+":"+n.getSeconds());a.state={numRows:e.ndarray.rows(),numCols:e.ndarray.cols(),numericValues:e.ndarray.numericValues,matrixName:e.matrixName+" __CLONED_AT__"+r},a.finishedPopulating=!1}return a.addRow=a.addRow.bind(Object(Y.a)(Object(Y.a)(a))),a.addCol=a.addCol.bind(Object(Y.a)(Object(Y.a)(a))),a.removeRow=a.removeRow.bind(Object(Y.a)(Object(Y.a)(a))),a.removeCol=a.removeCol.bind(Object(Y.a)(Object(Y.a)(a))),a.submit=a.submit.bind(Object(Y.a)(Object(Y.a)(a))),a.updateMatrixName=a.updateMatrixName.bind(Object(Y.a)(Object(Y.a)(a))),a.getStartingValue=a.getStartingValue.bind(Object(Y.a)(Object(Y.a)(a))),a.setFinishedPopulating=a.setFinishedPopulating.bind(Object(Y.a)(Object(Y.a)(a))),a}return Object(B.a)(t,e),Object(v.a)(t,[{key:"addRow",value:function(){this.setState(function(e){return{numRows:Math.min(e.numRows+1,7)}})}},{key:"addCol",value:function(){this.setState(function(e){return{numCols:Math.min(e.numCols+1,7)}})}},{key:"removeRow",value:function(){this.setState(function(e){return{numRows:Math.max(e.numRows-1,1)}})}},{key:"removeCol",value:function(){this.setState(function(e){return{numCols:Math.max(e.numCols-1,1)}})}},{key:"updateMatrixName",value:function(e){this.setState(Object(G.a)({},this.state,{matrixName:e}))}},{key:"submit",value:function(){for(var e=[],t=0;t<this.state.numRows;t++)for(var a=0;a<this.state.numCols;a++)e.push(this["textInput".concat(t,",").concat(a)].value);this.props.edit?(this.props.upsertMatrix(this.props.matrixName,[this.state.numRows,this.state.numCols],e),this.props.renameMatrix(this.props.matrixName,this.state.matrixName)):this.props.upsertMatrix(this.state.matrixName,[this.state.numRows,this.state.numCols],e),this.props.toggle()}},{key:"getStartingValue",value:function(e,t){return this.finishedPopulating?0:this.state.numericValues[e*this.state.numCols+t]}},{key:"setFinishedPopulating",value:function(e){this.finishedPopulating=e}},{key:"render",value:function(){var e=this,t=r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("input",{className:"input",type:"text",value:this.state.matrixName,placeholder:"Matrix Name",onChange:function(t){return e.updateMatrixName(t.target.value)}}),r.a.createElement("p",{className:"help is-danger"},"Matrix name must be a valid python variable name"),r.a.createElement("div",{className:"columns is-mobile",style:{paddingTop:"25px"}},r.a.createElement("div",{className:"column is-narrow"},Object(M.a)(Array(this.state.numRows).keys()).map(function(t){return r.a.createElement("div",{key:t},Object(M.a)(Array(e.state.numCols).keys()).map(function(a){return r.a.createElement("input",{type:"text",size:"4",style:{fontSize:"20px"},defaultValue:e.getStartingValue(t,a),key:"".concat(t,",").concat(a),ref:function(n){e["textInput".concat(t,",").concat(a)]=n}})}),r.a.createElement("br",null))})),r.a.createElement("div",{className:"column is-one-fifth has-text-left"},r.a.createElement("button",{className:"button is-small",onClick:this.removeRow},"Remove Row"),r.a.createElement("br",null),r.a.createElement("button",{className:"button is-small",onClick:this.addRow},"Add Row"))),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-narrow has-text-left"},r.a.createElement("span",{className:"button is-small",onClick:this.removeCol},"Remove Col"),r.a.createElement("span",{className:"button is-small",onClick:this.addCol},"Add Col"),r.a.createElement("div",{style:{paddingTop:"20px"}},r.a.createElement("button",{className:"button",onClick:this.submit},"Submit"))))));return this.setFinishedPopulating(!0),t}}]),t}(r.a.Component);var $=Object(s.b)(null,function(e){return Object(c.b)({upsertMatrix:H,renameMatrix:K},e)})(Z),ee=function(e){function t(){return Object(h.a)(this,t),Object(U.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement(X,null,r.a.createElement("button",{className:"button is-primary"},"Create New Matrix"),"Create New Matrix",r.a.createElement($,{initialRows:2,initialCols:2,create:!0}),r.a.createElement("button",{className:"button is-primary"},"Submit"))}}]),t}(r.a.Component),te=function(e){function t(){return Object(h.a)(this,t),Object(U.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"level"},r.a.createElement("div",{className:"level-left"},r.a.createElement("div",{className:"level-item"},r.a.createElement("h2",{className:"subtitle is-3"},this.props.title," ")),r.a.createElement("div",{className:"level-item"},this.props.createNew))),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"columns is-multiline"},this.props.children)))}}]),t}(n.Component),ae=a(63),ne=a.n(ae),re=a(64),ie=a.n(re),ce=function(e){function t(){return Object(h.a)(this,t),Object(U.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(v.a)(t,[{key:"convertStateToLatex",value:function(e){var t,a,n,r=new b.a,i=e.ndarray.numericValues.map(function(e){return Math.round(e*Math.pow(10,4))/Math.pow(10,4)}),c=Object(F.a)(e.ndarray.shape,2);for(t=c[0],a=c[1],n=0;n<t;n++)r=r.push(i.slice(n*a,(n+1)*a).join(" & "));return"\\begin{pmatrix}"+r.join(" \\\\ ")+"\\end{pmatrix}"}},{key:"render",value:function(){var e=ne.a.renderToString(this.convertStateToLatex(this.props));return r.a.createElement("div",null,ie()(e))}}]),t}(r.a.Component),se=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(U.a)(this,Object(z.a)(t).call(this,e))).state={hover:!1},a.hoverOn=a.hoverOn.bind(Object(Y.a)(Object(Y.a)(a))),a.hoverOff=a.hoverOff.bind(Object(Y.a)(Object(Y.a)(a))),a}return Object(B.a)(t,e),Object(v.a)(t,[{key:"hoverOn",value:function(){this.setState({hover:!0})}},{key:"hoverOff",value:function(){this.setState({hover:!1})}},{key:"render",value:function(){return r.a.createElement("i",{className:this.state.hover?"fas "+this.props.icon:"far "+this.props.icon,style:{cursor:"pointer"},onMouseEnter:this.hoverOn,onMouseLeave:this.hoverOff,onClick:this.props.onClick,title:this.props.title})}}]),t}(r.a.Component),le=function(e){function t(){return Object(h.a)(this,t),Object(U.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"box has-text-centered"},r.a.createElement(ce,{ndarray:this.props.numerics}),this.props.name,r.a.createElement("br",null),r.a.createElement("span",{className:"icon has-text-info"},r.a.createElement(X,null,r.a.createElement(se,{icon:"fa-edit",title:"Edit the matrix in place"}),"edit ".concat(this.props.name),r.a.createElement($,{ndarray:this.props.numerics,matrixName:this.props.name,edit:!0}))),r.a.createElement("span",{className:"icon has-text-info"},r.a.createElement(X,null,r.a.createElement(se,{icon:"fa-clone",title:"Create a duplicate of this matrix"}),"clone ".concat(this.props.matrixName),r.a.createElement($,{ndarray:this.props.numerics,matrixName:this.props.name,clone:!0}))),r.a.createElement("span",{className:"icon has-text-info"},r.a.createElement(se,{icon:"fa-trash-alt",onClick:function(){return e.props.deleteMatrix(e.props.name)},title:"Delete this matrix"})))}}]),t}(r.a.Component);var oe=Object(s.b)(null,function(e){return Object(c.b)({deleteMatrix:Q},e)})(le),ue=function(e){function t(){return Object(h.a)(this,t),Object(U.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"box has-text-centered"},r.a.createElement("div",{className:"columns is-multiline"},this.props.numerics.nameMatrixPairs.map(function(e){var t=Object(F.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"column",key:a},r.a.createElement("div",{className:"box"},r.a.createElement(ce,{ndarray:n}),r.a.createElement("div",null,a)))})),r.a.createElement("p",null,this.props.name))}}]),t}(r.a.Component),me=function(e){function t(){return Object(h.a)(this,t),Object(U.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"box has-text-centered"},r.a.createElement("b",null,this.props.numerics),r.a.createElement("p",null,this.props.name))}}]),t}(r.a.Component),pe=function(e){function t(){return Object(h.a)(this,t),Object(U.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement(te,{title:"Workspace",createNew:r.a.createElement(ee,null)},this.props.matrixMap.entrySeq().map(function(e){var t=Object(F.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"column is-narrow is-mobile",key:a},de.apply(void 0,[a].concat(Object(M.a)(n))))}))}}]),t}(n.Component),de=function(e,t,a){switch(t){case"SCALAR":return r.a.createElement(me,{name:e,numerics:a});case"NDARRAY":return r.a.createElement(oe,{name:e,numerics:a});case"TUPLE":return r.a.createElement(ue,{name:e,numerics:a});default:return null}};var be=Object(s.b)(function(e){return{matrixMap:e.values}})(pe),he=a(47),ve=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(U.a)(this,Object(z.a)(t).call(this,e))).operate=function(){console.log(a.props);var e=Object(M.a)(Array(a.props.numDropdowns).keys()).map(function(e){return a["dropdown".concat(e)].value});a.props.operationBegin(a.props.codeCreator(e),e,a.props.dataTypes,a.resultName.value,a.props.misc),a.showWarning()},a.showWarning=function(){a.setState({displayWarning:!0})},a.closeWarning=function(){a.setState({displayWarning:!1})},a.operate=a.operate.bind(Object(Y.a)(Object(Y.a)(a))),a.showWarning=a.showWarning.bind(Object(Y.a)(Object(Y.a)(a))),a.closeWarning=a.closeWarning.bind(Object(Y.a)(Object(Y.a)(a))),a.state={matrix_1:"",matrix_2:"",resultVariable:"",displayWarning:!1},a}return Object(B.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"level"},r.a.createElement("div",{className:"level-left"},Object(M.a)(Array(this.props.numDropdowns).keys()).map(function(t){return r.a.createElement("div",{className:"level-item",key:t},r.a.createElement("div",{className:"select"},r.a.createElement("select",{defaultValue:"",ref:function(a){e["dropdown".concat(t)]=a}},r.a.createElement("option",{value:"",disabled:!0},"--Select Matrix--"),e.props.matrixMap.keySeq().map(function(e){return r.a.createElement("option",{value:e,key:e},e)}))))})),r.a.createElement("div",{className:"level-right"},r.a.createElement("div",{className:"level-item"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Store Result As",ref:function(t){e.resultName=t}})))),r.a.createElement("br",null),r.a.createElement("div",{className:"level"},r.a.createElement("div",{className:"level-left"},this.state.displayWarning&&this.props.mostRecentError&&r.a.createElement("div",{className:"notification is-warning"},r.a.createElement("button",{className:"delete",onClick:this.closeWarning}),r.a.createElement("p",null,r.a.createElement("b",null,"Numpy Error: "),this.props.mostRecentError))),r.a.createElement("div",{className:"level-right"},r.a.createElement("div",{className:"level-item"},r.a.createElement(he.Button,{onClick:this.operate},"Operate")))))}}]),t}(r.a.Component);Object(s.b)(function(e){return{matrixMap:e.matrices,mostRecentError:e.error}},function(e){return Object(c.b)({operationBegin:I},e)})(ve);var fe=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(U.a)(this,Object(z.a)(t).call(this,e))).selectTab=function(e){a.setState({operationType:e})},a.isActive=function(e){return a.state.operationType===e?"is-active":""},a.isActive=a.isActive.bind(Object(Y.a)(Object(Y.a)(a))),a.selectTab=a.selectTab.bind(Object(Y.a)(Object(Y.a)(a))),a.state={operationType:"Decompositions",operation:""},a}return Object(B.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tabs"},r.a.createElement("ul",null,r.a.createElement("li",{className:this.isActive("Arithmetic")},r.a.createElement("a",{onClick:function(){return e.selectTab("Arithmetic")}},"Arithmetic")),r.a.createElement("li",{className:this.isActive("Decompositions")},r.a.createElement("a",{onClick:function(){return e.selectTab("Decompositions")}},"Decompositions"))))}}]),t}(n.Component),Oe=function(e){function t(){return Object(h.a)(this,t),Object(U.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"section"},r.a.createElement(fe,null)),r.a.createElement("section",{className:"section"},r.a.createElement(be,null)),",")}}]),t}(n.Component),je=function(e){function t(){return Object(h.a)(this,t),Object(U.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Oe,null))}}]),t}(n.Component),Ee=Object(L.createLogger)({stateTransformer:function(e){for(var t={},a=Object.keys(e),n=0;n<a.length;n++){var r=a[n];b.c.Iterable.isIterable(e[r])?t[r]=e[r].toJS():t[r]=e[r]}return t}}),ye=Object(C.a)(),Ne=Object(c.d)(w,Object(c.a)(ye,Ee));ye.run(_),Object(i.render)(r.a.createElement(s.a,{store:Ne},r.a.createElement(je,null)),document.getElementById("root"))}},[[65,2,1]]]);
//# sourceMappingURL=main.e0b46649.chunk.js.map