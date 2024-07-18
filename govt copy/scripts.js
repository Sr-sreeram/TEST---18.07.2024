document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    // Navigation buttons functionality
    let navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            let targetPage = this.getAttribute('href');
            window.location.href = targetPage;
        });
    });

    // Sidebar functionality
    let menuIcon = document.getElementById('menu-icon');
    let sidebar = document.getElementById('sidebar');
    let closeBtn = document.getElementById('closebtn');

    menuIcon.addEventListener('click', function() {
        sidebar.style.width = "250px";
    });

    closeBtn.addEventListener('click', function() {
        sidebar.style.width = "0";
    });
});
