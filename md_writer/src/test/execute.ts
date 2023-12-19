import { CreateMarkdown } from "../application/usecases/create-markdown";
import { TransformToMarkdown } from "../application/usecases/transform-to-markdown";
import { WriteMarkdownFile } from "../application/usecases/write-markdown-file";

const input = [
  { title: "Markdown Writer", body: "This is a markdown writer" },
  { title: "What encouraged me to do it?", body: "To create README.md faster" },
];

const transformToMarkdown = new TransformToMarkdown();
const markdown = transformToMarkdown.execute(input);

const createMarkdown = new CreateMarkdown();
const markdownParsed = createMarkdown.execute(markdown);

const writeMarkdownFile = new WriteMarkdownFile();

writeMarkdownFile.execute(markdownParsed);
