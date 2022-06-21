export const getMovies = async(query='', gte=0, lte=10) => {
    if(query==''){
        const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ac7a7b884b8e9a7537b6089d3fa76dcb&sort_by=popularity.desc&with_watch_monetization_types=flatrate');
        let {results} = await result.json();
        results = results.map(e=>{
            let img = '';
            e.poster_path ? img = e.poster_path : img = e.backdrop_path;
            if((e.poster_path || e.backdrop_path) && e.title && e.vote_average && e.overview){
                return(
                    {
                        name: e.title,
                        img: 'https://image.tmdb.org/t/p/w200'+img,
                        popularity: e.vote_average,
                        overview: e.overview
                    }
                )
            }
        });
        results = results.filter((e)=>e!=undefined);
        return results;
    }
    const result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ac7a7b884b8e9a7537b6089d3fa76dcb&query=${query}`);
    let {results} = await result.json();
    results = results.map(e=>{
        let img = '';
        e.poster_path ? img = e.poster_path : img = e.backdrop_path;
        if((e.poster_path || e.backdrop_path) && e.title && e.vote_average && e.overview){
            return(
                {
                    name: e.title,
                    img: 'https://image.tmdb.org/t/p/w200'+img,
                    popularity: e.vote_average,
                    overview: e.overview
                }
            )
        }
    });
    results = results.filter((e)=>e!=undefined);
    results = results.filter(e=>(e.popularity<=lte && e.popularity>=gte))
    return results;
}