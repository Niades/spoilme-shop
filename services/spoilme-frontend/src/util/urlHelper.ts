const PRODUCT_IMAGES_DIR = "/public/";
let PRODUCT_IMAGES_ROOT: string;
if(process.env.NODE_ENV === "development") {
  PRODUCT_IMAGES_ROOT = "http://localhost:3005"
} else if(process.env.NODE_ENV === "production") {
  PRODUCT_IMAGES_ROOT = window.location.origin;
}

function prepareProductImageUrl(filename: string): string {
  return `${PRODUCT_IMAGES_ROOT}${PRODUCT_IMAGES_DIR}${filename}`;
};

export {
  prepareProductImageUrl,
};