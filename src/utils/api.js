import axios from "axios"

const ncGames = axios.create({
    baseURL: 'https://board-games-information-place.herokuapp.com/api'
})

export const getCategories = () => {
    return ncGames.get('/categories').then((res)=>{
        const categoryNames = res.data.categories.map((category) => {return category.slug})
        return categoryNames
    })
}

export const getReviews = (params) => {
    let path = '/reviews'
    if (params !== undefined) {
        if (params.hasOwnProperty('review_id')) {
            path += `/${params.review_id}`
        }
        if (params.hasOwnProperty('category')) {
            if (params.category !== 'all') {
           path += `?category=${params.category}`
            } else {
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

export const getComments = (review_id) => {
    return ncGames.get(`/reviews/${review_id}/comments`).then((res) => {
        if (res.data.hasOwnProperty('comments')) {
            return res.data.comments
        } else {
            return []
        }
    })
}

export const postComment = (review_id, user, commentBody) => {
    const commentObj = {
        username: 'AAA',
        body: commentBody
    }

    return ncGames.post(`/reviews/${review_id}/comments`, commentObj).then((res) => {
       return res.data.comment
    })
}

export const deleteComment = (comment_id) => {
    return ncGames.delete(`comments/${comment_id}`)
}
