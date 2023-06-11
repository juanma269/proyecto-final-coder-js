let albumes;
let songs;
// Obtén referencias a los elementos del DOM
const searchInput = document.getElementById("inputBusqueda");
const searchBySelect = document.getElementById("buscarPor");
const buscarBoton = document.getElementById("buscarBoton");
const InfoDiv = document.getElementById("resultado");
function buscar() {
  const searchBy = searchBySelect.value;
  if (searchBy == "song") {
    buscarCancion("name");
  } else if (searchBy == "album") {
    buscarAlbum("name");
  } else if (searchBy == "year") {
    buscarAlbum("year");
  }
}

// Define la función de búsqueda
function buscarCancion(searchBy) {
  // Obtén el valor del input text y la opción seleccionada del dropdown list
  const searchTerm = searchInput.value.toLowerCase();

  // Busca la canción en el objeto songs según la opción seleccionada
  const foundSong = songs.find(function (song) {
    // Convierte los valores de búsqueda y del objeto a minúsculas para una comparación sin distinción entre mayúsculas y minúsculas
    const fieldValue = song[searchBy].toString().toLowerCase();
    return fieldValue.includes(searchTerm);
  });

  // Actualiza el contenido del div songInfo con la información encontrada
  if (foundSong) {
    const album = getAlbumBySong(foundSong);
    InfoDiv.classList.remove("hidden");
    InfoDiv.innerHTML = `
        <p>Nombre: ${foundSong.name}</p>
        <p>Álbum: ${album.name}</p>
        <p>Artista: ${foundSong.artist}</p>
        <p>Año: ${album.year}</p>
        <img src="${album.imageUrl}" alt="Imagen del álbum ${album.name}">
    `;
  } else {
    InfoDiv.innerHTML = " ";
    showToast("Resultado no encontrado");
  }
}
function buscarAlbum(searchBy) {
  const searchTerm = searchInput.value.toLowerCase();

  const foundAlbum = albumes.find(function (album) {
    const fieldValue = album[searchBy].toString().toLowerCase();
    return fieldValue.includes(searchTerm);
  });

  if (foundAlbum) {
    InfoDiv.classList.remove("hidden");
    InfoDiv.innerHTML = `
        <p>Nombre: ${foundAlbum.name}</p>
        <p>Artista: ${foundAlbum.artist}</p>
        <p>Año: ${foundAlbum.year}</p>
        <img src="${foundAlbum.imageUrl}" alt="Imagen del álbum ${foundAlbum.album}">
    `;
  } else {
    InfoDiv.innerHTML = " ";
    showToast("Resultado no encontrado");
  }
}

//Dada una cancion, buscar su album
function getAlbumBySong(song) {
  const foundAlbum = albumes.find((album) => {
    return album.id == song.albumId;
  });
  return foundAlbum;
}

// Asigna la función de búsqueda al evento click del botón
buscarBoton.addEventListener("click", buscar);
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    buscar();
  }
});
//Llamar a los archivos json

fetch("./albums.json")
  .then((response) => response.json())
  .then((albumesResp) => {
    albumes = albumesResp;
  });

fetch("./songs.json")
  .then((response) => response.json())
  .then((songsResp) => {
    songs = songsResp;
  });

//tostify
function showToast(textToShow) {
  Toastify({
    text: textToShow,
    duration: 5000,
    close: true,
    gravity: "top",
    position: "right",
    style: {
      background: "linear-gradient(to right, #820320, #ff174d)",
    },
  }).showToast();
}
