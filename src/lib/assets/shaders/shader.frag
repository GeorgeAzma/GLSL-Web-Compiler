precision lowp float;

uniform float time;
uniform vec2 resolution;

const float PI = 3.14159265358;

void main() {
    float m = min(resolution.x, resolution.y);
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / m;   
    gl_FragColor = vec4(uv, 0.0, 1.0);
}