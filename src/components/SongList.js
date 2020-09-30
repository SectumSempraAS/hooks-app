import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

const SongList = () => {
    const [songs, setSongs ] = useState([
        {name : 'Something in the Way', id : 1},
        {name : 'The less I know the better', id : 2},
        {name : 'All time low', id : 3}
    ])

    const addSongs = () => {
        setSongs([...songs, {name : 'New Song', id: uuidv4()}])
    }
    return (
        <div className="song-list">
            <ul>
                {songs.map(song =>{
                    return ( <li key={song.id}>{song.name}</li>)
                })}
            </ul>
            <button onClick={addSongs}>Add Song</button>
        </div>
    )
}

export default SongList;