import * as T from "../../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../../libs/CS559-Framework/GrObject.js";
import { OBJLoader } from "../../libs/CS559-Three/examples/jsm/loaders/OBJLoader.js";

export class Cow extends GrObject{
    constructor(name){
        let group = new T.Group();
        let cowloader = new OBJLoader();
        let cow;
        cowloader.load("./objects/cow.obj", function(obj){ 
            cow = obj;
            group.add( cow )});
        console.log();
        group.scale.set(.002,.002,.002);
        
        super(name, group);
        this.cow = group;
        this.time = 0;
        this.targetx = Math.random() * (-14)  - 4;
        this.targetz = Math.random() * (-14)  + 4;
        this.x = Math.random() * (-14)  - 4;
        this.z = Math.random() * (-14)  + 4;
        group.rotateY( -Math.PI/2);
        this.rotation = 0;
        this.xstep = (this.targetx - this.x) / 200;
        this.zstep = (this.targetz - this.z) / 200;
        this.moving = false;
        
    }

    stepWorld(delta, timeOfDay){
        this.time += delta / 100;
        if(!this.moving){
            let targetAngle = Math.atan2(this.targetx - this.x, this.targetz - this.z); 
            if(this.rotation > targetAngle + .025){
                this.cow.rotateY(-.025);
                this.rotation = this.rotation - .025;
            }
            else if(this.rotation < targetAngle - .025){
                this.cow.rotateY(.025);
                this.rotation = this.rotation + .025;
            }else {
                this.moving = !this.moving;
                this.xstep = (this.targetx - this.x) / 500;
                this.zstep = (this.targetz - this.z) / 500;
            }
        }
        if(this.moving){
            if(this.x != this.targetx){
                this.x += this.xstep * delta/13;
            }
            if(this.z != this.targetz){
                this.z += this.zstep * delta/13;
            }
            if(this.x > this.targetx - .2 && this.x < this.targetx +.22 && this.z > this.targetz - .2 && this.z < this.targetz +.22){
                this.targetx = Math.random() * (-14)  - 4;
                this.targetz = Math.random() * (-14)  + 4;
                this.moving = !this.moving;
            }
        }
        this.setPos(this.x, 0, this.z);
    }  
}