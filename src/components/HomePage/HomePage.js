import React from 'react';
import './HomePage.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import FirstAbout from '../InfoSections/FirstAbout';
import SecondAbout from '../InfoSections/SecondAbout';
import { ReactComponent as PhoneSvg } from '../../img/mobilepath.svg';

const HomePage = (props) => {
	return (
		<React.Fragment>
			<header className="header">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-sm-12 intro-block-parent">
							<div className="intro-block">
								<h1 className="display-4 intro-text">
									Fast & Reliable Food & Money Savings Platform For Africa
								</h1>
								<p class="lead sub-intro-text">
									Kudysave is the best platform for savings For food and for the future
								</p>
								<div className="button-block">
									<button className="custom-btn text-center">create account</button>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-12 phone-section d-flex justify-content-center mb-5">
							<PhoneSvg />
						</div>
					</div>
				</div>
			</header>
			<SectionHeader
				title="Nothing Is Too Small To Save For Shelter"
				subtitle="Save and get upto 95% worth of food items you can’t get anywhere"
				bgClass="bgClass"
				headerMargin="header-margin"
			/>
			<FirstAbout />
			<SectionHeader
				title="Save In Fragments & Grow"
				subtitle="The moment you become a member, you start getting reasonable  beneﬁts as your money grow in value.
"
				bgClass="bgClass"
			/>
			<SecondAbout />
			<div className="register-section container">
                  <div className="row">
					  <div className="col-sm-12 col-md-6">
						  <h1>
						  Ready To Get Started?
						  </h1>
						  <p className="lead">
						  Kudysave gives additional bonus to every users on a monthly basis if you save above  The expected monthly limits.
						  </p>
					  </div>
					  <div className="col-sm-12 col-md-6">
					  <div className="register-btn">
					  <button className="custom-btn text-center">create account</button>
					  </div>
					  </div>
				  </div>
			</div>
		</React.Fragment>
	);
};

export default HomePage;
