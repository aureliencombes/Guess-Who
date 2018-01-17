// flipping tiles automatisation

let tilesNumber = 20
let tile = []

for(i = 1; i <= tilesNumber; i++)
{
    tile[i] = document.querySelector('.tile_' + i)
    tile[i].addEventListener('click', function()
    {
        this.classList.toggle('active')
    })
}










// Launch animations

const all = document.querySelector('body')
const help = document.querySelector('.help')
const arrow = document.querySelector('.arrow')
const dockTop = document.querySelector('.dock.top')
const dockBottom = document.querySelector('.dock.bottom')

window.onload
{
    for(i = 1; i <= tilesNumber; i++)
    {
        tile[i].classList.add('active')
    }

    window.setTimeout(launch, (300))

    all.addEventListener('click', () => 
    {
        help.classList.add('active')
        arrow.classList.add('active')
        dockBottom.classList.add('initialized')
        dockTop.classList.add('initialized')
        setTimeout(vanish, (10000))
    })
    setTimeout(delayOpacity, (10000))
}

function launch()
{
    for(i = 1; i <= tilesNumber; i++)
    {
        tile[i].classList.remove('active')
    }
}

function delayOpacity()
{
    help.classList.add('active')
    arrow.classList.add('active')
    dockBottom.classList.add('initialized')
    dockTop.classList.add('initialized')
    setTimeout(vanish, (1000))
}

function vanish()
{
    help.classList.add('vanish')
    arrow.classList.add('vanish')
}










//  Menu

const options = document.querySelector('.options')
const menu = document.querySelector('.menu')
options.addEventListener('click', () => 
{
    console.log('clic options')
    menu.classList.toggle('active')
})










// Buttons

const raise = document.querySelector('.button.raise')

raise.addEventListener('click', () => 
{
    for(i = 1; i <= tilesNumber; i++)
    {
        tile[i].classList.remove('active')
    }
})

const zoom = document.querySelector('.button.zoom')

zoom.addEventListener('click', () => 
{
    dockTop.classList.toggle('zoom')
    dockBottom.classList.toggle('zoom')
})


const color = document.querySelector('.button.color')

color.addEventListener('click', () => 
{
    {
        document.querySelector('.color').classList.toggle('active')
        document.querySelector('.dock.top').classList.toggle('active')
        document.querySelector('.dock.bottom').classList.toggle('active')
    }
})

