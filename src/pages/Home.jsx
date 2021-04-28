import { Fragment, useState } from 'react'
import { PadList } from '../cmps/PadList'
import { padService } from '../services/padService'
import { utilService } from '../services/utilService'

//// Welcome to my freshly-made "BEAT IT" looper ReactJS app.
//// As I've mentioned in the letter I sent together with the app,
//// the finished product, while operational,
//// resulted in being slightly more complex than I initially intended.
//// Hence, I left comments wherever necessary.
//// Feel free to have a look around :)

export const Home = () => {

    let pads = padService.query()
    const STORAGE_KEY = 'REC'
    const seekAnimDuration = 8.045688
    const svgBaseUrl = `${process.env.PUBLIC_URL}/assets/imgs/`
    const recordingFromStorage = utilService.loadFromStorage(STORAGE_KEY)
    const [activeTrackIds, setActiveTrackIds] = useState([])
    const [isPlaying, toggleIsPlaying] = useState(false)
    const [recSettings, setRecSettings] = useState({
        recIsOn: false,
        playbackMode: false,
        iteration: 0,
        recording: recordingFromStorage || []
    })

    const manageQueue = pad => {
        // In charge of dynamically inserting/removing IDs from "activeTrackIds"
        if (activeTrackIds && activeTrackIds.includes(pad._id)) {
            setActiveTrackIds(activeTrackIds.filter(padId => {
                return padId !== pad._id
            }))
        }
        else setActiveTrackIds([...activeTrackIds, pad._id])
    }

    // From this point on, all 4 remaining function deal only with recording logic
    const onToggleRec = () => {
        setRecSettings({
            ...recSettings,
            recIsOn: !recSettings.recIsOn,
            iteration: 0
        })
        utilService.saveToStorage(STORAGE_KEY, recSettings.recording)
    }

    const handleRec = () => {
        // In charge of advancing the iteration count,
        // as well as adding a new activeIds array into the recorded data
        setRecSettings({
            ...recSettings,
            iteration: recSettings.iteration + 1,
            recording: [...recSettings.recording, activeTrackIds]
            // ^ Adds an array with the active tracks into the recording array at every iteration,
            // resulting in a 2D array
        })
    }

    const onRecPlayback = () => {
        // In charge of dynamic playback/stop (specifically for the recording)
        if (isPlaying) return window.location.reload() // temp solution
        setRecSettings({
            ...recSettings,
            playbackMode: recSettings.iteration !== recSettings.recording.length,
            iteration: (recSettings.iteration >= recSettings.recording.length) ?
                0 : recSettings.iteration + 1
            // ^ This condition allows for recording to be replayed more than once by resetting the iteration count
        })
        setActiveTrackIds(recSettings.recording[recSettings.iteration])
        setTimeout(() => toggleIsPlaying(true), 5)
    }

    const onClearRec = () => {
        // Clearing from localStorage and re-initializing "recSettings"
        utilService.removeFromStorage(STORAGE_KEY)
        setRecSettings({
            ...recSettings,
            recIsOn: false,
            playbackMode: false,
            iteration: 0,
            recording: []
        })
    }

    console.log(recSettings.iteration)
    return <section className="home-page">
        <PadList pads={pads} activeTrackIds={activeTrackIds} manageQueue={manageQueue} isPlaying={isPlaying}
            toggleIsPlaying={toggleIsPlaying} recSettings={recSettings} handleRec={handleRec} onRecPlayback={onRecPlayback} />
        {recSettings.recIsOn && <img src={`${svgBaseUrl}rec-indication.svg`} alt="rec-indication" />}
        <div className="global-play-container flex">
            <button onClick={onRecPlayback}>
                {isPlaying ? <img src={`${svgBaseUrl}btn-stop.svg`} alt="stop" />
                    : <img src={`${svgBaseUrl}btn-play.svg`} alt="play" />}
            </button>
            <button className={recSettings.playbackMode ? 'disabled' : ''}
                onClick={!recSettings.playbackMode && onToggleRec}>
                <img src={`${svgBaseUrl}btn-rec.svg`} alt="rec" />
            </button>
            <div className={`play-time-status flex a-center ${isPlaying ? 'active' : ''}`}>
                <span style={{
                    animationDuration: `${seekAnimDuration * recSettings.recording.length}s`,
                    animationDelay: `${-seekAnimDuration * (recSettings.iteration - 1)}s`
                }}></span>
                {recSettings.recording.length && !recSettings.recIsOn ?
                    <Fragment>
                        <label className={`muted ${recSettings.playbackMode ? 'playback-mode' : ''}`}>
                            {recSettings.playbackMode ? 'PLAYING RECORDING' : '* Recording available'}
                        </label>
                        <button onClick={onClearRec}>
                            <img src={`${svgBaseUrl}btn-clear.svg`} alt="clear" />
                        </button>
                    </Fragment> : null}
            </div>
        </div>
    </section>
}