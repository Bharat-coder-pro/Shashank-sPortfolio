import { useGLTF } from "@react-three/drei";

export default function AssemblyModel() {
    const model = useGLTF("/main_assembly-ii.gltf");

    return (
        <primitive
            object={model.scene}
            scale={4}
        />
    );
}

