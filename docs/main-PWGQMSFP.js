import{Ca as m,Da as a,Ea as s,Eb as g,L as n,P as i,Q as p,Qa as c,Ua as f,kb as d,nb as l,ob as u,rb as h,ub as C}from"./chunk-L42ZQG7L.js";var M=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=i({type:t,selectors:[["shared-error404-page"]],decls:2,vars:0,template:function(o,D){o&1&&(m(0,"p"),c(1,"error404-page works!"),a())},encapsulation:2});let e=t;return e})();var x=[{path:"auth",loadChildren:()=>import("./chunk-4AJUBDSL.js").then(e=>e.AuthModule)},{path:"heroes",loadChildren:()=>import("./chunk-BSE4KRL2.js").then(e=>e.HeroesModule)},{path:"404",component:M},{path:"",redirectTo:"heroes",pathMatch:"full"},{path:"**",redirectTo:"404"}];var y={providers:[C(x),g(),l()]};var A=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=p({type:t}),t.\u0275inj=n({});let e=t;return e})();var w=(()=>{let t=class t{constructor(){this.title="heroesApp"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=i({type:t,selectors:[["app-root"]],standalone:!0,features:[f],decls:1,vars:0,template:function(o,D){o&1&&s(0,"router-outlet")},dependencies:[d,h,A]});let e=t;return e})();u(w,y).catch(e=>console.error(e));