const circles = document.querySelectorAll(".circle")
const circle = document.querySelector(".circle.black")
const title = document.querySelector("#title")
circles.forEach(circle => {
    circle.addEventListener("click",({target}) => {
        const {backgroundColor} = getComputedStyle(target)
        // console.log(`color: ${computedStyle.backgroundColor}`)
        // console.log(computedStyle.backgroundColor)
        document.body.style.backgroundColor = backgroundColor
        title.style.color = 'black'
        
    
    })
});

circle.addEventListener('click',() => {
    title.style.color = 'white'
})


// penjelasan
// const circle = document.querySelectorAll(".circle")
// ini itu buat variabel nama circle yang mengambil nama class di html yaitu .circle

// circle.addEventListener("click",(style) => 
// artinya jadi ketika diklick masing masing elemen,ambil target didalamnya 


// const {backgroundColor} = getComputedStyle(target)
// supaya bisa ambil isi backgroundcolor per masing masing circle di css

// document.body.style.backgroundColor = backgroundColor
// ketika user menklick color,maka di body html akan berubah warnanya mengikuti warna di style backgrouncolor
// yg ada di css (red,green,blue,black)

function reset() {
    document.body.style.backgroundColor = ''
    title.style.color = 'black'
}

