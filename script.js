// ===== Quiz JavaScript - StudyTech =====

const quizData = {

  web: [
    {
      question: "Que signifie HTML ?",
      answers: [
        { text: "Hyper Text Markup Language", correct: true },
        { text: "High Transfer Machine Language", correct: false },
        { text: "Home Tool Markup Language", correct: false },
        { text: "Hyperlinks Text Management Language", correct: false }
      ]
    },
    {
      question: "Quel langage est utilisé pour le style ?",
      answers: [
        { text: "HTML", correct: false },
        { text: "CSS", correct: true },
        { text: "Python", correct: false },
        { text: "C", correct: false }
      ]
    },
    {
      question: "Quel langage rend un site interactif ?",
      answers: [
        { text: "JavaScript", correct: true },
        { text: "HTML", correct: false },
        { text: "CSS", correct: false },
        { text: "SQL", correct: false }
      ]
    },
    {
      question: "Quelle propriété CSS change la couleur du texte ?",
      answers: [
        { text: "color", correct: true },
        { text: "background", correct: false },
        { text: "font-size", correct: false },
        { text: "border", correct: false }
      ]
    },
    {
      question: "Quel symbole est utilisé pour les commentaires en JavaScript ?",
      answers: [
        { text: "//", correct: true },
        { text: "#", correct: false },
        { text: "<!-- -->", correct: false },
        { text: "**", correct: false }
      ]
    },
    {
      question: "Quelle balise affiche une image ?",
      answers: [
        { text: "<img>", correct: true },
        { text: "<image>", correct: false },
        { text: "<src>", correct: false },
        { text: "<picture>", correct: false }
      ]
    },
    {
      question: "Que signifie CSS ?",
      answers: [
        { text: "Cascading Style Sheets", correct: true },
        { text: "Creative Style System", correct: false },
        { text: "Computer Style Sheets", correct: false },
        { text: "Colorful Style Syntax", correct: false }
      ]
    },
    {
      question: "Quelle méthode affiche un message en JavaScript ?",
      answers: [
        { text: "alert()", correct: true },
        { text: "print()", correct: false },
        { text: "message()", correct: false },
        { text: "log()", correct: false }
      ]
    },
    {
      question: "Quelle balise crée un paragraphe ?",
      answers: [
        { text: "<p>", correct: true },
        { text: "<h1>", correct: false },
        { text: "<div>", correct: false },
        { text: "<span>", correct: false }
      ]
    },
    {
      question: "Quelle balise crée un lien ?",
      answers: [
        { text: "<a>", correct: true },
        { text: "<p>", correct: false },
        { text: "<img>", correct: false },
        { text: "<h1>", correct: false }
      ]
    }
  ],

  algo: [
    {
      question: "Qu'est-ce qu'un algorithme ?",
      answers: [
        { text: "Une suite finie d'instructions pour résoudre un problème", correct: true },
        { text: "Un langage de programmation", correct: false },
        { text: "Un type de matériel informatique", correct: false },
        { text: "Une base de données", correct: false }
      ]
    },
    {
      question: "Quelle structure permet de répéter des instructions ?",
      answers: [
        { text: "Une condition", correct: false },
        { text: "Une boucle", correct: true },
        { text: "Une fonction", correct: false },
        { text: "Une variable", correct: false }
      ]
    },
    {
      question: "Quel est le rôle principal d'une variable ?",
      answers: [
        { text: "Afficher un menu", correct: false },
        { text: "Stocker une valeur en mémoire", correct: true },
        { text: "Trier un tableau", correct: false },
        { text: "Créer une boucle", correct: false }
      ]
    },
    {
      question: "Quelle structure permet de choisir entre plusieurs cas selon une condition ?",
      answers: [
        { text: "Boucle Pour", correct: false },
        { text: "Structure conditionnelle (Si...Alors...Sinon)", correct: true },
        { text: "Tableau", correct: false },
        { text: "Fonction récursive", correct: false }
      ]
    },
    {
      question: "Quelle est la complexité d'une recherche dichotomique dans un tableau trié de n éléments ?",
      answers: [
        { text: "O(n)", correct: false },
        { text: "O(n²)", correct: false },
        { text: "O(log n)", correct: true },
        { text: "O(1)", correct: false }
      ]
    },
    {
      question: "Quel type de boucle exécute le bloc d'instructions au moins une fois ?",
      answers: [
        { text: "Boucle Tant que (while)", correct: false },
        { text: "Boucle Faire...Tant que (do while)", correct: true },
        { text: "Boucle Pour (for)", correct: false },
        { text: "Aucune de ces réponses", correct: false }
      ]
    },
    {
      question: "Comment appelle-t-on une fonction qui s'appelle elle-même ?",
      answers: [
        { text: "Itérative", correct: false },
        { text: "Récursive", correct: true },
        { text: "Statique", correct: false },
        { text: "Anonyme", correct: false }
      ]
    },
    {
      question: "Quelle structure de données fonctionne selon le principe LIFO (dernier entré, premier sorti) ?",
      answers: [
        { text: "File", correct: false },
        { text: "Pile", correct: true },
        { text: "Liste chaînée", correct: false },
        { text: "Arbre", correct: false }
      ]
    },
    {
      question: "Quelle structure de données fonctionne selon le principe FIFO (premier entré, premier sorti) ?",
      answers: [
        { text: "Pile", correct: false },
        { text: "File", correct: true },
        { text: "Tableau associatif", correct: false },
        { text: "Graphe", correct: false }
      ]
    },
    {
      question: "Quel algorithme de tri compare et échange les éléments adjacents à chaque passage ?",
      answers: [
        { text: "Tri fusion", correct: false },
        { text: "Tri rapide", correct: false },
        { text: "Tri à bulles", correct: true },
        { text: "Tri par tas", correct: false }
      ]
    },
    {
      question: "Quelle est la complexité moyenne du tri rapide (quicksort) ?",
      answers: [
        { text: "O(n)", correct: false },
        { text: "O(n log n)", correct: true },
        { text: "O(n²)", correct: false },
        { text: "O(1)", correct: false }
      ]
    },
    {
      question: "Qu'est-ce qu'un pseudo-code ?",
      answers: [
        { text: "Un langage de programmation compilé", correct: false },
        { text: "Une description d'algorithme indépendante d'un langage précis", correct: true },
        { text: "Un type d'erreur de syntaxe", correct: false },
        { text: "Un protocole réseau", correct: false }
      ]
    },
    {
      question: "Quelle instruction permet de sortir prématurément d'une boucle ?",
      answers: [
        { text: "continue", correct: false },
        { text: "return", correct: false },
        { text: "break", correct: true },
        { text: "exit", correct: false }
      ]
    },
    {
      question: "Qu'est-ce qu'un tableau (array) ?",
      answers: [
        { text: "Une structure de données indexée regroupant des éléments", correct: true },
        { text: "Un algorithme de tri", correct: false },
        { text: "Une fonction récursive", correct: false },
        { text: "Un type de boucle", correct: false }
      ]
    },
    {
      question: "Quel algorithme de tri utilise le principe \"diviser pour régner\" ?",
      answers: [
        { text: "Tri à bulles", correct: false },
        { text: "Tri par insertion", correct: false },
        { text: "Tri fusion (merge sort)", correct: true },
        { text: "Tri à sélection", correct: false }
      ]
    }
  ],

  c: [
    {
      question: "Quelle fonction affiche du texte en langage C ?",
      answers: [
        { text: "printf()", correct: true },
        { text: "echo()", correct: false },
        { text: "print()", correct: false },
        { text: "display()", correct: false }
      ]
    },
    {
      question: "Quel symbole marque la fin d'une instruction en C ?",
      answers: [
        { text: "Le point .", correct: false },
        { text: "Le point-virgule ;", correct: true },
        { text: "Les deux points :", correct: false },
        { text: "La virgule ,", correct: false }
      ]
    },
    {
      question: "Quelle fonction permet de lire une entrée utilisateur en C ?",
      answers: [
        { text: "input()", correct: false },
        { text: "read()", correct: false },
        { text: "scanf()", correct: true },
        { text: "getData()", correct: false }
      ]
    },
    {
      question: "Quel type de donnée stocke un nombre entier en C ?",
      answers: [
        { text: "float", correct: false },
        { text: "int", correct: true },
        { text: "char", correct: false },
        { text: "bool", correct: false }
      ]
    },
    {
      question: "Quelle bibliothèque est nécessaire pour utiliser printf() ?",
      answers: [
        { text: "stdlib.h", correct: false },
        { text: "string.h", correct: false },
        { text: "stdio.h", correct: true },
        { text: "math.h", correct: false }
      ]
    },
    {
      question: "Comment déclare-t-on un pointeur en C ?",
      answers: [
        { text: "Avec le symbole &", correct: false },
        { text: "Avec le symbole *", correct: true },
        { text: "Avec le symbole #", correct: false },
        { text: "Avec le symbole %", correct: false }
      ]
    },
    {
      question: "Quelle fonction alloue dynamiquement de la mémoire en C ?",
      answers: [
        { text: "alloc()", correct: false },
        { text: "new()", correct: false },
        { text: "malloc()", correct: true },
        { text: "create()", correct: false }
      ]
    },
    {
      question: "Quelle fonction libère la mémoire allouée dynamiquement en C ?",
      answers: [
        { text: "delete()", correct: false },
        { text: "free()", correct: true },
        { text: "clear()", correct: false },
        { text: "release()", correct: false }
      ]
    },
    {
      question: "Quel opérateur permet d'obtenir l'adresse mémoire d'une variable ?",
      answers: [
        { text: "*", correct: false },
        { text: "&", correct: true },
        { text: "#", correct: false },
        { text: "@", correct: false }
      ]
    },
    {
      question: "Comment définit-on une constante en C ?",
      answers: [
        { text: "Avec #define ou const", correct: true },
        { text: "Avec static uniquement", correct: false },
        { text: "Avec let", correct: false },
        { text: "Avec final", correct: false }
      ]
    },
    {
      question: "Quelle structure permet de regrouper plusieurs variables de types différents en C ?",
      answers: [
        { text: "array", correct: false },
        { text: "struct", correct: true },
        { text: "union type", correct: false },
        { text: "list", correct: false }
      ]
    },
    {
      question: "Quelle est la fonction exécutée en premier au démarrage d'un programme C ?",
      answers: [
        { text: "start()", correct: false },
        { text: "main()", correct: true },
        { text: "init()", correct: false },
        { text: "run()", correct: false }
      ]
    },
    {
      question: "Quel opérateur teste l'égalité entre deux valeurs en C ?",
      answers: [
        { text: "=", correct: false },
        { text: "==", correct: true },
        { text: "===", correct: false },
        { text: "!=", correct: false }
      ]
    },
    {
      question: "Comment commente-t-on une ligne de code en C ?",
      answers: [
        { text: "# commentaire", correct: false },
        { text: "// commentaire", correct: true },
        { text: "<!-- commentaire -->", correct: false },
        { text: "' commentaire", correct: false }
      ]
    },
    {
      question: "Quelle valeur retourne généralement main() en cas de succès du programme ?",
      answers: [
        { text: "1", correct: false },
        { text: "-1", correct: false },
        { text: "0", correct: true },
        { text: "null", correct: false }
      ]
    }
  ],

  maintenance: [
    {
      question: "Quel composant exécute les instructions dans un ordinateur ?",
      answers: [
        { text: "La RAM", correct: false },
        { text: "Le processeur (CPU)", correct: true },
        { text: "Le disque dur", correct: false },
        { text: "La carte graphique", correct: false }
      ]
    },
    {
      question: "Quelle mémoire est volatile et perd son contenu à l'extinction du PC ?",
      answers: [
        { text: "La RAM", correct: true },
        { text: "Le SSD", correct: false },
        { text: "Le disque dur", correct: false },
        { text: "La mémoire flash USB", correct: false }
      ]
    },
    {
      question: "Quel composant stocke les données de façon permanente ?",
      answers: [
        { text: "La RAM", correct: false },
        { text: "Le cache CPU", correct: false },
        { text: "Le disque dur / SSD", correct: true },
        { text: "Le registre du processeur", correct: false }
      ]
    },
    {
      question: "Quel bus transporte les données entre le CPU et la mémoire ?",
      answers: [
        { text: "Le bus d'adresses", correct: false },
        { text: "Le bus de données", correct: true },
        { text: "Le bus USB", correct: false },
        { text: "Le bus PCI Express uniquement", correct: false }
      ]
    },
    {
      question: "Que signifie BIOS ?",
      answers: [
        { text: "Basic Input Output System", correct: true },
        { text: "Binary Input Operating System", correct: false },
        { text: "Basic Internet Operating Software", correct: false },
        { text: "Boot Integrated Operating System", correct: false }
      ]
    },
    {
      question: "Quel composant convertit le courant alternatif en courant continu pour le PC ?",
      answers: [
        { text: "La carte mère", correct: false },
        { text: "Le bloc d'alimentation (PSU)", correct: true },
        { text: "Le ventilateur", correct: false },
        { text: "Le processeur", correct: false }
      ]
    },
    {
      question: "Quelle unité mesure la fréquence (vitesse) d'un processeur ?",
      answers: [
        { text: "Octets", correct: false },
        { text: "Hertz (GHz)", correct: true },
        { text: "Watts", correct: false },
        { text: "Bits par seconde", correct: false }
      ]
    },
    {
      question: "Quel composant gère principalement l'affichage graphique ?",
      answers: [
        { text: "Le disque dur", correct: false },
        { text: "La carte graphique (GPU)", correct: true },
        { text: "La RAM", correct: false },
        { text: "Le BIOS", correct: false }
      ]
    },
    {
      question: "Qu'est-ce que l'\"overclocking\" ?",
      answers: [
        { text: "Réduire la consommation électrique", correct: false },
        { text: "Augmenter la fréquence d'un composant au-delà des spécifications", correct: true },
        { text: "Nettoyer la mémoire cache", correct: false },
        { text: "Sauvegarder les données", correct: false }
      ]
    },
    {
      question: "Quel type de mémoire, intégrée au CPU, est plus rapide mais plus petite que la RAM ?",
      answers: [
        { text: "Le cache", correct: true },
        { text: "Le SSD", correct: false },
        { text: "La mémoire virtuelle", correct: false },
        { text: "La ROM", correct: false }
      ]
    },
    {
      question: "Quelle interface moderne connecte un disque dur ou SSD à la carte mère ?",
      answers: [
        { text: "PS/2", correct: false },
        { text: "SATA ou NVMe", correct: true },
        { text: "VGA", correct: false },
        { text: "RJ45", correct: false }
      ]
    },
    {
      question: "Quel logiciel gère les ressources matérielles et logicielles d'un ordinateur ?",
      answers: [
        { text: "Un antivirus", correct: false },
        { text: "Le système d'exploitation", correct: true },
        { text: "Un navigateur web", correct: false },
        { text: "Un pilote (driver) uniquement", correct: false }
      ]
    },
    {
      question: "Que signifie SSD ?",
      answers: [
        { text: "Solid State Drive", correct: true },
        { text: "Standard Storage Device", correct: false },
        { text: "System Software Disk", correct: false },
        { text: "Secure Server Drive", correct: false }
      ]
    },
    {
      question: "Quel composant refroidit le processeur ?",
      answers: [
        { text: "Le bloc d'alimentation", correct: false },
        { text: "Le ventilateur / dissipateur thermique", correct: true },
        { text: "La RAM", correct: false },
        { text: "Le port HDMI", correct: false }
      ]
    },
    {
      question: "Quelle norme définit le format des connecteurs USB modernes réversibles ?",
      answers: [
        { text: "USB-A", correct: false },
        { text: "USB-C", correct: true },
        { text: "Mini-USB", correct: false },
        { text: "FireWire", correct: false }
      ]
    }
  ],

  merise: [
    {
      question: "Que signifie MERISE ?",
      answers: [
        { text: "Méthode d'Étude et de Réalisation Informatique pour les Systèmes d'Entreprise", correct: true },
        { text: "Modèle Européen de Recherche en Informatique et Systèmes", correct: false },
        { text: "Méthode d'Évaluation des Réseaux Informatiques", correct: false },
        { text: "Mesure et Étude des Résultats Informatiques", correct: false }
      ]
    },
    {
      question: "Quel modèle représente les données indépendamment des traitements ?",
      answers: [
        { text: "Le MCT", correct: false },
        { text: "Le MCD (Modèle Conceptuel de Données)", correct: true },
        { text: "Le diagramme de Gantt", correct: false },
        { text: "Le cahier des charges", correct: false }
      ]
    },
    {
      question: "Que signifie MCD ?",
      answers: [
        { text: "Modèle Conceptuel de Données", correct: true },
        { text: "Modèle de Contrôle Décentralisé", correct: false },
        { text: "Méthode de Conception Dynamique", correct: false },
        { text: "Modèle Complet du Développement", correct: false }
      ]
    },
    {
      question: "Que signifie MLD ?",
      answers: [
        { text: "Modèle Logique de Données", correct: true },
        { text: "Modèle Linéaire Dynamique", correct: false },
        { text: "Méthode Logicielle de Développement", correct: false },
        { text: "Modèle de Liaison de Données", correct: false }
      ]
    },
    {
      question: "Que représente une entité dans un MCD ?",
      answers: [
        { text: "Un objet du monde réel que l'on veut modéliser", correct: true },
        { text: "Un traitement informatique", correct: false },
        { text: "Une table déjà créée en base de données", correct: false },
        { text: "Un utilisateur du système", correct: false }
      ]
    },
    {
      question: "Qu'est-ce qu'une association dans un MCD ?",
      answers: [
        { text: "Un attribut d'une entité", correct: false },
        { text: "Un lien entre deux ou plusieurs entités", correct: true },
        { text: "Une clé étrangère", correct: false },
        { text: "Un type de donnée", correct: false }
      ]
    },
    {
      question: "Que signifie la cardinalité (0,n) ?",
      answers: [
        { text: "Exactement une occurrence", correct: false },
        { text: "De zéro à plusieurs occurrences possibles", correct: true },
        { text: "Au minimum une occurrence obligatoire", correct: false },
        { text: "Aucune occurrence possible", correct: false }
      ]
    },
    {
      question: "Quel modèle traduit le MCD en tables relationnelles ?",
      answers: [
        { text: "Le MCT", correct: false },
        { text: "Le MLD (ou MPD)", correct: true },
        { text: "Le diagramme de flux", correct: false },
        { text: "Le modèle organisationnel", correct: false }
      ]
    },
    {
      question: "Que signifie MPD ?",
      answers: [
        { text: "Modèle Physique de Données", correct: true },
        { text: "Modèle Préliminaire de Design", correct: false },
        { text: "Méthode de Programmation Dynamique", correct: false },
        { text: "Modèle de Processus Décisionnel", correct: false }
      ]
    },
    {
      question: "Quel élément identifie de façon unique une occurrence d'entité ?",
      answers: [
        { text: "L'attribut", correct: false },
        { text: "L'identifiant (clé primaire)", correct: true },
        { text: "L'association", correct: false },
        { text: "La cardinalité", correct: false }
      ]
    },
    {
      question: "Quel modèle décrit la dynamique des traitements dans Merise ?",
      answers: [
        { text: "Le MCD", correct: false },
        { text: "Le MCT (Modèle Conceptuel des Traitements)", correct: true },
        { text: "Le MLD", correct: false },
        { text: "Le MPD", correct: false }
      ]
    },
    {
      question: "Que signifie MCT ?",
      answers: [
        { text: "Modèle Conceptuel des Traitements", correct: true },
        { text: "Modèle Complet de Test", correct: false },
        { text: "Méthode de Contrôle Technique", correct: false },
        { text: "Modèle de Cycle de Traitement", correct: false }
      ]
    },
    {
      question: "Comment appelle-t-on une association qui porte elle-même des données (attributs) ?",
      answers: [
        { text: "Une entité faible", correct: false },
        { text: "Une association porteuse de propriétés", correct: true },
        { text: "Une clé composite", correct: false },
        { text: "Une entité dépendante", correct: false }
      ]
    },
    {
      question: "Quelle cardinalité indique qu'une occurrence est liée au maximum à une seule autre occurrence ?",
      answers: [
        { text: "(0,n)", correct: false },
        { text: "(1,n)", correct: false },
        { text: "(0,1) ou (1,1)", correct: true },
        { text: "(n,n)", correct: false }
      ]
    },
    {
      question: "Merise est une méthode d'analyse et de conception principalement utilisée dans quel pays ?",
      answers: [
        { text: "Les États-Unis", correct: false },
        { text: "La France", correct: true },
        { text: "Le Japon", correct: false },
        { text: "L'Allemagne", correct: false }
      ]
    }
  ]

};

const moduleTitles = {
  web: "Web (HTML / CSS / JS)",
  algo: "Algorithmique",
  c: "Langage C",
  maintenance: "Maintenance et architecture des ordinateurs",
  merise: "Merise"
};

const moduleSelectEl = document.getElementById("module-select");
const quizEl = document.getElementById("quiz");
const moduleTitleEl = document.getElementById("module-title");
const questionEl = document.getElementById("question");
const buttonsEl = document.querySelector(".buttons");
const timerEl = document.getElementById("timer");
const changeModuleBtn = document.getElementById("change-module-btn");
const questionProgressEl = document.getElementById("question-progress");

let currentModule = [];
let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timerInterval = null;
let answered = false;

const AUTO_ADVANCE_DELAY = 1500; // délai après clic avant de passer à la question suivante (ms)

// ---- Sélection du module ----
document.querySelectorAll(".module-btn").forEach((btn) => {
  const total = quizData[btn.dataset.module]?.length || 0;
  const countEl = btn.querySelector(".module-count");
  if (countEl) countEl.textContent = `${total} questions`;

  btn.addEventListener("click", () => {
    const moduleKey = btn.dataset.module;
    startQuiz(moduleKey);
  });
});

if (changeModuleBtn) {
  changeModuleBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    quizEl.classList.add("hidden");
    moduleSelectEl.classList.remove("hidden");
    changeModuleBtn.classList.add("hidden");
  });
}

function startQuiz(moduleKey) {
  currentModule = quizData[moduleKey];
  moduleTitleEl.textContent = moduleTitles[moduleKey];
  currentQuestion = 0;
  score = 0;

  moduleSelectEl.classList.add("hidden");
  quizEl.classList.remove("hidden");
  changeModuleBtn.classList.add("hidden");

  showQuestion();
}

function showQuestion() {
  answered = false;
  resetTimer();

  const current = currentModule[currentQuestion];
  const remaining = currentModule.length - currentQuestion;
  if (questionProgressEl) {
    questionProgressEl.textContent = `Question ${currentQuestion + 1} sur ${currentModule.length} · ${remaining} restante${remaining > 1 ? "s" : ""}`;
  }
  questionEl.textContent = current.question;

  buttonsEl.innerHTML = "";
  current.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.addEventListener("click", () => selectAnswer(answer));
    buttonsEl.appendChild(btn);
  });
}

function selectAnswer(selectedAnswer) {
  if (answered) return; // empêche de cliquer plusieurs fois
  answered = true;
  clearInterval(timerInterval);

  const buttons = buttonsEl.querySelectorAll("button");
  const current = currentModule[currentQuestion];

  buttons.forEach((btn) => {
    btn.disabled = true;
    const btnAnswer = current.answers.find(a => a.text === btn.textContent);
    if (btnAnswer.correct) {
      btn.classList.add("correct");
    } else if (btn.textContent === selectedAnswer.text) {
      btn.classList.add("wrong");
    }
  });

  if (selectedAnswer.correct) {
    score++;
  }

  // Passage automatique à la question suivante
  setTimeout(goToNextQuestion, AUTO_ADVANCE_DELAY);
}

function goToNextQuestion() {
  currentQuestion++;
  if (currentQuestion < currentModule.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  clearInterval(timerInterval);
  questionEl.textContent = `Quiz terminé ! Votre score : ${score} / ${currentModule.length}`;
  buttonsEl.innerHTML = "";
  timerEl.textContent = "-";
  if (questionProgressEl) questionProgressEl.textContent = `${currentModule.length} questions terminées`;
  changeModuleBtn.classList.remove("hidden");

  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Recommencer ce module";
  restartBtn.addEventListener("click", () => {
    const moduleKey = Object.keys(quizData).find(key => quizData[key] === currentModule);
    startQuiz(moduleKey);
  });
  buttonsEl.appendChild(restartBtn);
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 15;
  timerEl.textContent = timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (!answered) {
        answered = true;
        // Temps écoulé : on affiche la bonne réponse sans compter de point
        const current = currentModule[currentQuestion];
        const buttons = buttonsEl.querySelectorAll("button");
        buttons.forEach((btn) => {
          btn.disabled = true;
          const btnAnswer = current.answers.find(a => a.text === btn.textContent);
          if (btnAnswer.correct) btn.classList.add("correct");
        });
        setTimeout(goToNextQuestion, AUTO_ADVANCE_DELAY);
      }
    }
  }, 1000);
}
// ===== Page d'accueil : compteur de stats animé =====
(function () {
  const statNumbers = document.querySelectorAll(".stat-number");
  if (!statNumbers.length) return;

  const animateStat = (el) => {
    const target = parseInt(el.dataset.target, 10) || 0;
    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStat(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  statNumbers.forEach((el) => observer.observe(el));
})();
