varying vec2 v_uv;

uniform vec3 light;
uniform vec3 dark;

uniform float marks;

void main()
{

    float x = v_uv.x;
    float y = v_uv.y * marks;

    float xc = floor(x);
    float yc = floor(y);

    float dx = (x - xc);
    float dy = (y - yc);
    
    float da = 1.;
    float a = .02;

    if (dy < 3. * (dx - .5) + .5 && dy < -3. * (dx - .5) + .5 ){
        da = smoothstep(.35-a, .35+a, dy);
    }
    else if(dy > 3. * (dx - .5) + .5 && dy < -3. * (dx - .5) + .5 ){
        da = smoothstep(.45 - a, .45 + a, dx);
    }
    else if(dy > 3. *(dx - .5) + .5 && dy > -3. * (dx - .5) + .5 ){
        da = 1. - smoothstep(.65 -a , .65 + a, dy);
    }else{
        da = 1. - smoothstep(.55 - a, .55 + a, dx);
    }

    gl_FragColor = vec4(mix(dark,light,da), 1.);
}
