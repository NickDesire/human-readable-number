module.exports = function toReadable (number) {
    let result = ""
    let str = String(number)
    let size = str.length
    let arr1 = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    let arr2 = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
    let arr3 = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
    if(size == 1){
        result += arr1[number];
        return result
    }
    if(size == 2) {
        let des = Math.floor(number %100/10)
        let ed = Math.floor(number %10)
        if (number < 20) {
            result += arr2[Math.floor(number % 10)]
            return result
        } else {
            if (number % 10 == 0) {
                result += arr3[des]
                return result
            }

            result += arr3[des] + " " + arr1[ed]
            return result
        }
    }
        if(size == 3) {
            let des = Math.floor(number %100/10)
            let ed = Math.floor(number %10)
            let sot = Math.floor(number /100)
            if(ed == 0 && des == 0){
                result += arr1[sot] + " hundred"
                return result
            }
            if(des == 0){
                result += arr1[sot] + " hundred " + arr1[ed]
                return result
            }
            if(des == 1){
                result += arr1[sot] + " hundred " + arr2[ed]
                return result
            }
            if(des !== 0 && ed == 0){
                result += arr1[sot] + " hundred " + arr3[des]
                return result
            }
            result += arr1[sot] + " hundred " + arr3[des] + " " + arr1[ed]
            return result


        }


}
