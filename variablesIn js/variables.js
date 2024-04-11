//variables in js

var a= 55;//var is globaly scoped 

var b=23;

console.log(a+b);

//let will be a block level element

{
    let e = 22;

    let f = 32;

    console.log(e,f);
}

let x = "Harshith ";
let y = 12;
let z = 12.22;
const k = true;
let l = undefined;
let r = null;

console.log(x,y,z,k,l,r);

console.log(typeof x,typeof y,typeof z,typeof k,typeof l,typeof r);

let o = {
     "name":"harshith",
     "jab code":5600

}
o.salary="43 laks";
console.log(o);