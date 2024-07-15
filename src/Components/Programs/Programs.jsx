import React from 'react';
import './Programs.css';
import program_1 from '../../assets/program1.png'
import program_2 from '../../assets/program2.png'
import program_3 from '../../assets/program3.png'
import icon_1 from '../../assets/icon1.png'
import icon_2 from '../../assets/icon2.png'
import icon_3 from '../../assets/icon3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={program_1} alt=''/>
        <div className="caption">
          <img src={icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program_2} alt=''/>
        <div className="caption">
          <img src={icon_2} alt="" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program_3} alt=''/>
        <div className="caption">
          <img src={icon_3} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;