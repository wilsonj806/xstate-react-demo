import { useEffect } from "react";
export function useKeydown(key: any, onKeyDown: any) {
  useEffect(() => {
    const handler = (e: any) => {
      if (e.key === key) {
        onKeyDown();
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [onKeyDown]);
}
