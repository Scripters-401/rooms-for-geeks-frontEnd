/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../../store/userReducer';
import Swal from 'sweetalert2'

import './loader.scss'

const Not = props => {

    useEffect(() => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
    }, [])

    return(
        <span></span>
    )


}


const mapStateToProps = (state) => {
  return {
    sign: state.sign,
  };
};

const mapDispatchToProps = (dispatch, getState) => ({
  // getInfoUser: (token, id) => dispatch(actions.getInfoUser(token, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Not);

