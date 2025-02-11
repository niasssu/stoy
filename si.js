/*	// you're right. i'm sorry. i fixed it (it is now a mulitline comment so it won't run)
document.title = `he's clueless!`;
let links = [
	"https://www.youtube.com/watch?v=BjoLQvj7lAE",
	"https://www.youtube.com/watch?v=qF1DTK4U1AM",
	"https://www.youtube.com/watch?v=51GIxXFKbzk",
	"https://www.youtube.com/watch?v=75GL-BYZFfY",
	"https://www.youtube.com/watch?v=cPJUBQd-PNM",
	"https://www.youtube.com/watch?v=E286KqzpkKw",
	"https://www.youtube.com/watch?v=Soy4jGPHr3g",
	"https://www.youtube.com/watch?v=vqiULULdvMA",
	"https://www.youtube.com/watch?v=1pDM6fQUfJs",
	"https://www.youtube.com/watch?v=PZab_uWmiqY",
	"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
	"https://www.youtube.com/watch?v=hlNWfslbSGA",
	"https://www.youtube.com/watch?v=qYAmduGAwBQ",
	"https://www.youtube.com/watch?v=AynqwMwznb4",
	"https://www.youtube.com/watch?v=CjvK6uwv9bI"
];

if (navigator.userAgent.includes('Chrome'))	{

	document.getElementById('stuff').innerHTML = `<p>nope. too much google.</p>`;
	window.setTimeout(() => {
		window.location.href = links[Math.floor(Math.random()*links.length)];
	}, 1000);
	
} else	{ document.title = `stoy`;
links = null;
*/

	// here's the actual code:
const stuff = document.getElementById('stuff');


	// save system
let save = localStorage.getItem('savedata');
function load()	{
	!save ? save = {} : save = JSON.parse(save);
	save.name ??= window.prompt('name yourself, if you\'d like.') ?? '';
	save.visit ??= 0;
	
	save.visit +=1;
	localStorage.setItem('savedata', JSON.stringify(save));
	return save;
}
save = new Object(load());


	// collar variable
let collar;
save.name ? collar = true : collar = false;


	// the "content", as it's called:
let ary = [
	[
	// ary[0] cannot be accessed through normal means, only by tampering with the "cookie" or looking in this code directly.
	`<p>of course, i'm not making save.visit have a default value of -1. this array does have to exist in the code.</p>`,
	`<p>it's inevitable that someone will find this. either by editing their localStorage or looking through this code.<br>either way, congratulations. are you happy?</p>`
	],
	
	[
	// ary[1] is the actual beginning. if only i could begin...
	`<p class="txSoft">there's nothing here yet${collar ? `, ${save.name}` : ''}.</p>`
	]
];


	// extra stuff that requires ary
if (!ary[save.visit])	{
	save.visit = ary.length - 1;
	localStorage.setItem('savedata', JSON.stringify(save));
}

let index = 0;
document.body.addEventListener("keydown", () =>	{
	stuff.innerHTML = ary[save.visit][index] ?? `<p class="txSoft">${
	ary[save.visit + 1] ? `you've reached the end of part ${save.visit}.` : `EOF`
	}</p>`;
	index++;
});
//}
