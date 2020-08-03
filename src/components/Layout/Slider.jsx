import React, { useState }from 'react';
import './Slider.scss';
import ImgComponent from '../component/ImgComponent'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import img1 from '../../../src/img/dive1.jpg'
import img2 from '../../../src/img/dive2.jpg'
import img3 from '../../../src/img/dive3.jpg'
import img4 from '../../../src/img/dive4.jpg'
import img5 from '../../../src/img/dive5.jpg'

function Slider() {
    let sliderArr = [
        <ImgComponent src={img1} />,
        <ImgComponent src={img2} />,
        <ImgComponent src={img3} />,
        <ImgComponent src={img4} />,
        <ImgComponent src={img5} />
        ];
    const [x, setX] = useState(0);
    const goleft = () =>{
        x === 0 ? setX ( -100 * (sliderArr.length-1)) : setX ( x + 100);
    };
    const goright = () =>{
        setX ( x - 100);
        x === -100 * (sliderArr.length-1) ? setX(0) : setX ( x - 100);
    }


    return (
        <div className="slider">
            {sliderArr.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </div>
                );
            })}
            <button id="goleft" onClick={goleft}>
                <FontAwesomeIcon icon={faChevronLeft} className="icon"  size="2x"/>
            </button>
            <button id="goright" onClick={goright}>
                <FontAwesomeIcon icon={faChevronRight} className="icon" color="#fff" size="2x" />
            </button>

        </div>
    );
}

export default Slider;