// Récupère l'élément input
var input = document.getElementById('monInput');

// Récupère l'élément bouton
var bouton = document.getElementById('monBouton');

// Récupère l'élément de synthèse vocale
var syntheseVocale = window.speechSynthesis;

// Fonction pour lire le contenu de l'input
function lireContenu() {
  // Récupère le texte de l'input
    var texte = input.value;

  // Crée un nouvel objet SpeechSynthesisUtterance
    var utterance = new SpeechSynthesisUtterance(texte);

  // Fait parler l'objet utterance
    syntheseVocale.speak(utterance);
}

// Ajoute un écouteur d'événement au bouton
bouton.addEventListener('click', lireContenu);