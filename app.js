// Obtén referencias a los elementos del DOM
const searchInput = document.getElementById('inputBusqueda');
const searchBySelect = document.getElementById('buscarPor');
const buscarBoton = document.getElementById('buscarBoton');
const songInfoDiv = document.getElementById('resultado');

// Define la función de búsqueda
function buscarCancion() {
  // Obtén el valor del input text y la opción seleccionada del dropdown list
    const searchTerm = searchInput.value.toLowerCase();
    const searchBy = searchBySelect.value;

  // Busca la canción en el objeto songs según la opción seleccionada
    const foundSong = songs.find(function(song) {
    // Convierte los valores de búsqueda y del objeto a minúsculas para una comparación sin distinción entre mayúsculas y minúsculas
    const fieldValue = song[searchBy].toString().toLowerCase();
    return fieldValue.includes(searchTerm);
    });

  // Actualiza el contenido del div songInfo con la información encontrada
    if (foundSong) {
    songInfoDiv.classList.remove("hidden");
    songInfoDiv.innerHTML = `
        <p>Nombre: ${foundSong.name}</p>
        <p>Álbum: ${foundSong.album}</p>
        <p>Artista: ${foundSong.artist}</p>
        <p>Año: ${foundSong.year}</p>
        <img src="${foundSong.imageUrl}" alt="Imagen del álbum ${foundSong.album}">
    `;
    const albumImage = document.querySelector('.album-image');
    albumImage.src = foundSong.imageUrl;    
    } else {
    songInfoDiv.innerHTML = 'Resultado no encontrado';
    } 
}

// Asigna la función de búsqueda al evento click del botón
buscarBoton.addEventListener('click', buscarCancion);
