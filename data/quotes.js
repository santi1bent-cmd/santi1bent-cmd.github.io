/* =========================================================
   A Curious Loop — Quote Collection
   Each entry: { text, author, source (optional) }
   ========================================================= */

const QUOTES = [

  {
    text: "Exploration is in our nature. We began as wanderers, and we are wanderers still. We have lingered long enough on the shores of the cosmic ocean. We are ready at last to set sail for the stars.",
    author: "Carl Sagan"
  },
  {
    text: "Two roads diverged in a wood, and I — I took the one less traveled by.",
    author: "Robert Frost"
  },
  {
    text: "If I have seen farther than others, it is by standing upon the shoulders of giants.",
    author: "Isaac Newton"
  },
  {
    text: "I do not know what I may appear to the world, but to myself I seem to have been only like a boy playing on the seashore, and diverting myself in now and then finding a smoother pebble or a prettier shell than ordinary, whilst the great ocean of truth lay all undiscovered before me.",
    author: "Isaac Newton"
  },
  {
    text: "If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.",
    author: "Henry David Thoreau"
  },
  {
    text: "To laugh often and much; to win the respect of intelligent people and the affection of children; to earn the appreciation of honest critics and endure the betrayal of false friends; to appreciate beauty, to find the best in others; to leave the world a bit better, whether by a healthy child, a garden patch, or a redeemed social condition; to know even one life has breathed easier because you have lived. This is to have succeeded.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "You cannot do a kindness too soon, for you never know how soon it will be too late.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "Live as though you'll die tomorrow. Learn as though you'll live forever.",
    author: "Gandhi"
  },
  {
    text: "Be ashamed to die until you have won some victory for humanity.",
    author: "Horace Mann"
  },
  {
    text: "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.",
    author: "Albert Einstein"
  },
  {
    text: "In so far as the mind sees things in their eternal aspect, it participates in eternity.",
    author: "Spinoza"
  },
  {
    text: "I believe there is nothing immortal... no doubt the spirit and energy of the world is what is acting in us, as the sea is what rises in every little wave; but it passes through us; and cry out as we may, it will move on. Our privilege is to have perceived it as it moved.",
    author: "George Santayana"
  },
  {
    text: "Heard melodies are sweet, but those unheard are sweeter.",
    author: "John Keats"
  },
  {
    text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    author: "Alan Watts"
  },
  {
    text: "The cave you fear to enter holds the treasure you seek.",
    author: "Joseph Campbell"
  },
  {
    text: "You are that vast thing that you see far, far off with great telescopes.",
    author: "Alan Watts"
  },
  {
    text: "We're so engaged in doing things to achieve purposes of outer value that we forget the inner value, the rapture that is associated with being alive, is what it is all about.",
    author: "Joseph Campbell"
  },
  {
    text: "As you simplify your life, the laws of the universe will be simpler; solitude will not be solitude, poverty will not be poverty, nor weakness weakness.",
    author: "Henry David Thoreau"
  },
  {
    text: "Thaw with her gentle persuasion is more powerful than Thor with his hammer. The one melts, the other breaks into pieces.",
    author: "Henry David Thoreau"
  },
  {
    text: "The good life is one inspired by love and guided by knowledge.",
    author: "Bertrand Russell"
  },
  {
    text: "Three passions, simple but overwhelmingly strong, have governed my life: the longing for love, the search for knowledge, and unbearable pity for the suffering of mankind.",
    author: "Bertrand Russell"
  },
  {
    text: "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world.",
    author: "Louis Pasteur"
  },
  {
    text: "I expect to pass through this world but once. Any good therefore that I can do, or any kindness that I can show to any fellow creature, let me do it now. Let me not defer nor neglect it, for I shall not pass this way again.",
    author: "Stephen Grellet"
  },
  {
    text: "Be grateful every day for the brief but magnificent opportunity that life provides.",
    author: "Carl Sagan"
  },
  {
    text: "He is happy whom circumstances suit his temper; but he is more excellent who suits his temper to any circumstance.",
    author: "David Hume"
  },
  {
    text: "Talent hits a target no one else can hit; Genius hits a target no one else can see.",
    author: "Arthur Schopenhauer"
  },
  {
    text: "I love the man that can smile in trouble, that can gather strength from distress, and grow brave by reflection. 'Tis the business of little minds to shrink; but he whose heart is firm, and whose conscience approves his conduct, will pursue his principles unto death.",
    author: "Thomas Paine"
  },
  {
    text: "The best time to plant a tree is twenty years ago. The second best time is now.",
    author: "Proverb"
  },
  {
    text: "We are all in the gutter, but some of us are looking at the stars.",
    author: "Oscar Wilde"
  },
  {
    text: "If you love life, don't waste time, for time is what life is made up of.",
    author: "Bruce Lee"
  },
  {
    text: "The man who removes a mountain begins by carrying away small stones.",
    author: "Chinese Proverb"
  },
  {
    text: "Far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure… than to rank with those poor spirits who neither enjoy much nor suffer much, because they live in a gray twilight that knows not victory nor defeat.",
    author: "Theodore Roosevelt"
  },
  {
    text: "I was set free, because my greatest fear had already been realized… and I was still alive, and I still had a daughter whom I adored, and I had an old typewriter and a big idea. And so rock bottom became the solid foundation on which I rebuilt my life.",
    author: "J.K. Rowling"
  },
  {
    text: "Courage is strength in the face of knowledge of what is to be feared or hoped. Wisdom is prudent strength.",
    author: "Atul Gawande"
  },
  {
    text: "How we seek to spend our time may depend on how much time we perceive ourselves to have.",
    author: "Atul Gawande"
  },
  {
    text: "Cowards die many times before their deaths. The valiant never taste of death but once.",
    author: "Shakespeare"
  },
  {
    text: "Move swift as the Wind and closely-formed as the Wood. Attack like the Fire and be still as the Mountain.",
    author: "Sun Tzu",
    source: "The Art of War"
  },
  {
    text: "When people die, they cannot be replaced. They leave holes that cannot be filled, for it is the fate — the genetic and neural fate — of every human being to be a unique individual, to find his own path, to live his own life, to die his own death.",
    author: "Oliver Sacks"
  },
  {
    text: "I wanted to change the world. But I have found that the only thing one can be sure of changing is oneself.",
    author: "Aldous Huxley"
  },
  {
    text: "Blessed are the hearts that can bend; they shall never be broken.",
    author: "Albert Camus"
  },
  {
    text: "As far as we can discern, the sole purpose of human existence is to kindle a light of meaning in the darkness of mere being.",
    author: "Carl Jung"
  },
  {
    text: "Through various chances, through all vicissitudes, we make our way…",
    author: "Virgil",
    source: "Aeneid"
  },
  {
    text: "You do not have to be good.\nYou do not have to walk on your knees\nfor a hundred miles through the desert, repenting.\nYou only have to let the soft animal of your body\nlove what it loves.\nTell me about despair, yours, and I will tell you mine.\nMeanwhile the world goes on.\nMeanwhile the sun and the clear pebbles of the rain\nare moving across the landscapes,\nover the prairies and the deep trees,\nthe mountains and the rivers.\nMeanwhile the wild geese, high in the clean blue air,\nare heading home again.\nWhoever you are, no matter how lonely,\nthe world offers itself to your imagination,\ncalls to you like the wild geese, harsh and exciting —\nover and over announcing your place\nin the family of things.",
    author: "Mary Oliver",
    source: "Wild Geese"
  },
  {
    text: "Tell me, what is it you plan to do with your one wild and precious life?",
    author: "Mary Oliver"
  },
  {
    text: "Hello, sun in my face. Hello you who made the morning and spread it over the fields… Watch, now, how I start the day in happiness, in kindness.",
    author: "Mary Oliver"
  },
  {
    text: "Listen — are you breathing just a little, and calling it a life?",
    author: "Mary Oliver"
  },
  {
    text: "I tell you this to break your heart, by which I mean only that it break open and never close again to the rest of the world.",
    author: "Mary Oliver"
  },
  {
    text: "Happiness, not in another place but this place… not for another hour, but this hour.",
    author: "Walt Whitman"
  },
  {
    text: "Power is given only to those who dare to lower themselves and pick it up. Only one thing matters, one thing; to be able to dare!",
    author: "Fyodor Dostoyevsky"
  },
  {
    text: "No tree can grow to heaven, unless its roots reach down to hell.",
    author: "Carl Jung"
  },
  {
    text: "Luck is what happens when preparation meets opportunity.",
    author: "Seneca"
  },
  {
    text: "Brave men rejoice in adversity, just as brave soldiers triumph in war.",
    author: "Seneca"
  },
  {
    text: "A gem cannot be polished without friction, nor a man perfected without trials.",
    author: "Seneca"
  },
  {
    text: "Life's like a play; it's not the length, but the excellence of the acting that matters.",
    author: "Seneca"
  },
  {
    text: "Most powerful is he who has himself in power.",
    author: "Seneca"
  },
  {
    text: "You have power over your mind — not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius"
  },
  {
    text: "When you arise in the morning, think of what a precious privilege it is to be alive — to breathe, to think, to enjoy, to love.",
    author: "Marcus Aurelius"
  },
  {
    text: "Waste no more time arguing about what a good man should be. Be one.",
    author: "Marcus Aurelius"
  },
  {
    text: "A man who procrastinates in his choosing will have his choice made for him by circumstance.",
    author: "Hunter S. Thompson"
  },
  {
    text: "Never be a spectator of unfairness or stupidity. The grave will supply plenty of time for silence.",
    author: "Christopher Hitchens"
  },
  {
    text: "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Nature loves courage. You make the commitment and nature will respond to that commitment by removing impossible obstacles. Dream the impossible dream and the world will not grind you under, it will lift you up. This is the trick. This is what all these teachers and philosophers who really counted, who really touched the alchemical gold, this is what they understood. This is the shamanic dance in the waterfall. This is how magic is done. By hurling yourself into the abyss and discovering it's a feather bed.",
    author: "Terence McKenna"
  },
  {
    text: "My candle burns at both ends; it will not last the night; but ah, my foes, and oh, my friends — it gives a lovely light!",
    author: "Edna St. Vincent Millay"
  },
  {
    text: "Those who defeat others are strong, those who defeat themselves are mighty.",
    author: "Laozi"
  },
  {
    text: "The most important conversations you'll ever have are the ones you'll have with yourself.",
    author: "David Goggins"
  },
  {
    text: "One by one, as they march, our comrades vanish from our sight. Be it ours to shed sunshine on their path, to lighten their sorrows by the balm of sympathy, to give them the pure joy of a never-tiring affection.",
    author: "Bertrand Russell"
  },
  {
    text: "If you can see your path laid out in front of you step by step, you know it's not your path. Your own path you make with every step you take. That's why it's your path.",
    author: "Joseph Campbell"
  },
  {
    text: "We have not even to risk the adventure alone,\nfor the heroes of all time have gone before us.\nThe labyrinth is thoroughly known…\nwe have only to follow the thread of the hero path.\nAnd where we had thought to find an abomination\nwe shall find a God.\nAnd where we had thought to slay another\nwe shall slay ourselves.\nWhere we had thought to travel outwards\nwe shall come to the center of our own existence.\nAnd where we had thought to be alone\nwe shall be with all the world.",
    author: "Joseph Campbell",
    source: "The Hero Path"
  },
  {
    text: "Focused failure builds more character than aimless success.",
    author: "Dr. Tork"
  },
  {
    text: "Endurance is patience concentrated.",
    author: "Thomas Carlyle"
  },
  {
    text: "We rise by lifting others.",
    author: "Robert G. Ingersoll"
  },
  {
    text: "I will love the light for it shows me the way, yet I will endure the darkness for it shows me the stars.",
    author: "Og Mandino"
  },
  {
    text: "True happiness is to enjoy the present, without anxious dependence upon the future, not to amuse ourselves with either hopes or fears but to rest satisfied with what we have, which is sufficient, for he that is so wants nothing. The greatest blessings of mankind are within us and within our reach. A wise man is content with his lot, whatever it may be, without wishing for what he has not.",
    author: "Seneca"
  },
  {
    text: "Non est ad astra mollis e terris via — there is no easy way from the earth to the stars.",
    author: "Seneca"
  },
  {
    text: "The greatest obstacle to living is expectancy, which hangs upon tomorrow and loses today. What are you looking at? To what goal are you straining? The whole future lies in uncertainty: live immediately.",
    author: "Seneca"
  },
  {
    text: "Practice kindness all day to everybody and you will realize you're already in heaven now.",
    author: "Jack Kerouac"
  },
  {
    text: "Wind extinguishes a candle and energizes fire. Likewise with randomness, uncertainty, chaos: you want to use them, not hide from them. You want to be the fire and wish for the wind.",
    author: "Nassim Taleb"
  },
  {
    text: "Luck affects everything. Let your hook always be cast. In the stream where you least expect it, there will be a fish.",
    author: "Ovid"
  },
  {
    text: "Thou seest how sloth wastes the sluggish body, as water is corrupted unless it moves.",
    author: "Ovid"
  },
  {
    text: "How far you go in life depends on you being tender with the young, compassionate with the aged, sympathetic with the striving and tolerant of the weak and strong. Because someday in life you will have been all of these.",
    author: "George Washington Carver"
  },
  {
    text: "True ease in talking comes from art, not chance, as those move easiest who have learned to dance.",
    author: "Alexander Pope"
  },
  {
    text: "I cannot pretend I am without fear. But my predominant feeling is one of gratitude. I have loved and been loved; I have been given much and I have given something in return; I have read and traveled and thought and written. Above all, I have been a sentient being, a thinking animal, on this beautiful planet, and that in itself has been an enormous privilege and adventure.",
    author: "Oliver Sacks"
  },
  {
    text: "Caretake this moment. Immerse yourself in its particulars. Respond to this person, this challenge, this deed. Quit the evasions. Stop giving yourself needless trouble. It is time to really live; to fully inhabit the situation you happen to be in now.",
    author: "Epictetus"
  },
  {
    text: "Throw me to the wolves and I will return leading the pack.",
    author: "Seneca"
  },
  {
    text: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
    author: "Marcus Aurelius"
  },
  {
    text: "Think of yourself as dead. You have lived your life. Now, take what's left and live it properly. What doesn't transmit light creates its own darkness.",
    author: "Marcus Aurelius"
  },
  {
    text: "The impediment to action advances action. What stands in the way becomes the way.",
    author: "Marcus Aurelius"
  },
  {
    text: "Observe always that everything is the result of change, and get used to thinking that there is nothing Nature loves so well as to change existing forms and make new ones like them.",
    author: "Marcus Aurelius"
  },
  {
    text: "Nowhere can man find a quieter or more untroubled retreat than in his own soul.",
    author: "Marcus Aurelius"
  },
  {
    text: "The art of living is more like wrestling than dancing, in so far as it stands ready against the accidental and the unforeseen, and is not apt to fall.",
    author: "Marcus Aurelius"
  },
  {
    text: "All things of the body stream away like a river, all things of the mind are dreams and delusion; life is warfare, and a visit to a strange land; the only lasting fame is oblivion.",
    author: "Marcus Aurelius"
  },
  {
    text: "Adapt yourself to the life you have been given; and truly love the people with whom destiny has surrounded you.",
    author: "Marcus Aurelius"
  },
  {
    text: "You could leave life right now. Let that determine what you do and say and think.",
    author: "Marcus Aurelius"
  },
  {
    text: "What we do now echoes in eternity.",
    author: "Marcus Aurelius"
  },
  {
    text: "In the end, people don't view their life as merely the average of all its moments — which, after all, is mostly nothing much plus some sleep. For human beings, life is meaningful because it is a story. A story has a sense of a whole, and its arc is determined by the significant moments, the ones where something happens. We have purposes larger than ourselves.",
    author: "Atul Gawande"
  },
  {
    text: "I laugh at those who think they can damage me. They do not know who I am, they do not know what I think, they cannot even touch the things which are really mine and with which I live.",
    author: "Epictetus"
  },
  {
    text: "All my life, my heart has yearned for a thing I cannot name.",
    author: "Andre Breton"
  },
  {
    text: "Whatever the needs of the moment, I had a choice: I could do what was required calmly, patiently, and attentively, or do it in a state of panic. Every moment of the day — indeed, every moment throughout one's life — offers an opportunity to be relaxed and responsive or to suffer unnecessarily.",
    author: "Sam Harris"
  },
  {
    text: "Exist in superposition\nLife's all about contradiction\nYin and yang\nFluidity, and things\nI'm me, I'm God\nI'm everything\nI'm my own reason why I sing\nAnd so are you, are you understanding?",
    author: "Daniel Caesar",
    source: "Superposition"
  },
  {
    text: "I got everything I need\nTime and space to think and breathe.",
    author: "Daniel Caesar",
    source: "Superposition"
  },
  {
    text: "Everything has its wonders, even darkness and silence… and I learn, whatever state I may be in, therein to be content.",
    author: "Helen Keller"
  },
  {
    text: "Give yourself permission to allow this moment to be exactly as it is, and allow yourself to be exactly as you are.",
    author: "Jon Kabat-Zinn"
  },
  {
    text: "Wherever you go, there you are.",
    author: "Jon Kabat-Zinn"
  },
  {
    text: "The little things? The little moments? They aren't little.",
    author: "Jon Kabat-Zinn"
  },
  {
    text: "You are free, and that is why you are lost.",
    author: "Franz Kafka"
  },
  {
    text: "We shall not cease from exploration\nAnd the end of all our exploring\nWill be to arrive where we started\nAnd know the place for the first time.",
    author: "T.S. Eliot"
  },
  {
    text: "For last year's words belong to last year's language\nAnd next year's words await another voice.",
    author: "T.S. Eliot"
  },
  {
    text: "To do the useful thing, to say the courageous thing, to contemplate the beautiful thing: that is enough for one man's life.",
    author: "T.S. Eliot"
  },
  {
    text: "The purpose of literature is to turn blood into ink.",
    author: "T.S. Eliot"
  },
  {
    text: "Music heard so deeply\nThat it is not heard at all, but\nyou are the music\nWhile the music lasts.",
    author: "T.S. Eliot"
  },
  {
    text: "For I have known them all already, known them all: — Have known the evenings, mornings, afternoons, I have measured out my life with coffee spoons.",
    author: "T.S. Eliot"
  },
  {
    text: "Keep your face always toward the sunshine — and shadows will fall behind you.",
    author: "Walt Whitman"
  },
  {
    text: "…the powerful play goes on, and you will contribute a verse.",
    author: "Walt Whitman"
  },
  {
    text: "I exist as I am, that is enough,\nIf no other in the world be aware I sit content,\nAnd if each and all be aware I sit content.\nOne world is aware, and by the far the largest to me, and that is myself.",
    author: "Walt Whitman"
  },
  {
    text: "If I can stop one heart from breaking, I shall not live in vain;\nIf I can ease one life the aching,\nOr cool one pain,\nOr help one fainting robin\nUnto his nest again,\nI shall not live in vain.",
    author: "Emily Dickinson"
  },
  {
    text: "This is my letter to the world that never wrote to me.",
    author: "Emily Dickinson"
  },
  {
    text: "The Brain — is wider than the Sky —\nFor — put them side by side —\nThe one the other will contain\nWith ease — and You — beside —",
    author: "Emily Dickinson"
  },
  {
    text: "The earth laughs in flowers.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "The creation of a thousand forests is in one acorn.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "The ornament of a house is the friends who frequent it.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "The first wealth is health.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "Adopt the pace of nature: her secret is patience.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "This new day is too dear, with all its hopes and invitations, to waste a moment on the yesterdays.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "Love is my religion — I could die for it.",
    author: "John Keats"
  },
  {
    text: "Circumstances don't make the man, they only reveal him to himself.",
    author: "Epictetus"
  },
  {
    text: "If equal affection cannot be, let the more loving one be me.",
    author: "W.H. Auden"
  },
  {
    text: "The image of myself which I try to create in my own mind in order that I may love myself is very different from the image which I try to create in the minds of others in order that they may love me.",
    author: "W.H. Auden"
  },
  {
    text: "The most exciting rhythms seem unexpected and complex, the most beautiful melodies simple and inevitable.",
    author: "W.H. Auden"
  },
  {
    text: "The slogan of hell: eat or be eaten. The slogan of heaven: eat and be eaten.",
    author: "W.H. Auden"
  },
  {
    text: "There's a difference between knowing the path, and walking the path.",
    author: "Morpheus",
    source: "The Matrix"
  },
  {
    text: "The cradle rocks above an abyss, and common sense tells us that our existence is but a brief crack of light between two eternities of darkness.",
    author: "Vladimir Nabokov"
  },
  {
    text: "I go down to the shore in the morning\nand depending on the hour the waves\nare rolling in or moving out,\nand I say, oh, I am miserable,\nwhat shall — what should I do? And the sea says\nin its lovely voice:\nExcuse me, I have work to do.",
    author: "Mary Oliver",
    source: "I Go Down to the Shore"
  },
  {
    text: "I stood willingly and gladly in the characters of everything — other people, trees, clouds. And this is what I learned, that the world's otherness is antidote to confusion — that standing within this otherness, the beauty and the mystery of the world, out in the fields or deep inside books, can re-dignify the worst-stung heart.",
    author: "Mary Oliver"
  },
  {
    text: "And that is just the point… how the world, moist and beautiful, calls to each of us to make a new and serious response. That's the big question, the one the world throws at you every morning. 'Here you are, alive. Would you like to make a comment?'",
    author: "Mary Oliver"
  },
  {
    text: "To live in this world\nyou must be able\nto do three things:\nto love what is mortal;\nto hold it\nagainst your bones knowing\nyour own life depends on it;\nand, when the time comes to let it go,\nto let it go.",
    author: "Mary Oliver"
  },
  {
    text: "So come to the pond,\nor the river of your imagination,\nor the harbor of your longing,\nand put your lips to the world.\nAnd live\nyour life.",
    author: "Mary Oliver"
  },
  {
    text: "The leaf has a song in it.\nStone is the face of patience.\nInside the river there is an unfinishable story\nand you are somewhere in it\nand it will never end until all ends.\nThe song you heard singing in the leaf when you\nwere a child\nis singing still.",
    author: "Mary Oliver"
  },
  {
    text: "Well, while I'm here I'll do the work — and what's the work? To ease the pain of living. Everything else, drunken dumbshow.",
    author: "Allen Ginsberg"
  },
  {
    text: "I am not a beginning.\nI am not an end.\nI am a link in a chain.",
    author: "Keith Haring"
  },
  {
    text: "You triumph over death, not by living forever, but by living timelessly, by being present to the present.",
    author: "Ken Wilber"
  },
  {
    text: "I am not sure that I exist, actually. I am all the writers that I have read, all the people that I have met, all the women that I have loved; all the cities I have visited.",
    author: "Jorge Luis Borges"
  },
  {
    text: "Don't talk unless you can improve the silence.",
    author: "Jorge Luis Borges"
  },
  {
    text: "It means much to have loved, to have been happy, to have laid my hand on the living Garden, even for a day.",
    author: "Jorge Luis Borges"
  },
  {
    text: "From my weakness, I drew strength that never left me.",
    author: "Jorge Luis Borges"
  },
  {
    text: "Time is the substance I am made of. Time is a river which sweeps me along, but I am the river; it is a tiger which destroys me, but I am the tiger; it is a fire which consumes me, but I am the fire.",
    author: "Jorge Luis Borges"
  },
  {
    text: "Being with you and not being with you is the only way I have to measure time.",
    author: "Jorge Luis Borges"
  },
  {
    text: "A writer — and, I believe, generally all persons — must think that whatever happens to him or her is a resource. All things have been given to us for a purpose, and an artist must feel this more intensely. All that happens to us, including our humiliations, our misfortunes, our embarrassments, all is given to us as raw material, as clay, so that we may shape our art.",
    author: "Jorge Luis Borges"
  },
  {
    text: "Most of us spend our time seeking happiness and security without acknowledging the underlying purpose of our search. Each of us is looking for a path back to the present. How we pay attention to the present moment largely determines the character of our experience and, therefore, the quality of our lives.",
    author: "Sam Harris"
  },
  {
    text: "These chemicals disclose layers of beauty that art is powerless to capture and for which the beauty of nature itself is a mere simulacrum. Positive psychedelic experiences often reveal how wondrously at ease in the universe a human being can be — and for most of us, normal waking consciousness does not offer so much as a glimmer of those deeper possibilities.",
    author: "Sam Harris"
  },
  {
    text: "This present moment, since it knows neither past nor future, is itself timeless, and that which is timeless is Eternal. Thus the eternal life belongs to those who live in the present.",
    author: "Ken Wilber"
  },
  {
    text: "We have to create culture. Don't watch TV, don't read magazines, don't even listen to NPR. Create your own roadshow. The nexus of space and time where you are now is the most immediate sector of your universe… What is real is you and your friends and your associations, your highs, your orgasms, your hopes, your plans, your fears.",
    author: "Terence McKenna"
  },
  {
    text: "Perhaps the deepest reason why we are afraid of death is because we do not know who we are. We believe in a personal, unique, and separate identity — but if we dare to examine it, we find that this identity depends entirely on an endless collection of things to prop it up. Without our familiar props, we are faced with just ourselves, a person we do not know, an unnerving stranger with whom we have been living all the time but we never really wanted to meet.",
    author: "Sogyal Rinpoche"
  },
  {
    text: "All the gods, all the heavens, all the hells, are within you.",
    author: "Joseph Campbell"
  },
  {
    text: "Where you stumble and fall, there you will find gold.",
    author: "Joseph Campbell"
  },
  {
    text: "As you go the way of life,\nyou will see a great chasm. Jump.\nIt is not as wide as you think.",
    author: "Joseph Campbell"
  },
  {
    text: "I have had the experience countless times… making love, watching a sunset, listening to music, feeling the breeze… that I would sign up for this whole life and all of its pains, just to experience this exact moment. Experience itself is infinitely meaningful. And pain is temporary. And seen clearly, even the suffering is filled with beauty.",
    author: "Daniel Schmachtenberger"
  },
  {
    text: "Maybe all I can do is hope to wind up with the right regrets.",
    author: "Arthur Miller"
  },
  {
    text: "The time will come\nwhen, with elation\nyou will greet yourself arriving\nat your own door, in your own mirror\nand each will smile at the other's welcome,\nand say, sit here. Eat.\nYou will love again the stranger who was your self.\nGive wine. Give bread. Give back your heart\nto itself, to the stranger who has loved you\nall your life, whom you ignored\nfor another, who knows you by heart.\nTake down the love letters from the bookshelf,\nthe photographs, the desperate notes,\npeel your own image from the mirror.\nSit. Feast on your life.",
    author: "Derek Walcott",
    source: "Love After Love"
  },
  {
    text: "Love is a friendship set to music.",
    author: "Joseph Campbell"
  },
  {
    text: "The meaning of life is just to be alive. It is so plain and so obvious and so simple. And yet, everybody rushes around in a great panic as if it were necessary to achieve something beyond themselves.",
    author: "Alan Watts"
  },
  {
    text: "The menu is not the meal.",
    author: "Alan Watts"
  },
  {
    text: "You don't need to do anything, because if you see yourself in the correct way, you are all as much extraordinary phenomenon of nature as trees, clouds, the patterns in running water, the flickering of fire, the arrangement of the stars, and the form of a galaxy. You are all just like that, and there is nothing wrong with you at all.",
    author: "Alan Watts"
  },
  {
    text: "You're under no obligation to be the same person you were 5 minutes ago.",
    author: "Alan Watts"
  },
  {
    text: "You do not play a sonata in order to reach the final chord, and if the meanings of things were simply in ends, composers would write nothing but finales.",
    author: "Alan Watts"
  },
  {
    text: "When somebody plays music, you listen. You just follow those sounds, and eventually you understand the music. The point can't be explained in words because music is not words, but after listening for a while, you understand the point of it, and that point is the music itself. In exactly the same way, you can listen to all experience.",
    author: "Alan Watts"
  },
  {
    text: "The art of living is neither careless drifting on the one hand nor fearful clinging to the past on the other. It consists in being sensitive to each moment, in regarding it as utterly new and unique, in having the mind open and wholly receptive.",
    author: "Alan Watts"
  },
  {
    text: "It's the magic of risking everything for a dream that nobody sees but you.",
    author: "Million Dollar Baby"
  },
  {
    text: "I had a lover's quarrel with the world.",
    author: "Robert Frost"
  },
  {
    text: "The woods are lovely, dark, and deep,\nBut I have promises to keep,\nAnd miles to go before I sleep,\nAnd miles to go before I sleep.",
    author: "Robert Frost"
  },
  {
    text: "Traveler, there is no path.\nThe path is made by walking.\nBy walking you make a path\nAnd turning, you look back\nat a way you will never tread again.\nTraveler, there is no road,\nonly wakes in the sea.",
    author: "Antonio Machado"
  },
  {
    text: "I know there is no straight road\nNo straight road in this world\nOnly a giant labyrinth\nOf intersecting crossroads.",
    author: "Federico García Lorca"
  },
  {
    text: "I am not I.\nI am this one\nwalking beside me whom I do not see,\nwhom at times I manage to visit,\nand whom at other times I forget;\nwho remains calm and silent while I talk,\nand forgives, gently, when I hate,\nwho walks where I am not,\nwho will remain standing when I die.",
    author: "Juan Ramón Jiménez"
  },
  {
    text: "Perhaps this momentary life of ours is only the light that divides our infinite origin from our infinite end.",
    author: "Juan Ramón Jiménez"
  },
  {
    text: "Before I had studied Chán for thirty years, I saw mountains as mountains, and rivers as rivers. When I arrived at a more intimate knowledge, I came to the point where I saw that mountains are not mountains, and rivers are not rivers. But now that I have got its very substance, I am at rest. For it's just that I see mountains once again as mountains, and rivers once again as rivers.",
    author: "Qingyuan Weixin"
  },
  {
    text: "You use a glass mirror to see your face, you use works of art to see your soul.",
    author: "George Bernard Shaw"
  },
  {
    text: "The power of music can inform ordinary activities with spiritual fervor, to give wings of eternity to that which is most ephemeral.",
    author: "Pablo Casals"
  },
  {
    text: "The secret of Epicurean joy and serenity… is to live each instant as if it were the last, but also as if it were the first.",
    author: "Pierre Hadot"
  },
  {
    text: "It matters not how strait the gate,\nHow charged with punishment the scroll,\nI am the master of my fate:\nI am the captain of my soul.",
    author: "Ernest Henley",
    source: "Invictus"
  },
  {
    text: "The fact that by cosmic scales man is but an atom is a quantitative irrelevancy: his inner width can make him an event of cosmic importance.",
    author: "Hans Jonas"
  },
  {
    text: "Gnōthi seauton — know thyself.",
    author: "Temple of Apollo at Delphi"
  },
  {
    text: "The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.",
    author: "Jack Kerouac"
  },
  {
    text: "You don't have to find out you are dying to start living.",
    author: "Zach Sobiech"
  },
  {
    text: "Yesterday is but today's memory, and tomorrow is today's dream.",
    author: "Khalil Gibran"
  },
  {
    text: "How lucky I am to have something that makes saying goodbye so hard.",
    author: "A.A. Milne",
    source: "Winnie the Pooh"
  },
  {
    text: "You think your pain and your heartbreak are unprecedented in the history of the world, but then you read. It was books that taught me that the things that tormented me most were the very things that connected me with all the people who were alive, who had ever been alive.",
    author: "James Baldwin"
  },
  {
    text: "In everyone's life, at some time, our inner fire goes out. It is then burst into flame by an encounter with another human being. We should all be thankful for those people who rekindle the inner spirit.",
    author: "Albert Schweitzer"
  },

  {
    text: "I enjoyed the innocence of unhappiness and of helplessness; could I blame myself for a sin which attracted me, which flooded me with pleasure precisely to the extent it brought me to despair?",
    author: "Georges Bataille"
  },

  {
    text: "People always think we look for love at our lowest to distract us. I am convinced we do it because we want someone to look us in the eye, to look our ugly in the eye and still choose us. I didn't want a distraction, I wanted you to see a mess and still find me worthy of love, to tell me that you could still love me anyway.",
    author: "Georges Bataille"
  },

  {
    text: "A world of grapes alchemizing into wine, love leading to war, and the butchery of battle inspiring our most breathtaking art.",
    author: "Scott Samuelson"
  },

  {
    text: "Stop aspiring and start writing. If you're writing, you're a writer. Write like you're a goddamn death row inmate and the governor is out of the country and there's no chance for a pardon. Write like you're clinging to the edge of a cliff, white knuckles, on your last breath, and you've got just one last thing to say, like you're a bird flying over us and you can see everything, and please, for God's sake, tell us something that will save us from ourselves. Take a deep breath and tell us your deepest, darkest secret, so we can wipe our brow and know that we're not alone. Write like you have a message from the king.",
    author: "Alan Watts"
  },

  {
    text: "She runs in my blood and beats in my heart; she is part of me, always, so I don't have to picture her to remember her.",
    author: "Ken Wilber"
  },

  {
    text: "To see all memory as present experience is to collapse the boundaries of this present moment, to free it of illusory limits, to deliver it from the opposites of past vs. future. It becomes obvious that there is nothing behind you in time nor before you in time. You thus have nowhere to stand but in the timeless present, and thus nowhere to stand but in eternity.",
    author: "Ken Wilber"
  },

  {
    text: "This is one moment,\nBut know that another\nShall pierce you with a sudden painful joy.",
    author: "T.S. Eliot"
  },

  {
    text: "If time and space, as sages say,\nAre things which cannot be,\nThe sun which does not feel decay\nNo greater is than we.\nSo why, Love, should we ever pray\nTo live a century?\nThe butterfly that lives a day\nHas lived eternity.",
    author: "T.S. Eliot"
  },

  {
    text: "With Cats, some say, one rule is true:\nDon't speak till you are spoken to.\nMyself, I do not hold with that —\nI say, you should ad-dress a Cat.\nBut always keep in mind that he\nResents familiarity.\nI bow, and taking off my hat,\nAd-dress him in this form: O Cat!\nBut if he is the Cat next door,\nWhom I have often met before\n(He comes to see me in my flat)\nI greet him with an oopsa Cat!\nI think I've heard them call him James —\nBut we've not got so far as names.",
    author: "T.S. Eliot"
  },

  {
    text: "Inoculate yourselves and those around you with your own art and self-awareness. Create wonders. Dance. Make love. Move at more than a shambling pace. Kiss in public. Climb something. Play. Disrupt misery and the viciousness of the miserable. Be alive. Become a fearless agent of compassionate and effective change.",
    author: "Simon Zealot"
  },

  {
    text: "For what is the heart, but a spring; and the nerves, but so many strings; and the joints, but so many wheels…",
    author: "Thomas Hobbes"
  },

  {
    text: "When you were born you were crying and everyone else was smiling. Live your life so at the end, you're the one who is smiling and everyone else is crying.",
    author: "Ralph Waldo Emerson"
  },

  {
    text: "The job of the artist is always to deepen the mystery.",
    author: "Francis Bacon"
  },

  {
    text: "Great art is always a way of concentrating, reinventing what is called fact, what we know of our existence — a reconcentration… tearing away the veils, the attitudes people acquire of their time and earlier time. Really good artists tear down those veils.",
    author: "Francis Bacon"
  },

  {
    text: "The wind, one brilliant day, called\nto my soul with an odor of jasmine.\n'In return for the odor of my jasmine,\nI'd like all the odor of your roses.'\n'I have no roses; all the flowers\nin my garden are dead.'\n'Well then, I'll take the withered petals\nand the yellow leaves and the waters of the fountain.'",
    author: "Antonio Machado"
  },

  {
    text: "Just watch this moment, without trying to change it at all. What is happening? What do you feel? What do you see? What do you hear?",
    author: "Jon Kabat-Zinn"
  },

  {
    text: "Guess what? When it comes right down to it, wherever you go, there you are. Whatever you wind up doing, that's what you've wound up doing. Whatever you are thinking right now, that's what's on your mind. Whatever has happened to you, it has already happened. The important question is, how are you going to handle it? In other words, 'now what?'",
    author: "Jon Kabat-Zinn"
  },

  {
    text: "The future that we want — this is it. This is the future of all the previous thoughts you've ever had about the future. You're in it. You're already in it. It's like, wait a minute, this is it. This is your life. We only have moments. This moment's as good as any other. It's perfect.",
    author: "Jon Kabat-Zinn"
  },

  {
    text: "In India, I was living in a little hut, about six feet by seven feet. It had a canvas flap instead of a door. I was sitting on my bed meditating, and a cat wandered in and plopped down on my lap. I took the cat and tossed it out the door. Ten seconds later it was back on my lap. We got into a sort of dance, this cat and I. I tossed it out because I was trying to meditate, to get enlightened. But the cat kept returning. Finally, after about a half-hour, I had to surrender. There was nothing else to do. I sat there, the cat came back in, and it got on my lap. But I did not do anything. I just let go. Thirty seconds later the cat got up and walked out. So, you see, our teachers come in many forms.",
    author: "Joseph Goldstein"
  },

  {
    text: "Love, compassion, and peace do not belong to any religion or tradition. They are qualities in each one of us — qualities of our hearts and minds.",
    author: "Joseph Goldstein"
  },

  {
    text: "The most intelligent men, like the strongest, find their happiness where others would find only disaster: in the labyrinth, in being hard with themselves and with others, in effort; their delight is in self-mastery; in them asceticism becomes second nature, a necessity, an instinct. They regard a difficult task as a privilege; it is to them a recreation to play with burdens that would crush all others.",
    author: "Friedrich Nietzsche"
  },

  {
    text: "Snow was falling,\nso much like stars\nfilling the dark trees\nthat one could easily imagine\nits reason for being was nothing more\nthan prettiness.",
    author: "Mary Oliver"
  },


  {
    text: "There are two means of refuge from the misery of life — music and cats.",
    author: "Albert Schweitzer"
  },

  {
    text: "Never look down on anybody unless you're helping him up.",
    author: "Jesse Jackson"
  },

  {
    text: "A man must be willing to die for justice. Death is an inescapable reality and men die daily, but good deeds live forever.",
    author: "Jesse Jackson"
  },

];
