import Comp1 from "./comp1";
import Comp2 from "./comp2";
import "./style.css";

export default function About() {
    return(
        <div className="about-container">
            <div className="container">
                <Comp1/>
                <Comp2/>
            </div>
        </div>
    )
}