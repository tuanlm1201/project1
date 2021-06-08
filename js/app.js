var content = [
    {
        author: '- John',
        desc: 'The author author of the document that'
    },
    {
        author: '- Benjamin Franklin',
        desc: 'I didn’t fail the test. I just found 100 ways to do it wrong.'
    },
    {
        author: '- Woody Allen',
        desc: 'Eighty percent of success is showing up.'
    },
    {
        author: 'Grandam Moses',
        desc: 'Life is what we make it, always has been, always will be.'
    }
]

function randomQuote() {

    //Số nguyên ngẫu nhiên
    var numberRD = Math.floor(Math.random() * content.length);

    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);

    //lấy ngẫu nhiên mã màu
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    //Đổi màu background
    document.body.style.backgroundColor = bgColor;
    
    //Đổi màu font author
    document.querySelector('#author').style.color = bgColor;

    //Lấy ngẫu nhiễu tác giả theo index
    document.querySelector('#author').innerHTML = content[numberRD].author;

    //Đổi màu font content
    document.querySelector('.content').style.color = bgColor;

    //Lấy nội dung desc theo index
    document.querySelector('.content').innerHTML = "<i class=\"fa fa\-quote\-left\"><\/i>" + "&nbsp;" + content[numberRD].desc;
    
    //Đổi màu background các nút
    document.querySelector('.btn-social').style.backgroundColor = bgColor;
    document.querySelector('.btn-random').style.backgroundColor = bgColor;
    document.body.style.transition = 'ease-in 1s';
    document.querySelector('.btn').style.transition = 'ease-in 1s';
    document.querySelector('.btn-random').style.transition = 'ease-in 1s';
}
randomQuote();
/*




//Arr of quotes
const quoteStatements = [
{
statement: “I think the perfection of love is that it’s not perfect.”,
author: “Taylor Swift”
},
{
statement: “The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.”,
author: “Helen Keller”
},
{
statement: “Life without love is like a tree without blossoms or fruit.”,
author: “Khalil Gibran”
},
{
statement: “Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.”,
author: “Maya Angelou”
},
{
statement: “To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life.”,
author: “Victor Hugo”
},
{
statement: “You are my heart, my life, my one and only thought.”,
author: “Arthur Conan Doyle”
},
{
statement: “To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life.”,
author: “Victor Hugo”
},
{
statement
*/