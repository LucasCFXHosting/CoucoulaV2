import { TransitProducts } from "../constants";
import styles from "../style";
import ProductCard from "./VpsCard";
import { admin,support,ipicon,antiddos,home,latency,transit } from "../assets";
import React, { useState } from 'react';
const TransitPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const hashtag = window.location.hash;
  const handleToggleYearly = () => {
    setIsYearly(!isYearly);
  };


  return (
  <section id="transit" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>

  
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Choose the Right <br className="sm:block hidden" /> IP Transit, EoIP, or GRE Solutions with Path Network Anti-DDoS
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Our range of IP Transit, EoIP, or GRE solutions, protected with Path Network Anti-DDoS, provide the flexibility and control you need to run your business smoothly. Whether you're a small business looking for a reliable and affordable solution, or a large enterprise in need of powerful resources, we have a solution for you.
        </p>
      </div>
    </div>
    <div className="flex flex-col items-center px-8 py-10 rounded-[20px] bg-white shadow-lg mb-8 mx-4">
      {isYearly ? (
        <div className="text-sm font-medium mb-2">Les prix sont pour les paiements annuels</div>
      ) : (
        <div className="text-sm font-medium mb-2">Les prix sont pour les paiements mensuels</div>
      )}
      <div className="relative inline-block w-10 align-middle select-none">
        <input type="checkbox" name="yearly-toggle" id="yearly-toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" onChange={handleToggleYearly} />
        <label htmlFor="yearly-toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
      </div>
    </div>
    <div className="container mx-auto flex flex-wrap justify-center">
      {TransitProducts.map((product) => <ProductCard key={product.id} {...product} isYearly={isYearly} />)}
    </div>


  
  </section>
  
);
};

export default TransitPage;
