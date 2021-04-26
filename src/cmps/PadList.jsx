import { PadPreview } from './PadPreview.jsx'

export const PadList = ({ pads, activeTracks, manageQueue, isLoopRunning, toggleLoopRunning }) => {

    return <section className="pad-list main-layout">
        {pads.map(pad => {
            return <PadPreview key={pad._id} pad={pad} activeTracks={activeTracks} manageQueue={manageQueue}
                isLoopRunning={isLoopRunning} toggleLoopRunning={toggleLoopRunning} />
        })}
    </section>
}