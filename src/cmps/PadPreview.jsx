import { useEffect, useRef, useState } from "react"

export const PadPreview = ({ pad, activeTracks, manageQueue, isLoopRunning, toggleLoopRunning }) => {

    let loopFile = useRef()
    const [isPlaying, toggleIsPlaying] = useState(false)

    useEffect(() => {
        loopFile.current = new Audio(pad.fileUrl)
        loopFile.current.onended = onLoopEnd
    }, [])

    useEffect(() => {
        if (!isLoopRunning && activeTracks.find(track => track === pad._id)) {
            loopFile.current.currentTime = 0;
            (async () => await loopFile.current.play())()
            toggleLoopRunning(true)
        }
    })

    const onLoopEnd = () => toggleLoopRunning(false)

    const onTogglePlay = async () => {
        if (isPlaying) {
            loopFile.current.pause()
            loopFile.current.currentTime = 0
            toggleLoopRunning(false)
        }
        toggleIsPlaying(!isPlaying)
        manageQueue(pad)
    }

    return <article className={`pad-preview${isPlaying ? ' active' : ''}`}>
        <button onClick={onTogglePlay} style={{ backgroundColor: pad.bgc }}>
            <span>{pad.title}</span>
        </button>
    </article>
}