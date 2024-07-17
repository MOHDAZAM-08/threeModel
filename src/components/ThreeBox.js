import React from 'react';
import './Home.css'; // Import your custom CSS file

export default function ThreeBox(props) {
  return (
    <section className={`Three-section ${props.right ? "items-end" : "items-start"}`}
    style={{ opacity: props.opacity,height:"100vh",display:"flex", alignItems:"center",justifyContent:"center" }}>
      <div className="Home-content">
        <aside>
          <h1>ThreeBox laptop</h1>
          <p>Best Deal</p>
        </aside>
      </div>
    </section>
  );
}
