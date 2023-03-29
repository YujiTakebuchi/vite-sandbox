import { css } from "@emotion/react";

export function EmotionTest() {
  return (
    <div className="emotion-test">
      <div
        className="emotion-test--content"
        css={css`
          font-weight: 700;
        `}
      >
        hello emotion swc
      </div>
    </div>
  );
}
