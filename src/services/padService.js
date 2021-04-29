export const padService = {
    query
}

function query() {
    
    const { PUBLIC_URL } = process.env
    const baseUrl = `${PUBLIC_URL}/assets/sounds`

    return [
        {
            _id: 'p101',
            title: 'Future Funk Beats 25',
            fileUrl: `${baseUrl}/120_future_funk_beats_25.mp3`,
            bgc: '#2da254',
        },
        {
            _id: 'p102',
            title: 'Stutter Breakbeats',
            fileUrl: `${baseUrl}/120_stutter_breakbeats_16.mp3`,
            bgc: '#ca9d2a',
        },
        {
            _id: 'p103',
            title: 'Bass Warwick',
            fileUrl: `${baseUrl}/Bass Warwick heavy funk groove on E 120 BPM.mp3`,
            bgc: '#c32e2e',
        },
        {
            _id: 'p104',
            title: 'Electric Guitar',
            fileUrl: `${baseUrl}/electric guitar coutry slide 120bpm - B.mp3`,
            bgc: '#2d69a2',
        },
        {
            _id: 'p105',
            title: 'Stompy Slosh',
            fileUrl: `${baseUrl}/FUD_120_StompySlosh.mp3`,
            bgc: '#832da2',
        },
        {
            _id: 'p106',
            title: 'Tanggu',
            fileUrl: `${baseUrl}/GrooveB_120bpm_Tanggu.mp3`,
            bgc: '#a9bb32',
        },
        {
            _id: 'p107',
            title: 'Maze Politics',
            fileUrl: `${baseUrl}/MazePolitics_120_Perc.mp3`,
            bgc: '#2d9fa2',
        },
        {
            _id: 'p108',
            title: 'PAS GROOVE',
            fileUrl: `${baseUrl}/PAS3GROOVE1.03B.mp3`,
            bgc: '#509de6',
        },
        {
            _id: 'p109',
            title: 'Silent Star',
            fileUrl: `${baseUrl}/SilentStar_120_Em_OrganSynth.mp3`,
            bgc: '#a22d7b',
        },
    ]
}