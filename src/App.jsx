import { useState, useEffect } from 'react'
import './App.css'
import SideBar from './SideBar'
import Poster from './Poster'
import Card from './Card'
import Raw from './Raw'

function App() {
  const [posterImg, serPosterImg] = useState('');
  const [posterTitle, setPosterTitle] = useState('');
  const [posterDesc, setPosterDesc] = useState('');
  const [popularData, setPopularData] = useState({});
  const [horrorData, setHorrorData] = useState({});
  const [actionData, setActionData] = useState({});
  const [continueWatching, setContinueWatching] = useState({});


  const Image_URL = 'https://image.tmdb.org/t/p/original'
  const number = Math.floor(Math.random() * 20);

  //Setting Up Continue Watching
  useEffect(()=>{
    const url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY2ZDViZGY5NmZlZGNkYjI5YzljMGJiYmI1ZGI0YiIsInN1YiI6IjY2NDM1ZWU2YjExZDcxYTQ4NzcxMDUwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f0hUxW4GmYk78F8YF3ne9XysTs6JhHfno1f0yoLEdYM'
    }
    };
    fetch(url, options)
    .then(res => res.json())
    .then(json => {
      setContinueWatching(json.results);
                  })
    .catch(err => console.error('error:' + err));
  }, [])

  //Setting Up Poster
  useEffect(()=>{
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY2ZDViZGY5NmZlZGNkYjI5YzljMGJiYmI1ZGI0YiIsInN1YiI6IjY2NDM1ZWU2YjExZDcxYTQ4NzcxMDUwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f0hUxW4GmYk78F8YF3ne9XysTs6JhHfno1f0yoLEdYM'
    }
    };
    fetch(url, options)
    .then(res => res.json())
    .then(json => {serPosterImg(json.results[number].backdrop_path.toString());
                   setPosterTitle(json.results[number].title.toString());
                   setPosterDesc(json.results[number].overview.toString());
                  })
    .catch(err => console.error('error:' + err));
}, [])

//Setting Up Popular
useEffect(()=>{
  const url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=2&sort_by=popularity.desc';
  const options = {
  method: 'GET',
  headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY2ZDViZGY5NmZlZGNkYjI5YzljMGJiYmI1ZGI0YiIsInN1YiI6IjY2NDM1ZWU2YjExZDcxYTQ4NzcxMDUwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f0hUxW4GmYk78F8YF3ne9XysTs6JhHfno1f0yoLEdYM'
  }
  };
  fetch(url, options)
  .then(res => res.json())
  .then(json => {
                 setPopularData(json.results);
                })
  .catch(err => console.error('error:' + err));
}, [])

//Setting Up Horror
useEffect(()=>{
  const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27';
  const options = {
  method: 'GET',
  headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY2ZDViZGY5NmZlZGNkYjI5YzljMGJiYmI1ZGI0YiIsInN1YiI6IjY2NDM1ZWU2YjExZDcxYTQ4NzcxMDUwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f0hUxW4GmYk78F8YF3ne9XysTs6JhHfno1f0yoLEdYM'
  }
  };
  fetch(url, options)
  .then(res => res.json())
  .then(json => {
    setHorrorData(json.results);
                })
  .catch(err => console.error('error:' + err));
}, [])

//Setting Up Action
useEffect(()=>{
  const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28';
  const options = {
  method: 'GET',
  headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY2ZDViZGY5NmZlZGNkYjI5YzljMGJiYmI1ZGI0YiIsInN1YiI6IjY2NDM1ZWU2YjExZDcxYTQ4NzcxMDUwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f0hUxW4GmYk78F8YF3ne9XysTs6JhHfno1f0yoLEdYM'
  }
  };
  fetch(url, options)
  .then(res => res.json())
  .then(json => {
    setActionData(json.results);
                })
  .catch(err => console.error('error:' + err));
}, [])

  return (
    <>
      <SideBar />
      <Poster img={Image_URL+posterImg} title={posterTitle} desc={posterDesc}/>
      <div style={{position:'relative'}}> 
        <Raw data={continueWatching} top='65vh' name='Continue Watching'/>
        <br /><br /><br />
        <Raw data={popularData} name='Popular' top='71vh'/>
        <br /><br /><br />
        <Raw data={horrorData} name='Horror' top='71vh' />
        <br /><br /><br />
        <Raw data={actionData} name='Action' top='71vh'/>
        <br /><br /><br />
      </div>
      
      {/* <div style={{height:'5000px'}}></div> */}
    </>
  )
}

export default App
