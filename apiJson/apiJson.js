let contenedor = document.getElementById("contenedor");

function mostrarGaleria(url){
    fetch(url)
    .then((response)=>response.json())
    .then((datosFoto)=>{
        let contador = 0;
        while(contador < 10){
            let imagen = document.createElement('img');
            imagen.src = datosFoto[contador].url;
            let parrafo =  document.createElement('p');
            parrafo.innerHTML = `Id imagen: ${datosFoto[contador].id}<br>
            Título: ${datosFoto[contador].title} <br>
            Url: ${datosFoto[contador].url}`;
            contenedor.appendChild(imagen);
            contenedor.appendChild(parrafo);
            imagen.style.marginLeft = "28em";
            imagen.style.marginTop = "3em";
            parrafo.style.marginLeft = "0em";
            parrafo.style.textAlign= "center";
            contador++;
        }
    })
    .catch((err)=>{
        console.log(`Error: ${err}`);
    });
}

mostrarGaleria("https://jsonplaceholder.typicode.com/photos");