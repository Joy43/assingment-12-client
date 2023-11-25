import { useState } from "react";
import { useEffect } from "react";


const useProduct = () => {
     const [product, setproduct] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                setproduct(data);
                setLoading(false);
            });
    }, [product])
    return [product,loading]
};

export default useProduct;