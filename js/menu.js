//start Menu
function openNav() {document.getElementById("Navigation").style.height = "100%"; }
function closeNav() {document.getElementById("Navigation").style.height = "0%"; }
//end Menu

//start generate a random quote when the page loads
const quotes = [
"“People who talk well but do nothing are like musical instruments; the sound is all they have to offer.” ~ Diogenes",
"“I pissed on the man who called me a dog. Why was he so surprised?” ~ Diogenes",
"“If only it was as easy to banish hunger by rubbing the belly as it is to masturbate.” ~ Diogenes",
"“One original thought is worth a thousand mindless quotings” ~ Diogenes",
"“He has the most who is most content with the least.” ~ Diogenes",
"“It is not that I am mad, it is only that my head is different from yours.” ~ Diogenes",
"“No man is hurt but by himself. …Literally by how he interprets what happens to him. If he focusses on how it could have been better, he will be hurt. If he focusses on how it could have been worse, he will be happy. The same is true for women too.” ~ Diogenes",
"“In a rich man’s house there is no place to spit but his face.” ~ Diogenes",
"“Fools! You think of “god” as a sentient being. God is the word used to represent a force. This force created nothing, it just helps things along. It does not answer prayers, although it may make you think of a way to solve a problem. It has the power to influence you, but not decide for you.” ~ Diogenes",
"“We have two ears and one tongue so that we would listen more and talk less.” ~ Diogenes",
"“We come into the world alone and we die alone. Why, in life, should we be any less alone?” ~ Diogenes",
"“The mob is the mother of tyrants.” ~ Diogenes",
"“Of what use is a philosopher who doesn’t hurt anybody’s feelings?” ~ Diogenes",
"“He lit a lamp in broad daylight and said, as he went about, “I am looking for an honest man.”” ~ Diogenes",
"“I am not an Athenian or a Greek, but a citizen of the world.” ~ Diogenes",
"“You will become a teacher of yourself when for the same things that you blame others, you also blame yourself.” ~ Diogenes",
"“Education gives sobriety to the young, comfort to the old, riches to the poor and is an ornament to the rich.” ~ Diogenes",
"“I am Diogenes the Dog. I nuzzle the kind, bark at the greedy and bite scoundrels.” ~ Diogenes",
"“Aristotle was once asked what those who tell lies gain by it. Said he – That when they speak truth they are not believed.” ~ Diogenes",
"“Self-taught poverty is a help toward philosophy, for the things which philosophy attempts to teach by reasoning, poverty forces us to practice.” ~ Diogenes",
"“Why not whip the teacher when the pupil misbehaves?” ~ Diogenes",
"“He once begged alms of a statue, and, when asked why he did so, replied, “To get practice in being refused.”” ~ Diogenes",
"“Discourse on virtue and they pass by in droves. Whistle and dance the shimmy, and you’ve got an audience.” ~ Diogenes",
"“When Alexander the Great addressed him with greetings, and asked if he wanted anything, Diogenes replied “Yes, stand a little out of my sunshine.”” ~ Diogenes",
"“The most beautiful thing in the world is freedom of speech.” ~ Diogenes",
"“When I look upon seamen, men of science and philosophers, man is the wisest of all beings; when I look upon priests and prophets nothing is as contemptible as man.” ~ Diogenes",
"“We have complicated every simple gift of the gods.” ~ Diogenes",
"“If I lack awareness, then why should I care what happens to me when I am dead?” ~ Diogenes",
"“To become self-educated you should condemn yourself for all those things that you would criticize others.” ~ Diogenes",
"“One day, observing a child drinking out of his hands, he cast away the cup from his wallet with the words, “A child has beaten me in plainness of living.”” ~ Diogenes",
"“The art of being a slave is to rule one’s master.” ~ Diogenes",
"“A friend is one soul abiding in two bodies.” ~ Diogenes",
"“Even if I am but a pretender to wisdom, that in itself is philosophy.” ~ Diogenes",
"“He was breakfasting in the marketplace, and the bystanders gathered round him with cries of “dog.” “It is you who are dogs,” cried he, “when you stand round and watch me at my breakfast.”” ~ Diogenes",
"“As houses well stored with provisions are likely to be full of mice, so the bodies of those that eat much are full of diseases.” ~ Diogenes",
"“Dogs and philosophers do the greatest good and get the fewest rewards.” ~ Diogenes",
"“There is only a finger’s difference between a wise man and a fool.” ~ Diogenes",
"“Plato had defined Man as an animal, biped and featherless, and was applauded. Diogenes plucked a fowl and brought it into the lecture-room with the words, “Behold Plato’s man!”” ~ Diogenes",
"“To the question what wine he found pleasant to drink, he replied, “That for which other people pay.”” ~ Diogenes",
"“The foundation of every state is the education of its youth.” ~ Diogenes",
"“Other dogs bite only their enemies, whereas I bite also my friends in order to save them.” ~ Diogenes",
"“Antisthenes used to say that envious people were devoured by their own disposition, just as iron is by rust. Envy of others comes from comparing what they have with what the envious person has, rather than the envious person realising they have more than what they could have and certainly more than some others and being grateful. It is really just an inability to get a correct perspective on their lives.” ~ Diogenes",
"“If you are to be kept right, you must possess either good friends or red-hot enemies. The one will warn you, the other will expose you.” ~ Diogenes",
"“Once he saw the officials of a temple leading away some one who had stolen a bowl belonging to the treasurers, and said, “The great thieves are leading away the little thief.”” ~ Diogenes",
"“To arrive at perfection, a man should have very sincere friends or inveterate enemies; because he would be made sensible of his good or ill conduct, either by the censures of the one or the admonitions of the other.” ~ Diogenes",
"“Aren’t you ashamed, you who walk backward along the whole path of existence, and blame me for walking backward along the path of the promenade?” ~ Diogenes",
"“It takes a wise man to discover a wise man.” ~ Diogenes",
"“On being asked by someone how he could become famous, Diogenes responded: ‘By worrying as little as possible about fame” ~ Diogenes",
"“If your cloak was a gift, I appreciate it; if it was a loan, I’m not through with it yet.” ~ Diogenes",
"“Poverty is a virtue which one can teach oneself.” ~ Diogenes",
"“When asked what was the proper time for supper: If you are a rich man, whenever you please; and if you are a poor man, whenever you can.” ~ Diogenes",
"“Man is the most intelligent of the animals – and the most silly.” ~ Diogenes",
"“I do not know whether there are gods, but there ought to be.” ~ Diogenes",
"“There is a false love that will make you something you are not.” ~ Diogenes",
"“The noblest people are those despising wealth, learning, pleasure and life; esteeming above them poverty, ignorance, hardship and death.” ~ Diogenes",
"“The sun, too, shines into cesspools and is not polluted.” ~ Diogenes",
"“Nothing can be produced out of nothing.” ~ Diogenes",
"“The question was put to him, what hope is; and his answer was, “The dream of a waking man.”” ~ Diogenes",
"“We are more curious about the meaning of dreams than about things we see when awake.” ~ Diogenes",
"“When the slave auctioneer asked in what he was proficient, he replied, “In ruling people.”” ~ Diogenes",
"“No man is hurt but by himself.” ~ Diogenes",
"“No man is hurt but by himself.” ~ Diogenes",
"“Blushing is the color of virtue.” ~ Diogenes",
"“Wise kings generally have wise counselors; and he must be a wise man himself who is capable of distinguishing one.” ~ Diogenes",
  // Add more quotes as needed
];

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteContainer = document.getElementById('quote-container');
  const quoteText = `<p style="font-family: comic-sans; font-style: italic; font-weight: bold; font-size: 24px;">${quotes[randomIndex]}</p>`;
  quoteContainer.innerHTML = quoteText;
}

window.addEventListener('load', generateRandomQuote);
//end generate a random quote when the page loads
