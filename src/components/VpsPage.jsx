import { vpsProducts } from "../constants";
import styles from "../style";
import { admin,support,ipicon,antiddos,os,latency } from "../assets";
import ProductCard from "./VpsCard";
import React, { useState } from 'react';
const VpsPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const handleToggleYearly = () => {
    setIsYearly(!isYearly);
  };


  return (
  <section id="Virtual" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>

  
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Choisissez le bon <br className="sm:block hidden" /> VPS Cloud pour vos projets
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Notre gamme de serveurs VPS offre la flexibilité et le contrôle dont vous avez besoin pour exécuter votre projet en douceur. Que vous soyez un petit projet à la recherche d’un VPS fiable et abordable, ou une grande entreprise ayant besoin de ressources puissantes, nous avons une solution pour vous.
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
  
      {vpsProducts.map((product) => <ProductCard key={product.id} {...product} isYearly={isYearly} />)}
    </div>
  

  </section>
  
);
};

export default VpsPage;
