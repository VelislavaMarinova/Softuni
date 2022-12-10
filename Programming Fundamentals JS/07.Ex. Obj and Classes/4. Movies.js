function movies(arr) {
    let arrOfMovies = arr.slice(0)
    let listMovie = {};
    let arrMovie = [];

    for (let i = 0; i < arr.length; i++) {
        let arrEl = arr[i].split(" ")
        let currentMov = arr[i].split(" ").slice(1).join(' ');
        if (arr[i].includes("addMovie")) {
            let currentMov = arr[i].split(" ").slice(1).join(' ');
            listMovie.name = currentMov;
            arrMovie.push(currentMov)
            arrOfMovies.shift()


        }
        for (let el of arrOfMovies) {
            let arrEl = el.slit(" ");

            if (arrEl.includes(currentMov)){
                
            }
        }
        console.log(listMovie);
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])