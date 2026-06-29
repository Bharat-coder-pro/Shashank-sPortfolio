import { Html, useProgress } from "@react-three/drei";
import { FaCog } from "react-icons/fa";

export function ModelLoader() {
    const { progress } = useProgress();

    return (
        <Html center>
            <h1>{progress.toFixed(0)}%</h1>
        </Html>
    );
}

// MechanicalLoader.tsx


export function MechanicalLoader() {
    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950">
            <div className="relative h-44 w-44">
                {/* Large Gear */}
                <FaCog
                    className="
            absolute
            left-2
            top-10
            text-7xl
            text-orange-500
            animate-[spin_4s_linear_infinite]
          "
                />

                {/* Medium Gear */}
                <FaCog
                    className="
            absolute
            right-4
            top-2
            text-5xl
            text-zinc-300
            animate-[spin_3s_linear_infinite_reverse]
          "
                />

                {/* Small Gear */}
                <FaCog
                    className="
            absolute
            bottom-4
            right-10
            text-4xl
            text-yellow-400
            animate-[spin_2s_linear_infinite]
          "
                />
            </div>

            <h2 className="mt-8 text-xl font-bold tracking-[0.3em] text-white">
                INITIALIZING
            </h2>

            <div className="mt-4 h-2 w-72 overflow-hidden rounded-full bg-zinc-800">
                <div
                    className="
            h-full
            w-full
            origin-left
            animate-[loading_2s_ease-in-out_infinite]
            bg-gradient-to-r
            from-orange-500
            via-yellow-400
            to-orange-500
          "
                />
            </div>

            <p className="mt-4 text-sm tracking-widest text-zinc-400">
                Calibrating Mechanical Systems...
            </p>
        </div>
    );
}