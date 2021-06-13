import { writable } from 'svelte/store'

export const DARKMODE = writable( false )
export const SCROLLER = writable( {} )
export const CENTROID = writable( {} )
export const BURGERMODE = writable( false )
export const COPYING = writable( false )
export const PKG = writable( {} )
export const INFOS = writable( {} )
export const DATEFMT = writable( 'DD-MM-YYYY' )
export const AUTOPLAYING = writable( false )
export const CONTROLS = writable( false )
export const MUTED = writable( false )
export const EZE = writable( { api: '', project: '' } )