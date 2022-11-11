---
title: Not Variants
---

<script>
	import ClassTable from '$comps/ClassTable.svelte'
	const utilities = {
		'.not-first': {
			'&:not(:first-child)': '',
		},
		'.not-last': {
			'&:not(:last-child)': '',
		},
		'.not-first-of-type': {
			'&:not(:first-of-type)': '',
		},
		'.not-last-of-type': {
			'&:not(:last-of-type)': '',
		},
	}
</script>

<ClassTable {utilities} />
