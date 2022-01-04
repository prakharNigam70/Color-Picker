import { colorBoxStyles } from "./styles/ColorBox";
import {CopyToClipboard} from "react-copy-to-clipboard";
import { useEffect, useLayoutEffect, useState } from "react";

interface IProps{
    background : string,
    name : string
}

interface IState{
    copied : boolean
}

export default function ColorBox(props : IProps){
    const styles = colorBoxStyles();
    const {background, name} = props;
    const [copied, setCopied] = useState<IState>();

    useLayoutEffect( ()=>{
        setTimeout(()=>{
            setCopied({copied : false});
        } , 1500)
    } , [copied?.copied])

    return(
        <CopyToClipboard text={background} onCopy={()=> setCopied({copied : true})}>
            <div style={{background}} className={styles.ColorBox}>
                <div style={{background}} className={`${styles.CopyOverlay} ${copied?.copied?styles.CopyOverlayShow:''}`}/>
                <div className={`${styles.CopyMsg} ${copied?.copied?styles.CopyMsgShow:''}`}>
                    <h1 className={styles.CopyMsgh1}>copied!</h1>
                    <p className={styles.CopyMsgp}>{background}</p>
                </div>
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
