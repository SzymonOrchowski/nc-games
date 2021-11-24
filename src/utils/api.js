import axios from "axios"

const ncGames = axios.create({
    baseURL: 'https://board-games-information-place.herokuapp.com/api'
})

export const getCategories = () => {
    return ncGames.get('/categories').then((res)=>{
        return res.data.categories;
    })
}

export const getReviews = (params) => {
    let path = '/reviews'
    if (params !== undefined) {
        if (params.hasOwnProperty('review_id')) {
            path += `/${params.review_id}`
        }
        if (params.hasOwnProperty('category')) {
            if (params.category !== 'All') {
           path += `?category=${params.category}`
            } else {
                console.log(params.category)
                path += ''
            }
        }
    }

    return ncGames.get(path).then((res)=>{
        if (res.data.reviews === undefined) {
            return res.data.review
        } else {
            return res.data.reviews;
        }
    })
}