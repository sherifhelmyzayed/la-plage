import { Vector3 } from 'three'
import CubesCluster from './CubesCluster'
import { useFrame } from '@react-three/fiber'
import { useState } from 'react'

const CubeGenerator = () => {
    const [multiplier, setMultiplier] = useState(0)

    useFrame(({ camera }) => {
        const x = Math.floor(camera.position.z / 32)
        if (x !== multiplier) {
            setMultiplier(x)
        }
    })
    return (
        <>
            <CubesCluster position={new Vector3(0, 0, multiplier * 32 - 32)} />
            <CubesCluster position={new Vector3(0, 0, multiplier * 32)} />
            <CubesCluster position={new Vector3(0, 0, multiplier * 32 + 32)} />
        </>
    )
}

export default CubeGenerator