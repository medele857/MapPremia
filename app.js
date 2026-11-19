import {ready,db,auth,FS,AU} from './fb.js';
export const DEFAULT=[
 {id:'best',t:'Лучшая карта',d:'Главная номинация премии. Текст-заглушка.',c:'#b8f25b'},
 {id:'scary',t:'Самая страшная карта',d:'Текст-заглушка описания номинации.',c:'#ff6b5e'},
 {id:'story',t:'Лучшая сюжетная карта',d:'Текст-заглушка описания номинации.',c:'#5bc8ff'},
 {id:'sound',t:'Карта с лучшими звуками',d:'Текст-заглушка описания номинации.',c:'#ffc83d'},
 {id:'mode',t:'Лучший режим',d:'Текст-заглушка описания номинации.',c:'#ff7ac8'},
 {id:'multi',t:'Лучший мультиплеер режим',d:'Текст-заглушка описания номинации.',c:'#6c8cff'},
 {id:'collab',t:'Лучшая коллаба',d:'Текст-заглушка описания номинации.',c:'#ff9f43'},
 {id:'funny',t:'Самая смешная карта',d:'Текст-заглушка описания номинации.',c:'#ffe14d'},
 {id:'innovation',t:'Инновация года',d:'Текст-заглушка описания номинации.',c:'#34e0b4'},
 {id:'visuals',t:'Самые лучшие визуалы',d:'Текст-заглушка описания номинации.',c:'#e879f9'},
 {id:'mechanics',t:'Самые лучшие механики',d:'Текст-заглушка описания номинации.',c:'#4dd0e1'},
 {id:'modded',t:'Лучшая модовая карта',d:'Текст-заглушка описания номинации.',c:'#b08cff'},
 {id:'vanilla',t:'Лучшая ванильная карта',d:'Текст-заглушка описания номинации.',c:'#8fd16b'}
];
export const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl=u=>/^https?:\/\//i.test(u)?esc(u):'#';
export async function getNoms(){
  if(!ready)return DEFAULT;
  try{const s=await FS.getDocs(FS.query(FS.collection(db,'nominations'),FS.orderBy('order')));
    const l=s.docs.map(d=>({id:d.id,...d.data()}));return l.length?l:DEFAULT}catch(e){return DEFAULT}
}
async function getEntries(){
  if(!ready)return[];
  try{return (await FS.getDocs(FS.collection(db,'entries'))).docs.map(d=>({id:d.id,...d.data()}))}catch(e){return[]}
}
const END=new Date('2026-12-01T00:00:00');
const $=s=>document.querySelector(s);
const page=document.body.dataset.page;
const hid=s=>{let x=0;for(const c of String(s))x=(x*31+c.charCodeAt(0))>>>0;return x.toString(36)};
// звуки: синтезируются в браузере (WebAudio), файлов не нужно
let snd=true;try{snd=localStorage.getItem('mp-snd')!=='0'}catch(e){}
let AC=null;
const SFX={click:[[260,.05,'square',0],[180,.06,'square',.05]],tick:[[880,.025,'square',0]],pop:[[600,.05,'triangle',0],[900,.08,'triangle',.05]],ok:[[523,.1,'triangle',0],[659,.1,'triangle',.1],[784,.1,'triangle',.2],[1047,.25,'triangle',.3]],err:[[120,.25,'sawtooth',0]]};
export function sfx(k){if(!snd)return;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();const t0=AC.currentTime;for(const [f,d,w,s] of SFX[k]){const o=AC.createOscillator(),g=AC.createGain();o.type=w;o.frequency.value=f;g.gain.setValueAtTime(k==='tick'?.02:.07,t0+s);g.gain.exponentialRampToValueAtTime(.0001,t0+s+d);o.connect(g);g.connect(AC.destination);o.start(t0+s);o.stop(t0+s+d+.02)}}catch(e){}}

// масштаб сайта
let sc=100;try{sc=+localStorage.getItem('mlay-scale')||100}catch(e){}
function setScale(v){sc=Math.min(130,Math.max(80,v));document.documentElement.style.fontSize=sc+'%';
  const l=$('#sv');if(l)l.textContent=sc+'%';try{localStorage.setItem('mlay-scale',sc)}catch(e){}}
setScale(sc);

const links=[['index.html','Главная','home'],['nominations.html','Номинации','nominations'],['apply.html','Подать заявку','apply'],['rules.html','Правила','rules']];
const cur=page==='nomination'?'nominations':page;
document.body.insertAdjacentHTML('afterbegin',`<header><a class="logo" href="index.html">МапПремия</a><nav>${links.map(l=>`<a href="${l[0]}"${l[2]===cur?' class="on"':''}>${l[1]}</a>`).join('')}</nav>
<div class="scale" role="group" aria-label="Масштаб сайта"><button id="sm" aria-label="Уменьшить">-</button><button id="sv" title="Сбросить масштаб">100%</button><button id="sp" aria-label="Увеличить">+</button></div><button class="btn ghost sndbtn" id="snd"></button></header>`);
$('#sm').onclick=()=>setScale(sc-10);$('#sp').onclick=()=>setScale(sc+10);$('#sv').onclick=()=>setScale(100);setScale(sc);
const sb=$('#snd'),lbl=()=>sb.textContent=snd?'Звук: вкл':'Звук: выкл';lbl();
sb.onclick=()=>{snd=!snd;try{localStorage.setItem('mp-snd',snd?'1':'0')}catch(e){}lbl();sfx('pop')};
let lastH=null;
document.addEventListener('click',e=>{const t=e.target.closest('a,button,label');if(t&&t.id!=='snd')sfx(t.classList.contains('sh')?'pop':'click')},true);
document.addEventListener('mouseover',e=>{const t=e.target.closest('.nom,.card,nav a,.btn');if(t&&t!==lastH)sfx('tick');lastH=t});
const toast=m=>{let t=$('#toast');if(!t){document.body.insertAdjacentHTML('beforeend','<div id="toast" role="status"></div>');t=$('#toast')}t.textContent=m;t.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('on'),2200)};
document.body.insertAdjacentHTML('beforeend',`<footer>МапПремия · Премия лучших майнкрафт карт · Текст-заглушка для футера · <a href="admin.html">Управление</a></footer><div id="timer"><i></i>Текст-заглушка этапа: <b id="tl">—</b></div>`);
function tick(){const d=END-new Date();$('#tl').textContent=d>0?`${Math.floor(d/864e5)} д ${Math.floor(d%864e5/36e5)} ч`:'завершён'}
tick();setInterval(tick,6e4);

if(page==='nominations'){
  const [noms,ent]=await Promise.all([getNoms(),getEntries()]);
  const slots=Math.max(9,Math.ceil(noms.length/3)*3);
  $('#noms').innerHTML=noms.map(n=>`<a class="nom" data-fx="${esc(n.id)}" style="--c:${esc(n.c)}" href="nomination.html?id=${encodeURIComponent(n.id)}"><span class="go">→</span><img class="cov" src="covers/${encodeURIComponent(n.id)}.png" alt="" loading="lazy" onload="this.parentNode.classList.add('hascov')" onerror="this.remove()">${n.id==='sound'?'<span class="eq"><i></i><i></i><i></i><i></i><i></i></span>':''}<h3>${esc(n.t)}</h3><small>${ent.filter(e=>(e.noms||[]).includes(n.id)).length} участников</small></a>`).join('')
   +Array.from({length:slots-noms.length},()=>`<div class="nom soon"><h3>Скоро новая номинация</h3><small>Текст-заглушка</small></div>`).join('');
}
if(page==='nomination'){
  const [noms,ent]=await Promise.all([getNoms(),getEntries()]);
  const n=noms.find(x=>x.id===new URLSearchParams(location.search).get('id'))||noms[0];
  document.title=n.t+' — МапПремия';
  $('#nhead').style.setProperty('--c',n.c);$('#grid').style.setProperty('--c',n.c);
  $('#nhead').innerHTML=`<img class="ncov" src="covers/${encodeURIComponent(n.id)}.png" alt="" onerror="this.remove()"><h2>${esc(n.t)}</h2><p>${esc(n.d)}</p>`;
  const list=ent.filter(e=>(e.noms||[]).includes(n.id));
  $('#grid').innerHTML=list.length?list.map(e=>`<div class="card" id="e-${hid(e.id)}"><a class="img" href="${safeUrl(e.link)}" target="_blank" rel="noopener">${/^https?:\/\//i.test(e.img||'')?`<img src="${esc(e.img)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`:''}</a><div class="t"><b>${esc(e.name)}</b><span>${esc(e.author)}</span>${e.desc?`<p>${esc(e.desc)}</p>`:''}<div class="acts"><a class="btn" href="${safeUrl(e.link)}" target="_blank" rel="noopener">Minecraft Inside</a><button class="btn ghost sh" data-h="${hid(e.id)}">Поделиться</button></div></div></div>`).join('')
   :'<p class="text">Участников пока нет. Текст-заглушка.</p>';
  $('#grid').addEventListener('click',async e=>{const b=e.target.closest('.sh');if(!b)return;
    const url=location.origin+location.pathname+'?id='+encodeURIComponent(n.id)+'#e-'+b.dataset.h,name=b.closest('.card').querySelector('b').textContent,text='Голосуй за «'+name+'» в номинации «'+n.t+'» — МапПремия';
    try{if(navigator.share){await navigator.share({title:'МапПремия',text,url});return}}catch(err){if(err&&err.name==='AbortError')return}
    try{await navigator.clipboard.writeText(url);toast('Ссылка скопирована')}catch(err){prompt('Скопируй ссылку:',url)}});
  const hl=location.hash.startsWith('#e-')&&document.getElementById(location.hash.slice(1));if(hl){hl.classList.add('hl');hl.scrollIntoView({block:'center'})}
}
if(page==='apply'){
  const noms=await getNoms();
  $('#formNoms').insertAdjacentHTML('beforeend',noms.map(n=>`<label><input type="checkbox" name="noms" value="${esc(n.id)}">${esc(n.t)}</label>`).join(''));
  const msg=t=>$('#msg').textContent=t,form=$('#form'),ab=$('#authbox');
  if(!ready)ab.innerHTML='<p class="text">Приём заявок ещё не подключён.</p>';
  else AU.onAuthStateChanged(auth,u=>{
    form.hidden=!u;
    if(!u){ab.innerHTML='<p class="text">Чтобы подать заявку, войди через Google. Так мы защищаемся от спама.</p><button class="btn" id="gin">Войти через Google</button>';
      $('#gin').onclick=()=>AU.signInWithPopup(auth,new AU.GoogleAuthProvider()).catch(()=>{});}
    else{ab.innerHTML=`<p class="text">Вы вошли как ${esc(u.email)} <button class="btn ghost" id="gout">Выйти</button></p>`;$('#gout').onclick=()=>AU.signOut(auth)}
  });
  form.addEventListener('submit',async e=>{
    e.preventDefault();const f=e.target,fd=new FormData(f),g=(k,m)=>String(fd.get(k)||'').trim().slice(0,m),u=ready&&auth.currentUser;
    if(!u)return msg('Сначала войди через Google.');
    let h='';try{h=new URL(g('link',500)).hostname}catch(err){}
    if(!/(^|\.)minecraft-inside\.ru$/.test(h)){sfx('err');return msg('Нужна ссылка на карту на minecraft-inside.ru')}
    if(!fd.getAll('noms').length)return msg('Выбери хотя бы одну номинацию.');
    const b=f.querySelector('button');b.disabled=true;msg('');
    const data={name:g('name',200),author:g('author',200),version:g('version',50),link:g('link',500),date:g('date',20),
      noms:fd.getAll('noms'),media:g('media',2000),desc:g('desc',2000),contact:g('contact',200),
      uid:u.uid,email:u.email,status:'new',created:FS.serverTimestamp()};
    // не больше 5 заявок с одного аккаунта: id = uid_1 ... uid_5, занятые слоты база отклоняет
    let ok=false;
    for(let i=1;i<=5&&!ok;i++){try{await FS.setDoc(FS.doc(db,'applications',u.uid+'_'+i),data);ok=true}catch(err){}}
    if(ok){sfx('ok');f.reset();msg('Заявка отправлена. Мы проверим её и свяжемся с тобой.')}
    else sfx('err'),msg('Не удалось отправить заявку. Возможно, ты уже подал максимум (5 заявок с одного аккаунта).');
    b.disabled=false;
  });
}

if(page==='home'){
  const [noms,ent]=await Promise.all([getNoms(),getEntries()]);
  const authors=new Set(ent.map(e=>String(e.author||'').trim().toLowerCase()).filter(Boolean)).size;
  const items=[[noms.length,'номинаций'],[ent.length,'карт'],[authors,'авторов']].filter(x=>x[0]>0);
  $('#stats').innerHTML=items.map(([v,l])=>`<div><b data-v="${v}">0</b><span>${l}</span></div>`).join('');
  const still=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const io=new IntersectionObserver(es=>es.forEach(x=>{
    if(!x.isIntersecting)return;io.unobserve(x.target);
    const el=x.target,to=+el.dataset.v,t0=performance.now();
    const f=t=>{const k=still?1:Math.min(1,(t-t0)/1200);el.textContent=Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)};
    requestAnimationFrame(f);
  }),{threshold:.6});
  document.querySelectorAll('[data-v]').forEach(e=>io.observe(e));
}

document.getElementById('load')?.classList.add('done');setTimeout(()=>document.getElementById('load')?.remove(),500);
