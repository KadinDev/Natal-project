
// zoom com clique duplo no mouse
const options = {
    doubleClickZoom: true
}

const map = L.map('mapid', options).setView([-4.5429467,-40.7165188,3125], 14),

// Mapa via satélite + Nomes das ruas
googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map)


// Criando Ícon
const imgDonors = document.querySelector('img').src
const icon = L.icon({
    iconUrl: imgDonors,
    iconSize: [30, 30],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})




// pegando e colocando os dados no mapa
const donors = document.querySelectorAll('.donors span')

for (let donor of donors){
    const lat = donor.querySelector(' [name=lat] ').value
    const lng = donor.querySelector(' [name=lng] ').value
    
    L
    .marker(
        [lat, lng], 
        {icon}
    )
    .addTo(map)
}

