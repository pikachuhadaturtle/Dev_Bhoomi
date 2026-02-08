const content = document.getElementById('content');
const points = document.querySelectorAll('.point');
const audio = document.getElementById('bgAudio');
const toggle = document.getElementById('audioToggle');

toggle.onclick = () => {
  if (audio.paused) {
    audio.play();
    toggle.textContent = '🔇';
  } else {
    audio.pause();
    toggle.textContent = '🔈';
  }
};

const data = {
  kotgarh: {
    title: "Kotgarh",
    items: [
      ["assets/images/kotgarh/budhi-diwali.jpg", "Budhi Diwali"],
      ["assets/images/kotgarh/maghi.jpg", "Maghi · Maash ki khichdi"],
      ["assets/images/kotgarh/dhatu.jpg", "Dhaatu Rezta"],
      ["assets/images/kotgarh/natti.jpg", "Natti - Cutest Dance"]
    ]
  },
  kullu: {
    title: "Kullu",
    items: [
      ["assets/images/kullu/siddu.jpg", "Siddu · steamed bread"],
      ["assets/images/kullu/tabar.jpg", "What a weapon! Tabar"],
      ["assets/images/kullu/KulluDusshera.jpg", "Kullu Dusshehra"],
      ["assets/images/kullu/appleorchards.jpg", "Apple and peach orchards"]
    ]
  },
  kinnaur: {
    title: "Kinnaur",
    items: [
      ["assets/images/kinnaur/kalpa.jpg", "Kalpa Kinnaur"],
      ["assets/images/kinnaur/dhol.jpg", "Pahadi Dhol"],
      ["assets/images/kinnaur/chanamadra.jpg", "Chana Madra"],
      ["assets/images/kinnaur/raulane.jpg", "Raulane!"]
    ]
  },
  shimla: {
    title: "Shimla",
    items: [
      ["assets/images/shimla/nainadevi.jpg", "Nainadevi ji"],
      ["assets/images/shimla/mall.jpg", "Jaha gaadi nahi jaati"],
      ["assets/images/shimla/siddu.jpg", "Siddu"],
      ["assets/images/shimla/FaguShimla.jpg", "Fagu"]
    ]
  }
};

points.forEach(point => {
  point.onclick = () => {
    const place = point.dataset.place;
    const section = data[place];

    let html = `<h2>${section.title}</h2><div class="polaroid-grid">`;
    section.items.forEach(item => {
      html += `
        <div class="polaroid">
          <img src="${item[0]}">
          <p>${item[1]}</p>
        </div>`;
    });
    html += `</div>`;

    content.innerHTML = html;
  };
});

