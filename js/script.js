let tableData = {};
let pokemon = [];
let star2 = 0;
let star3 = 0;
let star4 = 0;

window.onload = async () => {
    await getJSON();
    await onloadTable();
    await onloadSideBar();
    loadingComplete();
}

//fetch取得本地json
let getJSON = () => {
    return fetch('./data/gaole.xlsx').then((res) => {
        return res.json();
    }).then((data) => {
        tableData = data;
    }).catch((err) => {
        tableData = [{"1":"1-利歐路","2":"2-火爆猴","3":"1-木守宮","4":"2-胖丁","5":"2-胖丁","6":"4-亞克諾姆","7":"1-大顎蟻","8":"2-尖牙陸鯊"},{"1":"2-尖牙陸鯊","2":"3-巨沼怪","3":"3-伊布","4":"3-巨沼怪","5":"2-力壯雞","6":"1-圓陸鯊","7":"1-圓陸鯊","8":"3-伊布"},{"1":"4-亞克諾姆","2":"1-大顎蟻","3":"1-幼基拉斯","4":"2-火爆猴","5":"2-吉利蛋","6":"3-美錄坦","7":"1-木守宮","8":"2-吉利蛋"},{"1":"1-火稚雞","2":"1-木守宮","3":"3-隆隆岩","4":"1-利歐路","5":"1-猴怪","6":"1-寶寶丁","7":"3-烈咬陸鯊","8":"2-火爆猴"},{"1":"2-火爆猴","2":"3-烈咬陸鯊","3":"2-沼躍魚","4":"2-多邊獸","5":"1-小拳石","6":"2-蔓藤怪","7":"2-森林蜥蜴","8":"1-小福蛋"},{"1":"2-力壯雞","2":"3-伊布","3":"5-拉帝歐斯","4":"1-水躍魚","5":"2-尖牙陸鯊","6":"3-巨金怪","7":"5-拉帝亞斯","8":"1-大顎蟻"},{"1":"1-木守宮","2":"3-班基拉斯","3":"2-路卡利歐","4":"2-蔓藤怪","5":"1-小福蛋","6":"3-沙漠蜻蜓","7":"1-火稚雞","8":"4-多邊獸Z"},{"1":"3-蜥蜴王","2":"2-多邊獸","3":"2-沼躍魚","4":"2-吉利蛋","5":"3-胖可丁","6":"1-火稚雞","7":"3-伊布","8":"1-圓陸鯊"},{"1":"1-小福蛋","2":"4-沙漠蜻蜓","3":"2-力壯雞","4":"3-隆隆岩","5":"3-美錄坦","6":"2-隆隆石","7":"2-隆隆石","8":"2-隆隆石"},{"1":"2-金屬怪","2":"2-超音波幼蟲","3":"4-艾姆利多","4":"2-沙基拉斯","5":"3-伊布","6":"1-小福蛋","7":"2-沼躍魚","8":"2-尖牙陸鯊"},{"1":"4-路卡利歐","2":"2-力壯雞","3":"1-寶寶丁","4":"2-路卡利歐","5":"1-火稚雞","6":"2-森林蜥蜴","7":"1-猴怪","8":"4-蜥蜴王"},{"1":"2-路卡利歐","2":"1-幼基拉斯","3":"3-美錄坦","4":"1-猴怪","5":"3-班基拉斯","6":"3-伊布","7":"3-巨金怪","8":"1-幼基拉斯"},{"1":"3-伊布","2":"3-巨蔓藤","3":"2-隆隆石","4":"4-蜥蜴王","5":"4-胖可丁","6":"1-小拳石","7":"1-利歐路","8":"2-路卡利歐"},{"1":"2-多邊獸","2":"4-美錄梅塔","3":"1-幼基拉斯","4":"1-小福蛋","5":"1-利歐路","6":"3-班基拉斯","7":"4-班基拉斯","8":"2-超音波幼蟲"},{"1":"1-寶寶丁","2":"1-小拳石","3":"1-圓陸鯊","4":"4-美錄梅塔","5":"2-多邊獸","6":"2-沙基拉斯","7":"3-胖可丁","8":"2-力壯雞"},{"1":"2-超音波幼蟲","2":"2-沼躍魚","3":"3-火爆猴","4":"3-火爆猴","5":"1-鐵啞鈴","6":"3-火焰雞","7":"1-水躍魚","8":"3-隆隆岩"},{"1":"2-蔓藤怪","2":"4-幸福蛋","3":"1-鐵啞鈴","4":"3-班基拉斯","5":"2-隆隆石","6":"2-森林蜥蜴","7":"2-胖丁","8":"1-火稚雞"},{"1":"4-火焰雞","2":"2-胖丁","3":"2-超音波幼蟲","4":"1-大顎蟻","5":"1-小拳石","6":"3-路卡利歐","7":"2-多邊獸","8":"2-多邊獸"},{"1":"1-猴怪","2":"3-胖可丁","3":"3-伊布","4":"3-巨蔓藤","5":"2-蔓藤怪","6":"2-蔓藤怪","7":"2-路卡利歐","8":"2-森林蜥蜴"},{"1":"3-幸福蛋","2":"2-吉利蛋","3":"1-小福蛋","4":"2-沼躍魚","5":"4-火焰雞","6":"1-水躍魚","7":"3-隆隆岩","8":"3-蜥蜴王"},{"1":"1-利歐路","2":"4-蒂安希","3":"1-水躍魚","4":"1-木守宮","5":"2-吉利蛋","6":"1-鐵啞鈴","7":"2-蔓藤怪","8":"4-隆隆岩"},{"1":"2-多邊獸","2":"1-利歐路","3":"3-多邊獸II","4":"2-力壯雞","5":"4-路卡利歐","6":"4-隆隆岩","7":"3-伊布","8":"3-巨蔓藤"},{"1":"3-巨蔓藤","2":"1-水躍魚","3":"2-多邊獸","4":"3-胖可丁","5":"3-火焰雞","6":"2-力壯雞","7":"1-寶寶丁","8":"2-金屬怪"},{"1":"1-火稚雞","2":"1-鐵啞鈴","3":"3-沙漠蜻蜓","4":"4-噴火龍","5":"2-超音波幼蟲","6":"2-超音波幼蟲","7":"1-寶寶丁","8":"3-幸福蛋"},{"1":"4-烈咬陸鯊","2":"1-圓陸鯊","3":"2-蔓藤怪","4":"1-寶寶丁","5":"4-蜥蜴王","6":"4-班基拉斯","7":"2-尖牙陸鯊","8":"3-伊布"},{"1":"1-鐵啞鈴","2":"2-蔓藤怪","3":"4-路卡利歐","4":"4-巨金怪","5":"1-幼基拉斯","6":"2-胖丁","7":"3-路卡利歐","8":"1-小拳石"},{"1":"3-美錄坦","2":"3-多邊獸II","3":"2-火爆猴","4":"3-幸福蛋","5":"2-力壯雞","6":"3-多邊獸II","7":"3-巨沼怪","8":"3-火爆猴"},{"1":"2-超音波幼蟲","2":"2-力壯雞","3":"2-吉利蛋","4":"1-幼基拉斯","5":"2-森林蜥蜴","6":"3-蜥蜴王","7":"4-噴火龍","8":"2-蔓藤怪"},{"1":"1-水躍魚","2":"4-噴火龍","3":"3-烈咬陸鯊","4":"3-伊布","5":"1-圓陸鯊","6":"2-吉利蛋","7":"1-幼基拉斯","8":"5-蒂安希"},{"1":"3-沙漠蜻蜓","2":"2-沙基拉斯","3":"1-利歐路","4":"4-巨金怪","5":"5-拉帝歐斯","6":"3-巨蔓藤","7":"4-由克希","8":"2-沼躍魚"},{"1":"4-多邊獸Z","2":"2-金屬怪","3":"3-路卡利歐","4":"2-尖牙陸鯊","5":"2-沙基拉斯","6":"5-固拉多","7":"3-沙漠蜻蜓","8":"1-鐵啞鈴"},{"1":"2-森林蜥蜴","2":"2-胖丁","3":"4-噴火龍","4":"2-金屬怪","5":"3-火爆猴","6":"4-巨蔓藤","7":"2-超音波幼蟲","8":"2-森林蜥蜴"},{"1":"2-路卡利歐","2":"3-蜥蜴王","3":"2-尖牙陸鯊","4":"1-鐵啞鈴","5":"4-巨沼怪","6":"2-胖丁","7":"5-壘磊石","8":"2-多邊獸"},{"1":"2-吉利蛋","2":"4-火焰雞","3":"2-胖丁","4":"5-砰頭小丑","5":"1-水躍魚","6":"2-沼躍魚","7":"2-吉利蛋","8":"1-猴怪"},{"1":"3-隆隆岩","2":"2-路卡利歐","3":"1-猴怪","4":"2-路卡利歐","5":"4-艾姆利多","6":"2-火爆猴","7":"1-小拳石","8":"4-烈咬陸鯊"},{"1":"1-大顎蟻","2":"3-伊布","3":"2-沙基拉斯","4":"1-鐵啞鈴","5":"3-路卡利歐","6":"2-金屬怪","7":"2-沙基拉斯","8":"3-巨金怪"},{"1":"5-原始蓋歐卡","2":"2-森林蜥蜴","3":"1-火稚雞","4":"2-隆隆石","5":"2-金屬怪","6":"4-噴火龍","7":"3-火焰雞","8":"1-水躍魚"},{"1":"1-小拳石","2":"1-小福蛋","3":"4-班基拉斯","4":"3-烈咬陸鯊","5":"3-烈咬陸鯊","6":"1-大顎蟻","7":"2-力壯雞","8":"4-噴火龍"},{"1":"3-巨沼怪","2":"2-蔓藤怪","3":"2-胖丁","4":"1-小拳石","5":"2-沼躍魚","6":"1-利歐路","7":"3-多邊獸II","8":"3-沙漠蜻蜓"},{"1":"1-幼基拉斯","2":"2-隆隆石","3":"1-大顎蟻","4":"1-火稚雞","5":"1-大顎蟻","6":"1-水躍魚","7":"2-火爆猴","8":"3-美錄坦"},{"1":"1-圓陸鯊","2":"1-寶寶丁","3":"3-蜥蜴王","4":"3-火焰雞","5":"2-路卡利歐","6":"3-伊布","7":"4-沙漠蜻蜓","8":"3-路卡利歐"},{"1":"4-胖可丁","2":"5-拉帝亞斯","3":"1-木守宮","4":"3-伊布","5":"1-木守宮","6":"4-巨金怪","7":"2-路卡利歐","8":"2-沙基拉斯"},{"1":"2-沼躍魚","2":"3-幸福蛋","3":"1-小拳石","4":"1-猴怪","5":"2-火爆猴","6":"1-木守宮","7":"1-圓陸鯊","8":"4-由克希"},{"1":"3-巨金怪","2":"1-火稚雞","3":"3-巨蔓藤","4":"1-圓陸鯊","5":"3-巨沼怪","6":"2-沙基拉斯","7":"2-火爆猴","8":"1-木守宮"},{"1":"2-沙基拉斯","2":"1-猴怪","3":"2-金屬怪","4":"2-超音波幼蟲","5":"4-噴火龍","6":"1-猴怪","7":"3-火爆猴","8":"1-利歐路"},{"1":"2-隆隆石","2":"1-小福蛋","3":"5-美錄梅塔","4":"4-烈咬陸鯊","5":"3-幸福蛋","6":"2-金屬怪","7":"1-鐵啞鈴","8":"2-超音波幼蟲"},{"1":"4-噴火龍","2":"2-金屬怪","3":"2-森林蜥蜴","4":"2-森林蜥蜴","5":"2-多邊獸","6":"1-幼基拉斯","7":"1-小福蛋","8":"1-大顎蟻"},{"1":"2-隆隆石","2":"4-巨沼怪","3":"2-沙基拉斯","4":"2-沼躍魚","5":"3-伊布","6":"3-胖可丁","7":"4-蒂安希","8":"1-寶寶丁"},{"1":"3-伊布","2":"2-尖牙陸鯊","3":"3-火焰雞","4":"3-多邊獸II","5":"2-尖牙陸鯊","6":"2-火爆猴","7":"2-胖丁","8":"4-幸福蛋"},{"1":"3-班基拉斯","2":"3-巨金怪","3":"4-巨沼怪","4":"2-吉利蛋","5":"1-寶寶丁","6":"2-尖牙陸鯊","7":"2-金屬怪","8":"2-隆隆石"}];
    })
}

function loadingComplete() {
    document.getElementById('loading').style.display = "none";
    eventListener();
}

function eventListener() {
    
    const inputs = document.querySelectorAll('.form-check-input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", function() {
            var name = inputs[i].value
            if (pokemon.find(e => e == `${name}`) == undefined) {
                pokemon.push(name);
                starCount(name[0], 1);
            } else {
                pokemon.splice(pokemon.indexOf(name), 1);
                starCount(name[0], -1);
            }

            var fields = document.getElementsByClassName(name);
            for (let i = 0; i< fields.length; i++ )
            {
                fields[i].classList.toggle('pick');
            }
        });
    }
}

function starCount(starNum, num) {
    if (starNum == 4) {
        star4 += num;
        document.getElementById("star-4").innerHTML = star4;
    } else if (starNum == 3) {
        star3 += num;
        document.getElementById("star-4").innerHTML = star3;
    } else if (starNum == 2) {
        star2 += num;
        document.getElementById("star-4").innerHTML = star2;
    }
}

function onloadTable(){
    var table = document.getElementById("pokemonTable");
    var htmlData = '';
    for(var i = 0; i < tableData.length; i++){
        var row = tableData[i];
        var keys = Object.keys(row)
        htmlData += '<tr>'
        for (var j = 0; j < keys.length; j++)
        {
            var arr = row[keys[j]].split("-");
            var star = arr[0];
            var name = arr[1];
            htmlData += `<td class="${row[keys[j]]} star-${star}"> ${name} </td>`;
        }
        htmlData += '</tr>'
    }
    table.innerHTML = htmlData;
}

function onloadSideBar() {
    for (var n = 4;  n > 1; n--)
    {
        var arr = [];
        for(var i = 0; i < tableData.length; i++){
            var row = tableData[i];
            var keys = Object.keys(row)
            for (var j = 0; j < keys.length; j++)
            {
                var star = row[keys[j]][0];
                var name = row[keys[j]];
                if (star == n && arr.find(e => e == `${name}`) == undefined )
                {
                    createSideBarList(n, name);
                    arr.push(`${name}`);
                }
            }
        }
    }
}

function createSideBarList(id, name) {
    var ul = document.getElementById(`sidebar-star-${id}`);

    var li = document.createElement("li");
    li.className = "list-group-item";

    var input = document.createElement("input");
    input.className  = "form-check-input me-1";
    input.type = "checkbox";
    input.id = `checkbox-${name}`;
    input.value = `${name}`;
    li.appendChild(input);

    var label = document.createElement("label");
    label.innerHTML = `${name}`;
    label.className = "form-check-label stretched-link";
    label.htmlFor = `checkbox-${name}`;

    li.appendChild(label);

    ul.appendChild(li);
}