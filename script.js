const weeks = document.querySelectorAll('.week')
const month = document.querySelector(".current-month")
let months= ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
let currentMonth = new Date().getMonth();
let date = new Date(new Date().getFullYear(),new Date().getMonth(),1) //1 июля
let day_in_week = date.getDay()// 6(суббота) - номер для недели
let day=1 //счётчик количества отрисованных дней в календаре
let selectWeek = undefined
for (let i = 0; i <  weeks.length; i++) {
    weeks[i].addEventListener("click",()=>{
        for (let j = 0; j < 6; j++) {
            weeks[j].style.background = "none"
        }
        weeks[i].style.background  = "#e5e5e5"
        selectWeek=i
        console.log(getWeek(selectWeek))
    })
}
function setMonth(val){
    currentMonth += val
    date = new Date(new Date().getFullYear(),currentMonth,1)
    month.innerText = months[date.getMonth()] + ' ' + date.getFullYear()
    day_in_week = date.getDay() ===0 ? 7 : date.getDay()
    day =1
    calendar()
    if (selectWeek!==undefined) console.log(getWeek(selectWeek))
}
function calendar(){
    for (let i = 0; i <  weeks.length; i++) {
        weeks[i].innerHTML = null
    }
    for (let i = 0; i < weeks.length; i++) {
        // weeks[i].addEventListener('click',function(){
        for (let j = 0; j < 7; j++) {
            if(j<day_in_week-1 && i===0){
                weeks[i][j]=new Date(new Date().getFullYear(),currentMonth,j-day_in_week+2)
                weeks[i].innerHTML += `<td> ${weeks[i][j].getDate()} </td>`
            }
            else{
                weeks[i][j]=new Date(new Date().getFullYear(),currentMonth,day)
                weeks[i].innerHTML += `<td> ${weeks[i][j].getDate()} </td>`
                day++
            }

        }
    }
}
function getWeek(i){
    console.log(selectWeek)
    let output = []
    for (let j = 0; j < weeks.length; j++) {
        output.push(weeks[i][j].getDate())
    }
    return output
    // return weeks[i][0].getDate()+" "+ months[weeks[i][0].getMonth()]+" " + weeks[i][0].getFullYear() +' - '+weeks[i][6].getDate()+" "+ months[weeks[i][6].getMonth()]+" " + weeks[i][6].getFullYear()
}
setMonth(0)


