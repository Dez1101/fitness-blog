import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (  
        <div>    
            <Post>
            <h1>Who is fitpert?</h1>
            <img src = "./images/fitpert.jpg" alt =""/>
            <br/>
            My full name is Desire Kabwanga but when it comes to fitness I go by the name "Fitpert",<br/> short for 
            Fitness Expert. I started training long ago back in 2014.<br/>I have always been inquisitive about fitness. after 3 years of working out,
            I started loving the idea of physically helping<br/>people get in they best shapes through fitness,  this started bringing great joy and satisfaction to me<br/><br/>
            <br/>
            <Link to="/" className="btn">HOME</Link> 
            </Post>
        </div>
        )
    }
}

export default About;

//styling
const Post = styled.div`
      margin: 3rem auto;
      padding: 1rem 10rem;

      h2 {
          text-align: center;
      }

      .btn {
          background: #d2b48c;
      }

      img{
          margin-bottom: 20px
      }
`;