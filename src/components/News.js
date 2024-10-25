import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'
import Spinner from './Spinner';

function News(props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResult, setTotalResult] = useState(0);
    const [loading, setLoading] = useState(false);
    const [readableData, setReadableData] = useState('');

    const apiToReadable = async () => {
        try {
            props.setProgress(0);
            let URL = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
            setLoading(true);
            props.setProgress(30);
            let fetchData = await fetch(URL);
            let readableData = await fetchData.json();
            props.setProgress(60);
            setTotalResult(readableData.totalResults);
            setArticles(readableData.articles);
            setReadableData(readableData);
            setLoading(false);
            console.log('Fetched data for screening: ', totalResult)
            props.setProgress(100);
            document.title = `GlobeBriefs - ${upperCase(props.category)} - A Day in the Life of Breaking News`;
        } catch (error) {
            console.log('Error while fetching api:', error);
        }
    }
    useEffect(() => {
        apiToReadable();
        // eslint-disable-next-line
    }, []);
    const nextPage = async () => {
        let URL = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
        setPage(page + 1);
        setLoading(true);
        let fetchData = await fetch(URL);
        let readableData = await fetchData.json();
        setLoading(false);
        setArticles(articles.concat(readableData.articles))
    }
    const upperCase = (word) => {
        word = word.toLowerCase();
        return word[0].toUpperCase()+word.slice(1);
    }

    const alternateImg = 'https://st4.depositphotos.com/1216158/25288/i/450/depositphotos_252880080-stock-photo-prohibition-sign-image-on-red.jpg';
    let textColor = props.textColor;
    let backgroundColor = props.bgColor;

    return (
        <section className='container' style={{marginTop:'5rem'}}>
            <h3 className={`my-4 text-${textColor}`}>GlobeBriefs - Top {upperCase(props.category)} heading</h3>
            {loading && <Spinner />}
            {readableData.status === 'ok' ? <div className='container'>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={nextPage}
                    hasMore={articles.length !== totalResult}
                    loader={<Spinner />}
                >
                    <div className='container'>
                        <div className='row'>
                            {articles.map((article, index) => {
                                return <div className='col-md-4 my-2' key={article.url + index}>
                                    <NewsItem
                                        title={article.title ? article.title.slice(0, 45) : ''}
                                        description={article.description ? article.description.slice(0, 90) : ''}
                                        imageUrl={article.urlToImage != null ? article.urlToImage : alternateImg}
                                        anotherURL={article.url}
                                        author={article.author ? article.author : 'Unknown'}
                                        dateTime={new Date(article.publishedAt).toLocaleDateString()}
                                        publishedBy={article.source.name}
                                        textColor={textColor}
                                        bgColor={backgroundColor}
                                    />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
                : <div className={`mt-5 text-${textColor}`}>
                    <h5> Sorry, some server error occurred:</h5>
                    <h5 className='my-4'>Error Type: <span className="badge bg-danger">{readableData.code}</span></h5>
                    <h5 className=''>Message: <span className='badge bg-primary'>{readableData.message}</span></h5>
                </div>}
        </section >
    );
}
export default News