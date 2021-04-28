import * as T from "../../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../../libs/CS559-Framework/GrObject.js";

export class Wheat extends GrObject{
    constructor(name){
        let section1 = new T.Group();
        let section2 = new T.Group();
        let section3 = new T.Group();
        let section4 = new T.Group();
        let section5 = new T.Group();
        let section6 = new T.Group();
        

        let material = new T.MeshStandardMaterial({color:0xf5deb3});
        let stemGeom = new T.CylinderGeometry(.1,.1,1);
        let stem = new T.Mesh(stemGeom, material);
        stem.translateY(1);
        section1.add(stem, section2);
        section1.translateY(-.25);
        let stem2 = new T.Mesh(stemGeom, material);
        let stem2SideA = new T.Mesh(stemGeom, material);
        let stem2SideB = new T.Mesh(stemGeom, material);
        section2.add(stem2, stem2SideA, stem2SideB, section3);
        stem2.translateY(.5);
        stem2SideA.translateY(.5);
        stem2SideB.translateY(.5);
        stem2SideA.translateZ(.35);
        stem2SideA.rotateX(Math.PI / 4);
        stem2SideB.translateZ(-.35);
        stem2SideB.rotateX(-Math.PI / 4);
        section2.translateY(1.5);
        let stem3 = new T.Mesh(stemGeom, material);
        let stem3SideA = new T.Mesh(stemGeom, material);
        let stem3SideB = new T.Mesh(stemGeom, material);
        section3.add(stem3, stem3SideA, stem3SideB, section4);
        stem3.translateY(.5);
        stem3SideA.translateY(.5);
        stem3SideB.translateY(.5);
        stem3SideA.translateZ(.35);
        stem3SideA.rotateX(Math.PI / 4);
        stem3SideB.translateZ(-.35);
        stem3SideB.rotateX(-Math.PI / 4);
        section3.translateY(1);
        let stem4 = new T.Mesh(stemGeom, material);
        let stem4SideA = new T.Mesh(stemGeom, material);
        let stem4SideB = new T.Mesh(stemGeom, material);
        section4.add(stem4, stem4SideA, stem4SideB, section5);
        stem4.translateY(.5);
        stem4SideA.translateY(.5);
        stem4SideB.translateY(.5);
        stem4SideA.translateZ(.35);
        stem4SideA.rotateX(Math.PI / 4);
        stem4SideB.translateZ(-.35);
        stem4SideB.rotateX(-Math.PI / 4);
        section4.translateY(1);
        let stem5 = new T.Mesh(stemGeom, material);
        let stem5SideA = new T.Mesh(stemGeom, material);
        let stem5SideB = new T.Mesh(stemGeom, material);
        section5.add(stem5, stem5SideA, stem5SideB, section6);
        stem5.translateY(.5);
        stem5SideA.translateY(.5);
        stem5SideB.translateY(.5);
        stem5SideA.translateZ(.35);
        stem5SideA.rotateX(Math.PI / 4);
        stem5SideB.translateZ(-.35);
        stem5SideB.rotateX(-Math.PI / 4);
        section5.translateY(1);
        let stem6 = new T.Mesh(stemGeom, material);
        let stem6SideA = new T.Mesh(stemGeom, material);
        let stem6SideB = new T.Mesh(stemGeom, material);
        section6.add(stem6, stem6SideA, stem6SideB);
        stem6.translateY(.5);
        stem6SideA.translateY(.5);
        stem6SideB.translateY(.5);
        stem6SideA.translateZ(.35);
        stem6SideA.rotateX(Math.PI / 4);
        stem6SideB.translateZ(-.35);
        stem6SideB.rotateX(-Math.PI / 4);
        section6.translateY(1); 
       
    
        super(name, section1);
        this.time = 0;
        this.section2 = section2;
        this.section3 = section3;
        this.section4 = section4;
        this.section5 = section5;
        this.section6 = section6;
    }

    stepWorld(delta, timeOfDay) {
        this.time += delta / 1000;
    
        let currentAngle = ((Math.sin(this.time)  + 1 ) / 2 ) * Math.PI/16;
        this.section2.rotation.z = currentAngle;
        this.section3.rotation.z = currentAngle;
        this.section4.rotation.z = currentAngle;
        this.section5.rotation.z = currentAngle;
        this.section6.rotation.z = currentAngle;
  }
}