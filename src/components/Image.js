import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useLoader } from '@react-three/fiber'
import img from '../images/test.jpg'
import img2 from '../images/test-2.jpg'

export default function Image({ position, width, height, scale, id }) {
    const images = [img, img2]
    const texture = useLoader(THREE.TextureLoader, images[id]);
    const ref = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    return (
        <mesh
            ref={ref}
            position={position}
            scale = {hovered? 1.0125: 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
        >  
            <planeBufferGeometry attach="geometry" args={[(width / height) * scale, scale]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    )
}

