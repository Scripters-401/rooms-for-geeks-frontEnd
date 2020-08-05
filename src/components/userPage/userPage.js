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
        window.scrollTo(0, 0)

        props.getInfoUser(props.sign.token, props.sign.user.id)
    }, [props.sign.token, props.sign.user.id,])

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


    // const currentDate = new Date();
    // let fullYear = currentDate.getFullYear();
    // let month = currentDate.getMonth();
    // let day = currentDate.getDay();

    // let createdTimeDate = props.userInfo.user.createdTime;
    // let newDatecreatedTime = new Date(createdTimeDate);
    // let createdTimeFullYear = newDatecreatedTime.getFullYear();
    // let createdTimeMonth = newDatecreatedTime.getMonth();
    // let createdTimeDay = newDatecreatedTime.getDay();

    // let getExactYear = fullYear - createdTimeFullYear;
    // let getExactMonth;
    // let getExactDay

    // if (createdTimeDay > day) {
    //     getExactDay = createdTimeDay - day;
    // } else {
    //     getExactDay = day - createdTimeDay;
    // }

    // if (month > createdTimeMonth) {
    //     getExactMonth = month - createdTimeMonth;
    // } else {
    //     getExactMonth = createdTimeMonth - month;
    // }

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
        // e.preventDefault();
        let z = e.target.files[0];
        if (z) {
            const uploadTask = storage.ref(`images/${z.name}`).put(z);
            uploadTask.on("state_changed", () => {
                storage
                    .ref("images")
                    .child(z.name)
                    .getDownloadURL()
                    .then(async url => {
                        await props.putInfoUser(
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
        }
    }

    return (
        <div className="mainDiv">

            <div id="imgAndBtn">
                <div id="divJustImage">
                    <img className="image" src={`${props.userInfo.user.profileIMG}`} alt='userImage'></img>
                    <div className="edit_container2 cf" >
                        <span className='photoIcon'>
                            <label htmlFor='ee' className='inputImagelabel'></label>
                            <input className='uploadButton' id='ee' type='file' name="imagesUpload" onChange={e => uploadImageEdit(e)} />
                            <img src="http://stjdev.convio.net/app/common/img/camera.png" alt='camera' />
                        </span>
                        <div className="left_circle">
                        </div>
                        <div className="right_circle">
                        </div>
                    </div>
                </div>

                <p className="username infoSec">Username: {props.userInfo.user.username}</p>
                <p className="email infoSec">Email: {props.userInfo.user.email}</p>



                <div className='hiii'>
                    <div className="avatar-upload">
                        <div className="avatar-edit">
                            <input type='text' id="name" onClick={() => changeToForm('Name')} />
                            <label htmlFor="name"></label>

                        </div>

                    </div>

                    <Show condition={props.editUserInfo.flipName}>

                        <p className="name infoSec">Name: {props.userInfo.user.name}</p>

                    </Show>
                    <Show condition={!props.editUserInfo.flipName}>
                        <form className='changeData' onSubmit={(e) => handleSubmitFun(e, 'Name')}>

                            <input
                                type="text"
                                name="name"
                                onChange={(e) => props.updateData(e)}
                                defaultValue={props.userInfo.user.name}
                                className="form-control"
                            ></input>
                            <button>Save</button>

                        </form>
                    </Show>
                </div>

                <div className='hiii'>
                    <div className="avatar-upload">
                        <div className="avatar-edit">
                            <input type='text' id="major" onClick={() => changeToForm('Major')} />
                            <label htmlFor="major"></label>

                        </div>

                    </div>
                    <Show condition={props.editUserInfo.flipMajor}>
                        <p className="majorr infoSec">Major: {props.userInfo.user.major}</p>
                    </Show>

                    <Show condition={!props.editUserInfo.flipMajor}>
                        <form className='changeData' onSubmit={(e) => handleSubmitFun(e, 'Major')}>

                            <input
                                type="text"
                                name="major"
                                onChange={(e) => props.updateData(e)}
                                placeholder={props.userInfo.user.major}
                                className="form-control"
                                defaultValue={props.userInfo.user.major}
                            ></input>
                            <button>Save</button>

                        </form>
                    </Show>

                </div>

                <div className='hiii'>
                    <div className="avatar-upload">
                        <div className="avatar-edit">
                            <input type='text' id="university" onClick={() => changeToForm('University')} />
                            <label htmlFor="university"></label>
                        </div>
                    </div>
                    <Show condition={props.editUserInfo.flipUniversity}>
                        <p className="university infoSec">University: {props.userInfo.user.university}</p>
                    </Show>
                    <Show condition={!props.editUserInfo.flipUniversity}>
                        <form className='changeData' onSubmit={(e) => handleSubmitFun(e, 'University')}>
                            <input
                                type="text"
                                name="university"
                                onChange={(e) => props.updateData(e)}
                                defaultValue={props.userInfo.user.university}
                                className="form-control"
                            />
                            <button>Save</button>
                        </form>
                    </Show>
                </div>


                <div className='hiii'>
                    <div className="avatar-upload">
                        <div className="avatar-edit">
                            <input type='password' id="password" onClick={() => changeToForm('Password')} />
                            <label htmlFor="password"></label>

                        </div>

                    </div>
                    <Show condition={props.editUserInfo.flipPassword}>

                        <p className="majorr infoSec">Change password</p>

                    </Show>

                    <Show condition={!props.editUserInfo.flipPassword}>
                        <form className='changeData' onSubmit={(e) => handleSubmitFun(e, 'Password')}>

                            <input
                                type="password"
                                name="password"
                                placeholder="New Password"
                                id="passInput"
                                onChange={(e) => props.updateData(e)}
                                className="form-control"
                                value={props.editUserInfo.password}
                            />
                            <p className="showPass"><input className="checkB" type="checkbox" onClick={togglePass}></input><span className="spanChe">Show Password <button id="saveId">Save</button></span> </p>


                        </form>
                    </Show>
                </div>


                <p className="joined infoSec"> Member since: {props.userInfo.user.createdTime?props.userInfo.user.createdTime.slice(0,10):null}</p>

            </div>

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