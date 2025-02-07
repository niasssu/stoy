	// dw much abt this top part, this is just to troll chromium users
let links = [
	"https://www.youtube.com/watch?v=BjoLQvj7lAE",	// jaidenanimations pokemon too many types
	"https://www.youtube.com/watch?v=qF1DTK4U1AM",	// jaidenanimations aroace
	"https://www.youtube.com/watch?v=51GIxXFKbzk",	// aiobahn internet yamero
	"https://www.youtube.com/watch?v=Tnw8cRgre7I",	// mafumafu haro- deisutopia
	"https://www.youtube.com/watch?v=75GL-BYZFfY",	// mafumafu supa nuko ni naritai
	"https://www.youtube.com/watch?v=KRSzKCFsTVA",	// mafumafu supa nuko ni narenkatta
	"https://www.youtube.com/watch?v=E286KqzpkKw",	// soramafuurasaka RPG
	"https://www.youtube.com/watch?v=Soy4jGPHr3g",	// kasane teto spinning and singing a japanese remix of korobeiniki // "tetoris"
	"https://www.youtube.com/watch?v=vqiULULdvMA",	// wonderful oppurtunity bouken no shou ga kiemashita
	"https://www.youtube.com/watch?v=1st0XSY0VKQ",	// wonderful oppurtunity rimokon
	"https://www.youtube.com/watch?v=PZab_uWmiqY",	// ferd myu-jikku izu ha-do
	"https://www.youtube.com/watch?v=dQw4w9WgXcQ",	// the real rickroll
	"https://www.youtube.com/watch?v=hlNWfslbSGA",	// nanawoakari gyakusou shoujo
	"https://www.youtube.com/watch?v=qYAmduGAwBQ",	// wonderful opportunity okochyama sensou
	"https://www.youtube.com/watch?v=AynqwMwznb4",	// hkmori lost
	"https://www.youtube.com/watch?v=CjvK6uwv9bI"	// nchproductions shikanokonokonokokoshitantan
];

if (navigator.userAgent.includes('Chrome'))	{
	
	window.setTimeout(() => {
		window.location.href = links[Math.floor(Math.random()*links.length)];
	}, 1000);
	
} else	{ links = null;

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
	`<p>it's inevitable that someone will find this. either by random chance or by looking through this code and editing their localStorage.</p><p>either way, congratulations. <span class="txcyapnk">are you happy?</span></p>`
	],
	
	[
	// ary[1] is the actual beginning.
	// not sure what to write about...
	`<p class="txSoft">this is a test.</p>`,
	`<p class="txSoft">${
		nara ? `your name's ${save.name}.` : 'you didn\'t provide a name. that\'s fine though, you don\'t need one.'
	}</p>`,
	`<p class="txSoft">i'm not sure what to write about.`
	]
];

if (!ary[save.visit])	{
	save.visit = ary.length - 1;
	localStorage.setItem('savedata', JSON.stringify(save));
}

let index = 0;
document.body.addEventListener("keydown", () =>	{
	stuff.innerHTML = ary[save.visit][index] ?? `<p class="txSoft">you've reached the end of ary[${save.visit}].</p>`; 
	index++;
});
}