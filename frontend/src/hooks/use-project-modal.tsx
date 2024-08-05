import { create } from "zustand";

interface ProjectModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  projectId: number;
  setProjecId: (id: number) => void;
}

const useProjectModalStore = create<ProjectModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  projectId: 0,
  setProjecId: (id) => set({ projectId: id }),
}));

export default useProjectModalStore;
