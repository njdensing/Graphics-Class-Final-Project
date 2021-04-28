import * as T from "../../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../../libs/CS559-Framework/GrObject.js";

export class Fence extends GrObject{
    constructor(name){
        let fence = new T.Group();
        let stakeGeom = new T.BoxGeometry(1,4,.1);
        let crossGeom = new T.BoxGeometry(4,1,.1);
        let material = new T.MeshStandardMaterial( {color:0x8B4513} );
        let stake1 = new T.Mesh(stakeGeom, material);
        stake1.translateY(2);
        fence.add(stake1);
        let stake2 = new T.Mesh(stakeGeom, material);
        stake2.translateY(2);
        stake2.translateX(2);
        fence.add(stake2);
        let cross1 = new T.Mesh(crossGeom, material);
        cross1.translateY(1.5);
        fence.add(cross1);
        let cross2 = new T.Mesh(crossGeom, material);
        cross2.translateY(3);
        fence.add(cross2);
        super(name, fence);
    }
}
export class VertFence extends GrObject{
    constructor(name){
        let fence = new T.Group();
        let stakeGeom = new T.BoxGeometry(1,4,.1);
        let crossGeom = new T.BoxGeometry(4,1,.1);
        let material = new T.MeshStandardMaterial( {color:0x8B4513} );
        let stake1 = new T.Mesh(stakeGeom, material);
        stake1.translateY(2);
        fence.add(stake1);
        let stake2 = new T.Mesh(stakeGeom, material);
        stake2.translateY(2);
        stake2.translateX(2);
        fence.add(stake2);
        let cross1 = new T.Mesh(crossGeom, material);
        cross1.translateY(1.5);
        fence.add(cross1);
        let cross2 = new T.Mesh(crossGeom, material);
        cross2.translateY(3);
        fence.add(cross2);
        fence.rotateY(Math.PI/2);
        super(name, fence);
    }
}