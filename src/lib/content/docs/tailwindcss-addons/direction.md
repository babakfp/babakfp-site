---
title: Direction
---

<script>
	import ClassTable from '$comps/ClassTable.svelte'
	const utilities = {
		'.dir-rtl': {
			'direction': 'rtl',
		},
		'.dir-ltr': {
			'direction': 'ltr',
		},
	}
</script>

<ClassTable {utilities} />
