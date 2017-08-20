$(document).ready(function(){
	$('.btn').on('click', function(){
		var rng = Math.floor(Math.random()*quotes.length);
		$('.quote').html('<h1>"' + quotes[rng][0]+'"</h1>');
		$('.name').html('<p> -' + quotes[rng][1] + '</p>');

	});

	var quotes = [
    ["People dont think the universe be like it is, but it do.", "Black Science Man"],
    ["Some people dream of success, while you're gonna wake up and work hard at it!", "Shia Lebouf"],
    ["Don't cry because it's over, smile because it happened.", "Dr.Seuss"],
    ["Be yourself, everyone else is already taken.", "Oscar Wilde"],
    ["Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", "Bernard M. Baruch"],
    ["A room without books is like a body without a soul.", "Marcus Tullius Cicero"],
    ["You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "Dr.Seuss"],
    ["You only live once, but if you do it right, once is enough.", "Mae West"],
    ["If you tell the truth, you don't have to remember anything.", "Mark Twain"],
    ["A friend is someone who knows all about you and still loves you.", "Albert Hubbard"],
    ["Live as if you were to die tomorrow. Learn as if you were to live forever.", "Mahatma Gandhi"],
    ["If you're interested in 'balancing' work and pleasure, stop trying to balance them. Instead make your work more pleasurable.","Donald Trump"],
    ["Management is nothing more than motivating other people.","Lee Iacocca"],
    ["Man's mind, once stretched by a new idea, never regains its original dimensions.","Oliver Wendell Holmes"],
    ["The time is now, the place is here. Stay in the present. You can do nothing to change the past, and the future will never come exactly as you plan or hope for.","Dan Millman"],
    ["My reason, the physician to my love, angry that his prescriptions are not kept, hath left me.","William Shakespeare"],
    ["No man remains quite what he was when he recognizes himself.","Thomas Mann"],
    ["The future is here. It's just not widely distributed yet.","William Gibson"],
    ["Work is not always required. There is such a thing as sacred idleness.","George MacDonald"],
    ["Why not go out on a limb? Isn't that where the fruit is?","Frank Scully"],
    ["Men who are unhappy, like men who sleep badly, are always proud of the fact.","Bertrand Russell"],
    ["Each decision we make, each action we take, is born out of an intention.","Sharon Salzberg"],
    ["Work is not always required. There is such a thing as sacred idleness.","George MacDonald"],
    ["I dwell in possibility...","Emily Dickinson"],
    ["It is a good rule in life never to apologize. The right sort of people do not want apologies, and the wrong sort take a mean advantage of them.","P. G. Wodehouse"],
    ["You can't turn back the clock. But you can wind it up again.","Bonnie Prudden"],
    ["Give me the splendid silent sun with all his beams full-dazzling.","Walt Whitman"],
    ["It’s like your batteries get low, and you need to charge them on someone else’s story.","Margaret Cho"],
    ["Failure will never overtake me if my determination to succeed is strong enough.","Og Mandino"],
    ["A man with a watch knows what time it is. A man with two watches is never sure.","Segal's Law"],
    ["The dead look so terribly dead when they're dead.","W. Somerset Maugham"],
    ["It is easier to fight for one's principles than to live up to them.","Alfred Adler"],
    ["If you can count your money, you don't have a billion dollars.","J. Paul Getty"],
    ["Men are not prisoners of fate, but only prisoners of their own minds.","Franklin D. Roosevelt"],
  ];
});