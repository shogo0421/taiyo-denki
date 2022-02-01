export interface Config {
  SYSTEM_ENV: "local" | "itg" | "st-test" | "stg" | "prd";
  TOP_PRODUCTS_JSON_URL: `http://${string}`;
}
