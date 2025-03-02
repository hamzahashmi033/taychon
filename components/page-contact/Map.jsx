import React from "react";

function Map() {
  return (
    <div className="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.629570702888!2d-86.6330679236957!3d33.64084553934039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88890c67dbc886b1%3A0x7ae2a5302480ed4e!2s5919%20Trussville%20Crossings%20Pkwy%2C%20Birmingham%2C%20AL%2035235%2C%20USA!5e0!3m2!1sen!2s!4v1740926030667!5m2!1sen!2s"
        width="600"
        height="450"
        
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
