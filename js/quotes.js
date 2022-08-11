const quotes = [
    {
        quote : "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다.",
        author : "랄프 왈도 에머슨",
    },
    {
        quote : " 마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author : "이소룡",
    },
    {
        quote : "흔히 사람들은 기회를 기다리고 있지만 기회는 기다리는 사람에게 잡히지 않는 법이다. 우리는 기회를 기다리는 사람이 되기 전에 기회를 얻을 수 있는 실력을 갖춰야 한다. 일에 더 열중하는 사람이 되어야한다.",
        author : "안창호",
    },
    {
        quote : "나는 모든 긍정적인 것들을 끌어당긴다.",
        author : "-",
    },
    {
        quote : "나는 매일 발전한다.",
        author : "-",
    },
    {
        quote : "내게 주어진 고통은 성장의 원동력이 된다.",
        author : "-",
    },
    {
        quote : "같은 실수를 두려워하되새로운 실수를 두려워하지 마라. 실수는 곧 경험이다.",
        author : "도서 ‘어떤 하루’ 中",
    },
    {
        quote : "인생은 곱셈이다.어떤 기회가 와도 내가 제로면 아무런 의미가 없다.",
        author : "나카무라 미츠루",
    },
    {
        quote : "The only thing worse than starting something and failing … is not starting something.",
        author : "Seth Godin",
    },
    {
        quote : "Despite the forecast, live like it’s spring.",
        author : "Lilly Pulitzer",
    },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() *quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;