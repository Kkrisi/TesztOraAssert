
import { tesztesetek_fuggvenyemhez } from "./teszt.js"

// Feladatspecifikáció
// Két pozitív egész szám LNKO-ját keresi 

export function fuggvenyem(a, b) {
  if(a===0 || b===0){
    return "Egyik szám sem lehet nulla!"
  }
  if(a<0 || b<0){
    return "Mindkét számnak pozitívnak kell lennie!"
  }
  
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}

//console.log(fuggvenyem(15,25));
//console.log(fuggvenyem(0,6));
tesztesetek_fuggvenyemhez();
