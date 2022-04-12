
import React, { useState } from 'react';




const DisplayMusic = (props) => {
    
    
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [date, setDate] = ('');
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEdit = {
            Title: title,
            Artist: artist,
            Album: album,
            Genre: genre, 
            Date: date,
            
            
        };

        console.log(newEdit);
        props.addNewSong(newEdit);
    }
    

    
    return ( 
        <div>



            <form onSubmit={handleSubmit} >
            <label>Title</label>
            <input type= 'text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <label>Artist</label>
            <input type= 'text' value={artist} onChange={(e)=>setArtist(e.target.value)}/>
            <label>Album</label>
            <input type= 'text' value={album} onChange={(e)=>setAlbum(e.target.value)}/>
            <label>Genre</label>
            <input type= 'text' value={genre} onChange={(e)=>setGenre(e.target.value)}/>
            <label>Release Date</label>
            <input type= 'date' value={date} onChange={(e)=>setDate(e.target.value)}/>
            
            <button type = 'Submit'>Add</button>
            
            </form>
 
 
        </div>
    );
}
 
export default DisplayMusic;