import styles from "../style";
import Buttondiscord  from "./Buttondiscord";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Support Actif !</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
         Notre support est disponible 24h/24, 7 jours sur 7, pour répondre à toutes vos questions et résoudre rapidement les problèmes éventuels. 
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Buttondiscord />
    </div>
  </section>
);

export default CTA;
