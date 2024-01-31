import React from "react";
import styles from "./MainComponent.module.css";

const MainComponent = ({
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  ninth,
  container,
}) => {
  return (
    <div className={styles.mainWrapper}>
      <section className={styles.wrapper}>
        <div className={styles.mainContainer}>
          <div className={styles.container}>
            <div className={styles.imagesContainer}>
              <div
                className={[
                  styles.firstImageContainer,
                  first.highlight && styles.scaleSize,
                ].join(" ")}
              >
                <div className={styles.line1}>
                  {first.highlight ? first.highlightedLine : first.line}
                </div>
                <img src={first.icon} alt="" className={styles.icon} />
              </div>{" "}
              <div
                className={[
                  styles.secondImageContainer,
                  second.highlight && styles.scaleSize,
                ].join(" ")}
              >
                <div className={styles.line2}>
                  {second.highlight ? second.highlightedLine : second.line}
                </div>
                <img src={second.icon} alt="" className={styles.icon} />
              </div>
              <div
                className={[
                  styles.thirdImageContainer,
                  third.highlight && styles.scaleSize,
                ].join(" ")}
              >
                <div className={styles.line3}>
                  {third.highlight ? third.highlightedLine : third.line}
                </div>
                <img src={third.icon} alt="" className={styles.icon} />
              </div>{" "}
              <div
                className={[
                  styles.fourthImageContainer,
                  fourth.highlight && styles.scaleSize,
                ].join(" ")}
              >
                <div className={styles.line4}>
                  {fourth.highlight ? fourth.highlightedLine : fourth.line}
                </div>
                <img src={fourth.icon} alt="" className={styles.icon} />
              </div>
              <div
                className={[
                  styles.fifthImageContainer,
                  fifth.highlight && styles.scaleSize,
                ].join(" ")}
              >
                <div className={styles.line5}>
                  {fifth.highlight ? fifth.highlightedLine : fifth.line}
                </div>
                <img src={fifth.icon} alt="" className={styles.icon} />
              </div>
              <div
                className={[
                  styles.sixthImageContainer,
                  sixth.highlight && styles.scaleSize,
                ].join(" ")}
              >
                <div className={styles.line6}>
                  {sixth.highlight ? sixth.highlightedLine : sixth.line}{" "}
                </div>
                <img src={sixth.icon} alt="" className={styles.icon} />
              </div>
              <div
                className={[
                  styles.seventhImageContainer,
                  seventh.highlight && styles.scaleSize,
                ].join(" ")}
              >
                <div className={styles.line7}>
                  {seventh.highlight ? seventh.highlightedLine : seventh.line}{" "}
                </div>
                <img src={seventh.icon} alt="" className={styles.icon} />
              </div>{" "}
              <div
                className={[
                  styles.eighthImageContainer,
                  eighth.highlight && styles.scaleSize,
                ].join(" ")}
              >
                <div className={styles.line8}>
                  {eighth.highlight ? eighth.highlightedLine : eighth.line}
                </div>
                <img src={eighth.icon} alt="" className={styles.icon} />
              </div>{" "}
              <div
                className={[
                  styles.ninthImageContainer,
                  ninth.highlight && styles.scaleSize,
                ].join(" ")}
              >
                <div className={styles.line9}>
                  {ninth.highlight ? ninth.highlightedLine : ninth.line}
                </div>
                <img src={ninth.icon} alt="" className={styles.icon} />
              </div>{" "}
            </div>

            <div className={styles.customContainer}>
              <div className={styles.roundedImage}> {container}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainComponent;
