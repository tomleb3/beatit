import { Fragment, useState } from 'react'
import { PadList } from '../cmps/PadList'
import { padService } from '../services/padService'
import { utilService } from '../services/utilService'

// SVGs -
import playBtnIco from '../assets/imgs/btn-play.svg'
import stopBtnIco from '../assets/imgs/btn-stop.svg'
import recBtnIco from '../assets/imgs/btn-rec.svg'
import clearBtnIco from '../assets/imgs/btn-clear.svg'
import recIndicationIco from '../assets/imgs/rec-indication.svg'


//// To whomever this may concern, I welcome you to my freshly-made "BEAT IT" looper ReactJS app.
//// As I've mentioned in the letter I sent together with the app,
//// the finished product, while mostly operational,
//// resulted in being slightly more complex to understand than I initially intended.
//// Hence, I left comments wherever necessary.
//// Feel free to have a look around :)

export const Home = () => {

    let pads = padService.query()
    const STORAGE_KEY = 'REC'
    const recordingFromStorage = utilService.loadFromStorage(STORAGE_KEY)
    const [activeTrackIds, setActiveTrackIds] = useState([])
    const [isPlaying, toggleIsPlaying] = useState(false)
    const [recSettings, setRecSettings] = useState({
        recIsOn: false,
        iteration: 0,
        recording: recordingFromStorage || []
    })

    const manageQueue = pad => {
        // In charge of dynamically inserting/removing IDs from "activeTrackIds"
        if (activeTrackIds.includes(pad._id)) {
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
    }

    const handleRec = () => {
        // In charge of advancing the iteration count,
        // as well as adding a new activeIds array into the recorded data
        setRecSettings({
            ...recSettings,
            iteration: recSettings.iteration + 1,
            recording: [...recSettings.recording, activeTrackIds]
        })
    }

    const onRecPlayback = () => {
        // In charge of dynamic playback/stop (specifically for the recording)
        if (isPlaying) {
            utilService.saveToStorage(STORAGE_KEY, recSettings.recording)
            return window.location.reload() // temp solution
        }
        setActiveTrackIds(recSettings.recording[recSettings.iteration])
        setRecSettings({ ...recSettings, iteration: recSettings.iteration + 1 })
        setTimeout(() => toggleIsPlaying(true), 5)
    }

    const onClearRec = () => {
        // Clearing from localStorage and re-initializing "recSettings"
        utilService.removeFromStorage(STORAGE_KEY)
        setRecSettings({
            ...recSettings,
            recIsOn: false,
            iteration: 0,
            recording: []
        })
    }

    console.log(activeTrackIds)
    console.log(recSettings)

    return <section className="home-page">
        <PadList pads={pads} activeTrackIds={activeTrackIds} manageQueue={manageQueue} isPlaying={isPlaying}
            toggleIsPlaying={toggleIsPlaying} recSettings={recSettings} handleRec={handleRec} />
        {recSettings.recIsOn && <img src={recIndicationIco} alt="rec-indication" />}
        <div className="global-play-container flex">
            <button onClick={onRecPlayback}>
                {isPlaying ? <img src={stopBtnIco} alt="stop" />
                    : <img src={playBtnIco} alt="play" />}
            </button>
            <button onClick={onToggleRec}>
                <img src={recBtnIco} alt="rec" />
            </button>
            <div className={`play-time-status flex a-center ${isPlaying ? 'active' : ''}`}>
                <span></span>
                {recSettings.recording.length && !recSettings.recIsOn ?
                    <Fragment>
                        <label className="muted">* Recording available</label>
                        <button onClick={onClearRec}>
                            <img src={clearBtnIco} alt="clear" />
                        </button>
                    </Fragment> : null}
            </div>
        </div>
    </section>
}