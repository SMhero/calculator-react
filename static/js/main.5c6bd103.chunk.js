(this["webpackJsonpcalculator-react"]=this["webpackJsonpcalculator-react"]||[]).push([[0],{13:function(e,a,t){e.exports={app:"App_app__1IksY",logo:"App_logo__2loz0","App-logo-spin":"App_App-logo-spin__3LF-c",header:"App_header__2MS2l"}},18:function(e,a,t){e.exports={button:"Button_button__3QF_k"}},20:function(e,a,t){e.exports=t.p+"static/media/logo.4b9bd167.svg"},22:function(e,a,t){e.exports=t(35)},34:function(e,a){},35:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(17),r=t.n(c),o=t(4),u=t(37),s=t(18),i=t.n(s),p=function(e){var a=e.onClick,t=e.type,n=void 0===t?"":t,c=e.value;return l.a.createElement("button",{className:i.a.button,onClick:a,"data-type":n},c)},m=[1,2,3,4,5,6,7,8,9,0],_=t(5),v=t.n(_),E=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],c=a[1],r=function(e){var a=e.currentTarget;c(t+a.innerText)};return l.a.createElement("div",{className:v.a.calc},l.a.createElement("div",{className:v.a.screen},l.a.createElement("input",{className:v.a.input,type:"text",readOnly:!0,value:t})),l.a.createElement("div",{className:v.a.buttons},l.a.createElement("div",{className:v.a.numbers},l.a.createElement(p,{onClick:function(){c("")},value:"AC"}),l.a.createElement(p,{onClick:function(){c(t.slice(0,t.length-1))},value:"Del"}),l.a.createElement(p,{onClick:r,value:"%"}),m.map((function(e){return l.a.createElement(p,{key:e,onClick:r,value:e})}))),l.a.createElement("div",{className:v.a.operators},l.a.createElement(p,{onClick:r,value:"+"}),l.a.createElement(p,{onClick:r,value:"-"}),l.a.createElement(p,{onClick:r,value:"*"}),l.a.createElement(p,{onClick:r,value:"/"}),l.a.createElement(p,{onClick:function(){c(Object(u.a)(t))},type:"calculate",value:"="}))))},d=t(20),C=t.n(d),b=t(13),k=t.n(b),f=function(){return l.a.createElement("div",{className:k.a.app},l.a.createElement("header",{className:k.a.header},l.a.createElement("img",{src:C.a,className:k.a.logo,alt:"logo"})),l.a.createElement(E,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root"))},5:function(e,a,t){e.exports={calc:"Calculator_calc__2vwwm",buttons:"Calculator_buttons__1zPBV",numbers:"Calculator_numbers__3PQ13",operators:"Calculator_operators__3CFSU",screen:"Calculator_screen__YOd2E",input:"Calculator_input__2BAqT"}}},[[22,1,2]]]);
//# sourceMappingURL=main.5c6bd103.chunk.js.map