import React from 'react';
import { connect } from 'react-redux';

 const SongDetail = (props) => {
  return (
    <div>
      song detail
    </div>
  )
}

const mapStateToProps = () => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);