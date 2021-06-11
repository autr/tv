import dayjs from 'dayjs'

const year = date => (new Date( date * 1000 )).getFullYear()
const browser = typeof window !== 'undefined' && typeof window.document !== 'undefined'
const posts = (items, y) => {

	// posts to sorted array of years

	if (y == 'all') y = null
	let years = []
	const data = items.filter( item => {
		const year_ = year(item.date)
		if (years.indexOf( year_ ) == -1 && year_) years.push( year_ )
		if ( !y ) return true
		return year_ == parseInt( y ) 
	})
	years.sort( (a,b) => a - b )
	years.push( 'all' )
	years.reverse()
	return { years, data }
}

const isFileType = ( str, file ) => {
	return (file?.item?.mime || '').indexOf(str) != -1
}
const slugify = text => text.toString().toLowerCase()
	.replaceAll(' ', '-')           // Replace spaces with -
	.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
	.replace(/\-\-+/g, '-')         // Replace multiple - with single -

const extractDimensions = (file) => {
	let width, height, ratio
	try {
		if (isFileType('image', file)) {
			const s = file.item.exif[0].ImageSize.split('x')
			width = parseInt( s[0] )
			height = parseInt( s[1] )
		}
		if (isFileType('video', file)) {
			file.item.ffprobe.streams.forEach( stream => {
				if (stream?.width != undefined) width = stream.width
				if (stream?.height != undefined) height = stream.height
			})
		}

		ratio = (height/width)
	} catch(err) {
		console.error( err )
	}
	return { width, height, ratio }
}

const timestamp = ( d, format ) => (dayjs( typeof(d) == 'string' ? new Date(d) : d  * 1000 ).format(format))

const isElectron = e => {
	if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') return true
	if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) return true
	if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) return true
	return false
}

const device = () => {

	// returns 'mobile' tablet' or 'desktop'

	try {
	    const ua = navigator.userAgent;
	    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
	        return 'tablet';
	    }
	    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
	        return 'mobile';
	    }
	} catch(err) {}
    return 'desktop'
}



export default { 
	year, 
	posts, 
	extractDimensions, 
	isFileType, 
	browser, 
	timestamp,
	isElectron,
	device,
	slugify
}