import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei'
import Menu from './Menu'
import styles from '../styles/space.module.scss'
import hdri_1 from '../hdri/gamrig_2k.hdr';
import hdri_2 from '../hdri/artist_workshop_2k.hdr';
import hdri_3 from '../hdri/kloppenheim_02_2k.hdr';
import Box from './Box';
import Image from './Image';

const hdriLookup = {
    '1': hdri_1,
    '2': hdri_2,
    '3': hdri_3
}

const images = [
    {
        position: [5, -3, -3],
        width: 336,
        height: 336,
        scale: 5,
        id: 2
    },
    {
        position: [6, 4, -5],
        width: 5760,
        height: 3120,
        scale: 5,
        id: 3
    },
    {
        position: [0, 3, -6],
        width: 1414,
        height: 1438,
        scale: 5,
        id: 4
    },
    {
        position: [-8, 5, -7],
        width: 2272,
        height: 1703,
        scale: 5,
        id: 5
    },
    {
        position: [-10, -1, -8],
        width: 1024,
        height: 1536,
        scale: 5,
        id: 6
    },
    {
        position: [-5, -5, -9],
        width: 4134,
        height: 4134,
        scale: 5,
        id: 7
    }
]


const Space = ({ space }) => {
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
            <div className={styles.menu} onClick={()=> setMenu(!menu) }>
            </div>
            <div className={styles.nav}>
                <div className={styles.button} id={styles.search} onClick={()=>{ setSearch(!search); setValue('')} }>

                </div>
                <div className={styles.button} id={styles.text}>
                    
                </div>
                <div className={styles.button} id={styles.space}>
                    
                </div>
                <div className={styles.button} id={styles.pathways}>
                    
                </div>
            </div>
            {
                search?
                <input type="text" className={styles.search} defaultValue={text} onChangeText={text=>setValue(text)}/>
                :null
            }
            <Canvas colorManagement>
            <OrbitControls enablePan={false} enableZoom={true} enableRotate={false} />
                <Suspense fallback={null}>
                        <Box position={[7, -6, -6]} />
                        <Box position={[10, -6, -6]} />
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

export default Space;