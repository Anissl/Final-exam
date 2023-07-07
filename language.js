/* from English to Japanese */

let languages = ['English', 'Japanese'];
let lang = document.getElementById('language-link');

function toggleLanguage() {
  let text = lang.innerText;
  console.log(text);

  let selectedLanguage = languages.find(language => language !== text);
  lang.innerHTML= selectedLanguage;
}

lang.addEventListener('click', toggleLanguage);
