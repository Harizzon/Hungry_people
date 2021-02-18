"use strict";

let dist = 42;

let coveredDist = 0;
let days = 0;


while (coveredDist <= dist) {
    coveredDist = coveredDist + 7-2;
    console.log(coveredDist + " dist");
    console.log(days+ ' days');
    console.log("-------");
    
    if (  coveredDist > dist && coveredDist == dist) {
        break;
    } else {
        days++;
    }
    
}

console.log(days);

