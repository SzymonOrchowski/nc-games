export const formatDate = (created_at, specsArray) => {
    let isolatedDate = created_at.slice(0,10)
    let isolatedHour = created_at.slice(11,16)

    let finalString = ''
    for (let i = 0; i < specsArray.length; i++) {
        if (i !== 0) finalString += ' '
        if (specsArray[i] === 'date') finalString += isolatedDate
        if (specsArray[i] === 'hour') finalString += isolatedHour
    }

    return finalString
}

export const sortArrayByKey = (array, key) => {
    array.sort((a, b) => {
        let commentA = a[key]
        let commentB = b[key]
        if ( commentA < commentB ) {
            return 1
        }
        if ( commentA > commentB ) {
            return -1
        }
        return 0
    })
    return array
}
