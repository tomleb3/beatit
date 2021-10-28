import { NavLink } from 'react-router-dom'
import Modal from 'react-modal'
import { useState } from 'react'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

export const AppHeader = () => {

    // Related to modal library
    const [modalIsOpen, setModalOpen] = useState(false)
    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

    return <header className="app-header">
        <section className="main-layout flex j-between a-center">
            <NavLink to="/" className="logo flex a-center">
                <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="" />
                <label>BEAT IT</label>
            </NavLink>
            <nav>
                <button onClick={openModal}>
                    <svg className="help-btn-svg" viewBox="-30 -210 2570 2248" height="3.15em" width="3.15em">
                        <g transform="matrix(1 0 0 -1 0 1638)">
                            <path fill="white" d="M1073 536v-47h228v31q0 73 28 123q29 50 146 146q60 49 100 85.5t60 62.5q42 53 62 111.5t20 141.5q0
                         89 -31 160t-91.5 120.5t-149 76t-203.5 26.5q-203 0 -436 -122l86 -189q216 103 346 103q103 0 162
                          -50.5t59 -141.5q0 -85 -35 -143q-17 -30 -56 -68t-101 -87 q-57 -45 -95 -85.5t-58 -79.5q-41 -79
                           -41 -174zM1381 520v-110h-387v126q0 114 47 205q25 47 69 95t109 101q100 80 122 109t31 59t9
                            68q0 50 -34 82.5t-109 31.5q-36 0 -75.5 -8.5t-81.5 -22.5q-42 -15 -98 -39.5t-128 -59.5l-152
                             326q299 169 539 169q257 0 405 -124 q75 -63 112.5 -146t37.5 -192q0 -137 -59 -238q-29 -51
                              -82.5 -106.5t-132.5 -117.5q-49 -39 -79 -68t-41 -46q-12 -17 -17 -41t-5 -53zM1201 210q-166
                               0 -166 -158q0 -44 12.5 -74.5t34.5 -49.5t52 -27.5t65 -8.5q81 0 123 42.5t42 117.5q0 158
                                -163 158zM1201 -186 q-115 0 -180.5 61.5t-65.5 176.5t66 175.5t178 60.5q116 0 180.5
                                 -62t64.5 -174q0 -54 -16.5 -98t-48 -75t-76.5 -48t-102 -17z" />
                        </g>
                    </svg>
                </button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Help Modal"
                    ariaHideApp={false}
                >
                    <div className="help-modal-content">
                        <h3>BEAT IT</h3>
                        <div className="instructions">
                            <label>- Instructions</label>
                            <p>
                                * Press any pad to activate it.<br />
                                * Activate more pads and they will start playing as soon as the loop ends.<br />
                                * You can record your session with the record button on the bottom.<br />
                                * Start recording before activating a pad so that the first iteration will get recorded as well.<br />
                                * You can stop the recording at any point during the loop's playback,<br />
                                as it will still capture the entire loop<br />
                                * Your recording will remain saved on your next visits as well,<br />
                                until you remove it using the trash-can icon on the bottom.<br />
                                * If you start the recording while a former recording is still stored,<br />
                                it will add your new recording to the old one.
                        </p>
                        </div>
                        <span>Enjoy!</span>
                        <button className="right" onClick={closeModal}>Close</button>
                    </div>
                </Modal>
                <a href="https://github.com/tomleb3/beatit">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                        strokeLinejoin="round" className="github-link" height="2em" width="2em">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35
                         6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65
                          16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44
                           5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>
            </nav>
        </section>
    </header>
}