export default function Comp4() {
    return (
        <>
            <div
                className="ripplex"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="3000"
            >
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        <img src="/img/home-ripplex-v3@2x.png" className="ripple-x-logo w-100" alt=""/>
                    </div>
                    <div className="col-sm-1 hidden-sm"></div>
                    <div className="col-sm-4">
                        <h1>RippleX</h1>
                        <p className="body-copy">RippleX is Ripple’s open developer platform for money. Through RippleX projects, developers leverage XRP and its underlying technology in use cases from micropayments, to e-commerce to exchanges and peer-to-peer services.</p>
                        <button className="btn btn-primary">Learn About RippleX</button>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
            <div className="row align-items-center">
                {/* <div className="col-sm-12"> */}
                    <div className="visible-xs-block">
                        <div className="blank_divider" style={{"height": "50px"}}></div>
                    </div>
                    <div className="hidden-xs">
                        <div className="blank_divider" style={{"height": "200px"}}></div>
                    </div>
                {/* </div> */}
            </div>
            <div
                className="text-center"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="3000"
            >
                <p className="body-copy-strong body-copy-large">
                    XRP and the XRP Ledger are open-source technology that<br/> anyone can build on. To get started, learn more at<br/>
                    XRPL.org.
                </p>
                <button className="btn btn-primary">Build with XRPL</button>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="blank_divider" style={{"height": "115px"}}></div>
                </div>
            </div>
        </>
    )
}