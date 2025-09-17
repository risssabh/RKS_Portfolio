import React, { useRef, useState, useEffect } from "react";

export default function Startup() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        console.warn("Autoplay blocked, waiting for user interaction.");
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="startup">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="startup-video"
        src="/images/Startup bg.mp4"
        autoPlay
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="startup-gray-overlay"></div>

      {/* Overlay Content */}
      <div className="startup-overlay">
        <h1 className="startup-heading">
          HELLO THERE<span className="bang">...!</span>
        </h1>

        <nav className="startup-nav">
          <a href="#hero">HOME</a> | 
          <a href="#about">ABOUT</a> | 
          <a href="#projects">PROJECT</a> | 
          <a href="#contact">CONTACT</a>
        </nav>

        {/* Mouse Scroll Animation */}
        <div className="mouse-scroll">
          <span className="mouse">
            <span className="wheel"></span>
          </span>
        </div>

        {/* Mute/Unmute Button */}
        <button className="mute-btn" onClick={toggleMute}>
          {muted ? "🔇" : "🔊"}
        </button>
      </div>
    </section>
  );
}
