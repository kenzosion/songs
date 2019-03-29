import React from 'react';
import { connect } from 'react-redux';

 const SongDetail = ({song}) => {
     if (!song)  {
        return <p>Please select a song.</p>
     }
  return (
    <div>
     <h3>Details for:</h3>
        <h5>
            Title: {song.title}
        </h5>
        <p>
            Duration: {song.duration}
        </p>
    </div>
  )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);