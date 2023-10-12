import{s as on,n as D,r as vn,o as hn,b as xn}from"../chunks/scheduler.e108d1fd.js";import{S as tn,i as sn,g as M,s as J,h as U,j as K,f as z,c as Q,k as A,l as Z,a as B,x as H,y as I,z as O,r as _n,u as gn,v as yn,d as wn,t as bn,w as Sn}from"../chunks/index.9e087d27.js";function An(i){let e,r,s,c,l,o,n,R;return{c(){e=M("canvas"),r=J(),s=M("div"),c=M("input"),l=J(),o=M("input"),this.h()},l(u){e=U(u,"CANVAS",{id:!0,class:!0}),K(e).forEach(z),r=Q(u),s=U(u,"DIV",{style:!0});var f=K(s);c=U(f,"INPUT",{type:!0,class:!0}),l=Q(f),o=U(f,"INPUT",{type:!0,class:!0}),f.forEach(z),this.h()},h(){A(e,"id","background-shader"),A(e,"class","svelte-2jt83k"),A(c,"type","color"),A(c,"class","color-picker svelte-2jt83k"),A(o,"type","color"),A(o,"class","color-picker svelte-2jt83k"),Z(s,"display","flex"),Z(s,"flex-direction","column")},m(u,f){B(u,e,f),i[7](e),B(u,r,f),B(u,s,f),H(s,c),I(c,i[1]),H(s,l),H(s,o),I(o,i[2]),n||(R=[O(e,"mousedown",i[3]),O(e,"mouseup",i[4]),O(c,"input",i[8]),O(o,"input",i[9])],n=!0)},p(u,[f]){f&2&&I(c,u[1]),f&4&&I(o,u[2])},i:D,o:D,d(u){u&&(z(e),z(r),z(s)),i[7](null),n=!1,vn(R)}}}const x=8,$=.02;function nn(i,e){let r=Math.min(window.innerWidth,window.innerHeight);return{x:(i*2-window.innerWidth)/r*x,y:-((e*2-window.innerHeight)/r)*x}}function en(i,e,r){return r=Math.min(1,Math.max(0,(r-i)/(e-i))),r}function N(i){let e=Math.sin(i)*43758.5453123;return e-Math.floor(e)}function an(i,e,r){return i*(1-r)+e*r}function rn(i){let e=Math.floor(i),r=i-e;return an(N(e),N(e+1),r)}function Rn(i,e,r){let{frag:s=""}=e,{vert:c=""}=e,l,o,n,R=performance.now();const u=[-1,-1,1,-1,-1,1,1,1];let f,_={x:-1e3,y:-1e3},y={x:-1e3,y:-1e3},C=Array.from({length:x},()=>({x:0,y:0})),k=Array.from({length:x},()=>({x:0,y:0})),w=Array.from({length:x},()=>({x:0,y:0})),E=Array.from({length:x},()=>0),g=-1,F="#ff1ccc",P="#ffe600";function ln(a){if(_=nn(a.clientX,a.clientY),y.x<=-1e3){y=_;let m=999999;k.forEach((d,p)=>{const v=d.x-_.x,h=d.y-_.y,b=v*v+h*h;b<m&&(g=p,m=b)}),m>E[g]*E[g]&&(g=-1)}}function cn(a){if(_=nn(a.clientX,a.clientY),y.x>-1e3){if(g>=0){const m=_.x-y.x,d=_.y-y.y,p=window.innerWidth/window.innerHeight;w[g].x=m*.02,w[g].y=d*.02*p}y.x=-1e3}}function W(){if(l&&(r(0,l.width=window.innerWidth,l),r(0,l.height=window.innerHeight,l),n&&o)){const a=n.getUniformLocation(o,"resolution");n.uniform2f(a,l.width,l.height),n.viewport(0,0,l.width,l.height)}}hn(()=>{if(E.fill(0),n=l.getContext("webgl2"),!n){console.error("WebGL is not supported in this browser.");return}return f=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,f),n.bufferData(n.ARRAY_BUFFER,new Float32Array(u),n.STATIC_DRAW),R=performance.now(),window.addEventListener("resize",W),V(c,s),()=>{window.removeEventListener("resize",W)}});function V(a,m){if(m||(m="precision mediump float;void main() {gl_FragColor=vec4(1);}"),a||(a="attribute vec4 a_position;void main() {gl_Position = a_position;}"),!n)return;const d=n.createShader(n.FRAGMENT_SHADER);if(!d){alert("Could not create fragment shader");return}if(n.shaderSource(d,m),n.compileShader(d),!n.getShaderParameter(d,n.COMPILE_STATUS)){const h=n.getShaderInfoLog(d);console.error("Fragment shader compilation error:",h)}const p=n.createShader(n.VERTEX_SHADER);if(!p){alert("Could not create vertex shader");return}if(n.shaderSource(p,a),n.compileShader(p),!n.getShaderParameter(p,n.COMPILE_STATUS)){const h=n.getShaderInfoLog(p);console.error("Vertex shader compilation error:",h)}if(o&&(n.deleteProgram(o),o=null),o=n.createProgram(),!o){alert("Could not create shader program");return}n.attachShader(o,d),n.attachShader(o,p),n.linkProgram(o),n.deleteShader(d),n.deleteShader(p),n.useProgram(o);const v=n.getAttribLocation(o,"a_position");n.enableVertexAttribArray(v),n.vertexAttribPointer(v,2,n.FLOAT,!1,0,0),W(),Y()}function Y(){if(!(l&&n&&o))return;n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT),n.useProgram(o),n.bindBuffer(n.ARRAY_BUFFER,f),n.drawArrays(n.TRIANGLE_STRIP,0,4);const a=n.getUniformLocation(o,"time"),m=(performance.now()-R)/1e3;a&&n.uniform1f(a,m);for(let t=0;t<x;++t){let L=0,S=0;const T=8+Math.abs(N(t))*8,j=m*.3+t*684.7291,G=j%T/T;S=en(0,.4,G)*2-1,S=an(S,-1,en(.5,.8,G))*(x-1),L=L-(rn(j*.25+t*363.7543)*2-1)*x,C[t].x+=w[t].x,C[t].y+=w[t].y,w[t].x*=1-$,w[t].y*=1-$,k[t].x=L+C[t].x,k[t].y=S+C[t].y,E[t]=.7+rn(t+m*.2)*2;const X=n.getUniformLocation(o,`positions[${t}]`),pn=k[t].x,mn=k[t].y;X&&n.uniform2f(X,pn,mn);const q=n.getUniformLocation(o,`radiuses[${t}]`);q&&n.uniform1f(q,E[t])}const d=t=>{t=t.replace("#","");const L=parseInt(t.slice(0,2),16),S=parseInt(t.slice(2,4),16),T=parseInt(t.slice(4,6),16);return[L/255,S/255,T/255]},p=n.getUniformLocation(o,"base_color"),v=d(F);p&&n.uniform3f(p,v[0],v[1],v[2]);const h=n.getUniformLocation(o,"glow_color"),b=d(P);h&&n.uniform3f(h,b[0],b[1],b[2]),requestAnimationFrame(Y)}function fn(a){xn[a?"unshift":"push"](()=>{l=a,r(0,l)})}function dn(){F=this.value,r(1,F)}function un(){P=this.value,r(2,P)}return i.$$set=a=>{"frag"in a&&r(5,s=a.frag),"vert"in a&&r(6,c=a.vert)},i.$$.update=()=>{i.$$.dirty&96&&V(c,s)},[l,F,P,ln,cn,s,c,fn,dn,un]}class kn extends tn{constructor(e){super(),sn(this,e,Rn,An,on,{frag:5,vert:6})}}const En=`attribute vec4 a_position;\r
\r
void main() {\r
    gl_Position = a_position;\r
}`,Ln=`precision mediump float;\r
\r
const float SMOOTHNESS = 0.5;\r
const int ROWS = 8;\r
\r
uniform float time;\r
uniform vec2 resolution;\r
uniform vec2 positions[16];\r
uniform float radiuses[16];\r
uniform vec3 base_color;\r
uniform vec3 glow_color;\r
\r
float smin(float a, float b, float k)\r
{\r
    float h = max(k-abs(a-b), 0.0)/k;\r
    return min(a, b) - h*h*k*(1.0/4.0);\r
}\r
\r
float rand(int i, float lo, float hi) {\r
    return (hi - lo) * 0.5 * (sin(float(997*i)) + 1.) + lo;\r
}\r
\r
vec4 perm(vec4 x) { x = ((x * 34.0) + 1.0) * x; return x - floor(x * (1.0 / 289.0)) * 289.0; }\r
\r
float noise(vec3 p)\r
{\r
    vec3 a = floor(p);\r
    vec3 d = p - a;\r
    d = d * d * (3.0 - 2.0 * d);\r
\r
    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);\r
    vec4 k1 = perm(b.xyxy);\r
    vec4 k2 = perm(k1.xyxy + b.zzww);\r
\r
    vec4 c = k2 + a.zzzz;\r
    vec4 k3 = perm(c);\r
    vec4 k4 = perm(c + 1.0);\r
\r
    vec4 o1 = fract(k3 * 0.02439024);\r
    vec4 o2 = fract(k4 * 0.02439024);\r
\r
    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);\r
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);\r
\r
    return o4.y * d.y + o4.x * (1.0 - d.y);\r
}\r
\r
float rand1d(float n) { return fract(sin(n) * 43758.5453123); }\r
\r
float noise1d(float p) \r
{\r
	float fl = floor(p);\r
	float fc = fract(p);\r
	return mix(rand1d(fl), rand1d(fl + 1.0), fc);\r
}\r
\r
float blob(vec2 uv, float radius, float period, int index) \r
{ \r
    float tm = time * 0.3 + float(index) * 684.7291;\r
    vec2 pos = vec2(0);\r
    if (index == 0) pos = positions[0];\r
    else if (index == 1) pos = positions[1];\r
    else if (index == 2) pos = positions[2];\r
    else if (index == 3) pos = positions[3];\r
    else if (index == 4) pos = positions[4];\r
    else if (index == 5) pos = positions[5];\r
    else if (index == 6) pos = positions[6];\r
    else if (index == 7) pos = positions[7];\r
    else if (index == 8) pos = positions[8];\r
    else if (index == 9) pos = positions[9];\r
    else if (index == 10) pos = positions[10];\r
    else if (index == 11) pos = positions[11];\r
    else if (index == 12) pos = positions[12];\r
    else if (index == 13) pos = positions[13];\r
    else if (index == 14) pos = positions[14];\r
    else if (index == 15) pos = positions[15];\r
    float n = noise(vec3(uv, tm * .5 - float(index) * 630.737551) * 0.7) * 0.5;\r
    vec2 p = uv - pos + n;\r
    return length(p) - radius;\r
}\r
\r
float sdf(vec2 uv) \r
{\r
    float d = 9999999.;\r
    for (int i = 0; i < ROWS; ++i) \r
    {\r
        float r = radiuses[i];\r
        d = smin(d, blob(uv, r, 8.0 + abs(rand1d(float(i))) * 8.0, i), SMOOTHNESS);\r
    }\r
    return d;\r
}\r
\r
float specular(vec3 light_dir, vec3 normal) {\r
    light_dir = normalize(light_dir);\r
    vec3 view_dir = vec3(0,0,-1);\r
    vec3 halfway = normalize(light_dir + view_dir);\r
    float s = max(0.0, dot(normal, halfway));\r
    return s * s * s * s * s * s;\r
}\r
\r
void main()\r
{\r
    float min_res = min(resolution.x, resolution.y);\r
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution) / min_res * float(ROWS);\r
    vec3 uvn = normalize(vec3(uv, 1.0));\r
    float d = sdf(uv); \r
    vec2 e = vec2(8.0, 0);\r
    float nx = (sdf(uv - e.xy) - sdf(uv + e.xy)) / (2.0 * e.x);\r
    float ny = (sdf(uv - e.yx) - sdf(uv + e.yx)) / (2.0 * e.x);\r
    vec3 n = normalize(vec3(nx, ny, -1.));\r
    float m = smoothstep(0.0, 0.0 - (1.0 / min_res) * 16., d);\r
    float s = noise(vec3(uv, time * .5 + 630.737551) * 1.0) * 0.5;\r
    float spec = max(0.0, uvn.y) * specular(vec3(uvn.x,-3.,0.0), n);\r
    spec += min(1.0, 1.-uvn.y) * specular(vec3(uvn.x,3.,0.0), n);\r
    spec = spec / (spec + 1.0) * 1.5;\r
    vec3 col = spec * spec * (glow_color * 0.3 + 0.7) + mix(base_color, glow_color, spec);\r
    col -= max(0.0, 1.- pow(abs(-d), 0.25)) * 0.7;\r
    gl_FragColor = vec4(col * m + base_color * (1.0 - m) / (6.0 + d), 1.0);\r
}`;function zn(i){let e,r;return e=new kn({props:{frag:Ln,vert:En}}),{c(){_n(e.$$.fragment)},l(s){gn(e.$$.fragment,s)},m(s,c){yn(e,s,c),r=!0},p:D,i(s){r||(wn(e.$$.fragment,s),r=!0)},o(s){bn(e.$$.fragment,s),r=!1},d(s){Sn(e,s)}}}class Pn extends tn{constructor(e){super(),sn(this,e,null,zn,on,{})}}export{Pn as component};
