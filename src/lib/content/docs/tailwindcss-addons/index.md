---
title: TailwindCSS Addons
---

## How to use it

Add the code below into your `tailwind.config.cjs` file:

```js
const tailwindcssAddons = require('tailwindcss-addons')
const config = {
	presets: [
		tailwindcssAddons(),
	],
}
```

## Options

```js
tailwindcssAddons({
	// Here
})
```

### Default values

```js
const defaultConfig = {
	base: true,
	presets: true,
	utilities: {
		dir: true,
		drag: true,
		flip: true,
		hideShow: true,
		inputResets: true,
		insetCenter: true,
		overflowUnset: true,
		shortPlacements: false,
	},
	variants: {
		notVariants: true,
	},
}
```

### Add or remove option

Use `true` to include and use `false` to exclude.

```js
tailwindcssAddons({
	base: false, // Excluded
	utilities: {
		shortPlacements: true, // Included
	},
})
```
