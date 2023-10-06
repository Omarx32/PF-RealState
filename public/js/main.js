let map=L.map('map-template').setView([-31.7396141, -60.500842],10)

const socket=io();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

map.locate({enableHighAccuracy: true});
map.on('locationfound', (event)=>{
    const coords= [event.latlng.lat, event.latlng.lng];
    const marker= L.marker(coords);
    marker.bindPopup("Estás acá, pedazo de trolo")
    console.log(event);
    map.addLayer(marker);
    socket.emit('userCoordinates', event.latlng);
})

socket.on('newUserCoordinates', (coords)=>{
    console.log('New user is connected');
    const marker= L.marker([coords.lat + 1, coords.lng]);
    console.log(coords);
    marker.bindPopup('El nuevo usuario está acá');
    map.addLayer(marker);
})

// const marker= L.marker([-31.7396141, -60.500842]).bindPopup("Estás acá, pedazo de trolo")

// marker.addTo(map)