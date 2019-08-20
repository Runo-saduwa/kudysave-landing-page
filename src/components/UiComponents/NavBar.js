import React, { Component, Fragment } from 'react';
import Sidebar from 'react-sidebar';
import './NavBar.css';

class NavBar extends Component {
	state = {
		scrolled: false,
		sidebarOpen: false,
		active: false
	};
	componentDidMount() {
		window.addEventListener('scroll', () => {
		 if (window.scrollY > 0) {
             this.setState({
                 scrolled: true
             })
         } else {
             this.setState({
                 scrolled:false
             })
         }
		});
	}

	componentWillUnmount() {
		window.removeEventListener('scroll');
	}

	onSetSidebarOpen = () => {
		this.setState({ sidebarOpen: !this.state.sidebarOpen });
	};

	toggleActive = (open) => {
		this.setState({
			active: !this.state.active,
			sidebarOpen: !open
		});
	};
	render() {
		const navLinks = (
			<ul className="navlinks">
				<li><a href="/home">Home</a></li>
				<li><a href="#">Sign Up</a></li>
				<li><a href="/">About Us</a></li>
				<li><a href="#">Contact us</a></li>
			</ul>
		);
		return (
			<Fragment>
				<Sidebar
					sidebar={navLinks}
					open={this.state.sidebarOpen}
					onSetOpen={this.onSetSidebarOpen}
					styles={{ sidebar: { background: 'white', position: 'fixed', zIndex:'1000', paddingRight: '100px' } }}
				>
					<div className={`nav-container d-flex justify-content-between ${this.state.scrolled ? 'nav-bg' : null}`}>
                    <span>
                        Logo
                    </span>
                    <span onClick={() => this.onSetSidebarOpen()}>
							<svg
								className={`ham ham2 ${this.state.active && this.state.sidebarOpen ? 'active' : null}`}
								viewBox="0 0 100 100"
								width="70"
								onClick={this.toggleActive}
							>
								<path
									className="line top"
									d="m 70,33 h -40 c -6.5909,0 -7.763966,-4.501509 -7.763966,-7.511428 0,-4.721448 3.376452,-9.583771 13.876919,-9.583771 14.786182,0 11.409257,14.896182 9.596449,21.970818 -1.812808,7.074636 -15.709402,12.124381 -15.709402,12.124381"
								/>
								<path className="line middle" d="m 30,50 h 40" />
								<path
									className="line bottom"
									d="m 70,67 h -40 c -6.5909,0 -7.763966,4.501509 -7.763966,7.511428 0,4.721448 3.376452,9.583771 13.876919,9.583771 14.786182,0 11.409257,-14.896182 9.596449,-21.970818 -1.812808,-7.074636 -15.709402,-12.124381 -15.709402,-12.124381"
								/>
							</svg>
						</span>
					</div>
				</Sidebar>
			</Fragment>
		);
	}
}

export default NavBar;
