import { httpService } from './http.service'

export const colorService = {
    query,
    update
}

async function query() {
    return await httpService.get('color')
}

async function update(color) {
    return await httpService.put('color', color)
}