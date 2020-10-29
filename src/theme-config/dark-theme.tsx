import { createMuiTheme, makeStyles } from '@material-ui/core';
import { green as blue, red } from '@material-ui/core/colors';

const darkTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#003d6d",
            dark: "#001841",
            light: "#41679c"
        },
        secondary: {
            main: "#6ec9f7",
            dark: "#3298c4",
            light: "#a4fcff"
        },

        text: {
            primary: "#6ec9f7",
            secondary: "#003d6d"
        },
    }
});


export const defaultStyles = makeStyles({
    default: {
        backgroundColor: "#001b33",
        color: "#3298c4",
        padding: "0",
        height: "100vh",
        width: "100vw",
        margin: 0,
    },
    "bottom-section": {
        height: "5%",
        backgroundColor: "red",
        width: "100%"
    },
    "middle-section": {
        height: "90%",
        width: "100%",
        overflow: "auto"

    },
    "top-section": {
        height: "5%",
        backgroundColor: "white",
        width: "100%",

    },
    "right-section": {
        widht: "25%"
    }
})



export default darkTheme;