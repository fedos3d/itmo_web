let textNode = document.createTextNode("ABOABABABABAB: ")
let pNode = document.createElement('p').appendChild(textNode)
let element = document.createElement("div").appendChild(pNode)






// document.body.appendChild(element);
const input = document.querySelector('input');
const log = document.getElementById('values');


const WeekType = Object.freeze({
    odd: "нечет",
    even: "чет"
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
        this.weekday = weekday
        this.classes = classes
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
var monday = []
var Linux = new Zan(new StudyTime("8:20", "9:50"), WeekType.even, '325',
    'Администрирование в ОС Linux/Linux operating system administration', 'Лабораторные занятия',
    'Очно - дистанционный ', 'Шараева Кристина Витальевна', 'M33031')
monday.push(Linux)
var weekdays = []
var weekday = new WorkDay(WeekdaysRU.Monday, monday)
weekdays.push(weekday)


// input.addEventListener('input', submit);
function loadLocalStorageData() {
    var lang = window.localStorage.getItem('language');
    var days = window.localStorage.getItem('days');
    var storedChecks = []
    storedChecks = JSON.parse(window.localStorage.getItem("checks"));
    // console.log("loaded from storage: " + storedChecks.length)
    var arr = []
    arr.push(lang)
    arr.push(days)
    arr.push(storedChecks)
    return arr;
}

function lolokek() {
    let days = document.getElementById("amount_of_days").value
    let lang;
    let langs = document.getElementsByName("lang");
    for (var i = 0, length = langs.length; i < length; i++) {
        if (langs[i].checked) {
            // do whatever you want with the checked radio
            // alert(langs[i].value);
            lang = langs[i].value

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
    var checkedBoxes = document.querySelectorAll('input[name=column]:checked');
    console.log("days: " + days)
    console.log("lang: " + lang)
    console.log("checked: " + checkedBoxes)
    console.log("length fo checked: " + checkedBoxes.length)
    var checked = []
    for (var i = 0; i < checkedBoxes.length; i++) {
        // console.log(checkedBoxes[i].value)
        checked.push(checkedBoxes[i].value)
    }
    drawTable(lang, days, checked)
    updateLocalStorageData(lang, days, checked)
}

function updateLocalStorageData(lang, days, storedChecks) {

    window.localStorage.setItem("language", lang)
    window.localStorage.setItem("days", days)
    window.localStorage.setItem("checks", JSON.stringify(storedChecks))
}

function replaceChecked(kek) {
    switch (kek) {
        case "format":
            return "Формат занятий"
        case "tutor":
            return "Преподаватель"
        case "group":
            return "Группа"
        case "lessontype":
            return "Вид занятий"
        case "time":
            return "Время занятий"
        case "week":
            return "Неделя"
        case "classroom":
            return "Аудитория"
        case "name":
            return "Дисциплина"
    }
}

//function to draw table
function drawTable(lang, days, storedChecks) {
    var myNode = document.getElementById("results");
    myNode.innerHTML = '';
    for (var i = 0; i < weekdays.length; i++) {
        let newTable = document.createElement('table')
        var rowone = document.createElement('tr')
        for (var j = 0; j < storedChecks.length; j++) {
            el = document.createElement('th')
            el.appendChild(document.createTextNode(replaceChecked(storedChecks[j])))
            rowone.appendChild(el)
            // rowone.appendChild(document.createElement('td').appendChild(document.createTextNode(replaceChecked(storedChecks[j]))));
        }
        newTable.appendChild(rowone)
        for (var j = 0; j < weekdays[i].classes.length; j++) {
            var row = document.createElement('tr')
            var el;
            if (storedChecks.includes("time")) {
                // row.appendChild(document.createElement('td')).appendChild(document.createTextNode(weekdays[i].classes[j].time.start + "->" + weekdays[i].classes[j].time.end)))
                el = document.createElement('td')
                el.appendChild(document.createTextNode(weekdays[i].classes[j].time.start + "->" + weekdays[i].classes[j].time.end))
                row.appendChild(el)
            }
            if (storedChecks.includes("week")) {
                el = document.createElement('td')
                el.appendChild(document.createTextNode(weekdays[i].classes[j].week))
                row.appendChild(el)
            }
            if (storedChecks.includes("classroom")) {
                el = document.createElement('td')
                el.appendChild(document.createTextNode(weekdays[i].classes[j].classroom))
                row.appendChild(el)
            }
            el = document.createElement('td')
            el.appendChild(document.createTextNode(weekdays[i].classes[j].discipline_name))
            row.appendChild(el)
            if (storedChecks.includes("lessontype")) {
                el = document.createElement('td')
                el.appendChild(document.createTextNode(weekdays[i].classes[j].type))
                row.appendChild(el)
            }
            if (storedChecks.includes("format")) {
                el = document.createElement('td')
                el.appendChild(document.createTextNode(weekdays[i].classes[j]._format))
                row.appendChild(el)
            }
            if (storedChecks.includes("tutor")) {
                el = document.createElement('td')
                el.appendChild(document.createTextNode(weekdays[i].classes[j].tutor))
                row.appendChild(el)
            }
            if (storedChecks.includes("group")) {
                el = document.createElement('td')
                el.appendChild(document.createTextNode(weekdays[i].classes[j]._group))
                row.appendChild(el)
            }
            newTable.appendChild(row)
        }
        document.getElementById("results").appendChild(newTable)
    }

}
//here we start our html page:

let lang
let days
let storedChecks
var arr = loadLocalStorageData()
lang = arr[0]
days = arr[1]
storedChecks = arr[2]
console.log(lang)
if (storedChecks !== undefined) {
    console.log("lolokek")
    drawTable(lang, days, storedChecks)
}