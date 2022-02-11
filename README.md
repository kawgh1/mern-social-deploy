-   # MERN Stack Social Media App w/ Socket.io
-   This is the deployment repo
-   Live site - https://mern-social-media-react.herokuapp.com/

    -   ## login note

        -   **I have hardcoded User "John" as the default user instead of null, so that visitors are not immediately hit with a login screen**
        -   **The files where this was implemented (hardcoded):**
            -   **client/src/context/AuthContext.js**

    -   ## mobile css note

        -   on mobile I was getting a scrolling bounce of the viewport, when the address bar disappears on mobile
        -   so I added this to client/src/index.css
            @media screen and (max-width: 430px) {
            html {
            overflow: hidden;
            width: 100%;
            }
            body {
            height: 100%;
            /_ prevent overscroll bounce on mobile _/
            position: fixed;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            }
            }

    -   ## api
        -   #### Node Express server connected to MongoDB Cloud database
        -   running on localhost:8800
        -   initial [repo](https://github.com/kawgh1/mern-social-media-rest-api)
    -   ## client
        -   #### React front end, responsive, styled
        -   running on localhost:4000
        -   initial [repo](https://github.com/kawgh1/mern-social-media-react)
    -   ## socket
        -   #### Socket.io server to manage real-time client chat application
        -   running on localhost:8900
