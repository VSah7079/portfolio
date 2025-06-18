import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Text } from '@react-three/drei'
import * as THREE from 'three'
import { FaReact, FaNodeJs, FaJs, FaPython, FaDatabase } from 'react-icons/fa'

const FloatingIcon = ({ position, color, icon: Icon }) => {
  const meshRef = useRef()
  const [velocity] = useState({
    x: (Math.random() - 0.5) * 0.02,
    y: Math.random() * 0.02,
    z: (Math.random() - 0.5) * 0.02
  })

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x += velocity.x
      meshRef.current.position.y += velocity.y
      meshRef.current.position.z += velocity.z
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={meshRef} position={position}>
      <mesh>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

const AnimatedSphere = ({ position, color, scale = 1, onPop, icon: Icon }) => {
  const sphereRef = useRef()
  const [isPopping, setIsPopping] = useState(false)
  const [isPopped, setIsPopped] = useState(false)
  const [floatingIcons, setFloatingIcons] = useState([])

  useFrame(() => {
    if (sphereRef.current && !isPopped) {
      sphereRef.current.rotation.x += 0.005
      sphereRef.current.rotation.y += 0.005

      if (isPopping) {
        sphereRef.current.scale.x += 0.1
        sphereRef.current.scale.y += 0.1
        sphereRef.current.scale.z += 0.1

        if (sphereRef.current.scale.x > 2) {
          setIsPopped(true)
          onPop()
        }
      }
    }
  })

  const handleClick = () => {
    if (!isPopping && !isPopped) {
      setIsPopping(true)
      // Create multiple floating icons
      const newIcons = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        position: [
          position[0] + (Math.random() - 0.5) * 2,
          position[1] + (Math.random() - 0.5) * 2,
          position[2] + (Math.random() - 0.5) * 2
        ],
        color,
        icon: Icon
      }))
      setFloatingIcons(newIcons)
    }
  }

  return (
    <>
      <Sphere 
        ref={sphereRef} 
        args={[1, 100, 200]} 
        scale={scale} 
        position={position}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      >
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={isPopping ? 0.5 : 0.3}
          speed={isPopping ? 3 : 1.5}
          roughness={0.2}
          metalness={0.8}
          transparent={isPopping}
          opacity={isPopping ? 0.5 : 1}
        />
      </Sphere>
      {floatingIcons.map((icon) => (
        <FloatingIcon
          key={icon.id}
          position={icon.position}
          color={icon.color}
          icon={icon.icon}
        />
      ))}
    </>
  )
}

const Skills3D = () => {
  const [poppedCount, setPoppedCount] = useState(0)
  const [showMessage, setShowMessage] = useState(false)

  const handlePop = () => {
    setPoppedCount(prev => {
      const newCount = prev + 1
      if (newCount === 5) {
        setShowMessage(true)
        setTimeout(() => {
          setShowMessage(false)
          setPoppedCount(0)
          window.location.reload()
        }, 2000)
      }
      return newCount
    })
  }

  const spheres = [
    { position: [0, 0, 0], color: '#646cff', scale: 2, icon: FaDatabase },
    { position: [-3, 0, 0], color: '#61DAFB', scale: 1.5, icon: FaReact },
    { position: [3, 0, 0], color: '#339933', scale: 1.5, icon: FaNodeJs },
    { position: [0, -3, 0], color: '#F7DF1E', scale: 1.5, icon: FaJs },
    { position: [0, 3, 0], color: '#3776AB', scale: 1.5, icon: FaPython },
  ]

  return (
    <div className="w-full h-[400px] relative">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        {spheres.map((sphere, index) => (
          <AnimatedSphere
            key={index}
            position={sphere.position}
            color={sphere.color}
            scale={sphere.scale}
            onPop={handlePop}
            icon={sphere.icon}
          />
        ))}
      </Canvas>
      {showMessage && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-tertiary/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
          <p className="text-2xl font-bold text-accent">All skills popped! Reloading...</p>
        </div>
      )}
    </div>
  )
}

export default Skills3D 