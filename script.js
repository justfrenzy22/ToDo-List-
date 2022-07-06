let add = document.querySelector('.add')
let list = document.querySelector('.todo')
let remove = document.querySelector('.remove')
let idx  = 0

add.addEventListener('click', () => {
    let text = prompt()
    let div  = document.createElement('div')
    div.classList.add(idx.toString())
    
    let p = document.createElement('p')
    p.innerText = text
    div.appendChild(p)
    let removeButton  = document.createElement('button')
    removeButton.innerHTML = 'x'
    removeButton.classList.add(idx.toString())
    div.appendChild(removeButton)
    list.appendChild(div)
})

.remove.addEventListener('click', () => {
})







