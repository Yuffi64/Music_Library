import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic';
import MusicTable from './Components/MusicTable';
// import SearchBar from './Components/SearchBar'
import './index.css'




function App() {
  const [musicLibrary, setMusicLibrary] = useState([
    {
        "id": 1,
        "title": "I want it that way",
        "artist": "The Backstreet Boys",
        "album": "Millennium",
        "release_date": "1999-04-12",
        "genre": "Pop"
    },
    {
        "id": 2,
        "title": "Wings of a butterfly",
        "artist": "H.I.M",
        "album": "Dark Light",
        "release_date": "2015-08-02",
        "genre": "Rock"
    },
    {
        "id": 3,
        "title": "Not Meant To Be",
        "artist": "Theory of a Deadman",
        "album": "Scars & souvenirs",
        "release_date": "2008-12-07",
        "genre": "Rock"
    },
    {
        "id": 4,
        "title": "In the end",
        "artist": "Linkin Park",
        "album": "Hybird Theory",
        "release_date": "1999-10-09",
        "genre": "alternative, hard rock"
    }
]);

    useEffect(()=>{
      getAllMusic();
    })

    async function getAllMusic(){
      let response = await axios.get('http://127.0.0.1:8000/api/music/');
      console.log('getAllMusic Response',response.data);
      // getAllMusic(response.data); 
     }
 
  



  return(
    <div>
      <div>
        
      </div>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-6em'>
              <h1>Music Library</h1>
               
              <div className='border-box'>
                {/* <SearchBar /> */}
                <MusicTable parentMusic={musicLibrary}/>
              </div>
            </div>
              <h3>Add a Song</h3>
              <DisplayMusic />
          </div>
      </div>
    </div>

  );  




}
export default App;