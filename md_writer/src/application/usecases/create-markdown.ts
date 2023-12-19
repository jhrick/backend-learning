import { Markdown } from "../../domain/entities/Markdown";

type MarkdownProps = {
  title: string;
  body: string,
}

export class CreateMarkdown {
  execute(markdown: Markdown): string {
    let content = "";

    markdown.props.forEach((parts: MarkdownProps) => {
      Object.values(parts).forEach((texts: string) => {
        content += `${texts}\n`;
      })
    })

    return content; 
  }
}
