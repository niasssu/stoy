/*	// dw much abt this top part, this is just to troll chromium users
document.title = `he's clueless!`;
let links = [ // changed some links and removed one.
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

	// nara and collar variables
let nara;
let collar;
save.name ? nara = `, ${save.name}` : nara = '';
nara ? collar = true : collar = false;

let ary = [
	[
	// ary[0]
	`<p>this shouldn't be possible. contact niassu@protonmail.com to notify them of this error.</p>`,
	`<p>of course, i'm not making save.visit have a default value of -1. so this array does have to exist in the code.</p>`,
	`<p>it's inevitable that someone will find this. either by editing their localStorage or looking through this code.<br>either way, congratulations. are you happy?</p>`
	],
	
	[
	// ary[1] is the actual beginning.
	// not sure what to write about...
	`<p class="txSoft">this is just a test for now.</p>`,
	`<p class="txSoft">${
		nara ? `your name's ${save.name}.` : 'you didn\'t provide a name. that\'s fine though, you don\'t need one.'
	}</p>`,
	`<p class="txSoft">there's nothing here yet. i don't really know where to begin on this, or even what i want to use it for. it's just here now.</p>`,
	`<p class="txSoft">when you're done here, you should delete the localStorage "cookie" associated with this webpage. so you can start from the beginning.</p><p class="txSoft">if you don't know how to do that, figure it out.</p>`,
	]
];

if (!ary[save.visit])	{
	save.visit = ary.length - 1;
	localStorage.setItem('savedata', JSON.stringify(save));
}

let index = 0;
document.body.addEventListener("keydown", () =>	{
	stuff.innerHTML = ary[save.visit][index] ?? `<p class="txSoft">${
	ary[save.visit + 1] ? `you've reached the end of part ${save.visit}. reload to see the next part.` : `EOF`}</p>`;
	index++;
});
//}
