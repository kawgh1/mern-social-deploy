import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// PROD
// const INITIAL_STATE = {
// 	user: null,
// 	isFetching: false,
// 	error: false,
// };

// in real life we would set default state user to "null"
// but since this is for display, I dont want visitors to hit a "login screen" - I want them to immediately see the app as a user

// DEV
const INITIAL_STATE = {
    // user: JSON.parse(localStorage.getItem("user")) || null,
    // I am passing the whole "john" user Object here for demonstration purposes, this is stupid and not secure for normal use
    user: JSON.parse(localStorage.getItem("user")) || JSON.parse(process.env.REACT_APP_USER_JOHN),
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
