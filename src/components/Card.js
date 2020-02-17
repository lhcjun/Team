import React from "react";
import './Card.css';
import { FaGoogle, FaFacebookF, FaTwitter, FaLinkedinIn, FaInfo } from 'react-icons/fa';

const Card = ({ name, email, bs, id }) => {
  return (
    <div className="tc grow br3 pa3 ma2 dib bw2 shadow-5 mv3 relative bg-white" id="content">
        <div id= "card">
          <img alt="member" src={require(`../img/${id}.png`)} 
                className='br-100 h4 w4 dib ba b--black-10 pa2' />
          <React.Fragment>
              <h2>{name}</h2>
              <h3>{email}</h3>
              <p>{bs}</p>
          </React.Fragment>
        </div>
        <div className="pa2 br3 shadow-5 flex justify-center items-center absolute" id="info">
            <a href="https://www.google.com/gmail/"><FaGoogle className="ml3 mr3 f4"/></a>
            <a href="https://www.facebook.com/"><FaFacebookF className="mr3 f4"/></a>
            <a href="https://twitter.com/"><FaTwitter className="mr3 f4"/></a>
            <a href="https://www.linkedin.com/"><FaLinkedinIn className="mr3 f4"/></a>
            <a href="https://github.com/"><FaInfo className="mr3 f4"/></a>
        </div>
    </div>
  );
};

export default Card;
