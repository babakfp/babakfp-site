## Dynamic classes

```svelte
<div class:bg-brand={condition} />
```

- ❌ It's not standard because classes need to be added after the `=`.
- ❌ Can't use multiple classes so you need to use a different syntax for adding multiple classes.

```svelte
<div class={condition ? 'bg-brand rotate-45' : ''} />
<div class="{condition ? 'bg-brand rotate-45' : ''} text-white" />
```

- ✅ You can use multiple classes.
- ❌ Boilerplate.

```svelte
<div class="{condition && 'bg-brand rotate-45'} text-white" />
```

- ✅ Clean.
- ✅ You can use multiple classes.
- ❌ If the condition doesn't pass, then a `false` class gets added.

### What is the solution?

It's simple, just don't add the `false` class if we use this syntax:

```svelte
<div class={condition && 'bg-brand rotate-45'} />
<div class="text-white {condition && 'bg-brand rotate-45'}" />
```

Deprecate this syntax in Svelte v4:

```svelte
class:<class>={<condition>}
```
