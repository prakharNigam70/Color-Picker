import { createTheme, Slider, ThemeProvider } from "@material-ui/core";
import { Dispatch, SetStateAction } from "react";
import { NavStyles } from "./styles/Navbar";



interface IProps{
    level : {
        level : number,
        setLevel : Dispatch<SetStateAction<number>>
    }
}

const theme = createTheme({
    overrides: {
      MuiSlider: {
        root : {
            width : '600px'
        },
        rail: {
          height: '8px',
          backgroundColor : 'rgba(0,0,0,0.3)',
          borderRadius : '8px'
        },
        thumb:{
            width : '20px',
            height : '20px',
        }
      },
    },
  });

export default function Navbar(props : IProps){
    const {level, setLevel} = props.level;
    const styles = NavStyles();

    return(
        <div className={styles.Navbar}>
            <div className={styles.Logo}>React Color Picker</div>
            <span>Level : {level}</span>
            <div className={styles.SliderContainer}>
                <ThemeProvider theme={theme}>
                    <Slider
                        className={styles.Slider}
                        track={false}
                        aria-label="Color Darkness"
                        color="primary"
                        defaultValue={level} valueLabelDisplay="auto"
                        step={100} marks={false} min={100} max={900} 
                        onChange={(event : React.ChangeEvent<{}>, value : number | number[]) => setLevel(value as number)}
                    />
                </ThemeProvider>
            </div>
        </div>
    )
}