---
title: Short Placements
---

<script>
	import ClassTable from '$comps/ClassTable.svelte'
	const justifyContent = {
		'.jc-start':		{ 'justify-content': 'flex-start' },
		'.jc-end':			{ 'justify-content': 'flex-end' },
		'.jc-center':		{ 'justify-content': 'center' },
		'.jc-between':	{ 'justify-content': 'space-between' },
		'.jc-around':		{ 'justify-content': 'space-around' },
		'.jc-evenly':		{ 'justify-content': 'space-evenly' },
	}
	const justifyItems = {
		'.ji-start':		{ 'justify-items': 'start' },
		'.ji-end':			{ 'justify-items': 'end' },
		'.ji-center':		{ 'justify-items': 'center' },
		'.ji-stretch':	{ 'justify-items': 'stretch' },
	}
	const justifySelf = {
		'.js-auto':			{ 'justify-self': 'auto' },
		'.js-start':		{ 'justify-self': 'start' },
		'.js-end':			{ 'justify-self': 'end' },
		'.js-center':		{ 'justify-self': 'center' },
		'.js-stretch':	{ 'justify-self': 'stretch' },
	}
	const alignContent = {
		'.ac-center':		{ 'align-content': 'center' },
		'.ac-start':		{ 'align-content': 'flex-start' },
		'.ac-end':			{ 'align-content': 'flex-end' },
		'.ac-between':	{ 'align-content': 'space-between' },
		'.ac-around':		{ 'align-content': 'space-around' },
		'.ac-evenly':		{ 'align-content': 'space-evenly' },
	}
	const alignItems = {
		'.ai-start':		{ 'align-items': 'flex-start' },
		'.ai-end':			{ 'align-items': 'flex-end' },
		'.ai-center':		{ 'align-items': 'center' },
		'.ai-baseline':	{ 'align-items': 'baseline' },
		'.ai-stretch':	{ 'align-items': 'stretch' },
	}
	const alignSelf = {
		'.as-auto':			{ 'align-self': 'auto' },
		'.as-start':		{ 'align-self': 'flex-start' },
		'.as-end':			{ 'align-self': 'flex-end' },
		'.as-center':		{ 'align-self': 'center' },
		'.as-stretch':	{ 'align-self': 'stretch' },
		'.as-baseline':	{ 'align-self': 'baseline' },
	}
	const placeContent = {
		'.pc-center':		{ 'place-content': 'center' },
		'.pc-start':		{ 'place-content': 'start' },
		'.pc-end':			{ 'place-content': 'end' },
		'.pc-between':	{ 'place-content': 'space-between' },
		'.pc-around':		{ 'place-content': 'space-around' },
		'.pc-evenly':		{ 'place-content': 'space-evenly' },
		'.pc-stretch':	{ 'place-content': 'stretch' },
	}
	const placeItems = {
		'.pi-start':		{ 'place-items': 'start' },
		'.pi-end':			{ 'place-items': 'end' },
		'.pi-center':		{ 'place-items': 'center' },
		'.pi-stretch':	{ 'place-items': 'stretch' },
	}
	const placeSelf = {
		'.ps-auto':			{ 'place-self': 'auto' },
		'.ps-start':		{ 'place-self': 'start' },
		'.ps-end':			{ 'place-self': 'end' },
		'.ps-center':		{ 'place-self': 'center' },
		'.ps-stretch':	{ 'place-self': 'stretch' },
	}
</script>

This feature will replace all Tailwind (`justify-content`, `justify-items`, `justify-self`, `align-content`, `align-items`, `align-self`, `place-content`, `place-items`, `place-self`) classes.

## Justify Content

<ClassTable utilities={justifyContent} />

## Justify Items

<ClassTable utilities={justifyItems} />

## Justify Self

<ClassTable utilities={justifySelf} />

## Align Content

<ClassTable utilities={alignContent} />

## Align Items

<ClassTable utilities={alignItems} />

## Align Self

<ClassTable utilities={alignSelf} />

## Place Content

<ClassTable utilities={placeContent} />

## Place Items

<ClassTable utilities={placeItems} />

## Place Self

<ClassTable utilities={placeSelf} />
