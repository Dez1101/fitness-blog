import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaPhone, FaInstagram } from 'react-icons/fa';

export class Contact extends Component {
  render() {
    return (
      <Post>
        <ul>
        <h1>Contact: </h1>
          <li><FaPhone /><b>PHONE: 073 166 7112</b></li>
          <li><MdEmail /><b>EMAIL: dkay1101@gmail.com</b></li>
          <li><FaInstagram /><b><a href= "https://www.instagram.com/fitpert/">INSTAGRAM</a></b></li>
          <li><FaFacebook /><b><a href = "https://www.facebook.com/dez.re1101">FACEBOOK</a></b></li>
        </ul>
        <br />
        <Link to="/" className="btn">HOME</Link> 
      </Post>
    );
  }
}

export default Contact;

const Post = styled.div`
      margin: 3rem auto;
      padding: 1rem 10rem;

      h2 {
          text-align: center;
      }

      .btn {
          background: #d2b48c
      }
`;
