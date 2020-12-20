
const page = location.pathname
const activeMenu = document.querySelectorAll('.links a')

for ( let active of activeMenu ){
    if ( page.includes(active.getAttribute('href')) ){
        active.classList.add('active')
    }
}