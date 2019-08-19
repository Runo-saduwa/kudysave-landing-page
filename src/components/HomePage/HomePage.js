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
									<button className="btn btn-success text-center">create account</button>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-12 phone-section d-flex justify-content-center">
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
		</React.Fragment>
	);
};

export default HomePage;
