(this.webpackJsonpbraintraining=this.webpackJsonpbraintraining||[]).push([[0],{27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),l=a.n(i),s=(a(32),a(33),a(10)),c=a(13),o=a(14),u=a(18),m=a(17),h=a(16),d=a(2),p=a(26),E=a(15),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(c.a)(this,a),(n=t.call(this,e)).answer=r.a.createRef(),n.name=r.a.createRef(),n.velocidad=r.a.createRef(),n.incrementNumber=function(e){var t=n.state.numerosCant;n.setState({numerosCant:t+1})},n.decrementNumber=function(e){var t=n.state.numerosCant;if(2===t)return alert("demasiado");n.setState({numerosCant:t-1})},n.randomNumber=function(){var e=[],t="";n.state.letras&&(t+="abcdefghijklmnopqrstuvwxyz"),n.state.letrasMay&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),n.state.numeros&&(t+="0123456789");for(var a=t.length,r=0;r<n.state.numerosCant;r++)e.push(t.charAt(Math.floor(Math.random()*a)));n.setState({num:e,numerosCantActual:n.state.numerosCant,ver:!0})},n.start=function(e){n.randomNumber(),n.timeOut(),n.setState({puntuacion:0,mal:0,bien:0,start:!0})},n.timeOut=function(e){var t=setInterval((function(){n.setState({time:n.state.time-1})}),1e3),a=setTimeout((function(){n.marckRecord(),clearTimeout(t),n.setState({time:90})}),9e4);return function(){return clearTimeout(a)}},n.marckRecord=function(e){n.setState({start:!1}),n.state.puntuacion>n.state.identity.record&&(n.state.identity.record=n.state.puntuacion,localStorage.setItem("identity",JSON.stringify(n.state.identity)))},n.signIn=function(e){e.preventDefault();var t=n.state.bien+Math.abs(n.state.mal);n.setState({stop:t});setTimeout((function(){t===n.state.stop&&n.setState({ver:!1})}),n.state.identity.velocidad);var a=n.answer.current.value;if(n.answer.current.value=null,a===n.state.num.join("")){n.state.algorithm&&n.changeSpeedAlgorithm("WELL");var r=n.state.puntuacion+10*n.state.numerosCantActual/(n.state.identity.velocidad/1e3);r=Math.round(r),n.setState({bien:n.state.bien+1,puntuacion:r,clear:!0})}else n.state.algorithm&&n.changeSpeedAlgorithm("BAD"),n.setState({mal:n.state.mal+1,clear:!0});n.randomNumber()},n.aumentarVelocidad=function(e){e.preventDefault();var t=n.velocidad.current.value;if(isNaN(t))return alert("Ingrese solo numeros");if(0===t)return alert("Ingrese un numero mayor a 0");var a=1e3*t;n.state.identity.velocidad=a,n.setState({identity:n.state.identity}),localStorage.setItem("identity",JSON.stringify(n.state.identity))},n.logIn=function(e){e.preventDefault();var t={alias:n.name.current.value,velocidad:1e3,bien:0,mal:0,numeros:0,palabras:0,letras:0,dias:0,record:0};localStorage.setItem("identity",JSON.stringify(t)),n.setState({identity:t})};var i=JSON.parse(localStorage.getItem("identity"));return n.state={num:null,numerosCant:2,numerosCantActual:2,bien:0,mal:0,puntuacion:0,identity:i,ver:!0,clear:!1,start:!1,stop:0,letrasMay:!0,letras:!0,numeros:!0,changeSpeed:0,algorithm:!0,time:90},n.handleInputChange=n.handleInputChange.bind(Object(E.a)(n)),n}return Object(o.a)(a,[{key:"handleInputChange",value:function(e){var t,a=e.target,n=a.name;("letras"===n||"numeros"===n||"letrasMay"===n||"algorithm"===n)&&(t=a.checked),this.setState(Object(p.a)({},n,t))}},{key:"changeSpeedAlgorithm",value:function(e){var t=this.state.changeSpeed,a=this.state.numerosCant;console.log(a),"WELL"===e&&this.setState({changeSpeed:t+1}),"BAD"===e&&this.setState({changeSpeed:t-1}),2===t&&this.setState({numerosCant:a+1}),a>2&&-2===t&&this.setState({numerosCant:a-1}),2!==t&&-2!==t||this.setState({changeSpeed:0})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.identity?r.a.createElement("div",null,this.state.identity&&r.a.createElement("p",null,"Record: ",this.state.identity.record),r.a.createElement("p",null,"Velocidad: ",this.state.identity.velocidad/1e3," segundo/s"),r.a.createElement("p",null,"Puntuaci\xf3n: ",this.state.puntuacion),r.a.createElement("p",null,"Bien: ",this.state.bien),r.a.createElement("p",null,"Mal: ",this.state.mal),r.a.createElement("p",null,"Cantidad de n\xfameros: ",this.state.numerosCant),r.a.createElement("div",null,r.a.createElement("p",null,"N\xdaMEROS"),r.a.createElement("button",{onClick:this.incrementNumber},"Aumentar"),r.a.createElement("button",{onClick:this.decrementNumber},"Bajar")),r.a.createElement("div",null,this.state.time>60?r.a.createElement("p",null,"1:",this.state.time-60):r.a.createElement("p",null,"0:",this.state.time)),r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"letras"},"Letras"),r.a.createElement("input",{type:"checkbox",name:"letras",checked:this.state.letras,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"numeros"},"Numeros"),r.a.createElement("input",{type:"checkbox",name:"numeros",checked:this.state.numeros,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"letrasMay"},"Letras con mayuscula"),r.a.createElement("input",{type:"checkbox",name:"letrasMay",checked:this.state.letrasMay,onChange:this.handleInputChange})),r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"algorithm"},"Algoritmo"),r.a.createElement("input",{type:"checkbox",name:"algorithm",checked:this.state.algorithm,onChange:this.handleInputChange})),this.state.start&&r.a.createElement("form",{onSubmit:this.signIn},r.a.createElement("input",{type:"text",ref:this.answer})),this.state.ver&&r.a.createElement("p",null,this.state.num),!this.state.start&&r.a.createElement("div",null,r.a.createElement("p",null,"Velocidad"),r.a.createElement("form",null,r.a.createElement("input",{type:"text",onChange:this.aumentarVelocidad,ref:this.velocidad,placeholder:""})),r.a.createElement("button",{onClick:this.start},"Empezar"))):r.a.createElement("div",null,r.a.createElement("p",null,"Ingrese su nombre"),r.a.createElement("form",{onSubmit:this.logIn},r.a.createElement("input",{type:"text",ref:this.name,placeholder:"NOMBRE"}),r.a.createElement("input",{type:"submit",name:"submit"}))))}}]),a}(n.Component),v=a(4),b=Object(v.a)(),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(h.b,{basename:"/"},r.a.createElement(d.c,null,r.a.createElement(d.a,{history:b,exact:!0,path:"/",component:g}),r.a.createElement(d.a,{history:b,exact:!0,path:"/login",component:g}))))}}]),a}(n.Component);var y=function(){return Object(s.c)((function(e){return e.counter})),Object(s.b)(),r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(8),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return!e;default:return e}},N=Object(S.b)({counter:C,isLogged:O}),I=Object(S.c)(N,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(r.a.createElement(s.a,{store:I},r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.18e7d022.chunk.js.map