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

import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { WorldUI } from "../libs/CS559-Framework/WorldUI.js";
import { Car } from "./objects/car.js";
import { Wheat } from "./objects/wheat.js";
import { BrickHouse } from "./objects/buildings.js";



/**m
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


const wheatScale = .35
const wheatRows = 15;
const WheatCols = 25;
const wheatX = 5;
const wheatZ = 5;
let wheats = [];
for(let i = 0; i < wheatRows; i++){
    for(let j = 0; j < WheatCols; j++){
        wheats.push(new Wheat("Wheat" + (i * WheatCols + j)));
        wheats[i*WheatCols + j].setPos(i + wheatX, 0 , -j + wheatZ);
        wheats[i*WheatCols + j].setScale(wheatScale);
        world.add(wheats[i*WheatCols + j]);
    }
}

let house1 = new BrickHouse("house1");
world.add(house1);
house1.setScale(3.5);
house1.setPos(15, 0, 13);


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
highlight("Wheat0");


///////////////////////////////////////////////////////////////
// build and run the UI
// only after all the objects exist can we build the UI
// @ts-ignore       // we're sticking a new thing into the world
world.ui = new WorldUI(world);
// now make it go!
world.go();
