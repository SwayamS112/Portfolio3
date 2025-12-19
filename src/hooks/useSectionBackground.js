import { useEffect } from "react";

export default function useSectionBackground(primary, secondary) {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--bg-primary",
      primary
    );
    document.documentElement.style.setProperty(
      "--bg-secondary",
      secondary
    );
  }, [primary, secondary]);
}
