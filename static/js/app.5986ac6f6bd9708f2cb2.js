webpackJsonp([1],{"7P3R":function(t,e){},CY59:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),r={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var c=n("VU/8")({name:"app",components:{},mounted:function(){},beforeDestroy:function(){}},r,!1,function(t){n("dTcO")},null,null).exports,i=n("/ocq"),a=n("Dd8w"),o=n.n(a),u=n("NYxO"),l={name:"Register",props:[],computed:o()({},Object(u.b)({token:function(t){return t.accessToken}})),methods:{register:function(){console.log("register!")}},mounted:function(){console.log(this.$store.state)}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Register"},[e("div",{staticClass:"content gray"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("button",{staticClass:"btn btn-block blue",on:{click:this.register}},[this._v("Register")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-padded"},[e("p",{staticClass:"content-padded text-center"},[this._v("Please Register your BEA Account!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"input-group"},[e("div",{staticClass:"input-icon",attrs:{id:"input"}},[e("span",{staticClass:"icon icon-person"}),this._v(" "),e("input",{staticClass:"login-icon",attrs:{type:"tel",placeholder:"Your Mobilenumber"}})])])}]};var d=n("VU/8")(l,p,!1,function(t){n("7P3R")},"data-v-502ecb26",null).exports,h={name:"Welcome",props:[],computed:o()({},Object(u.b)({token:function(t){return t.accessToken}})),methods:{},mounted:function(){var t=COBI.parameters.state();console.log(t),"edit"===t&&this.$router.push("/register"),"experience"===t&&this.$router.push("/experience")}},f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Welcome"},[e("div",{staticClass:"content gray"},[e("div",{staticClass:"content-padded"},[e("p",{staticClass:"content-padded text-center"},[this._v("Devpanel")])]),this._v(" "),e("a",{staticClass:"btn btn-block blue",attrs:{href:"#/register"}},[this._v("Register")])])])}]};var m=n("VU/8")(h,f,!1,function(t){n("kbuM")},"data-v-61b2ba50",null).exports,v={name:"Experience",props:[],computed:o()({},Object(u.b)({token:function(t){return t.accessToken}})),methods:{},mounted:function(){var t=COBI.parameters.state();console.log(t)}},_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Experience"},[e("div",{staticClass:"content gray"})])}]};var b=n("VU/8")(v,_,!1,function(t){n("CY59")},"data-v-0d36b125",null).exports;s.a.use(i.a);var g=new i.a({routes:[{path:"/",component:m},{path:"/register",component:d},{path:"/experience",component:b}]});s.a.use(u.a);var C=new u.a.Store({state:{accessToken:""},getters:{getLatestUser:function(t){return t.latestUsers}},actions:{clearState:function(t){return(0,t.commit)("clearState")}},mutations:{accessToken:function(t,e){t.accessToken=e}}});s.a.config.productionTip=!1,COBI.init("token — can be anything right now"),new s.a({el:"#app",router:g,store:C,components:{App:c},template:"<App/>"})},dTcO:function(t,e){},kbuM:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5986ac6f6bd9708f2cb2.js.map