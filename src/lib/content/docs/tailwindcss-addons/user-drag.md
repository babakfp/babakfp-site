---
title: User Drag
---

<script>
	import ClassTable from '$comps/ClassTable.svelte'
	const utilities = {
		'.drag-none': {
			'-webkit-user-drag': 'none',
		},
		'.drag-element': {
			'-webkit-user-drag': 'element',
		},
		'.drag-auto': {
			'-webkit-user-drag': 'auto',
		},
	}
</script>

<ClassTable {utilities} />
