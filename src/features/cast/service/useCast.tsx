// import { useQuery } from "@tanstack/react-query"
// import { api } from "../../../shared/api"


// export const useMovie = () => {
//     const getMovie = () => useQuery({
//         queryKey: ["movie-key"],
//         queryFn: () => api.get("/discover/movie").then(res => res.data)

//     })

//     // const createMovie = useMutation({
//     //     mutationFn: (data: any) => api.post("/discover/movie" , data)
//     // }) xullas bu obshi tushuntirganda  create yani qushadi 
//     return { getMovie }
// }


import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"




export const useCast = () => {

   

    const getCastById = (id: number) => useQuery({
        queryKey: ["cast-key", id],
        queryFn: () => api.get(`/person/${id}`).then((res) => res.data)
    }) 
    
    const getCastItem = (id: number , path:string) => useQuery({
        queryKey: ["cast-key", id, path],
        queryFn: () => api.get(`/person/${id}/${path}`).then((res) => res.data)
    })

    
    
    
    return { getCastById, getCastItem }
}



































// const getMovieItems = (id: number, path: string) =>
//     useQuery({
//         queryKey: ["movie-key", id, path],
//         queryFn: () => api.get(`/movie/${id}/${path}`).then((res) => res.data),
//     });

 