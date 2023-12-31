import { AdaptiveDpr, AdaptiveEvents, BakeShadows, KeyboardControls, PointerLockControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from "@react-three/rapier"
import { Player } from './Camera/Player'
import { ACESFilmicToneMapping } from 'three'
import AdaptivePixelRatio from './Perf/AdaptivePixelRatio'
import Lights from './Lights/Lights'
import CubeGenerator from './Cubes/CubeGenerator'
import EffectsComposerCustom from './Composer/EffectComp'

const Scene = () => {
    return (
        <KeyboardControls
            map={[
                { name: "forward", keys: ["ArrowUp", "w", "W"] },
                { name: "backward", keys: ["ArrowDown", "s", "S"] },
                { name: "left", keys: ["ArrowLeft", "a", "A"] },
                { name: "right", keys: ["ArrowRight", "d", "D"] },
                { name: "jump", keys: ["Space"] },
            ]}>
            <Canvas shadows camera={{ fov: 45, rotation: [0, -Math.PI, 0] }}
                id='mainCanvas'
                gl={{
                    preserveDrawingBuffer: true,
                    toneMapping: ACESFilmicToneMapping,
                    antialias: true,
                    logarithmicDepthBuffer: true,
                }}
                dpr={1}
                style={{ width: '100vw', height: '100vh' }}
                onContextMenu={(e) => e.preventDefault()}
                frameloop='always'
            >
                {/* LIGHTS */}
                <Lights />

                {/* CUBES AND PLAYER */}
                <Physics gravity={[0, -30, 0]}>
                    <Player />
                    <CubeGenerator />
                </Physics>
                <PointerLockControls />

                {/* PERFORMANCE */}
                <EffectsComposerCustom />
                <AdaptivePixelRatio />
                <AdaptiveDpr pixelated />
                <BakeShadows />
                <AdaptiveEvents />
                <Preload all />

            </Canvas>
        </KeyboardControls>
    )
}

export default Scene