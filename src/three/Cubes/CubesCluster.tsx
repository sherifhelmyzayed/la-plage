import SingleCube from './SingleCube'
import { Vector3 } from 'three'

const CubesCluster = ({ position }: { position: Vector3 }) => {
    return (
        <group position={position}>
            <SingleCube position={new Vector3(0, 0, 0)} />
            <SingleCube position={new Vector3(0, 0, 8)} />
            <SingleCube position={new Vector3(0, 0, 16)} />
            <SingleCube position={new Vector3(0, 0, 24)} />
        </group>
    )
}

export default CubesCluster