webpackJsonp([1],{"4kss":function(e,t){},Aslo:function(e,t){},JDLd:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var e=this.$createElement;return(this._self._c||e)("router-view")},staticRenderFns:[]};var i=n("VU/8")({name:"app",components:{},mounted:function(){},beforeDestroy:function(){}},s,!1,function(e){n("dTcO")},null,null).exports,o=n("/ocq"),c=n("Dd8w"),r=n.n(c),l=n("NYxO"),d={name:"PacmanLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"25px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerDelay2:{animationDelay:"0.25s"},spinnerDelay3:{animationDelay:"0.50s"},spinnerDelay4:{animationDelay:"0.75s"},spinnerDelay5:{animationDelay:"1s"}}},computed:{spinnerStyle:function(){return{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius}},border1:function(){return this.size+" solid transparent"},border2:function(){return this.size+" solid "+this.color},spinnerStyle1:function(){return{width:0,height:0,borderTop:this.border2,borderRight:this.border1,borderBottom:this.border2,borderLeft:this.border2,borderRadius:this.size}},animationStyle:function(){return{width:"10px",height:"10px",transform:"translate(0, "+-parseFloat(this.size)/4+"px)",position:"absolute",top:"25px",left:"100px",animationName:"v-pacmanStretchDelay",animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationFillMode:"both"}}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner",style:{position:"relative",fontSize:0}},[n("div",{staticClass:"v-pacman v-pacman1",style:e.spinnerStyle1}),n("div",{staticClass:"v-pacman v-pacman2",style:[e.spinnerStyle,e.animationStyle,e.spinnerDelay2]}),n("div",{staticClass:"v-pacman v-pacman3",style:[e.spinnerStyle,e.animationStyle,e.spinnerDelay3]}),n("div",{staticClass:"v-pacman v-pacman4",style:[e.spinnerStyle,e.animationStyle,e.spinnerDelay4]}),n("div",{staticClass:"v-pacman v-pacman5",style:[e.spinnerStyle,e.animationStyle,e.spinnerDelay5]})])},staticRenderFns:[]};var p={name:"Register",props:[],components:{PacmanLoader:n("VU/8")(d,u,!1,function(e){n("gWgV")},null,null).exports},data:function(){return{loading:!1}},computed:r()({},Object(l.b)({token:function(e){return e.accessToken}})),methods:{register:function(){var e=this;console.log("register!"),this.loading=!0,setTimeout(function(){e.loading=!1,e.$router.push("/user")},2e3)}},mounted:function(){console.log(this.$store.state)}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Register"},[n("div",{staticClass:"content gray"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e.loading?e._e():n("button",{staticClass:"btn btn-block blue",on:{click:e.register}},[e._v("Register")]),e._v(" "),n("div",{staticClass:"content-padded"},[n("pacman-loader",{staticClass:"pacloader",attrs:{loading:e.loading,color:"#00C8E6"}})],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content-padded"},[t("p",{staticClass:"content-padded text-center"},[t("img",{staticClass:"icon",attrs:{src:n("b/KD")}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content-padded"},[t("p",{staticClass:"content-padded text-center"},[this._v("Please Register your BEA Account!")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("form",{staticClass:"input-group"},[t("div",{staticClass:"input-icon",attrs:{id:"input"}},[t("span",{staticClass:"icon icon-person"}),this._v(" "),t("input",{staticClass:"login-icon",attrs:{type:"tel",placeholder:"Your Mobilenumber"}})])])}]};var v=n("VU/8")(p,m,!1,function(e){n("JDLd")},"data-v-30960fef",null).exports,h={name:"Welcome",props:[],computed:r()({},Object(l.b)({token:function(e){return e.accessToken}})),methods:{},mounted:function(){var e=COBI.parameters.state();console.log(e),"edit"===e&&this.$router.push("/register"),"experience"===e&&this.$router.push("/experience")}},f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"Welcome"},[t("div",{staticClass:"content gray"},[t("div",{staticClass:"content-padded"},[t("p",{staticClass:"content-padded text-center"},[this._v("Devpanel")])]),this._v(" "),t("a",{staticClass:"btn btn-block blue",attrs:{href:"#/register"}},[this._v("Register")])])])}]};var g=n("VU/8")(h,f,!1,function(e){n("kbuM")},"data-v-61b2ba50",null).exports,b=n("mvHQ"),_=n.n(b),y={name:"SkewLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"20px"}},data:function(){return{spinnerStyle:{height:0,width:0,borderLeft:this.size+" solid transparent",borderRight:this.size+" solid transparent",borderBottom:this.size+" solid "+this.color}}}},C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"v-spinner"},[t("div",{staticClass:"v-skew",style:this.spinnerStyle})])},staticRenderFns:[]};var S=n("VU/8")(y,C,!1,function(e){n("Aslo")},null,null).exports,x=n("Puvr"),k={name:"Experience",props:[],components:{SkewLoader:S,VueCircle:n.n(x).a},computed:r()({},Object(l.b)({token:function(e){return e.accessToken}}),{fallDeteced:function(){return Math.abs(this.beta)>50||this.test}}),data:function(){return{beta:0,gamma:0,progress:50,test:!1,cancel:!1,calling:!1}},watch:{fallDeteced:function(e,t){}},methods:{handleOrientation:function(e){this.gamma=e.gamma,this.beta=e.beta},call:function(){var e,t;console.log("call"),this.calling=!0,(e=_()({version:"3.0",msisdn:"+4915771707061",identifier:"8e4ebdabce5cdeb6a7d2eb14d47e6cc46fe754e29b23bba5b4cf2a80215ed104",tenant_key:"BSO16",monitoringRequestFlag:!1,msd:{geoPosition:{accuracyLevel:"low",timeStamp:"2018-02-22T13:54:34.165Z",latitude:52.498301,longitude:13.375681,accuracy:1e3,direction:0},language:"de_DE",timeStamp:"2018-02-22T13:54:41.181Z",control_type:0,trigger_type:"auto",event_type:2,call_handling:"callback",event_context_info:["some-id-of-involved-user","some-id-of-involved-user"],event_cause:2,test:!0}}),t=new Headers,t.set("Accept","application/json; charset=utf-8n"),t.set("Content-Type","application/json"),t.set("bes-tenant-id","b1433144-8dc5-4067-a38e-7c95c74d8c95"),t.set("content-type","application/json"),t.set("authorization","BES-ACCESS-KEY x8IEh2zr3RBqySu5SpXfmEOfvidP28xfNs0apj0Rr0a0CSwFNtmp7vYIMol7xP11"),t.set("cache-control","no-cache"),t.set("postman-token","7ec51337-4470-6950-a50d-1d99b3488a09"),fetch("https://gate-stage-bea.s-apps.de1.bosch-iot-cloud.com/bes/v1/event",{method:"POST",headers:t,mode:"cors",cache:"default",body:e}).then(function(e){return e.json()})).then(function(e){console.log("working")})},cancelCall:function(){location.reload(),this.cancel=!0,console.log(this.cancel)},progress_end:function(e){console.log("end"),this.call()}},mounted:function(){var e=COBI.parameters.state();console.log(e),window.addEventListener("deviceorientation",this.handleOrientation)}};_()({version:"3.0",msisdn:"+4915771707061",identifier:"8e4ebdabce5cdeb6a7d2eb14d47e6cc46fe754e29b23bba5b4cf2a80215ed104",tenant_key:"BSO16",monitoringRequestFlag:!1,msd:{geoPosition:{accuracyLevel:"low",timeStamp:"2018-02-22T13:54:34.165Z",latitude:52.498301,longitude:13.375681,accuracy:1e3,direction:0},language:"de_DE",timeStamp:"2018-02-22T13:54:41.181Z",control_type:0,trigger_type:"auto",event_type:2,call_handling:"callback",event_context_info:["some-id-of-involved-user","some-id-of-involved-user"],event_cause:2,test:!0}});var w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Experience"},[a("div",{staticClass:"content gray"},[a("div",{staticClass:"content-padded right"},[a("p",{staticClass:"content-padded text-center"},[a("img",{staticClass:"icon",attrs:{src:n("b/KD")},on:{click:e.call}}),e._v(" "),e.fallDeteced?a("vue-circle",{staticClass:"circle",attrs:{progress:100,size:200,reverse:!1,"line-cap":"round",fill:{color:"#000"},"empty-fill":"rgba(0, 0, 0, .1)","animation-start-value":0,"start-angle":0,"insert-mode":"append",thickness:10,"show-percent":!1,animation:{duration:1e4,easing:"linear"}},on:{"vue-circle-end":e.progress_end}}):e._e()],1),e._v(" "),e.fallDeteced||e.calling?e._e():a("button",{staticClass:"btn",on:{click:e.call}},[e._v("Trigger emergency event")]),e._v(" "),e.fallDeteced&&!e.calling?a("button",{staticClass:"btn",on:{click:e.cancelCall}},[e._v("Cancel emergency event")]):e._e(),e._v(" "),e.calling?a("button",{staticClass:"btn",on:{click:e.cancelCall}},[e._v("Contacting Bosch Emergency Assistant...")]):e._e(),e._v(" "),e.calling?a("p",{staticClass:"content-padded text-center"},[e._v("Help is on the way, try to stay cool")]):e._e()]),e._v(" "),a("div",{class:["left",e.fallDeteced?"fall":""]},[a("skew-loader",{staticClass:"loader",attrs:{loading:!0,color:"#888",size:"10px"}}),e._v(" "),e.fallDeteced?e._e():a("div",{staticClass:"label"},[e._v("Monitoring for crashes")]),e._v(" "),e.fallDeteced?a("div",{staticClass:"label"},[e._v("Crash detected!")]):e._e()],1)])])},staticRenderFns:[]};var D=n("VU/8")(k,w,!1,function(e){n("c9oB")},"data-v-359c15ce",null).exports,E={name:"User",props:[],computed:r()({},Object(l.b)({token:function(e){return e.accessToken}})),methods:{},mounted:function(){console.log(this.$store.state)}},R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"User"},[t("div",{staticClass:"content gray"},[t("div",{staticClass:"content-padded"},[t("p",{staticClass:"content-padded text-center"},[t("img",{staticClass:"icon",attrs:{src:n("b/KD")}})])]),this._v(" "),t("div",{staticClass:"content-padded"},[t("p",{staticClass:"content-padded text-center"},[this._v("Welcome Herbert Meier!")]),this._v(" "),t("p",{staticClass:"content-padded text-center"},[this._v("You now are in the comfort of calling an emergency assistant from within COBI!")]),this._v(" "),t("p",{staticClass:"content-padded text-center"},[this._v("Unsere Agenten sind rund um die Uhr erreichbar, um Ihren Kunden im Notfall zu helfen.")])])])])}]};var T=n("VU/8")(E,R,!1,function(e){n("4kss")},"data-v-7b29b18f",null).exports;a.a.use(o.a);var O=new o.a({routes:[{path:"/",component:g},{path:"/register",component:v},{path:"/experience",component:D},{path:"/user",component:T}]});a.a.use(l.a);var z=new l.a.Store({state:{accessToken:""},getters:{getLatestUser:function(e){return e.latestUsers}},actions:{clearState:function(e){return(0,e.commit)("clearState")}},mutations:{accessToken:function(e,t){e.accessToken=t}}});a.a.config.productionTip=!1,COBI.init("token — can be anything right now"),new a.a({el:"#app",router:O,store:z,components:{App:i},template:"<App/>"})},"b/KD":function(e,t,n){e.exports=n.p+"static/img/bea-icon.b47b5a5.png"},c9oB:function(e,t){},dTcO:function(e,t){},gWgV:function(e,t){},kbuM:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.194f5519e6a9718f0ee5.js.map