function toggleMenu() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('active');
}
document.getElementById('menu-toggle').addEventListener('click', toggleMenu);
document.getElementById('menu-close').addEventListener('click', toggleMenu); 
 /* CSS */
 document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', toggleMenu);
    });
   var targetID = this.getAttribute('href');
    var targetElement = document.getElementById(targetID);
    var targetOffset = targetElement.offsetTop;
    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }       
    var targetID = this.getAttribute('href');
    var targetElement = document.getElementById(targetID);
    var targetOffset = targetElement.offsetTop;
    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });

    function filterProjects(category) {
      var projects = document.querySelectorAll('.project');
      projects.forEach(project => {
        var projectCategory = project.getAttribute('data-category');
        if (category === 'all' || category === projectCategory) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    }

    document.querySelectorAll('.filter').forEach(item => {
        item.addEventListener('click', function() {
            var category = this.getAttribute('data-category');
            filterProjects(category);
        });
        });
        document.getElementById('contact-form').addEventListener('submit', function(event) {
          event.preventDefault();
          var formData = new FormData(this);
          var xhr = new XMLHttpRequest();
          xhr.open('POST', 'contact.php', true);
          xhr.onload = function() {
            if (xhr.status === 200) {
              alert('Your message has been sent!');
            }
          };
          xhr.send(formData);
        });
        document.getElementById('contact-form').addEventListener('submit', function(event) {
          event.preventDefault();
          var formData = new FormData(this);
          var xhr = new XMLHttpRequest();
          xhr.open('POST', 'contact.php', true);
          xhr.onload = function() {
            if (xhr.status === 200) {
              alert('Your message has been sent!');
            }
          };
          xhr.send(formData);
        });
        document.getElementById('contact-form').addEventListener('submit', function(event) {
          event.preventDefault();
          var formData = new FormData(this);
          var xhr = new XMLHttpRequest();
          xhr.open('POST', 'contact.php', true);
          xhr.onload = function() {
            if (xhr.status === 200) {
              alert('Your message has been sent!');
            }
          };
          xhr.send(formData);
        });