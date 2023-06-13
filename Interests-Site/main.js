let btn = document.getElementById('quotebutton');
let output = document.getElementById('quoteoutput');
let quotes = 
['"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela', 
'"If life were predictable it would cease to be life, and be without flavor." -Eleanor Roosevelt', 
'"It is during our darkest moments that we must focus to see the light." -Aristotle',
'"The purpose of our lives is to be happy." -Dalai Lama', 
'"At the end of the day, the day ends. Drink some water ;)"-Maker of this website',
'"Only a life lived for others is a life worthwhile." -Albert Einstein', 
'"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose." -Dr. Seuss',
'"I find that the harder I work, the more luck I seem to have." -Thomas Jefferson', 
'“Strength does not come from physical capacity. It comes from an indomitable will.”-Mahatma Gandhi',
'“The best way to predict the future is to create it.”-Abraham Lincoln', 
'“Rome was not built in a day, but they worked on it every single day.”',
'“All progress takes place outside the comfort zone.”-Michael John Bobak', 
'“Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.”-Earl Nightingale',
'“I do not count my sit-ups. I only start counting when it starts hurting because they are the only ones that count.”-Muhammad Ali', 
'"The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever."-Konstantin Tsiolkovsky',
'“What we do in life echoes in eternity.”-Gladiator', 
'“Carpe diem. Seize the day, boys. Make your lives extraordinary.”-Dead Poets Society',
'"Perfectly balanced, as all things should be"- Thanos',
'"Banana Milkshake tastes good"- Nas&Cb'
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML = randomQuote;
})