import SingleCube from './SingleCube'
import { Vector3 } from 'three'

const CubesCluster = ({ position }: { position: Vector3 }) => {
    return (
        <group position={position}>
            <SingleCube position={new Vector3(0, 0, 0)} color={"green"}/>
            <SingleCube position={new Vector3(0, 0, 8)} color={"red"}/>
            <SingleCube position={new Vector3(0, 0, 16)} color={"yellow"}/>
            <SingleCube position={new Vector3(0, 0, 24)} color={"blue"}/>
        </group>
    )
}

export default CubesCluster