import { CloudProducts } from "../constants";
import styles from "../style";
import ProductCard from "./CloudCard";
import { admin,support,ipicon,antiddos,game,latency } from "../assets"
import React, { useState } from 'react';
const CloudPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggleYearly = () => {
    setIsYearly(!isYearly);
  };
  return (
  <section id="Cloud" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>

  
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Choisissez le <br className="sm:block hidden" /> bon Serveur FiveM pour votre projet
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Notre gamme de serveurs FiveM offre la flexibilité et le contrôle dont vous avez besoin pour exécuter votre projet de jeu en douceur. Que vous soyez un petit projet uniquement pour le développement, à la recherche d’un serveur FiveM fiable et abordable, nous avons une solution pour vous.
        </p>
      </div>
    </div>
    <div className="container mx-auto flex flex-wrap justify-center">
      {CloudProducts.map((product) => <ProductCard key={product.id} {...product} isYearly={isYearly} />)}
    </div>
  


  
  </section>
);
};

export default CloudPage;
