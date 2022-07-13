let text = document.querySelector(`#text`)
let list = document.querySelector(`.todo`)
let removed = document.querySelector(`.removed`)
let done = document.querySelector(`.done`)
let idx = 0


function addFunc(removeBtn) {
    removeBtn.addEventListener("click", () => {
        console.log(removeBtn.classList)
        removeBtn.parentElement.remove()
        idx--

});
}


function removeLocal (removeBtn) {
    removeBtn.addEventListener(`click`, () => {
        console.log(removeBtn.classList)
        console.log(removeBtn.innerText)
        localStorage.removeItem(removeBtn.innerText)        
        removeBtn.parentElement.remove()
        idx--
    })
}


    // Tasks


text.addEventListener(`keydown`, (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        
        // Array

        let arr = event.target.value.split(` `)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == ' ') {
                arr[i] == '-'

            }
        }

        let str1 = arr.toString()
        
        //  Div 
        
        let div = document.createElement("div")
        let str = event.target.value
        div.classList.add(str1)
        document.body.append(div)
        
        // p
            
        let p = document.createElement("p")
        p.innerText = str;
        div.appendChild(p)

        // Checkbox

        let checkbox = document.createElement("input")
        checkbox.setAttribute(`type`, 'checkbox')
        div.classList.add(`check`)
        div.appendChild(checkbox)

        // Checkbox Logic

        checkbox.addEventListener(`change`, (el) => {
            if (el.target.checked) {
                div.classList.add(`green`)
                div.classList.add(`checked`)
            }
            else {
                div.classList.remove(`checked`)
                div.classList.remove(`green`)
            }
        })

        // Button 
        
        let removeBtn = document.createElement(`button`)
        removeBtn.classList.add(`removeBtn`)
        removeBtn.innerHTML = '&#10005;'
        addFunc(removeBtn)
        div.appendChild(removeBtn)
        ++idx

        // LocalStorage Set Items
        
        localStorage.setItem( str , str1)

        console.log(`${event.target.value}`)     
    }

})


    // Removed tasks


removed.addEventListener(`click`, (event) => {

    event.preventDefault()

    let element = document.querySelector(`.check`)
    element.remove()

    // LocalStorage Get Items

    let arr = []
    for (let i = 0; i < localStorage.length; i++) {
        arr[i] = localStorage.getItem(localStorage.key(i))
        if (arr[i].includes(`check`) == true ) {
            console.log(`your mom 123`)
        }
        console.log(arr)
        console.log(`my life is a lie`)
    }

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]

    // Array

    let local  = str.split(` `)
    for (let j = 0; j < local.length; j++) {
        if (local[j] == ',') {
               local[j] = ' '
       }
    }

    let str1 = local.toString().replace(',', ' ')
    console.log("qqqq", str1)
    
    // Div

    let div = document.createElement("div")
    div.classList.add(str)
    document.body.append(div)

    // p

    let p = document.createElement("p")
    p.innerText = str1;
    div.appendChild(p)

    // ButtonremoveBtn

    let removeBtn = document.createElement(`button`)
    removeBtn.classList.add(`removeBtn`)
    removeBtn.innerHTML = '&#10005;'
    removeLocal(removeBtn)
    localStorage.removeItem(str1);
    div.appendChild(removeBtn)
    ++idx

    // Remove Local Storage Item


    }
})

window.addEventListener(`load`, (event) => {
    console.log(`Hello World`)
    let arr = []
    for (let i = 0; i < localStorage.length; i++) {
        arr[i] = localStorage.getItem(localStorage.key(i))
        if (arr[i].includes(`check`) == true ) {
            console.log(`your mom 123`)
        }
        console.log(arr)
        console.log(`my life is a lie`)
    }

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]

    // Array

    let local  = str.split(` `)
    for (let j = 0; j < local.length; j++) {
        if (local[j] == ',') {
               local[j] = ' '
       }
    }

    let str1 = local.toString().replace(',', ' ')
    console.log("qqqq", str1)
    
    // Div

    let div = document.createElement("div")
    div.classList.add(str)
    document.body.append(div)

    // p

    let p = document.createElement("p")
    p.innerText = str1;
    div.appendChild(p)

        // Checkbox

    let checkbox = document.createElement("input")
    checkbox.setAttribute(`type`, 'checkbox')
    div.classList.add(`check`)
    div.appendChild(checkbox)

    // Checkbox Logic

    checkbox.addEventListener(`change`, (el) => {
        if (el.target.checked) {
            alert("tashaci")
            div.classList.add(`green`)
            div.classList.add(`checked`)
        }
        else {
            div.classList.add(`checked`)
            div.classList.remove(`green`)
        }
    })



    // ButtonremoveBtn

    let removeBtn = document.createElement(`button`)
    removeBtn.classList.add(`removeBtn`)
    removeBtn.innerHTML = '&#10005;'
    removeLocal(removeBtn)
    // localStorage.removeItem(str1);
    div.appendChild(removeBtn)
    ++idx
    
    }
})

done.addEventListener(`click`, (event) => {

})
































