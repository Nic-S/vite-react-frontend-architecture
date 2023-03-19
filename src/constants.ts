// todo to study

const prodEnvConst: Record<string, string> = {
  REACT_APP_API_URL: "$REACT_APP_API_URL",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getEnvConst = (
  path: string,
  env: string | undefined = import.meta.env.MODE
): string => {
  if (process.env.NODE_ENV === "production") {
    return prodEnvConst[path];
  }
  return process.env[path] as string;
};

export const API_URL = import.meta.env.VITE_API_URL || "";

export const DEFAULT_CACHE_TTL = 0;
