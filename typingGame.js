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
let timeLeft = TIME_LIMIT;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let current_quote = "";
let quoteNo = 0;
let timer = null;

function TekstuMainisana() {
  quote_text.textContent = null;
  current_quote = quotes_array[quoteNo];
}