<script>
	export let isVisible = false
</script>

<div
	class="
		z-40 | fixed inset-0 | bg-gray-800/50 backdrop-blur | duration-300 ease-in-out
		hide {isVisible && 'show'}
		xl:hidden
	"
/>
