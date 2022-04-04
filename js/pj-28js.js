// let ob = {

//     ch1 : 'vue.js',
//     ch2 : 'js course',
//     ch3 : 'cs50',
//     ch4 : 'vue.js',
//     ch5 : 'js course',
//     ch6 : 'cs50',

// }
// ;
// let ob_date =
// {
//     ch1_date : '28/1 - 31/1',
//     ch2_date : '1/2 - 30/2',
//     ch3_date : '1/3 - 30/3',

// };

// let sec = document.createElement('section')
// document.body.append(sec)

// let dv_pu_data = document.createElement('div')
// dv_pu_data.className = 'dv_up_data'

// let dv_check_box = document.createElement('div')
// dv_check_box.className = 'dv_check_box '

// sec.append(dv_pu_data ,dv_check_box )

// for(let el in ob)
// {

//   let up_mark = document.createElement('div')
//   let true_mark =document.createElement('div')

//   up_mark.className = 'up_mark'
//   true_mark.className = 'true_mark'

//   up_mark.append(true_mark)
//   dv_check_box.append(up_mark)

//   let dv = document.createElement('div')
//   dv.className = 'dv'
//   dv.append(ob[el])
//   dv_pu_data.append(dv)

// }

// dv_pu_data.append(dv)

// for(let q = 0 ; q <= sec.children.length; q++ )
// {

//     // let up_mark = document.createElement('div')
//     // let true_mark =document.createElement('div')

//     // up_mark.className = 'up_mark'
//     // true_mark.className = 'true_mark'

//     // document.body.append(up_mark , true_mark)
//     // up_mark.append(true_mark)
//     // // sec.append(up_mark)

// }

// let ar1 = ['3','5','6']
// let ar2 = ['1','4','6']

// for(let e = 0  ; e <= ar1.length ; e++ )
// {

//         if( ar1[e] !== ar2[e])
//     {
//         true_mark[l].style = 'display:none'
//         // console.log('ok')
//     }
// }

////////////////////////////////////////////////////////

// create nav abr //
top_footer = document.createElement("nav");
document.body.insertBefore(top_footer, document.body.childNodes[0]);

to_do_list = document.createElement("p");
to_do_list_text = document.createTextNode("to do list");
to_do_list.append(to_do_list_text);
top_footer.append(to_do_list);

// create container//
container = document.createElement("div");
document.body.insertBefore(container, document.body.childNodes[1]);
container.className = "containe";

head = document.createElement("div");
container.append(head);
head.className = "head";

head_p1 = document.createElement("p");
head_p2 = document.createElement("p");
p1_text_head = document.createTextNode("انجازات 2022");
p2_text_head = document.createTextNode(
  "هنا بإذن الله سأكتب كل ما سوف أقوم بإنجازه في سنة 2022 بإذن الله"
);
head_p1.className = "head_p1";
head_p2.className = "head_p2";

head.append(head_p1, head_p2);
head_p1.append(p1_text_head);
head_p2.append(p2_text_head);

// create sec data//
sec = document.createElement("section");
sec.className = "sec";
// document.body.insertBefore(sec , document.body.childNodes[1])
container.append(sec);

red = "red";
head_p1.onclick = function () {
  head_p1.style.color = red;
  if (red === red) {
    localStorage.setItem(red, "test");
  }
};
if (localStorage.getItem(red)) {
  head_p1.style.color = "red";
}

console.log(localStorage);

let test_data_ar = [
  " Vue.js",
  " bootstrap course",
  " githup course",
  " unit test with jest course",
  " javascript course",
  // " angular course", //4
  " type script course", //4
  " pug.js course", //5
  " gulp.js course", //5
  // " canavas course", //5
  // "  jquery course ", //6
  // " threejs course", //6
  " cs50 course / Mrs.Abd elrahman",
  " php course",
  " mysql course",
  " php oop course ",
  " laravel course",
];
let ar_time1 = [
  "30/2",
  "30/2",
  "30/2",
  "30/3",
  "30/3",
  "30/4",
  // "30/4",
  "30/5",
  "30/5",
  // "30/5",
  "30/6",
  // "30/6",
  "30/7",
  "30/8",
  "30/9",
  "30/10",
  "30/11",
];
let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
let days = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];

d = new Date();
month = months[d.getMonth()];
day = days[d.getDate()];

for (let x = 0; x < test_data_ar.length; x++) {
  ch_data = document.createElement("div");
  ch_data.className = "ch_data";
  sec.append(ch_data);

  dv_check_box = document.createElement("div");
  dv_check_box.className = "dv_check_box";

  up_check_box = document.createElement("div");
  true_check_box = document.createElement("div");

  up_check_box.className = "up_check_box";
  true_check_box.className = "true_check_box";

  ch_data.append(dv_check_box);
  dv_check_box.append(up_check_box);
  up_check_box.append(true_check_box);

  dv_data = document.createElement("div");
  dv_data.className = "dv_data";
  ch_data.append(dv_data);
  dv_data.append(test_data_ar[x]);

  for (let i = 0; i < ar_time1.length; i++) {
    dv_ar_time1 = document.createElement("div");
    dv_ar_time2 = document.createElement("div");
    dv_ar_time1.append(ar_time1[x]);
    dv_ar_time2.append(day + "/" + month);
    // console.log(ar_time1[x])
    // console.log(ar_time2[x])
  }

  ch_data.append(dv_ar_time1, dv_ar_time2);
  dv_ar_time1.className = "dv_ar_time1";
  dv_ar_time2.className = "dv_ar_time2";

  true_check_box.style = "display:none";

  ////////////////////////
  // if( ch_data.childNodes[2].innerHTML === ch_data.childNodes[3].innerHTML )
  // {
  //     ch_data.childNodes[2].parentElement.classList.add('xx')
  //     ch_data.childNodes[3].style = 'font-Weight:bold ; color:red'

  //     // ch_data.childNodes[3].style.color = 'red'
  //     // console.log(ch_data.childNodes[2].innerHTML)
  //     // ch_data.childNodes[3].innerHTML = 'Done'
  // }

  // if(ch_data.classList.contains('xx'))
  // {
  //     ch_data.childNodes[0].childNodes[0].childNodes[0].style.display = 'grid'
  // }
  ////////////////////////

  // ch_data[x].childNodes[0].childNodes[0].childNodes[0].classList.add('dis')
  // up_check_box.onclick = function()
  // {
  //     if(ch_data.childNodes[0].childNodes[0].childNodes[0].classList.contains('dis'))
  //     {
  //         console.log('yes')
  //         ch_data.childNodes[0].childNodes[0].childNodes[0].classList.remove('dis')
  //     }
  //     else
  //     {
  //         console.log('no')
  //         // ch_data.childNodes[0].childNodes[0].childNodes[0].style.display = 'none'

  //     }
  // }
}

sec.childNodes[0].style = "background:#6867AC";
sec.childNodes[1].style = "background:#6867AC";
sec.childNodes[2].style = "background:#6867AC";
sec.childNodes[3].style = "background:#CE7BB0";
sec.childNodes[4].style = "background:#CE7BB0";
sec.childNodes[5].style = "background:#C65D7B"; //
sec.childNodes[6].style = "background:#F68989";
sec.childNodes[7].style = "background:#F68989";
sec.childNodes[8].style = "background:#8479E1";
sec.childNodes[9].style = "background:#4D96FF";
sec.childNodes[10].style = "background:#6BCB77";
sec.childNodes[11].style = "background:#FFD93D";
sec.childNodes[12].style = "background:#FF6B6B";
// sec.childNodes[13].style = "background:#f8f1d1";
// sec.childNodes[14].style = "background:#f4e2dd";
// sec.childNodes[15].style = "background:#e9fee9";
// sec.childNodes[16].style = "background:rgb(255 136 136 / 66%)";

sec.childNodes[0].childNodes[0].childNodes[0].childNodes[0].style =
  "display:grid";
sec.childNodes[1].childNodes[0].childNodes[0].childNodes[0].style =
  "display:grid";
sec.childNodes[2].childNodes[0].childNodes[0].childNodes[0].style =
  "display:grid";
sec.childNodes[3].childNodes[0].childNodes[0].childNodes[0].style =
  "display:grid";

// console.log(ch_data.childNodes[2].innerHTML)
// console.log(ch_data.childNodes[3].innerHTML)

for (lee in ch_data.childNodes[2].innerHTML) {
  //  console.log(ch_data.childNodes[2].innerHTML[lee])
}

if (
  ch_data.childNodes[2].innerHTML.length >
  ch_data.childNodes[3].innerHTML.length
) {
  // console.log('ok')
}

// obj = {

//     fn : 'aziz',
//     ln : 'haware'
// }

// let info
// for( info in obj )
// // if( obj.hasOwnProperty(info))
// {
//     console.log( info +':'+ obj[info])
// }

//     sec.childNodes[4].classList.add('xx')

// if(sec.childNodes[4].classList.contains('xx') )
// {

//  sec.childNodes[4].childNodes[0].childNodes[0].childNodes[0].style.display = 'grid'

// }

// ch_data = document.querySelector('.ch_data')

//     let data_ob = {

//         ch1 : 'vue.js',
//         ch2 : 'js course',
//         ch3 : 'cs50',
//         ch4 : 'vue.js',
//         ch5 : 'js course',
//         ch6 : 'cs50',
//         ch7 : 'ssssss',
//     }

// for(let i in data_ob)
// {

//   ch_data = document.createElement('div')
//   ch_data.className = 'ch_data'
//   sec.append(ch_data)

//   dv_check_box = document.createElement('div')
//   dv_check_box.className ='dv_check_box'

//   up_check_box = document.createElement('div')
//   true_check_box = document.createElement('div')

//   up_check_box.className = 'up_check_box'
//   true_check_box.className = 'true_check_box'

//  ch_data.append(dv_check_box)
//  dv_check_box.append(up_check_box)
//  up_check_box.append(true_check_box)

//  dv_data = document.createElement('div')
//  dv_data.className = 'dv_data'
//  ch_data.append(dv_data)
//  dv_data.append(data_ob[i])

// console.log(`${data_ob[i]}`)
//   up_check_box.append(true_check_box)
//   ch_data.append(dv_check_box)
//   dv_check_box.append(up_check_box  , true_check_box)

// console.log()

// dv_data = document.createElement('div')
// dv_data.className = ' dv_data '
// dv_data.append( data_ob[i] )
// up_data.append(dv_data)

// up_mark = document.createElement('div')
// up_mark.className = 'up_mark'

// true_mark  = document.createElement('div')
// true_mark.className = 'true_mark'

// up_mark.append(true_mark)
// up_check_box.append(up_mark)

// dv_ar1 = document.createElement('div') //xx
// dv_ar1.append(ar_time1)  // xx

// }

// if( dv_up_ar2.children[x].innerHTML ===  dv_up_ar1.children[x].innerHTML )
// {
//     // console.log ( dv_up_ar2.indexOf(dv_up_ar1.children[x]) ) // xx
//     dv_up_ar2.children[x].className = 'xx'
//     dv_up_ar1.children[x].className = 'xx'
//     dv_up_ar1.style.border = '1px solid red'
//     // console.log( dv_up_ar1.children[x]) // xx

//     for(const y in  dv_up_ar1.children[x].innerHTML )
//     {
//         console.log(` ${ y } `)
//     }

// }

// if( dv_up_ar2.children[x].classList.contains('xx'))
// {
// console.log('ok') // xx
// console.log( dv_up_ar2.children[x].indexOf(dv_up_ar2.children[x])  ) // xx

// }

//////// test

// const courses = {
//     java: 10,

//     javascript: 55,

//     nodejs: 5,

//     php: 15
// };

// // convert object to key's array

// const keys = Object.keys(courses);

// // print all keys

// console.log(keys);

// keys.forEach((key, index) => {
//     console.log(` ${courses[key]}`);
// });
// console.log(` ############# `)

// function iwil()
// {

//     testing_ar1 = ['x1','x2','x3' ,'x1','x2','x3']

//         for(const le in testing_ar1)
//         {
//             // console.log(` ${testing_ar1[le]} - ${le}`)
//         }

//     //     console.log(` ############# `)

//     // testing_ar2 = ['z1','z2','z3' ,'z1','z2','z3']

//     //     for(const me in testing_ar2)
//     //     {
//     //         console.log(` ${testing_ar2[me]} - ${me}`)
//     //     }

// }
// iwil()

// var obj = {a: 1, b: 2, c: 3};

// for (const prop in obj) {
//   console.log(`${prop} = ${obj[prop]}`);
// }

///////////////////

//   min = 1000 * 60
//   hour = min * 60
//   day = hour * 24
//   month = day * 30
//   year = month * 12

//   console.log(Math.round(now/year))

// let months = ['1','2','3','4','5','6','7','8','9','10','11','12']

// d = new Date()
// month = months[d.getMonth()]
// console.log(month)
