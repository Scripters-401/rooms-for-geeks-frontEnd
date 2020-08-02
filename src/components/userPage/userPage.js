/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './userPage.scss';
import { connect } from 'react-redux';
import { storage } from "../firebase";
import * as actions from '../../store/userReducer';
import * as actions2 from '../../store/putUserInfo';
import uploadImageReducer, * as actions3 from '../../store/uploadImageReducer';
import Show from '../auth/show';

const User = props => {

    useEffect(() => {
        props.getInfoUser(props.sign.token, props.sign.user.id)
    }, [props.sign.token, props.sign.user.id])

    const handleSubmitFun = (event, flipname) => {
        event.preventDefault();
        if (event.target.imagesUpload) {
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
        props.updateFlip(`flip${flipname}`)

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
    const changeToForm = (name) => {
        props.updateFlip(`flip${name}`)
    }
    const uploadImageEdit = (e) => {
        console.log('nnnnnnnnnnnnnn');
        console.log(e.target.imagesUpload,'ggggggggggg');

        if (e.target.files[0]) {
        console.log(e.target.files[0],'kkkkkkkk');

            props.setImage(e.target.files[0]);
        }
    }
    return (
        <div className="mainDiv">
            <>
                <div id="imgAndBtn">
                    <div id="divJustImage">
                        <img className="image infoSec" src={`${props.userInfo.user.profileIMG}`} alt='userImage'></img>
                        <div class="edit_container2 cf" >
                            <span className='photoIcon'>
                                {/* <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" /> */}
                                <label for='ee' className='inputImagelabel'></label>
                                <input className='uploadButton' id='ee' type='file' accept=".png, .jpg, .jpeg" name="imagesUpload" onClick={e => uploadImageEdit(e)} />
                                <img src="http://stjdev.convio.net/app/common/img/camera.png" alt='camera' /></span>
                            <div class="left_circle">
                            </div>
                            <div class="right_circle">
                            </div>
                        </div>
                    </div>
                    {/* <span href="#" className={`btn btn-default toggleButton make-${props.editUserInfo.hide}`} id="toggle-form" onClick={(payload) => props.hideFun(payload)}>Edit</span>
                    <div className={`make-${props.editUserInfo.toggle}`}>

                    </div> */}



                    {/* commmmmmmmmmmment */}
                    <p className="username infoSec">Username: {props.userInfo.user.username}</p>
                    <p className="email infoSec">Email: {props.userInfo.user.email}</p>



                    <div className='hiii'>
                        <div class="avatar-upload">
                            <div class="avatar-edit">
                                <input type='text' id="name" onClick={() => changeToForm('Name')} />
                                <label for="name"></label>

                            </div>

                        </div>

                        <Show condition={props.editUserInfo.flipName}>

                            <p className="name infoSec">Name: {props.userInfo.user.name}</p>

                        </Show>
                        <Show condition={!props.editUserInfo.flipName}>
                            <form onSubmit={(e) => handleSubmitFun(e, 'Name')}>

                                <input
                                    type="text"
                                    name="name"
                                    onChange={(e) => props.updateData(e)}
                                    placeholder={props.userInfo.user.name}
                                    className="form-control"
                                ></input>
                                <button>Done Edit</button>

                            </form>
                        </Show>
                    </div>

                    <div className='hiii'>
                        <div class="avatar-upload">
                            <div class="avatar-edit">
                                <input type='text' id="major" onClick={() => changeToForm('Major')} />
                                <label for="major"></label>

                            </div>

                        </div>
                        <Show condition={props.editUserInfo.flipMajor}>

                            <p className="majorr infoSec">Major: {props.userInfo.user.major}</p>

                        </Show>

                        <Show condition={!props.editUserInfo.flipMajor}>
                            <form onSubmit={(e) => handleSubmitFun(e)}>

                                <input
                                    type="text"
                                    name="major"
                                    onChange={(e) => props.updateData(e)}
                                    placeholder={props.userInfo.user.major}
                                    className="form-control"
                                />
                                <button>Done Edit</button>

                            </form>
                        </Show>

                    </div>

                    <div className='hiii'>
                        <div class="avatar-upload">
                            <div class="avatar-edit">
                                <input type='text' id="university" onClick={() => changeToForm('University')} />
                                <label for="university"></label>
                            </div>
                        </div>
                        <Show condition={props.editUserInfo.flipUniversity}>
                            <p className="university infoSec">University: {props.userInfo.user.university}</p>
                        </Show>
                        <Show condition={!props.editUserInfo.flipUniversity}>
                            <form onSubmit={(e) => handleSubmitFun(e)}>
                                <input
                                    type="text"
                                    name="university"
                                    onChange={(e) => props.updateData(e)}
                                    placeholder={props.userInfo.user.university}
                                    className="form-control"
                                />
                                <button>Done Edit</button>
                            </form>
                        </Show>
                    </div>

                    <p className="joined infoSec"> Member since: {`${getExactYear} Years, ${getExactMonth} Months, and ${getExactDay} Days`}</p>

                    {/* End commmmmmmmmmmment */}


                    {/* <div id="infoForm">
                        <div id='info' acceptCharset='UTF-8'>
                            <p className="username infoSec">Username: {props.userInfo.user.username}</p>
                            <p className="email infoSec">Email: {props.userInfo.user.email}</p>
                            <p className="name infoSec">Name: {props.userInfo.user.name}</p>
                            <p className="majorr infoSec">Major: {props.userInfo.user.major}</p>
                            <p className="university infoSec">University: {props.userInfo.user.university}</p>
                            <p className="joined infoSec"> Member since: {`${getExactYear} Years, ${getExactMonth} Months, and ${getExactDay} Days`}</p>
                        </div>
                    </div> */}
                </div>

                {/* 
                <div className={`do-${!props.editUserInfo.hide} do-${props.editUserInfo.toggle}`}>
                    <span href="#" className="btn btn-default xx" id="toggle-info" onClick={(payload) => props.toggleFun(payload)}>X</span>
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
                </div> */}
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
    hideFun: (paylod) => dispatch(actions2.hideFun(paylod)),
    toggleFun: (paylod) => dispatch(actions2.toggleFun(paylod)),
    updateFlip: (flipName) => dispatch(actions2.updateFlip(flipName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);