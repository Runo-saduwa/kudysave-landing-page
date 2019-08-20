import React from 'react';
import './About.css';
import img from '../../img/map.jpeg';
import img2 from '../../img/a4-icon.jpeg';
import Fade from 'react-reveal/Fade';
const FirstAbout = (props) => {
	return (
		<section className="first-about about-container py-5">
			<div className="row">
			<Fade left>
				<div className="col-sm-12 col-md-6 col-lg-6">
					
						<div class="first-box-1 box-height">
							<div className="box-content p-4">
								<div>
									<img className="small-img" src={img} />
									<span className="home-delivery">Home Delivery</span>
								</div>

								<p class="lead">
									Wherever you are in Nigeria, Kudysave delivers your food Items to your nearest bus
									stop or pick up station.
								</p>
							</div>
						</div>
				
				</div>
				</Fade>
				<Fade right>
				<div className="col-sm-12 col-md-6 my-3">
					<div class="first-box-2 box-height">
						<img className="w-100 h-100" src={img2} />
					</div>
				</div>
				</Fade>
			</div>
		</section>
	);
};

export default FirstAbout;
