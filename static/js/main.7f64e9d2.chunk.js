(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);a(72);var n=a(0),r=a.n(n),i=a(51),s=a(14),c=a(17),l="OPERATION_BEGIN",o="OPERATION_SUCCESS",u="OPERATION_ERROR",m="UPSERT_MATRIX",p="RENAME_MATRIX",d="DELETE_MATRIX",h="CLEAR_TEMP",b=a(24),v=a(3),f=a(4),E=function(){function e(t,a){Object(v.a)(this,e),this.numericValues=t,this.shape=a}return Object(f.a)(e,[{key:"rows",value:function(){return this.shape[0]}},{key:"cols",value:function(){return this.shape[1]}},{key:"serialize",value:function(){return{numericValues:this.numericValues,shape:this.shape}}}]),e}(),O=function(){function e(t,a){Object(v.a)(this,e),this.namev=t,this.ndarrayv=a}return Object(f.a)(e,[{key:"size",get:function(){return this.namev.length}},{key:"nameMatrixPairs",get:function(){var e=this;return this.namev.map(function(t,a){return[t,e.ndarrayv[a]]})}}]),e}(),j=function(){function e(t){Object(v.a)(this,e),this.value=t}return Object(f.a)(e,[{key:"serialize",value:function(){return this.value}}]),e}(),N=[new E([1,1,1,0],[2,2]),new E([1,1,1,4],[2,2]),new E([1,1,1,4],[2,2])],y=new b.b({exampleScalar:["SCALAR",new j(5)],exampleNDArray:["NDARRAY",new E([1,2,3,4],[2,2])],exampleNDArrayTuple:["TUPLE",new O(["U","\u03a3","V"],N)]});function w(e,t,a){return e.contains(t)?e.updateIn([t],function(){return a}):e.set(t,a)}var g=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case m:return e=["NDARRAY",new E(a.numericValues,a.shape)],w(t,a.name,e);case p:return t.mapKeys(function(e){return e===a.name?a.newName:e});case d:return t.remove(a.name);case o:if(a.result.validOperation&&a.misc.save){switch(a.result.dataType){case"NDARRAY":e=["NDARRAY",new E(a.result.result.numericValues,a.result.result.shape)];break;case"TUPLE":e=["TUPLE",new O(a.misc.namev,a.result.result.map(function(e){return new E(e.numericValues,e.shape)}))];break;case"SCALAR":e=["SCALAR",new j(a.result.result)]}return w(t,a.resultVariable,e)}return t;default:return t}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return null;case o:if(t.result.validOperation){var a;switch(t.result.dataType){case"NDARRAY":a=["NDARRAY",new E(t.result.result.numericValues,t.result.result.shape)];break;case"TUPLE":a=["TUPLE",new O(t.misc.namev,t.result.result.map(function(e){return new E(e.numericValues,e.shape)}))];break;case"SCALAR":a=["SCALAR",new j(t.result.result)]}return[t.resultVariable,a]}return e;case h:return null;default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return"";case o:return t.result.validOperation?e:t.result.result;default:return e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case l:return!0;case o:return!1;case u:return"error";default:return e}},C=Object(s.c)({values:g,temp:R,loading:x,error:A}),k=a(125),D=a(126),M=a(34),S=a(26),T=a(66),V=a(58),I=a(124),P=a(127),L=a(122),Y=a(121);function U(e,t,a,n,r){return{type:l,command:e,dataNames:t,dataTypes:a,resultVariable:n,misc:r}}function W(e,t){var a=e.map(function(e){return[t.get(e)[0],t.get(e)[1].serialize()]});return console.log(Object.assign.apply(Object,Object(S.a)(e.map(function(e,t){return Object(M.a)({},e,a[t])})))),Object.assign.apply(Object,Object(S.a)(e.map(function(e,t){return Object(M.a)({},e,a[t])})))}var z=Object(D.a)(function(e,t){return e.pipe(Object(Y.a)(l),Object(T.a)(function(e){return Object(P.a)({url:"https://nzr58np206.execute-api.us-west-2.amazonaws.com/beta-prod/operation",method:"PUT",headers:{"Content-Type":"application/json"},body:{command:e.command,matrices:W(e.dataNames,t.value.values)}}).pipe(Object(V.a)(function(t){return a=e.resultVariable,n=t.response.body,r=e.misc,{type:o,resultVariable:a,result:n,misc:r};var a,n,r}),Object(I.a)(function(e){return Object(L.a)({type:u,errorMessage:e})}))}))}),_=a(67),B=a(7),F=a(5),q=a(6),J=a(21),Z=a(1),X=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(B.a)(this,Object(F.a)(t).call(this,e))).state={modalState:!1},a.toggleModal=a.toggleModal.bind(Object(Z.a)(Object(Z.a)(a))),a}return Object(q.a)(t,e),Object(f.a)(t,[{key:"toggleModal",value:function(){this.setState(function(e,t){return{modalState:!e.modalState}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.cloneElement(this.props.children[0],{onClick:this.toggleModal})),r.a.createElement(G,{closeModal:this.toggleModal,modalState:this.state.modalState,title:this.props.children[1]},r.a.cloneElement(this.props.children[2],{toggle:this.toggleModal})))}}]),t}(r.a.Component),G=function(e){var t=e.children,a=e.closeModal,n=e.modalState,i=e.title;return n?r.a.createElement("div",{className:"modal is-active"},r.a.createElement("div",{className:"modal-background",onClick:a}),r.a.createElement("div",{className:"modal-card"},r.a.createElement("header",{className:"modal-card-head"},r.a.createElement("p",{className:"modal-card-title"},i),r.a.createElement("button",{className:"delete",onClick:a})),r.a.createElement("section",{className:"modal-card-body"},r.a.createElement("div",{className:"content"},t)),r.a.createElement("footer",{className:"modal-card-foot"}))):null},Q=X,$=a(50);function K(e,t,a){return{type:m,name:e,shape:t,numericValues:a}}function H(e,t){return{type:p,name:e,newName:t}}function ee(e){return{type:d,name:e}}var te=new RegExp("^[a-zA-Z]+[1-9a-zA-Z_]*$");var ae=function(e){function t(e){var a;return Object(v.a)(this,t),a=Object(B.a)(this,Object(F.a)(t).call(this,e)),e.create?(a.state={numRows:e.initialRows,numCols:e.initialCols,matrixName:""},a.finishedPopulating=!0):e.edit?(console.log(e.ndarray),a.state={numRows:e.ndarray.rows(),numCols:e.ndarray.cols(),numericValues:e.ndarray.numericValues,matrixName:e.matrixName},a.finishedPopulating=!1):e.clone&&(a.state={numRows:e.ndarray.rows(),numCols:e.ndarray.cols(),numericValues:e.ndarray.numericValues,matrixName:e.matrixName+"_CLONE"},a.finishedPopulating=!1),a.addRow=a.addRow.bind(Object(Z.a)(Object(Z.a)(a))),a.addCol=a.addCol.bind(Object(Z.a)(Object(Z.a)(a))),a.removeRow=a.removeRow.bind(Object(Z.a)(Object(Z.a)(a))),a.removeCol=a.removeCol.bind(Object(Z.a)(Object(Z.a)(a))),a.submit=a.submit.bind(Object(Z.a)(Object(Z.a)(a))),a.updateMatrixName=a.updateMatrixName.bind(Object(Z.a)(Object(Z.a)(a))),a.getStartingValue=a.getStartingValue.bind(Object(Z.a)(Object(Z.a)(a))),a.setFinishedPopulating=a.setFinishedPopulating.bind(Object(Z.a)(Object(Z.a)(a))),a.validMatrixName=a.validMatrixName.bind(Object(Z.a)(Object(Z.a)(a))),a}return Object(q.a)(t,e),Object(f.a)(t,[{key:"addRow",value:function(){this.setState(function(e){return{numRows:Math.min(e.numRows+1,7)}})}},{key:"addCol",value:function(){this.setState(function(e){return{numCols:Math.min(e.numCols+1,7)}})}},{key:"removeRow",value:function(){this.setState(function(e){return{numRows:Math.max(e.numRows-1,1)}})}},{key:"removeCol",value:function(){this.setState(function(e){return{numCols:Math.max(e.numCols-1,1)}})}},{key:"updateMatrixName",value:function(e){this.setState(Object($.a)({},this.state,{matrixName:e}))}},{key:"submit",value:function(){for(var e=[],t=0;t<this.state.numRows;t++)for(var a=0;a<this.state.numCols;a++)e.push(parseFloat(this["textInput".concat(t,",").concat(a)].value)||0);this.props.edit?(this.props.upsertMatrix(this.props.matrixName,[this.state.numRows,this.state.numCols],e),this.props.renameMatrix(this.props.matrixName,this.state.matrixName)):this.props.upsertMatrix(this.state.matrixName,[this.state.numRows,this.state.numCols],e),this.props.toggle()}},{key:"getStartingValue",value:function(e,t){return this.finishedPopulating?null:this.state.numericValues[e*this.state.numCols+t]}},{key:"setFinishedPopulating",value:function(e){this.finishedPopulating=e}},{key:"validMatrixName",value:function(){return""===this.state.matrixName||function(e,t){var a=t.match(e);return null!=a&&t===a[0]}(te,this.state.matrixName)}},{key:"render",value:function(){var e=this,t=r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"field"},r.a.createElement("input",{className:"input",type:"text",value:this.state.matrixName,placeholder:"Matrix Name",onChange:function(t){return e.updateMatrixName(t.target.value)}}),!this.validMatrixName()&&r.a.createElement("p",{className:"help is-danger"},"Matrix name must be a valid Python variable name")),r.a.createElement("div",{className:"columns is-mobile",style:{paddingTop:"25px"}},r.a.createElement("div",{className:"column is-narrow"},Object(S.a)(Array(this.state.numRows).keys()).map(function(t){return r.a.createElement("div",{key:t},Object(S.a)(Array(e.state.numCols).keys()).map(function(a){return r.a.createElement("input",{type:"text",size:"4",style:{fontSize:"20px"},defaultValue:e.getStartingValue(t,a),key:"".concat(t,",").concat(a),ref:function(n){e["textInput".concat(t,",").concat(a)]=n}})}),r.a.createElement("br",null))})),r.a.createElement("div",{className:"column is-one-fifth has-text-left"},r.a.createElement("button",{className:"button is-small",onClick:this.removeRow},"Remove Row"),r.a.createElement("br",null),r.a.createElement("button",{className:"button is-small",onClick:this.addRow},"Add Row"))),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-narrow has-text-left"},r.a.createElement("span",{className:"button is-small",onClick:this.removeCol},"Remove Col"),r.a.createElement("span",{className:"button is-small",onClick:this.addCol},"Add Col"),r.a.createElement("div",{style:{paddingTop:"20px"}},r.a.createElement("button",{className:"button",disabled:""===this.state.matrixName||!this.validMatrixName(),onClick:this.submit},"Submit"))))));return this.setFinishedPopulating(!0),t}}]),t}(r.a.Component);var ne=Object(c.b)(null,function(e){return Object(s.b)({upsertMatrix:K,renameMatrix:H},e)})(ae),re=function(e){function t(){return Object(v.a)(this,t),Object(B.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(Q,null,r.a.createElement("button",{className:"button is-primary"},"Create New Matrix"),"Create New Matrix",r.a.createElement(ne,{initialRows:2,initialCols:2,create:!0}),r.a.createElement("button",{className:"button is-primary"},"Submit"))}}]),t}(r.a.Component),ie=function(e){function t(){return Object(v.a)(this,t),Object(B.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"level"},r.a.createElement("div",{className:"level-left"},r.a.createElement("div",{className:"level-item"},r.a.createElement("h2",{className:"subtitle is-3"},this.props.title," ")),r.a.createElement("div",{className:"level-item"},this.props.createNew))),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"columns is-multiline"},this.props.children)))}}]),t}(n.Component),se=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(B.a)(this,Object(F.a)(t).call(this,e))).state={hover:!1},a.hoverOn=a.hoverOn.bind(Object(Z.a)(Object(Z.a)(a))),a.hoverOff=a.hoverOff.bind(Object(Z.a)(Object(Z.a)(a))),a}return Object(q.a)(t,e),Object(f.a)(t,[{key:"hoverOn",value:function(){this.setState({hover:!0})}},{key:"hoverOff",value:function(){this.setState({hover:!1})}},{key:"render",value:function(){return r.a.createElement("i",{className:this.state.hover?"fas "+this.props.icon:"far "+this.props.icon,style:{cursor:"pointer"},onMouseEnter:this.hoverOn,onMouseLeave:this.hoverOff,onClick:this.props.onClick,title:this.props.title})}}]),t}(r.a.Component),ce=a(68),le=a.n(ce),oe=a(69),ue=a.n(oe),me=function(e){function t(){return Object(v.a)(this,t),Object(B.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(f.a)(t,[{key:"convertStateToLatex",value:function(e){var t,a,n,r=new b.a,i=e.numerics.numericValues.map(function(e){return Math.round(e*Math.pow(10,4))/Math.pow(10,4)}),s=Object(J.a)(e.numerics.shape,2);for(t=s[0],a=s[1],n=0;n<t;n++)r=r.push(i.slice(n*a,(n+1)*a).join(" & "));return"\\begin{pmatrix}"+r.join(" \\\\ ")+"\\end{pmatrix}"}},{key:"render",value:function(){var e=le.a.renderToString(this.convertStateToLatex(this.props));return r.a.createElement("div",null,ue()(e))}}]),t}(r.a.Component),pe=function(e){function t(){return Object(v.a)(this,t),Object(B.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"box has-text-centered"},r.a.createElement(me,{numerics:this.props.numerics}),this.props.name,r.a.createElement("br",null),this.props.edit&&r.a.createElement("span",{className:"icon has-text-info"},r.a.createElement(Q,null,r.a.createElement(se,{icon:"fa-edit",title:"Edit the matrix in place"}),"edit ".concat(this.props.name),r.a.createElement(ne,{ndarray:this.props.numerics,matrixName:this.props.name,edit:!0}))),this.props.clone&&r.a.createElement("span",{className:"icon has-text-info"},r.a.createElement(Q,null,r.a.createElement(se,{icon:"fa-clone",title:"Create a duplicate of this matrix"}),"clone ".concat(this.props.name),r.a.createElement(ne,{ndarray:this.props.numerics,matrixName:this.props.name,clone:!0}))),this.props.delete&&r.a.createElement("span",{className:"icon has-text-info"},r.a.createElement(se,{icon:"fa-trash-alt",onClick:function(){return e.props.deleteMatrix(e.props.name)},title:"Delete this matrix"})))}}]),t}(r.a.Component);var de=Object(c.b)(null,function(e){return Object(s.b)({deleteMatrix:ee},e)})(pe),he=function(e){function t(){return Object(v.a)(this,t),Object(B.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"box has-text-centered"},r.a.createElement("div",{className:"columns is-multiline"},this.props.numerics.nameMatrixPairs.map(function(t){var a=Object(J.a)(t,2),n=a[0],i=a[1];return r.a.createElement("div",{className:"column",key:n},r.a.createElement(de,{numerics:i,name:n,clone:e.props.clone}))})),r.a.createElement("p",null,this.props.name),this.props.delete&&r.a.createElement("span",{className:"icon has-text-info"},r.a.createElement(se,{icon:"fa-trash-alt",onClick:function(){return e.props.deleteMatrix(e.props.name)},title:"Delete this tuple"})))}}]),t}(r.a.Component);var be=Object(c.b)(null,function(e){return Object(s.b)({deleteMatrix:ee},e)})(he),ve=function(e){function t(){return Object(v.a)(this,t),Object(B.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("h4",{className:"subtitle is-4"},Math.round(this.props.numerics.value*Math.pow(10,4))/Math.pow(10,4))}}]),t}(r.a.Component),fe=function(e){function t(){return Object(v.a)(this,t),Object(B.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"box has-text-centered"},r.a.createElement(ve,{numerics:this.props.numerics}),this.props.name)}}]),t}(r.a.Component);var Ee=Object(c.b)(null,function(e){return Object(s.b)({deleteMatrix:ee},e)})(fe),Oe=function(e){function t(){return Object(v.a)(this,t),Object(B.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(ie,{title:"Workspace",createNew:r.a.createElement(re,null)},this.props.workspaceValues.entrySeq().map(function(e){var t=Object(J.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"column is-narrow is-mobile",key:a},je(a,n))}))}}]),t}(n.Component),je=function(e,t){var a=Object(J.a)(t,2),n=a[0],i=a[1];switch(n){case"SCALAR":return r.a.createElement(Ee,{name:e,numerics:i});case"NDARRAY":return r.a.createElement(de,{name:e,numerics:i,edit:!0,clone:!0,delete:!0});case"TUPLE":return r.a.createElement(be,{name:e,numerics:i,clone:!0,delete:!0});default:return null}};var Ne=Object(c.b)(function(e){return{workspaceValues:e.values}})(Oe),ye=a(15);function we(){return{type:h}}var ge=a(70),Re=new RegExp("^[a-zA-Z]+[1-9a-zA-Z_]*$"),Ae="--Select Matrix--";var xe=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(B.a)(this,Object(F.a)(t).call(this,e))).operate=function(){var e=a.state.dropdownValues.toJS();a.props.operationBegin(a.props.codeCreator(e),e,a.props.dataTypes,a.state.resultVariable,Object($.a)({},a.props.misc,{save:a.state.resultVariable})),a.showWarning()},a.showWarning=function(){a.setState({displayWarning:!0})},a.closeWarning=function(){a.setState({displayWarning:!1})},a.operate=a.operate.bind(Object(Z.a)(Object(Z.a)(a))),a.showWarning=a.showWarning.bind(Object(Z.a)(Object(Z.a)(a))),a.closeWarning=a.closeWarning.bind(Object(Z.a)(Object(Z.a)(a))),a.validMatrixName=a.validMatrixName.bind(Object(Z.a)(Object(Z.a)(a))),a.setResult=a.setResult.bind(Object(Z.a)(Object(Z.a)(a))),a.setDropdownValue=a.setDropdownValue.bind(Object(Z.a)(Object(Z.a)(a))),a.state={resultVariable:"",displayWarning:!1,dropdownValues:Object(b.a)(Array(e.numDropdowns).fill().map(function(){return Ae}))},a}return Object(q.a)(t,e),Object(f.a)(t,[{key:"validMatrixName",value:function(){return""===this.state.resultVariable||function(e,t){var a=t.match(e);return null!=a&&t===a[0]}(Re,this.state.resultVariable)}},{key:"setResult",value:function(e){this.setState({resultVariable:e})}},{key:"setDropdownValue",value:function(e,t){var a=e.target.value;this.setState(function(e){return{dropdownValues:e.dropdownValues.set(t,a)}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"level"},r.a.createElement("div",{className:"level-left"},r.a.createElement("div",{className:"level-item"},r.a.createElement("div",{className:"columns"},Object(S.a)(Array(this.props.numDropdowns).keys()).map(function(t){return r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("div",{className:"select"},r.a.createElement("select",{value:e.state.dropdownValues.get(t),onChange:function(a){return e.setDropdownValue(a,t)}},r.a.createElement("option",{value:Ae,disabled:!0},Ae),e.props.workspaceMatrices.keySeq().map(function(e){return r.a.createElement("option",{value:e,key:e},e)}))),r.a.createElement("br",null),r.a.createElement("br",null),e.state.dropdownValues.get(t)!==Ae&&ke([e.state.dropdownValues.get(t),e.props.workspaceMatrices.get(e.state.dropdownValues.get(t))]))})))),r.a.createElement("div",{className:"level-right"},r.a.createElement("div",{className:"level-item"},r.a.createElement("div",null,r.a.createElement("input",{className:"input",type:"text",placeholder:"Save Result As",value:this.state.resultVariable,onChange:function(t){return e.setResult(t.target.value)}}),!this.validMatrixName()&&r.a.createElement("p",{className:"help is-danger"},"Result name must be a valid Python variable name"))))),r.a.createElement("br",null),r.a.createElement("div",{className:"level"},r.a.createElement("div",{className:"level-left"},this.state.displayWarning&&this.props.mostRecentError&&r.a.createElement("div",{className:"notification is-warning"},r.a.createElement("button",{className:"delete",onClick:this.closeWarning}),r.a.createElement("p",null,r.a.createElement("b",null,"Numpy Error: "),this.props.mostRecentError)),Ce(this.props.temp),this.props.loading&&r.a.createElement(ge.GridLoader,{color:"#00bfff"})),r.a.createElement("div",{className:"level-right"},r.a.createElement("div",{className:"level-item"},r.a.createElement(ye.Button,{onClick:this.operate},"Operate")))))}}]),t}(r.a.Component),Ce=function(e){return e?r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement("h2",{className:"subtitle is-3"},"Result:"),e&&ke(e)):null},ke=function(e){var t=Object(J.a)(e,2),a=t[0],n=Object(J.a)(t[1],2),i=n[0],s=n[1];switch(i){case"SCALAR":return r.a.createElement(ve,{name:a,numerics:s});case"NDARRAY":return r.a.createElement(me,{name:a,numerics:s,edit:!0,clone:!0,delete:!0});case"TUPLE":return r.a.createElement(be,{name:a,numerics:s});default:return null}};var De=Object(c.b)(function(e){return{workspaceMatrices:e.values.filter(function(e){return"NDARRAY"===e[0]}),temp:e.temp,mostRecentError:e.error,loading:e.loading}},function(e){return Object(s.b)({operationBegin:U},e)})(xe);function Me(e){return"np.linalg.inv(".concat(e[0],")")}var Se=["NDARRAY"];function Te(e){return"np.transpose(".concat(e[0],")")}var Ve=["NDARRAY"];function Ie(e){return"np.add(".concat(e[0],", ").concat(e[1],")")}var Pe=["NDARRAY","NDARRAY"];function Le(e){return"np.subtract(".concat(e[0],", ").concat(e[1],")")}var Ye=["NDARRAY","NDARRAY"];function Ue(e){return"np.dot(".concat(e[0],", ").concat(e[1],")")}var We=["NDARRAY","NDARRAY"];function ze(e){return"np.linalg.svd(".concat(e[0],", full_matrices=False)")}var _e=["NDARRAY"];function Be(e){return"np.linalg.eig(".concat(e[0],")")}var Fe=["NDARRAY"];function qe(e){return"np.linalg.qr(".concat(e[0],")")}var Je=["NDARRAY"];function Ze(e){return"np.linalg.det(".concat(e[0],")")}var Xe=["NDARRAY"];function Ge(e){return"sp.linalg.null_space(".concat(e[0],")")}var Qe=["NDARRAY"];var $e=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(B.a)(this,Object(F.a)(t).call(this,e))).selectTab=function(e){a.props.clearTemp(),a.setState({operationType:e,operation:""})},a.operationSelected=function(e){a.props.clearTemp(),a.setState({operation:e})},a.isActive=function(e){return a.state.operationType===e?"is-active":""},a.isActive=a.isActive.bind(Object(Z.a)(Object(Z.a)(a))),a.selectTab=a.selectTab.bind(Object(Z.a)(Object(Z.a)(a))),a.operationSelected=a.operationSelected.bind(Object(Z.a)(Object(Z.a)(a))),a.state={operationType:"Arithmetic",operation:""},a}return Object(q.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"tabs"},r.a.createElement("ul",null,r.a.createElement("li",{className:this.isActive("Arithmetic")},r.a.createElement("a",{onClick:function(){return e.selectTab("Arithmetic")}},"Arithmetic")),r.a.createElement("li",{className:this.isActive("Decompositions")},r.a.createElement("a",{onClick:function(){return e.selectTab("Decompositions")}},"Decompositions")))),"Arithmetic"===this.state.operationType&&r.a.createElement("div",{className:"box"},r.a.createElement(ye.Dropdown,{value:this.state.operation,onChange:this.operationSelected,color:"info"},r.a.createElement(ye.Dropdown.Item,{value:""},"--Select Arithmetic Operation--"),r.a.createElement(ye.Dropdown.Item,{value:"invert"},"Invert"),r.a.createElement(ye.Dropdown.Item,{value:"transpose"},"Transpose"),r.a.createElement(ye.Dropdown.Item,{value:"add"},"Add"),r.a.createElement(ye.Dropdown.Item,{value:"subtract"},"Subtract"),r.a.createElement(ye.Dropdown.Item,{value:"multiply"},"Multiply"),r.a.createElement(ye.Dropdown.Item,{value:"determinant"},"Determinant")),r.a.createElement("hr",null),"invert"===this.state.operation&&r.a.createElement(De,{numDropdowns:1,codeCreator:Me,dataTypes:Se}),"transpose"===this.state.operation&&r.a.createElement(De,{numDropdowns:1,codeCreator:Te,dataTypes:Ve}),"add"===this.state.operation&&r.a.createElement(De,{numDropdowns:2,codeCreator:Ie,dataTypes:Pe}),"subtract"===this.state.operation&&r.a.createElement(De,{numDropdowns:2,codeCreator:Le,dataTypes:Ye}),"multiply"===this.state.operation&&r.a.createElement(De,{numDropdowns:2,codeCreator:Ue,dataTypes:We}),"determinant"===this.state.operation&&r.a.createElement(De,{numDropdowns:1,codeCreator:Ze,dataTypes:Xe})),"Decompositions"===this.state.operationType&&r.a.createElement("div",{className:"box"},r.a.createElement(ye.Dropdown,{value:this.state.operation,onChange:this.operationSelected,color:"info"},r.a.createElement(ye.Dropdown.Item,{value:""},"--Select Decomposition--"),r.a.createElement(ye.Dropdown.Item,{value:"svd"},"SVD"),r.a.createElement(ye.Dropdown.Item,{value:"eigenvectors"},"Eigenvectors/values"),r.a.createElement(ye.Dropdown.Item,{value:"qr"},"QR")),r.a.createElement("hr",null),"svd"===this.state.operation&&r.a.createElement(De,{numDropdowns:1,codeCreator:ze,dataTypes:_e,misc:{namev:["U","\u03a3","V"]}}),"eigenvectors"===this.state.operation&&r.a.createElement(De,{numDropdowns:1,codeCreator:Be,dataTypes:Fe,misc:{namev:["eigenvalues","eigenvectors"]}}),"qr"===this.state.operation&&r.a.createElement(De,{numDropdowns:1,codeCreator:qe,dataTypes:Je,misc:{namev:["Q","R"]}})),"Misc"===this.state.operationType&&r.a.createElement("div",{className:"box"},r.a.createElement(ye.Dropdown,{value:this.state.operation,onChange:this.operationSelected,color:"info"},r.a.createElement(ye.Dropdown.Item,{value:""},"--Select Operation--"),r.a.createElement(ye.Dropdown.Item,{value:"nullspace"},"NullSpace")),r.a.createElement("hr",null),"nullspace"===this.state.operation&&r.a.createElement(De,{numDropdowns:1,codeCreator:Ge,dataTypes:Qe,misc:{namev:["U","\u03a3","V"]}})))}}]),t}(n.Component);var Ke=Object(c.b)(null,function(e){return Object(s.b)({clearTemp:we},e)})($e),He=function(e){function t(){return Object(v.a)(this,t),Object(B.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("section",null,r.a.createElement("h1",{className:"title is-3"},"BearMath")),r.a.createElement("br",null),r.a.createElement("section",null,r.a.createElement(Ke,null)),r.a.createElement("br",null),r.a.createElement("section",null,r.a.createElement(Ne,null)),",")}}]),t}(n.Component),et=function(e){function t(){return Object(v.a)(this,t),Object(B.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(He,null))}}]),t}(n.Component),tt=Object(_.createLogger)({stateTransformer:function(e){for(var t={},a=Object.keys(e),n=0;n<a.length;n++){var r=a[n];b.c.Iterable.isIterable(e[r])?t[r]=e[r].toJS():t[r]=e[r]}return t}}),at=Object(k.a)(),nt=Object(s.d)(C,Object(s.a)(at,tt));at.run(z),Object(i.render)(r.a.createElement(c.a,{store:nt},r.a.createElement(et,null)),document.getElementById("root"))},71:function(e,t,a){e.exports=a(119)}},[[71,2,1]]]);
//# sourceMappingURL=main.7f64e9d2.chunk.js.map