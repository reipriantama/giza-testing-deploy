import { createContext, useState, useEffect } from "react";
import { getGPUTier } from "detect-gpu";

interface GpuTier {
  tier?: number;
  isMobile?: boolean;
  type?: string;
  fps?: number;
  gpu?: string;
}

interface GpuContextType {
  gpuTier: GpuTier | null;
  setGpuTier: (gpu: GpuTier | null) => void;
}

const GpuContext = createContext<GpuContextType | null>(null);

const GpuContextProvider: React.FC<any> = ({ children }) => {
  const [gpuTier, setGpuTier] = useState<GpuTier | null>({
    tier: 0,
    isMobile: false,
    type: "",
    fps: 0,
    gpu: "Unknown GPU",
  });

  useEffect(() => {
    const fetchGpuTier = async () => {
      try {
        const gpu = await getGPUTier();
        // Handle undefined properties by providing default values if necessary
        setGpuTier({
          tier: gpu.tier ?? null,
          isMobile: gpu.isMobile ?? false,
          type: gpu.type ?? "",
          fps: gpu.fps ?? 0,
          gpu: gpu.gpu ?? "",
        });
      } catch (error) {
        console.error("Failed to fetch GPU tier:", error);
      }
    };

    fetchGpuTier();
  }, []);

  return (
    <GpuContext.Provider value={{ gpuTier, setGpuTier }}>
      {children}
    </GpuContext.Provider>
  );
};

export const Gpu = GpuContext;
export default GpuContextProvider;
