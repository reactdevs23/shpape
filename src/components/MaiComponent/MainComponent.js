import React from "react";
import styles from "./MainComponent.module.css";

const MainComponent = ({ data, container, centerImage }) => {
  return (
    <div className={styles.mainWrapper}>
      <section className={styles.wrapper}>
        <div className={styles.mainContainer}>
          <div className={styles.container}>
            <div
              className={[
                styles.imagesContainer,
                data.length === 3 && styles.only3Items,
                data.length >= 4 && styles.moreThan3,
              ].join(" ")}
            >
              {data.map((el, i) => (
                <div
                  style={{
                    "--border": el.border,
                    "--highlightBorder": el.highlightBorder,
                  }}
                  className={[
                    styles.element,
                    i + 1 === 1 && styles.firstElement,
                    i + 1 === data.length && styles.lastElement,
                    (i + 1) % 2 === 1 && i + 1 !== 1 && styles.oddElement,
                    (i + 1) % 2 === 0 &&
                      (i + 1) % 4 !== 0 &&
                      styles.divisibleBy2Not4,
                    (i + 1) % 2 === 0 &&
                      (i + 1) % 4 === 0 &&
                      styles.evenElement,
                    i + 1 === 2 && styles.secondElement,
                    i === data.length - 2 && styles.secondLastElement,
                    el.highlight && styles.highlightElement,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div
                    className={[
                      styles.border,
                      el.highlight && styles.highlightBorder,
                    ].join(" ")}
                  ></div>

                  <img src={el.icon} alt="" className={styles.icon} />
                </div>
              ))}
            </div>

            <div className={styles.customContainer}>
              <div className={styles.roundedImage}> {container}</div>
              <img src={centerImage} alt="#" className={styles.centerImage} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainComponent;
