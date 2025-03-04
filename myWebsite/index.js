document.addEventListener("DOMContentLoaded", function() {
  const navbarTemplate = `
    <nav class="navbar navbar-light navbar-fixed-top">
      <div class="container-fluid">
        <ul class="nav nav-pills" role="tablist">
          <a class="navbar-brand" href="index.html">Litha Thoba</a>
          <li><a id="home" class="nav-link" href="index.html">Home</a></li>
          <li><a id="projects" class="nav-link" href="projects.html">Projects</a></li>
          <li><a id="contact" class="nav-link" href="contact.html">Contact</a></li>
          <li><a id="about" class="nav-link" href="about.html">About</a></li>
          <li class="ml-auto"><span class="whirligig"> S F I S V F B V B I I T I S L </span></li>
        </ul>
      </div>
    </nav>
  `;
  document.getElementById('navbar-placeholder').innerHTML = navbarTemplate;

  // Re-apply your JavaScript for active link styling if necessary
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });
      event.target.classList.add('active');
    });
  });
});
