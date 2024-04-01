import { REDIRECT_TO_OLD } from "./settings";
import { storage } from 'wxt/storage'

export default defineContentScript({
  matches: ['https://www.reddit.com/*'],
  main() {
    storage.getItem(REDIRECT_TO_OLD).then((value) => {
      if (value === true) {
        const pathname = window.location.pathname;
        const oldRedditHost = "https://old.reddit.com";
        window.location.replace(`${oldRedditHost}${pathname}`)
      }
    })
  },
});
