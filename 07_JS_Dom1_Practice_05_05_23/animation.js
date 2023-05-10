let t = setInterval(move, 20);
//запускает функцию move каждые 20 миллисекунд
let pos = 0;

const box = document.getElementById('box');


//clearInterval(t); //остановить функцию setInterval
function move() {
    pos++;
    if (pos == 150) {
        clearInterval(t);
        t = setInterval(moveBack, 20)
    }
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
}

function moveBack() {
    pos--;
    if (pos ==  0) {
        clearInterval(t);
        t = setInterval(move, 20);
    }
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
}

setInterval (printTime, 1000);

const dateDom = document.getElementById("date");
function printTime(){
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    dateDom.textContent = `${h}:${m}:${s}`;

    const h1 = document.createElement('h1');
    h1.innerText=dateDome;
    console.log(document.body.children);

}
function printTime() {
    const d = new Date();
    const h = d.getHours() > 9 ? d.getHours() : +('0' + d.getHours());
    const m = d.getMinutes() > 9 ? d.getMinutes() : +('0' + d.getMinutes());
    const s = d.getSeconds() > 9 ? d.getSeconds() : +('0' + d.getSeconds());
    const time = `${h} : ${m} : ${s}`;
 
    const h1 = document.createElement('h1');
    h1.innerText = time;

    h1.style.margin = '10px auto 0';
    h1.style.width = 'fit-content';

    if (document.body.children == 2) {
        document.body.appendChild(h1);
    } else {
        document.body.replaceChild(h1, document.body.lastElementChild)
    }

    // if (!document.querySelector("h1")) {
    //     const timeBox = document.createElement("h1");
    //     document.body.append(timeBox);
    // }
    // document.querySelector("h1").innerText = time;

}



 //let now = new Date;
 //alert (now);

/*
= - присвоение
== - не строгое сравнение (сравнение значений без учета типов данных)
=== - строгое сравнение (с учетом типа данных)

Сложение числа и строки нахывается конкатинацией.
Результатом будет "слипшаяся" строчка.
*/

    //TODO Дописать функцию printTime(), чтобы она
    // выводила на экран актуальное время
    //Дописать функцию move(), реализовать "челночный бег" элемента;
    //Дописать функцию printTime(), реализовать отображение реального времени.
    