// /* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../../store/putUserInfo'

// const UserForm = props => {
//     const handleSubmitFun = event => {
//         event.preventDefault();
//         props.putInfoUser(
//             props.sign.token,
//             props.sign.user.id,
//             props.userInfo.username,
//             props.userInfo.password,
//             props.userInfo.email,
//             props.userInfo.role,
//             props.userInfo.name,
//             props.userInfo.major,
//             props.userInfo.university,
//             props.userInfo.favRooms,
//             props.userInfo.profileIMG
//         );
//     }

//     return (
//         <>
//         {console.log('props.userInfo.username---',props.userInfo.username)}
//             <div className="signupF">
//                 <form onSubmit={(e) => handleSubmitFun(e)}>
//                     <h3>Update</h3>

//                     <div>
//                         <label>Username</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Username"
//                             name="username"
//                             onChange={(e) => props.updateData(e)}
//                         />
//                     </div>

//                     <div>
//                         <label>Email address</label>
//                         <input
//                             type="email"
//                             className="form-control"
//                             placeholder="Email"
//                             name="email"
//                             onChange={(e) => props.updateData(e)}
//                         />
//                     </div>

//                     <div>
//                         <label>Password</label>
//                         <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Password"
//                             name="password"
//                             onChange={(e) => props.updateData(e)}
//                         />
//                     </div>

//                     <div>
//                         <label>Role</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Role"
//                             name="role"
//                             onChange={(e) => props.updateData(e)}
//                         />
//                     </div>
//                     <div>
//                         <label>Name</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Name"
//                             name="name"
//                             onChange={(e) => props.updateData(e)}
//                         />
//                     </div>
//                     <div>
//                         <label>Major</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Major"
//                             name="major"
//                             onChange={(e) => props.updateData(e)}
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-primary btn-block">Submit</button>
//                 </form>
//             </div>
//         </>
//     )

// }

// const mapStateToProps = state => ({
//     sign: state.sign,
//     userInfo: state.editUserInfo,
// });

// const mapDispatchToProps = (dispatch, getState) => ({
//     updateData: (event) => dispatch(actions.updateData(event)),
//     putInfoUser: (token, id, username, password, email, role, name, major, university, favRooms, profileIMG) =>
//         dispatch(actions.putInfoUser(token, id, username, password, email, role, name, major, university, favRooms, profileIMG)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(UserForm);