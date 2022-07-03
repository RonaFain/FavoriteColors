import { ColorPreview } from './color-preview'

export function ColorList({ colors }) {
    return (
        <section className="color-list">
            {colors.map(color => {
                return <ColorPreview key={color} color={color} />
            })}
        </section>
    )
}