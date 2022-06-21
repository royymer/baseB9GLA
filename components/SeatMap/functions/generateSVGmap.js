

const generateSVGmap =  (arr, label, exp) => {
    let locations = [];

    for (let i in arr) {
        let obj = {
            path: arr[i],
            name: `${exp}_${i}`,
            id: `${exp}${i}`
        }
        locations.push(obj);
    }

    let obj1 = {
        "label": `${label}`,
        "viewBox": "0 0 958 989",
        "locations": locations
    }
    return obj1
}


export default generateSVGmap;