import React from 'react'

const Support = () => {
    return (
        <div>
            <div className="row no-gutters justify-content-center">
                <div className="col-10 col-md-6">
                    <div>
                        <p className="custom-title">Raise Query</p>
                    </div>
                    <div className="form-group">
                        <form id="complainForm" method="post">
                            <select name="complainSubject" className="form-control">
                                <option value="none" selected="" hidden="">Select Subject</option>
                                <option value="buyChips">Problem In Buy Chips.</option>
                                <option value="challenge">Wrong Challenge Result.</option>
                            </select><br />
                            <input type="number" name="whatsappNumber" placeholder="Your Whatsapp Number" minlength="10" maxlength="10" className="form-control" required="" /><br />
                            <div className="hidden" id="buyChipsBox">
                                <input type="number" name="senderNumber" placeholder="Your Paytm Number" minlength="10" maxlength="10" className="form-control" /><br />
                                <input type="number" name="receiverNumber" placeholder="Receiver Paytm Number" minlength="10" maxlength="10" className="form-control" /><br />
                                <input type="text" name="txnId" placeholder="Txn ID" minlength="5" maxlength="30" className="form-control" /><br />
                                <input type="number" name="amount" placeholder="Amount" max="100000" className="form-control" /><br />
                            </div>
                            <div className="hidden" id="challengeBox">
                                <select name="challengeId" className="form-control">
                                    <option value="none" selected="" hidden="">Select Challenge</option>

                                </select><br />
                            </div>
                            <textarea name="message" placeholder="Define Your Problem" className="form-control" rows="4" minlength="10" maxlength="200" required=""></textarea><br />
                            <div className="hidden form-group custom-file">
                                <input id="screenShot" type="file" className="custom-file-input" accept=".png, .jpg, .jpeg" /><br />
                                <label id="screenShotLabel" className="custom-file-label">Upload Screenshot</label><br />
                            </div>
                            <span className="waves-input-wrapper waves-effect waves-light"><input type="submit" value="Raise Ticket" className="btn btn-success" /></span>
                            <div id="screenShot-upload" className="display: none;">
                                <img className="img-fluid" alt="Responsive image" /><br />
                            </div>
                        </form>
                    </div>
                    <div id="postResponse" className="mssg bg-danger">
                        <span id="check"></span>
                    </div>
                    <a href="/supporthistory">Click Here To Check Solved Queries!</a>
                    <hr />
                    <ul id="challenge-list" className="list-group">

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Support
