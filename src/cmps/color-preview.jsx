import { ProgressBar } from './progress-bar'

export function ColorPreview({ color }) {
    return(
        <section className="color-preview" style={{backgroundColor: color}}>
            <ProgressBar />
        </section>
    )
}