import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function MouseTrail() {
  const [positions, setPositions] = useState([]);
  const requestRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPositions((prev) => [
        ...prev,
        { x: e.clientX, y: e.clientY, id: Math.random() },
      ]);

      // Keep only the last 15 positions for an ultra-smooth effect
      if (positions.length > 15) {
        setPositions((prev) => prev.slice(1));
      }
    };

    const animate = () => {
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, [positions]);

  return (
    <div>
      {positions.map((pos, index) => (
        <motion.div
          key={pos.id}
          className="trail-dot"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.6, // Slightly longer fade for smooth effect
            ease: "easeOut", // Natural easing
          }}
          style={{
            position: "absolute",
            top: pos.y,
            left: pos.x,
            width: `${12 - index * 0.5}px`, // Smaller dots at the end
            height: `${12 - index * 0.5}px`,
            backgroundColor: "#cd0ff9", // Bright Purple Color 🎨
            borderRadius: "50%",
            pointerEvents: "none",
            boxShadow: "0px 0px 18px 8px #cd0ff9", // Stronger Glow ✨
            filter: "blur(2px)", // Slight blur for a softer look
          }}
        />
      ))}
    </div>
  );
}
