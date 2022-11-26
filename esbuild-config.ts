import { BuildFailure, BuildOptions, build } from "esbuild";
import eslintPlugin from "esbuild-plugin-eslint";
import { clean } from "esbuild-plugin-clean";
import { copy } from "esbuild-plugin-copy";
import { sassPlugin } from "esbuild-sass-plugin";
import { esbuildTsChecker } from "esbuild-plugin-ts-checker";
import { createServer } from "esbuild-server";

const isDevelopment: boolean = process.env.MODE === "development";
const buildConfig: BuildOptions = {
  bundle: true,
  chunkNames: "[name]-[hash]",
  color: true,
  entryNames: "bundle",
  entryPoints: ["src/index.tsx"],
  format: "esm",
  metafile: true,
  minify: !isDevelopment,
  outdir: "build",
  platform: "browser",
  plugins: [
    clean({
      patterns: ["./build"],
      sync: false,
    }),
    copy({
      assets: [
        {
          from: "public/**/*",
          to: "./",
          keepStructure: true,
        },
      ],
    }),
    esbuildTsChecker({
      tsconfig: "tsconfig.json",
    }),
    eslintPlugin({
      filter: /\.(tsx?)$/,
      baseConfig: {
        rules: {
          "no-console": isDevelopment
            ? "off"
            : ["error", { allow: ["warn", "error"] }],
        },
      },
    }),
    sassPlugin({
      cache: true,
      loadPaths: ["src/theme/"],
      prefer: "sass",
      sourceMap: true,
      type: "css",
    }),
  ],
  preserveSymlinks: true,
  resolveExtensions: [".js", ".ts", ".tsx", ".scss"],
  sourcemap: isDevelopment ? "external" : false,
  splitting: true,
  treeShaking: true,
  write: true,
};

(async (): Promise<void> => {
  if (isDevelopment) {
    createServer(buildConfig, {
      historyApiFallback: true,
      open: true,
      port: 1337,
      static: "public",
    }).start();

    return;
  }

  build(buildConfig)
    .then((): void => {
      console.log("Compiled successfully!");
      process.exit(0);
    })
    .catch((error: BuildFailure): void => {
      console.error(error.message);
      process.exit(1);
    });
})();
