import React from 'react'
import Nav from "./nav";
import Popular from "./popular";
import Uncomming from "./uncomming";
import TopRates from "./topRates";
import SearchMovie from "./search";

function Main() {
    return (
        <>
            <Nav />
            <Popular />
            <Uncomming />
            <TopRates />
            <SearchMovie />
        </>
    )
}


export default Main