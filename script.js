let text = document.querySelector(`#text`)
let list = document.querySelector(`.todo`)
let removed = document.querySelector(`.removed`)
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
        removeBtn.parentElement.remove()
        
        // localStorage.removeItem(removeBtnStr)        
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
                
            }

            else {
                div.classList.remove(`green`)
            }
        } )

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

    // LocalStorage Get Items

    let arr = []
    for (let i = 0; i < localStorage.length; i++) {
        arr[i] = localStorage.getItem(localStorage.key(i))
        console.log(arr)
    }

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]

    // Array

    let Array  = str.split(` `)
    for (let j = 0; j < Array.length; j++) {
        if (Array[j] == ',') {
               Array[j] == ' '
       }
    }

    let str1 = Array.toString()
    
    // Div

    let div = document.createElement("div")
    div.classList.add(str)
    document.body.append(div)

    // p

    let p = document.createElement("p")
    p.innerText = str1;
    div.appendChild(p)

    // Button

    let removeBtn = document.createElement(`button`)
    removeBtn.classList.add(`removeBtn`)
    removeBtn.innerHTML = '&#10005;'
    removeLocal(removeBtn)
    div.appendChild(removeBtn)
    ++idx

    // Remove Local Storage Item


    }
})







































