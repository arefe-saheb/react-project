import React, { useRef } from 'react'
import './Testimonials.css'
import next from '../../img/icons8-next-50.png'
import back from '../../img/icons8-back-50.png'
import user1 from '../../img/user1.jpg'
import user2 from '../../img/user2.jpg'
import user3  from '../../img/user3.jpeg'
import user4 from '../../img/user4.jpg'

const Testimonials = () => {

    const slider = useRef()
    let tx = 0

    const slideForward = () =>{
        if (tx > -50){
            tx -=25
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }
    const slideBackward = () =>{
        if (tx < 0){
            tx +=25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
        <img src={next} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user2} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusiti, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maiores odio culpa saepe veritatis delectus, quibusdam nihil corrupti vero animi illo laborum distinctio officia fugit. Sapiente magnam itaque provident id!</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusiti, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maiores odio culpa saepe veritatis delectus, quibusdam nihil corrupti vero animi illo laborum distinctio officia fugit. Sapiente magnam itaque provident id!</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user3} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusiti, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maiores odio culpa saepe veritatis delectus, quibusdam nihil corrupti vero animi illo laborum distinctio officia fugit. Sapiente magnam itaque provident id!</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user4} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusiti, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maiores odio culpa saepe veritatis delectus, quibusdam nihil corrupti vero animi illo laborum distinctio officia fugit. Sapiente magnam itaque provident id!</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials