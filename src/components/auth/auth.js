import React from 'react';
import { connect } from 'react-redux';
import Show from './show.js';
import cookie from 'react-cookies';


const Auth = props => {
    let okToRender = false;
    let roles = {
        user: ['read', 'master-QA'],
        developer: ['read', 'master-QA', 'read-API'],
        admin: ['read', 'master-QA', 'master-room'],
        sudo: ['read', 'master-QA', 'read-API', 'master-room', 'API-sudo'],
    };
    try {
        okToRender = props.sign.loggedIn && (
            props.capability ?
                roles[props.sign.user.role].includes(props.capability)
                : true
        )
    } catch (e) {
        console.warn('Not Authorized!');
        cookie.remove('auth');
        props.sign.loggedIn = false;
    }

    return (
        <Show condition={okToRender}>
            {props.children}
        </Show>
    )
}

const mapStateToProps = state => ({
    sign: state.sign
});

export default connect(mapStateToProps)(Auth);
