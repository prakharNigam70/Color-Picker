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
    }
})