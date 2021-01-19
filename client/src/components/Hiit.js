import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Homestyling extends Component {
    render() {
        return (
    < div>
        <div class="wide">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../images/hiit1.jpg"
                    alt="hiit img"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../images/hiit2.jpg"
                    alt="hiit img"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../images/hiit3.jpeg"
                    alt="hiit img"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../images/hiit4.jpg"
                    alt="hiit img"
                    />
                </Carousel.Item>
                </Carousel>
        </div><br></br>
        <h2 className="welcome">What is HIIT training and why it my favorite for weight loss and muscle build </h2>
        <p className="styling">HIIT, or high-intensity interval training, is a training technique in which you give all-out, 
        <br/>one hundred percent effort through quick, intense bursts of exercise, followed by short, sometimes active, recovery periods. 
        This type of training gets and keeps your heart rate up and burns more fat in less time</p>
        <p className="styling">Because HIIT training turns your body into a calorie burning machine, 
        <br/>it is an excellent training method to burn overall body fat, including belly fat. One study showed that people performing HIIT three times<br/> 
        a week for 20 minutes lost an average of 4.4 pounds in 12 weeks without any dietary changes.<br/><br/>
         I will be sharing more with you on hiit training via the blogs :)</p>
    </div>
        )
    }
}

export default Homestyling;