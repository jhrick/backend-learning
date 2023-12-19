import { Markdown } from "../../domain/entities/Markdown";
import { CreateMarkdown } from "./create-markdown";

type InputProps = {
  title: string,
  body: string,
};

type TransformToMarkdownRequest = InputProps[];

export class TransformToMarkdown {
  execute(input: TransformToMarkdownRequest): Markdown {
    input.map((part: InputProps) => {
      part.title = `# ${part.title}`;
    });

    const markdown = Markdown.create(input);

    return markdown;
  }
}
