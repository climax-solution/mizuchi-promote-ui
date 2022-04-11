export default function Comp5() {
    return (
        <>
            <div
                className="text-center"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000"
            >
                <h2>How Does the XRP Ledger Work?</h2>
                <hr/>
                <p>The ledger is maintained by independent participants of a global “XRP <br/>Community,” of which Ripple is an active member.</p>
                <p>Independent validator nodes come to an agreement on the order and validity <br/>of XRP transactions. This agreement, called consensus, serves as final and <br/>irreversible settlement. The ledger reaches consensus on all outstanding <br/>transactions every 3-5 seconds, at which point a new ledger is issued. Anyone <br/>can be a validator, and active validators on the ledger today include <br/>universities, exchanges and financial institutions. There are currently 36 <br/>validators, and Ripple runs 6 of them—16%.</p>
                <p>Interested in running a validator? Learn how to get started here.</p>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="blank_divider" style={{"height": "115px"}}></div>
                </div>
            </div>
        </>
    )
}