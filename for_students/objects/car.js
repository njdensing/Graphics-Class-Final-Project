/*jshint esversion: 6 */
// @ts-check

import * as T from "../../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../../libs/CS559-Framework/GrObject.js";

// define your vehicles here - remember, they need to be imported
// into the "main" program

export class Car extends GrObject{
    constructor(name, carColor){
        let group = new T.Group();

        let base_curve = new T.Shape();
        base_curve.moveTo(-1, 0);
        base_curve.lineTo(1, 0);
        base_curve.bezierCurveTo(1, .5, .85, .50, .5, .5);
        base_curve.bezierCurveTo(.5, .75, .3, .8 ,0, 1);
        base_curve.bezierCurveTo(-1, 1, -1, .8, -1,0);
        //base_curve.lineTo(-1, 0);
        let baseGeom = new T.ExtrudeGeometry(base_curve, {steps: 1, depth: 1, bevelEnabled: true, bevelThickness:.2, bevelSize:.2})
        let base = new T.Mesh(baseGeom, new T.MeshStandardMaterial({color:carColor}));
        group.add(base);
        base.translateY(.3);
        let wheelgeom = new T.CylinderGeometry(.25, .25, .1);
        let wheelMaterial = new T.MeshStandardMaterial({color:"black"})
        let wheelFR = new T.Mesh(wheelgeom, wheelMaterial);
        group.add(wheelFR);
        wheelFR.rotateX(Math.PI/2);
        wheelFR.position.set(.7, .25, -.25);
        let wheelFL = new T.Mesh(wheelgeom, wheelMaterial);
        group.add(wheelFL);
        wheelFL.rotateX(Math.PI/2);
        wheelFL.position.set(.7, .25, 1.25);
        let wheelBR = new T.Mesh(wheelgeom, wheelMaterial);
        group.add(wheelBR);
        wheelBR.rotateX(Math.PI/2);
        wheelBR.position.set(-.7, .25, -.25);
        let wheelBL = new T.Mesh(wheelgeom, wheelMaterial);
        group.add(wheelBL);
        wheelBL.rotateX(Math.PI/2);
        wheelBL.position.set(-.7, .25, 1.25);

        super(name, group);
        this.time = 0;
        this.group = group;
        this.baseGeom = baseGeom;
        
    }

    stepWorld(delta, timeOfDay){
        this.time += delta / 100;
        this.setPos((this.time % 40) - 20, 0, 10);
    }
}