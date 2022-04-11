import Comp1 from "./comp1";
import Comp2 from "./comp2";
import Comp3 from "./comp3";
import Comp4 from "./comp4";
import Comp5 from "./comp5";
import Comp6 from "./comp6";
import Comp7 from "./comp7";
import "./style.css";

export default function About() {
    return(
        <div className="about-container">
            <div className="container">
                <Comp1/>
                <Comp2/>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="blank_divider" style={{"height": "120px"}}></div>
                    </div>
                </div>
                <Comp3/>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="blank_divider" style={{"height": "220px"}}></div>
                    </div>
                </div>
                <Comp4/>
                <Comp5/>
                <Comp6/>
                <Comp7/>
            </div>
        </div>
    )
}