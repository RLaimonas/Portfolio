// document.addEventListener('DOMContentLoaded', function() {
//   const buttons = document.querySelectorAll('.toggle-button');

//   buttons.forEach(function(button) {
//     button.addEventListener('click', function() {
//       const content = this.parentNode.nextElementSibling;

//       if (content.style.maxHeight) {
//         content.style.maxHeight = null;
//         this.innerHTML = '&#9660;';  // Arrow pointing down
//       } else {
//         content.style.maxHeight = content.scrollHeight + 'px';
//         this.innerHTML = '&#9650;';  // Arrow pointing up
//       }
//     });
//   });
// });
// function toggleProject(projectDetailsId) {
//   const projectDetails = document.getElementById(projectDetailsId);
//   projectDetails.style.display =
//       projectDetails.style.display === 'none' ? 'block' : 'none';
// }
// document.addEventListener('DOMContentLoaded', (event) => {
//   function toggleProject(projectDetailsId) {
//     const projectDetails = document.getElementById(projectDetailsId);
//     projectDetails.style.display =
//         projectDetails.style.display === 'none' ? 'block' : 'none';
//   }

//   // If you have other JavaScript code, it should be inside this function as
//   // well
// });
// document.addEventListener('DOMContentLoaded', (event) => {
//   const projectTitles = document.querySelectorAll('.project-title');

//   projectTitles.forEach(title => {
//       title.addEventListener('click', () => {
//           const projectDetails = title.nextElementSibling;
//           projectDetails.style.display = projectDetails.style.display ===
//           'none' ? 'block' : 'none';
//       });
//   });

//   // If you have other JavaScript code, it should be inside this function as
//   well
// });


// document.addEventListener('DOMContentLoaded', (event) => {
//   const projectTitles = document.querySelectorAll('.project-title');
//   projectTitles.forEach(title => {
//     const projectDetails =
//         title.closest('.project').querySelector('.project-details');
//     projectDetails.style.display = 'none';
//     title.addEventListener('click', () => {
//       const projectDetails =
//           title.closest('.project').querySelector('.project-details');
//       projectDetails.style.display =
//           projectDetails.style.display === 'none' ? 'block' : 'none';
//     });
//   });

//   // If you have other JavaScript code, it should be inside this function as
//   // well
// });
// // turn off formating

// OPENING AND CLOSING PROJECT DETAILS

// clang-format off
// document.addEventListener('DOMContentLoaded', (event) => {
//   const projectTitles = document.querySelectorAll('.project-title');

//   projectTitles.forEach(title => {
//       title.addEventListener('click', () => {
//           const projectDetails = title.closest('.project').querySelector('.project-details');
//           projectDetails.style.display = (projectDetails.style.display === 'none' || projectDetails.style.display === '') ? 'block' : 'none';
//       });
//   });
// });

document.addEventListener('DOMContentLoaded', (event) => {
  const projectHeaders = document.querySelectorAll('.project-header');

  projectHeaders.forEach(header => {
      header.onclick = function() {
          const details = this.nextElementSibling;
          details.classList.toggle('open');
      }
  });
});


// document.addEventListener('DOMContentLoaded', (event) => {
//   const projectHeaders = document.querySelectorAll('.project-header');

//   projectHeaders.forEach(header => {
//       header.onclick = function() {
//           const details = this.nextElementSibling;
          
//           if(details.style.maxHeight && details.style.maxHeight !== '0px') {
//               details.style.maxHeight = '0px';
//           } else {
//               details.style.maxHeight = details.scrollHeight + 'px';
//           }
//       }
//   });
// });


// IMAGE MODAL
document.addEventListener('DOMContentLoaded', (event) => {
  const images = document.querySelectorAll('.project-image');
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('expandedImage');
  const span = document.getElementsByClassName('close')[0];

  images.forEach(img => {
      img.onclick = function(){
          modal.style.display = "block";
          modalImg.src = this.src;

          // Ensure the image is loaded before calculating its dimensions
          modalImg.onload = function() {
              // Get the dimensions of the image and the window
              const imgHeight = modalImg.clientHeight;
              const imgWidth = modalImg.clientWidth;
              const windowHeight = window.innerHeight;
              const windowWidth = window.innerWidth;
              
              // Calculate the top and left positions
              const topPosition = (windowHeight - imgHeight) / 2;
              const leftPosition = (windowWidth - imgWidth) / 2;
              modalImg.style.top = topPosition + 'px';
              modalImg.style.left = leftPosition + 'px';
          }
      }
  });

  span.onclick = function() { 
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});


