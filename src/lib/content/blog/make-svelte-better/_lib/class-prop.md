## `class` prop

I don't know about the technical things. Let's think about the simplest thing that the compiler can do. So, I'm a compiler and I look at this component:

```svelte
<script>
	import MyComponent from './MyComponent.svelte'
</script>

<MyComponent class="my-class" />

<style>
	.my-class {
		display: block;
	}
</style>
```

... and I see that there is a component with a prop named `class`. So, now I know that this is a class attribute. Now I need to don't remove the `.my-class` styles and also make it scoped like a normal class attribute.
