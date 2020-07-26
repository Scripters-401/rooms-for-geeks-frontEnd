import React from 'react';
import { connect } from 'react-redux';

import { storage } from "./index";
import * as actions from '../../store/uploadImageReducer'

const UploadImage = props => {
  // const [image, setImage] = useState(null);
  // const [url, setUrl] = useState("");
  // const [progress, setProgress] = useState(0);

  const handleChange = e => {
    if (e.target.files[0]) {
      props.setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${props.upload.image.name}`).put(props.upload.image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        props.setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(props.upload.image.name)
          .getDownloadURL()
          .then(url => {
            props.setUrl(url);
          });
      }
    );
  };

  console.log("image: ", props.upload.image);

  return (
    <div>
      <progress value={props.upload.progress} max="100" />
      <br />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};


const mapStateToProps = state => ({
  sign: state.sign,
  upload:state.upload,
});

const mapDispatchToProps = (dispatch, getState) => ({
  setImage: (image) => dispatch(actions.setImage(image)),
  setProgress: (progress) => dispatch(actions.setProgress(progress)),
  setUrl: (url) => dispatch(actions.setUrl(url)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);