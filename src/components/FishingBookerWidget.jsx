import { useEffect } from "react";

export default function FishingBookerWidget({ id, src }) {
  useEffect(() => {
    // remove previous script if exists (prevents duplicates in SPA navigation)
    const existing = document.querySelector(`script[data-fbkr="${id}"]`);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;
    script.setAttribute("data-fbkr", id);

    document.body.appendChild(script);
  }, [id, src]);

  return <div id={id} />;
}