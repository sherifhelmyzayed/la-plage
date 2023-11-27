
import { useFBO } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import {
    EffectComposer,
    EffectPass,
    OutlineEffect,
    RenderPass,
    SMAAEffect,
} from 'postprocessing'
import { useMemo } from 'react'
import { Color } from 'three'
import { N8AOPostPass } from 'n8ao'
export type UseOutlineEffectParams = ConstructorParameters<typeof OutlineEffect>[2]

const EffectsComposerCustom = () => {

    const { gl, scene, camera, size } = useThree()

    const renderTarget = useFBO(size.width, size.height, { depthBuffer: true })

    const outlineEffect = useMemo(() => {
        const params: UseOutlineEffectParams = {
            edgeStrength: 8,
            pulseSpeed: 0.0,
            visibleEdgeColor: 0x846eff,
            hiddenEdgeColor: 0x846eff,
            blur: false,
            xRay: true,
        }
        const effect = new OutlineEffect(scene, camera, params)
        effect.selection.layer = 12

        return effect
    }, [camera, scene])

    const smaaEffect = useMemo(() => {
        const effect = new SMAAEffect()

        return effect
    }, [])

    const effectComposer = useMemo(() => {
        const effectComposer = new EffectComposer(gl, renderTarget)
        const renderPass = new RenderPass(scene, camera)
        effectComposer.addPass(renderPass)
        effectComposer.addPass(new EffectPass(camera, outlineEffect))

        effectComposer.addPass(new EffectPass(camera, smaaEffect))

        const n8aopass = new N8AOPostPass(
            scene,
            camera,
            gl.domElement.clientWidth,
            gl.domElement.clientHeight
        )

        n8aopass.configuration.screenspace = true
        n8aopass.configuration.aoRadius = 1.0
        n8aopass.configuration.distanceFalloff = 1
        n8aopass.configuration.intensity = 1.5
        n8aopass.configuration.color = new Color(0, 0, 0)

        effectComposer.addPass(n8aopass)


        return effectComposer
    }, [camera, gl, outlineEffect, renderTarget, scene, smaaEffect])

    // outlineEffect.selection.set(meshesToOutline)



    useFrame(() => {
        effectComposer.render(0.02)
    }, 1)

    return null
}

export default EffectsComposerCustom
