import { it, expect } from "vitest";

import { TransformToMarkdown } from "./transform-to-markdown";
import { CreateMarkdown } from "./create-markdown";
import { WriteMarkdownFile } from "./write-markdown-file";

it("should write a file .md", async () => {
  const input = [
    { title: "01", body: "one" },
    { title: "02", body: "two" },
  ];

  const transformToMarkdown = new TransformToMarkdown();
  const markdown = transformToMarkdown.execute(input);

  const createMarkdown = new CreateMarkdown();
  const markdownParse = createMarkdown.execute(markdown);

  const writeMarkdownFile = new WriteMarkdownFile();
  
  expect(Promise.resolve(writeMarkdownFile.execute(markdownParse)));
})
