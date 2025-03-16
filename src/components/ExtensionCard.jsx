import React from 'react';
import { FaDownload } from "react-icons/fa";
import './ExtensionsPage.css';

const ExtensionCard = ({ name, zipLink, demoLink, instructions }) => (
  <div className="glass-card">
    <h2>{name}</h2>
    <p>{instructions}</p>
    <div className="button-group">
      <a href={zipLink} download className="btn-primary">
        <FaDownload /> Download
      </a>
    </div>
    <video controls>
      <source src={demoLink} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default ExtensionCard;
