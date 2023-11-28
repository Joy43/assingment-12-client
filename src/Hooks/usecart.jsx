import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "./Axiospublic";
import useAuth from "./useAuth";
import useaxiosSequre from "./AxiosSequre";

const useCart = () => {
    const axiosSecure=useaxiosSequre()
    const { user} = useAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            // const res = await axiosSecure.get('/carts');
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            // const res = await AxiosPublic.get('/carts')
            return res.data;
        }
    })

    return [cart, refetch]
};


export default useCart;