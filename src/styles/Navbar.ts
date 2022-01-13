import { makeStyles } from "@material-ui/core";


export const NavStyles = makeStyles({
    Navbar : {
        display : "flex",
        alignItems : "center",
        justifyContent : "flex-start",
        height : "6vh"
    },
    Logo :{
        background : "#eceff1",
        display : "flex",
        alignItems : "center",
        padding : "0 15px",
        marginRight : "20px",
        height : "100%",
        fontWeight : 500,
        fontSize : "1.2rem"
    },
    Slider : {
        borderRadius : "5px",
        color : "green",
    },
    SliderContainer : {
        background : "white",
        padding : '8px 25px'
    }
    
})