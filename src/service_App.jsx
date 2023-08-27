import styles from "./style";
import { Clients,  Footer, Navbar, VpsPage,DedicatedPage,GamePage,CloudPage, TransitPage} from "./components";

const App = () => {
  const pathname = window.location.pathname;

  if (pathname.includes("vps")) {
    return (
      <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <VpsPage />
      </div>
    </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Clients />
          <Footer />
        </div>
      </div>
    </div>
    );
  }
  if (pathname.includes("dedicated")) {
    // Appelle la fonction souhaitée
    return (
      <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <DedicatedPage />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Clients />
          <Footer />
        </div>
      </div>
    </div>
    );
  }
  if (pathname.includes("game")) {
    // Appelle la fonction souhaitée
    return (
      <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <GamePage />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Clients />
          <Footer />
        </div>
      </div>
    </div>
    );
  }
  if (pathname.includes("cloud")) {
    // Appelle la fonction souhaitée
    return (
      <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <CloudPage />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Clients />
          <Footer />
        </div>
      </div>
    </div>
    );
  }
  if (pathname.includes("transit")) {
    // Appelle la fonction souhaitée
    return (
      <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      

      
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <TransitPage />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Clients />
          <Footer />
        </div>
      </div>
    </div>
    );
  }
  // return (
  //   <html>
  //     <head>
  //       <meta http-equiv="refresh" content="0; url='/home/'" />
  //     </head>
  //   </html>
  // );

};

export default App;
