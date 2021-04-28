/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as SimpleObjects from "../libs/CS559-Framework/SimpleObjects.js";
import { BoxGeometry } from "../libs/CS559-Three/build/three.module.js";

let mydiv = document.getElementById("div1");

let world = new GrWorld({ width: mydiv ? 600 : 800, where: mydiv });
let environmentLoader = new T.CubeTextureLoader();
environmentLoader.setPath("images/");


let environment = environmentLoader.load(["right.png", "left.png", "top.png", "bottom.png", "front.png", "back.png"]);
let sphere = new GrObject("sphere1",new T.Mesh(new T.SphereGeometry(1), new T.MeshBasicMaterial({envMap:environment})));
let bumpMap = new T.TextureLoader().load("images/bumpmap.png");
let cube = new GrObject("cube1", new T.Mesh(new T.BoxGeometry(1,1,1), new T.MeshStandardMaterial({bumpMap: bumpMap}) ));

world.add(sphere);
world.add(cube);
sphere.setPos(-1,2,0);
cube.setPos(1,2,0);
world.scene.background = environment;
world.go();
