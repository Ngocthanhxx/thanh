// function ktr_ntn(x) {
//     // điều kiện là snt
//     var y = true
//     if (x < 2) {
//         y = false;
//     }
//     if (x == 2) {
//         y = true
//     } else if (x % 2 == 0) {
//         y = false;
//     } else {
//         for (var i = 3; i < x; i += 2) {
//             if (x % i == 0) {
//                 y = false;
//                 break;
//             }
//         }
//     }

//     var snt = document.getElementsByTagName('h1')
//     if (y == true) {
//         let a = `<h2>${x}: là số nguyên tố'</h2>`
//         snt.innerHTML = `<h2>${x}: là số nguyên tố'</h2>`
//         // console.log(`${x}: là số nguyên tố `)
//     } else {
//         console.log(`${x}: không là số nguyên tố' `)
//     }
//     snt.appendChild(h1)
// }
// ktr_ntn(5);



// //Hien thi dialog -> cho phep nhap gia tri cua N
// var N = prompt('Nhap gia tri N')
// //Chuyen kieu du lieu cua N tu string toi int
// N = parseInt(N)
// //xay dung do cao cua hinh tam giac
// for(i=0;i<N;i++) {
//     //tao hang (row) *
//     for(j=0;j<=i;j++) {
//         document.writeln(" * ")
//     }

//     //xuong dong khi hien thi ket qua cua tung hang
//     document.writeln("<br/>")}




// let result = '';
// let condition = prompt('nhap so thoa man dk 1-10')
// console.log(condition)
// if(1 < condition & condition < 10) {
//     function numberOneTriangle(condition) {
//         for (let i = 1; i <= condition*2 ; i++) {
//         for(let j = 1; j<=condition;j++) {
//             if(i<=condition) {
//                 if(j > condition - i) {
//                     result +='*'
//                 } else {
//                     result+=''
//                 }
//             }
//         }
//         // xuống dòng
//         // document.writeln(result)
//         result+='\n';
//     }
    
//     // document.writeln("<br/>")
//         console.log(result);
    
//     }
    
//     numberOneTriangle(condition)
// }

