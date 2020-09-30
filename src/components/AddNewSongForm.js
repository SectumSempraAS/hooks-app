import React, { useState } from 'react';

const AddNewSongForm = ({addSongs}) => {
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addSongs(name);
        setName('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Song Name:</label>
            <input type='text'
                   value={name}
                   onChange={ (e) =>
                       setName(e.target.value)}
                   required/>
            <input type='submit' value='add song'/>
        </form>
    )
}

export default AddNewSongForm;

