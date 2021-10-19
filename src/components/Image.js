import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader, useThree } from '@react-three/fiber';
import { useGesture } from "@use-gesture/react"
import { useSpring, a } from "@react-spring/three"
import img from '../images/test.jpg'
import img2 from '../images/test-2.jpg'
import img3 from '../images/alienpunk.png';
import img4 from '../images/do_you_own_miku.png';
import img5 from '../images/egger_land.jpg';
import img6 from '../images/kimasendorfnft.png';
import img7 from '../images/mebit-zombie.jpg';
import img8 from '../images/pixelsortnft.jpg';

export default function Image({ position, width, height, scale, id }) {
    const images = [img, img2, img3, img4, img5, img6, img7, img8]
    const texture = useLoader(THREE.TextureLoader, images[id]);
    const ref = useRef()
    const { size, viewport } = useThree()
    const aspect = size.width / viewport.width
    const [spring, set] = useSpring(() => ({ position: position, config: { friction: 20 } }))
    const bind = useGesture({
        onDrag: ({ offset: [x, y] }) => set({ position: [x / aspect, -y / aspect, position[2]] }),
        onHover: ({ hovering }) => set({ scale: hovering ? [1.0125, 1.0125, 1.0125] : [1, 1, 1] })
    })

    return (
        <a.mesh {...spring} {...bind()}
            receiveShadow
            castShadow
            ref={ref}
        >
            <planeBufferGeometry attach="geometry" args={[(width / height) * scale, scale]} />
            <meshBasicMaterial attach="material" map={texture} />
        </a.mesh>
    )
}

