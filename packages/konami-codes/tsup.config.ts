import { defineConfig } from "tsup";

export default defineConfig(({ watch }) => ({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  metafile: true,
  sourcemap: true,
  splitting: false,
  minify: !watch,
}));
