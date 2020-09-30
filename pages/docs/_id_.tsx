import { Component, h } from "nzxt/h";
import { readFile } from "fs";
import { join } from "path";

const Top: Component<{ markdown: string }> = ({ markdown }) => {
  return <div>{markdown}</div>
}

async function readFileAsync(path: string) {
  return new Promise<Buffer>(ok => readFile(path, (_, d) => ok(d)));
}

Top.getInitialPrpos = async ({ params }) => {
  console.log(params)
  return { markdown: (await readFileAsync(join(__dirname, `../../docs/${params.id}.md`))).toString("utf-8") };
}

export default Top;
