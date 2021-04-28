import { useEffect, useRef } from "react"

export const PadPreview = ({ pad, activeTrackIds, manageQueue,
    isPlaying, toggleIsPlaying, recSettings, handleRec, onRecPlayback }) => {

    let loopFile = useRef()
    const isPadActive = activeTrackIds &&
        activeTrackIds.some(trackId => trackId === pad._id)

    useEffect(() => {
        loopFile.current = new Audio(pad.fileUrl)
        if (!recSettings.playbackMode)
            loopFile.current.onended = () => toggleIsPlaying(false)
        // ^ Sets the state of the parent "Home" component directly. 
        // In most cases could be avoided by simply creating a function in the parent component that does just that, and activating it from child component.
        // Unfortunately, had some issues with that method and this appeared to be the only option to work in this use-case.
    }, [])

    useEffect(() => {
        // Every time the component re-renders,
        // it checks if there is a loop currently playing,
        // and if the pad associated with the component is on (activeId)
        // ("no current loop" also means the few millisecond break when track ends)
        setTimeout(async () => {
            if (!isPlaying && isPadActive) {
                toggleIsPlaying(true)
                loopFile.current.currentTime = 0
                await loopFile.current.play()
                recSettings.recIsOn && handleRec()
                if (recSettings.playbackMode) managePlayBackLoop()
            }
        }, 5)
    })

    const managePlayBackLoop = () => {
        setTimeout(() => onRecPlayback(), loopFile.current.duration * 1000)
    }

    const onTogglePlay = async () => {
        // In charge of dynamically adding the pad to activeIds / or stopping the track immediately and removing it from activeIds.
        // Happens when manually clicking on pad.
        if (recSettings.playbackMode) return
        if (isPadActive) {
            loopFile.current.pause()
            loopFile.current.currentTime = 0
            toggleIsPlaying(false)
        }
        manageQueue(pad)
    }

    return <article className={`pad-preview ${isPadActive ? 'active' : recSettings.playbackMode ? 'disabled' : ''}`}>
        <button onClick={onTogglePlay} style={{ backgroundColor: pad.bgc }}>
            <span>{pad.title}</span>
        </button>
    </article>
}