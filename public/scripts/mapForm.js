const options = {
    doubleClickZoom: false
}

const map_form = {
    iconMap: 'https://malucellidotlive.files.wordpress.com/2017/12/gorro-de-papai-noel-em-png-queroiamgem-ceic3a7a-crispim-1.png?w=768',
    map: L.map('mapid', options).setView([-4.5422542,-40.7131473,3125], 14),
}

// Mapa via satélite + Nomes das ruas
googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map_form.map)


const icon = L.icon({
    iconUrl: map_form.iconMap,
    iconSize: [30, 30],
    iconAnchor: [29, 68],
})


let marker

map_form.map.on('click', function(event){

    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector(' [name=lat] ').value = lat
    document.querySelector(' [name=lng] ').value = lng

    marker && map_form.map.removeLayer(marker)

    marker = L.marker({lat, lng}, {icon}).addTo(map_form.map)
})


