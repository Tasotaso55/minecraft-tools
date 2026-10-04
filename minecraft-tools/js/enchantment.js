// enchantments
const CATS={all:'すべて',a:'防具',s:'剣・斧',t:'ツール',b:'弓',c:'クロスボウ',r:'トライデント',f:'釣り竿',m:'メイス',g:'全般'};
const ENCH=[
['a','ダメージ軽減','Protection',4,'防具全般','火炎耐性・爆発耐性・飛び道具耐性'],
['a','火炎耐性','Fire Protection',4,'防具全般','ダメージ軽減・爆発耐性・飛び道具耐性'],
['a','爆発耐性','Blast Protection',4,'防具全般','ダメージ軽減・火炎耐性・飛び道具耐性'],
['a','飛び道具耐性','Projectile Protection',4,'防具全般','ダメージ軽減・火炎耐性・爆発耐性'],
['a','落下耐性','Feather Falling',4,'ブーツ',''],
['a','水中呼吸','Respiration',3,'ヘルメット',''],
['a','水中採掘','Aqua Affinity',1,'ヘルメット',''],
['a','棘の鎧','Thorns',3,'防具全般',''],
['a','水中歩行','Depth Strider',3,'ブーツ','氷渡り'],
['a','氷渡り','Frost Walker',2,'ブーツ','水中歩行',1],
['a','ソウルスピード','Soul Speed',3,'ブーツ','',1],
['a','スニーク速度上昇','Swift Sneak',3,'レギンス','',1],
['a','束縛の呪い','Curse of Binding',1,'防具全般','',1],
['s','ダメージ増加','Sharpness',5,'剣・斧','アンデッド特効・虫特効'],
['s','アンデッド特効','Smite',5,'剣・斧','ダメージ増加・虫特効'],
['s','虫特効','Bane of Arthropods',5,'剣・斧','ダメージ増加・アンデッド特効'],
['s','ノックバック','Knockback',2,'剣',''],
['s','火属性','Fire Aspect',2,'剣',''],
['s','ドロップ増加','Looting',3,'剣',''],
['s','範囲ダメージ増加','Sweeping Edge',3,'剣(Java版)',''],
['t','効率強化','Efficiency',5,'ツルハシ・シャベル・クワ・斧・ハサミ',''],
['t','シルクタッチ','Silk Touch',1,'ツルハシ・シャベル・クワ・斧','幸運'],
['t','幸運','Fortune',3,'ツルハシ・シャベル・クワ・斧','シルクタッチ'],
['b','パワー','Power',5,'弓',''],
['b','パンチ','Punch',2,'弓',''],
['b','フレイム','Flame',1,'弓',''],
['b','無限','Infinity',1,'弓','修繕'],
['c','高速装填','Quick Charge',3,'クロスボウ',''],
['c','貫通','Piercing',4,'クロスボウ','マルチショット'],
['c','マルチショット','Multishot',1,'クロスボウ','貫通'],
['r','忠誠','Loyalty',3,'トライデント','激流'],
['r','激流','Riptide',3,'トライデント','忠誠・召雷'],
['r','召雷','Channeling',1,'トライデント','激流'],
['r','串刺し','Impaling',5,'トライデント',''],
['f','入れ食い','Lure',3,'釣り竿',''],
['f','宝釣り','Luck of the Sea',3,'釣り竿',''],
['m','密度','Density',5,'メイス','破城・ダメージ増加・アンデッド特効・虫特効'],
['m','破城','Breach',4,'メイス','密度・ダメージ増加・アンデッド特効・虫特効'],
['m','風爆','Wind Burst',3,'メイス','','1'],
['g','耐久力','Unbreaking',3,'耐久値のある装備・道具',''],
['g','修繕','Mending',1,'耐久値のある装備・道具','無限',1],
['g','消滅の呪い','Curse of Vanishing',1,'ほぼ全ての装備・道具','',1]
];
let ecat='all';
const RM=['','I','II','III','IV','V'];
function renderEnch(){
  const q=$('eq').value.trim().toLowerCase();
  const list=ENCH.filter(e=>(ecat==='all'||e[0]===ecat)&&(!q||(e[1]+e[2]).toLowerCase().includes(q)));
  $('elist').innerHTML=list.length?list.map(e=>`<div class="item" style="margin:0"><div class="ih"><b>${e[1]} <span class="en">${e[2]}</span></b>${e[6]?'<span class="tag tr">宝</span>':''}</div>
<div class="note" style="margin-top:2px">最大レベル:<b style="color:var(--ac2)">${RM[e[3]]}</b></div>
<div class="note" style="margin-top:2px">対象:${e[4]}</div>${e[5]?`<div class="note" style="margin-top:2px">競合:${e[5]}</div>`:''}</div>`).join(''):'<p class="note">該当なし</p>';
}
Object.keys(CATS).forEach(k=>{
  const b=document.createElement('button');b.className='sm'+(k==='all'?' on':'');b.textContent=CATS[k];
  b.onclick=()=>{ecat=k;[...$('echips').children].forEach(c=>c.classList.remove('on'));b.classList.add('on');renderEnch()};
  $('echips').appendChild(b);
});
$('eq').oninput=renderEnch;
renderEnch();
