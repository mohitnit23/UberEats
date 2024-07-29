export function grayeffect() {
    let b1 = document.getElementById('b1')
    let b2 = document.getElementById('b2')
    let b3 = document.getElementById('b3')

    b1.addEventListener('mouseover', function () {
        b1.style.filter = 'grayscale(100%)'
    })
    b1.addEventListener('mouseout', function () {
        b1.style.filter = 'grayscale(0)'
    })
    b2.addEventListener('mouseover', function () {
        b2.style.filter = 'grayscale(100%)'
    })
    b2.addEventListener('mouseout', function () {
        b2.style.filter = 'grayscale(0)'
    })
    b3.addEventListener('mouseover', function () {
        b3.style.filter = 'grayscale(100%)'
    })
    b3.addEventListener('mouseout', function () {
        b3.style.filter = 'grayscale(0)'
    })
}
