import { stage1, stage2 } from ".";

describe("Stage 1", () => {
  it("(()) and ()() both result in floor 0.", () => {
    expect(stage1("(())")).toEqual(0);
    expect(stage1("()()")).toEqual(0);
  });

  it("((( and (()(()( both result in floor 3.", () => {
    expect(stage1("(((")).toEqual(3);
    expect(stage1("(()(()(")).toEqual(3);
  });

  it("))((((( also results in floor 3.", () => {
    expect(stage1("))(((((")).toEqual(3);
  });

  it("()) and ))( both result in floor -1 (the first basement level).", () => {
    expect(stage1("())")).toEqual(-1);
    expect(stage1("))(")).toEqual(-1);
  });

  it("))) and )())()) both result in floor -3.", () => {
    expect(stage1(")))")).toEqual(-3);
    expect(stage1(")())())")).toEqual(-3);
  });
});

describe("Stage 2", () => {
  it(") causes him to enter the basement at character position 1.", () => {
    expect(stage2(")")).toEqual(1);
  });

  it("()()) causes him to enter the basement at character position 5.", () => {
    expect(stage2("()())")).toEqual(5);
  });
});
