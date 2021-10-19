import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei'
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

const Space = ({space}) => {
    const [hdr, setHDR] = useState(hdriLookup[space])
    return (
        <div className={styles.container}>
            <Canvas colorManagement>
                <Suspense fallback={null}>
                    <Box position={[-1.2, 2, 0]} />
                    <Box position={[1.2,-2, 0]} />
                    <Image 
                        position={[1.2,-1, -2]}
                        width={5000}
                        height={7500}
                        scale={5}
                        id={0}
                    />
                    <Image 
                        position={[-4, 1, -5]}
                        width={5472}
                        height={3648}
                        scale={5}
                        id={1}
                    />
                    <Environment files={hdr} background/> 
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Space;