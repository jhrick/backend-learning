import { describe, expect, it } from "vitest";
import { CreateMarkdown } from "./create-markdown";
import { TransformToMarkdown } from "./transform-to-markdown";

describe("create a markdown", () => {
  it("should to return a array of the title and body object", () => {
    const input = [
      { title: "01", body: "001" },
      { title: "02", body: "002" }
    ];
    
    const transformToMarkdown = new TransformToMarkdown();
    const markdown = transformToMarkdown.execute(input);

    const createMarkdown = new CreateMarkdown();
    const result = createMarkdown.execute(markdown);

    expect(result).toBeTruthy();
  })
})
