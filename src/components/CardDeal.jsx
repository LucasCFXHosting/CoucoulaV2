import { dc } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Datacenter <br className="sm:block hidden" /> 
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    Nous sommes fiers d’annoncer que nous avons des emplacements à Paris pour assurer le plus haut niveau de service et de performance pour nos clients partout en Europe avec un débit optimal.
    </p>
      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={dc} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
