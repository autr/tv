<script>
    import { getStores, navigating, page, session } from '$app/stores';
    export let root = '/filters/'
    export let items = []

    console.log($page, $session)

    let classes = {
        a: 'no-basis unclickable flex row-center-center ptb1 mr1 f0',
        span: 'p0-4 block bb br bt bl radius1em mr1'
    }

</script>
<nav id="nav-filters" class="flex row-space-between-center bb wrap">
    <div class="flex row wrap rel grow">
        <a 
            class={classes.a}
            href="{root}">
            <span 
                class={classes.span} 
                class:filled={$page.path==root} />
            latest
        </a>
        {#each items as item}
            <a 
                class={classes.a}
                href="{root}/{item}">
                <span 
                    class={classes.span} 
                    class:filled={$page.path==`${root}/${item}`}/>
                {item}
            </a>
        {/each}
    </div>
    <slot />
</nav>