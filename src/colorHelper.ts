import chroma from "chroma-js"

interface IColor{
    name: string,
    color: string
}
interface INewColor{
    name: string,
    id : string,
    hex : string,
    rgb: string,
    rgba : string
}

interface IStarterPallete{
    paletteName: string,
    id : string,
    emoji : string,
    colors : IColor[]
}

interface INewPallete{
    paletteName: string,
    id : string,
    emoji : string,
    colors : {
        [key : number] : INewColor[]
    }
}


const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export const generatePallete = (starterPallete : IStarterPallete)  : INewPallete=>{
    let newPallete : INewPallete = {
        paletteName: starterPallete.paletteName,
        id : starterPallete.id,
        emoji : starterPallete.emoji,
        colors : {}
    }

    for(let level of levels){
        newPallete.colors[level] = []
    }

    for(let color of starterPallete.colors){
        const scale = getScale(color.color, 10).reverse()
        for(let i in scale){
            newPallete.colors[levels[i]].push({
                name : `${color.name} ${levels[i]}`,
                id : color.name.toLocaleLowerCase().replace(/ /g, "-"),
                hex : scale[i],
                rgb : chroma(scale[i]).css(),
                rgba : chroma(scale[i]).css().replace("rgba", "rgb").replace(")", ", 1.0)")
            })
        }
    }
    return newPallete;
}

const getRange = (hexColor : string) =>{
    const end = "#fff";
    return [
        chroma(hexColor).darken(1.4).hex(),
        hexColor,
        end
    ]
}

const getScale = (hexColor : string, numOFColors : number) =>{
    return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(numOFColors)
}