import { PadPreview } from './PadPreview.jsx'

export const PadList = ({ pads, activeTrackIds, manageQueue,
    isPlaying, toggleIsPlaying, recSettings, handleRec }) => {

    return <section className="pad-list main-layout">
        {pads.map(pad => {
            return <PadPreview key={pad._id} pad={pad} activeTrackIds={activeTrackIds} manageQueue={manageQueue}
                isPlaying={isPlaying} toggleIsPlaying={toggleIsPlaying} recSettings={recSettings} handleRec={handleRec} />
        })}
    </section>
}