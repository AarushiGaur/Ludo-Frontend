import React from 'react'

const SellChips = () => {
    return (
        <div>
            <div className="row no-gutters justify-content-center">
            <div className="col-10 col-md-6">
                <div>
                    <p className="custom-title">Sell Chips<br/><span className="text-info">(1Chip = 1Rupee)</span></p>
                    <p className="text-primary">(Processing Timing: 06:00 PM)</p>
                    {/* <div style="padding: 5px; border: 2px dotted; border-radius: 10px;"> */}
                        <div>
                        <p className="text-info blink" >Only <span className="text-dark"><b>2 request</b></span> allowed per day.</p>
                        <p className="text-info blink" >एक दिन में सिर्फ <span className="text-dark"><b>2 रिकवेस्ट</b></span> ही ली जाएगी |</p>
                    </div><br/>
                    {/* <div style="display: flex; justify-content: center;"> */}
                        <div>
                        {/* <!-- display: flex;  justify-content: center; align-items: center; --> */}
                        {/* <div style="padding: 5px 10px; border: 2px dotted; border-radius: 10px; margin-right: 10px;"> */}
                            <div>
                            <span className="text-info">Unused Chips:</span><br/>
                            <span className="text-success" >0</span>
                        </div>
                        {/* <div style="padding: 5px 10px; border: 2px dotted; border-radius: 10px;"> */}
                            <div>
                            <span className="text-info" >Winning Chips:</span><br/>
                            <span className="text-success">0.00</span>
                        </div>
                    </div>
                    <p>Unused Chips cannot be sold, Play and convert to Winning Chips</p>
                    {/* <!-- <p className="text-danger">(PhonePe / Google Pay / UPI ID) will be removed soon.</p> --> */}
                </div><br/>
                <div className="form-group">
                    <form id="withdrawForm" method="post">
                        <select name="paymentMethod" className="form-control" id="paymentMethod">
                            {/* <option value="Paytm" selected="">Paytm</option>
                            <!-- <option value="Google Pay">Google Pay(2% Charges)</option>
                            <option value="PhonePe">PhonePe(2% Charges)</option>
                            <option value="UPI ID">UPI ID(2% Charges)</option> --> */}
                        </select><br/>
                        <input type="number" name="paymentNumber" placeholder="Paytm Number" required="" className="form-control"/><br/>
                        <input type="number" name="paymentAmount" placeholder="Chips Amount" required="" className="form-control"/><br/>
                        <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="agreeCheckBox" required=""/>
                            <label className="custom-control-label" for="agreeCheckBox">I Agree that I am 18 years or older and not a resident of Tamil Nadu, Andhra Pradesh, Telangana, Assam, Orissa, Kerala, Sikkim, Nagaland or Gujarat.</label>
                        </div>
                        {/* <!-- <label className="hidden" id="upiAmount">You will receive: <span className="text-danger"></span></label> --> */}
                        <span className="waves-input-wrapper waves-effect waves-light"><input type="submit" value="Sell" className="btn btn-success"/></span>
                    </form>
                </div>
                <div id="postResponse" className="mssg bg-danger">
                    <span id="check"></span>
                </div>
                <hr/>
                <ul id="challenge-list" className="list-group">
                    
                </ul>
                {/* <!-- <b><i>(If Urgent Withdrawal)</i></b> = <a href="https://wa.me/919407144049?text=I+Have+Set+A+Withdrawal+Request,+Please+Process+it." target="_blank">Click Here.</a> --> */}
            </div>
        </div>
        </div>
    )
}

export default SellChips
