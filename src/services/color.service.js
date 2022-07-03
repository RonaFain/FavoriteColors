import { storageService } from './async-storage.service'
const STORAGE_KEY = 'color'

// const color1 = {color: '#73A9AD', voteCount: 10}
// const color2 = {color: '#D3CEDF', voteCount: 10}
// const color3 = {color: '#F4BFBF', voteCount: 30}
// const color4 = {color: '#E6BA95', voteCount: 40}
// const color5 = {color: '#8FBDD3', voteCount: 50}
// const color6 = {color: '#F9EBC8', voteCount: 80}
// const color7 = {color: '#CE7BB0', voteCount: 60}
// const color8 = {color: '#87AAAA', voteCount: 70}
// const color9 = {color: '#CAB8FF', voteCount: 90}
// const color10 = {color: '#F6AE99', voteCount: 10}

// storageService.post(STORAGE_KEY, color1)
// storageService.post(STORAGE_KEY, color2)
// storageService.post(STORAGE_KEY, color3)
// storageService.post(STORAGE_KEY, color4)
// storageService.post(STORAGE_KEY, color5)
// storageService.post(STORAGE_KEY, color6)
// storageService.post(STORAGE_KEY, color7)
// storageService.post(STORAGE_KEY, color8)
// storageService.post(STORAGE_KEY, color9)
// storageService.post(STORAGE_KEY, color10)

export const colorService = {
    query,
    update
}

async function query() {
    return await storageService.query(STORAGE_KEY)
}

async function update(color) {
    color.voteCount++
    return await storageService.put(STORAGE_KEY, color)
}