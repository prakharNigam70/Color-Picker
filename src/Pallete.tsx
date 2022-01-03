import ColorBox from "./ColorBox"
import { palleteStyles } from "./styles/Pallete";

interface IColor{
    name: string,
    color: string
}

interface IProps{
    paletteName: string,
    id : string,
    emoji : string,
    colors : IColor[]
}

export default function Pallete(props : IProps){
    const styles = palleteStyles();

    const {paletteName,colors} = props
    const colorBoxes = colors.map(color => <ColorBox background={color.color} name={color.name}/> )
    return(
        <div className={styles.Pallete}>
            {/* <h1>{paletteName}</h1> */}
            {/* Navbar here */}
            <div className={styles.PalleteColors}>
                {colorBoxes}
                {/* <ColorBox background="red" name="Red"/> */}
            </div>
            {/* footer */}
        </div>
    )
}