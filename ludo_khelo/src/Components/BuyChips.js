import React from 'react'

const BuyChips = () => {
    return (
        <div>
            <div className="row no-gutters justify-content-center">
                <div className="col-10 col-md-4">
                    <div>
                        <p className="custom-title">Buy Chips<br /><span className="text-info">(1Rupee = 1Chip)</span></p>
                        <p>Pay via Paytm Wallet Only</p>
                        <p className="text-danger">Don't pay through Bank (You will lose your money).</p>
                        <p>Please pay at this number only <span><b>7571896225</b></span>, and enter wallet Transcation Id.<br />
                            <a href="/help/loadbalance">Help</a></p>
                    </div>

                    <div className="form-group">

                        <form id="loadBalance" method="post">
                            <div className="input-group mb-3">
                                <input id="paymentNumber" type="number" className="form-control" name="paymentNumber" placeholder="Enter Receiver Paytm Number..." readonly="" value="7571896225" />
                                <div className="input-group-append">
                                    <button id="copyButton" className="btn btn-outline-secondary waves-effect waves-light" type="button">Copy</button>
                                </div>
                            </div>
                            <div id="yourPaytmNumber" className="input-group mb-3">
                                <input type="number" placeholder="Enter Your Paytm Number..." className="form-control" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="number" id="txnId" name="txnId" placeholder="Transcation ID" required="" className="form-control" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="number" id="amount" name="amount" placeholder="Amount" required="" className="form-control" step="0.01" />
                            </div>
                            <span className="waves-input-wrapper waves-effect waves-light"><input type="submit" value="Load" className="btn btn-success" /></span>
                        </form>
                        <div id="postResponse" className="mssg bg-danger">
                            <span id="check"></span>
                        </div>
                        Paid at another number? Don't worry just <a href="javascript:$('#paymentNumber').attr('readonly', false).val('');$('#copyButton').fadeOut();$('#yourPaytmNumber').fadeIn();playAudio('manualLoad');">click here.</a>
                        <br /><br />
                        If your <u>Transaction Id</u> is not matching. Don't worry, please <a href="https://wa.me/919424627532?text=My+Transaction+Id+is+not+matching.+My+account+number+is+7357525272" onclick="playAudio('supportAudio');" target="_blank">click here</a> to contact admin or whatsapp your complaint at (+919424627532). Your query will be solved in within 12 hours.
                    </div>

                    <br />
                    {/* <!-- <div className="card">
                    <div className="card-body">
                        <h3 style="text-align: center;">For Any Query</h3>
                        <p style="text-align: center;">Please contact support at whatsapp (+919424627532)<br>Your query will be solved in <b>within 12 hours</b>.</p>
                        <a href="https://wa.me/919424627532?text=Please+Load+Chips+In+My+Account,+My+account+number+is+7357525272" onclick="playAudio('supportAudio');" target="_blank">Click here to contact Admin</a>
                    </div>
                </div> --> */}
                </div>
            </div>
        </div>
    )
}

export default BuyChips
