(this.webpackJsonpbraintraining=this.webpackJsonpbraintraining||[]).push([[0],{26:function(e,a,t){e.exports=t(46)},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(23),i=t.n(o),s=(t(31),t(4)),l=t(5),c=t(7),m=t(6),d=t(10),u=t(2),p=(t(32),t(33),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"main"},n.a.createElement("div",{id:"header"},n.a.createElement("h1",null,"BRAIN TRAINING"),n.a.createElement("span",{id:"span1"},n.a.createElement("span",{id:"span2"}))),n.a.createElement("div",{id:"nav"},n.a.createElement("div",{className:"components",id:"primero"},n.a.createElement("div",{className:"cuadrado",id:"comp1"},n.a.createElement(d.b,{style:{textDecoration:"none",color:"black"},to:"/Memory"},n.a.createElement("div",{className:"cuadrado2"},n.a.createElement("p",null,"Memoria"))))),n.a.createElement("div",{className:"components",id:"cuadrados"},n.a.createElement("div",{className:"cuadrado",id:"comp2"},n.a.createElement(d.b,{style:{textDecoration:"none",color:"black"},to:"/lengua"},n.a.createElement("div",{className:"cuadrado2"},n.a.createElement("p",null,"Ortogr\xeda"))))),n.a.createElement("div",{className:"components"},n.a.createElement("div",{className:"cuadrado",id:"comp3"},n.a.createElement(d.b,{style:{textDecoration:"none",color:"black"},to:"/English"},n.a.createElement("div",{className:"cuadrado2"},n.a.createElement("p",null,"Ingles")))))))}}]),t}(r.Component)),h=t(25),b=t(15),g=(t(38),t(39),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).startTimer=function(){r.setState({isIn:1});var e=setInterval((function(){r.setState({timeLeft:r.state.time_limit-r.state.timePassed,timePassed:r.state.timePassed+1}),0===r.state.timeLeft&&(clearInterval(e),r.props.timeOut(),r.setState({isIn:0}))}),1e3)},r.state={time_limit:r.props.time,timeLeft:r.props.time,timePassed:1,isIn:0},r}return Object(l.a)(t,[{key:"calculateTimeFraction",value:function(){var e=this.state.timeLeft/this.state.time_limit;return e-1/this.state.time_limit*(1-e)}},{key:"render",value:function(){return!0===this.props.timeStart&&0===this.state.isIn&&this.startTimer(),console.log(this.props),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"app"},n.a.createElement("div",{class:"base-timer"},n.a.createElement("svg",{class:"base-timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("g",{class:"base-timer__circle"},n.a.createElement("circle",{class:"base-timer__path-elapsed",cx:"50",cy:"50",r:"45"}),n.a.createElement("path",{id:"base-timer-path-remaining","stroke-dasharray":"283",class:"base-timer__path-remaining arc",d:"\r M 50, 50\r m -45, 0\r a 45,45 0 1,0 90,0\r a 45,45 0 1,0 -90,0\r "}))),n.a.createElement("span",{id:"base-timer-label",class:"base-timer__label"},this.state.timeLeft>69||this.state.timeLeft>69?n.a.createElement("p",null,"1:",this.state.timeLeft-60):this.state.timeLeft>60?n.a.createElement("p",null,"1:0",this.state.timeLeft-60):n.a.createElement("p",null,this.state.timeLeft)))))}}]),t}(r.Component)),v=t(8),f=t(9),E=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var r;Object(s.a)(this,t),(r=a.call(this,e)).answer=n.a.createRef(),r.name=n.a.createRef(),r.velocidad=n.a.createRef(),r.incrementNumber=function(e){var a=r.state.numerosCant;r.setState({numerosCant:a+1})},r.decrementNumber=function(e){var a=r.state.numerosCant;if(2===a)return"";r.setState({numerosCant:a-1})},r.randomNumber=function(){var e=[],a="";r.state.letras&&(a+="abcdefghijklmnopqrstuvwxyz"),r.state.letrasMay&&(a+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),r.state.numeros&&(a+="0123456789");for(var t=a.length,n=0;n<r.state.numerosCant;n++)e.push(a.charAt(Math.floor(Math.random()*t)));r.setState({num:e,numerosCantActual:r.state.numerosCant,ver:!0})},r.start=function(e){r.randomNumber(),r.timeOut(),r.setState({score:0,mal:0,bien:0,start:!0}),r.setState({timeStart:!0})},r.marckRecord=function(e){r.setState({start:!1}),r.state.score>r.state.identity.record&&(r.state.identity.record=r.state.score,r.setState({record:r.state.score}),localStorage.setItem("identity",JSON.stringify(r.state.identity)))},r.answerTheForm=function(e){e.preventDefault();setTimeout((function(){r.setState({ver:!1})}),1e3);var a=r.state.bien+Math.abs(r.state.mal);r.setState({stop:a});var t=r.answer.current.value;if(r.answer.current.value=null,t===r.state.num.join("")){r.state.algorithm&&r.changeSpeedAlgorithm("WELL");var n=r.state.score+10*r.state.numerosCantActual/(r.state.identity.velocidad/1e3);n=Math.round(n),r.setState({bien:r.state.bien+1,score:n,clear:!0})}else r.state.algorithm&&r.changeSpeedAlgorithm("BAD"),r.setState({mal:r.state.mal+1,clear:!0});r.randomNumber()},r.incrementSpeed=function(e){r.state.identity.velocidad+=1e3,r.setState({identity:r.state.identity}),localStorage.setItem("identity",JSON.stringify(r.state.identity))},r.decrementSpeed=function(e){if(1e3===r.state.identity.velocidad)return null;r.state.identity.velocidad-=1e3,r.setState({identity:r.state.identity}),localStorage.setItem("identity",JSON.stringify(r.state.identity))},r.timeOut=function(){r.setState({timeStart:!1}),r.marckRecord()};var o=JSON.parse(localStorage.getItem("identity"));if(r.state={identity:o,bien:0,mal:0,score:0,stop:0,changeSpeed:0,timeout:0,numerosCant:2,numerosCantActual:2,time:90,ver:!0,letras:!0,numeros:!0,algorithm:!0,letrasMay:!0,clear:!1,start:!1,timeStart:!1,record:null,num:null},null!==o){var i=o.recrod;r.setState({record:i})}return r.handleInputChange=r.handleInputChange.bind(Object(b.a)(r)),r}return Object(l.a)(t,[{key:"componentWillMount",value:function(){if(null===JSON.parse(localStorage.getItem("identity"))){var e={velocidad:1e3,bien:0,mal:0,numeros:0,palabras:0,letras:0,dias:0,record:0};localStorage.setItem("identity",JSON.stringify(e)),this.setState({identity:e})}}},{key:"handleInputChange",value:function(e){var a,t=e.target,r=t.name,n=0;if(!0===this.state.letrasMay&&(n+=1),!0===this.state.letras&&(n+=1),!0===this.state.numeros&&(n+=1),1===n&&!1===t.checked)return"";("letras"===r||"numeros"===r||"letrasMay"===r)&&(a=t.checked),this.setState(Object(h.a)({},r,a))}},{key:"changeSpeedAlgorithm",value:function(e){var a=this.state.changeSpeed,t=this.state.numerosCant;"WELL"===e?this.setState({changeSpeed:a+1}):this.setState({changeSpeed:a-1}),2===a&&this.setState({numerosCant:t+1}),t>2&&-2===a&&this.setState({numerosCant:t-1}),2!==a&&-2!==a||this.setState({changeSpeed:0})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"memoria"},n.a.createElement("div",{id:"top"},this.state.identity&&n.a.createElement("span",{id:"record"},this.state.identity.record),n.a.createElement("span",{id:"countdown"},n.a.createElement(g,{time:this.state.time,timeStart:this.state.timeStart,timeOut:this.timeOut})),n.a.createElement("span",{id:"score"},this.state.score)),n.a.createElement("div",{id:"content"},this.state.start&&n.a.createElement("div",null,n.a.createElement("div",{id:"result"},n.a.createElement("div",{id:"corrects"},this.state.bien),n.a.createElement("div",{id:"bads"},this.state.mal)),this.state.ver&&n.a.createElement("p",{id:"quest"},this.state.num),n.a.createElement("form",{id:"formAns",onSubmit:this.answerTheForm},n.a.createElement("input",{type:"text",ref:this.answer}))),!this.state.start&&n.a.createElement("div",{id:"contentStart"},n.a.createElement("div",{id:"contSpeed"},n.a.createElement("p",null,"Velocidad: ",this.state.identity.velocidad/1e3," s"),n.a.createElement("span",null,n.a.createElement("button",{onClick:this.incrementSpeed},n.a.createElement(v.a,{icon:f.e})),n.a.createElement("button",{onClick:this.decrementSpeed},n.a.createElement(v.a,{icon:f.d})))),n.a.createElement("div",{id:"cantLetters"},n.a.createElement("p",null,"Letras y numeros: ",this.state.numerosCant),n.a.createElement("span",null,n.a.createElement("button",{onClick:this.incrementNumber},n.a.createElement(v.a,{icon:f.e})),n.a.createElement("button",{onClick:this.decrementNumber},n.a.createElement(v.a,{icon:f.d})))),n.a.createElement("form",{id:"form-type"},n.a.createElement("span",{className:"form-Num"},n.a.createElement("input",{type:"checkbox",name:"letras",checked:this.state.letras,onChange:this.handleInputChange}),n.a.createElement("label",{htmlFor:"letras"},"Letras en minuscula")),n.a.createElement("span",{className:"form-Num"},n.a.createElement("input",{type:"checkbox",name:"letrasMay",checked:this.state.letrasMay,onChange:this.handleInputChange}),n.a.createElement("label",{htmlFor:"letrasMay"},"Letras en mayuscula")),n.a.createElement("span",{className:"form-Num"},n.a.createElement("input",{type:"checkbox",name:"numeros",checked:this.state.numeros,onChange:this.handleInputChange}),n.a.createElement("label",{htmlFor:"numeros"},"N\xfameros"))),n.a.createElement("span",{id:"spanStart"},n.a.createElement("button",{id:"buttonStart",onClick:this.start},"Empezar"))))))}}]),t}(r.Component),y=(t(43),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"Lengua"},n.a.createElement("div",{id:"nav"},n.a.createElement("div",{id:"primero"},n.a.createElement("div",{className:"component"},n.a.createElement("div",{className:"circulo"},n.a.createElement(d.b,{to:"/Introducci\xf3n"},n.a.createElement("div",{className:"cuadrado2"},n.a.createElement(v.a,{icon:f.a})))),n.a.createElement("p",null,"Introducci\xf3n"))),n.a.createElement("div",{id:"segund2"},n.a.createElement("div",{id:"segundo"},n.a.createElement("div",{className:"component"},n.a.createElement("div",{className:"circulo",class:"circulo1"},n.a.createElement(d.b,{to:"/Introducci\xf3n"},n.a.createElement("div",{className:"cuadrado2"},n.a.createElement(v.a,{icon:f.i}))),n.a.createElement("p",null,"Tonicas y atonas"))),n.a.createElement("div",{className:"component",id:"cuadrados"},n.a.createElement("div",{className:"circulo",class:"circulo2"},n.a.createElement(d.b,{to:"/Introducci\xf3n"},n.a.createElement("div",{className:"cuadrado2"},n.a.createElement(v.a,{icon:f.c}))),n.a.createElement("p",null,"Silabas"))))),n.a.createElement("div",{id:"tercer2"},n.a.createElement("div",{id:"tercero"},n.a.createElement("div",{className:"component"},n.a.createElement("div",{className:"circulo",class:"circulo1"},n.a.createElement(d.b,{to:"/Introducci\xf3n"},n.a.createElement("div",{className:"cuadrado2"},n.a.createElement(v.a,{icon:f.g}))),n.a.createElement("p",null,"Agudas"))),n.a.createElement("div",{className:"component"},n.a.createElement("div",{className:"circulo",class:"circulo2"},n.a.createElement(d.b,{to:"/Introducci\xf3n"},n.a.createElement("div",{className:"cuadrado2"},n.a.createElement(v.a,{icon:f.h}))),n.a.createElement("p",null,"Preposiciones"))))),n.a.createElement("div",{id:"cuarto"},n.a.createElement("div",{className:"component"},n.a.createElement("div",{className:"circulo"},n.a.createElement(d.b,{to:"/Introducci\xf3n"},n.a.createElement("div",{className:"cuadrado2"},n.a.createElement(v.a,{icon:f.f})))),n.a.createElement("p",null,"Test")))))}}]),t}(r.Component)),w=(t(44),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"getWordsInEnglish",value:function(){return["the","of","to","and","a","in","is","it","you","that","he","was","for","on","are","with","as","I","his","they","be","at","one","have","this","from","or","had","by","hot","word","but","what","some","we","can","out","other","were","all","there","when","up","use","your","how","said","an","each","she","which","do","their","time","if","will","way","about","many","then","them","write","would","like","so","these","her","long","make","thing","see","him","two","has","look","more","day","could","go","come","did","number","sound","no","most","people","my","over","know","water","than","call","first","who","may","down","side","been","now","find","any","new","work","part","take","get","place","made","live","where","after","back","little","only","round","man","year","came","show","every","good","me","give","our","under","name","very","through","just","form","sentence","great","think","say","help","low","line","differ","turn","cause","much","mean","before","move","right","boy","old","too","same","tell","does","set","three","want","air","well","also","play","small","end","put","home","read","hand","port","large","spell","add","even","land","here","must","big","high","such","follow","act","why","ask","men","change","went","light","kind","off","need","house","picture","try","us","again","animal","point","mother","world","near","build","self","earth","father","head","stand","own","page","should","country","found","answer","school","grow","study","still","learn","plant","cover","food","sun","four","between","state","keep","eye","never","last","let","thought","city","tree","cross","farm","hard","start","might","story","saw","far","sea","draw","left","late","run","don'\t","while","press","close","night","real","life","few","north","open","seem","together","next","white","children","begin","got","walk","example","ease","paper","group","always","music","those","both","mark","often","letter","until","mile","river","car","feet","care","second","book","carry","took","science","eat","room","friend","began","idea","fish","mountain","stop","once","base","hear","horse","cut","sure","watch","color","face","wood","main","enough","plain","girl","usual","young","ready","above","ever","red","list","though","feel","talk","bird","soon","body","dog","family","direct","pose","leave","song","measure","door","product","black","short","numeral","class","wind","question","happen","complete","ship","area","half","rock","order","fire","south","problem","piece","told","knew","pass","since","top","whole","king","space","heard","best","hour","better","true","during","hundred","five","remember","step","early","hold","west","ground","interest","reach","fast","verb","sing","listen","six","table","travel","less","morning","ten","simple","several","vowel","toward","war","lay","against","pattern","slow","center","love","person","money","serve","appear","road","map","rain","rule","govern","pull","cold","notice","voice","unit","power","town","fine","certain","fly","fall","lead","cry","dark","machine","note","wait","plan","figure","star","box","noun","field","rest","correct","able","pound","done","beauty","drive","stood","contain","front","teach","week","final","gave","green","oh","quick","develop","ocean","warm","free","minute","strong","special","mind","behind","clear","tail","produce","fact","street","inch","multiply","nothing","course","stay","wheel","full","force","blue","object","decide","surface","deep","moon","island","foot","system","busy","test","record","boat","common","gold","possible","plane","stead","dry","wonder","laugh","thousand","ago","ran","check","game","shape","equate","hot","miss","brought","heat","snow","tire","bring","yes","distant","fill","east","paint","language","among","","grand","ball","yet","wave","drop","heart","am","present","heavy","dance","engine","position","arm","wide","sail","material","size","lety","settle","speak","weight","general","ice","matter","circle","pair","include","divide","syllable","felt","perhaps","pick","sudden","count","square","reason","length","represent","art","subject","region","energy","hunt","probable","bed","brother","egg","ride","cell","believe","fraction","forest","sit","race","window","store","summer","train","sleep","prove","lone","leg","exercise","wall","catch","mount","wish","sky","board","joy","winter","sat","written","wild","instrument","kept","glass","grass","cow","job","edge","sign","visit","past","soft","fun","bright","gas","weather","month","million","bear","finish","happy","hope","flower","clothe","strange","gone","jump","baby","eight","village","meet","root","buy","raise","solve","metal","whether","push","seven","paragraph","third","shall","held","hair","describe","cook","floor","either","result","burn","hill","safe","cat","century","consider","type","law","bit","coast","copy","phrase","silent","tall","sand","soil","roll","temperature","finger","industry","value","fight","lie","beat","excite","natural","view","sense","ear","else","quite","broke","case","middle","kill","son","lake","moment","scale","loud","spring","observe","child","straight","consonant","nation","dictionary","milk","speed","method","organ","pay","age","section","dress","cloud","surprise","quiet","stone","tiny","climb","cool","design","poor","lot","experiment","bottom","key","iron","single","stick","flat","twenty","skin","smile","crease","hole","trade","melody","trip","office","receive","row","mouth","exact","symbol","die","least","trouble","shout","except","wrote","seed","tone","join","suggest","clean","break","lady","yard","rise","bad","blow","oil","blood","touch","grew","cent","mix","team","wire","cost","lost","brown","wear","garden","equal","sent","choose","fell","fit","flow","fair","bank","collect","save","control","decimal","gentle","woman","captain","practice","separate","difficult","doctor","please","protect","noon","whose","locate","ring","character","insect","caught","period","indicate","radio","spoke","atom","human","history","effect","electric","expect","crop","modern","element","hit","student","corner","party","supply","bone","rail","imagine","provide","agree","thus","capital","won'\t","chair","danger","fruit","rich","thick","soldier","process","operate","guess","necessary","sharp","wing","create","neighbor","wash","bat","rather","crowd","corn","compare","poem","string","bell","depend","meat","rub","tube","famous","dollar","stream","fear","sight","thin","triangle","planet","hurry","chief","colony","clock","mine","tie","enter","major","fresh","search","send","yellow","gun","allow","print","dead","spot","desert","suit","current","lift","rose","continue","block","chart","hat","sell","success","company","subtract","event","particular","deal","swim","term","opposite","wife","shoe","shoulder","spread","arrange","camp","invent","cotton","born","determine","quart","nine","truck","noise","level","chance","gather","shop","stretch","throw","shine","property","column","molecule","select","wrong","gray","repeat","require","broad","prepare","salt","nose","plural","anger","claim","continent","oxygen","sugar","death","pretty","skill","women","season","solution","magnet","silver","thank","branch","match","suffix","especially","fig","afraid","huge","sister","steel","discuss","forward","similar","guide","experience","score","apple","bought","led","pitch","coat","mass","card","band","rope","slip","win","dream","evening","condition","feed","tool","total","basic","smell","valley","nor","double","seat","arrive","master","track","parent","shore","division","sheet","substance","favor","connect","post","spend","chord","fat","glad","original","share","station","dad","bread","charge","proper","bar","offer","segment","slave","duck","instant","market","degree","populate","chick","dear","enemy","reply","drink","occur","support","speech","nature","range","steam","motion","path","liquid","log","meant","quotient","teeth","shell","neck"]}},{key:"getWordsInSpanish",value:function(){return["el/la/los/las","de","a/hacia","y","un/una","en","es","eso","t\xfa/ustedes","ese","\xe9l","estaba","para","en/sobre","son/est\xe1n","con","como","yo","su (de \xe9l)","ellos/ellas","ser/estar","a","uno","tener","esta/esto","de","o","tenido","por","caliente","palabra","pero","qu\xe9","algunos","nosotros","poder","fuera","otro","fueron","todas","ah\xed","cuando","arriba","utilizar","Su/vuestro(s)/vuestra(s)","c\xf3mo","dijo","un","cada","ella","cual","hacer","su (de ellos)","hora/tiempo","Si (como condicional)","ser\xe1","camino","acerca de","muchos","entonces","ellos","escribir","har\xeda","me gusta","asi que","estas","su (de ella)","largo","hacer","cosa","ver","\xe9l","dos","tiene","Mira","M\xe1s","d\xeda","podr\xeda","ir","ven","hizo","n\xfamero","sonar","no","m\xe1s","gente","mi/gente","encima/sobre","saber","agua","que","llamada","primero","quien","mayo","abajo","lado","estado","ahora","encontrar","alguna","nuevo","trabajo","parte","tomar","obtener","lugar","hecho","vivir","d\xf3nde","despu\xe9s","atr\xe1s/espalda","peque\xf1o","solamente","redondo","hombre","a\xf1o","vino","espect\xe1culo","cada","bueno","yo","dar","nuestra","debajo","nombre","muy","mediante","s\xf3lo","formar","frase","estupendo","pensar","decir","ayuda","bajo","l\xednea","diferir de","giro","porque","mucho","media","antes de","movimiento","derecho","chico","antiguo","tambi\xe9n","mismo","contar","hace","conjunto/ajustar","Tres","querer","aire","bien","adem\xe1s","jugar","peque\xf1a","fin","poner","casa","leer","mano","Puerto","grande","deletrear","a\xf1adir","incluso","tierra","aqu\xed","debe","grande","alto","tal","seguir","acto","por qu\xe9","pedir","hombres","cambio","fuimos","ligero","tipo","apagado","necesitar","casa","imagen","tratar/intentar","nos","de nuevo/otra vez","animal","punto","madre","mundo","cerca","construir","yo mismo","tierra","padre","cabeza","estante/posici\xf3n/estar de pie","propio","p\xe1gina","deber\xeda","pa\xeds","encontr\xf3","responder","colegio","crecer","estudiar","silencioso","aprender","planta","cubrir","comida","sol","cuatro","Entre","estado","guardar/mantener","ojo","Nunca","\xfaltimo","dejar","pensamiento","ciudad","\xe1rbol","cruzar","granja","dif\xedcil","comienzo","podr\xeda","historia","Sierra","lejos","mar","dibujar","izquierda","tarde","correr","No","mientras","prensa","cerrado","noche","real","vida","pocos","norte","abierto","parecer","juntos","siguiente","blanco","ni\xf1os","empezar","tiene","caminar","ejemplo","facilitar","papel","grupo","siempre","m\xfasica","aquellos","ambos","marca","a menudo","carta","hasta/ hasta qu","milla","r\xedo","coche","Pies","cuidado","segundo","libro","llelet","tom\xf3","ciencia","comer","habitaci\xf3n","amigo","empez\xf3","idea","pescado","monta\xf1a","detener","una vez","base","o\xedr","caballo","cortar","Por supuesto","reloj","color","cara","madera","Principal","suficiente","llanura","Chica","usual","joven","Listo","encima","alguna vez","rojo","lista","aunque","sensaci\xf3n","hablar","p\xe1jaro","pronto","cuerpo","perro","familia","directo","pose","salir","canci\xf3n","medida","puerta","producto","negro","corto","n\xfamero","clase","viento","pregunta","ocurrir","completar","envio","zona","mitad","rock","orden","fuego","sur","problema","pieza","dicho","Sab\xeda","pasar","desde","parte superior","todo","Rey","espacio","O\xeddo","mejor","hora","mejor","cierto","durante","cien","cinco","recuerda","paso","temprano","sostener","Oeste","suelo/tierra","interesar","alcanzar","r\xe1pido","verbo","canta","escucha","seis","mesa","viajar","Menos","Ma\xf1ana","diez","sencillo","letios","vocal","hacia","guerra","laico","en contra","patr\xf3n","lento","centrar","amor","persona","dinero","servir","Aparecer","carretera/camino","mapa","lluvia","regla","gobernar","Halar","fr\xedo","darse cuenta","voz","unidad","poder","pueblo","multa/fino/sutil","certero","mosca/volar","oto\xf1o","dirigir","llorar","oscuro","m\xe1quina","Nota","Espere","plan","figura","estrella","caja","sustantivo","campo","descanso","correcto","capaz/h\xe1bil","libra","hecho","belleza","manejar","destacado","Contiene","frente","ense\xf1ar","semana","final","Dio","verde","Oh","r\xe1pido","desarrollar","Oceano","calentar","gratis/libre","minuto","fuerte","especial","mente","detr\xe1s de/por detr\xe1s","claro","cola","Produce","hecho","calle","pulgada","multiplicar","nada","curso","permanecer","rueda","completo","fuerza","azul","objeto","decidir","superficie","profundo","Luna","isla","pie","sistema","ocupado","prueba","grabar","barco/bote","com\xfan","oro","posible","avi\xf3n","lugar","seco","preguntarse","risa","mil","hace","corri\xf3","comprobar","juego","forma","equiparar","caliente","perder","trajo","calor","nieve","neum\xe1tico","traer","s\xed","distante","llenar","este","pintar","idioma","entre","Traducci\xf3n","grandioso","pelota","todav\xeda","ola","soltar","coraz\xf3n","a.m","presente","pesado","baile","motor","posici\xf3n","brazo","amplio","vela","material","tama\xf1o","letiar","resolver","hablar","peso","general","hielo","importar","circulo","par","incluir","dividir","s\xedlaba","sinti\xf3","quiz\xe1s","recoger","repentino","contar","cuadrado","raz\xf3n","longitud","representar","art","tema","regi\xf3n","energ\xeda","cazar","probable","cama","hermano","huevo","paseo","celda","creer","fracci\xf3n","bosque","sentar","carrera","ventana","almacenar","verano","tren","dormir","probar","solitario","pierna","ejercicio","pared","captura","montar","deseo","cielo","tablero","alegr\xeda","invierno","sab","escrito","salvaje","instrumento","mantenido","vaso","c\xe9sped","vaca","trabajo","borde","firmar","visitar","pasado","suave","divertido","brillante","gas","clima","mes","mill\xf3n","oso","terminar","contento","esperanza","flor","vestir","extra\xf1o","ido","saltar","beb\xe9","ocho","pueblo","reunirse","ra\xedz","comprar","aumento","resolver","metal","si","empujar","siete","p\xe1rrafo","tercero","deber\xe1","retenida","cabello","describir","cocinar","piso","ya sea","resultado","quemar","colina","seguro","gato","siglo","considerar","tipo","ley","poco","costa","dupdo","frase","silencio","alto","arena","suelo","rodar","temperatura","dedo","industria","valor","lucha","mentira","golpear","excitar","natural","ver","sentido","oreja","m\xe1s","bastante","rompi\xf3","caso","medio","matar","hijo","lago","momento","escala","ruidoso","primavera","obserlet","ni\xf1o","Derecho","consonante","naci\xf3n","diccionario","Leche","velocidad","m\xe9todo","Organo","paga","a\xf1os","secci\xf3n","vestir","nube","sorpresa","tranquilo","piedra","min\xfasculo","escalada","guay","dise\xf1o","pobre","mucho","experimentar","fondo","llave","hierro","soltero","palo","plano","veinte","piel","sonre\xedr","pliegue","agujero","comercio","melod\xeda","viaje","oficina","recibir","fila","boca","exacto","s\xedmbolo","morir","menos","problema","gritar","excepto","Escribi\xf3","semilla","tono","unirse","sugerir","limpiar","descanso","dama","yarda","subir","malo","soplar","petr\xf3leo","sangre","toque","Creci\xf3","centavo","mezcla","equipo","cable","costo","perdi\xf3","marr\xf3n","vestir","jard\xedn","igual","expedido","escoger","cay\xf3","ajuste","fluir","justa","banco","recoger","sallet","controlar","decimal","amable","mujer","capit\xe1n","pr\xe1ctica","separar","dif\xedcil","doctor","Por favor","proteger","mediod\xeda","cuyo","localizar","anillo","personaje","insecto","Atrapado","per\xedodo","indicar","radio","habl\xf3","\xe1tomo","humano","historia","efecto","el\xe9ctrico","esperar","cultivo","moderno","elemento","golpear","estudiante","esquina","fiesta","suministro","hueso","carril","imagina","proporcionar","de acuerdo","as\xed","capital","costumbre","silla","peligro","Fruta","Rico","grueso","soldado","proceso","funcionar","adivinar","necesario","agudo","ala","crear","Vecino","lalet","murci\xe9lago","m\xe1s bien","multitud","ma\xedz","comparar","poema","cuerda","campana","depender","carne","frotar","tubo","famoso","d\xf3lar","corriente","miedo","visi\xf3n","Delgado","tri\xe1ngulo","planeta","prisa","jefe","colonia","reloj","m\xeda","Corbata","entrar","mayor","Fresco","buscar","enviar","amarillo","pistola","permitir","impresi\xf3n","muerto","lugar","Desierto","traje","corriente","ascensor","Rosa","continuar","bloquear","gr\xe1fico","sombrero","vender","\xe9xito","empresa","sustraer","evento","especial","acuerdo","nadar","t\xe9rmino","opuesto","esposa","zapato","hombro","untado","organizar","acampar","inventar","algod\xf3n","nacido","determinar","cuarto de gal\xf3n","nueve","cami\xf3n","ruido","nivel","oportunidad","reunir","tienda","tramo","lanzar","brillar","propiedad","columna","mol\xe9cula","seleccionar","incorrecto","gris","repetir","exigir","ancho","preparar","sal","nariz","plural","enfado","Reclamaci\xf3n","continente","ox\xedgeno","az\xfacar","muerte","bonita","habilidad","mujer","temporada","soluci\xf3n","im\xe1n","plata","gracias","rama","partido","sufijo","especialmente","higo","asustado","enorme","hermana","acero","discutir","adelante","similar","gu\xeda","experiencia","Puntuaci\xf3n","manzana","compr\xf3","LED","tono","capa","masa","tarjeta","banda","cuerda","resbal\xf3n","ganar","sue\xf1o","noche","condici\xf3n","alimentar","herramienta","total","BASIC","oler","Valle","ni","doble","asiento","llegar","dominar","pista","padre","apuntalar","divisi\xf3n","hoja","sustancia","favor","conectar","enviar","gastar","acorde","grasa","alegre","original","compartir","estaci\xf3n","pap\xe1","pan de molde","cargar","apropiado","bar","oferta","segmento","esclavo","pato","instante","mercado","la licenciatura","poblar","polluelo","querido","enemigo","respuesta","beber","ocurrir","apoyo","habla","naturaleza","distancia","vapor","movimiento","camino","l\xedquido","Iniciar sesi\xf3n","Significado","cociente","dientes","c\xe1scara","cuello"]}}]),t}(r.Component)),k=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).state={wordsToLearn:[],wordsInSpanish:[],none:!1,days:0,words:0,totalWords:0,times:0,cantOfWords:"Day"},r.lastTime=function(e,a){if(0!==r.state.times)return"";r.setState({times:1});var t=new Date,n={hour:t.getHours(),day:t.getDay(),mouth:t.getMonth(),year:t.getYear()};if(!localStorage.getItem("lastRegister"))return n.day=n.day+1,localStorage.setItem("lastRegister",JSON.stringify(n));var o=localStorage.getItem("lastRegister");o=JSON.parse(o);var i=parseInt(a),s=i*e;n.year>o.year||n.mouth>o.mouth||n.day>o.day+1||n.day>=o.day&&n.hour>=o.hour?(s=(i+1)*e,n.day=n.day+1,localStorage.setItem("lastRegister",JSON.stringify(n)),localStorage.setItem("Days",i+1),r.setState({days:i+1,totalWords:s})):r.setState({totalWords:s})},r.showWord=function(e){var a=new w;r.setState({wordsToLearn:a.getWordsInEnglish(),wordsInSpanish:a.getWordsInSpanish()})},r.handleChange=r.handleChange.bind(Object(b.a)(r)),r}return Object(l.a)(t,[{key:"componentWillMount",value:function(e){var a=localStorage.getItem("words"),t=localStorage.getItem("Days");this.setState({words:a,days:t}),this.showWord(),this.lastTime(a,t)}},{key:"setWords",value:function(e){localStorage.setItem("words",e),localStorage.setItem("Days",1),this.setState({days:1,words:e,totalWords:e})}},{key:"handleChange",value:function(e){this.setState({cantOfWords:e.target.value})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"ingles"},n.a.createElement("h1",null,"Ingles / English"),n.a.createElement("span",{id:"span1"},n.a.createElement("span",{id:"span2"})),!this.state.words&&n.a.createElement("div",{id:"choose"},n.a.createElement("p",null,"Elige la cantidad de letras que quieres aprender por d\xeda, estas ser\xe1n visualizadas en forma de tabla con su traducci\xf3n y pronunciaci\xf3n."),n.a.createElement("button",{onClick:this.setWords.bind(this,5)},"F\xe1cil 5"),n.a.createElement("button",{onClick:this.setWords.bind(this,10)},"Normal 10"),n.a.createElement("button",{onClick:this.setWords.bind(this,15)},"Dif\xedcil 15")),this.state.words&&n.a.createElement("div",null,n.a.createElement("div",{id:"select"},n.a.createElement("select",{value:this.state.cantOfWords,onChange:this.handleChange,name:"select"},n.a.createElement("option",{value:"Day",selected:!0},"Day"),n.a.createElement("option",{value:"Week"},"Week"),n.a.createElement("option",{value:"All"},"All"))),n.a.createElement("table",{role:"table"},n.a.createElement("thead",null,n.a.createElement("tr",{role:"row"},n.a.createElement("th",{role:"columnheader"},"N\xfamero"),n.a.createElement("th",{role:"columnheader"},"Palabra en Ingl\xe9s"),n.a.createElement("th",{role:"columnheader"},"Traducci\xf3n"))),n.a.createElement("tbody",null,"Day"===this.state.cantOfWords?this.state.wordsToLearn.map((function(a,t){return t>=(e.state.days-1)*e.state.words&&t<e.state.totalWords?n.a.createElement("tr",{role:"row"},n.a.createElement("td",{role:"cell"},t+1),n.a.createElement("td",{role:"cell",key:t},a),n.a.createElement("td",{role:"cell"},e.state.wordsInSpanish[t])):null})):"All"===this.state.cantOfWords?this.state.wordsToLearn.map((function(a,t){return t<e.state.totalWords?n.a.createElement("tr",{role:"row"},n.a.createElement("td",{role:"cell"},t+1),n.a.createElement("td",{role:"cell",key:t},a),n.a.createElement("td",{role:"cell"},e.state.wordsInSpanish[t])):null})):this.state.wordsToLearn.map((function(a,t){return t>=(e.state.days-7)*e.state.words&&t<e.state.totalWords?n.a.createElement("tr",{role:"row"},n.a.createElement("td",{role:"cell"},t+1),n.a.createElement("td",{role:"cell",key:t},a),n.a.createElement("td",{role:"cell"},e.state.wordsInSpanish[t])):null}))))))}}]),t}(r.Component),S=(t(45),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).answerRef=n.a.createRef(),r.next=function(e){r.state.part1?r.setState({part1:!1,part2:!0,inQuestion:!0}):r.state.part2&&r.setState({part2:!1,part3:!0,inQuestion:!1})},r.back=function(e){r.state.part2?r.setState({part1:!0,part2:!1,inQuestion:!1}):r.state.part3&&r.setState({part2:!0,part3:!1,inQuestion:!0})},r.submitAnswer=function(e){e.preventDefault();var a=r.answerRef.current.value;"aabb"===a||"aaff"===a?(alert("CORRECT"),r.setState({block:!1})):alert("INCORRECT")},r.state={part1:!0,part2:!1,part3:!1,part4:!1,part5:!1,block:!0,inQuestion:!1},r}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"introduccion"},n.a.createElement("main",null,n.a.createElement("h1",null,"Introducci\xf3n")),n.a.createElement("div",{className:"status"},n.a.createElement(v.a,{className:"iconMenu play",id:"now",icon:f.b}),n.a.createElement(v.a,{className:"iconMenu noFirst question",icon:f.j})),n.a.createElement("div",{className:"cart"},n.a.createElement("div",{className:"block-1"},this.state.part1&&n.a.createElement("div",{className:"study"},n.a.createElement("div",{className:"text"},n.a.createElement("h2",null,"Acento"),n.a.createElement("div",{className:"sector"},n.a.createElement("p",null,"El acento es la pronunciaci\xf3n m\xe1s fuerte de una s\xedlaba respecto a todas las dem\xe1s de la palabra.")),n.a.createElement("div",{className:"sector"},n.a.createElement("p",null,"El acento gr\xe1fico o tilde es el signo que indica qu\xe9 s\xedlaba se acent\xfaa")),n.a.createElement("span",{className:"ejemplo"},n.a.createElement("p",null,"-\xe1rbol")),n.a.createElement("span",{className:"tip"},n.a.createElement("p",null,"Las palabras t\xf3nicas pueden presentar \xfanicamente una tilde y, siempre, sobre una vocal.")))),this.state.part2&&n.a.createElement("div",{className:"questions"},n.a.createElement("div",{className:"text"},n.a.createElement("p",{className:"the"},"La tilde es utilizada para:"),n.a.createElement("div",{className:"question"},n.a.createElement("form",{onSubmit:this.submitAnswer},n.a.createElement("p",null,n.a.createElement("input",{type:"radio",id:"1",name:"correct",value:"male2"}),n.a.createElement("label",{for:"1"},"Marcar las palabras")),n.a.createElement("p",null,n.a.createElement("input",{type:"radio",name:"correct",value:"male1"}),"Marca donde se acentua la palabra"),n.a.createElement("p",null,n.a.createElement("input",{type:"radio",name:"correct",value:"male3"}),"Indica la letra"))))),this.state.part3&&n.a.createElement("div",null,n.a.createElement("h1",null,"12345"),n.a.createElement("p",null,"Elije la respuesta correcta"),n.a.createElement("form",{onSubmit:this.submitAnswer},n.a.createElement("input",{type:"text",ref:this.answerRef}),n.a.createElement("input",{type:"submit",name:"submit"})),!this.state.block&&n.a.createElement("button",{onClick:this.next.bind(this,3)},"Siguiente"),n.a.createElement("button",{onClick:this.next.bind(this,2)},"VOLVER")),this.state.part4&&n.a.createElement("div",null,n.a.createElement("h1",null,"123456"),n.a.createElement("p",null,"aabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbcc"),n.a.createElement("button",null,"Siguiente"),n.a.createElement("button",{onClick:this.bind(this,3)},"VOLVER"))),n.a.createElement("div",{className:"block-2"},this.state.inQuestion?n.a.createElement("button",{id:"check",onClick:this.next},"COMPROBAR"):n.a.createElement("button",{onClick:this.next},"SIGUIENTE"),!this.state.part1&&n.a.createElement("button",{id:"back",onClick:this.back},"VOLVER"))))}}]),t}(r.Component)),j=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,null,n.a.createElement(u.c,null,n.a.createElement(u.a,{exact:!0,path:"/",component:p}),n.a.createElement(u.a,{exact:!0,path:"/Memory",component:E}),n.a.createElement(u.a,{exact:!0,path:"/Lengua",component:y}),n.a.createElement(u.a,{exact:!0,path:"/English",component:k}),n.a.createElement(u.a,{exact:!0,path:"/Introducci\xf3n",component:S}),n.a.createElement(u.a,{exact:!0,path:"/Tonicas",component:k}),n.a.createElement(u.a,{exact:!0,path:"/Silabas",component:k}),n.a.createElement(u.a,{exact:!0,path:"/Agudas",component:k}),n.a.createElement(u.a,{exact:!0,path:"/Puntuaci\xf3n",component:k}),n.a.createElement(u.a,{exact:!0,path:"/Preposiciones",component:k}),n.a.createElement(u.a,{exact:!0,path:"/Test",component:k}),n.a.createElement(u.a,{exact:!0,path:"**",component:p}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.c3e45dc7.chunk.js.map