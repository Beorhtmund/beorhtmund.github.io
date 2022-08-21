const codes = document.getElementsByTagName('code');

const html = [
    '<h1>My First Heading</h1>',
    '<p>My first paragraph.</p>',
    '<a href="url">link text</a>',
    '<img src="pic_trulli.jpg" alt="Italian Trulli">',
    '<li>Coffee</li>'
];

const num = 5;

for (let i = 0; i < num; i++) {
    codes[i].innerText = html[i];
}