import React, { useState, useEffect } from 'react';
import client from '../Apollo';
import gql from 'graphql-tag';

const query = gql`
query {
    articles {
        title
        urlToImage
        url
        source {
            name
        }
    }
}
`


const Article = ({data}) => {
    return(
    <a href={data.url} target="_blank" className="article">
        <img className="article__image" src={data.urlToImage} alt=""/>
        <div className="article__source">{data.source.name}</div>
        <div className="article__title">{data.title}</div>
    </a>
    )
}

const Feed = () => {
    const [articles, setArticles] = useState([])
    useEffect(
        () => {
    client.query({query})
    .then(response => setArticles(response.data.articles))
    .catch(error => console.log(error))
        },
        []

    )


    client.query({query})
        .then(data => console.log(data))
        .catch(error => console.log(error))
        return <div className="feed">
            { articles.map((article, index) =>(
               <Article key={index} data={article} />
            ))}
        
        </div>
}

export default Feed;