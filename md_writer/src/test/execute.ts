import { CreateMarkdown } from "../application/usecases/create-markdown";
import { TransformToMarkdown } from "../application/usecases/transform-to-markdown";
import { WriteMarkdownFile } from "../application/usecases/write-markdown-file";

const input = [
  { title: "First Part", body: "first part body" },
  { title: "Second Part", body: "second part body" },
];

const transformToMarkdown = new TransformToMarkdown();
const markdown = transformToMarkdown.execute(input);

const createMarkdown = new CreateMarkdown();
const markdownParsed = createMarkdown.execute(markdown);

const writeMarkdownFile = new WriteMarkdownFile();

writeMarkdownFile.execute(markdownParsed);
