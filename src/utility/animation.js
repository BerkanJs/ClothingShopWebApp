import { easeInOut } from "framer-motion"


export const FadeRotate=(delay)=>{
    return {
        hidden:{
            opacity:0,
            x:-100,
            rotate:-180,
        },
        visible:{
            opacity:1,
            x:0,
            rotate:0,
            transition:{
                duration:0.8,
                delay:delay,
                ease:easeInOut
            }
        }
    }
}

export const FadeLeft=(delay)=>{
    return {
        hidden:{
            opacity:0,
            x:-40,
            rotate:0,
        },
        visible:{
            opacity:1,
            x:0,
            rotate:0,
            transition:{
                duration:0.8,
                delay:delay,
                ease:easeInOut
            }
        }
    }
}
export const FadeUp=(delay)=>{
    return {
        hidden:{
            opacity:0,
            y:100,
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:1,
                delay:delay
            }
        }
    }
}

export const FadeRight=(delay)=>{
    return {
        hidden:{
            opacity:0,
            x:-100,
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:1,
                delay:delay
            }
        }
    }
}