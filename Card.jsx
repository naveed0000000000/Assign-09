import React from 'react'
import PropTypes from 'prop-types';

const Card = ({urlName,title,price, desc, rate, count}) => {
  return (
    <div className='Card00'>
<img src={urlName} alt ={""}/>
<h3> Title: {title}</h3>
<p>Price: Rs. {price}/-</p>
<p>{desc}</p>
<h4>Rating</h4>
<section>Rate: {rate}</section>
<p>Count: {count}</p>

      
    </div>
  )
}

Card.defaultProps = {
    urlName: "https://via.placeholder.com/150",
    title: "Default Title",
    price: "0.00",
    desc: "No description available",
  };
  
  Card.propTypes = {
    urlName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    desc: PropTypes.string.isRequired,
  };
  
//things to be clarify 
//dynamic , card size auto adjust, line spacing
export default Card
