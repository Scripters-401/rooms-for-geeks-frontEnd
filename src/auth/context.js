import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

require('dotenv').config();


// const API = 'https://rooms-for-geeks.herokuapp.com';
const API = 'http://localhost:4000';



export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            login: this.login,
            logout: this.logout,
            signup: this.signup,
            user: {}
        }
    }

    login = async (username, password) => {
console.log(document.cookies);
        try {
            const results = await fetch(`${API}/signin`, {
                method: 'POST',
                mode: 'cors',
                // credentials: 'include',
                // mode: 'same-origin',
                // cache: 'no-cache',
                // mode: 'same-origin',
                redirect: 'follow',
                // credentials: 'include', 
                // withCredentials: true,
                headers: new Headers({
                    'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
                    // 'Content-Type': 'application/json',
                    // 'Accept': 'application/json'
                }),
                // credentials: 'same-origin',
                // body: JSON.stringify({}),
                // credentials: 'include',
            });

            let res = await results.json();

            this.validateToken(res.token);


        } catch (error) {
            console.error(`ERROR: SIGNIN`);
        }
    }

    signup = async (username, password, email, role, name, major) => {

        try {
            const results = await fetch(`${API}/signup`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, email, role, name, major })
            });

            let res = await results.json();
            this.validateToken(res.token);


        } catch (error) {
            console.error(`ERROR: SIGNUP`);
        }
    }

    logout = () => {
        this.setLoginState(false, null, {});
    }

    validateToken = token => {
        try {
            let user = jwt.verify(token, process.env.REACT_APP_SECRET);
            this.setLoginState(true, token, user);

        } catch (ex) {
            this.logout();
        }
    }

    setLoginState = (loggedIn, token, user) => {
        cookie.save('auth', token);
        this.setState({ token, loggedIn, user });
    }

    componentDidMount() {
        const cookieToken = cookie.load('auth');
        const hi = cookie.load('name');
        console.log(hi,'pppppppppppppppppppppppppppppppp');
        const token = cookieToken || null;
        this.validateToken(token);
    }

    render() {
        return (
            <LoginContext.Provider value={this.state}>
                {this.props.children}
            </LoginContext.Provider>
        )
    }
}

export default LoginProvider;

