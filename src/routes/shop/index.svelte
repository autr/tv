<script context="module">
    import api from '$lib/api.js'
    export const load = async ({ fetch, page }) => {
        return { props: { products: await api.products( fetch ) } }
    }
</script>


<script>
    import { Media, utils } from 'ezekit'
    export let products = []
</script>


<div class="flex row wrap ptb1">
    {#each products.concat(products) as product}
        <div style="flex-basis:33.333%" class="minw18em grow">
            <Media 
                file={product.media[0]}
                format="996x0x95xfit"
                root="/products/" />
        </div>
    {/each}
</div>