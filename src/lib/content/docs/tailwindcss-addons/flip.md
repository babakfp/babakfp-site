---
title: Flip
---

<script>
	import ClassTable from '$comps/ClassTable.svelte'
	import { cssTransformValue } from '$utils/cssTransformValue.js'
	const utilities = {
		'.flip': {
			'--tw-scale-x': '-1',
			'--tw-scale-y': '-1',
			'transform': cssTransformValue,
		},
		'.flip-x': {
			'--tw-scale-x': '-1',
			'transform': cssTransformValue,
		},
		'.flip-y': {
			'--tw-scale-y': '-1',
			'transform': cssTransformValue,
		},
	}
</script>

<ClassTable {utilities} />
