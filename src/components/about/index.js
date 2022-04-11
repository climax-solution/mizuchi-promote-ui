import Comp1 from "./comp1";
import Comp2 from "./comp2";
import Comp3 from "./comp3";
import "./style.css";

export default function About() {
    return(
        <div className="about-container">
            <div className="container">
                <Comp1/>
                <Comp2/>
                <Comp3/>
            </div>
        </div>
    )
}