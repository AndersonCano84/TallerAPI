let imagen = document.getElementById("imagen");
let nombrePokemon = document.getElementById("nombrePokemon");
let buscar = document.getElementById("buscar");
let nombre = document.getElementById("nombre");
let habilidades = document.getElementById("habilidades");
let poderes = document.getElementById("poderes");

function obtenerDatosPokemon(){
    fetch("https://pokeapi.co/api/v2/pokemon/"+nombrePokemon.value.toLowerCase()+"")
    .then((response)=>response.json())
    .then((data)=>{
        if(nombrePokemon.value!==""){
            imagen.src= data["sprites"]["other"]["official-artwork"].front_default;
            nombre.value="Nombre: "+data["forms"][0]["name"]+", Peso: "+data.weight/10+
                         " kg, Altura: "+data.height/10+" m";
            habilidades.value = "Habilidades: "+data.abilities[0].ability.name+ 
                                ", "+data.abilities[1].ability.name;
            poderes.value = "Experiencia base: "+data.base_experience;
            nombrePokemon.value="";
            nombrePokemon.focus();
        }else{
            alert("Debes escribir el nombre del Pokémon")
        }
    }).catch((err)=>{
        console.error("Error: "+err);
    })
}

buscar.onclick = obtenerDatosPokemon;