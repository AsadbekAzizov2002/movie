import axios from "axios";

export const api =axios.create({
        baseURL:"https://api.themoviedb.org/3"
})


api.interceptors.request.use((config)=>{
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGNjNjgyZThlZTQyOGZhNjg3ZWE4YmIxYTlhOWNmNCIsIm5iZiI6MTc1NTI2NDg5My4yNjIsInN1YiI6IjY4OWYzNzdkODBmNWQwZWZjZWI3MWM0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XVPdVLbcNsXWybRJn7kunzjjpvekUaRzthTi6DEonS0"

 

config.headers.Authorization =`Bearer ${ token}`

    return config
})
