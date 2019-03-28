import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Hello', duration: '5:00' },
        { title: 'No promises', duration: '4:00' },
        { title: 'Spice up your life', duration: '3:00' },
        { title: 'Dancing in the rain', duration: '2:00' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers ({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});