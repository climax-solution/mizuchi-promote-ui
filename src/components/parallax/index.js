import { Parallax } from "react-scroll-parallax";
import "./style.css";

const parallax = [
    {
        'class': "layer-floor",
        'effect' : {
            scaleY: [1, -1]
        }
    },
    {
        'class': "layer-4",
        'effect' : {
            translateY: ["0px","480px"]
        }
    },
    {
        'class': "layer-3",
        'effect' : {
            translateY: ["0px","202px"]
        }
    },
    {
        'class': "layer-2",
        'effect' : {
            translateY: ["0px","-125px"]
        }
    },
    {
        'class': "layer-1",
        'effect' : {
            translateY: ["0px","-480px"]
        }
    },
    {
        'class': "layer-0",
        'effect' : {
            translateY: ["0px","-940px"]
        }
    },
];

export default function SliderParallax() {
    return (
        <div className="parallax-container">
            {
                parallax.map((item, idx) => (
                    <Parallax
                        className={`parallax ${item.class}`}
                        key={idx}
                        {...item.effect}
                        startScroll={0}
                        endScroll={900}
                        speed={5}
                    />
                ))
            }
        </div>
    )
}