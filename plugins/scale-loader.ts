/* @vite-ignore */
import {
  applyPolyfills,
  defineCustomElements,
} from "@telekom/scale-components/loader";

export default defineNuxtPlugin((_nuxtApp) => {
  if (import.meta.client) {
    applyPolyfills().then(() => {
      defineCustomElements(window);
    });
  }
});
