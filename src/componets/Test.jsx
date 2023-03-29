import styles from "./Test.module.scss";
import { css } from "@emotion/react";

export function EmotionTest() {
  return (
    <div className={`${styles["emotion-test"]}`}>
      <div
        className={`${styles["emotion-test--content"]}`}
        css={css`
          font-weight: 700;
        `}
      >
        hello emotion swc
      </div>
    </div>
  );
}
