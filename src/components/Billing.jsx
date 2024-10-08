import { path } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={path} alt="billing" className="w-[%] h-[45%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Différents types <br className="sm:block hidden" /> de Services
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Grâce à nos différents services, vous bénéficiez d’une large gamme de prestations optimales pour vos choix pour tout type de projet.
      </p>

      

    </div>
  </section>
);

export default Billing;
