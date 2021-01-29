import React from 'react'


export default class Uncomming extends React.Component {
    state = {
        loading: true,
        uncom: null
    }


    async componentDidMount(){
        const apiKey = '884fb462c33685921cb1b2e54ca679f7'
        const response =
            await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
        const data = await response.json()
        this.setState({uncom: data.results.splice(15,10), loading: false})
        console.log(data.results)
    }

    render() {
        return (
            <div>
                <h1>Top Rates</h1>
                {this.state.loading || !this.state.uncom ?
                    (<div>Loading...</div>
                    ) : (
                        <div className='container-not-map'>
                            {this.state.uncom.map(movie =>
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