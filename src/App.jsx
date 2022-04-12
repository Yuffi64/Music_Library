import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic';
import MusicTable from './Components/MusicTable';
import './index.css'




function App() {
  const [musicLibrary, setMusicLibrary] = useState(['']);

    useEffect(()=>{
      getAllMusic();
    }, [])

  async function getAllMusic(){
    let response = await axios.get('http://127.0.0.1:8000/admin/');
    setMusicLibrary(response.data);

    
  }
  console.log(musicLibrary);



  return(
    <div>
      <div>
        
      </div>
      <div className='row'>
        <div className='container-fluid'>
            <div className='border-box'>
              <h1>Music Library</h1>
              <table>Table</table>
              <h3>Add a Song</h3>
              <MusicTable parentMusic={musicLibrary}/>
              <DisplayMusic />
              

            </div>
          </div>
      </div>
    </div>

  );  




}
export default App;