import React from 'react';
import { FaDownload, FaChrome, FaLightbulb } from "react-icons/fa";
import './ExtensionsPage.css';

const extensions = [
  {
    name: "AirMouse",
    description: "Control your browser with hand gestures and movements",
    zipLink: process.env.PUBLIC_URL + "/extensions/AirMouse-main.zip",
    demoLink: "https://example.com/demo1.mp4",
    features: ["Hand gesture control", "Cursor movement", "Click actions"]
  },
  {
    name: "CognitiveUI",
    description: "Adaptive interface for cognitive accessibility",
    zipLink: process.env.PUBLIC_URL + "/extensions/CognitiveUI-main.zip",
    demoLink: "https://example.com/demo2.mp4",
    features: ["Simplified UI", "Focus assistance", "Memory aids"]
  },
  {
    name: "Vid2SL",
    description: "Real-time video to sign language conversion",
    zipLink: process.env.PUBLIC_URL + "/extensions/Vid2SL-main.zip",
    demoLink: "https://example.com/demo3.mp4",
    features: ["Sign language translation", "Video processing", "Real-time conversion"]
  },
  {
    name: "VoiceCommand",
    description: "Voice-controlled browser navigation and actions",
    zipLink: process.env.PUBLIC_URL + "/extensions/VoiceCommand-main.zip",
    demoLink: "https://example.com/demo4.mp4",
    features: ["Voice recognition", "Command shortcuts", "Hands-free browsing"]
  }
];

const ExtensionCard = ({ name, zipLink, demoLink, description, features }) => (
  <div className="glass-card">
    <h2 className="card-title">
      <FaChrome className="text-accent" />
      {name}
    </h2>
    <div className="card-content">
      <p className="description">{description}</p>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>
            <FaLightbulb className="feature-icon" /> {feature}
          </li>
        ))}
      </ul>
    </div>
    <div className="button-group">
      <a href={zipLink} download className="btn-primary">
        <FaDownload /> Download Extension
      </a>
    </div>
    <video controls className="video-preview">
      <source src={demoLink} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

const ExtensionsPage = () => {
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">AccessiGen</h1>
        <p className="subtitle">
          Enhance your browsing experience with powerful Chrome extensions
        </p>
      </header>
      <div className="extensions-grid">
        {extensions.map((ext, index) => (
          <ExtensionCard key={index} {...ext} />
        ))}
      </div>
    </div>
  );
};

export default ExtensionsPage;
