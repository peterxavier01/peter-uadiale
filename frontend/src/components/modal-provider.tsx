import { useEffect, useState } from "react";

import ProjectItemModal from "@/components/modals/project-item-modal";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) return null;

  return <ProjectItemModal />;
}
