import { useState } from "react";
import variable from "./styles/var.module.scss";
import "./App.css";
import { EmotionTest } from "./componets/Test";
import { Figure, Image, Picture } from "./componets/atomic/Media";
import { Copyright, Paragraph } from "./componets/atomic/Text";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <EmotionTest />
      <Figure figcaption={`世界一かわいい`}>
        <Picture
          src={`/assets/images/too_cute.jpg`}
          srcSet={`/assets/images/too_cute@2x.jpg 2x`}
          viewportObjectList={[
            {
              mediaQuery: `(max-width: ${variable.breakpoint}px)`,
              srcSet: `/assets/images/sp/too_cute_sp@2x.jpg, /assets/images/sp/too_cute_sp@2x.jpg 2x`,
            },
          ]}
        />
      </Figure>
      <Picture
        src={`/assets/images/too_cute.jpg`}
        srcSet={`/assets/images/too_cute@2x.jpg 2x`}
        viewportObjectList={[
          {
            mediaQuery: `(max-width: ${variable.breakpoint}px)`,
            srcSet: `/assets/images/sp/too_cute_sp@2x.jpg, /assets/images/sp/too_cute_sp@2x.jpg 2x`,
          },
        ]}
      />
      <Image src={`/assets/images/too_cute.jpg`} />
      <Paragraph>過去最高のベストショット</Paragraph>
      <Copyright>©︎ epsilon 2013</Copyright>
    </div>
  );
}

export default App;
