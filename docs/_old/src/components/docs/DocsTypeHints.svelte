<script>
    export let types = [];
</script>

<small class="d-block">
    {#each types as hint}
        <pre><code>{hint}</code></pre>
    {/each}
</small>