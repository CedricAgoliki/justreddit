import { REDIRECT_TO_OLD } from "./settings";
import { storage } from 'wxt/storage'


// This function will remove
// eventual popups on the interface
function cleanInterface() {
  // remove overflow on body and reset pointer events to auto
  document.body.style.overflow = 'auto';
  document.body.style.pointerEvents = 'auto';

  //For contant marked as NSFW, remove the modal
  document.querySelector('shreddit-async-loader[bundlename="desktop_rpl_nsfw_blocking_modal"]')?.remove()
}

export default defineContentScript({
  matches: ['https://www.reddit.com/*'],
  main() {
    storage.getItem(REDIRECT_TO_OLD).then((value) => {
      if (value === true) {
        const pathname = window.location.pathname;
        const oldRedditHost = "https://old.reddit.com";
        window.location.replace(`${oldRedditHost}${pathname}`)
      } else {
        cleanInterface()
      }
    })
  },
});
