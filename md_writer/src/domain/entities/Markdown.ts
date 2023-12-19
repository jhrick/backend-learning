import { Entity } from "../../core/domain/Entity";

type ContentProps = {
  title: string,
  body: string,
};

type MarkdownProps = ContentProps[];

export class Markdown extends Entity<MarkdownProps> {
  private constructor(props: MarkdownProps) {
      super(props);
  }

  static create(props: MarkdownProps) {
    const markdown = new Markdown(props);

    return markdown;
  }
}
