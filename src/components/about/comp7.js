export default function Comp7() {
    return (
        <>
            <div
                className="text-center"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="3000"
            >
                <h2>XRP Metrics</h2>
                <hr/>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="blank_divider" style={{"height": "40px"}}></div>
                </div>
            </div>
            <div
                className="text-center row"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="3000"
            >
                <div className="col-sm-12">
                    <div className="col-sm-4 col-12">
                        <h1>3.47</h1>
                        <hr/>
                        <p>Settlement Speed (Seconds)</p>
                    </div>
                    <div className="col-sm-4 col-12">
                        <h1>$0.0005844</h1>
                        <hr/>
                        <p>Network Transaction Fee (USD)</p>
                    </div>
                    <div className="col-sm-4 col-12">
                        <h1>1,500</h1>
                        <hr/>
                        <p>Transactions Per Second</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="blank_divider" style={{"height": "90px"}}></div>
                </div>
            </div>
            <div
                className="text-center"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="3000"
            >
                <button className="btn btn-primary">More XRP Market Metrics</button>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="blank_divider" style={{"height": "165px"}}></div>
                </div>
            </div>
        </>
    )
}