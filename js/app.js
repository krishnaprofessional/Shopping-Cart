const courses = document.querySelector('#courses-list');


loadEventListners();


function loadEventListners(){
    courses.addEventListener('click', buycours(e){
        console.log(e);

    });
}




















//     if(e.target.classList.contains('add-to-cart')){

//         const course = e.target.parentElement.parentElement;

//         getCourseInfo(course);

//     }
// }

// function getCourseInfo(course){
//     console.log(course);
// }
