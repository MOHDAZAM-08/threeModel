import React, { useEffect, useRef } from 'react';
import './TwoBox.css'; // Import your custom CSS file
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

export default function TwoBox(props) {
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top center',
        end: 'top top', 
        scrub: 1, 
        ease: "power2.inOut",
      },
    });

    tl.fromTo(
      textRef.current,
      { opacity: 0,  },
      { opacity: 1, duration: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <section className="two-section">
      <div className="two-content">
        <aside ref={textRef}>
          <p>Connectivity</p>
          <h1>Stay connected on the go, go, go.</h1>
        </aside>
      </div>
    </section>
  );
}
