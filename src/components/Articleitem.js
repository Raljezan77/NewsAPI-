import React from 'react'

const Articleitem = ({title,description,url,urlToImage, author, publishedAt}) => {
    return (
        <div>
            <div className="text-sm font-large text-gray-500">Author:{author}, published at:{publishedAt} </div>
            <img className="w-56 object-contain"  src={urlToImage} alt="Image"/>
            <h3><a title href={url}> Title:{title}</a></h3>
            <p>Description:{description}</p>
        </div>
    );
};

export default Articleitem
