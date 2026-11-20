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
export const ICONS={
 best:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNklEQVR4nO2QPUoDURSFv3lOSBgtYpPGQqJlmhTRfakrcAkWYhMVXIErULQUQRFFC0EwBiXmzzj/M+9di0kcgnED4qkO3+Wdd8+FvyPxtmUW+43/CPg8r8nd4crUYHBSk/v9pSnmXqzJ1W7O1MQEvlCpwO1BVQCS64bEXsBCuchNM2PBZUMGrR7FYp5pT0ySGJQ2LJZhcFaX/nMX1wXHgXkHeqd1eXvsAhCFMwIQ4WNoUArE9DEGdAqeC8aA997HAsIQLCsP+K4QhYaCrdk7ahP4mijUVLdaLG+0EKPRqWan2aZga5A8wJqYl+NVGXZ8jAGlwB7vZgykaebTNKs0GmrWNzvWVAV3JMSRAaBUgjCAOM68Utljey7jaTLjBk8Pr8ShJo7z320bfH/cVWXbOE52l3/l+gKZ+6flB3WyKAAAAABJRU5ErkJggg==',
 scary:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABnElEQVR4nMWSP08UURTFf+/5ZpcdEtbChFjRIDYWFPAlMDZWFtjZaGHMxobKWBgTKytjYYyhIIFEKCB8BAprQ0GIqyWwm8Bmdmd8M/Ouxc3OLBbQ6W3O/Xty37kP/reZvxPh+7L4rATAuTqfJHDSPefu4x+XZqpg+G1JCCX+YkCSwNQUZJmi99oTx2CnZzj9ec6d1a6pCC4OliTt9SkKsFabGw0lGON4o6JQP8tgYbVrLEDST0hHwg0r5F4w1DhMhLIQIqdYFkKzIeQjZXUAjUgYeuHp61/V2z6/mWOY6NqjEZdqH1/NMRiobwGsFYwJAOz2VJY8D4gE0lRxsmZMIIqkJihL4XemiQe3FHOva0dOnzJZkyCV+gZgpxPLvcWbFAWEoEI6Bx/WTwB48mgWUAHjWHuOD3vcf+dNdcbtTizzC22gPp336ltLdaEQ4Oiwz8P3vj7j2PbXWjJ7u119IOdUQNVJhwmB5c5pNWcnCVbepqbVbvFl+4yyDHzaOkMksLFXYxDhStt50RSAzWeK4/jrc8Xdl81rGP61/QFL/M+pCcDjQwAAAABJRU5ErkJggg==',
 story:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABs0lEQVR4nMWSQWsTQRiGn51st82CoOChakCKxRIQFdT/0EO9eBLEi4dSQYsGT4qKglTUkxSq/ojYXkT/gCeVHqSFVi1r0xiN0tRuN9vZyXweRtLmoOlFfE/zffPNy/vwDfxveQDJm1PiqxbGQBCAMRDNNxg6/8nrapDNnpTax1V8H5RyBnEMfX1QXbEcG136u0n9VVGGi8hwEamUB6Q6PdCu303ul24J/CDYmskpQWs6aoCfr09IT84hGgNhCMsLawyeW/K8ry+GZDNOSVN3YS1o7c5xDAcO72FlYRVwiAC+72Y2M4VKU2H0doTnWdbXLc2mpbfXcuFGhIiluviD8YmI8YmIXM6SZZaxO67eaDTx599WeHKrwNjd5Q62yesFFufqFI/ubfc2YiEMtyP+XuPzUihHju/GGIegFHyY+87pR9qrzAzKWj0BtvitdRjfai3aKyqXQlHScow9wsgD7QF8Lh+SpJFw5eGXjoT3L+/D6G0Gf1L5al6evWxy72I/1roESQI3n9a4NBJ0NwCYLuWlcHBX+7MpBe9nG5yd0t6ODABmruVF4RAzDWce6x2//bf6BV9lwPMX0EJvAAAAAElFTkSuQmCC',
 sound:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFklEQVR4nNWSL08DMRiHn7trsk7M8ydo9AQOSbCgcHwJFF+CBMWHwKBQkMk5EhwThAQI2eAIXOA2br22L2Jsy3EVc4RXNU/7Pvm9beGvKwpBc70h3jqUmrM8B63h/iZjff9u1qdCgvfBkNgVdDt9tAZjJnxza5k8Kypng4IkEV4eC3aOvioJX7cbIr4qiEOCOBKslRr3TvC+yoOC0VCIorrAjAWRBQS64XG2zlVS50HB2BAcYTgCrRdIYMt6M0zv4Feq6SLttEV+8r09pJRmIvnstsWVFmthcDvnNcHVZY+l1RbGgFLQf8oAuDjtsbLWIo7Be0ifs4qg8s7nh03JPxwRsHdiZntnB03x1pHEsHtsgr/3H9c3lNSCweQwY6gAAAAASUVORK5CYII=',
 mode:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZklEQVR4nNWQvS4EURiGn/O3VkEiZhMXIAqJKFyFVuIKJFsIiUholBLREAmJUGh0FEo34AZEohChEL8zazEzu2Znzoxi2F2SDa23Ouc77/t+Jw/8e4n2i3c8mH2dnfHLP72JnwZpBJlNydJveaTWZIBNEmRbiWw5unl2A5ZXr6gFMTU/4s2r4VdC6rWYl0pAeeGC+2sf7zFsxQDO9wayp1uXtR2Xx1eYWrohsaAMSKMIfMvq9h0rswPsHrqEQZ5pFhQlyDRlsVziObBszJV48SJubxo83b9Tf4uYnnSYW3+gPOFgYwtxG4PTrf4MIE0EQqYIqTg5cenrFUQRaJkxNOxgjEWgkDrnOTpTERrAGINtJEiVf2pkxv0k2AQPeJxtOvkgE6iCbjEAUAWNKmgasaWTGrFt+r5BLHZBPYyohxFj81XRqWBsviq+fMWufKYBDo4ecH2wccflTe0fVVEGSj2/e/+JPgD7YpvlqmPrAgAAAABJRU5ErkJggg==',
 multi:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB+ElEQVR4nI2Sv2tTURTHP/f9Mr7GreisQ/fE6H+gg1joIDhInRzc3RV10tFNR8UuLt3FRQpi2oBExYIRoqZpG0jIs3kv7728d4/DzQ+jBXPgwuX8+Nxzv+fAghbtXJCvL8/J335rkeKwWpG012NpSfFt4+wcZA4w3KlIWivJ7vNZUl6vSNztEQSCbQvFU4oPz2bxKWDwviK9H12C/T4nPJhA3rz6wuBIQARLCfFQaDXa/3aQ/BqQZUIcC44j5HEMwOWHoarXOmhtYttbba4+TtSkzplc4qFpMU3B8yDLZl9bfRSq13dFwqOca09mxXOA7bc/KV9cxlIQhbD3vTcn5KUH0VzhxOacm3d8QWs8V7jyR5v9rfPiWBlaQ+NTQPl2Ux0LOM6SWlmaHw/xPBgMwPchF5eVdQOZAqJqWeLQvGJZ4Dhw7/5nAG5dPwMYXXwftAZle6zcbCoHYPCuJLvVfZyxIoUCpCmsr53mxWYH2xayDFwXkmT8rcMIGI+x2w4oFATLkukotRYKBbMvTzc6pKkQRSYnjgXbNiArqpYk6IREoaBzIRsJaWLuOhdurC6bTBE81/j8k0ISG7i11+gzGgmjkaCU2QXXFYbDmQ8gzwURIc9NTI3Vc+rVA7I0x/ehFZslSlMjVLEI44XkoNVHa6ZH9P/mt6D9BkOSJASF/QyFAAAAAElFTkSuQmCC',
 collab:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABnklEQVR4nM2SP2sUURTFf/Myu5uNqEU+gEjYWoLJt1hS2Km9lYWFhYVNSg1YWOcriISA2AlKLEQkJEgEScIqu+uybrLj/H8zc6/Fi4MLkkrQC5d34ZzLOefy4L8ujddV43U9j2POW/7T/NcdeL+G6N2qNv0Ka2F4OKVz+8j7nVjurarNKsoSxr0pSzcd7gHkH1Z0dHTCwgKIgLWQZ8rSrWMPIHi7osHgBHMW2Pdh9E25dufYM9Od6xr0v4MKPwIhiYVmQzjYHdTqb7YOaDYE4wk2F1BhcVHZ27yqpggjykLIUrdYFkK/l9F9nNcRuo9ir3WhRRQ6jlSuiyTFpIkwPXVAljrg4mWfFw/a9fFePryk435MWUgthgpVCd5gu6PhJCHLXDYAm5Us3x3NHPHL846mQYLI2VFLxzPvX/cpC+cAdRn9hmF/80rtYPxqWSeDiCh0nCR27/DrKWZtI/F6h1Oi0NmzubP4eX9Yq+9sf0IqwZ9znPmW8HF3QnfDerXNZ/faOt90/2DOwNoTOxNh635bDRUAhYUbT2fxf1c/AYErCb30WfwbAAAAAElFTkSuQmCC',
 funny:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABn0lEQVR4nMWSv2sUQRTHP7N7t05OwSogWBhERbAQ/xMNljYBo0iaYCEkIPkHxB8giI2VnWAnKW3tLKxszhV/rCIhl7v1Zm5md57FcLu3xkYQfPCY4TtvvvN93zfwr8IvK/HLSv62Ts3BxaJ69xIAvV6LlSUcvfK2Q9b/IeoQQfn8NGUJWoO1cXUung0GcOzasEOQLDJ+f7qCMYE0DSgVUyRQ1zGNCRRPVjoq1HxTvDoveItzkGURC6F9XWuoqpjT8YwLNwoF0CiovFBXws2dnLWtHAnCz1Lo9wTvhLWtnPW7OXUlWNsqaGxKEmE8Ca3bPiACxoAsWOx9IE1boGlh+OKs4AzWti2cuv0FgA/3TpJlcRKDAUxGFRc3vqmOAq2Fg0l81fvuCL0PeA91HdP5VkFT9ub1V86cOx7Ho2Fm4d3OCbSGNBGqCvq9iH/K9xuCxsTV+1P1+eOI7VsFZhoNPZJFIydjYWaFO+sFw/d7rD50TevNZh4vN5fk2SPzOwzA9c2Myw9c584hAoDd7SUZj2q0bv9CmsDVx+6P9f83fgGEFtK6EJXKSAAAAABJRU5ErkJggg==',
 innovation:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcElEQVR4nKWSvy9DURTHP699qrowSGdB/EjExC6x2CwSsUgkZkNjsFj8CQQJi4FBYpHYzMTQyWCQIKKKUkTffX3vtb3HcDXV6PMjvsnJyfmec7/33HsO/BNWI/LtZFgiVIjHoVw29nD1StfU5Zf6L0TldEieb14AsO0a7zjgKk3v9FXdmbqgmB4SlcvjOBCPg+cZHwQmn0hANguDszUR+7PA26ND4ArRiFG2ANFQKX9c4ILv+HUdRz4HdlQoBYKFkBydwUJQjlApC0228dcXz+ECWguWpVFKkxpfQinN6laGUklTKGjub30mVnwrVODoMEPRFZpjAsDGThYA0YZrT9rszbVI6CcC7M8npG+gzahHjAUBxGKQPn5ici0In0IVBwsJ6e5p/XiW2YPzszwTy8HPe1DF5W6n5O9cM05XM5zKNay1G5EAK5vXYanfdXC+3SHqReF54HvCyOLT3zpY37r5VQffYqwfGetHfq78B94BmOagcqOglI8AAAAASUVORK5CYII=',
 visuals:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/klEQVR4nM2SsUoDQRCGvxsmS2KrYC/oGwhpfAcbKxvxAVKl8gksrspz+AzWKYQ0QhBBDTZBLZK7iwS5vbVYztuwgl6lfzM7zP7fzMDAXysBeL85dCqWsgRjoCx9UbX5WBTQ7fr3eg2vswX7pw+JAuRvKy7Tu1adz092ARAAa92PhnTUJx31N0evAdUvALFcAzCdGBB2AxgOxgwH4688zwOAJFVkvr2+jyBh3tFgBVvFZuBbyNnx9sYKCpAtXWSuFULCmoiPCcDsas8t5gVtlGVwdPHi78Bax9Nk1Qqwc7DVrDCdzPnoWYzxVybir1DV5/XIqj6KwPPjslXDf6xP4Cthr0oheEIAAAAASUVORK5CYII=',
 mechanics:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACGElEQVR4nJWTvW4TQRSFv51s1htHQolApEIigEiNYkiBeAMKEBUST0AHdLwCQkI8AaKggIKGChoaihBAEQRIEImTEP9E2Ot14v2b3Z1LsYnBGBecac7M3Dlz5t47FiOgl89L2MtxHGis+5y+vmH9K84eJdBrBSiTEO7BvpeMCkP9OYneVWT9yawAqDEwRlBKKJUEgORDRdYeF/uH6NvqLVakW2/jOKAmp9BdnzgG1wWt4cjMFNm+TxhCksDZG1VrwMGbF1/JUiGOhLDVQVmCsgREMLng1zvEUcE/vq0POwBov5qTvXaM48DK+12MKW4HqFycIctgt6a5cKvRP2cFi/Nisow4htjrYAw0a5qF280B8e3nc5L0IgCOn5xGa2hWu9itnX1UHhHHkGWgFEy4w9mecIU8EuIY/JpHlkHgp6jxkpAbIdFCyS14mg4LiCUEYRFzOMbGwF56XSPVhnIZTs0dBYE8lyGBKASTCyaHL8ttbBuCnhlM4uazM9LrhLguTJ84htZFGZWC2loLpaDbyVm4s/s7iYckXDwnm5+aaA32QX/aNoRhwZUCY6BchiB2mL+5NdgHL5+uYnIhS4W1Fe/AbtEHiFD95uGMF2uNaqPvui9w5X5k1X902d7wuPYwscYny6SpYFnCnp9z9UFi7Wx1+b7qcfmeHn7C3/j8aFZMHBT9EQqX7v78v9+4utzEsXOUKiowCr8AmY8uxXSwZYoAAAAASUVORK5CYII=',
 modded:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABm0lEQVR4nLWSz2sTQRTHPzvZpGFRIZqD6EmizbnqX+GhNz0UevcP8NA/wYueevWPEFT8A0SseLEILRgwtFCXFHc3sbubzM7M8zA2dUmKBfHB482v93nzfTPwP2z3RU8uejb4c1J+ui+hsmTxhEvdKxwNMnob34LzkgHCGiArkGpKkYOzY36MZn+9QQ1gjKBLodGAIIBG44IS0nf3RKxlmqRoDa2W33QOom4HgOODMf3NRTkhwM7bPW6tdokiXznPIYp8FEkoCkhG+vwbALzaiqTXv4ZSPtk5mE5BKT9ut6Fz8yqDL2PuPh4GCwCA+PUdSeJyLkEp76eyTk483LiQ1U0PqTWx0oAIpoIwBGfBVGCMj856nyRlvQenZoxgrdBswmzmK7fb/jWMYb5+MEwXe5B/WJPh7ne09tXBx6I4kzPYT1lZEdaf6XleCDB5vyZ7O0e0WvB1P0Upn3y730F+f+r8p+Ph9mz5M46GGaYS4sOMR9tn9DdbE7l+4zJaMwctBXz+GNNUlvXnulbhwdMyePkEMdrSDJcD/tl+AQ+/u+vbt7DbAAAAAElFTkSuQmCC',
 vanilla:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcElEQVR4nLWSMUvDQBiG31wciodKsVCsgVuy6OIPCEgHCYi4Obg4dXTyF0h/Q/EHlC4OLqWUgJMIHR26ZKpKoFYCJ8XKFQfj5xAu5NK66bt8uY973u/9wgH/pST0iFSTZOBSEnr02z2r2JCBS5v7Z/iObpcC9u7AYLKDDFwCgLKoLgWZ8DNTJnxY/NICACYDl0g1KQ8y4RsVgJHo7b6DJPQoCT2ynjo1Wq+sZpOnUYx8kmkUL/2OHp7TFXR0rbKoLpjkjWdybq42uHk1GnmYCR/TKAYTPmZybsBBf4KP9y9Y3QYnABgrBYdzeCdbhuHL4wxrGytGr9WO4VYS9IYA002Hc4yVQlEaDvoTAwaA4z3AujiwqS5KWYJ8BYDDoxpa7XQtt5JgJO3MYCRtMH0oJnA4h8N5Nlnf07U3TO9lD+nqFORwjrvoE3VRgv4vWr1hGlknOL9O2YWn3G1w0iZjpbJJO9smqLVgkDfKpyiCf6Yf83Wv57zI1WQAAAAASUVORK5CYII='
};
export const iconOf=n=>imgOk(n.img)?n.img:(ICONS[n.id]||'');
export const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const imgOk=u=>/^(https?:\/\/|data:image\/(jpeg|png|webp);base64,)/i.test(u||'');
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
function synth(k){try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();const t0=AC.currentTime;for(const [f,d,w,s] of SFX[k]){const o=AC.createOscillator(),g=AC.createGain();o.type=w;o.frequency.value=f;g.gain.setValueAtTime(k==='tick'?.02:.07,t0+s);g.gain.exponentialRampToValueAtTime(.0001,t0+s+d);o.connect(g);g.connect(AC.destination);o.start(t0+s);o.stop(t0+s+d+.02)}}catch(e){}}
// если в папке sounds/ лежат click.ogg, tick.ogg, pop.ogg, ok.ogg, err.ogg, играют они; чего нет, то синтезируется
const AUD={};
for(const k of Object.keys(SFX)){try{const a=new Audio('sounds/'+k+'.ogg');a.preload='auto';a.addEventListener('error',()=>{AUD[k]=false});a.addEventListener('canplaythrough',()=>{AUD[k]=a},{once:true});a.load()}catch(e){AUD[k]=false}}
export function sfx(k){if(!snd)return;const a=AUD[k];if(a){try{const c=a.cloneNode();c.volume=k==='tick'?.3:.7;const p=c.play();if(p&&p.catch)p.catch(()=>synth(k));return}catch(e){}}synth(k)}

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
  const [noms0,ent]=await Promise.all([getNoms(),getEntries()]);
  document.documentElement.classList.add('snap');
  const perNow=()=>innerWidth>800?3:innerWidth>520?2:1;
  const tile=n=>{const ic=iconOf(n);return `<a class="nom" data-fx="${esc(n.id)}" style="--c:${esc(n.c)}" href="nomination.html?id=${encodeURIComponent(n.id)}"><span class="go">→</span>${ic?`<img class="ico" src="${esc(ic)}" alt="" onerror="this.remove()">`:''}<h3>${esc(n.t)}</h3><small>${ent.filter(e=>(e.noms||[]).includes(n.id)).length} участников</small></a>`};
  let cur=noms0,lastPer=perNow(),io;
  // номинации листаются «страницами»: по три в ряд, следующие три ниже
  const draw=noms=>{
    cur=noms;const per=perNow(),pages=[];
    for(let i=0;i<noms.length;i+=per)pages.push(noms.slice(i,i+per));
    $('#noms').innerHTML=pages.map((p,i)=>`<section class="npage${p.length<per?' part':''}" id="pg${i+1}" style="--per:${per};--n:${p.length}">${p.map(tile).join('')}</section>`).join('');
    $('#pager').innerHTML=pages.length>1&&innerWidth>800?pages.map((_,i)=>`<button type="button" data-i="${i}" aria-label="Страница ${i+1}" class="${i?'':'on'}">${i+1}</button>`).join(''):'';
    io&&io.disconnect();
    io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const i=[...document.querySelectorAll('.npage')].indexOf(e.target);document.querySelectorAll('#pager button').forEach((b,k)=>b.classList.toggle('on',k===i))}}),{threshold:.55});
    document.querySelectorAll('.npage').forEach(p=>io.observe(p));
  };
  $('#pager').addEventListener('click',e=>{const b=e.target.closest('button');if(b){sfx('click');+b.dataset.i?document.getElementById('pg'+(+b.dataset.i+1)).scrollIntoView({behavior:'smooth'}):scrollTo({top:0,behavior:'smooth'})}});
  addEventListener('resize',()=>{const p=perNow();if(p!==lastPer){lastPer=p;draw(cur)}});
  draw(noms0);
  // картинки и названия обновляются на странице сразу, как только их меняют в админке
  if(ready)try{FS.onSnapshot(FS.query(FS.collection(db,'nominations'),FS.orderBy('order')),sn=>{const l=sn.docs.map(d=>({id:d.id,...d.data()}));if(l.length)draw(l)},()=>{})}catch(e){}
}
if(page==='nomination'){
  const [noms,ent]=await Promise.all([getNoms(),getEntries()]);
  const n=noms.find(x=>x.id===new URLSearchParams(location.search).get('id'))||noms[0];
  document.title=n.t+' — МапПремия';
  $('#nhead').style.setProperty('--c',n.c);$('#grid').style.setProperty('--c',n.c);
  const ic=iconOf(n);
  $('#nhead').innerHTML=`<div class="nbox">${ic?`<img class="nico" src="${esc(ic)}" alt="" onerror="this.remove()">`:''}<div><h2>${esc(n.t)}</h2><p>${esc(n.d)}</p></div></div>`;
  const list=ent.filter(e=>(e.noms||[]).includes(n.id));
  $('#grid').innerHTML=list.length?list.map(e=>`<div class="card" id="e-${hid(e.id)}"><a class="img" href="${safeUrl(e.link)}" target="_blank" rel="noopener">${imgOk(e.img)?`<img src="${esc(e.img)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`:''}</a><div class="t"><b>${esc(e.name)}</b><span>${esc(e.author)}</span>${e.desc?`<p>${esc(e.desc)}</p>`:''}<div class="acts"><a class="btn" href="${safeUrl(e.link)}" target="_blank" rel="noopener">Minecraft Inside</a><button class="btn ghost sh" data-h="${hid(e.id)}">Поделиться</button></div></div></div>`).join('')
   :'<p class="text">Участников пока нет. Текст-заглушка.</p>';
  $('#grid').addEventListener('click',async e=>{const b=e.target.closest('.sh');if(!b)return;
    const url=location.origin+location.pathname+'?id='+encodeURIComponent(n.id)+'#e-'+b.dataset.h,name=b.closest('.card').querySelector('b').textContent,text='Голосуй за «'+name+'» в номинации «'+n.t+'» — МапПремия';
    try{if(navigator.share){await navigator.share({title:'МапПремия',text,url});return}}catch(err){if(err&&err.name==='AbortError')return}
    try{await navigator.clipboard.writeText(url);toast('Ссылка скопирована')}catch(err){prompt('Скопируй ссылку:',url)}});
  const hl=location.hash.startsWith('#e-')&&document.getElementById(location.hash.slice(1));if(hl){hl.classList.add('hl');hl.scrollIntoView({block:'center'})}
}
if(page==='apply'){
  const noms=await getNoms();
  $('#formNoms').innerHTML=noms.map(n=>{const ic=iconOf(n);return `<label class="ncard"><input type="checkbox" name="noms" value="${esc(n.id)}">${ic?`<img src="${esc(ic)}" alt="" onerror="this.remove()">`:''}<span>${esc(n.t)}</span></label>`}).join('');
  const msg=t=>$('#msg').textContent=t,form=$('#form'),ab=$('#authbox'),done=$('#done');
  $('#dimg').src=ICONS.best;
  const upd=()=>{const k=form.querySelectorAll('[name=noms]:checked').length;$('#ncount').textContent=k?'выбрано: '+k:'выбери хотя бы одну'};
  form.addEventListener('change',e=>{if(e.target.name==='noms')upd()});upd();
  // подсказка под полем ссылки
  const lh=$('#lh'),li=form.elements.link;
  const okHost=v=>{try{return /(^|\.)minecraft-inside\.ru$/.test(new URL(v).hostname)}catch(e){return false}};
  li.addEventListener('input',()=>{const v=li.value.trim();
    if(!v){lh.className='hint';lh.textContent='Только ссылка на карту с minecraft-inside.ru';return}
    const ok=okHost(v);lh.className='hint '+(ok?'ok':'bad');lh.textContent=ok?'Ссылка подходит':'Нужна ссылка на карту на minecraft-inside.ru'});
  const dI=form.elements.desc,dc=$('#dc');dI.addEventListener('input',()=>dc.textContent=dI.value.length+' / 2000');
  if(!ready)ab.innerHTML='<div class="panel auth"><p>Приём заявок ещё не подключён.</p></div>';
  else AU.onAuthStateChanged(auth,u=>{
    form.hidden=!u||!done.hidden;
    if(!u){ab.innerHTML='<div class="panel auth"><h3>Сначала войди</h3><p>Чтобы подать заявку, войди через Google. Так мы защищаемся от спама.</p><button class="btn" id="gin">Войти через Google</button></div>';
      $('#gin').onclick=()=>AU.signInWithPopup(auth,new AU.GoogleAuthProvider()).catch(()=>{});}
    else{ab.innerHTML=`<p class="who">Ты вошёл как <b>${esc(u.email)}</b> <button class="btn ghost" id="gout" type="button">Выйти</button></p>`;$('#gout').onclick=()=>AU.signOut(auth)}
  });
  $('#again').onclick=()=>{done.hidden=true;form.hidden=false;msg('');window.scrollTo({top:0,behavior:'smooth'})};
  form.addEventListener('submit',async e=>{
    e.preventDefault();const f=e.target,fd=new FormData(f),g=(k,m)=>String(fd.get(k)||'').trim().slice(0,m),u=ready&&auth.currentUser;
    if(!u)return msg('Сначала войди через Google.');
    if(!okHost(g('link',500))){sfx('err');return msg('Нужна ссылка на карту на minecraft-inside.ru')}
    if(!fd.getAll('noms').length){sfx('err');return msg('Выбери хотя бы одну номинацию.')}
    const b=f.querySelector('button[type=submit]');b.disabled=true;b.textContent='Отправляю…';msg('');
    const data={name:g('name',200),author:g('author',200),version:g('version',50),link:g('link',500),date:g('date',20),
      noms:fd.getAll('noms'),media:g('media',2000),desc:g('desc',2000),contact:g('contact',200),
      uid:u.uid,email:u.email,status:'new',created:FS.serverTimestamp()};
    // не больше 5 заявок с одного аккаунта: id = uid_1 ... uid_5, занятые слоты база отклоняет
    let ok=false;
    for(let i=1;i<=5&&!ok;i++){try{await FS.setDoc(FS.doc(db,'applications',u.uid+'_'+i),data);ok=true}catch(err){}}
    if(ok){sfx('ok');f.reset();upd();dc.textContent='0 / 2000';lh.className='hint';lh.textContent='Только ссылка на карту с minecraft-inside.ru';f.hidden=true;done.hidden=false;window.scrollTo({top:0,behavior:'smooth'})}
    else sfx('err'),msg('Не удалось отправить заявку. Возможно, ты уже подал максимум (5 заявок с одного аккаунта).');
    b.disabled=false;b.textContent='Отправить заявку';
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
