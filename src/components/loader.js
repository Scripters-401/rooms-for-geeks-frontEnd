/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../../store/userReducer';

import './loader.scss'

const Loader = props => {

  return (


    <>
      <div className={`loaderDiv-${props.sign.loaderState}`}>


        {/* <div className="Box">
          <span>
            <span></span>
          </span>
        </div> */}
        <div id="loader">
          <div id="top"></div>
          <div id="bottom"></div>
          <div id="line"></div>
        </div>

      </div>

    </>


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

export default connect(mapStateToProps, mapDispatchToProps)(Loader);