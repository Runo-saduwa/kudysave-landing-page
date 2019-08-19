import React from 'react';
import './SectionHeader.css';
// import { ReactComponent as PhoneSvg } from '../../img/mobilepath.svg';

const SectionHeader = ({title, subtitle, bgClass, headerMargin}) => {
	return (
		<header className={`section-header text-center ${bgClass} ${headerMargin}`}>
           <h1 className="section-title">{title}</h1>
           <p className="section-subtitle">{subtitle}</p>

		</header>
	);
};

export default SectionHeader;
