let OpenNavBar = document.querySelector('.toggle')
let navMenu = document.querySelector('.nav-list')


OpenNavBar.onclick = function () {
    navMenu.classList.toggle('active')
}
document.addEventListener('DOMContentLoaded', function () {
    const letterElement = document.getElementById('animated-letter');

    const animationCompleted = sessionStorage.getItem('animatedCompleted');

    if (!animationCompleted) {
        letterElement.textContent = ' Shreða by name';
        letterElement.addEventListener('animationend', function () {
            letterElement.classList.add('complete');
            sessionStorage.setItem('animatedCompleted', 'true');
        })
    }
    else {
        letterElement.classList.add('complete');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const letterElement = document.getElementById('animation-letter');

    const animationCompleted = sessionStorage.getItem('animationCompleted');

    if (!animationCompleted) {
        letterElement.textContent = ' a front end wizard ';
        letterElement.addEventListener('animationend', function () {
            letterElement.classList.add('complete');
            sessionStorage.setItem('animationCompleted', 'true');
        })
    }
    else {
        letterElement.classList.add('complete');
    }

});
document.addEventListener('DOMContentLoaded', function () {
    const letterElement = document.getElementById('animater-letter');

    const animationCompleted = sessionStorage.getItem('animaterCompleted');

    if (!animationCompleted) {
        letterElement.textContent = "with two years experience";
        letterElement.addEventListener('animationend', function () {
            letterElement.classList.add('complete');
            sessionStorage.setItem('animaterCompleted', 'true');
        })
    }
    else {
        letterElement.classList.add('complete');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('a');

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll)
    })
    function smoothScroll(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
            behavior: 'smooth'
        });

    }

});

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        var name = event.target.querySelector('#name').value;
        var email = event.target.querySelector('#email').value;
        var subject = event.target.querySelector('#subject').value;
        var message = event.target.querySelector('#message').value;
        
        var templateParams = {
            to_name: 'SHREDA',
            from_name: name,
            email,
            subject,
            message,
        };

        emailjs.send('service_ck7gvex', 'template_rpmyoxq', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully');
                document.getElementById('contact-form').reset();
            }, function (error) {
                console.log('FAILED...', error);
            });
       
    });
}
       
function subscribe() {
    var emailInput = document.getElementById("emailInput");
    var message = document.getElementById("message");

    if (validateEmail(emailInput.value)) {
       console.log = "Subscribed successfully!";
        console.log('success')
    } else {
        message.innerHTML = "Please enter a valid email address";
        message.style='display:block, '
        message.style.color = "red";
        console.log('failed')
    }
}

function validateEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);

    return false;
}

       