let buscador = document.getElementById("buscadorCiudad");
let apiKey = "209512120d5d75afc64710b18fc2e691";
let botonBuscar = document.getElementById("botonBuscar");
let listaCiudades = document.getElementById("listaCiudades");
let contenedor = document.getElementById("contenedor");
let imagen;

function obtenerClimaCiudad(){
    let ciudad = buscador.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);   
                listaCiudades.innerHTML=`Ciudad: ${data.name} <br>
                                         Temperatura: ${Math.round(data.main.temp-273.15)}°C <br>
                                         Humedad: ${data.main.humidity}% <br>
                                         Viento: a ${Math.round(data.wind.speed*3.6)} km/h`; 
                imagen = document.createElement('img');
                contenedor.appendChild(imagen);
                imagen.style.position='absolute';
                imagen.style.left='32em';
                imagen.style.top='14em';
                imagen.src = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
                buscador.value = "";
                buscador.focus();
        })
        .catch((err)=>{
            console.log(err)
            if(err){
                listaCiudades.innerHTML="Debes especificar una ciudad";
                buscador.focus();
                imagen.src="";  
            }
        });
}

botonBuscar.onclick = obtenerClimaCiudad;