import React, { useEffect, useRef } from 'react';
import './ThreeBox.css'; // Import your custom CSS file
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

export default function ThreeBox(props) {
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
    <section className="Three-section">
      <div className="three-content">
        <aside ref={textRef}>
          <p>Family Setup</p>
          <h1> Your family joined at the wrist.</h1>
        </aside>
      </div>
    </section>
  );
}
