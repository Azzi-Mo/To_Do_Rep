
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

// red = "red";
// head_p1.onclick = function () {
//   head_p1.style.color = red;
//   if (red === red) {
//     localStorage.setItem(red, "test");
//   }
// };
// if (localStorage.getItem(red)) {
//   head_p1.style.color = "red";
// }

// console.log(localStorage);

let test_data_ar = [
  " Vue.js",
  " bootstrap course",
  " githup course",
  " unit test with jest course",
  " javascript course",
  // " angular course", //4
  " pug.js course", //5
  " gulp.js course", //5
  // " canavas course", //5
  // "  jquery course ", //6
  // " threejs course", //6
  " cs50 course / Mrs.Rasha Abdeen",
  " react course", 
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
  "30/4",
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

}

sec.childNodes[0].style = "background:#6867AC";
sec.childNodes[1].style = "background:#6867AC";
sec.childNodes[2].style = "background:#6867AC";
sec.childNodes[3].style = "background:#CE7BB0";
sec.childNodes[4].style = "background:#CE7BB0";
sec.childNodes[5].style = "background:#F68989"; //
sec.childNodes[6].style = "background:#F68989";
sec.childNodes[7].style = "background:#C65D7B";
sec.childNodes[8].style = "background:#8479E1";
sec.childNodes[9].style = "background:#4D96FF";
sec.childNodes[10].style = "background:#6BCB77";
sec.childNodes[11].style = "background:#FFD93D";
sec.childNodes[12].style = "background:#FF6B6B";


sec.childNodes[0].childNodes[0].childNodes[0].childNodes[0].style =
  "display:grid";
sec.childNodes[1].childNodes[0].childNodes[0].childNodes[0].style =
  "display:grid";
sec.childNodes[2].childNodes[0].childNodes[0].childNodes[0].style =
  "display:grid";
sec.childNodes[3].childNodes[0].childNodes[0].childNodes[0].style =
  "display:grid";
  sec.childNodes[5].childNodes[0].childNodes[0].childNodes[0].style =
  "display:grid";
sec.childNodes[6].childNodes[0].childNodes[0].childNodes[0].style =
  "display:grid";

  



