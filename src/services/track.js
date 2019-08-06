import platziMusicService from './platzi-music'
const trackService = {}

trackService.search = function (q) { //q es un estandar para query
    const type = 'track'
    return platziMusicService.get('/search', { // /search es el endpoint
        params: {
            q: q,
            type: type
        }
    }).then((res) => res.data)
}

export default trackService