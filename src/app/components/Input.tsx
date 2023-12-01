import { type InputHTMLAttributes } from "react";
import classnames from "classnames";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={classnames("rounded border shadow", props.className)}
    />
  );
}
