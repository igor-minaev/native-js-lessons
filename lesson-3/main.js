// обработчик, handler, подписчик, subscriber, listener, слушатель --> function
// Handler будет вызванан при наступлении события
// Handler будет вызванан с аргументом ({})
// {} (сведения о произошедшем событии) -> event, ev, e, evt

const sm = document.getElementById('small')

function onCllickHandler(){
    alert('hey!')
}
sm.onclick= onCllickHandler
