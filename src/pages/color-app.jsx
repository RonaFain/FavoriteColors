import { ColorList } from '../cmps/color-list'

export function ColorApp() {
    const colors = ['#73A9AD', '#D3CEDF', '#F4BFBF', '#E6BA95', '#8FBDD3', '#F9EBC8', '#CE7BB0', '#87AAAA', '#CAB8FF', '#F6AE99']
    return (
        <section className="color-app">
            <h2>Favorite Colors</h2>
            {colors && <ColorList colors={colors} />}
        </section>
    )
}