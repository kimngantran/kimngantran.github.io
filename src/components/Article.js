function Article(props) {
  return (
    <div className="text-center p-2">
          <img src={props.img} alt="article images" className="news-photo" />
          <a href={props.src} className="btn btn-dark m-2 stick-bottom" target="_blank" rel='noreferrer'>Read full article</a>
        </div>
  );
}

export default Article;