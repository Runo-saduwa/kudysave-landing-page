import React from 'react';
import wallet from '../../img/wallet.jpeg';
import phone from '../../img/phone.jpeg';
import foodBasket from '../../img/foodbasket.jpeg';
import Fade from 'react-reveal/Fade';
// import { ReactComponent as PhoneSvg } from '../../img/mobilepath.svg';

const SecondAbout = (props) => {
	return (
		<section className="second-about py-5">
			<div className="row d-flex justify-content-between">
			  <Fade left>
			  <div className="bg col-sm-12 col-md-3 col-lg-3">
					<div className="second-about-height my-3">
						<div>
							<div className="text-center">
								<img className="resize" src={wallet} alt="" />
							</div>
							<h1 className="text-center">Save Money</h1>
							<p>Get ahead of the curve on time by setting a speciﬁc date of withdrawal.</p>
						</div>
					</div>
				</div>
			  </Fade>
				<div className="bg col-sm-12 col-md-3 col-lg-3">
					<div className="second-about-height my-3">
						<div>
                        <div className="text-center">
								<img className="resize" src={phone} alt="" />
							</div>
							<h1 className="text-center">Withdraw Anytime</h1>
							<p>Get ahead of the curve on time by setting a speciﬁc date of withdrawal.</p>
						</div>
					</div>
				</div>
				<Fade right>
				<div className="bg col-sm-12 col-md-3 col-lg-3">
					<div class="second-about-height my-3">
						<div>
                        <div className="text-center">
								<img className="resize" src={foodBasket} alt="" />
							</div>
							<h1 class="text-center">Never run out of food</h1>
							<p>Get ahead of the curve on time by setting a speciﬁc date of withdrawal.</p>
						</div>
					</div>
				</div>
				</Fade>
			</div>
		</section>
	);
};

export default SecondAbout;
