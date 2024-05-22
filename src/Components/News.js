// import React, { Component } from 'react'
// import Newsitem from './Newsitem'
// import Spinner from './spinner';
// import PropTypes from 'prop-types';
// import InfiniteScroll from 'react-infinite-scroll-component';

// export default class News extends Component {

//   // if props to be pass through class
//   static defaultProps = {
//     country: "in",
//     pagesize: 6,
//     category: 'general',
//   }

//   static propTypes = {
//     country: PropTypes.string,
//     pagesize: PropTypes.number,
//     category: PropTypes.string,
//   }

//   capitalizefirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults: 0
//     }
//     document.title = `${this.capitalizefirstLetter(this.props.category)} - NewsArena`;
//   }

//   async componentDidMount() {
//     this.props.setProgress(10);
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&q=india&pagesize=${this.props.pagesize}`;
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=00a2c4b3b9eb41258c7c451e6ad6efc7&q=india&pagesize=${this.props.pagesize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     this.props.setProgress(30);
//     let parseddata = await data.json();
//     this.props.setProgress(50);
//     this.setState({
//       articles: parseddata.articles,
//       totalResults: parseddata.totalResults,
//       loading: false,
//     })
//     this.props.setProgress(100);
//   }

//   handleprevclick = async () => {
//     this.props.setProgress(10);
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&q=india&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=00a2c4b3b9eb41258c7c451e6ad6efc7&q=india&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     this.props.setProgress(30);
//     let parseddata = await data.json();
//     this.props.setProgress(50);
//     this.setState({
//       page: this.state.page - 1,
//       articles: parseddata.articles,
//       loading: false,
//     })
//     this.props.setProgress(100);
//   }

//   handlenextclick = async () => {
//     this.props.setProgress(10);
//     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
//       // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&q=india&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
//       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=00a2c4b3b9eb41258c7c451e6ad6efc7&q=india&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
//       this.setState({ loading: true });
//       let data = await fetch(url);
//       this.props.setProgress(30);
//       let parseddata = await data.json();
//       this.props.setProgress(50);
//       this.setState({
//         page: this.state.page + 1,
//         articles: parseddata.articles,
//         loading: false,
//       })
//       this.props.setProgress(100);
//     }
//   }

//   fetchMoreData = async () => {
//     this.setState({
//       page: this.state.page + 1,
//     });

//     // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&q=india&page=${this.state.page}&pagesize=${this.props.pagesize}`;
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=00a2c4b3b9eb41258c7c451e6ad6efc7&q=india&page=${this.state.page}&pagesize=${this.props.pagesize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parseddata = await data.json();
//     this.setState({
//       articles: this.state.articles.concat(parseddata.articles),
//       totalResults: parseddata.totalResults,
//       loading: false,

//     })
//   };
//   render() {
//     return (
//       <>
//         <h2 className='text-center mt-4 mb-4'>Top Headlines - {this.props.category}</h2>
//         {this.state.loading && <Spinner />}

//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner />}
//         >
//           <div className="container">
//             <div className="row">
//               {this.state.articles.map((ele) => {
//                 return <div className="col-lg-4 col-md-5 col-6" key={ele.url}>
//                   <Newsitem title={ele.title ? ele.title.slice(0, 45) : ""} description={ele.description ? ele.description.slice(0, 88) : ""} imageurl={ele.urlToImage ? ele.urlToImage : "https://media.istockphoto.com/id/1290904409/photo/abstract-digital-news-concept.webp?b=1&s=170667a&w=0&k=20&c=WMVA8KKLRL3KbUtPCmw5RQf2frl995MtI1qEmsqKdII="}
//                     newsurl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name} />
//                 </div>
//               })}
//             </div>
//           </div>
//         </InfiniteScroll>

//         {/* <div className="container d-flex justify-content-between">
//           <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprevclick}>&larr; Prev</button>
//           <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
//         </div> */}
//       </>
//     )
//   }
// }



import React, { useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const capitalizefirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const updatenews = async () => {
    props.setProgress(10);
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&q=india&pagesize=${this.props.pagesize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=00a2c4b3b9eb41258c7c451e6ad6efc7&q=india&page=${page}&pagesize=${props.pagesize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseddata = await data.json();
    props.setProgress(50);
    setarticles(parseddata.articles);
    settotalResults(parseddata.totalResults);
    setloading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizefirstLetter(props.category)} - NewsArena`;
    updatenews();
  }, [])

  // const handleprevclick = async () => {
  //   setpage(page - 1);
  //   updatenews();
  // }

  // const handlenextclick = async () => {
  //   setpage(page + 1);
  //   updatenews();
  // }


  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=00a2c4b3b9eb41258c7c451e6ad6efc7&q=india&page=${page + 1}&pagesize=${props.pagesize}`;
    setpage(page + 1);
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&q=india&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    setloading(true);
    let data = await fetch(url);
    let parseddata = await data.json();
    setarticles(articles.concat(parseddata.articles));
    settotalResults(parseddata.totalResults)
    setloading(false);
  };
  return (
    <>
      <h2 className='text-center mt-4 mb-4' id = 'heading'>Top Headlines - {props.category}</h2>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((ele) => {
              return <div className="col-lg-4 col-md-5 col-6" key={ele.url}>
                <Newsitem title={ele.title ? ele.title.slice(0, 45) : ""} description={ele.description ? ele.description.slice(0, 88) : ""} imageurl={ele.urlToImage ? ele.urlToImage : "https://media.istockphoto.com/id/1290904409/photo/abstract-digital-news-concept.webp?b=1&s=170667a&w=0&k=20&c=WMVA8KKLRL3KbUtPCmw5RQf2frl995MtI1qEmsqKdII="}
                  newsurl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>

      {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprevclick}>&larr; Prev</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
        </div> */}
    </>
  )
}
News.defaultProps = {
  country: "in",
  pagesize: 6,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
}

export default News;