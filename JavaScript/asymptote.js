input = document.getElementsByTagName('input')
let crep = document.createElement('p')

input[0].onchange = function() {
    p = input[0].value
    n = input[1].value
    u = (2*n + 3)/(n + 1)

    while (Math.abs(u - 2) >= Math.pow(10, -p)) {
        n += 1
        u = (2*n + 3)/(n + 1)
    }

    crep.textContent = n
    document.body.appendChild(crep)
}