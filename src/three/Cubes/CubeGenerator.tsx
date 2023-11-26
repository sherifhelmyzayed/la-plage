import { Vector3 } from 'three'
import CubesCluster from './CubesCluster'

const CubeGenerator = () => {
    return (
        <>
            <CubesCluster position={new Vector3(0, 0, 0)} />
        </>
    )
}

export default CubeGenerator