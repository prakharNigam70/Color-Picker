import { createMuiTheme, createTheme, MuiThemeProvider, Slider, Theme, ThemeProvider } from "@material-ui/core";
import { ChangeEvent, SetStateAction, useState } from "react";
import ColorBox from "./ColorBox"
import { INewColor } from "./colorHelper";
import { palleteStyles } from "./styles/Pallete";
// import type {} from '@material-ui/lab';
import type {} from '@mui/lab/themeAugmentation'
import Navbar from "./Navbar";


interface IColor{
    name: string,
    color: string
}

interface IProps{
    pallete : INewPallete
}

interface INewPallete{
    paletteName: string,
    id : string,
    emoji : string,
    colors : {
        [key : number] : INewColor[]
    }
}


export default function Pallete(props : IProps){
    const styles = palleteStyles();
    const [level, setLevel] = useState(500)


    const {pallete} = props;
    const {paletteName,colors} = pallete;
    const colorBoxes = colors[level].map(color => <ColorBox background={color.hex} name={color.name}/> )
    return(
        <div className={styles.Pallete}>
            {/* Navbar here */}
            <Navbar level={{level, setLevel}}/>
            <div className={styles.PalleteColors}>
                {colorBoxes}
                {/* <ColorBox background="red" name="Red"/> */}
            </div>
            {/* footer */}
        </div>
    )
}

function getMuiTheme(arg0: { slider: { trackColor: string; selectionColor: string; }; }) {
    throw new Error("Function not implemented.");
}
