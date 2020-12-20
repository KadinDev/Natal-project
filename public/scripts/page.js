
// Galeria 
const image_principal = document.querySelector('.image')
const imgs = document.querySelectorAll('.galery-right div')

for (let img of imgs){
    img.addEventListener('mousemove', ()=>{
        
        const src_img_card = img.querySelector('img').src
        const title_img = img.querySelector('p').innerHTML

        image_principal.querySelector('p').innerHTML = title_img
        image_principal.querySelector('img').src = src_img_card        
        image_principal.querySelector('img').classList.add('active')

    })

    img.addEventListener('mouseout', ()=>{
        image_principal.querySelector('img').classList.remove('active')
    })
}
