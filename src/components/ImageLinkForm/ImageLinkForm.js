import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange , onButtonSubmit }) => {
    return (
        <div className='image-link-form-container'>
            <p>{'This Magic Brain will detect faces in your pictures. Git it a try.'}</p>
            <div className='search-form center'>
                <input id='search-input' type='tex' onChange={onInputChange}/>
                <button className='Tilt' onClick= {onButtonSubmit}>Detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;
