let inp = document.getElementById('mail_box')
let errormsg = document.getElementById('error_msg')
let btn = document.getElementById('btn')
btn.addEventListener('click', function () {
    let a=inp.value
    if (inp.value.length < 10)
        errormsg.style.display = 'inline'
    else if (isNaN(a))
        errormsg.style.display = 'inline'
    else
        errormsg.style.display = 'none'

})
