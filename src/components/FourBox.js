import React, { useEffect, useRef } from 'react';
import './Four.css'; // Import your custom CSS file
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

export default function FourBox(props) {
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
    <section className="Four-section">
      <div className="Four-content">
        <aside ref={textRef}>
          <p id='para'>Why Apple Watch</p>
          <h1>It’s the ultimate device for a healthy life.</h1>
        </aside>
      </div>
    </section>
  );
}
