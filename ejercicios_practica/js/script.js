"use strict";

console.log("----------------------------------------");
console.log("Fetch Poke JSON");


console.log(fetch("./bulbasaur.json"))

const infoPokemon = async () =>{
    const res = await fetch("./bulbasaur.json")
    const data = await res.json()
   
    const name = data.name.toUpperCase()
    const stats= data.stats
    const types = data.types

    let typeObject =""
    types.forEach(element => {
        typeObject+=`
        <h3>${element.type.name}</h3>
        `
    });

    let statObject =""
    stats.forEach(element => {
        statObject+=`<li>
        <span>${element.stat.name}</span>
        <span>${element.base_stat}</span>
        </li>`
    });

    document.getElementById("pokeName").innerHTML = `<h1>${name}</h1>`
    document.getElementById("pokeTypes").innerHTML = typeObject
    document.getElementById("pokeStats").innerHTML = statObject


}

infoPokemon()