import { RigidBody } from '@react-three/rapier'
import { BackSide, Vector3 } from 'three'
import { useGLTF } from "@react-three/drei";

const SingleCube = ({ position }: { position: Vector3 }) => {
  // @ts-ignore
  const { nodes } = useGLTF("/assets/Cube.glb");
  return (

    <RigidBody type="fixed" colliders="trimesh">
      <group scale={2} position={position}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          position={[0, 1, 0]}
        >
          <meshStandardMaterial attach={`material`} color={"white"} side={BackSide} />
        </mesh>
      </group>



    </RigidBody>
  )
}
export default SingleCube
useGLTF.preload("/assets/Cube.glb");