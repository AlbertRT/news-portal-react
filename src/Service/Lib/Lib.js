import moment from "moment"

export const CalculateDate = date => {
    const arrayDate = moment(date).toArray()
    let result = moment(arrayDate).fromNow()

    return result
}