import {connect} from 'react-redux'
// import React,{Component} from 'react'
import Stations from '../components/Stations'

  const convertSongsToStations = function (songsArray) {
    const stations = {}
    songsArray.forEach((song)=> {
        const genre = song.genre
        if (stations[genre] == undefined){
          stations[genre]=[]
        }
        stations[genre].push(song)
    
      })
    return stations
  };
  


  const mapStateToProps= state => {
    return {stations : convertSongsToStations(state.songs)}
  }
  const mapDispatchToProps=dispatch =>{
    return {}
  }
  const StationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Stations)

  export default StationsContainer
//   const stations = {
//   "Instrumental": [{
//     id: 1,
//     name: "The Stars Are Out",
//     genre: "Instrumental"
//   }, {
//     id: 3,
//     name: "Shooting Star",
//     genre: "Instrumental"
//   }],
//   "Saxaphone Solo": [{
//     id: 2,
//     name: "Careless Whisper",
//     genre: "Saxophone Solo"
//   }]
// };
