import SingleCube from './SingleCube'
import { Vector3 } from 'three'

const CubesCluster = ({ position }: { position: Vector3 }) => {
    return (
        <group position={position}>
            <SingleCube position={new Vector3(0, 0, 0)} color={"white"} />
            <SingleCube position={new Vector3(0, 0, 24)} color={"#E7E7E7"} />
            <SingleCube position={new Vector3(0, 0, 8)} color={"#D3D3D3"} />
            <SingleCube position={new Vector3(0, 0, 16)} color={"#E5E4E2"} />
        </group>
    )
}

export default CubesCluster