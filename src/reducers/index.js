import { combineReducers } from 'redux';

//songlist reducer

const songsReducer = () => {
  return [
    {title: 'Toosie Step', duration: '4:15'},
    {title: 'Macarena', duration: '2:30'},
    {title: 'All Star', duration: '4:52'},
    {title: 'I Want It That Way', duration: '3:25'},
  ];
};

//selected song reducer

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
};



export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});