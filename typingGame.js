let TIME_LIMIT = 60
//Laika limits
let quotes_array = [
"The quick brown fox jumps over the lazy dog.",
"Pack my box with five dozen liquor jugs.",
"How vexingly quick daft zebras jump!",
"Sphinx of black quartz, judge my vow.",
"The five boxing wizards jump quickly.",
"Jackdaws love my big sphinx of quartz.",
"The black cat dines on the crimson mouse.",
"Will a duck quack if a hawk hacks?",
"The six simple simians slink swiftly.",
"A proper copper coffee pot.",
"The vexing vixens vault with vivacious vigor.",
"Mr. Jock, TV quiz PhD, bags few lynx.",
"Zany quizzical crib crashers crowd complex.",
"Glib jocks quiz nymph to vex dwarf.",
"Cozy sphinx waves quart jug of bad milk.",
"Five or six big jet planes zoomed quickly by the tower.",
"The six sick hicks nick six slick bricks with picks.",
"Foxy parsons quiz and cajole the lovably dim wiki-girl.",
"A quart jar of oil mixed with zinc oxide makes a very bright paint.",
"The quick onyx goblin jumps over the lazy dwarf.",
"Harry quit paving vixens five bags of cheese coins.",
"Brawny gods just flocked up to quiz and vex him.",
"A wizard's job is to vex chumps quickly in fog.",
"Cozy lummox gives smart squid who asks for job pen.",
"Bawds jog, flick quartz, vex nymphs.",
"Quick zephyrs blow, vexing daft Jim.",
"The five boxing wizards jump quickly.",
"Cozy lummox gives smart squid who asks for job pen.",
"Whiz kids vex nymphs with prison jinx.",
"Crazy Fredericka bought many very exquisite opal jewels.",
"The fast black cat jumps over the slow dog.",
"Fill my bag with ten pounds of sugar.",
"Statue of green jade, inspect my request.",
"The ten athletic wizards run swiftly.",
"Eagles love my tall statue of jade.",
"How quickly silly giraffes run!",
"In journalism and graphic design, placeholders are often used to show the visual impact of different fonts styles and designs.",
"The placeholder text is usually a random section of a Latin text, altered to make it meaningless and nonsensical.",
"It is commonly used as a way to demonstrate the layout and design of a document or webpage.",
"The speedy brown fox darts across the lazy cat.",
"How rapidly reckless ostriches dart!",
"Pillar of blue sapphire, scrutinize my pledge.",
"The twenty lively sorcerers dart rapidly.",
"Falcons adore my grand pillar of sapphire.",
"In printing and graphic arts, dummy text is a common tool used to showcase the visual effects of various typefaces and layouts.",
"The dummy text is often taken from a Latin text and scrambled to create a nonsensical and improper Latin version.",
"It serves as a way to visualize how a document or webpage will look with certain typography and design elements.",
"The agile white rabbit hops over the slothful dog.",
"Fill my cart with thirty bags of flour.",
"How nimbly daring squirrels hop!",
"In publishing and graphic design, filler text is a frequently used tool to demonstrate the visual impact of various type styles and layouts.",
"The filler text is usually taken from a Latin text and scrambled to make it meaningless and improper Latin.",
"It serves as a way to preview how a document or webpage will look with specific typography and design choices.",
"The rapid green lizard runs across the lazy cat.",
"Pack my suitcase with forty packets of tea.",
"Tower of red ruby, examine my promise.",
"The forty lively sorcerers run swiftly.",
"Herons love my tall tower of ruby.",
"How swiftly daring chipmunks run!",
"In publishing and graphic arts, dummy text is a commonly used tool to demonstrate the visual effects of different typefaces and arrangements.",
"It is used as a way to preview the layout and design of a document or webpage.",
"The speedy black hare jumps over the slow dog.",
"Fill my basket with fifty jars of honey.",
"Statue of purple amethyst, scrutinize my pledge.",
"The fifty acrobatic sorcerers jump quickly.",
"Falcons adore my tall statue of amethyst.",
"How quickly bold deer jump!",
"In printing and graphic design, filler text is a common tool used to showcase the visual impact of different type styles and designs."
  ];
//Spēles teksts

let timer_text = document.querySelector(".curr_time");
let accuracy_text = document.querySelector(".curr_accuracy");
let error_text = document.querySelector(".curr_errors");
let cpm_text = document.querySelector(".curr_cpm");
let wpm_text = document.querySelector(".curr_wpm");
let quote_text = document.querySelector(".quote");
let input_area = document.querySelector(".input_area");
let restart_btn = document.querySelector(".restart_btn");
let cpm_group = document.querySelector(".cpm");
let wpm_group = document.querySelector(".wpm");
let error_group = document.querySelector(".errors");
let accuracy_group = document.querySelector(".accuracy");
//Izvēlēties nepieciešamo elementu
let timeLeft = TIME_LIMIT;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let current_quote = "";
let quoteNo = 0;
let timer = null;
//Visu pogu sākums
function AtjauninatTekstu(){
  quote_text.textContent = null;
  current_quote = quotes_array[quoteNo];
//Sadala katru un izveido elementu
 current_quote.split('').forEach(char => {
   const charSpan = document.createElement('span')
   charSpan.innertext = char
   quote_text.appendChild(charSpan)
 })
 if (quoteNo < quotes_array.lenght - 1)
 quoteNo++;
 else quoteNo = 0
 //pārraksta pāri ievadītajam tekstam
}
//Nospiežot enter rādās jauns tekts
function ApstradatIevaditoTekstu() {

  curr_input = input_area.value;
  curr_input_array = curr_input.split('');
 
  // Ievadīto elementu pieaugums
  characterTyped++;
 
  errors = 0;
 
  quoteSpanArray = quote_text.querySelectorAll('span');
  quoteSpanArray.forEach((char, index) => {
    let typedChar = curr_input_array[index]
 
    
    if (typedChar == null) {
      char.classList.remove('correct_char');
      char.classList.remove('incorrect_char');
 // Sākuma punkts=0
      
    } else if (typedChar === char.innerText) {
      char.classList.add('correct_char');
      char.classList.remove('incorrect_char');
 // pareizi ievadītais teksts
      
    } else {
      char.classList.add('incorrect_char');
      char.classList.remove('correct_char');
 // kļudaini ievadītais tekts
      
      errors++;
 // Kļudu skaitu pieaugums
    }
  });
 
 
  error_text.textContent = total_errors + errors;
  // Parāda kļūdu sakaitu
 
  let correctCharacters = (characterTyped - (total_errors + errors));
  let accuracyVal = ((correctCharacters / characterTyped) * 100);
  accuracy_text.textContent = Math.round(accuracyVal);
  // Atjaunot šobrīddējo tekstu
  
  if (curr_input.length == current_quote.length) {
    AtjauninatTekstu();
 // Ievadītā teksta kļūdu pārbaudīšana
   
    total_errors += errors;
 // Atjauno kļudu skaitu
   
    input_area.value = "";
// Attīra input laukumu
  } 
}
function SaktSpeli() {
 
  RestartetLaikaVienibas();
  AtjauninatTekstu();
 
  // Attīra un sāk jaunu laika uzņemšanu
  clearInterval(timer);
  timer = setInterval(AtjauninaLaiku, 1000);
}
 
function RestartetLaikaVienibas() {
  timeLeft = TIME_LIMIT;
  timeElapsed = 0;
  errors = 0;
  total_errors = 0;
  accuracy = 0;
  characterTyped = 0;
  quoteNo = 0;
  input_area.disabled = false;
 
  input_area.value = "";
  quote_text.textContent = 'Click on the area below to start the game.';
  accuracy_text.textContent = 100;
  timer_text.textContent = timeLeft + 's';
  error_text.textContent = 0;
  restart_btn.style.display = "none";
  cpm_group.style.display = "none";
  wpm_group.style.display = "none";
}

function AtjauninaLaiku() {
  if (timeLeft > 0) {
    timeLeft--;
    timeElapsed++;
    timer_text.textContent = timeLeft + "s";
  }
  else {
    PabeigtSpeli();
  }
}

function PabeigtSpeli() {
 
  clearInterval(timer);
 
  input_area.disabled = true;
 
  quote_text.textContent = "Click on restart to start a new game.";
 
  restart_btn.style.display = "block";

  cpm = Math.round(((characterTyped / timeElapsed) * 60));
  wpm = Math.round((((characterTyped / 5) / timeElapsed) * 60));
 
  cpm_text.textContent = cpm;
  wpm_text.textContent = wpm;
 
 
  cpm_group.style.display = "block";
  wpm_group.style.display = "block";
}