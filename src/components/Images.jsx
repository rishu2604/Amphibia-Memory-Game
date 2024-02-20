import React from 'react';
import '../styles/images.css';

export default function Images({ clickHandler, imagesPaths }) {
    return (
        <div className='icon'>
            {imagesPaths.map((img, index)=>(
                <button key={img.name} onClick={() => clickHandler(img.name)}>
                    <img src={img.src} alt={`pokemon${index}`} />
                    <strong>{img.name}</strong>
                </button>
            ))}
        </div>
    );
}
