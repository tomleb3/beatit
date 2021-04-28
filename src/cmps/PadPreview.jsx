import { useEffect, useRef } from "react"

export const PadPreview = ({ pad, activeTrackIds, manageQueue,
    isPlaying, toggleIsPlaying, recSettings, handleRec, onRecPlayback }) => {

    let loopFile = useRef()
    const isPadActive = activeTrackIds &&
        activeTrackIds.some(trackId => trackId === pad._id)

    useEffect(() => {
        loopFile.current = new Audio(pad.fileUrl)
        // loopFile.current.onended = onLoopEnd // Determine what happens when track has finished playing
    }, [])

    useEffect(() => {
        // Every time the component re-renders,
        // it checks if there is a loop currently playing,
        // and if the pad associated with the component is on (activeId)
        // ("no current loop" also means the few millisecond break when track ends)
        (async () => {
            if (!isPlaying && isPadActive) {
                loopFile.current.currentTime = 0
                await loopFile.current.play()
                setTimeout(async () => {
                    toggleIsPlaying(true)
                    onLoopEnd()
                    recSettings.recIsOn && handleRec()
                }, 5)
            }
        })()
    })

    const onLoopEnd = () => {
        setTimeout(() => {
            if (recSettings.playbackMode) onRecPlayback()
            setTimeout(() => toggleIsPlaying(false), 5)
            // ^ Sets the state of the parent "Home" component directly. 
            // In most cases could be avoided by simply creating a function in the parent component that does just that, and activating it from child component.
            // Unfortunately, had some issues with that method and this appeared to be the only option to work in this use-case.
        }, loopFile.current.duration * 1000)
    }

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
            <span>{pad.title}</span>
        </button>
    </article>
}