import { ColorPreview } from './color-preview'

export function ColorList({ colors, onUpdateColor, getMaxVotes}) {
    return (
        <section className="color-list">
            {colors.map(color => {
                return <ColorPreview key={color._id} color={color} onUpdateColor={onUpdateColor} getMaxVotes={getMaxVotes} />
            })}
        </section>
    )
}