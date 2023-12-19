import { expect, it } from "vitest";

import { TransformToMarkdown } from "./transform-to-markdown";
import { Markdown } from "../../domain/entities/Markdown";

it("should return props for markdown", () => {
  const input = [
    { title: "01", body: "one" },
    { title: "02", body: "two" },
  ];

  const transformToMarkdown = new TransformToMarkdown();

  const markdown = transformToMarkdown.execute(input);

  expect(markdown).toBeInstanceOf(Markdown)
})
