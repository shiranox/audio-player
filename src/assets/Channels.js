import drums from '../loopfiles/DRUMS.mp3'
import bvoc from '../loopfiles/B VOC.mp3'
import hehevoc from '../loopfiles/HE HE VOC.mp3'
import tamb from '../loopfiles/_tambourine_shake_higher.mp3'
import highvoc from '../loopfiles/HIGH VOC.mp3'
import jibrish from '../loopfiles/JIBRISH.mp3'
import lead1 from '../loopfiles/LEAD 1.mp3'
import uuho from '../loopfiles/UUHO VOC.mp3'

const audios = () => {
    return [
        {
            color: 'lightgreen',
            isOnMute: false,
            audio: drums,
            title: 'Drums'
        },
        {
            color: 'lightskyblue',
            isOnMute: false,
            audio: bvoc,
            title: 'B voc'
        },
        {
            color: 'yellow',
            isOnMute: false,
            audio: hehevoc,
            title: 'He voc'
        },
        {
            color: 'hotpink',
            isOnMute: false,
            audio: tamb,
            title: 'Tamb'
        },
        {
            color: 'purple',
            isOnMute: false,
            audio: highvoc,
            title: 'High voc'
        },
        {
            color: 'aqua',
            isOnMute: false,
            audio: jibrish,
            title: 'Jibrish'
        },
        {
            color: 'BlueViolet',
            isOnMute: false,
            audio: lead1,
            title: 'Lead'
        },
        {
            color: 'darkorange',
            isOnMute: false,
            audio: uuho,
            title: 'Uuho'
        }
    ]
}


export default audios;