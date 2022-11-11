---
title: Hide & Show
---

<script>
	import ClassTable from '$comps/ClassTable.svelte'
	const utilities = {
		'.hide': {
			'visibility': 'hidden',
			'opacity': '0',
			'pointer-events': 'none',
		},
		'.show': {
			'visibility': 'visible',
			'opacity': '1',
			'pointer-events': 'auto',
		},
	}
</script>

<ClassTable {utilities} />
