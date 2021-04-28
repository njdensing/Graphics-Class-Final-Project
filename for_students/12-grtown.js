/*jshint esversion: 6 */
// @ts-check

/**
 * Graphics Town Framework - "Main" File
 *
 * This is the main file - it creates the world, populates it with
 * objects and behaviors, and starts things running
 *
 * The initial distributed version has a pretty empty world.
 * There are a few simple objects thrown in as examples.
 *
 * It is the students job to extend this by defining new object types
 * (in other files), then loading those files as modules, and using this
 * file to instantiate those objects in the world.
 */

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { WorldUI } from "../libs/CS559-Framework/WorldUI.js";
import { Car } from "./objects/car.js";
import { Wheat } from "./objects/wheat.js";
import { BrickHouse, BrickHouse2, Tree } from "./objects/buildings.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { Cow } from "./objects/cow.js";
import { Road, Dirt } from "./objects/ground.js";
import { Fence, VertFence } from "./objects/fence.js";




/**
 * The Graphics Town Main -
 * This builds up the world and makes it go...
 */

// make the world
let world = new GrWorld({
    width: 800,
    height: 600,
    groundplanesize: 20 // make the ground plane big enough for a world of stuff
});

// put stuff into the world
// this calls the example code (that puts a lot of objects into the world)
// you can look at it for reference, but do not use it in your assignment
let car1 = new Car("car1", Math.random() * 16777215);
world.add(car1);
let road = new Road("road1");
world.add(road);
road.setPos(0,.01,9);


let cow1 = new Cow("Cow1");
world.add(cow1);
let cow2 = new Cow("Cow2");
world.add(cow2);
let cow3 = new Cow("Cow3");
world.add(cow3);
let cow4 = new Cow("Cow4");
world.add(cow4);
let cow5 = new Cow("Cow5");
world.add(cow5);

const wheatScale = .35
const wheatRows = 16;
const WheatCols = 25;
const wheatX = 5;
const wheatZ = 5;
let wheats = [];
for(let i = 0; i < wheatRows; i++){
    for(let j = 0; j < WheatCols; j++){
        wheats.push(new Wheat("zzzWheat" + (i * WheatCols + j)));
        wheats[i*WheatCols + j].setPos(i + wheatX, 0 , -j + wheatZ);
        wheats[i*WheatCols + j].setScale(wheatScale);
        world.add(wheats[i*WheatCols + j]);
    }
}
let dirt = new Dirt("Dirt");
dirt.setPos(12,.01,-7);
world.add(dirt);

let house1 = new BrickHouse("house1");
world.add(house1);
house1.setScale(3.5);
house1.setPos(15, 0, 13);
let house2 = new BrickHouse2("house2");
world.add(house2);
house2.setPos(-1, 0, 5);
house2.setScale(4.5);

let fence1 = new Fence("fence01");
let fence2 = new Fence("fence02");
let fence3 = new Fence("fence03");
let fence4 = new Fence("fence04");
let fence5 = new Fence("fence05");
let fence6 = new Fence("fence06");
let fence7 = new Fence("fence07");
let fence8 = new Fence("fence08");
fence1.setPos(-5,0,5);
fence2.setPos(-9,0,5);
fence3.setPos(-13,0,5);
fence4.setPos(-17,0,5);
fence5.setPos(-5,0,-11.5);
fence6.setPos(-9,0,-11.5);
fence7.setPos(-13,0,-11.5);
fence8.setPos(-17,0,-11.5);
world.add(fence1);
world.add(fence2);
world.add(fence3);
world.add(fence4);
world.add(fence5);
world.add(fence6);
world.add(fence7);
world.add(fence8);
let fence9 = new VertFence("fence09");
let fence10 = new VertFence("fence10");
let fence11 = new VertFence("fence11");
let fence12 = new VertFence("fence12");
let fence13 = new VertFence("fence13");
let fence14 = new VertFence("fence14");
let fence15 = new VertFence("fence15");
let fence16 = new VertFence("fence16");
fence9.setPos(-2.5,0,3);
fence10.setPos(-2.5,0,-1);
fence11.setPos(-2.5,0,-5);
fence12.setPos(-2.5,0,-9);
fence13.setPos(-19,0,3);
fence14.setPos(-19,0,-1);
fence15.setPos(-19,0,-5);
fence16.setPos(-19,0,-9);
world.add(fence9);
world.add(fence10);
world.add(fence11);
world.add(fence12);
world.add(fence13);
world.add(fence14);
world.add(fence15);
world.add(fence16);

let tree1 = new Tree("tree1");
tree1.setPos(0, 0, 15);
tree1.setScale(3.5);
world.add(tree1);
let tree2 = new Tree("tree2");
tree2.setPos(-5, 0, 16);
tree2.setScale(3.8);
world.add(tree2);
let tree3 = new Tree("tree3");
tree3.setPos(-2, 0, 18);
tree3.setScale(3);
world.add(tree3);
let tree4 = new Tree("tree4");
tree4.setPos(-8, 0, 15);
tree4.setScale(3.2);
world.add(tree4);
let tree5 = new Tree("tree5");
tree5.setPos(-9, 0, 17);
tree5.setScale(3.5);
world.add(tree5);
let tree6 = new Tree("tree6");
tree6.setPos(-12, 0, 14);
tree6.setScale(3.9);
world.add(tree6);
let tree7 = new Tree("tree7");
tree7.setPos(-13, 0, 18);
tree7.setScale(3.2);
world.add(tree7);
let tree8 = new Tree("tree8");
tree8.setPos(-15, 0, 15);
tree8.setScale(3.7);
world.add(tree8);
let tree9 = new Tree("tree9");
tree9.setPos(-17, 0, 18);
tree9.setScale(3.5);
world.add(tree9);
// while making your objects, be sure to identify some of them as "highlighted"

///////////////////////////////////////////////////////////////
// because I did not store the objects I want to highlight in variables, I need to look them up by name
// This code is included since it might be useful if you want to highlight your objects here
function highlight(obName) {
    const toHighlight = world.objects.find(ob => ob.name === obName);
    if (toHighlight) {
        toHighlight.highlighted = true;
    } else {
        throw `no object named ${obName} for highlighting!`;
    }
}
// of course, the student should highlight their own objects, not these
highlight("car1");
highlight("zzzWheat0");
highlight("fence01");
highlight("house1");
highlight("house2");
highlight("tree1");
highlight("road1");
highlight("cow1");

///////////////////////////////////////////////////////////////
// build and run the UI
// only after all the objects exist can we build the UI
// @ts-ignore       // we're sticking a new thing into the world
world.ui = new WorldUI(world);
// now make it go!
world.go();
