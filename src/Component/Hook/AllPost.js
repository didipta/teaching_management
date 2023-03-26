import { useQuery } from "@tanstack/react-query";


export const Allpsot = () => {
   
    const {data: allpost = [],refetch,isLoading} = useQuery({
        queryKey: ['allpost'],
        queryFn: async() =>{
            const res = await fetch(`http://127.0.0.1:8000/api/getAllpost`)
            const data = await res.json();
            return data;
           
        }
    });
    return [allpost,isLoading,refetch];
};