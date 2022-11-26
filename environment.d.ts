declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MODE: "development" | "production";
    }
  }
}
export {};
