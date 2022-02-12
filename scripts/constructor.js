// import { hello } from './schedule_data.js';


const WeekType = Object.freeze({
    odd: "нечет",
    even: "чет",
    all: "все"
});

//weekdays
const WeekdaysRU = Object.freeze({
    Monday:   'Понедельник',
    Tuesday:  'Вторник',
    Wednesday: 'Среда',
    Thursday: 'Четверг',
    Friday: 'Пятница',
    Saturday: 'Суббота'
});
const WeekdaysEN = Object.freeze({
    Monday:   'Monday',
    Tuesday:  'Tuesday',
    Wednesday: 'Wednesday',
    Thursday: 'Thursday',
    Friday: 'Friday',
    Saturday: 'Saturday'
});


class WorkDay {
    classes;
    weekday;
    constructor(weekday, classes){
        this.weekday = weekday;
        this.classes = classes;
    }
}

class StudyTime {
    start;
    end;
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

class Zan {
    time;
    week;
    classroom;
    discipline_name;
    type;
    _format;
    tutor;
    _group;
    constructor(time, week, classroom, discipline_name, type, format, tutor, group) {
        this.time = time;
        this.week = week;
        this.classroom = classroom;
        this.discipline_name = discipline_name;
        this.type = type;
        this._format = format;
        this.tutor = tutor;
        this._group = group;
    }
}

//let's create out schedule table:
//Monday:
var monday = [];
var Linux = new Zan(new StudyTime("8:20", "9:50"), WeekType.even, '325',
    'Администрирование в ОС Linux/Linux operating system administration', 'Лабораторные занятия',
    'Очно - дистанционный ', 'Шараева Кристина Витальевна', 'M33031');
monday.push(Linux);
var weekdays = [];
var weekday = new WorkDay(WeekdaysRU.Monday, monday);

var Linux = new Zan(new StudyTime("10:00", "11:30"), WeekType.even, '325',
    'Администрирование в ОС Linux/Linux operating system administration', 'Лабораторные занятия',
    'Очно - дистанционный ', 'Шараева Кристина Витальевна', 'M33031');
monday.push(Linux);
var ML = new Zan(new StudyTime("11:40", "13:10"), WeekType.all, '285',
    'Машинное обучение', 'Лекции',
    'Очно - дистанционный ', 'Хлопотов Максим Валерьевич', 'M33031');
monday.push(ML);
var WEB = new Zan(new StudyTime("13:30", "15:00"), WeekType.odd, '236',
    'Web-программирование', 'Лабораторные занятия',
    'Очно - дистанционный ', '-', 'M33031');
monday.push(WEB);
var WEB = new Zan(new StudyTime("15:20", "16:50"), WeekType.odd, '236',
    'Web-программирование', 'Лабораторные занятия',
    'Очно - дистанционный ', '-', 'M33031');
monday.push(WEB);
weekdays.push(weekday);
//Let's fill out wednesday:
var wednesday = [];
var weekday = new WorkDay(WeekdaysRU.Wednesday, wednesday);
var WEB = new Zan(new StudyTime("11:40", "13:10"), WeekType.all, '100/1(усл) ',
    'Web-программирование', 'Лекции',
    'Очно - дистанционный ', 'Приискалов Роман Андреевич', 'M33031');
wednesday.push(WEB);
var ML = new Zan(new StudyTime("13:30", "15:00"), WeekType.odd, '239',
    'Машинное обучение', 'Лабораторные занятия',
    'Очно - дистанционный ', 'Хлопотов Максим Валерьевич', 'M33031');
wednesday.push(ML);
var ML = new Zan(new StudyTime("15:20", "16:50"), WeekType.odd, '239',
    'Машинное обучение', 'Лабораторные занятия',
    'Очно - дистанционный ', 'Хлопотов Максим Валерьевич', 'M33031');
wednesday.push(ML);
weekdays.push(weekday);
//Let's fill out thursday
var thursday = [];
var weekday = new WorkDay(WeekdaysRU.Thursday, thursday);
var EN = new Zan(new StudyTime("08:20", "09:50"), WeekType.all, '3212',
    'Иностранный язык в профессиональной деятельности', 'Практические занятия',
    'Очно - дистанционный ', 'Немец Мария Сергеевна', 'АЯ-3IT-C2/1');
thursday.push(EN);
var EN = new Zan(new StudyTime("10:00", "11:30"), WeekType.all, '3212',
    'Иностранный язык в профессиональной деятельности', 'Практические занятия',
    'Очно - дистанционный ', 'Немец Мария Сергеевна', 'АЯ-3IT-C2/1');
thursday.push(EN);
var Linux = new Zan(new StudyTime("13:30", "15:00"), WeekType.all, '100/1(усл) ',
    'Администрирование в ОС Linux/Linux operating system administration', 'Лекции',
    'Очно - дистанционный ', 'Маятин Александр Владимирович', 'M33031');
thursday.push(Linux);
var UML = new Zan(new StudyTime("15:20", "16:50"), WeekType.all, '331',
    'Анализ и проектирование на UML', 'Лекции',
    'Очно - дистанционный ', 'Хлопотов Максим Валерьевич', 'M33031');
thursday.push(UML);
weekdays.push(weekday);
//Let's fill out friday
var friday = [];
var weekday = new WorkDay(WeekdaysRU.Friday, friday);
var UML = new Zan(new StudyTime("10:00", "11:30"), WeekType.odd, '236',
    'Анализ и проектирование на UML', 'Лабораторные занятия',
    'Очно - дистанционный ', 'Хлопотов Максим Валерьевич', 'M33031');
friday.push(UML);
var UML = new Zan(new StudyTime("11:40", "13:10"), WeekType.odd, '236',
    'Анализ и проектирование на UML', 'Лабораторные занятия',
    'Очно - дистанционный ', 'Хлопотов Максим Валерьевич', 'M33031');
friday.push(UML);
var HISTORY = new Zan(new StudyTime("11:40", "13:10"), WeekType.even, '332',
    'История (Наука и техника в истории цивилизации)', 'Лекции',
    'Очно - дистанционный ', 'Васильев Андрей Владимирович', 'ИНТ 6');
friday.push(HISTORY);
var HISTORY = new Zan(new StudyTime("13:30", "15:00"), WeekType.even, '429',
    'История (Наука и техника в истории цивилизации)', 'Практические занятия',
    'Очно - дистанционный ', 'Васильев Андрей Владимирович', 'ИНТ 6.1');
friday.push(HISTORY);
weekdays.push(weekday);
//Let's fill out saturday
var saturday = [];
var weekday = new WorkDay(WeekdaysRU.Saturday, saturday);
var PRIMAT = new Zan(new StudyTime("11:40", "13:10"), WeekType.even, '3408',
    'Прикладная математика', 'Лекции',
    'Очно - дистанционный ', 'Москаленко Мария Александровна', 'M33031');
saturday.push(PRIMAT);
var PRIMAT = new Zan(new StudyTime("13:30", "15:00"), WeekType.even, '2202',
    'Прикладная математика', 'Лекции',
    'Очно - дистанционный ', 'Москаленко Мария Александровна', 'M33031');
saturday.push(PRIMAT);
var PRIMAT = new Zan(new StudyTime("15:20", "16:50"), WeekType.odd, '1513',
    'Прикладная математика', 'Лабораторные занятия',
    'Очно - дистанционный ', 'Москаленко Мария Александровна', 'M33031');
saturday.push(PRIMAT);
var PRIMAT = new Zan(new StudyTime("17:00", "18:30"), WeekType.odd, '1513',
    'Прикладная математика', 'Лабораторные занятия',
    'Очно - дистанционный ', 'Москаленко Мария Александровна', 'M33031');
saturday.push(PRIMAT);
weekdays.push(weekday);


// input.addEventListener('input', submit);
function loadLocalStorageData() {
    var lang = window.localStorage.getItem('language');
    var days = window.localStorage.getItem('days');
    var storedChecks = [];
    storedChecks = JSON.parse(window.localStorage.getItem("checks"));
    var arr = [];
    arr.push(lang);
    arr.push(days);
    arr.push(storedChecks);
    return arr;
}

function formsubmit() {
    let days = document.getElementById("amount_of_days").value;
    let lang;
    let langs = document.getElementsByName("lang");
    for (var i = 0, length = langs.length; i < length; i++) {
        if (langs[i].checked) {
            lang = langs[i].value;
            break;
        }
    }
    var checkedBoxes = document.querySelectorAll('input[name=column]:checked');
    var checked = [];
    for (var i = 0; i < checkedBoxes.length; i++) {
        checked.push(checkedBoxes[i].value);
    }
    drawTable(lang, days, checked);
    updateLocalStorageData(lang, days, checked);
}

function updateLocalStorageData(lang, days, storedChecks) {

    window.localStorage.setItem("language", lang);
    window.localStorage.setItem("days", days);
    window.localStorage.setItem("checks", JSON.stringify(storedChecks));
}

function replaceChecked(str) {
    switch (str) {
        case "format":
            return "Формат занятий";
        case "tutor":
            return "Преподаватель";
        case "group":
            return "Группа";
        case "lessontype":
            return "Вид занятий";
        case "time":
            return "Время занятий";
        case "week":
            return "Неделя";
        case "classroom":
            return "Аудитория";
        case "name":
            return "Дисциплина";
    }
}

//function to draw table
function drawTable(lang, days, storedChecks) {
    var myNode = document.getElementById("results");
    myNode.innerHTML = '';
    let bigtable = document.createElement('table');
    for (var i = 0; i < days && i < weekdays.length; i++) {
        let newTable = document.createElement('tbody');
        var headerrow = document.createElement('tr');
        var el = document.createElement('td');
        el.appendChild(document.createTextNode(weekdays[i].weekday));
        el.setAttribute("class", "daytag");
        headerrow.appendChild(el);
        newTable.appendChild(headerrow);
        var rowone = document.createElement('tr');
        for (var j = 0; j < storedChecks.length; j++) {
            el = document.createElement('th');
            el.appendChild(document.createTextNode(replaceChecked(storedChecks[j])));
            rowone.appendChild(el);
        }
        newTable.appendChild(rowone);
        for (var j = 0; j < weekdays[i].classes.length; j++) {
            var row = document.createElement('tr');
            var el;
            if (storedChecks.includes("time")) {
                el = document.createElement('td');
                el.appendChild(document.createTextNode(weekdays[i].classes[j].time.start + "->" + weekdays[i].classes[j].time.end));
                row.appendChild(el);
            }
            if (storedChecks.includes("week")) {
                el = document.createElement('td');
                el.appendChild(document.createTextNode(weekdays[i].classes[j].week));
                row.appendChild(el);
            }
            if (storedChecks.includes("classroom")) {
                el = document.createElement('td');
                el.appendChild(document.createTextNode(weekdays[i].classes[j].classroom));
                row.appendChild(el);
            }
            el = document.createElement('td');
            el.appendChild(document.createTextNode(weekdays[i].classes[j].discipline_name));
            row.appendChild(el);
            if (storedChecks.includes("lessontype")) {
                el = document.createElement('td');
                el.appendChild(document.createTextNode(weekdays[i].classes[j].type));
                row.appendChild(el);
            }
            if (storedChecks.includes("format")) {
                el = document.createElement('td');
                el.appendChild(document.createTextNode(weekdays[i].classes[j]._format));
                row.appendChild(el);
            }
            if (storedChecks.includes("tutor")) {
                el = document.createElement('td');
                el.appendChild(document.createTextNode(weekdays[i].classes[j].tutor));
                row.appendChild(el);
            }
            if (storedChecks.includes("group")) {
                el = document.createElement('td');
                el.appendChild(document.createTextNode(weekdays[i].classes[j]._group));
                row.appendChild(el);
            }
            newTable.appendChild(row);
        }
        bigtable.appendChild(newTable);
    }
    document.getElementById("results").appendChild(bigtable);
}
function tickChecked () {
    var arr = loadLocalStorageData();
    lang = arr[0];
    days = arr[1];
    storedChecks = arr[2];
    storedChecks.forEach(function (chec) {
        document.querySelectorAll("#columns_to_show input").forEach(function (el) {
            if (el.value === chec) {
                el.setAttribute("checked", "checked");
            }
        })
    })
    document.querySelectorAll("#dayamount input").forEach( function (el) {
        el.value = days;
    })
}

//here we start our html page:

let lang;
let days;
let storedChecks;
var arr = loadLocalStorageData();
lang = arr[0];
days = arr[1];
storedChecks = arr[2];
tickChecked();
if (storedChecks !== undefined) {
    drawTable(lang, days, storedChecks);
}