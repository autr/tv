<script>
    import { page } from '$app/stores'
    import { PKG } from '$lib/_stores.js'

    import Mail from '$lib/Mail.svelte'
    import ListSignup from '$lib/ListSignup.svelte'
    import Title from '$lib/Title.svelte'


    export let social = {
        instagram: 'https://instagram.com/autr.tv',
        vimeo: 'https://vimeo.com/autr',
        github: 'https://github.com/autr',
        facebook: 'https://facebook.com/autr.tv',
        email: 'mailto:ping@autr.tv'
    }

    const colours = {
        instagram: '#ffdc7d', // #c32aa3
        vimeo: '#7cd1ec', // #1ab7ea
        facebook: '#b7a896', //'#8ebfff' // #1877f2
        github: '#e6e6e6', // #e84312
        email: '#e6e6e6', // #e84312
    }
    let active, timeout

    function onHover( o ) {
        if (timeout) clearTimeout( timeout )
            console.log(o, '!!!')
        active = o
        timeout = setTimeout( e => active = null, 1000 )
    }

    $: mail = {
        type: 'mail',
        width: 20,
        height: 20,
        stroke: 2
    }

    const stylee = 'margin-top:-1px'
    const link = 'bb'

    const button = 'ptb1 sm-max-grow sm-max-100 unclickable bb' // b1-solid text-center 
    $: col = 'flex sm-max-100 grow no-basis wrap'

</script>

<div 
    id="footer" 
    class="flex bt row-space-between-center wrap m1 mt0 sm-max-column safari-only sm-max-none">
    <div class="{col} row-flex-start-center sm-max-column">
        <a style={stylee} class="{button}" href="/sitemap">sitemap</a>
        <span class="w1em" />
        <a style={stylee} class="{button}" href="/rss.xml">rss</a>
    </div>
    <div class="{col} row-center-center sm-max-none">
        <span class="mr0-5" >Gilbert Sinnott { (new Date()).getFullYear() } </span>
        <a class="{link}" href="/version">v{$PKG?.version || ''}</a>
    </div>
    <div class="{col} row-flex-end-center">
        <Mail style={stylee} class="{button}" />
        <span class="w1em" />
        <a style={stylee} class="{button}" href="/subscribe">mailing list</a>
    </div>
    
</div>

<div 
    class:none={$page.path == '/subscribe'}
    id="mobile-footer" 
    class="plr1 flex column sm-max-100 sm-min-none safari-only">
    <Title>Mailing list</Title>
    <span class="h1em" />
    <ListSignup />
</div>
