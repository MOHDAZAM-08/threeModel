import React, { useEffect, useRef } from 'react';
import './Home.css'; // Import your custom CSS file
import gsap from 'gsap';

export default function Home(props) {
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP animation timeline
    const tl = gsap.timeline();
    tl.fromTo(
      textRef.current,
      { opacity: 0, y:70 },
      { opacity: 1,y:0,duration: 1, ease: 'power2.out' },
    );
  }, []);

  return (
    <section className="Home-section">
      <div className="Home-content">
        <aside ref={textRef}>
          <p >Apple Watch</p>
          <div>
          {/* <div  className='btn'>To wear it is to love it</div> */}
          </div>
        </aside>
      </div>
    </section>
  );
}
