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
      ["assets/images/kotgarh/budhi-diwali.jpg", "Budhi Diwali · winter ritual"],
      ["assets/images/kotgarh/maghi.jpg", "Maghi · seasonal marker"],
      ["assets/images/kotgarh/raulane.jpg", "Raulane · local gathering"],
      ["assets/images/kotgarh/jagateshwar.jpg", "Jagateshwar Mahadev"]
    ]
  },
  kullu: {
    title: "Kullu",
    items: [
      ["assets/images/kullu/siddu.jpg", "Siddu · steamed bread"],
      ["assets/images/kullu/chana-madra.jpg", "Chana madra"],
      ["assets/images/kullu/dham.jpg", "Dham · community meal"],
      ["assets/images/kullu/orchards.jpg", "Apple and peach orchards"]
    ]
  },
  kinnaur: {
    title: "Kinnaur",
    items: [
      ["assets/images/kinnaur/dhatu.jpg", "Dhatu · traditional clothing"],
      ["assets/images/kinnaur/nati.jpg", "Nati · community dance"],
      ["assets/images/kinnaur/instruments.jpg", "Folk instruments"],
      ["assets/images/kinnaur/tabar.jpg", "Tabar weapon"]
    ]
  },
  shimla: {
    title: "Shimla",
    items: [
      ["assets/images/shimla/road.jpg", "Mountain roads"],
      ["assets/images/shimla/fog.jpg", "Quiet mornings"],
      ["assets/images/shimla/curves.jpg", "Hill curves"],
      ["assets/images/shimla/light.jpg", "Evening light"]
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

