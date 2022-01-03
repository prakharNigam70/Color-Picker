import { colorBoxStyles } from "./styles/ColorBox";
import {CopyToClipboard} from "react-copy-to-clipboard";

interface IProps{
    background : string,
    name : string
}

export default function ColorBox(props : IProps){
    const styles = colorBoxStyles();
    const {background, name} = props;
    return(
        <CopyToClipboard text={background}>
            <div style={{background}} className={styles.ColorBox}>
                <div className="CopyContainer">
                    <div className={styles.BoxContent}>
                        <span>{name}</span>
                    </div>
                    <button className={styles.CopyButton}>Copy</button>
                </div>
                <span className={styles.SeeMore}>More</span>
            </div>
        </CopyToClipboard>
    )
}
