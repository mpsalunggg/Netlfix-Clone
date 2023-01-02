import React from 'react'
import Movies from './Movies';
import { reqApi } from './../Api/Api';

function SubMovies() {
  return (
    <div className="App">
      <Movies title={'NETFLIX ORIGINALS'} url={reqApi.moviesOriginal} poster={true}/>
      <Movies title={'Trending Now'} url={reqApi.moviesTrending}/>
      <Movies title={'Top Rated'} url={reqApi.moviesTopRate}/>
      <Movies title={'Action'} url={reqApi.moviesAction}/>
      <Movies title={'Comedy'} url={reqApi.moviesComedy}/>
      <Movies title={'Horror'} url={reqApi.moviesHorror}/>
      <Movies title={'Romance'} url={reqApi.moviesRomance}/>
      <Movies title={'Documentary'} url={reqApi.moviesDocumentary}/>
    </div>
  )
}

export default SubMovies


