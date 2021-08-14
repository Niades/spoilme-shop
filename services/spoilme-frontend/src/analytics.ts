import Analytics from 'analytics';
// @ts-ignore
import googleTagManager from '@analytics/google-tag-manager';

const GA_APP_ID = "spoilme.shop";
const GTM_CONTAINER_ID = "GTM-K6V82TF"

function initGA() {
  const analytics = Analytics({
    app: GA_APP_ID,
    plugins: [
      googleTagManager({
        containerId: GTM_CONTAINER_ID
      })
    ]
  });
}

export { initGA };