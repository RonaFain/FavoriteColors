import { httpService } from './http.service'

// import { storageService } from './async-storage.service'
// const STORAGE_KEY = 'color'

export const colorService = {
    query,
    update
}

async function query() {
    // return await storageService.query(STORAGE_KEY)
    return await httpService.get('color')
}

async function update(color) {
    // return await storageService.put(STORAGE_KEY, color)
    return await httpService.put('color', color)
}