const Article = ( {article} ) => {
    const {image, writer, header, text} = article
    return ( 
        <div className="article--container">
            <img src={image} alt={header}/>
            <div className="article--info">
                <div className="writer">{writer}</div>
                <h2>{header}</h2>
                <p>{text}</p>
            </div>
        </div>
     );
}
 
export default Article;