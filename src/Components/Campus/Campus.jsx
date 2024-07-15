import React from 'react';
import './Campus.css';
import gallery_1 from '../../assets/gallery1.png'
import gallery_2 from '../../assets/gallery2.png'
import gallery_3 from '../../assets/gallery3.png'
import gallery_4 from '../../assets/gallery4.png'
import white_arrow from '../../assets/white-arrow.png'
import { Link } from 'react-scroll';  // Import Link from react-scroll

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <Link to='testimonials' smooth={true} offset={-260} duration={500} className='btn dark-btn'>See more here <img id='arrow' src={white_arrow} alt="" /></Link>
    </div>
  );
}

export default Campus;