import React from 'react'
import './popular.css'

export default class Popular extends React.Component {

    state = {
        loading: true,
        movie: null
    }

    async componentDidMount(){
        const apiKey = '884fb462c33685921cb1b2e54ca679f7'
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        const data = await response.json()
        this.setState({movie: data.results.splice(0,5), loading: false})
        console.log(data.results)
    }

    render() {
        return (
            <div className='container'>
                <h1>Most popular films</h1>
                {this.state.loading || !this.state.movie ?
                    (<div>Loading...</div>
                    ) : (
                    <div className='container-not-map'>
                        {this.state.movie.map(movie =>
                            <div className='container-map'>
                                    <img src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`} alt=''/>
                                    <h3>{movie.title}</h3>
                            </div>
                        )}
                    </div>
                    )}
            </div>
        )
    }
}

