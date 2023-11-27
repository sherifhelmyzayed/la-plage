import * as THREE from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, CuboidCollider, RapierRigidBody, RigidBody } from "@react-three/rapier"

const SPEED = 10
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

export function Player() {
    const ref = useRef<RapierRigidBody>(null)
    const groundRef = useRef<RapierRigidBody>(null)
    const wall1Ref = useRef<RapierRigidBody>(null)
    const wall2Ref = useRef<RapierRigidBody>(null)

    const [, get] = useKeyboardControls()
    useFrame((state) => {
        if (!ref || !ref.current) return
        if (!groundRef || !groundRef.current) return
        if (!wall1Ref || !wall1Ref.current) return
        if (!wall2Ref || !wall2Ref.current) return

        const { forward, backward, left, right } = get()
        const velocity = ref.current.linvel()
        if (!ref.current.translation()) return

        // setting camera position
        state.camera.position.set(
            ref.current.translation().x,
            ref.current.translation().y,
            ref.current.translation().z
        )
        // setting floor position
        groundRef.current.setTranslation(new THREE.Vector3(0, 0, ref.current.translation().z), true)

        // setting walls position
        wall1Ref.current.setTranslation(new THREE.Vector3(0, 0, ref.current.translation().z), true)
        wall2Ref.current.setTranslation(new THREE.Vector3(0, 0, ref.current.translation().z), true)

        // movement
        frontVector.set(0, 0, +backward - +forward)
        sideVector.set(+left - +right, 0, 0)
        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(state.camera.rotation)
        ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z }, true)

    })
    return (
        <>
            {/* Camera Capsule  */}
            <RigidBody ref={ref} colliders={false} mass={1} type="dynamic" position={[0, 1, 0]} enabledRotations={[false, false, false]}>
                <CapsuleCollider args={[0.75, 0.5]} />
            </RigidBody>

            {/* Floor Collider  */}
            <RigidBody ref={groundRef} type="fixed" colliders={false}>
                <CuboidCollider args={[10, 2, 10]} position={[0, -2.1, 0]} />
            </RigidBody>

            {/* Wall Collider  */}
            <RigidBody ref={wall1Ref} type="fixed" colliders={false} position={[8, 0, 0]} rotation-x={-Math.PI} rotation-y={-Math.PI / 2}>
                <CuboidCollider args={[4, 4, 1]} position={[0, 0, -5]} />
            </RigidBody>

            <RigidBody ref={wall2Ref} type="fixed" colliders={false} position={[-8, 0, 0]} rotation-x={-Math.PI} rotation-y={Math.PI / 2}>
                <CuboidCollider args={[4, 4, 1]} position={[0, 0, -5]} />
            </RigidBody>
        </>
    )
}
