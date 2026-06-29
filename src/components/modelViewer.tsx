import Modal from "./Modal/Modal"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";
import { AppContext } from "../context/AppContextProvider"
import { useContext } from "react"
import AssemblyModel from "./Models/Model-I";


export default function ModelViewer() {
  const { showModel, setShowModel } = useContext(AppContext);

  return (
    <Modal
      title="3D Model View"
      isOpen={showModel}
      onClose={() => setShowModel(false)}
      maxWidth="md"
    >
      <div className="h-[400px] w-full cursor-grab">
        <Canvas camera={{ position: [0, 2, 5] }}>
          {/* Lights */}
          {/* Camera */}
          {/* OrbitControls */}
          {/* Your GLB model */}
          <ambientLight intensity={2} />
          <directionalLight position={[5, 5, 5]} />
          <AssemblyModel />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
          />
        </Canvas>
      </div>
    </Modal>
  )
}