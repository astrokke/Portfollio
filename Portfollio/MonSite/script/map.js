function init () {const map = L.map('mapid').setView([46.3415466, 2.6019912], 5);
console.log("je suis la")
const mainLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
const mende_marker = L.marker([44.517611,3.501873]).addTo(map)
const agde_marker = L.marker([43.316667,3.466667]).addTo(map)
const sdp_marker = L.marker([43.640199,5.097022]).addTo(map)
const stnazaire_marker = L.marker([47.2734979,-2.213848]).addTo(map)
const cassis_marker = L.marker([43.160701,5.618477]).addTo(map)
const SG_marker = L.marker([43.576035,3.946230]).addTo(map)
mende_marker.bindPopup("Notre usine de production de vélomobiles")
agde_marker.bindPopup("<b>Point de vente d'Agde</b>").openPopup()
sdp_marker.bindPopup("<b>Point de vente de Salon de Provence</b>")
stnazaire_marker.bindPopup("<b>Point de vente de Saint-Nazaire</b>")
cassis_marker.bindPopup("<b>Point de vente de Cassis</b>")
SG_marker.bindPopup("<b>Siège social</b>")

}

init()
