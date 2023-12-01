import { type InputHTMLAttributes } from "react";
import classnames from "classnames";

export default function Output(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div
      {...props}
      className={classnames(
        "rounded border bg-slate-200 shadow",
        props.className,
      )}
    />
  );
}
