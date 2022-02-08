import { useEffect, useState } from "react";
import axios from "axios";
import {NEWS_API_KEY} from "../config/config";
import NewsItem from "./NewsItem";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const {newsCategory, updateProgressBar} = props;
    
    document.title = `NewsForMe - ${props.newsCategory.charAt(0).toUpperCase() + props.newsCategory.slice(1)}`;
    
    useEffect(() => {
        axios
            .get(`https://newsapi.org/v2/top-headlines?category=${newsCategory}&from=2022-02-07&to=2022-02-07&sortBy=popularity&apiKey=${NEWS_API_KEY}`)
            .then((response) => {
                setArticles(response.data.articles);
            })
            .catch((error) => {
                console.log(error);
            });
            
        updateProgressBar(100);
    }, [newsCategory]);
    
    return (
        <div className="container">
            <h1 className="text-center mt-3">{`NewsForMe - All ${props?.newsCategory.charAt(0).toUpperCase() + props?.newsCategory.slice(1)} News`}</h1>
            <div className="news-container row col-md-12 my-3">
                {articles.map((article) => {
                    return <NewsItem key={article.url} urlToImage={article.urlToImage} title={article.title} description={article.description} url={article.url} />
                })}
            </div>
        </div>
    )
}

export default News;