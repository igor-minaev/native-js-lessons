// обработчик, handler, подписчик, subscriber, listener, слушатель --> function
// Handler будет вызванан при наступлении события
// Handler будет вызванан с аргументом ({})
// {} (сведения о произошедшем событии) -> event, ev, e, evt

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')
const a = document.getElementById('a')

function onCllickHandlerSm(e) {
    e.stopPropagation()  //прекратить распространение
    alert('yo')
}

function anchorHandler(e){
    e.preventDefault() // отмена поведения по умолчанию
    alert('смерть ссылкам')
}

// sm.onclick = onCllickHandler  // старый метод
// sm.onclick = null   // удаляем обработчик

sm.addEventListener('click', onCllickHandlerSm)  // новый метод
// sm.removeEventListener('click', onCllickHandler) // удаляем обработчик

md.addEventListener('click', (e) => {
        e.stopPropagation()
        console.log(e.currentTarget.id)
    }
)
bg.addEventListener('click', (e) => console.log('yo'))
a.addEventListener('click', anchorHandler)
