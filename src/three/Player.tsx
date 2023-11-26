import * as THREE from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, RapierRigidBody, RigidBody } from "@react-three/rapier"

const SPEED = 10
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

export function Player() {
    const ref = useRef<RapierRigidBody>(null)
    const [, get] = useKeyboardControls()
    useFrame((state) => {
        if (!ref || !ref.current) return
        const { forward, backward, left, right } = get()
        const velocity = ref.current.linvel()
        if (!ref.current.translation()) return
        state.camera.position.set(
            ref.current.translation().x,
            ref.current.translation().y,
            ref.current.translation().z
        )
        // movement
        frontVector.set(0, 0, +backward - +forward)
        sideVector.set(+left - +right, 0, 0)
        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(state.camera.rotation)
        ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z }, true)

    })
    return (
        <>
            <RigidBody ref={ref} colliders={false} mass={1} type="dynamic" position={[0, 1, 0]} enabledRotations={[false, false, false]}>
                <CapsuleCollider args={[0.75, 0.5]} />
            </RigidBody>
        </>
    )
}
