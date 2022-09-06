const chk = document.getElementById('chk')

if (localStorage.getItem('data-theme') == 'dark') {
    chk.checked = true;
}

if (localStorage.getItem('data-theme') == 'dark') {
    document.getElementById("logofatec").src = "/img/logo_fatec_online belmont.png"
}

chk.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme');

    if (!chk.checked) {
        changeThemeToLight()
        document.getElementById("logofatec").src = "/img/logo_fatec_online.png"
    } else {
        changeThemeToDark()
        document.getElementById("logofatec").src = "/img/logo_fatec_online belmont.png"
    }
})