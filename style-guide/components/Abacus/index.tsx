import React,{useEffect} from "react";
import styles from "./styles.module.css";
import AOS from "aos";

const Abacus = () => {
  const path = "/images/technical/";
  const images = [
    ["5", "The Inspire Room"],
    ["6", "The Inspire Room"],
    ["7", "The Inspire Room"],
    ["8", "The Inspire Room"],
    ["9", "The Inspire Room"],
    ["10", "The Inspire Room"],
  ];
  const path2 = "/images/abacus/";
  const images2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  useEffect(()=>{
    AOS.init({duration: 1000});
  },[])

  return (
    <>
      <div className={styles.wrapper}>
        {images.map((image, ind) => (
          <div key={ind} className={styles.item} data-aos = "fade-up">
            <div className={styles.polaroid}>
              <img src={path + image[0] + "-min.jpg"} alt="image" />
              <div className={styles.caption}>{image[1]}</div>
            </div>
          </div>
        ))}
        {images2.map((image, ind) => (
          <div key={ind} className={styles.item} data-aos = "fade-up">
            <div className={styles.polaroid}>
              <img src={path2 + image + ".jpg"} alt="image" />
              <div className={styles.caption}>Abacus</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Abacus;
