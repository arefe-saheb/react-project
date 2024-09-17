import React from 'react'
import './Program.css'
import person_1 from '../../img/person_1.jpg' 
import person_2 from '../../img/person_2.jpg' 
import person_3 from '../../img/person_3.jpg' 
import icon from '../../img/icons8-graduation-50.png'
const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={person_1} alt="" />
            <div className="caption">
                <img src={icon} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={person_2} alt="" />
            <div className="caption">
                <img src={icon} alt="" />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={person_3} alt="" />
            <div className="caption">
                <img src={icon} alt="" />
                <p>Post Graduation </p>
            </div>
        </div>
    </div>
  )
}

export default Programs