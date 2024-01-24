import React from "react";

function Contact(props) {
    return (
        <div className="container" style={{marginTop: '6rem', marginBottom:'1.5rem'}}>
            <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className={`form-label text-${props.textColor}`}>First name</label>
                    <input type="text" className="form-control" id="validationCustom01" defaultValue="Mark" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className={`form-label text-${props.textColor}`}>Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" defaultValue="Otto" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className={`form-label text-${props.textColor}`}>Username</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                        <div className={`invalid-feedback text-${props.textColor}`}>
                            Please choose a username. 
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className={`form-label text-${props.textColor}`}>City</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                    <div className={`invalid-feedback text-${props.textColor}`}>
                        Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom04" className={`form-label text-${props.textColor}`}>State</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option disabled defaultValue="">Choose...</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="UP">UP</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Banglor">Banglor</option>
                        <option value="Delhi">Delhi</option> 
                    </select>
                    <div className={`invalid-feedback text-${props.textColor}`}>
                        Please select a valid state.
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className={`form-label text-${props.textColor}`}>Zip</label>
                    <input type="text" className="form-control" id="validationCustom05" required />
                    <div className={`invalid-feedback text-${props.textColor}`}>
                        Please provide a valid zip.
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label className={`form-check-label text-${props.textColor}`} htmlFor="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div className={`invalid-feedback text-${props.textColor}`}>
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;