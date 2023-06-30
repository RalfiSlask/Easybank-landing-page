import imageCurrency from "../images/image-currency.jpg";
import imageRestaurant from "../images/image-restaurant.jpg";
import imagePlane from "../images/image-plane.jpg";
import imageConfetti from "../images/image-confetti.jpg";
import Article from "./Article";

const Articles = () => {
    const articlesArray = [
        {id: 1, image: imageCurrency, writer: "By Claire Robinson", header: "Receive money in any currency with no fees", 
        text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"},
        {id: 2, image: imageRestaurant, writer: "By Wilson Hutton", header: "Treat yourself without worrying about money", 
        text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"},
        {id: 3, image: imagePlane, writer: "By Wilson Hutton", header: "Take your Easybank card wherever you go", 
        text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"},
        {id: 4, image: imageConfetti, writer: "By Claire Robinson", header: "Our invite-only Beta accounts are now live!", 
        text: "  After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."}
    ]

    return ( 
    <>  
        <h1 className="articles--header">Latest Articles</h1>
        <div className="articles--wrapper">
            {articlesArray.map(article => {
                return <Article key={article.id} article={article}/>
            })}
        </div>
    </> 
    
    );
}
 
export default Articles;