import { useGLTF } from '@react-three/drei'
import type { JSX } from 'react'
import * as React from 'react'
import type * as THREE from 'three'
import type { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    YellowBox_1: THREE.Mesh
    YellowBox_2: THREE.Mesh
  }
  materials: {
    Yellow: THREE.MeshStandardMaterial
    DarkYellow: THREE.MeshStandardMaterial
  }
}

export function BoxModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/yellow-box.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="YellowBox" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              name="YellowBox_1"
              castShadow
              receiveShadow
              geometry={nodes.YellowBox_1.geometry}
              material={materials.Yellow}
            />
            <mesh
              name="YellowBox_2"
              castShadow
              receiveShadow
              geometry={nodes.YellowBox_2.geometry}
              material={materials.DarkYellow}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/yellow-box.glb')
