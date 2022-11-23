const container = document.querySelector(".container")

const unsplashURL = "https://source.unsplash.com/random/"/** siteden rast gele görsel alıyor */

const rows = 9 /** kaçtane görsel alacağımızı belirliyor */
for (let i = 0; i < rows * 3; i++){/** bir döngü oluşturuyoruz */
    const img = document.createElement("img") /**bir img oluştursun*/
    img.src = `${unsplashURL}${getRandomSize()}`/** */
    container.appendChild(img)
}

function getRandomNumber() {
    
    return Math.floor(Math.random()*10)+300
}


function getRandomSize() {
    return `${getRandomNumber()}x${getRandomNumber()}`
}
console.log(getRandomSize())