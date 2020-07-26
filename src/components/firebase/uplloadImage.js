import React from 'react';
import { connect } from 'react-redux';

import { storage } from "./index";
import * as actions from '../../store/uploadImageReducer'
import './uploadImage.scss'
const UploadImage = props => {

  const handleChangePic = e => {
    if (e.target.files[0]) {
      props.setImage(e.target.files[0]);
    }
  };

  const handleUpload =  () => {
    const uploadTask = storage.ref(`images/${props.upload.image.name}`).put(props.upload.image);
    uploadTask.on("state_changed",() => {
        storage
          .ref("images")
          .child(props.upload.image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            props.setUrl(url);
          });
      }
    );
  };


  return (
    <div>
      <progress value={props.upload.progress} max="100" />
      <br />
      <input className='ChooseImage' type="file" onChange={handleChangePic} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};


const mapStateToProps = state => ({
  sign: state.sign,
  upload: state.upload,
});

const mapDispatchToProps = (dispatch, getState) => ({
  setImage: (image) => dispatch(actions.setImage(image)),
  setProgress: (progress) => dispatch(actions.setProgress(progress)),
  setUrl: (url) => dispatch(actions.setUrl(url)),

});

export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);