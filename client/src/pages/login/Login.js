import { useContext, useRef } from "react";
import "./Login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const history = useHistory();
    // public folder for photos
    const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    // context from login
    const { isFetching, dispatch } = useContext(AuthContext);

    // login form submit
    const handleClick = (event) => {
        event.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
        try {
            history.push("/");
        } catch (err) {
            console.log(err);
        }
    };

    //	console.log(user);

    return (
        <div
            className="login"
            style={{
                backgroundImage: `url(${
                    PublicFolder + "profile-colors7.webp"
                })`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center fixed",
                backgroundSize: "cover",
            }}
        >
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h1 className="loginLogo">reactsocial</h1>
                    <span className="loginDesc">
                        Connect with friends around the world!
                    </span>
                    <span
                        className="loginDesc"
                        style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            letterSpacing: "1px",
                            color: "white",
                            textShadow:
                                "0 0 1px #e2e2e2, 2px 2px 4px #e2e2e2, -2px -2px 8px #2e8b57",
                        }}
                    >
                        For demo purposes user can log in with username
                        "john@gmail.com" and password "123456"
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                            placeholder="Email"
                            className="loginInput"
                            type="email"
                            required
                            ref={email}
                        />
                        <input
                            placeholder="Password"
                            className="loginInput"
                            type="password"
                            required
                            minLength="6"
                            ref={password}
                        />

                        <button
                            className="loginButton"
                            disabled={isFetching}
                            type="submit"
                            onClick={handleClick}
                        >
                            {isFetching ? (
                                <CircularProgress color="white" size="25px" />
                            ) : (
                                "Log In"
                            )}
                        </button>

                        <Link
                            to="/register"
                            className="loginRegisterButtonLink"
                        >
                            <button className="loginRegisterButton">
                                <img
                                    src={PublicFolder + "logo512.png"}
                                    alt="react"
                                    className="logo-img"
                                    style={{
                                        marginRight: "5px",
                                    }}
                                />
                                Sign Up
                            </button>
                        </Link>
                    </form>
                    <span className="loginForgot">Forgot Password?</span>
                </div>
            </div>
        </div>
    );
}
