const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasDarkmode = localStorage.getItem('darkmode')

if(hasDarkmode == null) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
} else if(hasDarkmode === 'on') {
    enableDarkMode()
} else if(hasDarkmode === 'off') {
    disableDarkMode()
}




darkmodeSwitch.addEventListener('change', () => {
    if(darkmodeSwitch.checked) {
        enableDarkMode()
        localStorage.setItem('darkmode', 'on')
    } else {
        disableDarkMode()
        localStorage.setItem('darkmode', 'off')
    }
})

function enableDarkMode() {
    darkmodeSwitch.checked = true
    document.documentElement.classList.add('dark')
}

function disableDarkMode() {
    darkmodeSwitch.checked = false
    document.documentElement.classList.remove('dark')
}

 /* tagit hjälp av chatgp */
const toggles = document.querySelectorAll('.accordion-toggle');

function closeAll() {
  toggles.forEach(btn => {
    btn.setAttribute('aria-expanded', 'false');
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    panel.hidden = true;
  });
}

toggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    closeAll();
    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      document.getElementById(btn.getAttribute('aria-controls')).hidden = false;
    }
  });
});


toggles.forEach(btn => {
  if (btn.getAttribute('aria-expanded') === 'true') {
    document.getElementById(btn.getAttribute('aria-controls')).hidden = false;
  }
});