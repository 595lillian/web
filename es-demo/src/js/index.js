// function deepCopy(obj) {
//     if (Array.isArray(obj)) {
//         return obj.map(item => deepCopy(item));
//     } else if (obj && typeof obj === 'object') {
//         let newObj = {};
//         for (let key in obj) {
//             if (obj.hasOwnProperty(key)) {
//                 newObj[key] = deepCopy(obj[key]);
//             }
//         }
//         return newObj;
//     } else {
//         return obj;
//     }
// }
//对象的遍历方式