import React from 'react';
import { clouding } from "../assets"

const ProductCard = ({ id, name, price, yearlyPrice, description, features, link, isYearly }) => (
  <div key={id} className="item">
    <img src={clouding} alt={id} style={{ margin: '0 auto', display: 'block' }} />
    <h3 style={{ color: 'white' }}>{name}</h3>
    <div className="infos" style={{ textAlign: 'center' }}>
      <h4><span style={{ color: 'black' }}>{isYearly ? yearlyPrice : price}</span></h4>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {features.map((feature, index) => (
          <li className="processor" style={{ color: 'white' }} key={index}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div style={{ background: 'white', borderRadius: '8px', padding: '20px', width: '100%' }}>
        <a href={link} style={{ display: 'block', textAlign: 'center' }}>
          <button className="color" style={{ color: 'black' }}>Commander</button>
        </a>
      </div>
    </div>
    <div className="enditem"></div>
  </div>
);

export default ProductCard;



