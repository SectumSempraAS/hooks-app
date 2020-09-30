import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import AddNewSongForm from "./AddNewSongForm";

const SongList = () => {
    const [songs, setSongs ] = useState([
        {name : 'Something in the Way', id : 1},
        {name : 'The less I know the better', id : 2},
        {name : 'All time low', id : 3}
    ])

    const [age, setAge] = useState(20)

    const addSongs = (name) => {
        setSongs([...songs, {name : name, id: uuidv4()}])
    }

    useEffect( () => {
        console.log('useEffect hook ran for all the ' +
            'states in function component', songs , age);
    })
    useEffect( () => {
        console.log('useEffect hook ran for songs state', songs);
    }, [songs])
    useEffect( () => {
        console.log('useEffect hook ran for age state', age);
    }, [age])

    return (
        <div className="song-list">
            <ul>
                {songs.map(song =>{
                    return ( <li key={song.id}>{song.name}</li>)
                })}
            </ul>
            <AddNewSongForm addSongs={addSongs} />
            <br/>
            <button onClick={() => setAge(age + 1)}>
                Increment Age : {age}</button>
        </div>
    )
}

export default SongList;