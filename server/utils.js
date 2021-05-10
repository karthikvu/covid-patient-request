const mapping = {
    bunumber: 'buNumber',
    phonealt: 'phoneAlt',
    ngoname: 'ngoName',
    created_on: 'createdAt'
}

const mapKeys = (body) => {
    return Object.keys(body).reduce((acc, current) => {
        if(mapping[current]){
            acc[mapping[current]] = body[current]
        } else {
            acc[current] = body[current]
        }
        return acc
    }, {})
}

module.exports = {
    mapKeys
}