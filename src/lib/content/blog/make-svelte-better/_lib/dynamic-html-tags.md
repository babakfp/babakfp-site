## Dynamic HTML tags

This feature is now available 👏.

```svelte
<script>
  let tag = 'div'
</script>

<svelte:element this={tag}>
  ...
</svelte:element>
```

---

Change the `this` prop name to `tag`, because what if we also want to bind the element to a variable? Example:

```svelte
<script>
  let tag = 'div'
  let element
</script>

<svelte:element
	this={tag}
	bind:this={element}
>
  ...
</svelte:element>
```

It works, but it looks like we accidentally added a prop twice!
