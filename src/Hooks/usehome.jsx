import { useState } from "react";
import { useEffect } from "react";


const useHome = () => {
     const [product, setproduct] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/homeproduct')
            .then(res => res.json())
            .then(data => {
                setproduct(data);
                setLoading(false);
            });
    }, [product])
    return [product,loading]
};

export default useHome;