import React, { useEffect, useState } from "react";
import axios from "axios";
import {NEWS_API_KEY} from "../config/config";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


    const {newsCategory, updateProgressBar} = props;

    const updateNews = () => {
        console.log(`page #${page}`);
        axios
            .get(`https://newsapi.org/v2/top-headlines?country=in&category=${newsCategory}&from=2022-02-22&to=2022-02-22&sortBy=popularity&apiKey=${NEWS_API_KEY}&page=${page}&pageSize=${props.pageSize}`)
            .then((response) => {
                setArticles(response.data.articles);
                setTotalResults(response.totalResults);
                setPage(page+1);
            })
            .catch((error) => {
                console.log(error);
            });
            
        updateProgressBar(100);
    }
    
    //document.title = `NewsForMe - ${props.newsCategory.charAt(0).toUpperCase() + props.newsCategory.slice(1)}`;
    
    useEffect(() => {
        updateNews();
    }, [newsCategory]);

    const fetchMoreData = () => {
        console.log(`page #${page}`);
        axios
            .get(`https://newsapi.org/v2/top-headlines?country=in&category=${newsCategory}&from=2022-02-22&to=2022-02-22&sortBy=popularity&apiKey=${NEWS_API_KEY}&page=${page}&pageSize=${props.pageSize}`)
            .then((response) => {
                setArticles(articles.concat(response.data.articles));
                setTotalResults(response.totalResults);
                setPage(page + 1);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    return (
        <div className="container">
            <h1 className="text-center mt-3">{`NewsForMe - All ${props?.newsCategory.charAt(0).toUpperCase() + props?.newsCategory.slice(1)} News`}</h1>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
            >
            <div className="news-container row col-md-12 my-3">
                {articles.map((article) => {
                    return <NewsItem key={article.url} urlToImage={article.urlToImage} title={article.title} description={article.description} url={article.url} />
                })}
            </div>
            </InfiniteScroll>
        </div>
    )
}

export default News;