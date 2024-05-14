import fs from "node:fs";
import { RawSourceMap, SourceMapConsumer } from "source-map";

const init = async () => {
  const rawSourceMap = fs.readFileSync(
    "./templates-v2.10fce965ab0adef09bd9-2.js.map"
  );

  const rawSourceMapJson = JSON.parse(rawSourceMap as any) as RawSourceMap;

  const consumer = await new SourceMapConsumer(rawSourceMapJson);

  const result = consumer.originalPositionFor({ line: 1, column: 54749 });

  console.log({ result });
};

init();
