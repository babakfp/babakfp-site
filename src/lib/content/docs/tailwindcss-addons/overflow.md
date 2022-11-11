---
title: Overflow Unset
---

<script>
	import ClassTable from '$comps/ClassTable.svelte'
	const utilities = {
		'.overflow-unset': {
			'overflow': 'unset',
		},
		'.overflow-y-unset': {
			'overflow-y': 'unset',
		},
		'.overflow-x-unset': {
			'overflow-x': 'unset',
		},
	}
</script>

<ClassTable {utilities} />
