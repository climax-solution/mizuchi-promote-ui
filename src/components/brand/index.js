import brandLogo from "./img/brand.png";
import "./style.css";

export default function Brand() {
    return (
        <div
            className="brand-container"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="2000"
        >
            <div className="logo">
                <img src={brandLogo} alt=""/>
            </div>
            <h3 className="brand-title text-center">
                XRP: The Best Digital Asset for
                <span className="d-block">Global Payments</span>
            </h3>
            <p className="brand-content text-center">XRP offers financial institutions the fastest, most reliable option for <span className="d-block">sourcing liquidity on demand.</span></p>
            <a className="btn btn-primary btn-brand">Learn About On-Demand Liquidity</a>
        </div>
    )
}