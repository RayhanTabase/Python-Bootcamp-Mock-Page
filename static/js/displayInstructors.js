import instructors from "./instructors.js";

const instructorsSection = document.querySelector('#featured-instructors');
export default function displayInstructors(){
  const listContainer = document.createElement('ul');
  listContainer.className = 'instructors-list';

  instructors.forEach((instructor) => {
    const instructorCard = document.createElement('li');
    instructorCard.className = 'instructor-card';
    instructorCard.innerHTML = `
      <div class="text">
        <h3 class="name">${instructor.name}</h3>
        <p class="job">${instructor.job}</p>
        <p class="details">${instructor.details}</p>
      </div>
      <div class="image">
        <img src="${instructor.image}" alt="${instructor.name}">
      </div>
    `
    listContainer.appendChild(instructorCard);
  })
  instructorsSection.appendChild(listContainer);
}