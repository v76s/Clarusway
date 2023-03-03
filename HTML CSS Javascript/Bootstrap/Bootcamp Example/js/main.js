document.addEventListener('DOMContentLoaded', () => { 
  loadFaq();
  loadMap();
})


function loadFaq() {
  const div = document.createElement('div');
  div.classList.add('container');
  div.innerHTML = `
   <h2 class="text-center mb-4"> Frequently Asked Questions</h2>
    <div class="accordion accordion-flush" id="questions">
    ${faqList.map((item, index) => {
      const { question, answer } = item;
    const text = `
         <div class="accordion-item">
          <div class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#question-${index+1}">
              ${question}
          </div>

          <div id="question-${index+1}" class="accordion-collapse collapse" data-bs-parent="#questions">
            <div class="accordion-body">
            ${answer}
            </div>
          </div>
        </div>
      `;
      // console.log(text)
      return text;
    }).join('')}
    </div>
  `;
  document.getElementById('faq-section').appendChild(div);
}

window.addEventListener("scroll", (e) => { 
  console.log(this.scrollY)
  if (this.scrollY < 500) {
    // hide the up arrow
    document.getElementById('arrow-up').style.display = 'none';
  } else { 
    // show the up arrow
    document.getElementById("arrow-up").style.display = "block";
  }
})


function loadMap() { 
mapboxgl.accessToken =
	"pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA";
const map = new mapboxgl.Map({
	container: "map",
	// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
	style: "mapbox://styles/mapbox/streets-v11",
	center: [-73.986498, 40.748377],
	zoom: 14,
});

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
	.setLngLat([ -73.986498, 40.748377])
	.addTo(map);
}
