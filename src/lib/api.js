const get = async ( urls, fetch ) => {
	if (typeof(url) == 'string') urls = { data: urls }
	let data = {}
	const keys = Object.keys( urls )
	for (let i = 0; i < keys.length; i++ ) {
		const key = keys[i]
		const url = urls[key]
		const res = await fetch(url)
		if (res.ok) {
			data[key] = await res.json()
		} else {
			return { error: new Error( data )  }
		}
	}
	return data
}

const filterPost = post => {
	const { date, text, media, embed, id } = post
	return { date, text, media, embed, id }

}
const feed = async fetch => {
	let data = await get( { posts: '/posts.json' }, fetch )
	return data.posts.filter( p => {
		return p.status == 'published'
	}).sort( (a,b) => {
		return b.date - a.date
	}).map( filterPost )
}

const products = async fetch => {
	let {products} = await get( { products: '/products.json' }, fetch )
	return products.filter( p => {
		return p.status == 'published'
	}).sort( (a,b) => {
		return b.date - a.date
	})
}

const post = async (params, fetch) => {

	const { year, id } = params


	let posts = await feed( fetch )

	const post = posts.find( p => p.id == id )
	const idx = posts.indexOf( posts.sort( (a,b) => {
		return b.date - a.date 
	}).find( item => item.id == post.id ) )


	let prev = idx == 0 ? posts.length - 1 : idx - 1
	let next = idx >= posts.length - 1 ? 0 : idx + 1
	let random = Math.round( Math.random() * (posts.length - 1) )

	prev = { ...posts[prev], hyperlink: 'prev' }
	next = { ...posts[next], hyperlink: 'next' }
	random = { ...posts[random], hyperlink: 'random' }

	return { post: post, prev, next, random }
}

const api = {
	get,
	feed,
	post,
	products
}

export default api
