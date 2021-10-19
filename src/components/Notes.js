import React, { Suspense, useState } from 'react'
import { Canvas,} from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Menu from './Menu'
import styles from '../styles/space.module.scss'
import hdri_1 from '../hdri/gamrig_2k.hdr';
import hdri_2 from '../hdri/artist_workshop_2k.hdr';
import hdri_3 from '../hdri/kloppenheim_02_2k.hdr';
import Image from './Image';

const hdriLookup = {
    '1': hdri_1,
    '2': hdri_2,
    '3': hdri_3
}

const images = [
    {
        position: [5, -3, -3],
        width: 400,
        height: 215,
        scale: 5,
        id: 13
    },
    {
        position: [6, 4, -2.1],
        width: 1280,
        height: 720,
        scale: 5,
        id: 14
    },
    {
        position: [0, 3, -3.2],
        width: 1520,
        height: 1626,
        scale: 5,
        id: 15
    },
    {
        position: [-8, 5, -5.5],
        width: 1424,
        height: 1236,
        scale: 5,
        id: 16
    },
    {
        position: [-2, -5, -2.3],
        width: 2246,
        height: 830,
        scale: 5,
        id: 17
    },

    {
        position: [-6.4, 6, -1.4],
        width: 770,
        height: 544,
        scale: 5,
        id: 18
    },

    {
        position: [-10, -1, -1.4],
        width: 277,
        height: 182,
        scale: 5,
        id: 19
    },

    {
        position: [-5, -7.2, -5],
        width: 776,
        height: 474,
        scale: 5,
        id: 20
    },
]


const Notes = ({ space }) => {
    const [search, setSearch] = useState(false);
    const [text, setValue] = useState('');
    const [menu, setMenu] = useState(false);
    return (
        <div className={styles.container}>
            {
                menu ?
                    <div className={styles.menuContainer} onClick={() => setMenu(!menu)}>
                        <Menu />
                    </div>
                    : null
            }
            {
                menu ?
                    null :
                    <div className={styles.menu} onClick={() => setMenu(!menu)}>
                    </div>
            }
            <div className={styles.nav}>
                <div className={styles.button} id={styles.search} onClick={() => { setSearch(!search); setValue('') }}>

                </div>
                <div className={styles.button} id={styles.text}>

                </div>
                <div className={styles.button} id={styles.space}>

                </div>
                <div className={styles.button} id={styles.pathways}>

                </div>
            </div>
            {
                search ?
                    <input type="text" className={styles.search} defaultValue={text} onChangeText={text => setValue(text)} />
                    : null
            }
            <Canvas colorManagement>
                <OrbitControls enablePan={false} enableZoom={true} enableRotate={false} />
                <Suspense fallback={null}>
                    {
                        images.map((image) => (
                            <Image
                                position={image.position}
                                width={image.width}
                                height={image.height}
                                scale={image.scale}
                                id={image.id}
                                key={image.id}
                            />
                        ))
                    }
                    <Environment files={hdriLookup[space]} background />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Notes;