"use client";

import {
  type ChangeEvent,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { z } from "zod";
import Input from "~/app/components/Input";
import Output from "~/app/components/Output";
import { stage1, stage2 } from "~/lib/2015/1";

export default function Day1_2015() {
  const [stage1Input, setStage1Input] = useState<string>("");
  const [stage2Input, setStage2Input] = useState<string>("");

  const stage1Output = stage1(stage1Input);
  const stage2Output = stage2(stage2Input);

  const handleType =
    (setter: Dispatch<SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const str = z
        .string()
        .regex(/^[()]*$/)
        .safeParse(e.target.value);
      if (str.success) {
        setter(str.data);
      }
    };

  return (
    <div className="flex flex-col gap-2">
      <h1>Stage 1</h1>
      <Input
        className=""
        value={stage1Input}
        onChange={handleType(setStage1Input)}
      />
      <Output>{stage1Output}</Output>
      <h1>Stage 2</h1>
      <Input
        className=""
        value={stage2Input}
        onChange={handleType(setStage2Input)}
      />
      <Output>{stage2Output}</Output>
    </div>
  );
}
