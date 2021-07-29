<script context="module">
    import api from '$lib/api.js'
    export const load = async ({ fetch, page }) => {
        let tags = []
        let products = await api.products( fetch )
        products.forEach( p => {
            (p.tags || '').split(',').forEach( t => {
                t = t.trim()
                if (tags.indexOf(t) == -1) tags.push(t)
            })
        })
        return { props: { tags } }
    }
</script>



<script>
    import { Filters } from '$lib'
    export let tags = []



</script>

<Filters items={tags} root="/shop">
    <div>
        Login / Cart
    </div>
</Filters>

<slot />