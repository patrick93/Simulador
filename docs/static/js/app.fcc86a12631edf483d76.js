webpackJsonp([1],{"+bEf":function(t,e){},0:function(t,e){},"7WFO":function(t,e){},EGUE:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("/ocq"),i=a("ESwS"),r=a.n(i),o=a("9VIl"),l=a.n(o),c=a("8+8L"),u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header clearfix"},[e("a",{attrs:{href:"/"}},[e("h3",{staticClass:"text-muted"},[this._v("Simulador")])])])}]};var v=a("VU/8")({name:"Header"},u,!1,function(t){a("EGUE")},"data-v-cc68cca2",null).exports,m=a("+cKO"),d={name:"LoanPreview",props:["loanValue","months","interestRate"],computed:{monthPayment:function(){var t=this.interestRate/100,e=Math.ceil(this.loanValue*t/(1-1/Math.pow(1+t,this.months))*100)/100;return isNaN(e)?0:e},total:function(){var t=Math.ceil(this.months*this.monthPayment*100)/100;return isNaN(t)?0:t}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loan-preview"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{staticClass:"w-50"},[t._v("Valor")]),t._v(" "),a("td",{staticClass:"w-50"},[t._v(t._s(t.loanValue.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2})))])]),t._v(" "),a("tr",[a("th",{staticClass:"w-50"},[t._v("Meses")]),t._v(" "),a("td",{staticClass:"w-50"},[t._v(t._s(t.months.toLocaleString("pt-BR")))])]),t._v(" "),a("tr",[a("th",{staticClass:"w-50"},[t._v("Juros")]),t._v(" "),a("td",{staticClass:"w-50"},[t._v(t._s(t.interestRate.toLocaleString("pt-BR",{minimumFractionDigits:2}))+" %")])]),t._v(" "),a("tr",[a("th",{staticClass:"w-50"},[t._v("Parcelas")]),t._v(" "),a("td",{staticClass:"w-50"},[t._v(t._s(t.monthPayment.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2})))])]),t._v(" "),a("tr",[a("th",{staticClass:"w-50"},[t._v("Total")]),t._v(" "),a("td",{staticClass:"w-50"},[t._v(t._s(t.total.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2})))])])])])])},staticRenderFns:[]};var _=a("VU/8")(d,p,!1,function(t){a("O3Ja")},"data-v-85981f6e",null).exports,f={name:"Loan",components:{Money:o.Money,LoanPreview:_},data:function(){return{loan:{value:0,format:{decimal:",",thousands:".",prefix:"R$ ",suffix:"",precision:2,masked:!1}},months:{value:3,options:[3,4,5,6,7,8,9,10,11,12]},interestRate:{value:3,format:{decimal:",",thousands:".",prefix:"",suffix:" %",precision:2,masked:!1}}}},validations:{loan:{value:{between:Object(m.between)(0,1e5)}},interestRate:{value:{between:Object(m.between)(3,8)}}},methods:{submit:function(){this.$store.setLoan({months:this.months.value,value:this.loan.value,interestRate:this.interestRate.value}),this.$router.push("client")},isFormValid:function(){return this.$v.$invalid}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loan"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("Valor Empréstimo")]),t._v(" "),a("money",t._b({staticClass:"form-control",class:{"is-invalid":t.$v.loan.value.$error},on:{input:function(e){t.$v.loan.value.$touch()}},model:{value:t.loan.value,callback:function(e){t.$set(t.loan,"value",e)},expression:"loan.value"}},"money",t.loan.format,!1)),t._v(" "),t.$v.loan.value.$error?a("div",{staticClass:"invalid-feedback"},[t.$v.loan.value.between?t._e():a("span",[t._v("O valor do empréstimo deve ser entre "+t._s(t.$v.loan.value.$params.between.min.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2}))+" e "+t._s(t.$v.loan.value.$params.between.max.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2})))])]):t._e()],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("Meses")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.months.value,expression:"months.value"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.months,"value",e.target.multiple?a:a[0])}}},t._l(t.months.options,function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("Juros")]),t._v(" "),a("money",t._b({staticClass:"form-control",class:{"is-invalid":t.$v.interestRate.value.$error},on:{input:function(e){t.$v.interestRate.value.$touch()}},model:{value:t.interestRate.value,callback:function(e){t.$set(t.interestRate,"value",e)},expression:"interestRate.value"}},"money",t.interestRate.format,!1)),t._v(" "),t.$v.interestRate.value.$error?a("div",{staticClass:"invalid-feedback"},[t.$v.interestRate.value.between?t._e():a("span",[t._v("A taxa de juros deve ser entre "+t._s(t.$v.interestRate.value.$params.between.min.toLocaleString("pt-BR",{minimumFractionDigits:2}))+"% e "+t._s(t.$v.interestRate.value.$params.between.max.toLocaleString("pt-BR",{minimumFractionDigits:2}))+"%")])]):t._e()],1)]),t._v(" "),a("div",{staticClass:"card preview"},[a("div",{staticClass:"card-header"},[t._v("\n      Resultado\n    ")]),t._v(" "),a("div",{staticClass:"card-body"},[a("loan-preview",{attrs:{"loan-value":t.loan.value,months:t.months.value,"interest-rate":t.interestRate.value}})],1)]),t._v(" "),a("button",{staticClass:"btn btn-success submit-button",attrs:{disabled:t.isFormValid()},on:{click:t.submit}},[t._v("Enviar")])])},staticRenderFns:[]};var b=a("VU/8")(f,h,!1,function(t){a("zd4s")},"data-v-c613c5a4",null).exports,$={name:"App",components:{Loan:b,Header:v}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("Header"),this._v(" "),e("router-view")],1)])},staticRenderFns:[]};var g=a("VU/8")($,C,!1,function(t){a("7WFO")},null,null).exports,R=a("hlPV"),y=a("URu4"),w=a("d7EF"),E=a.n(w);function j(t){var e,a,n=(e=t.length,a=e-6,function(){return a=a<=2?9:a-1}),s=t.split("").reduce(function(t,e){return t+(e=parseInt(e))*n()},0);return s%11<2?0:11-s%11}var x=Object(i.withParams)({type:"cnpj"},function(t){return!Object(y.req)(t)||function(t){var e=t.replace(/\.|-|\//g,"");if(14!==e.length)return!1;if(/^(\d)\1*$/.test(e))return!1;var a=function(t,e){return[t.slice(0,e),t.slice(e)]}(e,12),n=E()(a,2),s=n[0],i=n[1],r=E()(i,2),o=r[0],l=r[1],c=j(s);return c.toString()===o&&j(s+c).toString()===l}(t)}),F={name:"ClientForm",components:{TheMask:R.TheMask},data:function(){return{email:"",cnpj:"",loading:!1}},validations:{email:{required:m.required,email:m.email},cnpj:{required:m.required,cnpj:x}},methods:{submit:function(){var t=this;this.loading=!0,this.$store.setClient({cnpj:this.cnpj,email:this.email}),this.$http.post("https://httpbin.org/post",this.$store.getState()).then(function(e){t.loading=!1,t.$router.push("/summary")},function(e){t.loading=!1,console.error(e)})},isFormValid:function(){return this.$v.$invalid},getSubmitButtonMessage:function(){return this.loading?"Enviando...":"Enviar"}}},L={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"client-form"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("CNPJ")]),t._v(" "),a("the-mask",{staticClass:"form-control",class:{"is-invalid":t.$v.cnpj.$error},attrs:{mask:"##.###.###/####-##",masked:!0,type:"text"},on:{input:function(e){t.$v.cnpj.$touch()}},model:{value:t.cnpj,callback:function(e){t.cnpj=e},expression:"cnpj"}}),t._v(" "),t.$v.cnpj.$error?a("div",{staticClass:"invalid-feedback"},[t.$v.cnpj.required?t._e():a("span",[t._v("Este campo é necessário")]),t._v(" "),t.$v.cnpj.cnpj?t._e():a("span",[t._v("CNPJ inválido")])]):t._e()],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":t.$v.email.$error},attrs:{type:"email"},domProps:{value:t.email},on:{input:[function(e){e.target.composing||(t.email=e.target.value)},function(e){t.$v.email.$touch()}]}}),t._v(" "),t.$v.email.$error?a("div",{staticClass:"invalid-feedback"},[t.$v.email.required?t._e():a("span",[t._v("Este campo é necessário")]),t._v(" "),t.$v.email.email?t._e():a("span",[t._v("Email inválido")])]):t._e()])]),t._v(" "),a("button",{staticClass:"btn btn-success submit-button",attrs:{disabled:t.isFormValid()||t.loading},on:{click:t.submit}},[t._v(t._s(t.getSubmitButtonMessage()))])])},staticRenderFns:[]};var S=a("VU/8")(F,L,!1,function(t){a("+bEf")},"data-v-c71f3f90",null).exports,k={name:"Summary",components:{LoanPreview:_},data:function(){var t=this.$store.getState();return{loan:t.loan,client:t.client}}},V={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"summary"},[t._m(0),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("\n      Resumo\n    ")]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row client-info"},[a("div",{staticClass:"col-md-6"},[a("b",[t._v("CNPJ:")]),t._v(" "),a("span",[t._v(t._s(t.client.cnpj))])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("b",[t._v("Email:")]),t._v(" "),a("span",[t._v(t._s(t.client.email))])])]),t._v(" "),a("loan-preview",{attrs:{"loan-value":t.loan.value,months:t.loan.months,"interest-rate":t.loan.interestRate}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("h2",{staticStyle:{color:"#0fad00"}},[this._v("Pedido realizado com sucesso")]),this._v(" "),e("p",{staticStyle:{"font-size":"20px"}},[this._v("Estamos analisando o pedido. Entraremos em contato por email com a resposta ao pedido. "),e("br"),this._v(" Veja abaixo um resumo do pedido")])])])}]};var B=a("VU/8")(k,V,!1,function(t){a("Q+tC")},"data-v-55ea0bd2",null).exports,P=new s.a({routes:[{path:"/",name:"Loan",component:b},{path:"/client",name:"ClientForm",component:S},{path:"/summary",name:"Summary",component:B}]});a("Jmt5");var M,N=(M={loan:{value:0,months:0,interestRate:0},client:{cnpj:"",email:""}},{getState:function(){return M},setLoan:function(t){M.loan=t},setClient:function(t){M.client=t}});n.a.config.productionTip=!1,n.a.use(s.a),n.a.use(r.a),n.a.use(c.a),n.a.use(l.a,{precision:4}),n.a.mixin({beforeCreate:function(){var t=this.$options;t.store?this.$store=t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}),new n.a({el:"#app",router:P,store:N,components:{App:g},template:"<App/>"})},O3Ja:function(t,e){},"Q+tC":function(t,e){},zd4s:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fcc86a12631edf483d76.js.map