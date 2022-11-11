## `$alias`

We use the `$` symbol for stores, so I think it will be confusing for beginners if we also use it in aliases. Some may try using a store variable like this:

```js
import { readable } from 'svelte/store'
const components = readable('/src/lib/components')
import MyComponent from '$components/MyComponent.svelte'
```

Let's use the same `@` syntax here too:

```svelte
<script>
  import MyComponent from '@components/MyComponent.svelte'
</script>
```

This will make Brittney so happy😄.
