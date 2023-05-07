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

    //TODO Дописать функцию printTime(), чтобы она
    // выводила на экран актуальное время
    //Дописать функцию move(), реализовать "челночный бег" элемента;
    //Дописать функцию printTime(), реализовать отображение реального времени.
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