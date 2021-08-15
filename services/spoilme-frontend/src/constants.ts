const PROD: boolean = window.location.host === "spoilme.shop";
const GA_ENABLED: boolean = PROD;

export {
  PROD,
  GA_ENABLED,
};