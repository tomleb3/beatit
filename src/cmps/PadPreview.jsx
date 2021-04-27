import { useEffect, useRef } from "react"

export const PadPreview = ({ pad, activeTrackIds, manageQueue,
    isPlaying, toggleIsPlaying, recSettings, handleRec }) => {

    let loopFile = useRef()
    const isPadActive = activeTrackIds &&
        activeTrackIds.find(trackId => trackId === pad._id)

    useEffect(() => {
        loopFile.current = new Audio(pad.fileUrl)
        loopFile.current.onended = onLoopEnd // Determine what happens when track has finished playing
    }, [])

    useEffect(() => {
        // Every time the component re-renders,
        // it checks if there is a loop currently playing,
        // and if the pad associated with the component is on (activeId)
        // (no current loop also means the few millisecond break when track ends)
        (async () => {
            if (!isPlaying && isPadActive) {
                loopFile.current.currentTime = 0
                await loopFile.current.play()
                setTimeout(() => {
                    toggleIsPlaying(true)
                    recSettings.recIsOn && handleRec()
                }, 5) // ( setTimeout needed for progress-bar & handleRec ) - possibly related to small delay resulted in setting the relevant states
            }
        })()
    })

    const onLoopEnd = () => toggleIsPlaying(false)
    // ^ Sets the state of the parent "Home" component directly. 
    // In most cases could by avoided by simply creating a function in the parent component that does just that and activating it from child component.
    // Unfortunately, had some issues with that method and this appeared to be the only thing to work in this use-case.

    const onTogglePlay = async () => {
        // In charge of dynamically adding the pad to activeIds / or stopping the track immediately and removing it from activeIds.
        // Happens when manually clicking on pad.
        if (isPadActive) {
            loopFile.current.pause()
            loopFile.current.currentTime = 0
            toggleIsPlaying(false)
        }
        manageQueue(pad)
    }

    return <article className={`pad-preview ${isPadActive ? 'active' : ''}`}>
        <button onClick={onTogglePlay} style={{ backgroundColor: pad.bgc }}>
            {/* <span>{pad.title}</span> */}
        </button>
    </article>
}