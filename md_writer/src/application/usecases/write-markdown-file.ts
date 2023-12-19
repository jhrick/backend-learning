import { writeFile } from "fs"

type WriteMarkdownFileRequest = string;

export class WriteMarkdownFile {
  async execute(markdown: WriteMarkdownFileRequest) {
    await writeFile("src/README.md", markdown, (err) => {
      if (err) throw new Error(err.message);

      console.log("writer");
    });
  }
}
