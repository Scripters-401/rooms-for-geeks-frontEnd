/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './userPage.scss';
import { connect } from 'react-redux';
import { storage } from "../firebase";
import * as actions from '../../store/userReducer';
import * as actions2 from '../../store/putUserInfo';
import * as actions3 from '../../store/uploadImageReducer'

const User = props => {
    useEffect(() => {
        props.getInfoUser(props.sign.token, props.sign.user.id)
    }, [props.sign.token, props.sign.user.id])

    const handleSubmitFun = event => {
        event.preventDefault();
        if (event.target.imagesUpload.value) {
            const uploadTask = storage.ref(`images/${props.upload.image.name}`).put(props.upload.image);
            uploadTask.on("state_changed", () => {
                storage
                    .ref("images")
                    .child(props.upload.image.name)
                    .getDownloadURL()
                    .then(url => {
                        props.putInfoUser(
                            props.sign.token,
                            props.sign.user.id,
                            props.editUserInfo.password,
                            props.editUserInfo.name,
                            props.editUserInfo.major,
                            props.editUserInfo.university,
                            url
                        );
                        props.getInfoUser(props.sign.token, props.sign.user.id)
                    });
            });
        } else {
            props.putInfoUser(
                props.sign.token,
                props.sign.user.id,
                props.editUserInfo.password,
                props.editUserInfo.name,
                props.editUserInfo.major,
                props.editUserInfo.university,
                props.editUserInfo.profileIMG,
            );
            props.getInfoUser(props.sign.token, props.sign.user.id)
        }
    }

    const handleChangePic = e => {
        if (e.target.files[0]) {
            props.setImage(e.target.files[0]);
        }
    };

    const currentDate = new Date();
    let fullYear = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let day = currentDate.getDay();

    let createdTimeDate = props.userInfo.user.createdTime;
    let newDatecreatedTime = new Date(createdTimeDate);
    let createdTimeFullYear = newDatecreatedTime.getFullYear();
    let createdTimeMonth = newDatecreatedTime.getMonth();
    let createdTimeDay = newDatecreatedTime.getDay();

    let getExactYear = fullYear - createdTimeFullYear;
    let getExactMonth;
    let getExactDay

    if (createdTimeDay > day) {
        getExactDay = createdTimeDay - day;
    } else {
        getExactDay = day - createdTimeDay;
    }

    if (month > createdTimeMonth) {
        getExactMonth = month - createdTimeMonth;
    } else {
        getExactMonth = createdTimeMonth - month;
    }

    const togglePass = () => {
        let idInput = document.getElementById("passInput");
        if (idInput.type === "password") {
          idInput.type = "text";
        } else {
            idInput.type = "password";
        }
      }

    return (
        <div>
            <>
                <p>Username: {props.userInfo.user.username}</p>
                <p>Email: {props.userInfo.user.email}</p>
                <p>Over joined: {`${getExactYear} Years, ${getExactMonth} Months, and ${getExactDay} Days`}</p>
                <img src={`${props.userInfo.user.profileIMG}`} alt='userImage'></img>


                <form onSubmit={(e) => {
                    handleSubmitFun(e);
                    // window.location.reload()
                }}>
                    <h3>Update</h3>

                    <div>
                        <label>Password</label>
                        <input type="password" value={props.editUserInfo.password} name="password" id="passInput" onChange={(e) => props.updateData(e)}></input>
                        <input type="checkbox" onClick={togglePass}></input>Show Password
                    </div>

                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={(e) => props.updateData(e)}
                            placeholder={props.userInfo.user.name}
                        ></input>
                    </div>
                    <div>
                        <label>Major</label>
                        <input
                            type="text"
                            name="major"
                            onChange={(e) => props.updateData(e)}
                            placeholder={props.userInfo.user.major}
                        />
                    </div>
                    <div>
                        <label>University</label>
                        <input
                            type="text"
                            name="university"
                            onChange={(e) => props.updateData(e)}
                            placeholder={props.userInfo.user.university}
                        />
                    </div>
                    <div>
                        <label>profileIMG</label>
                        <input className='ChooseImage' name="imagesUpload" type="file" onChange={handleChangePic} />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        sign: state.sign,
        editUserInfo: state.editUserInfo,
        upload: state.upload,
    };
};

const mapDispatchToProps = (dispatch, getState) => ({
    getInfoUser: (token, id) => dispatch(actions.getInfoUser(token, id)),
    updateData: (event) => dispatch(actions2.updateData(event)),
    setImage: (image) => dispatch(actions3.setImage(image)),
    putInfoUser: (token, id, password, name, major, university, profileIMG) =>
        dispatch(actions2.putInfoUser(token, id, password, name, major, university, profileIMG)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);