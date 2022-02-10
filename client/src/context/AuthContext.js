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
    user: JSON.parse(localStorage.getItem("user")) || "john",
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
