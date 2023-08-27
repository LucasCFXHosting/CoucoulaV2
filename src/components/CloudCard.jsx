import React from 'react';
import { cfxlife } from "../assets"

// const ProductCard = ({ id, name, price,yearlyPrice, description, features, link,isYearly }) => (
//     <div key={id} className="item">
//       <img src={gtav} alt={id} className="" style={{ margin: '0 auto', display: 'block' }} />
//       <h3 style={{ color: 'white' }}>{name}</h3>
//       <div className="infos" style={{ textAlign: 'center' }}>
//       {isYearly ? (
//         <h4><span style={{ color: 'black' }}>{yearlyPrice}</span> /anner</h4>
//       ) : (
//         <h4><span style={{ color: 'black' }}>{price}</span> /mois</h4>
//       )}
//         <h5 className="processor" style={{ color: 'white' }}>1vCore &nbsp;<span>Xeon E5 2696v4</span></h5>
//         <h5 className="ram" style={{ color: 'white' }}>2 Go &nbsp;<span>RAM</span></h5>
//         <h5 className="storage" style={{ color: 'white' }}>20 Go &nbsp;<span>SSD NVMe</span></h5>
//         <h5 className="users" style={{ color: 'white' }}>Idéal pour &nbsp;<span>10+ Joueurs</span></h5>
//       </div>
//       <div style={{ display: 'center', justifyContent: 'center', marginTop: '20px' }}>
//         <div style={{ background: 'white', borderRadius: '8px', padding: '20px' }}>
//       <a href="https://my.cfxhosting.fr/store/fivem">
//       <button className="color" style={{ color: 'black' }}>Commander</button>  </a>
//       </div>
//       </div>
//       <div className="enditem"></div>
//     </div>
//   );




const ProductCard = ({ id, name, price, yearlyPrice, description, features, link, isYearly }) => (
  <div key={id} className="item">
    <img src={cfxlife} alt={id} style={{ margin: '0 auto', display: 'block' }} />
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



// import styles from "../style";

// const ProductCard = ({ id, name, price,yearlyPrice, description, features, link,isYearly }) => (

  // <div key={id} className="flex flex-col items-center px-8 py-10 rounded-[20px] bg-white shadow-lg mb-8 mx-4">
  //   <h3 className={`${styles.heading3} font-bold text-center mb-4`}>{name}</h3>
  //   <p className="font-medium text-center mb-4">{description}</p>
  //   <p>From</p>
  //   {isYearly ? (
  //        <p className="text-xl font-semibold text-center mb-6">{yearlyPrice}</p>
  //     ) : (
  //       <p className="text-xl font-semibold text-center mb-6">{price}</p>
  //     )}
  //   <ul className="text-sm font-medium text-gray-700 mb-8">
  //     {features.map((feature) => (
  //       <li className="my-1" key={feature}>
  //         {feature}
  //       </li>
  //     ))}
  //   </ul>
  //   <button  className="bg-blue-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
  //     <a href={link} >Buy Now</a>
  //   </button>
  // </div>
// );

// export default ProductCard;

