const text = 'Holaa Bell, lu cantik kalo lagi tidur. Pas bangun juga sih. Tiba-tiba banget gue ngerasa jatuh cinta (lagi) sama lu pas liat lu lagi lelap gini, jadi yaudah gue mau bikin ucapan terimakasih buat lu. Ditambah, gue juga udah lama gak nulis-nulis macam ini. Gatel isi pikiran gue.<br><br>Thanks a lot ya Bell, akhir-akhir ini udah mau gue repotin buat bantu mikirin + eksekusi perkontenan Hoodiekami.<br><br>Antusias sekali ibu ini, sampai harus gue yang bilang “Boleh gak stop bentar bahas kerjaan? kita pacaran dulu yuk.” Hahaha lucu banget. Terimakasih buat selalu total kalau bantu gue, vibes-vibes buat growing up togethernya tuh kentel banget ya.<br><br>Gue suka sama how enthusiasticnya lu pas tiba-tiba bahas ide konten couple lah, lu yang selalu update konten tarrot lu meski gue gk boleh follow langsung, atau si tiba-tiba banget pas gue tanya lagi apa? jawabnya lagi upload foto ke shutterstock. Emang anaknya tuh kudu produktif terus ya.<br><br>Thanks ya udah jadi Bella yang seperti ini, yang selalu bisa jadi partner gue ketika mau sharing apapun. Si paling peka ketika gue lagi low energy, ngerasa gak nyaman, atau emang lagi banyak pikiran. Semoga bisa terus begitu, ya.<br><br>Juga semoga diri gue bisa selalu fullfill apapun yang emang lu butuhin. Ill always try to do that kok. Dengan sisa-sisa kekuatan super yang ada di diri gue.<br><br>Makasih juga udah mau nerima gue lengkap dengan annoying ngoroknya. Jika emang Tuhan ada, semoga Dia bales semua kebaikan lu ini. Pun, jika memang gak ada, pasti semesta bakal kasih hal-hal baik buat lu.<br><br>Gue selalu percaya itu kok kayak gue percaya kalo gue beneran sayang sama lu. Selalu.<br><br><br><br>Bandung, Jan 04 25'

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
    if (i < arr.length) {
      if (arr[i] === '<' && arr.slice(i, i + 4).join('') === '<br>') {
        document.querySelector(".textCont").innerHTML += '<br>';
        i += 4; // Skip over the <br> tag
      } else {
        document.querySelector(".textCont").innerHTML += arr[i];
        i++;
      }
      setTimeout(function () {
        dashOut(arr);
      }, interval(arr[i]));
    }
  }

// function dashOut(arr) {
//   if (i < arr.length) {
//     document.querySelector(".textCont").innerHTML += arr[i];
//     i++;
//     setTimeout(function () {
//       dashOut(arr);
//     }, interval(arr[i]));
//   } else {
//     document.querySelector(".textCont").innerHTML = document.querySelector(".textCont").innerHTML.replace(/&lt;br&gt;/g, '<br>');
//   }
// }

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  document.querySelector(".textCont").innerHTML = ""; // Clear the content before starting
  dashOut(paragraph);
}

startFromBegin();