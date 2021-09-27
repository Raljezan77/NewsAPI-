import React ,{useEffect, useState} from 'react';
import Axios from 'axios';
import Articleitem from './Articleitem';
import react from 'react';
const Articlelist = () => {
    const[articles,setArticles]= useState([]);
    useEffect(() =>{

        const getArticles= async () => {
        const res = await Axios.get ("https://newsapi.org/v2/top-headlines?country=us&pagesize=10&page=2&apiKey=6a98207706384c73acf0aabc17ec782d");
        setArticles(res.data.articles);    
        console.log(res);  
    }
    getArticles();

    }, [], );

    return (     <div>

        {articles.map(({title, description, url, urlToImage, author, publishedAt}) =>(
               <Articleitem title = {title} description={description} url={url} urlToImage={urlToImage} author={author} publishedAt={publishedAt}/>
        ))}
    </div>
    )
};

export default Articlelist; 
