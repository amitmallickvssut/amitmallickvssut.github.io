const TEACHING_QUOTES = [
  { text: "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.", author: "William Arthur Ward" },
  { text: "Teaching is a very noble profession that shapes the character, caliber, and future of an individual.", author: "A. P. J. Abdul Kalam" },
  { text: "A teacher affects eternity; he can never tell where his influence stops.", author: "Henry Adams" },
  { text: "The art of teaching is the art of assisting discovery.", author: "Mark Van Doren" },
  { text: "In learning, you will teach, and in teaching, you will learn.", author: "Phil Collins" },
  { text: "I am not a teacher, but an awakener.", author: "Robert Frost" },
  { text: "The true teacher defends his pupils against his own personal influence.", author: "Amos Bronson Alcott" },
  { text: "Teaching kids to count is fine, but teaching them what counts is best.", author: "Bob Talbert" },
  { text: "It is the supreme art of the teacher to awaken joy in creative expression and knowledge.", author: "Albert Einstein" },
  { text: "A good teacher is like a candle \u2014 it consumes itself to light the way for others.", author: "Mustafa Kemal Atat\u00fcrk" }
];

function loadRandomQuote(){
  const el = document.querySelector('.eyebrow');
  if(!el) return;
  const pick = TEACHING_QUOTES[Math.floor(Math.random() * TEACHING_QUOTES.length)];
  el.textContent = '\u201C' + pick.text + '\u201D \u2014 ' + pick.author;
}
