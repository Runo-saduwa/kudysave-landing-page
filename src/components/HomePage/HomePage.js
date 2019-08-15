import React from 'react';
import './HomePage.css';
import { ReactComponent as PhoneSvg } from '../../img/mobilepath.svg';

const HomePage = (props) => {
	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-sm-12">
						<h1 className="display-4 intro-text">Fast & Reliable Food & Money Savings Platform For Africa</h1>
						<p class="lead sub-intro-text">Kudysave is the best platform for savings For food and for the future</p>
                        <div className="d-flex justify-content-center">
                        <button className="btn btn-success text-center">create account</button>
                        </div>
					</div>
					<div className="col-md-4 col-sm-12 phone-section d-flex justify-content-center">
						<PhoneSvg />
					</div>
				</div>
			</div>
		</header>
	);
};

export default HomePage;
