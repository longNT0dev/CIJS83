//TODO: 1. Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.

// push, concat, filter, slice, splice
let str = "long"
let result = ""
// Làm sao nối 2 chuỗi với nhau ? 'a' +  'b' -> 'ab' 
// for(let i = str.length - 1; i >= 0 ; i--) {
//     result += str[i]
// }

// function reverseString() {

// }

// input -> output -> ES5  -> regular function
function reverseString(str) {
    if (!str) { // falsy - "", null, undefined, 0 
        // Các giá trị truyền vào rỗng hoặc không tồn tại
        alert("Vui lòng nhập giá trị muốn chuyển đổi")
        return
    }

    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }

    return result
}
// Gọi hàm
console.log(reverseString("quan"))
// ES6 
const reverseStringES6 = (str) => {
    if (!str) { // falsy - "", null, undefined, 0 
        // Các giá trị truyền vào rỗng hoặc không tồn tại
        alert("Vui lòng nhập giá trị muốn chuyển đổi")
        return
    }

    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }

    return result
}
// --> Khác biệt lớn nhất là ở từ khóa this 


//TODO: 2. Viết một function xoá các phần từ trùng lặp trong một mảng các số.

// let input = [1, 2, 3, 5, 4, 2, 6, 4]
// let uniqueNumberArray = new Set(input)

// console.log(uniqueNumberArray)

//TODO: 3. Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần xuất hiện của nó trong mảng đó

// Input: [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]
// Output: {value: 3, count: 3}

let input = [1, 2, 4, 5, 7, 4, 2, 1, 4, 3, 5, 3]

let dictionary = {
    // key1: "", 
    // key2: "value2", 
    // key3: "value3"
}

// console.log('key1' in dictionary)
// console.log('key4' in dictionary)

for (let i = 0; i < input.length; i++) {
    let value = input[i]
    if (!(value in dictionary)) {
        // Làm sao thêm cặp key value vào trong object
        dictionary[input[i]] = 1
    } else {
        // Nếu đã có key đó trong object 
        dictionary[input[i]]++
    }
}

let maxCount = 0
let maxNumber = 0
for (let number in dictionary) {
    if (dictionary[number] > maxCount) {
        maxCount = dictionary[number]
        maxNumber = number
    }
}

console.log(dictionary)
console.log({ value: maxNumber, count: maxCount })

// console.log(dictionary)