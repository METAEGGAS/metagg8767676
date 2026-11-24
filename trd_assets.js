var trdHTML='<style>@keyframes trdpls{0%,100%{opacity:1}50%{opacity:.3}}@keyframes trdglow{0%,100%{box-shadow:0 10px 30px rgba(20,90,220,.45),0 0 18px rgba(0,229,255,.25)}50%{box-shadow:0 10px 30px rgba(20,90,220,.6),0 0 34px rgba(0,229,255,.5)}}@keyframes trdspin{to{transform:rotate(360deg)}}@keyframes trdspinrev{to{transform:rotate(-360deg)}}@keyframes trdslidein{from{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes trdfadein{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes trdshake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-7px)}40%,80%{transform:translateX(7px)}}</style>'
+'<div style="padding:8px 14px 40px;background:#050a14;min-height:100%">'
+'<div style="display:flex;align-items:center;justify-content:flex-end;padding:6px 2px 14px">'
+'<div onclick="trdOpenLog()" style="display:flex;align-items:center;gap:7px;cursor:pointer">'
+'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f7bf6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2.5"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>'
+'<span style="font-size:15px;font-weight:600;color:#e8f1ff;letter-spacing:.3px" data-t="trdLog">السجل</span>'
+'</div>'
+'</div>'
+'<div style="position:relative;border-radius:22px;overflow:hidden;border:1px solid rgba(0,229,255,.3);box-shadow:0 0 0 1px rgba(47,123,246,.15),0 18px 44px rgba(0,20,60,.6),inset 0 0 40px rgba(0,229,255,.06);background:radial-gradient(ellipse at 50% 82%,#062046 0%,#041226 58%,#020a18 100%)">'
+'<img src="https://i.ibb.co/Pv3gPVXM/file-0000000034348210919c6cf6b2d1473f.png" alt="trade sync" style="width:100%;display:block">'
+'<div style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 20px">'
+'<div style="font-size:34px;font-weight:800;color:#fff;line-height:1.55;text-shadow:0 2px 14px rgba(0,10,40,.85),0 0 26px rgba(0,180,255,.35)" data-t="trdH1">نشر للمستخدمين</div>'
+'<div style="font-size:34px;font-weight:800;color:#fff;line-height:1.55;text-shadow:0 2px 14px rgba(0,10,40,.85),0 0 26px rgba(0,180,255,.35)" data-t="trdH2">الأصدقاء للتزامن</div>'
+'<div style="font-size:34px;font-weight:800;color:#fff;line-height:1.55;text-shadow:0 2px 14px rgba(0,10,40,.85),0 0 26px rgba(0,180,255,.35)" data-t="trdH3">معهم</div>'
+'</div>'
+'</div>'
+'<div style="margin-top:20px;text-align:center;font-size:15px;font-weight:500;color:#f2f6ff;letter-spacing:.2px" data-t="trdSub">الحصول على عمولة دعوة عالية</div>'
+'<div id="trdCodeBox" style="margin-top:18px;background:#1a2130;border:1px solid rgba(150,195,245,.14);border-radius:10px;padding:16px 14px">'
+'<input id="trdCodeInput" type="text" data-ph="trdPhCode" placeholder="يرجى إدخال كود الطلب" style="width:100%;background:transparent;border:none;outline:none;color:#e8f1ff;font-size:14px;text-align:right;font-family:inherit">'
+'</div>'
+'<div id="trdAutoPanel" style="margin-top:12px;padding:13px 14px;border:1px solid rgba(47,123,246,.28);border-radius:12px;background:rgba(12,28,52,.8);direction:rtl">'
+'<div style="display:flex;align-items:center;justify-content:space-between;gap:10px"><b style="font-size:13px;color:#e8f1ff">الاستخدام اليومي للأكواد</b><span id="trdDailyBadge" style="font-size:11px;color:#9fc7ff">جارٍ التحقق...</span></div>'
+'<div id="trdSignals" style="display:flex;gap:9px;justify-content:center;margin:12px 0"><i class="trdSignal"></i><i class="trdSignal"></i><i class="trdSignal"></i></div>'
+'<button id="trdAutoBtn" onclick="trdAutoUse()" style="width:100%;border:1px solid rgba(150,210,255,.4);border-radius:10px;padding:12px;background:linear-gradient(135deg,#174f9b,#2378e8);color:#fff;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer">استخدام تلقائي</button>'
+'<div id="trdAutoHint" style="font-size:11px;color:#91a8c7;text-align:center;margin-top:8px">حتى 3 استخدامات خلال كل 24 ساعة عند استيفاء شروط الحساب</div>'
+'</div>'
+'<style>.trdSignal{display:block;width:13px;height:13px;border-radius:50%;background:#25364d;border:1px solid #49617f}.trdSignal.ready{background:#22c55e;box-shadow:0 0 10px rgba(34,197,94,.6)}.trdSignal.used{background:#64748b}</style>'
+'<div id="trdSyncBtn" onclick="trdSync()" style="margin-top:16px;border-radius:10px;background:linear-gradient(135deg,#1a5fb4 0%,#2f7bf6 55%,#00b8e5 100%);border:1px solid rgba(160,215,255,.5);padding:16px;text-align:center;cursor:pointer;box-shadow:0 10px 30px rgba(20,90,220,.45),inset 0 1px 1px rgba(220,240,255,.4)">'
+'<span id="trdSyncBtnTxt" style="font-size:16px;font-weight:700;color:#fff;letter-spacing:.3px" data-t="trdSync">التزامن بالصفقة</span>'
+'</div>'
+'</div>';

var TRD_FB_CFG={apiKey:"AIzaSyBvzfJOOjRFZnTgTUrwEZQPr8Ba7zKKlNg",authDomain:"hhhxh-5ebe4.firebaseapp.com",projectId:"hhhxh-5ebe4",storageBucket:"hhhxh-5ebe4.firebasestorage.app",messagingSenderId:"79243000696",appId:"1:79243000696:web:ee0fb2d2ccce791954e68d",measurementId:"G-08BR6LN6PT"};
var TRD_PROFIT_RATE=Math.pow(1.12,1/3)-1;
var TRD_MAX_CODES_PER_DAY=3;
var TRD_MIN_BALANCE=300;
var trdFB={ready:false,uid:null,db:null,auth:null,fs:null,busy:false};
var trdResultTimer=null;
var trdUserUnsub=null;

(async function(){
  try{
    var authM=await import('https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js');
    var fsM=await import('https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js');
    trdFB.fs=fsM;
    var app=(window.__exFB&&window.__exFB.app)?window.__exFB.app:null;
    if(app){
      trdFB.auth=window.__exFB.auth||authM.getAuth(app);
      trdFB.db=window.__exFB.db||fsM.getFirestore(app);
    }else{
      var appM=await import('https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js');
      var app2=appM.initializeApp(TRD_FB_CFG,'trdApp');
      trdFB.auth=authM.getAuth(app2);
      trdFB.db=fsM.getFirestore(app2);
    }
    authM.onAuthStateChanged(trdFB.auth,async function(u){
      try{
        if(!u){trdFB.ready=false;trdFB.uid=null;return;}
        trdFB.uid=u.uid;
        trdFB.ready=true;
        await trdEnsureUserDoc();
        if(trdUserUnsub){try{trdUserUnsub();}catch(e){}}
        trdUserUnsub=trdFB.fs.onSnapshot(trdFB.fs.doc(trdFB.db,'users',trdFB.uid),function(){trdRefreshAutoPanel();},function(){});
        trdRefreshAutoPanel();
      }catch(e){}
    });
  }catch(e){}
})();

async function trdEnsureUserDoc(){
  var fs=trdFB.fs,ref=fs.doc(trdFB.db,'users',trdFB.uid);
  var snap=await fs.getDoc(ref);
  if(!snap.exists()){await fs.setDoc(ref,{balance:0,uses:[],usedCodes:[],createdAt:Date.now()},{merge:true});}
}

function trdUsesLast24h(uses){
  var now=Date.now(),day=24*60*60*1000,c=0;
  (uses||[]).forEach(function(t){if(now-t<day)c++;});
  return c;
}
async function trdRefreshAutoPanel(){
  var badge=document.getElementById('trdDailyBadge'),btn=document.getElementById('trdAutoBtn'),hint=document.getElementById('trdAutoHint'),signals=document.querySelectorAll('#trdSignals .trdSignal');
  if(!badge||!btn)return;
  if(!trdFB.ready||!trdFB.uid){badge.textContent='سجّل الدخول أولاً';btn.disabled=true;return;}
  try{
    var fs=trdFB.fs,us=await fs.getDoc(fs.doc(trdFB.db,'users',trdFB.uid)),ud=us.exists()?us.data():{};
    var used=trdUsesLast24h(ud.uses||[]),remaining=Math.max(0,TRD_MAX_CODES_PER_DAY-used),bal=Number(ud.balance)||0;
    signals.forEach(function(el,i){el.className='trdSignal '+(i<used?'used':i<TRD_MAX_CODES_PER_DAY?'ready':'');el.style.display=i<used?'none':'block';});
    var eligible=bal>=TRD_MIN_BALANCE&&remaining>0;
    badge.textContent=remaining+' من 3 متاحة';
    btn.disabled=!eligible;btn.style.opacity=eligible?'1':'.45';btn.style.display=eligible?'block':'none';
    if(hint)hint.textContent=bal<TRD_MIN_BALANCE?'يتطلب رصيداً لا يقل عن '+TRD_MIN_BALANCE+' USDT':remaining===0?'اكتملت الاستخدامات؛ تتجدد بعد مرور 24 ساعة من كل استخدام':'يمكن استخدام حتى '+remaining+' كود خلال النافذة الحالية';
  }catch(e){badge.textContent='تعذر تحميل الحالة';btn.disabled=true;}
}
if(typeof MutationObserver!=='undefined'&&document.body){
  var trdPanelObserver=new MutationObserver(function(){
    var panel=document.getElementById('trdAutoPanel');
    if(panel&&!panel.dataset.statusBound){panel.dataset.statusBound='1';trdRefreshAutoPanel();}
  });
  trdPanelObserver.observe(document.body,{childList:true,subtree:true});
}
window.trdAutoUse=async function(){
  if(trdFB.busy)return;
  if(!trdFB.ready){trdShowResult(false,'يرجى تسجيل الدخول');return;}
  var btn=document.getElementById('trdAutoBtn');
  if(btn){btn.disabled=true;btn.textContent='جارٍ البحث عن كود...';}
  try{
    var fs=trdFB.fs,usedSnap=await fs.getDoc(fs.doc(trdFB.db,'users',trdFB.uid));
    var usedData=usedSnap.exists()?usedSnap.data():{},used=usedData.usedCodes||[];
    var codesSnap=await fs.getDocs(fs.collection(trdFB.db,'codes'));
    var candidate=null;
    codesSnap.forEach(function(d){
      var c=d.data()||{};
      if(!candidate&&c.active!==false&&!(c.usedBy||[]).includes(trdFB.uid)&&!used.includes(d.id))candidate=d.id;
    });
    if(!candidate){trdShowResult(false,'لا يوجد كود متاح حالياً');return;}
    var input=document.getElementById('trdCodeInput');
    if(input)input.value=candidate;
    await trdSync();
  }catch(e){trdShowResult(false,'تعذر جلب كود متاح');}
  finally{if(btn){btn.textContent='استخدام تلقائي';}trdRefreshAutoPanel();}
};


function trdShowLoading(){
  trdHideLoading();
  var ov=document.createElement('div');
  ov.id='trdOverlay';
  ov.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;z-index:99998;display:flex;align-items:center;justify-content:center;pointer-events:none;background:transparent';
  ov.innerHTML='<div style="position:relative;width:58px;height:58px">'
  +'<div style="position:absolute;top:0;left:0;width:58px;height:58px;box-sizing:border-box;border:5px solid transparent;border-top-color:#ef4444;border-radius:50%;animation:trdspin .9s linear infinite"></div>'
  +'<div style="position:absolute;top:10px;left:10px;width:38px;height:38px;box-sizing:border-box;border:5px solid transparent;border-top-color:#22c55e;border-radius:50%;animation:trdspinrev .9s linear infinite"></div>'
  +'</div>';
  document.body.appendChild(ov);
}
function trdHideLoading(){var o=document.getElementById('trdOverlay');if(o)o.remove();}

function trdHideResult(){
  if(trdResultTimer){clearTimeout(trdResultTimer);trdResultTimer=null;}
  document.removeEventListener('click',trdHideResult,true);
  var d=document.getElementById('trdResult');if(d)d.remove();
}

function trdShakeInput(){
  var box=document.getElementById('trdCodeBox');
  if(!box)return;
  box.style.animation='trdshake .45s ease';
  box.style.borderColor='rgba(239,68,68,.9)';
  box.style.boxShadow='0 0 0 1px rgba(239,68,68,.5),0 0 16px rgba(239,68,68,.4)';
  setTimeout(function(){
    box.style.animation='';
    box.style.borderColor='rgba(150,195,245,.14)';
    box.style.boxShadow='';
  },1500);
}

function trdShowResult(ok,failMsg){
  trdHideLoading();
  trdHideResult();
  var icon=ok
    ?'https://i.ibb.co/prhVWmWy/IMG.png'
    :'https://i.ibb.co/6RN7BvjS/file-00000000baa882109658b900050054ca.png';
  var txt=ok?_t('trdOk'):(failMsg||_t('trdExpired'));
  var d=document.createElement('div');
  d.id='trdResult';
  d.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;display:flex;align-items:center;justify-content:center;pointer-events:none;background:transparent';
  d.innerHTML='<div style="pointer-events:auto;background:#3f444f;border:1px solid rgba(255,255,255,.14);border-radius:14px;padding:22px 34px;display:flex;flex-direction:column;align-items:center;gap:12px;cursor:pointer;box-shadow:0 12px 34px rgba(0,0,0,.5)">'
  +'<img src="'+icon+'" alt="" style="width:84px;height:84px;object-fit:contain;display:block">'
  +'<div style="font-size:15px;font-weight:700;color:#e8f1ff;text-align:center;letter-spacing:.2px">'+txt+'</div>'
  +'</div>';
  document.body.appendChild(d);
  trdResultTimer=setTimeout(trdHideResult,3000);
  document.addEventListener('click',trdHideResult,true);
}

var trdLogRecords=[];

function trdFmtDate(t){
  var d=new Date(t);
  function p(n){return (n<10?'0':'')+n;}
  return p(d.getDate())+'-'+p(d.getMonth()+1)+'-'+d.getFullYear()+' '+p(d.getHours())+':'+p(d.getMinutes())+':'+p(d.getSeconds());
}

function trdRecordRow(r){
  var isBuy=r.type==='buy';
  var label=isBuy?_t('trdBuyOpt'):_t('trdSettle');
  var amt=(isBuy?'- ':'+ ')+Number(r.amount).toFixed(2)+' USDT';
  var color=isBuy?'#ef4444':'#22c55e';
  return '<div style="background:#141a26;border:1px solid rgba(150,195,245,.08);border-radius:12px;padding:16px 16px 14px;margin-bottom:14px;animation:trdfadein .45s ease">'
  +'<div style="display:flex;align-items:center;justify-content:space-between;direction:ltr">'
  +'<span style="font-size:15px;font-weight:600;color:#e8f1ff">'+label+'</span>'
  +'<span style="font-size:13px;color:#8a93a6;letter-spacing:.3px">'+trdFmtDate(r.at)+'</span>'
  +'</div>'
  +'<div style="margin-top:10px;font-size:16px;font-weight:700;color:'+color+';direction:ltr;text-align:left">'+amt+'</div>'
  +'</div>';
}

function trdRenderLogList(){
  var list=document.getElementById('trdLogList');
  if(!list)return;
  var recs=(trdLogRecords||[]).slice().filter(function(r){return r&&(r.type==='buy'||r.type==='settle');}).sort(function(a,b){return b.at-a.at;});
  if(!recs.length){
    list.innerHTML='<div style="text-align:center;color:#8a93a6;font-size:13px;padding:40px 0">'+_t('trdNoRec')+'</div>';
    return;
  }
  var h='';
  recs.forEach(function(r){h+=trdRecordRow(r);});
  list.innerHTML=h;
}

function trdCloseLog(){var p=document.getElementById('trdLogPage');if(p)p.remove();}

async function trdOpenLog(){
  trdCloseLog();
  var pg=document.createElement('div');
  pg.id='trdLogPage';
  pg.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;z-index:99997;background:linear-gradient(180deg,#0c3168 0%,#082452 50%,#051737 100%);overflow-y:auto;animation:trdslidein .3s ease;padding:10px 14px 40px;box-sizing:border-box';
  pg.innerHTML='<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 2px 16px">'
  +'<div onclick="trdCloseLog()" style="cursor:pointer;width:44px;height:44px;border-radius:13px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,rgba(0,184,229,.4),rgba(47,123,246,.4));border:2px solid rgba(0,229,255,.65);box-shadow:0 6px 18px rgba(0,150,255,.35),inset 0 1px 2px rgba(220,245,255,.55);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)">'
  +'<img src="https://i.ibb.co/k69JQ9LS/IMG.png" alt="back" style="width:24px;height:24px;object-fit:contain;display:block">'
  +'</div>'
  +'<span style="font-size:16px;font-weight:700;color:#e8f1ff;letter-spacing:.3px" data-t="trdLog">السجل</span>'
  +'</div>'
  +'<div id="trdLogList"></div>';
  document.body.appendChild(pg);
  var list=document.getElementById('trdLogList');
  list.innerHTML='<div style="text-align:center;color:#8a93a6;font-size:13px;padding:40px 0">'+_t('trdLoading')+'</div>';
  try{
    var fs=trdFB.fs;
    var snap=await fs.getDoc(fs.doc(trdFB.db,'users',trdFB.uid));
    if(snap.exists()&&snap.data().records){trdLogRecords=snap.data().records;}
  }catch(e){}
  trdRenderLogList();
}

async function trdAddRecord(type,amount,at){
  var rec={type:type,amount:amount,at:at||Date.now()};
  trdLogRecords=(trdLogRecords||[]).concat([rec]);
  trdRenderLogList();
  try{
    var fs=trdFB.fs;
    var ref=fs.doc(trdFB.db,'users',trdFB.uid);
    var snap=await fs.getDoc(ref);
    var recs=(snap.exists()&&snap.data().records)||[];
    recs.push(rec);
    await fs.setDoc(ref,{records:recs},{merge:true});
  }catch(e){}
}

async function trdSync(){
  if(trdFB.busy)return;
  var btn=document.getElementById('trdSyncBtn'),txt=document.getElementById('trdSyncBtnTxt');
  var input=document.getElementById('trdCodeInput');
  var code=input?input.value.trim().toUpperCase():'';
  if(!code){trdShakeInput();return;}
  if(!trdFB.ready){trdShowResult(false);return;}
  trdFB.busy=true;
  if(txt)txt.textContent=_t('trdSyncing');
  if(btn)btn.style.animation='trdglow 1.2s infinite';
  trdShowLoading();
  try{
    var fs=trdFB.fs;
    var userRef=fs.doc(trdFB.db,'users',trdFB.uid);
    var userSnap=await fs.getDoc(userRef);
    var udata=userSnap.exists()?userSnap.data():{balance:0,uses:[],usedCodes:[]};
    var curBalance=Number(udata.balance)||0;
    if(curBalance<TRD_MIN_BALANCE){
      trdShowResult(false,_t('trdOrderOut'));
      return;
    }
    if(trdUsesLast24h(udata.uses)>=TRD_MAX_CODES_PER_DAY){
      trdShowResult(false,_t('trdOrderOut'));
      return;
    }
    if((udata.usedCodes||[]).indexOf(code)!==-1){
      trdShowResult(false,_t('trdOrderDone'));
      return;
    }
    var codeRef=fs.doc(trdFB.db,'codes',code);
    var codeSnap=await fs.getDoc(codeRef);
    if(!codeSnap.exists()){trdShowResult(false);return;}
    var cdata=codeSnap.data();
    if(cdata.active===false){trdShowResult(false,_t('trdOrderDone'));return;}
    if((cdata.usedBy||[]).indexOf(trdFB.uid)!==-1){trdShowResult(false,_t('trdOrderDone'));return;}
    var result=await fs.runTransaction(trdFB.db,async function(tx){
      var cSnap=await tx.get(codeRef);
      if(!cSnap.exists())throw 'invalid';
      var cd=cSnap.data();
      if(cd.active===false)throw 'used';
      var usedByArr=cd.usedBy||[];
      if(usedByArr.indexOf(trdFB.uid)!==-1)throw 'used';
      var uSnap=await tx.get(userRef);
      var ud=uSnap.exists()?uSnap.data():{balance:0,uses:[],usedCodes:[]};
      var now=Date.now(),day=24*60*60*1000;
      var recent=(ud.uses||[]).filter(function(t){return now-t<day;});
      if(recent.length>=TRD_MAX_CODES_PER_DAY)throw 'limit';
      var balance=Number(ud.balance)||0;
      if(balance<TRD_MIN_BALANCE)throw 'nobal';
      if((ud.usedCodes||[]).indexOf(code)!==-1)throw 'used';
      var profit=balance*TRD_PROFIT_RATE;
      var newBalance=balance+profit;
      usedByArr.push(trdFB.uid);
      tx.update(codeRef,{usedBy:usedByArr,useCount:(cd.useCount||0)+1,lastUsedAt:now});
      var newUsedCodes=(ud.usedCodes||[]).concat([code]);
      var ledger=Array.isArray(ud.codeProfitLedger)?ud.codeProfitLedger.slice():[];
      ledger.push({code:code,profit:profit,at:now,balanceBefore:balance,balanceAfter:newBalance});
      var profitHistory=Array.isArray(ud.profitHistory)?ud.profitHistory.slice():[];
      profitHistory.push({amount:profit,at:now,source:'code',code:code,balanceBefore:balance,balanceAfter:newBalance});
      tx.set(userRef,{balance:newBalance,uses:recent.concat([now]),usedCodes:newUsedCodes,codeProfitLedger:ledger,profitHistory:profitHistory},{merge:true});
      return {profit:profit,newBalance:newBalance};
    });
    if(input)input.value='';
    try{
      var balEl=document.getElementById('balV');
      if(balEl)balEl.textContent=result.newBalance.toFixed(2);
      localStorage.setItem('trdLastSync',JSON.stringify({code:code,profit:result.profit,balance:result.newBalance,at:Date.now()}));
    }catch(e){}
    trdShowResult(true);
    var trdTs=Date.now();
    trdAddRecord('buy',result.profit,trdTs);
    setTimeout(function(){trdAddRecord('settle',result.profit,trdTs);},3000);
  }catch(e){
    if(e==='used'){trdShowResult(false,_t('trdOrderDone'));}
    else if(e==='nobal'){trdShowResult(false,_t('trdOrderOut'));}
    else if(e==='limit'){trdShowResult(false,_t('trdOrderOut'));}
    else{trdShowResult(false);}
  }finally{
    trdHideLoading();
    trdFB.busy=false;
    if(txt)txt.textContent=_t('trdSync');
    if(btn)btn.style.animation='';
  }
}

function _t(k){try{if(typeof T==='function')return T(k)}catch(e){}return (typeof TRD_AR!=='undefined'&&TRD_AR[k])||k}
var TRD_AR={trdLog:'السجل',trdH1:'نشر للمستخدمين',trdH2:'الأصدقاء للتزامن',trdH3:'معهم',trdSub:'الحصول على عمولة دعوة عالية',trdPhCode:'يرجى إدخال كود الطلب',trdSync:'التزامن بالصفقة',trdSyncing:'جاري التزامن...',trdOk:'تم اتباع الطلب بنجاح',trdExpired:'نفذ وقت الطلب',trdOrderOut:'نفذ الطلب',trdOrderDone:'انتهى الطلب',trdBuyOpt:'خيار الشراء',trdSettle:'تسوية الخيارات',trdNoRec:'لا توجد سجلات بعد',trdLoading:'جاري التحميل...'};
function trdApplyLang(){try{trdRenderLogList()}catch(e){}try{if(!trdFB.busy){var bt=document.getElementById('trdSyncBtnTxt');if(bt)bt.textContent=_t('trdSync')}}catch(e){}}
