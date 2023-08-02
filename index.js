// eslint-disable-next-line no-unused-vars
function toggleMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
  }
}

// Array of objects representing featured speakers///////////////////
const featuredSpeakers = [
  {
    imageSrc: '../images/speaker 1.png',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    imageSrc: '../images/speaker 2.png',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    imageSrc: '../images/speaker 2.png',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    imageSrc: '../images/speaker 1.png',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    imageSrc: '../images/speaker 2.png',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    imageSrc: '../images/speaker 2.png',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },

];

let speakersToShow = 2; // Initial number of speakers to display

function createFeaturedSpeakers() {
  const featureWrapper = document.getElementById('feature-wrapper');
  featureWrapper.innerHTML = ''; // Clear the existing content

  for (let i = 0; i < speakersToShow; i+=1) {
    const speaker = featuredSpeakers[i];

    // Create the HTML elements for each speaker
    const speakerDiv = document.createElement('div');
    speakerDiv.classList.add('featured-speaker');

    const img = document.createElement('img');
    img.src = speaker.imageSrc;

    const span = document.createElement('span');
    const h3 = document.createElement('h3');
    h3.textContent = speaker.name;

    const h5 = document.createElement('h5');
    h5.textContent = speaker.title;

    const p = document.createElement('p');
    p.textContent = speaker.description;

    // Append the elements to the featured speaker div
    span.appendChild(h3);
    span.appendChild(h5);
    span.appendChild(p);

    speakerDiv.appendChild(img);
    speakerDiv.appendChild(span);

    // Append the speaker div to the feature wrapper
    featureWrapper.appendChild(speakerDiv);
  }

  const seeMoreBtn = document.querySelector('.see-moreBtn');
  if (speakersToShow >= featuredSpeakers.length) {
    // Hide the "More" button if all speakers have been displayed
    seeMoreBtn.style.display = 'none';
  } else {
    seeMoreBtn.style.display = 'block';
  }
}

function showMoreSpeakers() {
  // i need to increament whenevr Increment the number of speakers to show
  speakersToShow += 2;
  createFeaturedSpeakers();
}

// i need to Call the function to create featured speakers on page load
document.addEventListener('DOMContentLoaded', createFeaturedSpeakers);

// i need to to make eventListener to the button
const seeMoreBtn = document.querySelector('.see-moreBtn');
seeMoreBtn.addEventListener('click', showMoreSpeakers);
