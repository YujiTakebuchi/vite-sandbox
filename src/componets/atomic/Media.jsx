import styles from "./Media.module.scss";

export function Picture(props) {
  return (
    <picture className={`${styles["picture"]}`} css={props.cssOverrides}>
      {props.viewportObjectList.map((vp) => {
        return <source media={`${vp.mediaQuery}`} srcSet={vp.srcSet} />;
      })}
      <Image src={props.src} srcSet={props.srcSet} />
    </picture>
  );
}

export function Image(props) {
  return (
    <img className={`${styles["img"]}`} css={props.cssOverrides} {...props} />
  );
}
