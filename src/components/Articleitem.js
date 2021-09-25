import React from 'react'

const Articleitem = ({title,description,url,urlToImage}) => {
    return (
        <div>
            <img className="w-56 object-contain"  src={urlToImage} alt= "Image"/>
            <h3><a href={url}>{title}</a></h3>
            <p>{description}</p>
        </div>
    );
};

export default Articleitem
