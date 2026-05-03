function switchLang(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll('.en').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.es').forEach(el => el.classList.add('hidden'));

    document.querySelectorAll('.' + lang).forEach(el => el.classList.remove('hidden'));
}

window.onload = function() {
    const lang = localStorage.getItem("lang") || "en";
    switchLang(lang);
};
