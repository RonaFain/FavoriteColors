export function ProgressBar({ completed, getMaxVotes}) {
    const maxRange = getMaxVotes()
    
    return (
        <section className="progress-bar">
            <div className="progress-container">
                <div className="progress-filter" style={{width: `${200 * completed / maxRange}px`}}>
                    <span className="progress-label">{completed}</span>
                </div>
            </div>
        </section>
    )
}