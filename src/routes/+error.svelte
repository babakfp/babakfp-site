<script>
	import { page } from "$app/stores"
</script>

<div class="grid justify-center text-center">
	<h1 class="text-2xl font-semibold">{$page.status}</h1>
	<p class="mt-2">{$page.error.message}</p>
</div>
