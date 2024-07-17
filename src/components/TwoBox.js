import React from 'react';
import './Home.css'; // Import your custom CSS file

export default function TwoBox(props) {
  return (
    <section className={`two-section ${props.right ? "items-end" : "items-start"}`}
    style={{ opacity: props.opacity,height:"100vh",display:"flex", alignItems:"start",justifyContent:"center" }}>
      <div className="Home-content">
        <aside>
          <h1>TwoBox laptop</h1>
          <p>Best Deal</p>
        </aside>
      </div>
    </section>
  );
}
