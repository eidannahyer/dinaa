function showSurprise() {
    var surpriseElement = document.getElementById('surprise');
    var surpriseButton = document.getElementById('surprise-button');
    surpriseElement.style.display = 'block';
    surpriseButton.style.display = 'none';
    createBalloons(30);  // Number of balloons to create
}

function createBalloons(num) {
    const balloonsContainer = document.getElementById('balloons');
    const balloonImages = ['balloon1.png', 'balloon2.png', 'balloon3.png', 'balloon4.png', 'balloon5.png'];  // Local balloon images
    for (let i = 0; i < num; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundImage = `url(${balloonImages[i % balloonImages.length]})`;
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDelay = `${Math.random() * 5}s`;
        balloonsContainer.appendChild(balloon);
    }
}

function revealMessage() {
    var mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `
        <p class="new-message">Hai sayang! Selamat berulang tahun ya!!!</p>
        <p class="new-message">Selamat telah mencapai umur 21 tahun, 21 tahun yang tidak mudah bagi seng. Banyak perjuangan dan pengorbanan yang sudah seng lakukan. Aku bangga dengan semua bentuk pencapaian kam seng apapun itu, aku selalu bersyukur akan semua hal baik yang kam terima.</p>
        <p class="new-message">Ku harap di hari spesial kam ini, seng bisa lebih baik lagi dalam hal apapun. Selalu diberi kesehatan dan juga rezeki berlimpah untuk seng. Semoga seng selalu dalam lindungan Allah SWT, semoga seng selalu bahagia dengan atau tanpa aku.</p>
        <p class="new-message">Selamat ulang tahun sengku yang cantik, pintar, baikk, penyabar dan lucu!! Bahagia selalu yaa!!??!!? Ingat aku akan selalu ada buat seng, aku usahakan. Terima kasih seng sudah bertahan sejauh ini, sudah bisa mencapai titik ini pun sayang sudah hebat. AKU BANGGA SAMA SENG!!!</p>
        <p class="new-message"> I LOVE YOU AS ALWAYS SAYANGKU CINTAKU DUNIAKU!!! SEKALI LAGI, HAPPY BIRTHDAY BABY!!!</p>
        <p class="new-message">- Made with Love by Reyhan Nadie a.k.a Rere <3 - </p>
        `;
    mainContainer.style.padding = '40px';
    mainContainer.style.borderRadius = '20px';
}
