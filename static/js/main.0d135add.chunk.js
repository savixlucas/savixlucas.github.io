(this["webpackJsonpwebsite-evertonsavio"]=this["webpackJsonpwebsite-evertonsavio"]||[]).push([[0],{51:function(e,n,t){e.exports=t.p+"static/media/pc3.a3bbc65c.jpg"},57:function(e,n,t){e.exports=t.p+"static/media/LumniM.7574447d.mp4"},58:function(e,n,t){e.exports=t.p+"static/media/sonoAPPM.5aeab710.mp4"},59:function(e,n,t){e.exports=t.p+"static/media/fraudes.9d76aaa0.png"},60:function(e,n,t){e.exports=t.p+"static/media/perfilM.a54db5e3.mp4"},61:function(e,n,t){e.exports=t.p+"static/media/manutencao.6b0790f1.png"},62:function(e,n,t){e.exports=t.p+"static/media/portfolio.45c326d2.png"},67:function(e,n,t){e.exports=t(83)},72:function(e,n,t){},83:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(49),o=t.n(i),c=t(42),l=(t(72),t(14)),s=t(10),m=t(15),d=t(50),u=t.n(d),h=t(51),p=t.n(h);function v(){var e=Object(l.a)(["\n  .animation {\n    animation-duration: 2s;\n    animation-timing-function: ease-in-out;\n\n    &--infinite {\n      animation-iteration-count: infinite;\n    }\n\n    &--up-down {\n      animation-name: upDown;\n    }\n  }\n\n  @keyframes upDown {\n    0% {\n      transform: translateY(-15px);\n    }\n    50% {\n      transform: translateY(0);\n    }\n    100% {\n      transform: translateY(-15px);\n    }\n  }\n\n  .button {\n\n    &--scroll {\n      position: absolute;\n      bottom: 10vh;\n      transform: translateX(-50%);\n    }\n  }\n"]);return v=function(){return e},e}var g=m.a.section(v()),f=function(){return r.a.createElement(g,null,r.a.createElement("a",{href:"#aboutme",className:"button--scroll animation animation--infinite animation--up-down"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"-275 398.7 44.2 44.2"},r.a.createElement("path",{fill:"#fff",d:"M-275 420.8c0-12.2 9.9-22.1 22.1-22.1s22.1 9.9 22.1 22.1c0 12.2-9.9 22.1-22.1 22.1s-22.1-9.9-22.1-22.1zm42.7 0c0-11.4-9.2-20.6-20.6-20.6-11.4 0-20.6 9.2-20.6 20.6 0 11.4 9.2 20.6 20.6 20.6 11.4 0 20.6-9.3 20.6-20.6zM-260.6 418c0-.2.1-.4.2-.5.3-.3.8-.3 1.1 0l6.8 6.8 6.8-6.8c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-7.3 7.3c-.3.3-.8.3-1.1 0l-7.3-7.3c-.3-.2-.3-.4-.3-.6z"}))))},x=t(55),b=t(1),w=t(2),y=t(3),E=t(4),k=t(6),S=t(56),z=function(e){Object(y.a)(t,e);var n=Object(E.a)(t);function t(){var e;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).clock=new k.Clock,e.geometry=null,e.material=null,e.points=null,e.parameters={},e.sizes={},e.generateGalaxy=function(n,t,a,r){null!==e.points&&(e.geometry.dispose(),e.material.dispose(),e.scene.remove(e.points)),e.geometry=new k.BufferGeometry;for(var i=new Float32Array(3*n.count),o=new Float32Array(3*n.count),c=new Float32Array(1*n.count),l=new Float32Array(3*n.count),s=new k.Color(n.insideColor),m=new k.Color(n.outsideColor),d=0;d<n.count;d++){var u=3*d,h=Math.random()*n.radius,p=d%n.branches/n.branches*Math.PI*2;i[u+0]=Math.cos(p)*h,i[u+1]=0,i[u+2]=Math.sin(p)*h;var v=Math.pow(Math.random(),n.randomnessPower)*(Math.random()<.5?1:-1)*n.randomness*h,g=Math.pow(Math.random(),n.randomnessPower)*(Math.random()<.5?1:-1)*n.randomness*h,f=Math.pow(Math.random(),n.randomnessPower)*(Math.random()<.5?1:-1)*n.randomness*h;l[u+0]=v,l[u+1]=g,l[u+2]=f;var x=s.clone();x.lerp(m,h/n.radius),o[u]=x.r,o[u+1]=x.g,o[u+2]=x.b,c[d]=Math.random()}e.geometry.setAttribute("position",new k.BufferAttribute(i,3)),e.geometry.setAttribute("color",new k.BufferAttribute(o,3)),e.geometry.setAttribute("aScale",new k.BufferAttribute(o,1)),e.geometry.setAttribute("aRadomness",new k.BufferAttribute(l,3)),e.material=new k.ShaderMaterial({depthWrite:!1,blending:k.AdditiveBlending,vertexColors:!0,vertexShader:"\n            uniform float uSize;\n            attribute float aScale;\n            varying vec3 vColor;\n            uniform float uTime;\n            attribute vec3 aRadomness;\n\n            void main() {\n                vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n\n                //Spin\n                float angle = atan(modelPosition.x, modelPosition.z);\n                float distanceOfParticleFromCenter = length(modelPosition.xz);\n                float angleOffset = (1.0 / distanceOfParticleFromCenter) * uTime * 0.05;\n                angle += angleOffset;\n                modelPosition.x = distanceOfParticleFromCenter * cos(angle);\n                modelPosition.z = distanceOfParticleFromCenter * sin(angle);\n\n                //Randonmess\n                //modelPosition.x += aRadomness.x;\n                //modelPosition.y += aRadomness.y;\n                //modelPosition.z += aRadomness.z;\n                modelPosition.xyz += aRadomness;\n\n                vec4 viewPosition = viewMatrix * modelPosition;\n                vec4 projectionPosition = projectionMatrix * viewPosition;\n                gl_Position = projectionPosition;\n\n                gl_PointSize = uSize * aScale;\n                gl_PointSize *= ( 1.0 / - viewPosition.z );\n\n                vColor = color;\n            }\n          ",fragmentShader:"\n            varying vec3 vColor;\n\n            void main() {\n\n                //Disc\n                //float strenght = distance(gl_PointCoord, vec2(0.5));\n                //strenght = 1.0 - step(0.5, strenght);\n\n                //Diffuse Point\n                //float strenght = distance(gl_PointCoord, vec2(0.5));\n                //strenght *= 2.0;\n                //strenght = 1.0 - strenght;\n\n                //light Point\n                float strenght = distance(gl_PointCoord, vec2(0.5));\n                strenght = 1.0 - strenght;\n                strenght = pow(strenght, 5.0);\n\n                //Final Color\n                vec3 color = mix(vec3(0.0), vColor, strenght);\n\n\n                gl_FragColor = vec4(color, 1.0);\n            }\n          ",uniforms:{uTime:{value:0},uSize:{value:10*r.getPixelRatio()}}}),t=new k.Points(e.geometry,e.material),a.add(t),e.start()},e.start=function(){e.frameId||(e.frameId=requestAnimationFrame(e.animate))},e.stop=function(){cancelAnimationFrame(e.frameId)},e.animate=function(){var n=e.clock.getElapsedTime();e.material&&(e.material.uniforms.uTime.value=n,null!==e.points&&(e.geometry.dispose(),e.material.dispose(),e.scene.remove(e.points))),e.renderScene(),e.frameId=window.requestAnimationFrame(e.animate)},e.renderScene=function(){e.renderer.render(e.scene,e.camera)},e}return Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.sizes.width=this.mount.clientWidth,this.sizes.height=window.innerHeight,this.parameters.count=2e5,this.parameters.size=.005,this.parameters.radius=5,this.parameters.branches=3,this.parameters.spin=1,this.parameters.randomness=.5,this.parameters.randomnessPower=3,this.parameters.insideColor="#ff6030",this.parameters.outsideColor="#074aff",this.scene=new k.Scene,this.camera=new k.PerspectiveCamera(75,this.sizes.width/this.sizes.height,.1,100),this.camera.position.x=.5,this.camera.position.y=1,this.camera.position.z=2;var n=new k.AudioListener;this.camera.add(n);var t=new k.Audio(n);(new k.AudioLoader).load("./cosmic.mp3",(function(e){t.setBuffer(e),t.setLoop(!0),t.setVolume(.3),t.play()})),this.renderer=new k.WebGLRenderer({antialias:!0}),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.mount.appendChild(this.renderer.domElement);var a=new S.a(this.camera,this.renderer.domElement);a.enableDamping=!0,a.maxDistance=5,a.rotateSpeed=.05,a.zoomSpeed=.05,a.enablePan=!1,window.addEventListener("resize",(function(){e.sizes.width=window.innerWidth,e.sizes.height=window.innerHeight,e.camera.aspect=e.sizes.width/e.sizes.height,e.camera.updateProjectionMatrix(),e.renderer.setSize(e.sizes.width,e.sizes.height),e.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))})),this.generateGalaxy(this.parameters,this.points,this.scene,this.renderer)}},{key:"componentWillUnmount",value:function(){this.stop(),this.mount.removeChild(this.renderer.domElement)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{width:this.innerWidth,height:"400px"},ref:function(n){e.mount=n}})}}]),t}(a.Component);function N(){var e=Object(l.a)(["\nbackground: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),\n    url(",") center/ cover no-repeat;\n  margin: 0;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  line-height: 1.5;\n  border-radius: 5px;\n  border-radius: 5px;\n\n  .icone {\n    text-align:center;\n  }\n  h1,\n  h2,\n  h3 {\n    margin: 0;\n    font-weight: 400;\n    color: #fff;\n    &.lg-heading {\n      position: absolute;\n      top: ",";;\n      margin-left: 1vw;\n      margin-right: 1vw;\n      font-size: ",";;\n      padding-bottom: 1rem;\n    }\n\n    &.sm-heading {\n      margin-left: 1vw;\n      margin-right: 1vw;\n      position: absolute;\n      top: 30vh;\n      width: 98%;\n      padding: 1rem 0rem 0.5rem 0.5rem;\n      font-size: ",";\n      border-radius: 5px;\n      background-color: #282c34;\n      letter-spacing: 0.2ch;\n      font-weight: 400;\n      opacity: 0.7;\n      border: 1px solid whitesmoke;\n      \n    }\n  }\n\n  .text-secondary {\n    color: #eece1a !important;\n  }\n\n  main {\n    height: 100vh;\n    padding-bottom: 30vh;\n  }\n"]);return N=function(){return e},e}function P(e){var n=e.img,t=void 0===n?p.a:n,a=window.innerWidth<600;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{img:t,isMobile:a},r.a.createElement("main",{id:"home"},!a&&r.a.createElement(z,null),r.a.createElement("main-body",{className:"container-fluid"},r.a.createElement("h1",{className:"lg-heading"},"Everton ",r.a.createElement("span",{className:"text-secondary"},"S\xe1vio")),r.a.createElement("h1",{className:"sm-heading"},r.a.createElement(x.a,{steps:["#",2e3,"#Sofware",500,"#Software ",1e3,"#Software Engineer",1500,"#Software Engineer <>",500,"#Software Engineer <Java, React>"],loop:1,wrapper:"p"})),r.a.createElement("div",{className:"icone"},r.a.createElement(f,null))))))}var M=m.a.div(N(),(function(e){return e.img}),(function(e){return e.isMobile?"22vh":"20.0vh"}),(function(e){return e.isMobile?"5vh":"7.0vh"}),(function(e){return e.isMobile?"1.8vh":"4.0vh"})),C=t(43);function j(){var e=Object(l.a)(["\n  .div-principal {\n    display: flex;\n    justify-content: center;\n  }\n  .card {\n    width: 45ch;\n    height: 45ch;\n    margin-bottom: 5vh;\n    background: grey;\n    border-radius: 5px;\n    background-image: url(",");\n    background-size: 125%;\n    background-position: center center;\n    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);\n    transition: box-shadow 0.5s;\n    will-change: transform;\n    border: 15px solid white;\n    transition: 1s;\n    display: flex;\n    align-items: center;\n  }\n\n  .card:hover {\n    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);\n    border: 1px solid whitesmoke;\n    background-size: 150%;\n  }\n\n  .card > div {\n    width: 360px;\n    height: 15%;\n    background-color: white;\n    opacity: 0.95;\n    position: absolute;\n    top: 0;\n    text-align: center;\n  }\n"]);return j=function(){return e},e}var A=function(e,n){return[-(n-window.innerHeight/2)/100,(e-window.innerWidth/2)/100,1.1]},O=function(e,n,t){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(n,"deg) scale(").concat(t,")")},D=function(e){var n=e.page,t=Object(C.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),a=Object(s.a)(t,2),i=a[0],o=a[1];return"video"===n.type?r.a.createElement(R,null,r.a.createElement("div",{className:"div-principal"},r.a.createElement("div",{className:"card"},r.a.createElement("video",{width:"100%",height:"100%",controls:!0,autoPlay:!0},r.a.createElement("source",{src:n.video,type:"video/mp4"})),r.a.createElement("div",null,n.title)))):r.a.createElement(R,{img:n.image},r.a.createElement("div",{className:"div-principal"},r.a.createElement(C.a.div,{class:"card",onMouseMove:function(e){var n=e.clientX,t=e.clientY;return o({xys:A(n,t)})},onMouseLeave:function(){return o({xys:[0,0,1]})},style:{transform:i.xys.interpolate(O)}},r.a.createElement("div",null,n.title))))},R=m.a.div(j(),(function(e){return e.img})),_=t(57),T=t.n(_),F=t(58),I=t.n(F),J=t(59),B=t.n(J),L=t(60),W=t.n(L),G=t(61),U=t.n(G),H=t(62),V=t.n(H),q=[{id:1,title:"Drowsiness detection - AI Facial Recognition with Real Time Dashbord",date:"Computing Vision",place:"Python, OpenCV, JavaScripy React, MongoDB",video:"".concat(I.a),text:"Python, OpenCV, MongoDB, WebSocket,HTML5, CSS, JavaScript, REACT.JS.",type:"video"},{id:2,title:"Predictive Maintenance Dashboard with API requests to backend AI Models",date:"Data Science",place:"Python, Flask, JavaScript, ReactJS, Redux",image:"".concat(U.a),text:"Python, Flask, JavaScript, ReactJS, Redux",type:"image"},{id:3,title:"Dashboards with Machine Learning Models for DataViz Applications",date:"Data Science",place:"JavaScript React.js, Python Flask RESTful API, Keras ",video:"".concat(T.a),text:"JavaScript React.js, Python Flask RESTful API, Keras ",type:"video"},{id:4,title:"Great Experience with Data Cleaning & Exploratory Data Analyses",date:"Data Science",place:"Python, Machine Learning, Streamlit",video:"".concat(W.a),text:"Python, Machine Learning, Streamlit",type:"video"},{id:5,title:"Fraud Detection Dashboard with Statistical Inferential Analysis",date:"Data Science",place:"EDA, Data Wrangling, Python, JavaScript, Dashboards",image:"".concat(B.a),text:"EDA, Data Wrangling, Python, JavaScript, Dashboards",type:"image"},{id:6,title:"Great experience developing React Websites focused in Data Visualization Dashboards",date:"Javascript, React.JS",place:"APIs REST, GraphQL front-end, React",image:"".concat(V.a),text:"APIs REST, front-end, React",type:"image"}];function Y(){var e=Object(l.a)(['\n  .main {\n    position: relative;\n    margin-top: 0.5vh;\n    border-radius: 5px;\n  }\n  .title {\n    color: #000;\n    width: 100%;\n    font-size: 1.5rem;\n    text-align: center;\n    font-family: "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n  }\n  #portfolio {\n    min-height: 80vh;\n    background-color: whitesmoke;\n  }\n']);return Y=function(){return e},e}var X=m.a.div(Y()),K=function(){return r.a.createElement(X,null,r.a.createElement("section",{className:"main",id:"portfolio"},r.a.createElement("p",{className:"title"},"Projects"),r.a.createElement("div",{className:"row"},q.map((function(e,n){return r.a.createElement("div",{className:"col"},r.a.createElement(D,{page:e}))})))))},Q=t(33),Z=t(85),$=Object(Z.a)({uTime:0,uColor:new k.Color(0,0,0),uTexture:new k.Texture},"\n    precision mediump float;\n    varying vec2 vUv;\n    varying float vWave;\n    uniform float uTime;\n    //\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_84391765(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_84391765(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_84391765(vec4 x) {\n     return mod289_84391765(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_84391765(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_84391765 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_84391765 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_84391765;\n  vec3 i1 = min( g_84391765.xyz, l.zxy );\n  vec3 i2 = max( g_84391765.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_84391765.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_84391765(i);\n  vec4 p = permute_84391765( permute_84391765( permute_84391765(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_84391765.wyz - D_84391765.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_84391765 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_84391765 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_84391765.xy,h.z);\n  vec3 p3 = vec3(a1_84391765.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_84391765(vec4(dot(p0_84391765,p0_84391765), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_84391765 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_84391765,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n    void main() {\n      vUv = uv;\n      vec3 pos = position;\n      float noiseFreq = 3.0;\n      float noiseAmp = 0.1;\n      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);\n      pos.z += snoise3(noisePos) * noiseAmp;\n      vWave = pos.z;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  \n    }\n  ","\n    precision mediump float;\n    uniform vec3 uColor;\n    uniform float uTime;\n    uniform sampler2D uTexture;\n    varying vec2 vUv;\n    varying float vWave;\n    void main() {\n      float wave = vWave * 0.2;\n      vec3 texture = texture2D(uTexture, vUv + wave).rgb;\n      gl_FragColor = vec4(texture, 1.0); \n    }\n  ");Object(Q.b)({WaveShaderMaterial:$});var ee=function(){var e=Object(a.useRef)();Object(Q.c)((function(n){var t=n.clock;return e.current.uTime=t.getElapsedTime()}));var n=Object(Q.d)(k.TextureLoader,["./savio.jpg"]),t=Object(s.a)(n,1)[0];return r.a.createElement("mesh",null,r.a.createElement("planeBufferGeometry",{args:[.4,.6,16,16]}),r.a.createElement("waveShaderMaterial",{uColor:"hotpink",ref:e,uTexture:t}))},ne=function(){return r.a.createElement(Q.a,{camera:{fov:7,position:[0,0,5]}},r.a.createElement(a.Suspense,{fallback:null},r.a.createElement(ee,null)))},te=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,null))};function ae(){var e=Object(l.a)(['\n\n  \n  .container-fluid {\n    background-size: cover;\n    background-color: #010113;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding-top: 2.5vh;\n  }\n  .text {\n    padding: 0.2vh;\n    text-align: justify;\n  }\n\n  .shaders {\n    background-color: \'whitesmoke\';\n    min-width: 400px;\n    width: 35%;\n    margin-right: 0vw;\n    height: 100%;\n    max-height: 95vh;\n  }\n  .shader {\n    background-color: whitesmoke;\n  }\n\n  .title {\n    color: #000;\n    width: 100%;\n    font-size: 1.5rem;\n    font-weight: 700\n    font-family: "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n  }\n\n  .info {\n    min-width: 61vmin;\n    height: 45vh;\n    line-height: 2.8vh;\n    text-align: justify;\n    padding: ',";\n    flex: 1;\n    font-size: ",';\n    line-height: 2rem;\n    margin-top: 0.75vw;\n    margin-bottom: 0.75vw;\n    margin-right: 0.1vh;\n    margin-left: 0.1vh;\n    font-size: clamp(1vh, 0.5vh * 2vw, 1vh * 2vw);\n    background: whitesmoke;\n\n    font-family: "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n\n    border-radius: 1%;\n    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);\n    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);\n  }\n\n  #aboutme {\n    \n    border-radius: 5px;\n    min-height: 100vh;\n    margin-top: 0.5vh;\n    padding: 0;\n    background-color: #010113;\n\n    color: rgb(50, 50, 50);\n    font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;\n  }\n\n  li{\n    list-style: none;\n    list-style-type: "\u2192   ";\n    margin-bottom: clamp(1.5vh, 2.5vh, 3.0vh);\n\n    a {\n      color:black;\n    }\n  }\n']);return ae=function(){return e},e}var re=function(){var e=window.innerWidth<600,n=window.innerHeight<800;return r.a.createElement(ie,{isMobile:e,isSmall:n},r.a.createElement("section",{className:"main",id:"aboutme"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row shader"},r.a.createElement("div",{className:"col shaders"},r.a.createElement(te,null)),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"row info"},r.a.createElement("p",{className:"title"},"About Me"),r.a.createElement("p",{className:"text"},'Hello there, welcome to my portfolio. My name is S\xe1vio and I currently work as a software engineer. My main stack is: TypeScrypt/ React and Java 11 / Spring Boot, where I develop microservices sharing the principle "you build it, you run it". I also have experience with containerization and maintenance of applications using kubernetes. Lately I have been dedicated to 3D for Web.')),r.a.createElement("div",{className:"row info"},r.a.createElement("p",{className:"title"},"Languages & Stack"),r.a.createElement("p",null,r.a.createElement("b",null,"Languages:")," Java, JavaScript/TypeScrypt,  Python"),r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement("b",null," Stack: ")),"React.js, Redux.js, Spring, Spring Boot, WebFlux, RabbitMQ, gRPC, Hibernate, JPA, Docker, Kubernetes, Three.js, OpenCV, Flask, TensorfLow, Keras, Jupyter Notebook, Pandas, Numpy"),r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement("b",null," Databases: ")),"Postgres, MongoDB, Redis"))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"row info"},r.a.createElement("p",{className:"title"},"Certifications"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{className:"iconJS",href:"https://drive.google.com/file/d/1EEfESfLYkssqq6oyVhZc2KZwhbfQ40JE/view",target:"blank",key:"1"},"Aws Machine Learning Scholarship")),r.a.createElement("li",null,r.a.createElement("a",{className:"iconJS",href:"https://drive.google.com/file/d/1gybitfaotunzGvpLNDQY9SgFptEwYvBn/view",target:"blank",key:"2"},"Java AceleraDev")),r.a.createElement("li",null,r.a.createElement("a",{className:"iconJS",href:"https://drive.google.com/file/d/1hBGXB5V0piMslGKiC-ZcQFBp2y3ClO6W/view",target:"blank",key:"3"},"MCP","  ")),r.a.createElement("li",null,r.a.createElement("a",{className:"iconJS",href:"https://drive.google.com/file/d/1M3kyRmvK8oT9Rnsry04pjR5X307Y-D9c/view",target:"blank",key:"4"},"MCTS","  ")),r.a.createElement("li",null,r.a.createElement("a",{className:"iconJS",href:"https://drive.google.com/file/d/1pndBUaAkMS6F2sXNWd6GurY5Aq_Uzu5E/view",target:"blank",key:"5"},"MCSA")))),r.a.createElement("div",{className:"row info list"},r.a.createElement("p",{className:"title"},"Graduation"),r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement("b",null,"Specialization: ")),"Artificial Intelligence | 2020 Advanced Institute for Artificial Inteligence"),r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement("b",null,"Bachelor Degree: ")),"Engineer Bachelor | 2019 Universidade Federal dos Vales do Jequitinhonha e Mucuri"),r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement("b",null,"Bachelor Degree: ")),"Science and Technology Bachelor | 2017 Universidade Federal dos Vales do Jequitinhonha e Mucuri")))))))},ie=m.a.div(ae(),(function(e){return e.isMobile||e.isSmall?"2vw":"1vw"}),(function(e){return e.isMobile||e.isSmall?"1.9vh":"1.5rem"}));function oe(){var e=Object(l.a)(["\n  h4 {\n    padding-top: 4vh;\n    text-align: center;\n  }\n  .botao {\n    background-color: black !important;\n    transition: 1.5s;\n    &:hover {\n      background-color: #f9d802 !important;\n      color: black !important;\n    }\n  }\n  .row {\n    padding-top: 15vh;\n  }\n  #contactme {\n    border-radius: 5px;\n    min-height: 100vh;\n    margin-top: 0.5vh;\n    padding: 0;\n    background-color: whitesmoke;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  }\n"]);return oe=function(){return e},e}function ce(){return r.a.createElement(le,null,r.a.createElement("section",{className:"py-5",id:"contactme"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("h4",null,"Contact"),r.a.createElement("form",{className:"mt-5",action:"https://formspree.io/mzbgdgzg",method:"POST"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"firsName",className:"form-control",placeholder:"Name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",name:"email",className:"form-control",placeholder:"Email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"subject",className:"form-control",placeholder:"Subject"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"form",name:"message",className:"form-control",rows:"5",placeholder:"Message"})),r.a.createElement("div",{className:"form-group mt-3"},r.a.createElement("input",{type:"submit",value:"Send",className:"form-control bg-primary text-white botao"}))),r.a.createElement("h4",null,"Thank you!")))))}var le=m.a.div(oe());function se(){var e=Object(l.a)(["\n\n  .ses1{\n    position: relative;\n    z-index: 0;\n  }\n  .ses2{\n    position: relative;\n    z-index: 1;\n  }\n\n    background-color: #282c34 /*#141415 #020206 //#282c34 */;\n\n  .wrapper {\n    padding-left: ","};\n    padding-right: 0.5vh;\n    overflow-x: hidden;\n  }\n"]);return se=function(){return e},e}var me=m.a.div(se(),(function(e){return e.tamanho})),de=function(){var e=new u.a('a[href*="#"]',{speed:1e3});console.log(e);var n=Object(a.useState)((function(){return window.innerWidth<=1200||window.innerHeight<=650?"0.5vw":"8vw"})),t=Object(s.a)(n,2),i=t[0],o=t[1];return Object(a.useEffect)((function(){var e=function(){window.innerWidth<=1200||window.innerHeight<=650?o("0.5vw"):o("8vw")};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),r.a.createElement(me,{tamanho:i},r.a.createElement("div",{className:" wrapper"},r.a.createElement("div",{className:"ses1"},r.a.createElement(P,null)),r.a.createElement("div",{className:"ses2"},r.a.createElement(re,null)),r.a.createElement("div",{className:"ses3"},r.a.createElement(K,null)),r.a.createElement("div",{className:"ses4"},r.a.createElement(ce,null))))},ue=t(23),he=(t(79),t(12)),pe=t(34),ve=[{id:3,icon:r.a.createElement(pe.d,{className:"icon"}),url:"https://twitter.com/akaRhavyx"},{id:2,icon:r.a.createElement(pe.a,{className:"icon"}),url:"https://www.github.com/evertonsavio"},{id:1,icon:r.a.createElement(pe.c,{className:"icon"}),url:"https://www.linkedin.com/in/evertonsavio/"}],ge={id:4,icon:r.a.createElement(pe.b,{className:"icon"}),url:"#home"},fe=t(32);function xe(){var e=Object(l.a)(["\n  .menu-footer {\n    position: absolute;\n    bottom: 10vh;\n  }\n\n  .menu-footer > a {\n    font-size: 25px;\n    margin: 5vh;\n    transition: 1s;\n    color: whitesmoke;\n    &:hover {\n      color: #61dafb;\n    }\n  }\n\n  .menu-container {\n    position: fixed;\n    margin-top: 20px;\n    margin-right: 20px;\n    top: 0;\n    right: 0;\n    z-index: 9;\n  }\n  .toggler {\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    opacity: 0;\n    z-index: 10;\n    cursor: pointer;\n  }\n  .hamburguer {\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    width: 60px;\n    height: 60px;\n    border-radius: 20%;\n    background-color: #282c34;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 9;\n    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);\n    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.75);\n  }\n\n  .hamburguer > div {\n    position: absolute;\n    width: 50%;\n    height: 3px;\n    border-radius: 1.5px;\n    background-color: whitesmoke; //#61dafb;\n    transition: 0.4s;\n  }\n\n  .hamburguer > div:before,\n  .hamburguer > div:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 3px;\n    border-radius: 1.5px;\n    background-color: whitesmoke; //#61dafb;\n  }\n  .hamburguer > div:before {\n    top: -10px;\n  }\n\n  .hamburguer > div:after {\n    top: 10px;\n  }\n\n  .toggler:checked + .hamburguer > div {\n    transform: rotate(225deg);\n  }\n\n  .toggler:checked:hover + .hamburguer > div {\n    transform: rotate(315deg);\n  }\n\n  .toggler:checked + .hamburguer > div:after,\n  .toggler:checked + .hamburguer > div:before {\n    transform: rotate(90deg);\n    top: 0;\n  }\n\n  .toggler:checked ~ .menu {\n    visibility: visible;\n  }\n\n  .toggler:checked ~ .menu > div {\n    transform: translateX(-50%) translateY(-50%);\n    opacity: 1;\n  }\n\n  .menu {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    right: 0;\n    visibility: hidden;\n  }\n  .menu > div {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-150%) translateY(-50%);\n    background-color: rgba(0, 0, 0, 0.95);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    transition: 0.6s;\n    opacity: 0;\n  }\n\n  .menu > div > ul > li {\n    list-style: none;\n    text-decoration: none;\n    margin-right: 2.25rem;\n  }\n\n  .menu > div > ul > li > a {\n    text-decoration: none;\n    margin-bottom: 2rem;\n    display: inline-block;\n    font-size: 1.2rem;\n    font-weight: 550;\n    text-transform: uppercase;\n    color: whitesmoke;\n    transition: 0.6s;\n    &:hover {\n      color: #61dafb;\n    }\n  }\n"]);return xe=function(){return e},e}var be=m.a.nav(xe()),we=function(){var e=Object(a.useRef)(),n=document.querySelector(".my-scrollable-element"),t=function(t){"checkbox"===t.target.type?Object(fe.disablePageScroll)(n):Object(fe.enablePageScroll)(n),e.current.checked=!1};return r.a.createElement(be,null,r.a.createElement("div",{className:"menu-container"},r.a.createElement("input",{type:"checkbox",ref:e,onChange:function(t){!0===e.current.checked?Object(fe.disablePageScroll)(n):Object(fe.enablePageScroll)(n)},className:"toggler"}),r.a.createElement("div",{className:"hamburguer"},r.a.createElement("div",null)),r.a.createElement("div",{className:"menu",onClick:t},r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#home",onClick:t},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"#aboutme",onClick:t},"About Me")),r.a.createElement("li",null,r.a.createElement("a",{href:"#portfolio",onClick:t},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{href:"#contactme",onClick:t},"Contact Me"))),r.a.createElement("div",{className:"menu-footer"},ve.slice(0).reverse().map((function(e){return r.a.createElement("a",{href:e.url,target:"blank",key:e.id},e.icon)})))))))};function ye(){var e=Object(l.a)(["\n\na{\n  text-decoration: none;\n}\n\n.svg-wrapper {\n  height: 6vh;\n  position: relative;\n  width: 17.5vh;\n\n}\n\n.shape {\n  fill: transparent;\n  stroke-dasharray: 0vh 1vh;\n  stroke: yellow;\n  \n}\n\n.text {\n  color: black;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  text-align: center;\n  font-size: 1.8vh;\n  position: relative;\n  top: -4.5vh;\n}\n\n@keyframes draw {\n  0% {\n    stroke-dasharray: 140 540;\n    stroke-dashoffset: -474;\n    stroke-width: 2px;\n  }\n  100% {\n    stroke-dasharray: 760;\n    stroke-dashoffset: 0;\n    stroke-width: 4px;\n  }\n}\n\n.svg-wrapper:hover .shape {\n  -webkit-animation: 0.5s draw linear forwards;\n  animation: 0.5s draw linear forwards;\n}\n"]);return ye=function(){return e},e}var Ee=function(e){return r.a.createElement(ke,null,r.a.createElement("div",{className:"svg-wrapper"},r.a.createElement("a",{href:e.tag},r.a.createElement("svg",{height:"6vh",width:"16vh",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("rect",{className:"shape",height:"6vh",width:"16vh",rx:"100"})),r.a.createElement("div",{className:"text"},e.nome))))},ke=m.a.div(ye());function Se(){var e=Object(l.a)(["\n  .nav-rotate {\n    text-transform: uppercase;\n    color: black;\n    width: 100vh;\n    height: 7.8vw;\n    font-size: 1.8vh;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    background-color: whitesmoke;\n    display: flex;\n    position: fixed;\n    align-items: center;\n    justify-content: space-around;\n    -webkit-transform-origin: left top;\n    -webkit-transform: rotate(-90deg) translateX(-100%);\n  }\n  .icons {\n    width: 22vh;\n    font-size: 2.5vh;\n    display: flex;\n    justify-content: space-evenly;\n    margin-left: 5vh;\n  }\n  .iconJS {\n    color: black;\n    -webkit-transform-origin: left top;\n    -webkit-transform: rotate(-270deg) translateX(25%);\n    transition: 0.5s;\n    &:hover {\n      color: #f9d802;\n    }\n  }\n  .iconHome {\n    padding-left: 5vh;\n    font-size: 3vh;\n    display: flex;\n  }\n"]);return Se=function(){return e},e}var ze=m.a.nav(Se()),Ne=function(){var e=Object(a.useState)([window.innerWidth,window.innerHeight]),n=Object(s.a)(e,2),t=n[0],i=n[1],o=Object(he.a)(t),c=o[0],l=o[1];return Object(a.useEffect)((function(){var e=function(){i([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),c>=1200&&l>650?r.a.createElement(ze,null,r.a.createElement("div",{className:"nav-rotate"},r.a.createElement("div",{className:"icons"},ve.map((function(e){return r.a.createElement("a",{className:"iconJS",href:e.url,target:"blank",key:e.id},e.icon)}))),r.a.createElement(Ee,{tag:"#contactme",nome:"Contact Me"}),r.a.createElement(Ee,{tag:"#portfolio",nome:"Projects"}),r.a.createElement(Ee,{tag:"#aboutme",nome:"About Me"}),r.a.createElement("div",null),r.a.createElement("div",{className:"iconHome"},r.a.createElement("a",{className:"iconJS",href:ge.url},ge.icon)))):r.a.createElement(we,null)};var Pe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne,null),r.a.createElement(ue.c,null,r.a.createElement(ue.a,{path:"/",exact:!0,component:de}),r.a.createElement(ue.a,{exact:!0,component:de})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(Pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.0d135add.chunk.js.map