export const years = Array.from(Array(new Date().getFullYear() - 1910), (_, i) => (i + 1911).toString())
export const days = Array.from({ length: 31 }, (_, i) => i + 1)

export const getMonth = (monthVal, arr) => {
    let res;
    arr.forEach((month, idx) => { 
        if (month === monthVal) {
            res = idx
        }
    })
    return res
}