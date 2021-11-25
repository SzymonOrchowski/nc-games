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


