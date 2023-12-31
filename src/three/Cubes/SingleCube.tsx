import { BackSide, Vector3 } from 'three'
import { useGLTF } from "@react-three/drei";

const SingleCube = ({ position, color }: { position: Vector3, color: string }) => {
  // @ts-ignore
  const { nodes } = useGLTF("/assets/Cube.glb");

  return (
    <group scale={2} position={position} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        position={[0, 1, 0]}
      >
        <meshStandardMaterial attach={`material`} color={color} side={BackSide} />
      </mesh>
    </group>
  )
}
export default SingleCube
useGLTF.preload("/assets/Cube.glb");