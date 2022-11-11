---
title: Inset Center
---

<script>
	import ClassTable from '$comps/ClassTable.svelte'
	import { cssTransformValue } from '$utils/cssTransformValue.js'
	const utilities = {
		'.inset-center': {
			'top': '50%',
			'right': '50%',
			'--tw-translate-x': '50%',
			'--tw-translate-y': '-50%',
			'transform': cssTransformValue,
		},
		'.inset-x-center': {
			'right': '50%',
			'--tw-translate-x': '50%',
			'transform': cssTransformValue,
		},
		'.inset-y-center': {
			'top': '50%',
			'--tw-translate-y': '-50%',
			'transform': cssTransformValue,
		},
	}
</script>

<ClassTable {utilities} />
