import React from 'react';
import './ToolsMarquee.css';

const tools = [
    { name: 'OpenAI', url: 'https://cdn.simpleicons.org/openai/ffffff' },
    { name: 'TensorFlow', url: 'https://cdn.simpleicons.org/tensorflow/ffffff' },
    { name: 'Python', url: 'https://cdn.simpleicons.org/python/ffffff' },
    { name: 'React', url: 'https://cdn.simpleicons.org/react/ffffff' },
    { name: 'Figma', url: 'https://cdn.simpleicons.org/figma/ffffff' },
    { name: 'Docker', url: 'https://cdn.simpleicons.org/docker/ffffff' },
    { name: 'Github', url: 'https://cdn.simpleicons.org/github/ffffff' },
    { name: 'Notion', url: 'https://cdn.simpleicons.org/notion/ffffff' },
    { name: 'Midjourney', url: 'https://cdn.simpleicons.org/artstation/ffffff' }, // Using ArtStation as generic creative placeholder if MJ not available
];

const ToolsMarquee = () => {
    return (

        <div className="container" style={{ marginTop: '40px', marginBottom: '40px' }}>
            <p className="tools-title">Modern AI Tools We Learn</p>

            <div className="marquee-container">
                <div className="marquee-track">
                    {/* First set of logos */}
                    {tools.map((tool, index) => (
                        <div className="tool-item" key={`t1-${index}`}>
                            <img src={tool.url} alt={tool.name} title={tool.name} />
                            <span>{tool.name}</span>
                        </div>
                    ))}

                    {/* Duplicate set for seamless scrolling */}
                    {tools.map((tool, index) => (
                        <div className="tool-item" key={`t2-${index}`}>
                            <img src={tool.url} alt={tool.name} title={tool.name} />
                            <span>{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

};

export default ToolsMarquee;
