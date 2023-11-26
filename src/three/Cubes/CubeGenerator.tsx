import { Vector3 } from 'three'
import CubesCluster from './CubesCluster'
import { useFrame } from '@react-three/fiber'

const CubeGenerator = () => {

    useFrame(({ camera }) => {
        console.log(camera.position.z)
    })
    return (
        <>
            <CubesCluster position={new Vector3(0, 0, -32)} />
            <CubesCluster position={new Vector3(0, 0, 0)} />
            <CubesCluster position={new Vector3(0, 0, 32)} />
        </>
    )
}

export default CubeGenerator