import { ProgressBar } from './progress-bar'

export function ColorPreview({ color, onUpdateColor, getMaxVotes }) {
    return(
        <section className="color-preview" style={{backgroundColor: color.color}} onClick={() => onUpdateColor(color)} >
            <ProgressBar completed={color.voteCount} getMaxVotes={getMaxVotes} />
        </section>
    )
}