import React from 'react'


export default class TopRates extends React.Component {
    state = {
        loading: true,
        rate: null
    }


    async componentDidMount(){
        const apiKey = '884fb462c33685921cb1b2e54ca679f7'
        const response =
            await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
        const data = await response.json()
        this.setState({rate: data.results.splice(15,10), loading: false})
        console.log(data.results)
    }

    render() {
        return (
            <div>
                <h1>Top Rates</h1>
                {this.state.loading || !this.state.rate ?
                    (<div>Loading...</div>
                    ) : (
                        <div className='container-not-map'>
                            {this.state.rate.map(movie =>
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