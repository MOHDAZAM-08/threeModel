import React from 'react';
import './Home.css'; // Import your custom CSS file

export default function Home(props) {
  return (
    <section className={`Home-section ${props.right ? "items-end" : "items-start"}`}
      style={{ opacity: props.opacity,height:"100vh",display:"flex", alignItems:"center",justifyContent:"start" }}>
      <div className="Home-content">
        <aside>
          <h1 style={{
            fontSize:"6rem"
          }}>Dream laptop</h1>
          <p>Best Deal</p>
        </aside>
      </div>
    </section>
  );
}
