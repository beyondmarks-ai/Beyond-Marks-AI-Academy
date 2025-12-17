import React from 'react';
import './ToolsMarquee.css';

const tools = [
    { name: 'OpenAI', logo: 'https://cdn.simpleicons.org/openai/ffffff' },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'Github', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'Notion', logo: 'https://cdn.simpleicons.org/notion/ffffff' }
];

const ToolsMarquee = () => {
    return (
        <div className="container tools-marquee-wrapper" style={{ marginTop: '40px', marginBottom: '40px' }}>
            <p className="tools-title">Modern AI Tools We Learn</p>

            <div className="marquee-container">
                <div className="marquee-track">
                    {/* First set of logos */}
                    {tools.map((tool, index) => (
                        <div className="tool-item" key={`t1-${index}`}>
                            <img 
                                src={tool.logo} 
                                alt={`${tool.name} logo`} 
                                title={tool.name} 
                                className={`tool-logo ${tool.name.toLowerCase()}-logo`}
                                width="32"
                                height="32"
                                loading="lazy"
                                onError={(e) => {
                                    console.error(`Failed to load logo for ${tool.name}:`, tool.logo);
                                    // Fallback: try alternative white source for OpenAI
                                    if (tool.name === 'OpenAI') {
                                        e.target.src = 'https://cdn.simpleicons.org/openai/ffffff';
                                    }
                                }}
                                onLoad={() => {
                                    if (tool.name === 'OpenAI') {
                                        console.log('OpenAI logo loaded successfully');
                                    }
                                }}
                            />
                            <span>{tool.name}</span>
                        </div>
                    ))}

                    {/* Duplicate set for seamless scrolling */}
                    {tools.map((tool, index) => (
                        <div className="tool-item" key={`t2-${index}`}>
                            <img 
                                src={tool.logo} 
                                alt={`${tool.name} logo`} 
                                title={tool.name} 
                                className={`tool-logo ${tool.name.toLowerCase()}-logo`}
                                width="32"
                                height="32"
                                loading="lazy"
                                onError={(e) => {
                                    console.error(`Failed to load logo for ${tool.name}:`, tool.logo);
                                    // Fallback: try alternative white source for OpenAI
                                    if (tool.name === 'OpenAI') {
                                        e.target.src = 'https://cdn.simpleicons.org/openai/ffffff';
                                    }
                                }}
                                onLoad={() => {
                                    if (tool.name === 'OpenAI') {
                                        console.log('OpenAI logo loaded successfully');
                                    }
                                }}
                            />
                            <span>{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

};

export default ToolsMarquee;
