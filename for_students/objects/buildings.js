/*jshint esversion: 6 */
// @ts-check

import * as T from "../../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../../libs/CS559-Framework/GrObject.js";

// define your buildings here - remember, they need to be imported
// into the "main" program

let brickTexture = new T.TextureLoader().load("brick.png");
let brick2 = new T.TextureLoader().load("brick2.png");
let roof1 = new T.TextureLoader().load("roof1.png");
let roof2 = new T.TextureLoader().load("roof2.png");

export class BrickHouse extends GrObject{
    constructor(name){
        const vertrexUVs = [
            new T.Vector2(0, 0),
            new T.Vector2(1, 0),
            new T.Vector2(1, 1),
            new T.Vector2(0, 1),

            new T.Vector2(0, 1/2),
            new T.Vector2(1/2, 0),
            new T.Vector2(1/2, 1/2),
            new T.Vector2(1/2, 1)
        ];

        
        let faceav = [vertrexUVs[4], vertrexUVs[6], vertrexUVs[7]];
        let facebv = [vertrexUVs[4], vertrexUVs[7], vertrexUVs[3]];   
        let doorav = [vertrexUVs[0], vertrexUVs[5], vertrexUVs[6]];
        let doorbv = [vertrexUVs[0], vertrexUVs[6], vertrexUVs[4]];
        let geometry = new T.Geometry();
        geometry.vertices.push(new T.Vector3(0, 0, 0));
        geometry.vertices.push(new T.Vector3(0, 0, 2));
        geometry.vertices.push(new T.Vector3(1, 0, 2));
        geometry.vertices.push(new T.Vector3(1, 0, 0));
        geometry.vertices.push(new T.Vector3(0, 1, 0));
        geometry.vertices.push(new T.Vector3(0, 1, 2));
        geometry.vertices.push(new T.Vector3(1, 1, 2));
        geometry.vertices.push(new T.Vector3(1, 1, 0));

        let face1a = new T.Face3(0, 1, 5);
        let face1b = new T.Face3(0, 5, 4);
        let face2a = new T.Face3(0, 4, 7);
        let face2b = new T.Face3(0, 7, 3);
        let face3a = new T.Face3(6, 5, 1);
        let face3b = new T.Face3(6, 1, 2);
        let face4b = new T.Face3(6, 3, 7);
        let face4a = new T.Face3(6, 2, 3);
        
        geometry.faces.push(face1a, face1b, face2a, face2b, face3a, face3b, face4a, face4b);
        let faceVs = [doorav, doorbv, faceav, facebv, faceav, facebv, faceav, facebv];
        geometry.faceVertexUvs = [faceVs];
        geometry.computeVertexNormals();

        let roofGeom = new T.Geometry();
        roofGeom.vertices.push(new T.Vector3(0, 1, 0));
        roofGeom.vertices.push(new T.Vector3(0, 1, 2));
        roofGeom.vertices.push(new T.Vector3(1, 1, 2));
        roofGeom.vertices.push(new T.Vector3(1, 1, 0));
        roofGeom.vertices.push(new T.Vector3(.5, 1.25, 0));
        roofGeom.vertices.push(new T.Vector3(.5, 1.25, 2));
        
        let roofFace1a = new T.Face3(0, 1, 5);
        let roofFace1b = new T.Face3(0, 5, 4);
        let roofFace2a = new T.Face3(2, 3, 4);
        let roofFace2b = new T.Face3(2, 4, 5);
        let roofFace3 = new T.Face3(0, 4, 3);
        let roofFace4 = new T.Face3(2, 5, 1);
        
        roofGeom.faces.push(roofFace1a, roofFace1b, roofFace2a, roofFace2b, roofFace3, roofFace4);
        let rooffaceVs = [faceav, facebv, faceav, facebv, faceav, facebv];
        roofGeom.faceVertexUvs = [faceVs];
        roofGeom.computeVertexNormals();
        
        let material = new T.MeshStandardMaterial({map:brick2});
        let roofMaterial = new T.MeshStandardMaterial({map:roof1});

        let group = new T.Group();
        let house = new T.Mesh(geometry, material)
        let roof = new T.Mesh(roofGeom, roofMaterial)
        group.rotateY(-Math.PI/2);
        group.add(house, roof);
        super(name, group);
    }
}

export class BrickHouse2 extends GrObject{
    constructor(){
        const vertrexUVs = [
            new T.Vector2(0, 0),
            new T.Vector2(1, 0),
            new T.Vector2(1, 1),
            new T.Vector2(0, 1),

            new T.Vector2(0, 1/2),
            new T.Vector2(1/2, 0),
            new T.Vector2(1/2, 1/2),
            new T.Vector2(1/2, 1)
        ];

        
        let faceav = [vertrexUVs[4], vertrexUVs[6], vertrexUVs[7]];
        let facebv = [vertrexUVs[4], vertrexUVs[7], vertrexUVs[3]];   
        let doorav = [vertrexUVs[0], vertrexUVs[5], vertrexUVs[6]];
        let doorbv = [vertrexUVs[0], vertrexUVs[6], vertrexUVs[4]];
        let geometry = new T.Geometry();
        geometry.vertices.push(new T.Vector3(0, 0, 0));
        geometry.vertices.push(new T.Vector3(0, 0, 1));
        geometry.vertices.push(new T.Vector3(1, 0, 1));
        geometry.vertices.push(new T.Vector3(1, 0, 0));
        geometry.vertices.push(new T.Vector3(0, .8, 0));
        geometry.vertices.push(new T.Vector3(0, .8, 1));
        geometry.vertices.push(new T.Vector3(1, .8, 1));
        geometry.vertices.push(new T.Vector3(1, .8, 0));

        let face1a = new T.Face3(0, 1, 5);
        let face1b = new T.Face3(0, 5, 4);
        let face2a = new T.Face3(0, 4, 7);
        let face2b = new T.Face3(0, 7, 3);
        let face3a = new T.Face3(6, 5, 1);
        let face3b = new T.Face3(6, 1, 2);
        let face4b = new T.Face3(6, 3, 7);
        let face4a = new T.Face3(6, 2, 3);
        
        geometry.faces.push(face1a, face1b, face2a, face2b, face3a, face3b, face4a, face4b);
        let faceVs = [doorav, doorbv, faceav, facebv, faceav, facebv, faceav, facebv];
        geometry.faceVertexUvs = [faceVs];
        geometry.computeVertexNormals();

        let roofGeom = new T.Geometry();
        roofGeom.vertices.push(new T.Vector3(-.05, .76, -.05));
        roofGeom.vertices.push(new T.Vector3(-.05, .76, 1.05));
        roofGeom.vertices.push(new T.Vector3(1.05, .76, 1.05));
        roofGeom.vertices.push(new T.Vector3(1.05, .76, -.05));
        roofGeom.vertices.push(new T.Vector3(.5, 1.25, .5));
        
        let roofFace1 = new T.Face3(4, 0, 1);
        let roofFace2 = new T.Face3(4, 1, 2);
        let roofFace3 = new T.Face3(4, 2, 3);
        let roofFace4 = new T.Face3(4, 3, 0);
        
        roofGeom.faces.push(roofFace1, roofFace2, roofFace3, roofFace4);
        let rooffaceVs = [faceav, facebv, faceav, facebv, faceav, facebv];
        roofGeom.faceVertexUvs = [faceVs];
        roofGeom.computeVertexNormals();
        
        let material = new T.MeshStandardMaterial({map:brickTexture});
        let roofMaterial = new T.MeshStandardMaterial({map:roof2});

        let group = new T.Group();
        let house = new T.Mesh(geometry, material)
        let roof = new T.Mesh(roofGeom, roofMaterial)
        group.add(house, roof);
        group.rotateY(Math.PI/2);
        super("house", group);
    }
}

export class Tree extends GrObject{
    constructor(){
        let group = new T.Group();

        let trunk = new T.CylinderGeometry(.2, .2, 1);
        let leaf = new T.SphereGeometry(.25);
        let leaves = new T.Group();
        let leafMaterial = new T.MeshStandardMaterial({color:"green"})
        leaves.translateY(.5);
        
        for(let i = 0; i < 25; i++){
            let leafMesh = new T.Mesh(leaf, leafMaterial)
            leaves.add(leafMesh);
            leafMesh.position.set(Math.random() / 2 - .25, Math.random()/2 -.25 , Math.random() /2 -.25)
        }
        let trunkMesh = new T.Mesh(trunk, new T.MeshStandardMaterial({color:"brown"}));
        group.add(trunkMesh);
        trunkMesh.add(leaves);
        trunkMesh.translateY(.5);
        super("tree", group);
    }
}