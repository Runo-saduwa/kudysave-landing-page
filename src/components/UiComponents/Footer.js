import React, {Fragment} from 'react';
import './Footer.css';

 const Footer =  (props) => {
    return (
        <Fragment>
            <footer className="mt-4">
                <div className="container p-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-8">
                            <h4>KudySave</h4>
                        </div>
                        <div className="col-sm-12 col-md-2 col-lg-2">
                            <h5>Resources</h5>
                        </div>
                        <div className="col-sm-12 col-md-2 col-lg-2">
                            <h5>Connect</h5>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}


export default Footer;
