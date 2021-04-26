export const padService = {
    query
}

function query() {
    
    const { PUBLIC_URL } = process.env

    return [
        {
            _id: 'p101',
            title: '120_future_funk_beats_25',
            fileUrl: `${PUBLIC_URL}/sounds/120_future_funk_beats_25.mp3`,
            bgc: '#2da254',
        },
        {
            _id: 'p102',
            title: '120_stutter_breakbeats_16',
            fileUrl: `${PUBLIC_URL}/sounds/120_stutter_breakbeats_16.mp3`,
            bgc: '#ca9d2a',
        },
        {
            _id: 'p103',
            title: 'Bass Warwick heavy funk groove on E 120 BPM',
            fileUrl: `${PUBLIC_URL}/sounds/Bass Warwick heavy funk groove on E 120 BPM.mp3`,
            bgc: '#c32e2e',
        },
        {
            _id: 'p104',
            title: 'electric guitar coutry slide 120bpm - B',
            fileUrl: `${PUBLIC_URL}/sounds/electric guitar coutry slide 120bpm - B.mp3`,
            bgc: '#2d69a2',
        },
        {
            _id: 'p105',
            title: 'FUD_120_StompySlosh',
            fileUrl: `${PUBLIC_URL}/sounds/FUD_120_StompySlosh.mp3`,
            bgc: '#832da2',
        },
        {
            _id: 'p106',
            title: 'GrooveB_120bpm_Tanggu',
            fileUrl: `${PUBLIC_URL}/sounds/GrooveB_120bpm_Tanggu.mp3`,
            bgc: '#a9bb32',
        },
        {
            _id: 'p107',
            title: 'MazePolitics_120_Perc',
            fileUrl: `${PUBLIC_URL}/sounds/MazePolitics_120_Perc.mp3`,
            bgc: '#2d9fa2',
        },
        {
            _id: 'p108',
            title: 'PAS3GROOVE1.03B',
            fileUrl: `${PUBLIC_URL}/sounds/PAS3GROOVE1.03B.mp3`,
            bgc: '#509de6',
        },
        {
            _id: 'p109',
            title: 'SilentStar_120_Em_OrganSynth',
            fileUrl: `${PUBLIC_URL}/sounds/SilentStar_120_Em_OrganSynth.mp3`,
            bgc: '#a22d7b',
        },
    ]
}