import style from "./Text.module.scss";

export function H1(props) {
  return (
    <h1 className={`${style["h1"]} ${props.cssOverrides}`}>{props.children}</h1>
  );
}
export function H2(props) {
  return (
    <h2 className={`${style["h2"]} ${props.cssOverrides}`}>{props.children}</h2>
  );
}
export function H3(props) {
  return (
    <h3 className={`${style["h3"]} ${props.cssOverrides}`}>{props.children}</h3>
  );
}

export function Paragraph(props) {
  return (
    <p className={`${style["paragraph"]} ${props.cssOverrides}`}>
      {props.children}
    </p>
  );
}

export function Copyright(props) {
  return (
    <p className={`${style["copyright"]} ${props.cssOverrides}`}>
      {props.children}
    </p>
  );
}
