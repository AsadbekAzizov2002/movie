
import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"




export const useMovie = () => {
    const getMovie = () => useQuery({
        queryKey: ["movie-key"],
        queryFn: () => api.get("/discover/movie").then(res => res.data)
    })
    
        
    return { getMovie }
}



//     // const createMovie = useMutation({
//     //     mutationFn: (data: any) => api.post("/discover/movie" , data)
//     // }) xullas bu obshi tushuntirganda  create yani qushadi 
