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
    user: JSON.parse(localStorage.getItem("user")) || {
        _id: "6139b4da7ff1b5eea981efdb",
        username: "john",
        email: "john@gmail.com",
        profilePicture: "john.png",
        coverPicture: "john-cover.png",
        followers: [
            "6139a63404b7c5ffaeba3212",
            "6147c5de0f4d8b6fa182fbbf",
            "6147c5d10f4d8b6fa182fbbd",
            "6147c5bc0f4d8b6fa182fbbb",
            "6147c5890f4d8b6fa182fbb7",
        ],
        following: [
            "6139a63404b7c5ffaeba3212",
            "6147c55d0f4d8b6fa182fbb5",
            "6147c5de0f4d8b6fa182fbbf",
            "6147c5a90f4d8b6fa182fbb9",
        ],
        isAdmin: false,
        createdAt: "2021-09-09T07:16:42.212Z",
        updatedAt: "2021-10-12T19:16:47.154Z",
        __v: 0,
        city: "New York",
        desc: "Hello friends!",
        from: "Chicago",
        relationship: 1,
    },
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
