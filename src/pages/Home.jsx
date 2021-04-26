import { useState } from 'react'
import { PadList } from '../cmps/PadList'
import { padService } from '../services/padService'

export const Home = () => {

    let pads = padService.query()
    const [activeTracks, setActiveTracks] = useState([])
    const [isLoopRunning, toggleLoopRunning] = useState(false)

    const manageQueue = pad => {
        if (activeTracks.includes(pad._id)) {
            setActiveTracks(activeTracks.filter(padId => {
                return padId !== pad._id
            }))
        }
        else setActiveTracks([...activeTracks, pad._id])
    }

    return <section className="home-page">
        <PadList pads={pads} activeTracks={activeTracks} manageQueue={manageQueue}
            isLoopRunning={isLoopRunning} toggleLoopRunning={toggleLoopRunning} />
        <div className="global-play-container">
            <button>
                {activeTracks.length ? <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 480 480" xmlSpace="preserve" height="40px" width="40px">
                    <path d="M240,0C107.452,0,0,107.452,0,240s107.452,240,240,240c132.486-0.15,239.85-107.514,240-240C480,107.452,372.548,0,240,0z
			 M240,464C116.288,464,16,363.712,16,240S116.288,16,240,16c123.653,0.141,223.859,100.347,224,224
			C464,363.712,363.712,464,240,464z"/>
                    <path d="M200,136c-4.418,0-8,3.582-8,8v192c0,4.418,3.582,8,8,8s8-3.582,8-8V144C208,139.582,204.418,136,200,136z" />
                    <path d="M280,136c-4.418,0-8,3.582-8,8v192c0,4.418,3.582,8,8,8s8-3.582,8-8V144C288,139.582,284.418,136,280,136z" />
                </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 512 512" xmlSpace="preserve" height="40px" width="40px">
                        <path d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M256,490.667
				C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
				z"/>
                        <path d="M357.771,247.031l-149.333-96c-3.271-2.135-7.5-2.25-10.875-0.396C194.125,152.51,192,156.094,192,160v192
				c0,3.906,2.125,7.49,5.563,9.365c1.583,0.865,3.354,1.302,5.104,1.302c2,0,4.021-0.563,5.771-1.698l149.333-96
				c3.042-1.958,4.896-5.344,4.896-8.969S360.813,248.99,357.771,247.031z M213.333,332.458V179.542L332.271,256L213.333,332.458z"
                        />
                    </svg>}
            </button>
            <button>
                <svg height="40px" viewBox="0 0 512 512" width="40px" xmlns="http://www.w3.org/2000/svg">
                    <path d="m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0" fill="#e76e54" />
                    <path d="m384 256c0 70.691406-57.308594 128-128 128s-128-57.308594-128-128 57.308594-128 128-128 128 57.308594 128 128zm0 0" fill="#dd523c" /></svg>
            </button>
            <div className="play-time-status"></div>
        </div>
    </section>
}