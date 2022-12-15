## Logic blocks syntax

The current syntax is weird and hard to remember, especially for beginners.

```svelte
{#if}
{:else if}
{:else}
{/if}

{#each}
{/each}

{#await}
{:then} 
{/await}

{#key}
{/key}

{@html}
{@const}
{@debug}
```

Let's use a simple and clean syntax like the example below.

```svelte
{@if}
{@else if}
{@else}
{@endif} // or {@end}

{@each}
{@endeach} // or {@end}

{@await}
{@then} 
{@endawait} // or {@end}

{@key}
{@endkey} // or {@end}

{@html}
{@const}
{@debug}
```
