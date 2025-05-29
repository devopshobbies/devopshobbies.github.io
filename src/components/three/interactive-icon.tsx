'use client'

import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as React from 'react'
import { Suspense } from 'react'

import { BoxModel } from './box'

export function InteractiveIcon() {
  return (
    <>
      <div className="flex-items-center justify-center">
        <Canvas
          className="min-h-[15rem] min-w-[500px] h-400px"
          camera={{
            position: [1.5, 1, 1.4],
            fov: 55,
          }}
        >
          <Suspense>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

function Scene() {
  return (
    <group>
      <OrbitControls />
      <Environment preset="studio" />
      <BoxModel />
    </group>
  )
}
