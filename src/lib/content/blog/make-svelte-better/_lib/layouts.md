## Layouts

### Manual refreshes

Sometimes when you change something in a layout file, it doesn't automatically get updated on the browser, so you need to refresh the page manually.

### Limited slot functionality

Right now you can only use the [basics of slots](https://svelte.dev/tutorial/slots), you can't use [named slots](https://svelte.dev/tutorial/named-slots), [slot fallbacks](https://svelte.dev/tutorial/slot-fallbacks), [optional-slots](https://svelte.dev/tutorial/optional-slots) and [slot-props](https://svelte.dev/tutorial/slot-props).

[`sveltekit#627`](https://github.com/sveltejs/kit/issues/627)

### Pass data between page and layout

You can't pass data from a page to its layout or vice versa.
