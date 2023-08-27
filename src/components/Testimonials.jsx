import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="Virtual" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

  <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
    <h2 className={styles.heading2}>
      Choose the Right <br className="sm:block hidden" /> VPS for Your Business
    </h2>
    <div className="w-full md:mt-0 mt-6">
      <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Our range of VPS servers provide the flexibility and control you need to run your
        business smoothly. Whether you're a small business looking for a reliable and
        affordable VPS, or a large enterprise in need of powerful resources, we have a
        solution for you.
      </p>
    </div>
  </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
