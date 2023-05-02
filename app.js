let prompt1
let filtrar

function bienvenida(){
    alert ("Bienvenido a la Fan Page de CD's de Beyoncé")
}

function seleccionBusqueda(){
    prompt1=parseInt(prompt("Puedes realizar una busqueda por:  "+
    "•1 Album   "+
    "•2 Cancion   "+
    "•3 Año     "+
    "  •4 Ver Todos   ♦ "+
    "Coloque el numero de su busqueda ♦"))
}
bienvenida();
seleccionBusqueda();

function BuscaAlbums(TerminoAlbum){
    let albumesFiltrados = albums.filter(album =>{
        // String Nombre del Album en minúscila
        let nombreEnMinus = album.name.toLocaleLowerCase();
        // String que tiene que tener el Nombre del Album en Minus, o, termino a buscar
        let aBuscarEnMinux = TerminoAlbum.toLocaleLowerCase();
        // Booleano si Nombre en Minus contiene text en termin
        let nombreContieneABuscar = nombreEnMinus.includes(aBuscarEnMinux);
        return nombreContieneABuscar;
    });
    return albumesFiltrados;
}
function BuscaCancion(TerminoCancion){
    let AlbumPorCancion = albums.filter(album =>{
        let CancionesAlbum = album.songs.filter(song=>{
            let CancionEnMinus = song.toLowerCase()
            let TerminoCacionEnMinus = TerminoCancion.toLowerCase();
            let CancionIncluye = CancionEnMinus.includes(TerminoCacionEnMinus);
            return CancionIncluye
        })
        console.log(CancionesAlbum);
        return CancionesAlbum.length > 0;
    })
    return AlbumPorCancion
}

function BuscaAnio(TerminoAnio){
    let AlbumPorAnio = albums.filter(album =>{
        let AnioDeAlbumEsIgualATerminoAnio = (album.year == TerminoAnio)
        return AnioDeAlbumEsIgualATerminoAnio
    })
    return AlbumPorAnio
}

function BuscaTodo(){
    return albums
}

function MostrarResultados(Resultados){
if(Resultados.length==0){
    alert("No se encontraron resultados - Recargue Pagina") 
}else{
    alert("Sus resultados estan en consola")
    console.table(Resultados)
}
}

switch(prompt1){
    case 1:
        let BusquedaSeleccionada1 = prompt ("Por favor coloque el nombre del album que necesita buscar: ")
        let Resultado1= BuscaAlbums(BusquedaSeleccionada1)
        MostrarResultados(Resultado1)
        break;
    case 2:
        let BusquedaSeleccionada2 = prompt ("Por favor coloque el nombre de la cancion que necesita buscar: ")
        let Resultado2= BuscaCancion(BusquedaSeleccionada2)
        MostrarResultados(Resultado2)
        break;
    case 3:
        let BusquedaSeleccionada3 = prompt ("Por favor coloque el año del album que necesita buscar: ")
        let Resultado3= BuscaAnio(BusquedaSeleccionada3)
        MostrarResultados(Resultado3)
        break;
    case 4:
        MostrarResultados(BuscaTodo())
        break;

    default: 
    alert("ERROR - RECARGUE PAGINA")
}