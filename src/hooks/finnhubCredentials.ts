import getEnvVarOrThrowErr from "../utils/getEnvVarOrThrowErr";

export const FINNHUB_BASE_URL = "https://finnhub.io/api/v1";
export const FINNHUB_API_KEY = getEnvVarOrThrowErr("VITE_FINNHUB_TOKEN");
