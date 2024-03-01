// обработчик, слушатель, подписчик, handler, listener, subscriber => function
// function() (вызывает браузер) => callback
// {...} => сведения о событии => Event, event, ev, e
// new Array(), new Object(), new Event()
// function(event)

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

function handler(e) {
    e.stopPropagation()
    console.log(e.target, ':', e.currentTarget)
    alert('hey')
}

// function handler2(params) {
//     alert(params)
// }
//
// function double(params) {
//     handler(params)
//     handler2(params)
// }

// sm.onclick = handler
// sm.onclick = null

// sm.onclick = handler
// sm.onclick = double

// sm.addEventListener('click', handler, {capture: true, once: true})
sm.addEventListener('click', handler)
md.addEventListener('click', handler)
bg.addEventListener('click', handler)
// sm.addEventListener('click', handler2)

sm.removeEventListener('click', handler)

const fn = (e) => {
    e.preventDefault()
    alert('hey')
}

const a = document.getElementById('a')
a.addEventListener('click',fn)
a.removeEventListener('click',fn)