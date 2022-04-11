export default function Comp3() {
    return (
        <div
            className="comp"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="3000"
        >
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-1 hidden-sm"></div>
                <div className="col-sm-5">
                    <h1>RippleNet</h1>
                    <p className="body-copy">RippleNet customers can use XRP for sourcing liquidity in cross-border transactions, instead of pre-funding—ensuring instant settlement, lower exchange fees and more efficient use of working capital.</p>
                    <button className="btn btn-primary">Leran About RippleNet</button>
                </div>
                <div className="col-sm-6">
                    <div className="ripplenet-wrapper">
                        <div className="ripple-net"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}