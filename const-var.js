
const o1 = {name:"kim"};
Object.freeze(o1);
const o2 = {name:"lee"};
o1.name = "park";
console.log(o1);
