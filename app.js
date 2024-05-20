const questions = [
  {
    question: "1. Что означает HTML?",
    answers: [
      { text: "Стандартизированный язык гипертекстовой разметки", correct: true },
      { text: "Язык программирования", correct: false },
      { text: "Машинный код", correct: false },
      { text: "H-высота T-текст M-машина L-лекционный", correct: false },
    ],
  },
  {
    question: "2. Какое свойство используется для изменения цвета текста в CSS?",
    answers: [
      { text: "color", correct: true },
      { text: "text-color", correct: false },
      { text: "font-color", correct: false },
      { text: "background-color", correct: false },
    ],
  },
  {
    question: "3. Какие единицы измерения могут использоваться для атрибута ширины?",
    answers: [
      { text: "Пиксели и %", correct: true },
      { text: "Миллиметры и сантиметры", correct: false },
      { text: "Пиксели и миллиметры", correct: false },
      { text: "Дюймы", correct: false },
    ],
  },
  {
    question: "4. Какой тэг при создании страницы добавляет имя страницы, которое будет отображаться в строке заголовка в браузере пользователя?",
    answers: [
      { text: "<title> … </title>", correct: true },
      { text: "<header> … </header>", correct: false },
      { text: "<body> … </body>", correct: false },
      { text: "<html>...</html>", correct: false },
    ],
  },
  {
    question: "5. Укажите тэг, который соответствует элементу списка:",
    answers: [
      { text: "<li>", correct: true },
      { text: "<ul>", correct: false },
      { text: "<ol>", correct: false },
      { text: "<al>", correct: false },
    ],
  },
  {
    question: "6. Какие тэги делают шрифт текста жирным?",
    answers: [
      { text: "<ins> и <del>", correct: false },
      { text: "<li> и <ul>", correct: false },
      { text: "<b> и <strong>", correct: true },
      { text: "<bold>", correct: false },
    ],
  },
  {
    question: "7. Какие тэги используются для определения заголовков?",
    answers: [
      { text: "h1-h6", correct: true },
      { text: "h1", correct: true },
      { text: "Header", correct: false },
      { text: "Heading", correct: false },
    ],
  },
  {
    question: "8. Неотображаемые комментарии в HTML задаются следующим образом:",
    answers: [
      { text: "<! - Your comment -!>", correct: false },
      { text: "<! - - Your comment - -!>", correct: true },
      { text: "<!p> Your comment </!p>", correct: false },
      { text: " // Your comment", correct: false },
    ],
  },
  {
    question: "9. Укажите, какой элемент HTML 5 отвечает за воспроизведение видео:",
    answers: [
      { text: "<video>", correct: true },
      { text: "<media>", correct: false },
      { text: "<movie>", correct: false },
      { text: "<vidick>", correct: false },
    ],
  },
  {
    question: "10. Какой тэг содержит навигацию?",
    answers: [
      { text: "<nav>", correct: true },
      { text: "<<nav>>", correct: false },
      { text: " <geo>", correct: false },
      { text: "<metanav>", correct: false },
    ],
  },
  {
    question: "11. HTML – это",
    answers: [
      { text: "Язык разметки", correct: true },
      { text: "Библиотека гипертекста", correct: false },
      { text: "Скриптовый язык", correct: false },
      { text: "HDMI", correct: false },
    ],
  },
  {
    question: "12. Обязательно ли использование тэгов <html> … </html>?",
    answers: [
      { text: "Да, без них браузер не распознает HTML-документ", correct: true },
      { text: "Да, если HTML-документ создается в блокноте или другом текстовом редакторе. В специальном компиляторе HTML эти тэги можно не использовать", correct: false },
      { text: "Не обязательно", correct: false },
      { text: "Смотря какой браузер", correct: false },
    ],
  },
  {
    question: "13. Допустимое число заголовков первого уровня в HTML-документе составляет:",
    answers: [
      { text: "7", correct: false },
      { text: "5", correct: false },
      { text: "3", correct: false },
      { text: "1", correct: true },
    ],
  },
  {
    question: "14. При создании сайтов используют кодировку:",
    answers: [
      { text: "UTF-8", correct: true },
      { text: "ASCII", correct: false },
      { text: "UTF-32", correct: false },
      { text: "NFT-9", correct: false },
    ],
  },
  {
    question: "15. Какого тэга не существует в HTML?",
    answers: [
      { text: "<blick>", correct: true },
      { text: "<link>", correct: false },
      { text: "<ol>", correct: false },
      { text: "<al>", correct: false },
    ],
  },
  {
    question: "16. Какой символ обозначает конец тэга?",
    answers: [
      { text: "+", correct: false },
      { text: "**", correct: false },
      { text: "/", correct: true },
      { text: "/>/", correct: false },
    ],
  },
  {
    question: "17. Paddin - это..?",
    answers: [
      { text: "Внутренний отступ", correct: true },
      { text: "Внешний отступ", correct: false },
      { text: "Может быть Внутренним отступом и Внешним отступом", correct: false },
      { text: "Создает кнопку", correct: false },
    ],
  },
  {
    question: "18. Margin - это..?",
    answers: [
      { text: "Внутренний отступ", correct: false },
      { text: "Может быть Внутренним отступом и Внешним отступом", correct: false },
      { text: "Внешний отступ", correct: true },
      { text: "Делает буквы заглавными", correct: false },
    ],
  },
  {
    question: "19. Какой тэг создает кнопку?",
    answers: [
      { text: "<btn>", correct: false },
      { text: "<buuton>", correct: false },
      { text: "<button>", correct: true },
      { text: "<buton>", correct: false },
    ],
  },
  {
    question: "20. Укажите тэг, который создает элемент контейнер для разделения HTML документов:",
    answers: [
      { text: "<div>", correct: true },
      { text: "<dav>", correct: false },
      { text: "<container>", correct: false },
      { text: "<cont>", correct: false },
    ],
  },
  {
    question: "21. Укажите тэг, который делает перенос текста:",
    answers: [
      { text: "<bra>", correct: false },
      { text: "<bran>", correct: false },
      { text: "<bac", correct: false },
      { text: "<br>", correct: true },
    ],
  },
  {
    question: "22. Укажите тэг, который создает ссылку:",
    answers: [
      { text: "<a>", correct: true },
      { text: "<a href=''></a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<all>", correct: false },
    ],
  },
  {
    question: "23. Укажите тэг, который создает форму:",
    answers: [
      { text: "<form>", correct: true },
      { text: "<forma>", correct: false },
      { text: "<formula>", correct: false },
      { text: "<anketa>", correct: false },
    ],
  },
  {
    question: "24. Какой тэг делает маркерованный список?",
    answers: [
      { text: "<li>", correct: false },
      { text: "<ul>", correct: true },
      { text: "<ol>", correct: false },
      { text: "<al>", correct: false },
    ],
  },
  {
    question: "25. Какой тэк делает нумерованный список?",
    answers: [
      { text: "<li>", correct: false },
      { text: "<ul>", correct: false },
      { text: "<ol>", correct: true },
      { text: "<al>", correct: false },
    ],
  },
  {
    question: "26. Какой HTML-тэг используется для определения футера документа или раздела?",
    answers: [
      { text: "<footer>", correct: true },
      { text: "<bottom> ", correct: false },
      { text: "<section>", correct: false },
      { text: "<header>", correct: false },
    ],
  },
  {
    question: "27. HTML-тэг, позволяющий воспроизводить аудиозаписи – это:",
    answers: [
      { text: "<music>", correct: false },
      { text: "<audio>", correct: true },
      { text: "<sound>", correct: false },
      { text: "<aud>", correct: false },
    ],
  },
  {
    question: "28. Какое свойство justify-content выравнивает сожержимое контейрнера по середине?",
    answers: [
      { text: "<center>", correct: true },
      { text: "<space-between>", correct: false },
      { text: "<flex-start>", correct: false },
      { text: "<flex-and>", correct: false },
    ],
  },
  {
    question: "29. Задает тип элемента и позволяет менять поведение элемента в потоке, а так же меняет работу некоторых CSS свойств в соответствии с выбранным типом.Что это за свойство",
    answers: [
      { text: "display", correct: true },
      { text: "displey", correct: false },
      { text: "windows", correct: false },
      { text: "displ", correct: false },
    ],
  },
  {
    question: "30. Что делает это свойтво? flex-direction: row",
    answers: [
      { text: "Направление элементов flexbox совпадает с направлением текста вдоль главной оси, они идут вряд друг за другом слева направо", correct: true },
      { text: "Делает содержимое контейнера колонокой", correct: false },
      { text: "Делает содержимое flex контейрна горизонатольно, меняя в противоположенную сторону", correct: false },
      { text: "Делает содержимое контейнера колонокой, в обратном направлении", correct: false },
    ],
  },
  {
    question: "31. Какое свойство делает перенос?",
    answers: [
      { text: "wrap", correct: true },
      { text: "white-space", correct: true },
      { text: "wrapping", correct: false },
      { text: "wrap-space", correct: false },
    ],
  },
  {
    question: "32. Какое свойство делает перенос наооборот?",
    answers: [
      { text: "wrap", correct: true },
      { text: "wrap-reverse", correct: true },
      { text: "wrapping", correct: false },
      { text: "wrap-space", correct: false },
    ],
  },
  {
    question: "33. Какое свойство aligh-items располагает блоки по центру?",
    answers: [
      { text: "flex-start", correct: false },
      { text: "senter", correct: false },
      { text: "center", correct: true },
      { text: "stretch", correct: false },
    ],
  },
  {
    question: "34. Какое свойство не делает перенос строк?",
    answers: [
      { text: "wrap", correct: false },
      { text: "nowrap-reverse", correct: false },
      { text: "nowrap", correct: true },
      { text: "nowrapping", correct: false },
    ],
  },
  {
    question: "35. Какое свойство делает отспуп между элементами?",
    answers: [
      { text: "gup", correct: false },
      { text: "cap", correct: false },
      { text: "ped", correct: false },
      { text: "gap", correct: true },
    ],
  },
  {
    question: "36. Какое свойство делает отступ между колонками?",
    answers: [
      { text: "gup", correct: false },
      { text: "column-gap", correct: true },
      { text: "gap-column", correct: false },
      { text: "row-gap", correct: false },
    ],
  },
  {
    question: "37. Какое свойство делает отступ между строками?",
    answers: [
      { text: "row-gap", correct: true },
      { text: "gap-column", correct: false },
      { text: "gup", correct: false },
      { text: "stretch", correct: false },
    ],
  },
  {
    question: "38. Какое свойство делает тень у элемента?",
    answers: [
      { text: "box-sizing", correct: false },
      { text: "box-shadow", correct: true },
      { text: "box-sshadoow", correct: false },
      { text: "shadow", correct: false },
    ],
  },
  {
    question: "39. Какое свойство создает ключевые кадры у @keyframes?",
    answers: [
      { text: "from", correct: true },
      { text: "to", correct: true },
      { text: "from и to", correct: true },
      { text: "key", correct: false },
    ],
  },
  {
    question: "40. Как сделать медиа запрос (адаптация)?",
    answers: [
      { text: "media", correct: false },
      { text: "@media window", correct: false },
      { text: "@media screen and (значение)", correct: true },
      { text: "@media screen window", correct: false },
    ],
  },
  {
    question: "41. Какое свойство задает вид курсора при взаимодействии с элементом?",
    answers: [
      { text: "cursor: pointer;", correct: true },
      { text: "cursor", correct: false },
      { text: "cursore: pointer;", correct: false},
      { text: "cursor: point;", correct: false },
    ],
  },
  {
    question: "42. Как изменить размер шрифта?",
    answers: [
      { text: "font-hading: 21px;", correct: false },
      { text: "font-size: 21px;", correct: true },
      { text: "text-size: 21px;", correct: false},
      { text: "google-font-size: 21px;", correct: false },
    ],
  },
  {
    question: "43. Какое свойство задает начертание (толщину / вес) шрифта?",
    answers: [
      { text: "text-font-weight", correct: false },
      { text: "weight-font", correct: false },
      { text: "font-weight", correct: true},
      { text: "weight-text", correct: false },
    ],
  },
  {
    question: "44. Какое свойство задает тень для элемента?",
    answers: [
      { text: "box-shadow: red;", correct: false},
      { text: "box-sizing: border-box;", correct: false},
      { text: "box-shadow: 1px;", correct: false},
      { text: "box-shadow: 1px 1px 10px red;", correct: true},
    ],
  },
  {
    question: "45. Какое значение z-index будет выше других элементов??",
    answers: [
      { text: "z-index: 3;", correct: true },
      { text: "z-index: 1;", correct: false },
      { text: "z-index: 0;", correct: false},
      { text: "z-index: -1;", correct: false },
    ],
  },

  {
    question: "46. Какое свойство задает интервал между словами текста?",
    answers: [
      { text: "word-sspacing: 1px;", correct: false },
      { text: "word-spacing: 10px;", correct: true },
      { text: "spacing: 10px", correct: false},
      { text: "word-hading: 10px;", correct: false },
    ],
  },
  {
    question: "47. Какое свойство делает абсолютное позиционирование элемента?",
    answers: [
      { text: "position: static", correct: false },
      { text: "position: relative", correct: false },
      { text: "position: absolute;", correct: true},
      { text: "position: fixed", correct: false },
    ],
  },
  {
    question: "48. С помощью какого свойства можно сделать подчеркивание для текста сверху или снизу?",
    answers: [
      { text: "decoration: underline;", correct: false },
      { text: "decoration-text:underline", correct: false },
      { text: "font-decoration: underline;", correct: false},
      { text: "text-decoration: underline;", correct: true },
    ],
  },
  {
    question: "49. Какое свойство задает отступ между символами текста?",
    answers: [
      { text: "font-spac: 2px;", correct: false },
      { text: "spacing: 2px;", correct: false },
      { text: "font-spacing: 2px;", correct: false},
      { text: "letter-spacing: 2px;", correct: true },
    ],
  },
  {
    question: "50. Какой код сделает изменение фонового цвета input при фокусе?",
    answers: [
      { text: "input:focus", correct: true },
      { text: "input:hover", correct: false },
      { text: ":hover;", correct: false},
      { text: "::focus", correct: false },
    ],
  },
  {
    question: "51. Какое свойство задает цвет фона всей странице?",
    answers: [
      { text: "background-color: #e9e9e9;", correct: true },
      { text: "background: #e9e9e9;", correct: true },
      { text: "color: #e9e9e9;", correct: false},
      { text: "back-color: #e9e9e9;;", correct: false },
    ],
  },
  {
    question: "52. Кокое свойство задает радиус?",
    answers: [
      { text: "radius-border: 13px;", correct: false },
      { text: "radius-der: 13px", correct: false },
      { text: "border-radius: 13px;", correct: true},
      { text: "radius: 13px;", correct: false },
    ],
  },
  {
    question: "53. Какое свойство задает семейство шрифтов для текста?",
    answers: [
      { text: "text-font-family: Arial;", correct: false },
      { text: "google-font-family: Arial;", correct: false },
      { text: "font-google: Arial;", correct: false},
      { text: "font-family: Arial;", correct: true },
    ],
  },
  {
    question: "54. Какое свойство сделает все буквы ЗАГЛАВНЫЕ?",
    answers: [
      { text: "text-transform: uppercase;", correct: true },
      { text: "transform: uppercase;", correct: false },
      { text: "text-transform: inhert;", correct: false},
      { text: "text-transform: capitalize;", correct: false },
    ],
  },
  {
    question: "55. Как подлючить стили к HTML документу?",
    answers: [
      { text: "a", correct: false },
      { text: "link", correct: true },
      { text: "input;", correct: false},
      { text: "liink;", correct: false },
    ],
  },
  {
    question: "56. Как изменить наклон текста?",
    answers: [
      { text: "font-style: italic;", correct: true },
      { text: "style: italic;", correct: false },
      { text: "font-style: normal;", correct: false},
      { text: "font: normal;", correct: false },
    ],
  },
  {
    question: "57. Какое значение justify-content оставшееся пространство распределяется между элементами?",
    answers: [
      { text: "justify-content: space-evenly;", correct: false },
      { text: "cursor", correct: false },
      { text: "justify-content: space-between;", correct: true},
      { text: "justify-content: start;", correct: false },
    ],
  },
  {
    question: "58. Какое значение justify-content сместятся к началу контейнера?",
    answers: [
      { text: "justify-content: start;", correct: true },
      { text: "justify-content: space-evenly;", correct: false },
      { text: "justify-content: space-between;", correct: false},
      { text: "justify-content: end;", correct: false },
    ],
  },
  {
    question: "59. Как обнулить стилизацию списка?",
    answers: [
      { text: " list-style-type: none;", correct: true },
      { text: "list-style-type: decimal;", correct: false },
      { text: "list-style-type: circle;", correct: false},
      { text: " list-style-type: lower-alpha;", correct: false },
    ],
  },
  {
    question: "60. Где правильно сделана обводка для элемента?",
    answers: [
      { text: "decimal: 1px solid black;", correct: false },
      { text: "radius: 1px;", correct: false },
      { text: "border-radius: 1px solid black;", correct: false},
      { text: "border: 1px solid black;", correct: true},
    ],
  },
  {
    question: "61. Как изменить толщину обводки?",
    answers: [
      { text: "outline-width: 3px;", correct: true },
      { text: "border: 3px;", correct: false },
      { text: "width: 3px;", correct: false},
      { text: "border-width: 3px;", correct: false },
    ],
  },
  {
    question: "62. Какой атрибут input задает поле для ввода email адреса?",
    answers: [
      { text: "<input type= email >", correct: true },
      { text: "<input type= tel >", correct: false },
      { text: "<input type= data >;", correct: false},
      { text: "<input type= nubmer >", correct: false },
    ],
  },
  {
    question: "63. Что подразумевается под скелетом документа страницы?",
    answers: [
      { text: "header", correct: false },
      { text: "head", correct: false },
      { text: "body", correct: true},
      { text: "footer", correct: false },
    ],
  },
  {
    question: "64. Как вставить картинку на страницу?",
    answers: [
      { text: "<img src=img/foto.png alt=Картинка>", correct: true },
      { text: "<image src=img/foto.png alt=Картинка>", correct: false },
      { text: "<foto src=img/foto.png alt=Картинка>", correct: false},
      { text: "<img alt=Картинка>", correct: false },
    ],
  },
  {
    question: "65. Бываеют ли дочерние элементы Css?",
    answers: [
      { text: "Да.", correct: true },
      { text: "Конечно, нет.", correct: false },
      { text: "Да, но нет.", correct: false},
      { text: "Я не знаю...", correct: false },
    ],
  },
  {
    question: "66. Какое свойство задает вертикальное выравнивание?",
    answers: [
      { text: "vertical-align: middle;", correct: true },
      { text: "vertical-alig: middle;", correct: false },
      { text: "vertical: middle;", correct: false},
      { text: "align-item: middle;", correct: false },
    ],
  },
  {
    question: "67. Какое свойство задает линию подчеркивания текста?",
    answers: [
      { text: "text-decoration: underline;", correct: false },
      { text: "decoration: underline;", correct: false },
      { text: "text-decoration-line: underline;", correct: true},
      { text: "text-line: underline;", correct: false },
    ],
  },
  {
    question: "68. Какое свойство уберет повтор изображений?",
    answers: [
      { text: "background-repeat: repeat;", correct: false },
      { text: "background: no-repeat;", correct: false },
      { text: "background-repeat: no-repeat;", correct: true},
      { text: "background-repeat: repeat-x;", correct: false },
    ],
  },
  {
    question: "69. Какое свойство задает минимальную высоту элемента?",
    answers: [
      { text: "height: 300px;", correct: false },
      { text: "min-heig: 300px;", correct: false },
      { text: "min-height: 300px;", correct: true},
      { text: "minn-height: 300px;", correct: false },
    ],
  },
  {
    question: "70. Как задать стиль элемента с id? ",
    answers: [
      { text: "#container", correct: true },
      { text: ".container", correct: false },
      { text: "::container", correct: false},
      { text: "#container#", correct: false },
    ],
  },
  {
    question: "71. Какое свойство задает внутренний отступ сверху у элемента?",
    answers: [
      { text: "padding-top: 15px;", correct: true },
      { text: "padding: 15px;", correct: false },
      { text: "margin-top: 15px;", correct: false},
      { text: "margin: 15px;", correct: false },
    ],
  },
  {
    question: "72. Какое свойство задает обводку для элемента?",
    answers: [
      { text: "outline: 2px solid #ccc;", correct: true },
      { text: "border: 2px solid #ccc;", correct: false },
      { text: "outline: 0;", correct: false},
      { text: "outline: none;", correct: false },
    ],
  },
  {
    question: "73. Какое свойство задает вид курсора при взаимодействии с элементом?",
    answers: [
      { text: "cursor: pointer;", correct: true },
      { text: "cursor", correct: false },
      { text: "cursore: pointer;", correct: false},
      { text: "cursor: point;", correct: false },
    ],
  },
  {
    question: "74. Какого стиля обводки не существует?",
    answers: [
      { text: "( did , insade , boble )", correct: true },
      { text: "( hidden , dotted , dashed )", correct: false },
      { text: "( solid , double , groove )", correct: false},
      { text: "( ridge , inset , outset );", correct: false },
    ],
  },
  {
    question: "75. Какой из этих кодов подоёдет для создания границы используя три параметра. Первый - стиль границы сверху, второй - стиль границы слева и справа, третий - стиль границы снизу?",
    answers: [
      { text: "border-style: solid dashed;", correct: false },
      { text: "border-style: solid dashed solid dotted;", correct: false },
      { text: "border-style: solid dashed dotted;", correct: true},
      { text: "border-style: solid;", correct: false },
    ],
  },
  //стилизация курсора cursor:pointer

];


let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("questionText");
const answerCheckboxes = document.getElementById("answer-checkboxes");
const submitButton = document.getElementById("submit-button");
const resultsContainer = document.getElementById("results-container");
const resultsText = document.getElementById("results-text");

function showQuestion(question) {
  questionContainer.innerText = question.question;
  answerCheckboxes.innerHTML = "";
  question.answers.forEach((answer, index) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = index;
    label.classList.add("checkbox-label");
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(answer.text));
    answerCheckboxes.appendChild(label);
  });
  submitButton.classList.remove("hidden");
}

function checkAnswer() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const checkedIndexes = Array.from(checkboxes).map(checkbox => parseInt(checkbox.value));
  const correctIndexes = questions[currentQuestionIndex].answers.reduce((acc, answer, index) => {
    if (answer.correct) {
      acc.push(index);
    }
    return acc;
  }, []);

  let isCorrect = true;
  if (checkedIndexes.length !== correctIndexes.length) {
    isCorrect = false;
  } else {
    correctIndexes.forEach(index => {
      if (!checkedIndexes.includes(index)) {
        isCorrect = false;
      }
    });
  }

  if (isCorrect) {
    score++;
  }

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
  } else {
    showResults();
  }
}

function calculateGrade(score) {
  if (score >= 60) {
    return '5';
  } else if (score >= 55) {
    return '4';
  } else if (score >= 40) {
    return '3';
  } else if (score >= 30) {
    return '2';
  }
}

function showResults() {
  questionContainer.style.display = "none";
  answerCheckboxes.style.display = "none";
  submitButton.style.display = "none";
  resultsContainer.classList.remove("hidden");
  const grade = calculateGrade(score);
  resultsText.innerText = `Вы ответили правильно на ${score} из ${questions.length} вопросов.\nВаша оценка: ${grade}`;
}

showQuestion(questions[currentQuestionIndex]);
  