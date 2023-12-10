"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Html, OrbitControls, Environment, ContactShadows, Preload } from '@react-three/drei'
import { useRef, useState } from 'react'
import { EffectComposer, SSAO, SMAA, Selection, Outline } from "@react-three/postprocessing"
import React, { Suspense } from 'react'
import { StencilFunc } from 'three'
import { SpotLightShadow, Vector2 } from 'three';
import { Mesh, CircleGeometry, MeshBasicMaterial } from 'three'
import * as THREE from 'three'

function Model(props: any) {
  const { nodes: nodesHult, materialsHult }: any = useGLTF('/models3D/text/hult.gltf')
  const { nodes: nodesAt, materialsAt }: any = useGLTF('/models3D/text/at.gltf')
  const { nodes: nodesEPN, materialsEPN }: any = useGLTF('/models3D/text/epn.gltf')
  const groupRef = useRef<THREE.Group>()

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= 0.1 * delta
    }
  });


  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodesHult.Text.geometry}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={[3, 3, 5]}
        position={[0, 0, 3]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial attach="material" color="#FFA0D9" roughness={0} metalness={1} />
      </mesh>

      <mesh
        geometry={nodesAt.Text.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[5, 3, 5]}
        position={[8, -0.8, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial attach="material" color="#FFA0D9" roughness={0} metalness={0.5} />
      </mesh>

      <mesh
        geometry={nodesEPN.Text.geometry}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[3, 3, 5]}
        position={[8, 0, -5]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial attach="material" color="#FFA0D9" roughness={0} metalness={1} />
      </mesh>
    </group>
  )
}

function Circle(props: any) {
  const geometry = new CircleGeometry(5, 32);
  geometry.scale(0.5, 0.5, 0.5);
  const ref = useRef<THREE.Mesh>(null);
  const initialRotation = useRef<[number, number, number]>([Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2]);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime() * 3;
      ref.current.rotation.set(
        initialRotation.current[0] + Math.cos(t / 4) / 8,
        initialRotation.current[1] - Math.sin(t / 3) / 2,
        initialRotation.current[2] + 0.15 + Math.sin(t / 2) / 8
      );
      ref.current.position.y = -(0.5 + Math.cos(t / 2)) / 2;
    }
  })

  return (
    <mesh ref={ref} {...props} geometry={geometry} rotation={initialRotation.current}>
      <meshStandardMaterial attach="material" color="#FFA0D9" roughness={0.3} metalness={0.5} />
    </mesh>
  )
}


function RandomCircles(){
  const circles = Array.from({ length: 20 }).map((_, index) => (

    <Circle
      key={index}
      scale={Math.random() * 0.3 + 0.05}
      position={[Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10]}
    />
  ))

  return <>{circles}</>
}


function Loading() {
  return (
    <Html>
        <img src='/logo.webp' alt='Hult Prize' className=' w-[70%]' />
    </Html>
  )
}

export default function Welcome() {
  return (
    <Canvas camera={{ position: [0, 0, 18], fov: 50 }}>
      <color attach="background" args={['#E8DCF4']} />
      <ambientLight intensity={0.7} />


      <spotLight intensity={0.5} angle={Math.PI / 9} penumbra={1} position={[10, 15, -5]} castShadow />

      {/* Configuración de sombras  */}
      <fog attach="fog" args={['#E8DCF4', 16, 20]} />
      <Suspense fallback={<Loading />}>
        <Preload all />
        <Model />
        <RandomCircles/>
      </Suspense>



      <OrbitControls enableZoom={false} enableRotate={true} enablePan={false} maxPolarAngle={Math.PI / 2}  minPolarAngle={Math.PI /4} />
      <Environment preset='city' />
    </Canvas>
  )
}
