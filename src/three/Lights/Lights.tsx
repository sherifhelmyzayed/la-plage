import { Environment, Sky } from '@react-three/drei'

const Lights = () => {
    return (
        <>
            <Environment background={true} preset={'sunset'} />
            <Sky sunPosition={[100, 20, 100]} />
            <ambientLight intensity={0.3} />
            <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
        </>
    )
}

export default Lights