import { makeStyles } from "@material-ui/core";


export const colorBoxStyles = makeStyles({
    ColorBox:{
        width : "20%",
        height : "25%",
        display : "inline-block",
        position : "relative",
        cursor : "pointer",
        textTransform : "uppercase",
        '&:hover':{
            '& $CopyButton':{
                opacity : "1",
                transition : "0.5s"
            }
        },
        marginBottom : "-.4rem"
    },

    CopyButton:{
        width:"100px",
        height: "30px",
        background : "rgba(255,255,255,0.3)",
        position :"absolute",
        top : "50%",
        left : "50%",
        marginLeft : "-50px",
        marginTop : "-15px",
        color : "white",
        outline : "none",
        border : "none",
        fontSize : "1rem",
        lineHeight : "30px",
        opacity : "0",
        textAlign : "center"
    },

    BoxContent:{
        position : "absolute",
        width : "100%",
        left : "0",
        bottom : "0",
        fontSize : ".8rem",
        letterSpacing : "1px",
        color : "black",
        padding : ".3rem"
    },

    SeeMore:{
        position : "absolute",
        bottom : "0",
        right : "0",
        padding : ".3rem",
        fontSize : ".8rem",
        color : "white",
        background : "rgba(255,255,255,.3)",
        textAlign : "center"
    },

    CopyOverlay : {
        opacity : 0,
        zIndex : 0,
        height : "100%",
        width : "100%",
        transform : "scale(0.1)"
    },

    CopyOverlayShow : {
        opacity : 1,
        zIndex  : 10,
        transform : "scale(50)",
        position : "absolute",
        transition : "transform 0.6s ease-in-out"
    },

    CopyMsg : {
        position : "fixed",
        top : 0,
        bottom : 0,
        right : 0,
        left : 0,
        display: "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        opacity : 0,
        fontSize : "3rem",
        transform : "scale(0.1)"
    },

    CopyMsgShow : {
        opacity : 1,
        zIndex : 20,
        transform : "scale(1)",
        transition : "all .4s ease-in",
        transitionDelay : "0.3s",
        color : "white"
    },

    CopyMsgh1:{
        fontWeight : 400,
        background : "rgba(255,255,255,.2)",
        width : "100%",
        textShadow : "1px 2px black",
        textAlign : "center",
        marginBottom : 0,
        padding : ".2rem"
    },

    CopyMsgp : {
        fontSize : "1rem",
        fontWeight : 100
    }
})