import style from "./Text.module.scss";

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
