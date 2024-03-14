
import { fuggvenyem } from "./main.js";


export function tesztesetek_fuggvenyemhez(){
    {// 1. Teszteset
    let a = 25;
    let b = 15;
    let vart = 5;
    console.assert(
        vart === fuggvenyem(a,b),
        "%o",
        `a: ${a}, b: ${b}, várt: ${vart}, lnko: ${vart}`,
        "A várt eredmény nem stimmel"
    );
    }


    {// 2. Teszteset
    let a = 9;
    let b = 6;
    let vart = 1;
    console.log(
        `a: ${a}, b: ${b}, várt: ${vart}, eredmény: ${vart === fuggvenyem(a,b)}`
    );
    }


    {// 2. Teszteset
    let a = 15;
    let b = 6;
    let vart = 3;
    console.log(
        `a: ${a}, b: ${b}, várt: ${vart}, eredmény: ${vart === fuggvenyem(a,b)}`
    );
    }


    {// 2. Teszteset
    let a = -15;
    let b = 6;
    let vart = "Hiba, nincs értelmezve a LNKO";
    console.assert(
        vart === fuggvenyem(a,b),
        "%o",
        `a: ${a}, b: ${b}, lnko: ${vart}`,
        "A várt eredmény nem stimmel"
    );
    }

     
    {// 2. Teszteset
    let a = 0;
    let b = 6;
    let vart = "Hiba, nincs értelmezve a LNKO";
    console.log(
        `a: ${a}, b: ${b}, várt: ${vart}, eredmény: ${vart === fuggvenyem(a,b)}`
    );
    }


    {// 1. Teszteset
    let a = 24;
    let b = 16;
    let vart = 8;
    console.assert(
        `a: ${a}, b: ${b}, várt: ${vart}, eredmény: ${vart === fuggvenyem(a,b)}`
    );
    }
}