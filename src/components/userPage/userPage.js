/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './userPage.scss';
import { connect } from 'react-redux';
import { storage } from "../firebase";
import * as actions from '../../store/userReducer';
import * as actions2 from '../../store/putUserInfo';
import * as actions3 from '../../store/uploadImageReducer';
import $ from 'jquery';

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

    // $("#form").hide();
    // $("#toggle-info").hide();
    $("#toggle-form").click(function () {
        $("#toggle-form").hide();
        // $("#info").hide().attr("formnovalidate");
        $("#info").hide();
        $("#form").show();
        $("#toggle-info").toggle();
    });

    $("#toggle-info").click(function () {
        $("#toggle-info").hide();
        // $("#form").hide().attr("formnovalidate");
        $("#form").hide();
        $("#info").show();
        $("#toggle-form").toggle();
    });

    $("document").ready(function () {
        $("#toggle-info").hide();
        $("#info").hide();
    });

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
        <div className="mainDiv">
            <>
                <div className="withImage">
                    <div id="imgAndBtn">
                    <div id="divJustImage"><img className="image infoSec" src={`${props.userInfo.user.profileIMG}`} alt='userImage'></img></div>
                        <span href="#" className="btn btn-default toggleButton" id="toggle-form">Edit</span>
                        <span href="#" className="btn btn-default toggleButton" id="toggle-info">Back</span>
                    </div>
                    <div id="infoForm">
                        <div id='info' accept-charset='UTF-8'>
                            <p className="username infoSec">Username: {props.userInfo.user.username}</p>
                            <p className="email infoSec">Email: {props.userInfo.user.email}</p>
                            <p className="name infoSec">Name: {props.userInfo.user.name}</p>
                            <p className="majorr infoSec">Major: {props.userInfo.user.major}</p>
                            <p className="university infoSec">University: {props.userInfo.user.university}</p>
                            <p className="joined infoSec">Over joined: {`${getExactYear} Years, ${getExactMonth} Months, and ${getExactDay} Days`}</p>
                        </div>
                    </div>
                </div>
                <div id="formForm" id='form'>
                    <form id="formI" onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmitFun(e);
                        // window.location.reload()
                    }}>
                        <h3 className="subForm">Update Profile</h3>

                        <div className="form-group col-md-5">
                            <label>Password</label>
                            <input placeholder="password" className="form-control" type="password" value={props.editUserInfo.password} name="password" id="passInput" onChange={(e) => props.updateData(e)}></input>
                            <input type="checkbox" onClick={togglePass}></input>Show Password
                    </div>

                        <div className="form-group col-md-5">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                onChange={(e) => props.updateData(e)}
                                placeholder={props.userInfo.user.name}
                                className="form-control"
                            ></input>
                        </div>
                        <div className="form-group col-md-5">
                            <label>Major</label>
                            <input
                                type="text"
                                name="major"
                                onChange={(e) => props.updateData(e)}
                                placeholder={props.userInfo.user.major}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-5">
                            <label>University</label>
                            <input
                                type="text"
                                name="university"
                                onChange={(e) => props.updateData(e)}
                                placeholder={props.userInfo.user.university}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group col-md-5">
                            <label>Profile Image</label>
                            <input id="imagesUploadId" className='form-control-file' name="imagesUpload" type="file" onChange={handleChangePic} className="form-control" />
                        </div>
                        <div className="form-group col-md-5">
                            <button type="submit" className="btn">Submit</button></div>
                    </form>
                </div>
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