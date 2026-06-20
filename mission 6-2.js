var studies = [];
var cookie;
loadCookie();
showStudies();
function addStudy() {
    var name = document.getElementById("studyName").value;
    var time = document.getElementById("studyTime").value;
    if (name == "" || time == "") {
        alert("入力してください");
        return;
    }
    studies.push({
        name: name,
        time: Number(time)//文字列を数値に変換
    });
    saveCookie();
    showStudies();
    document.getElementById("studyName").value = "";
    document.getElementById("studyTime").value = "";
}

function showStudies() {
    var displayArea = document.getElementById("displayArea");
    var text = "";
    var total = 0;
    for (var i = 0; i < studies.length; i++) {
        text = text + studies[i].name +" : " +studies[i].time +"時間<br>";
        total = total + studies[i].time;
    }
    if (studies.length == 0) {
        text = "まだ記録がありません";
    }
    displayArea.innerHTML = text;
    document.getElementById("totalTime").innerHTML =total + "時間";
}
function saveCookie() {
    document.cookie =encodeURIComponent(JSON.stringify(studies));
}
function loadCookie() {
    cookie=document.cookie;
    studies =JSON.parse(decodeURIComponent(cookie))
}