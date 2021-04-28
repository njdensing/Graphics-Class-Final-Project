import * as T from "../../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../../libs/CS559-Framework/GrObject.js";
import { shaderMaterial } from "../../libs/CS559-Framework/shaderHelper.js";


export class Road extends GrObject{
    constructor(name){
        let geom = new T.BoxGeometry(6,.01,40);
        let material = new shaderMaterial("./objects/roadShader.vs", "./objects/roadShader.fs", {
    uniforms: {
      marks: { value: 15.0 },
      light: { value: new T.Vector3(.7, .6, .1) },
      dark: { value: new T.Vector3(0.3, 0.3, 0.4) },
    }});
        let road = new T.Mesh(geom, material);
        road.rotateY(Math.PI/2);
        super(name, road);
    }
}
export class Dirt extends GrObject{
    constructor(name){
        let geom = new T.BoxGeometry(25,.01,16);
        let material = new T.MeshStandardMaterial({color:0x602302})
        let road = new T.Mesh(geom, material);
        road.rotateY(Math.PI/2);
        super(name, road);
    }
}