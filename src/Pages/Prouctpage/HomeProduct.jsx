import Videoslider from "./Videoslider/Videoslider";
import {Helmet} from "react-helmet";

const HomeProduct = () => {
    return (
        
        <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Products</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
           <Videoslider></Videoslider> 
        </div>
        </div>
    );
};

export default HomeProduct;