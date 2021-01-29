import React, {useState} from 'react'



export  default function SearchMovie() {
    const apiKey = '884fb462c33685921cb1b2e54ca679f7'
    const [name, setName] = useState('')
    const [movie, setMovie] = useState([])
    const search = evt => {
        if(evt.key === 'Enter'){
            fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${apiKey}`)
                .then(res => res.json())
                .then(res => {
                        setMovie(res.results.splice(0,1))
                        console.log(res.results.splice(0,1))
                        setName('')
                }
                )
        }
    }
    console.log(name)
    return (
        <div>
            <div>
                <h1>Search Movies</h1>
                    <input
                        type='text'
                        placeholder='Enter movie...'
                        value={name}
                        onChange={event => setName(event.target.value)}
                        onKeyPress={search}
                    />
            </div>
            <div>
                {( movie.length > 0)?
                    (
                        <div>
                            <img width='100' alt='' src={`https://www.themoviedb.org/t/p/original${movie[0].poster_path}`}/>
                            <h4>{movie[0].title}</h4>
                            <strong>{movie[0].vote_average}/10({movie[0].vote_count})</strong>
                            <h5>date release: {movie[0].release_date}</h5>
                            <p>Owerview:{movie[0].overview}</p>
                        </div>
                    ):
                    (<p>enter search</p>)}

            </div>
        </div>
    )
}