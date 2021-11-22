

export const get = async ( { host, method, path, query, params, locals } ) => {
	const extended = `http://localhost:3000/api/items/${params.bridge.replaceAll('~','/')}?depth=2`
	console.log('[bridge] ->', extended)
	const res = await fetch( extended )

	console.log(`[bridge] requesting ${extended}`)

	let json = await res.text()
	try { json = JSON.parse(json) } catch(err) { json = { text: json } }
	return {
		status: res.status,
		body: json
	}
}