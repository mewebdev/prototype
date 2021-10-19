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
import img9 from '../images/Liquid-type.jpg';
import img10 from '../images/macinotosh manual.png';
import img11 from '../images/ME-design.png';
import img12 from '../images/O-logo.png';
import img13 from '../images/Reflection.jpg';
import img14 from '../images/kamuy.jpg';
import img15 from '../images/youtube.jpg';
import img16 from '../images/sankei.png';
import img17 from '../images/cookpad.png';
import img18 from '../images/amazon.png';
import img19 from '../images/map.png';
import img20 from '../images/Russian Dining.jpg';
import img21 from '../images/rogovski.png';

export default function Image({ position, width, height, scale, id }) {
    const images = [img, img2, img3, img4, img5, img6, img7, 
                    img8, img9, img10, img11, img12, img13,
                    img14, img15, img16, img17, img18, img19,
                    img20, img21]
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

