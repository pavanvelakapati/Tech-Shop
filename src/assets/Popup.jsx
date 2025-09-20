import React from 'react';

const Popup = () => {
    return (
        <div
            className="modal fade"
            id="loginModal"
            tabIndex="-1"
            aria-labelledby="loginModalLabel"
            aria-hidden="true"

        >
            <div className="modal-dialog text-light" style={{ backgroundColor: "#010b10ff" }}>
                <div className="modal-content text-light" style={{ backgroundColor: "#010b10ff" }}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="loginModalLabel">Login</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body text-light" style={{ backgroundColor: "#010b10ff" }}>
                        <form >
                            <div className="mb-3" >
                                <label htmlFor="emailInput" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="emailInput" style={{ backgroundColor: "#010b10ff" }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label">Password</label>
                                <input type="password" className="form-control" id="passwordInput" style={{ backgroundColor: "#010b10ff" }} />
                            </div>
                            <div className='text-light d-flex justify-content-center '>
                                <button type="submit" className="btn btn-danger ">Login</button>
                            </div>
                        </form>
                        <div className="d-flex align-items-center my-3">
                            <div className="flex-grow-1 border-top"></div>
                            <span className="mx-2 text-light">or login with</span>
                            <div className="flex-grow-1 border-top"></div>
                        </div>
                        <div className="d-flex justify-content-center overflow-auto gap-4 " >
                            <button className="btn btn-primary ">Facebook</button>
                            <button className="btn btn-danger ">Google</button>
                            <button className="btn btn-info ">Twiter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;