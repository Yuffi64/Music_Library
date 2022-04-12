import React from 'react';



const MusicTable = (props)=> {
    

    return(
        <div>
            <table>
                <thread>
                    <tr className='form-group'>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </thread>
                <tbody>
                    {props.parentMusic.map((music, index)=> {
                        return(
                            <tr>
                                <td>{index + 1}</td>
                                <td>{music.title}</td>
                                <td>{music.artist}</td>
                                <td>{music.album}</td>
                                <td>{music.genre}</td>
                                <td>{music.date}</td>
                            </tr>
                        )
                    })}
                        
                       
                    </tbody>
                

             </table>

               
        </div>
    )
}

export default MusicTable;