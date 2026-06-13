/* ============================================================
   UMMS v5 — script.js
   الهيئة السعودية للمياه · Saudi Water Authority
   ============================================================ */


/* ══ 1. DATA ═══════════════════════════════════════════════════ */

var MEETINGS = [
  { id:'meet1', time:'٩:٠٠ — ١٠:٠٠ ص', title:'استعراض خطة التحول الرقمي',
    room:'قاعة المركز التنفيذي', start:540, end:600, status:'live', label:'● جارٍ الآن', attendeeKey:'meet1' },
  { id:'meet2', time:'١٠:٠٠ — ١١:٣٠ ص', title:'الاجتماع الدوري لمتابعة سير الأعمال',
    room:'قاعة اجتماعات المعالي', start:600, end:690, status:'confirmed', label:'✓ مؤكد', attendeeKey:'meet2' },
  { id:'meet3', time:'١:٣٠ — ٣:٠٠ م', title:'اجتماع الجاهزية المؤسسية',
    room:'قاعة المركز التنفيذي', start:810, end:900, status:'modified', label:'⚑ تم التعديل', attendeeKey:'meet3' }
];

var COMMS = [
  { requester:'م. عبدالعزيز فهد الحصان', position:'مدير الإدارة المالية',
    subject:'مراجعة ميزانية المشاريع الرأسمالية — الربع الثاني' },
  { requester:'م. ذيب القحطاني', position:'مدير عام الشراكات الإستراتيجية',
    subject:'برنامج الزيارة الميدانية للوفد الكوري' }
];

var ATTENDEES = {
  meet1: [
    {initial:'ع', name:'عبدالله العيسى',          dept:'نائب الرئيس للرقمنة وتقنية الأعمال',                    color:'#1971E5'},
    {initial:'إ', name:'إبراهيم سعد المطلق',       dept:'المدير التنفيذي للأمن السيبراني',                       color:'#553899'},
    {initial:'ع', name:'عبدالله أحمد المدني',      dept:'المدير التنفيذي لاستراتيجية وحوكمة التحول الرقمي',     color:'#186648'},
    {initial:'أ', name:'أحمد بن حميد الصبحي',     dept:'المدير التنفيذي لحلول الأعمال الرقمية',                 color:'#B86800'},
    {initial:'ع', name:'عبدالعزيز محمد الناجم',   dept:'مستشار',                                                 color:'#BE2A2A'},
    {initial:'ع', name:'عبدالله علي القحطاني',    dept:'مدير عام مكتب التحول الرقمي',                           color:'#1971E5'},
    {initial:'ن', name:'نوف محمد الجاسر',          dept:'مدير إدارة الحوكمة السيبرانية',                         color:'#186648'}
  ],
  meet2: [
    {initial:'ش', name:'شارخ إبراهيم الشارخ',     dept:'نائب الرئيس للشؤون الفنية والمشروعات',                  color:'#1971E5'},
    {initial:'م', name:'منصور عبدالله الزنيدي',   dept:'نائب الرئيس للمخاطر واستمرارية قطاع المياه',            color:'#553899'},
    {initial:'ع', name:'عبدالعزيز عبدالرحمن البابطين', dept:'نائب الرئيس لتكامل قطاع المياه',                  color:'#186648'},
    {initial:'ف', name:'فهد سعد أبو معطي',         dept:'نائب الرئيس لتنظيم قطاع المياه',                        color:'#B86800'},
    {initial:'م', name:'ممدوح عبدالعالي الشعيبي',  dept:'نائب الرئيس لاستدامة وخدمات قطاع المياه',              color:'#BE2A2A'},
    {initial:'ع', name:'عبدالله العيسى',           dept:'نائب الرئيس للرقمنة وتقنية الأعمال',                   color:'#1971E5'},
    {initial:'م', name:'مهيدب صالح المهيدب',       dept:'وكيل الرئيس للشؤون المؤسسية',                           color:'#553899'},
    {initial:'أ', name:'أحمد أسامة عرب',           dept:'وكيل الرئيس للاستراتيجية والتميز المؤسسي',              color:'#186648'},
    {initial:'س', name:'سعد بن عبدالعزيز المعيقل', dept:'وكيل الرئيس للشؤون القانونية والحوكمة والامتثال',       color:'#B86800'},
    {initial:'س', name:'سعود بن محمد بن مرشد',    dept:'وكيل الشؤون الفنية ومبادرات البنى التحتية',             color:'#BE2A2A'},
    {initial:'ط', name:'طارق غسان الغفاري',        dept:'وكيل الرئيس للأبحاث والتقنيات الواعدة للمياه',         color:'#1971E5'},
    {initial:'س', name:'سارة متلع المهري',          dept:'وكيل الرئيس لرأس المال البشري',                         color:'#553899'},
    {initial:'ع', name:'عبير سعود الشنيفي',        dept:'وكيل الرئيس للمساندة القيادية',                         color:'#186648'}
  ],
  meet3: [
    {initial:'م', name:'منصور عبدالله الزنيدي',   dept:'نائب الرئيس للمخاطر واستمرارية قطاع المياه',            color:'#1971E5'},
    {initial:'ع', name:'عبدالله العيسى',           dept:'نائب الرئيس للرقمنة وتقنية الأعمال',                   color:'#553899'},
    {initial:'إ', name:'إبراهيم سعد المطلق',       dept:'المدير التنفيذي للأمن السيبراني',                       color:'#186648'},
    {initial:'ع', name:'عبدالله أحمد المدني',      dept:'المدير التنفيذي لاستراتيجية وحوكمة التحول الرقمي',     color:'#B86800'},
    {initial:'س', name:'سعود مسفر المالكي',        dept:'المدير التنفيذي للطوارئ والأزمات والكوارث',             color:'#BE2A2A'},
    {initial:'ع', name:'عبدالعزيز عبدالله المطيري', dept:'مدير عام مركز الطوارئ والأزمات والكوارث',              color:'#1971E5'},
    {initial:'أ', name:'أحمد بن حميد الصبحي',     dept:'المدير التنفيذي لحلول الأعمال الرقمية',                 color:'#553899'}
  ]
};


/* ══ 2. DATE ════════════════════════════════════════════════════ */

function toArabicNum(n){
  return String(n).replace(/\d/g,function(d){return'٠١٢٣٤٥٦٧٨٩'[d];});
}

function setDates(){
  var now=new Date();
  var days=['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
  var arM=['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  var greg=days[now.getDay()]+'، '+toArabicNum(now.getDate())+' '+arM[now.getMonth()]+' '+toArabicNum(now.getFullYear());

  /* Hijri calc */
  var jd=Math.floor((now.getTime()/86400000)+2440587.5);
  var l=jd-1948440+10632,n=Math.floor((l-1)/10631);
  l=l-10631*n+354;
  var j=Math.floor((10985-l)/5316)*Math.floor(50*l/17719)+Math.floor(l/5670)*Math.floor(43*l/15238);
  l=l-Math.floor((30-j)/15)*Math.floor(17719*j/50)-Math.floor(j/16)*Math.floor(15238*j/43)+29;
  var hm=Math.floor(24*l/709),hd=l-Math.floor(709*hm/24),hy=30*n+j-30;
  var hMon=['محرم','صفر','ربيع الأول','ربيع الثاني','جمادى الأولى','جمادى الثانية',
            'رجب','شعبان','رمضان','شوال','ذو القعدة','ذو الحجة'];
  var hijri=toArabicNum(hd)+' '+hMon[hm-1]+' '+toArabicNum(hy)+'هـ';

  document.querySelectorAll('.js-date').forEach(function(e){e.textContent=greg;});
  document.querySelectorAll('.js-hijri').forEach(function(e){e.textContent=hijri;});

  var ed=document.getElementById('emp-date');
  if(ed){var y=now.getFullYear(),m=String(now.getMonth()+1).padStart(2,'0'),d=String(now.getDate()).padStart(2,'0');ed.value=y+'-'+m+'-'+d;}
}


/* ══ 3. CLOCK ═══════════════════════════════════════════════════ */

function updateClock(){
  var n=new Date(),el=document.getElementById('live-clock');
  if(el) el.textContent=('0'+n.getHours()).slice(-2)+':'+('0'+n.getMinutes()).slice(-2);
}
updateClock();
setInterval(updateClock,30000);


/* ══ 4. SCREEN SWITCHER ═════════════════════════════════════════ */

var SCREEN_MAP={exec:'screen-exec',director:'screen-director',employee:'screen-employee',admin:'screen-admin'};

function switchScreen(key,tabEl){
  document.querySelectorAll('.modal-overlay.open').forEach(function(m){m.classList.remove('open');});
  document.querySelectorAll('.screen').forEach(function(s){s.classList.remove('active');});
  document.querySelectorAll('.rb-tab').forEach(function(t){t.classList.remove('active');});
  var scr=document.getElementById(SCREEN_MAP[key]);
  if(scr) scr.classList.add('active');
  if(tabEl) tabEl.classList.add('active');
  window.scrollTo(0,0);
}


/* ══ 5. SECTION SWITCHER ════════════════════════════════════════ */

var SECTION_CLASS={exec:'exec-section',director:'dir-section',employee:'emp-section',admin:'adm-section'};

/* Helper: find sidebar item by its data-sec attribute */
function getNavItem(screenKey,sectionId){
  var screen=document.getElementById(SCREEN_MAP[screenKey]);
  if(!screen) return null;
  return screen.querySelector('.sb-item[data-sec="'+sectionId+'"]');
}

function showSection(screenKey,sectionId,clickedItem){
  var screen=document.getElementById(SCREEN_MAP[screenKey]);
  if(!screen) return;
  var cls=SECTION_CLASS[screenKey];
  if(cls) screen.querySelectorAll('.'+cls).forEach(function(s){s.style.display='none';});
  var tgt=document.getElementById(sectionId);
  if(tgt) tgt.style.display='flex';
  screen.querySelectorAll('.sb-item').forEach(function(i){i.classList.remove('active');});
  if(clickedItem) clickedItem.classList.add('active');
  window.scrollTo(0,0);
}


/* ══ 6. MODALS ══════════════════════════════════════════════════ */

function openModal(id){
  document.querySelectorAll('.modal-overlay.open').forEach(function(m){m.classList.remove('open');});
  var el=document.getElementById(id);if(el) el.classList.add('open');
}
function closeModal(id){
  var el=document.getElementById(id);if(el) el.classList.remove('open');
}
document.querySelectorAll('.modal-overlay').forEach(function(ov){
  ov.addEventListener('click',function(e){if(e.target===ov) ov.classList.remove('open');});
});
document.addEventListener('keydown',function(e){
  if(e.key==='Escape') document.querySelectorAll('.modal-overlay.open').forEach(function(m){m.classList.remove('open');});
});


/* ── TOAST — lightweight direct feedback, no modal ─────────── */
var _toastTimer = null;
function showToast(icon, text){
  var toast = document.getElementById('action-toast');
  var ti    = document.getElementById('action-toast-icon');
  var tt    = document.getElementById('action-toast-text');
  if(!toast) return;
  if(ti) ti.textContent = icon;
  if(tt) tt.textContent = text;
  toast.classList.add('action-toast-show');
  toast.style.display = 'flex';
  if(_toastTimer) clearTimeout(_toastTimer);
  _toastTimer = setTimeout(function(){
    toast.classList.remove('action-toast-show');
    setTimeout(function(){ toast.style.display='none'; }, 300);
  }, 2800);
}


/* ══ 7. MEETING ACTIONS ═════════════════════════════════════════ */

function openReschedule(meetingName){
  /* Direct action — no modal. Routes to secretary queue and shows toast. */
  showToast('⟳', 'تم إحالة طلب إعادة الجدولة إلى سكرتارية المكتب');
  /* Visual feedback on the button */
  setTimeout(function(){}, 400);
}
function openCancel(name){
  var c=document.getElementById('cancel-meeting-chip');if(c) c.textContent='📅 '+name;
  openModal('modal-cancel');
}
function selectDay(el){
  document.querySelectorAll('.day-chip').forEach(function(c){c.classList.remove('selected');});
  el.classList.add('selected');
}


/* ══ 8. ATTENDEES ════════════════════════════════════════════════ */

function openAttendees(title,key){
  var chip=document.getElementById('att-meeting-chip');
  if(chip) chip.textContent='📅 '+title;
  var body=document.getElementById('att-list-body');if(!body) return;
  var p=ATTENDEES[key]||[];
  body.innerHTML=p.map(function(a){
    return '<div class="att-item"><div class="att-avatar" style="background:'+a.color+';">'+a.initial+'</div>'+
           '<div><div class="att-name">'+a.name+'</div><div class="att-dept">'+a.dept+'</div></div></div>';
  }).join('');
  openModal('modal-attendees');
}


/* ══ 9. COMM DECISION ════════════════════════════════════════════ */

function openCommDecision(action, name){
  /* Direct action — no modal. Shows toast with result. */
  if(action==='قبول'){
    showToast('✓', 'تم قبول طلب ' + name + ' وإشعاره بالقرار');
  } else {
    showToast('⟳', 'تم تأجيل طلب ' + name + ' وإحالته للمتابعة');
  }
}


/* ══ 10. KPI POPUP ══════════════════════════════════════════════ */

function openKpiModal(type){
  var bar=document.getElementById('kpi-popup-bar'),ttl=document.getElementById('kpi-popup-title'),
      body=document.getElementById('kpi-popup-body');
  if(!bar) return;
  if(type==='meetings'){
    bar.style.background='var(--blue-mid)';ttl.textContent='اجتماعات اليوم';
    body.innerHTML=buildMeetingsPopup();
  } else if(type==='comms'){
    bar.style.background='var(--purple)';ttl.textContent='الاتصالات اليومية';
    body.innerHTML=buildCommsPopup();
  } else if(type==='week'){
    bar.style.background='var(--navy)';ttl.textContent='ملخص الأسبوع القادم';
    body.innerHTML=buildWeekPopup();
  }
  openModal('modal-kpi');
}

function buildMeetingsPopup(){
  var rows=[
    {time:'٩:٠٠ — ١٠:٠٠ ص',
     title:'استعراض خطة التحول الرقمي',
     room:'قاعة المركز التنفيذي',
     lbl:'جارٍ الآن', live:true, done:false},
    {time:'١٠:٠٠ — ١١:٣٠ ص',
     title:'الاجتماع الدوري لمتابعة سير الأعمال',
     room:'قاعة اجتماعات المعالي',
     lbl:'مؤكد', live:false, done:false},
    {time:'١:٣٠ — ٣:٠٠ م',
     title:'اجتماع الجاهزية المؤسسية',
     room:'قاعة المركز التنفيذي',
     lbl:'تم التعديل', live:false, done:false}
  ];

  /* Live meeting highlight strip at top (like screenshot) */
  var live = rows.filter(function(r){ return r.live; })[0];
  var h = '';
  if(live){
    h += '<div style="background:rgba(25,113,229,.06);border:1px solid rgba(25,113,229,.15);border-radius:8px;'+
         'padding:10px 14px;margin-bottom:14px;display:flex;align-items:center;gap:10px;">'+
         '<span style="width:8px;height:8px;border-radius:50%;background:var(--blue-mid);'+
         'flex-shrink:0;animation:pulse 2s infinite;display:inline-block;"></span>'+
         '<span style="font-size:13px;font-weight:600;color:var(--blue-mid);">'+
         'جارٍ الآن · '+live.title+'</span>'+
         '</div>';
  }

  /* Meeting list */
  rows.forEach(function(r, i){
    var isLast = (i === rows.length - 1);
    var badgeBg = r.live ? 'rgba(25,113,229,.1)' : 'var(--bg)';
    var badgeCo = r.live ? 'var(--blue-mid)' : 'var(--muted)';
    var badgeBd = r.live ? 'rgba(25,113,229,.2)' : 'var(--line)';
    h += '<div style="display:flex;align-items:center;gap:14px;padding:13px 0;'+
         (isLast ? '' : 'border-bottom:1px solid var(--line-soft);')+'">'+
         /* time on right */
         '<span style="font-size:11.5px;font-weight:700;color:var(--navy);white-space:nowrap;'+
         'flex-shrink:0;min-width:100px;text-align:right;">'+r.time+'</span>'+
         /* title + room */
         '<div style="flex:1;min-width:0;">'+
           '<div style="font-size:13px;font-weight:600;color:var(--ink);line-height:1.4;">'+r.title+'</div>'+
           '<div style="font-size:11px;color:var(--muted);margin-top:3px;">📍 '+r.room+'</div>'+
         '</div>'+
         /* status badge */
         '<span style="font-size:10px;font-weight:700;padding:4px 11px;border-radius:20px;'+
         'white-space:nowrap;flex-shrink:0;background:'+badgeBg+';color:'+badgeCo+';'+
         'border:1px solid '+badgeBd+';">'+r.lbl+'</span>'+
         '</div>';
  });
  return h;
}

function buildWeekPopup(){
  var cards=[
    {num:'5',col:'var(--blue-mid)',bg:'var(--blue-pale)',bdr:'#B4D0EC',lbl:'اجتماعات مجدولة'},
    {num:'2',col:'var(--purple)',bg:'var(--purple-bg)',bdr:'#A898D4',lbl:'اتصالات معلقة'},
    {num:'1',col:'var(--amber-mid)',bg:'var(--amber-bg)',bdr:'#DEB86A',lbl:'قيد إعادة الجدولة'},
    {num:'1',col:'var(--red-mid)',bg:'var(--red-bg)',bdr:'#E0AAAA',lbl:'أولوية عالية'}
  ];
  var h='<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;">';
  cards.forEach(function(c){
    h+='<div style="background:'+c.bg+';border:1px solid '+c.bdr+';border-radius:10px;padding:14px;text-align:center;">'+
       '<div style="font-size:28px;font-weight:700;color:'+c.col+';line-height:1;">'+c.num+'</div>'+
       '<div style="font-size:9.5px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.07em;margin-top:5px;">'+c.lbl+'</div></div>';
  });
  h+='</div>';
  var rows=[
    {day:'الثلاثاء ٣١ مارس',t:'اجتماع مع وفد وزارة البيئة والمياه',time:'١٠:٠٠ ص',room:'قاعة المركز التنفيذي'},
    {day:'الأربعاء ١ أبريل',t:'جلسة مراجعة استراتيجية الاستدامة المائية',time:'٩:٠٠ ص',room:'عبر الفيديو'},
    {day:'الخميس ٢ أبريل',t:'مراجعة ميزانية المشاريع الرأسمالية — Q2',time:'١١:٠٠ ص',room:'قاعة اجتماعات المعالي'},
    {day:'الأحد ٦ أبريل',t:'لقاء الشركاء الاستراتيجيين — مجموعة AECOM',time:'٢:٠٠ م',room:'قاعة المركز التنفيذي'},
    {day:'الاثنين ٧ أبريل',t:'اجتماع مجلس الإدارة — الدورة الربعية الثانية',time:'١٠:٠٠ ص',room:'قاعة اجتماعات المعالي'}
  ];
  rows.forEach(function(r){
    h+='<div style="display:grid;grid-template-columns:115px 1fr 68px;gap:12px;align-items:center;padding:11px 0;border-bottom:1px solid var(--line-soft);">'+
       '<div style="font-size:11px;font-weight:700;color:var(--muted);">'+r.day+'</div>'+
       '<div><div style="font-size:12.5px;font-weight:700;color:var(--ink);">'+r.t+'</div>'+
       '<div style="font-size:11px;color:var(--muted);margin-top:2px;">📍 '+r.room+'</div></div>'+
       '<div style="font-size:11px;font-weight:700;color:var(--navy);text-align:center;background:var(--bg);border-radius:7px;padding:4px 6px;">'+r.time+'</div></div>';
  });
  return h;
}

function buildCommsPopup(){
  /* Match screenshot: name+role (right) | subject (left). No action buttons. */
  return COMMS.map(function(c, i){
    var isLast = (i === COMMS.length - 1);
    return '<div style="display:flex;align-items:flex-start;gap:20px;padding:14px 0;'+
           (isLast ? '' : 'border-bottom:1px solid var(--line-soft);')+'">'+
           /* name + role on right side */
           '<div style="flex-shrink:0;text-align:right;min-width:130px;">'+
             '<div style="font-size:13.5px;font-weight:700;color:var(--ink);">'+c.requester+'</div>'+
             '<div style="font-size:11px;color:var(--muted);margin-top:2px;">'+c.position+'</div>'+
           '</div>'+
           /* subject on left */
           '<div style="flex:1;font-size:13px;color:var(--ink-soft);line-height:1.6;padding-top:1px;">'+
             c.subject+
           '</div>'+
           '</div>';
  }).join('');
}


/* ══ 11. EMPLOYEE ════════════════════════════════════════════════ */

function submitEmployeeRequest(){openModal('modal-submit-confirm');}
function openNewCommForm(){openModal('modal-new-comm');}
function openNewMeetingForm(){openModal('modal-new-meeting');}


/* ══ 12. TOGGLES ════════════════════════════════════════════════ */

document.querySelectorAll('.toggle-row').forEach(function(r){
  r.addEventListener('click',function(){var t=r.querySelector('.toggle');if(t) t.classList.toggle('on');});
});


/* ══ 13. TRCS — Daily Technical Readiness ═══════════════════════ */

var TRCS_STATE={};
var TRCS_TOTAL=18;

function trcsSetStatus(uid,status){
  TRCS_STATE[uid]=status;
  var wrap=document.getElementById('wrap-'+uid);
  if(wrap){wrap.classList.remove('trcs-ok','trcs-bad');wrap.classList.add('trcs-'+status);}
  var lbl=document.getElementById('status-'+uid);
  if(lbl){lbl.textContent=status==='ok'?'✓ يعمل':'✕ لا يعمل';lbl.className='trcs-item-status trcs-status-'+status;}
  if(wrap){
    wrap.querySelectorAll('.trcs-btn').forEach(function(b){b.classList.remove('active');});
    var ab=wrap.querySelector('.trcs-btn.'+status);if(ab) ab.classList.add('active');
  }
  trcsUpdateCounter();
}

function trcsUpdateCounter(){
  var done=Object.keys(TRCS_STATE).length,bad=Object.values(TRCS_STATE).filter(function(v){return v==='bad';}).length;
  var c=document.getElementById('trcs-completion-count');
  if(c) c.textContent=toArabicNum(done)+' / '+toArabicNum(TRCS_TOTAL)+' مكتمل';
  var s=document.getElementById('trcs-overall-status');
  if(s){
    if(done===0){s.style.display='none';}
    else if(bad>0){s.style.display='';s.className='pill high';s.textContent=toArabicNum(bad)+' مشكلة';}
    else{s.style.display='';s.className='pill teal';s.textContent=done===TRCS_TOTAL?'✓ جاهز بالكامل':'جارٍ الفحص';}
  }
  /* Update progress bar */
  var pct=Math.round(done/TRCS_TOTAL*100);
  var pf=document.getElementById('trcs-progress-fill'),pp=document.getElementById('trcs-progress-pct');
  if(pf) pf.style.width=pct+'%';
  if(pp) pp.textContent=toArabicNum(pct)+'٪';
}

function trcsSubmit(){
  var op=document.getElementById('trcs-operator'),name=op?op.value:'';
  if(!name){alert('يرجى اختيار اسم منفذ الجولة أولاً');return;}
  var done=Object.keys(TRCS_STATE).length,bad=Object.values(TRCS_STATE).filter(function(v){return v==='bad';}).length,ok=done-bad;
  var notes=(document.getElementById('trcs-notes-field')||{}).value||'—';
  var now=new Date(),days=['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
  var arM=['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  var timeStr=('0'+now.getHours()).slice(-2)+':'+('0'+now.getMinutes()).slice(-2);
  var dateStr=days[now.getDay()]+'، '+now.getDate()+' '+arM[now.getMonth()]+' '+now.getFullYear();

  /* Show submit confirmation banner */
  var banner=document.getElementById('trcs-submitted-banner');
  if(banner){
    banner.style.display='block';
    var meta=document.getElementById('trcs-submit-meta');
    if(meta) meta.innerHTML=
      '<strong>'+name+' هو من نفّذ الجولة الصباحية</strong><br>'+
      dateStr+' — الساعة '+timeStr+'<br>'+
      'بنود مفحوصة: '+done+' / '+TRCS_TOTAL+
      (bad>0?' &nbsp;·&nbsp; <span style="color:var(--red-mid);">⚠ مشكلات: '+bad+'</span>':' &nbsp;·&nbsp; <span style="color:var(--green);">✓ لا مشكلات</span>');
  }

  /* Render Team Leader dashboard */
  var lv=document.getElementById('trcs-leader-view');
  if(!lv) return;

  var statusBg=bad>0?'var(--red-bg)':'var(--green-bg)';
  var statusBdr=bad>0?'#E0AAAA':'#9ACDB4';
  var statusIcon=bad>0?'⚠':'✓';
  var statusColor=bad>0?'var(--red)':'var(--green)';
  var statusText=bad>0?'تم رصد '+bad+' مشكلة — تحتاج إلى متابعة':'جميع الأنظمة جاهزة تماماً';
  var completionPct=Math.round(done/TRCS_TOTAL*100);

  lv.innerHTML=
    /* Accountability banner */
    '<div class="trcs-lv-banner">'+
      '<div class="trcs-lv-performer">'+
        '<div class="trcs-lv-performer-avatar">'+name.charAt(0)+'</div>'+
        '<div>'+
          '<div class="trcs-lv-performer-line"><strong>'+name+'</strong> هو من نفّذ الجولة الصباحية</div>'+
          '<div class="trcs-lv-performer-sub">'+dateStr+' &nbsp;·&nbsp; الساعة '+timeStr+'</div>'+
        '</div>'+
        '<div class="trcs-lv-time-badge">'+timeStr+'</div>'+
      '</div>'+
    '</div>'+
    /* Status card */
    '<div class="trcs-lv-status-card" style="background:'+statusBg+';border-color:'+statusBdr+';">'+
      '<div class="trcs-lv-status-icon" style="color:'+statusColor+';">'+statusIcon+'</div>'+
      '<div class="trcs-lv-status-text" style="color:'+statusColor+';">'+statusText+'</div>'+
      '<div class="trcs-lv-status-pct">'+completionPct+'٪ مكتمل</div>'+
    '</div>'+
    /* Stats grid */
    '<div class="trcs-lv-stats">'+
      '<div class="trcs-lv-stat"><div class="trcs-lv-stat-num" style="color:var(--blue-mid);">'+done+'</div><div class="trcs-lv-stat-lbl">مفحوص</div></div>'+
      '<div class="trcs-lv-stat"><div class="trcs-lv-stat-num" style="color:var(--green);">'+ok+'</div><div class="trcs-lv-stat-lbl">يعمل</div></div>'+
      '<div class="trcs-lv-stat" style="'+(bad>0?'background:var(--red-bg);border-color:#E0AAAA;':'')+'"><div class="trcs-lv-stat-num" style="color:'+(bad>0?'var(--red)':'var(--muted)')+';">'+bad+'</div><div class="trcs-lv-stat-lbl">مشكلة</div></div>'+
      '<div class="trcs-lv-stat"><div class="trcs-lv-stat-num" style="color:var(--muted);">'+(TRCS_TOTAL-done)+'</div><div class="trcs-lv-stat-lbl">لم يُفحص</div></div>'+
    '</div>'+
    /* Notes */
    (notes!=='—'?'<div class="trcs-lv-notes"><div class="trcs-lv-notes-label">ملاحظات الجولة</div><div class="trcs-lv-notes-text">'+notes+'</div></div>':'')+
  '';
}

function trcsReset(){
  TRCS_STATE={};
  document.querySelectorAll('[id^="wrap-trcs-"]').forEach(function(e){e.classList.remove('trcs-ok','trcs-bad');});
  document.querySelectorAll('[id^="status-trcs-"]').forEach(function(e){e.textContent='';e.className='trcs-item-status';});
  document.querySelectorAll('.trcs-btn.active').forEach(function(e){e.classList.remove('active');});
  var f=document.getElementById('trcs-notes-field');if(f) f.value='';
  var b=document.getElementById('trcs-submitted-banner');if(b) b.style.display='none';
  var lv=document.getElementById('trcs-leader-view');
  if(lv) lv.innerHTML='<div class="trcs-leader-empty"><div class="trcs-leader-empty-icon">📋</div><div class="trcs-leader-empty-title">في انتظار تقرير الجاهزية الصباحي</div><div class="trcs-leader-empty-sub">بعد إرسال تقرير الجولة ستظهر هنا نتائج الفحص ومعلومات المنفذ.</div></div>';
  var pf=document.getElementById('trcs-progress-fill'),pp=document.getElementById('trcs-progress-pct');
  if(pf) pf.style.width='0%';if(pp) pp.textContent='٠٪';
  trcsUpdateCounter();
}


/* ══ 14. INIT ═══════════════════════════════════════════════════ */
setDates();


/* ============================================================
   NEW FEATURES — اجتماعات مجالس الإدارة + ولجان أخرى
   Script additions for UMMS v2.6+
   DO NOT REMOVE OR MODIFY ABOVE THIS LINE
   ============================================================ */


/* ══ BOARD MEETINGS DATA ════════════════════════════════════════
   كل دورة = اجتماعان في نفس الشهر:
     منتصف الشهر  → مجلس إدارة الهيئة السعودية للمياه
     نهاية الشهر  → مجلس إدارة شركة نقل المياه
   الدورات: يناير · أبريل · يوليو · أكتوبر
   ═══════════════════════════════════════════════════════════ */
var BOARD_MEETINGS = [
  /* ── الدورة الأولى — يناير ٢٠٢٦ ── */
  { id:'bm-q1a', boardType:'swa',
    title:'اجتماع مجلس إدارة الهيئة السعودية للمياه — الدورة الأولى ٢٠٢٦',
    date:'2026-01-15', time:'١٠:٠٠ ص' },
  { id:'bm-q1b', boardType:'transfer',
    title:'اجتماع مجلس إدارة شركة نقل المياه — الدورة الأولى ٢٠٢٦',
    date:'2026-01-29', time:'١١:٠٠ ص' },

  /* ── الدورة الثانية — أبريل ٢٠٢٦ ── */
  { id:'bm-q2a', boardType:'swa',
    title:'اجتماع مجلس إدارة الهيئة السعودية للمياه — الدورة الثانية ٢٠٢٦',
    date:'2026-04-16', time:'١٠:٠٠ ص' },
  { id:'bm-q2b', boardType:'transfer',
    title:'اجتماع مجلس إدارة شركة نقل المياه — الدورة الثانية ٢٠٢٦',
    date:'2026-04-30', time:'١١:٠٠ ص' },

  /* ── الدورة الثالثة — يوليو ٢٠٢٦ ── */
  { id:'bm-q3a', boardType:'swa',
    title:'اجتماع مجلس إدارة الهيئة السعودية للمياه — الدورة الثالثة ٢٠٢٦',
    date:'2026-07-15', time:'١٠:٠٠ ص' },
  { id:'bm-q3b', boardType:'transfer',
    title:'اجتماع مجلس إدارة شركة نقل المياه — الدورة الثالثة ٢٠٢٦',
    date:'2026-07-31', time:'١١:٠٠ ص' },

  /* ── الدورة الرابعة — أكتوبر ٢٠٢٦ ── */
  { id:'bm-q4a', boardType:'swa',
    title:'اجتماع مجلس إدارة الهيئة السعودية للمياه — الدورة الرابعة ٢٠٢٦',
    date:'2026-10-14', time:'١٠:٠٠ ص' },
  { id:'bm-q4b', boardType:'transfer',
    title:'اجتماع مجلس إدارة شركة نقل المياه — الدورة الرابعة ٢٠٢٦',
    date:'2026-10-30', time:'١١:٠٠ ص' }
];


/* ══ OTHER COMMITTEES DATA ══════════════════════════════════════ */
var OTHER_COMMITTEES = [
  { id:'oc-001',
    title:'اجتماع لجنة الاستدامة المائية الربعي',
    committee:'لجنة الاستدامة المائية',
    entity:'الهيئة السعودية للمياه',
    date:'2026-04-22', time:'١٠:٠٠ ص', notes:'مراجعة مؤشرات الاستدامة Q1' },
  { id:'oc-002',
    title:'اجتماع اللجنة الفنية للبنية التحتية',
    committee:'اللجنة الفنية',
    entity:'الهيئة السعودية للمياه',
    date:'2026-04-28', time:'١٠:٠٠ ص', notes:'مراجعة مشاريع التوسعة' },
  { id:'oc-003',
    title:'اجتماع لجنة الشؤون المالية',
    committee:'لجنة الشؤون المالية',
    entity:'الهيئة السعودية للمياه',
    date:'2026-05-05', time:'١٠:٠٠ ص', notes:'اعتماد ميزانية Q2' },
  { id:'oc-004',
    title:'اجتماع لجنة الموارد البشرية',
    committee:'لجنة الموارد البشرية',
    entity:'الهيئة السعودية للمياه',
    date:'2026-05-12', time:'١٠:٠٠ ص', notes:'مراجعة خطة التوظيف السنوية' }
];

/* ══ COMMITTEE ATTENDEES ════════════════════════════════════════ */
var COMM_ATTENDEES = {};


/* ══ STATE ══════════════════════════════════════════════════════ */
var _boardFilter    = 'all';       /* all | swa | transfer */
var _boardCalYear   = new Date().getFullYear();
var _boardCalMonth  = new Date().getMonth(); /* 0-indexed */
var _commFilter     = 'all';       /* all | upcoming | past */


/* ══ UTILITY: Date helpers ══════════════════════════════════════ */

/* Parse 'YYYY-MM-DD' → Date at midnight local */
function parseDate(str) {
  var p = str.split('-');
  return new Date(+p[0], +p[1]-1, +p[2]);
}

/* Days between two dates (positive = future) */
function daysDiff(dateStr) {
  var today = new Date();
  today.setHours(0,0,0,0);
  var d = parseDate(dateStr);
  return Math.round((d - today) / 86400000);
}

/* Arabic month names */
var AR_MONTHS = ['يناير','فبراير','مارس','أبريل','مايو','يونيو',
                 'يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];

/* Format 'YYYY-MM-DD' → Arabic display string */
function formatDateAr(dateStr) {
  var d = parseDate(dateStr);
  return toArabicNum(d.getDate()) + ' ' + AR_MONTHS[d.getMonth()] + ' ' + toArabicNum(d.getFullYear());
}

/* Build countdown label object: { label, cls } */
function buildCountdown(dateStr) {
  var diff = daysDiff(dateStr);
  if (diff < 0) return { label: 'انتهى', unit: '', cls: 'past' };
  if (diff === 0) return { label: 'اليوم', unit: '', cls: 'urgent' };
  if (diff === 1) return { label: 'غداً', unit: '', cls: 'urgent' };
  if (diff <= 7)  return { label: toArabicNum(diff), unit: 'أيام', cls: 'urgent' };
  if (diff <= 30) return { label: toArabicNum(diff), unit: 'يوم', cls: 'soon' };
  /* Months */
  var months = Math.round(diff / 30);
  var monthLabel = months === 1 ? 'شهر' : months === 2 ? 'شهرين' : toArabicNum(months) + ' أشهر';
  return { label: 'متبقي', unit: monthLabel, cls: 'far' };
}

/* Board type display info */
function boardTypeInfo(bType) {
  if (bType === 'swa')      return { label: 'مجلس إدارة الهيئة السعودية للمياه', color: '#1971E5' };
  if (bType === 'transfer') return { label: 'مجلس إدارة نقل المياه',            color: '#C07000' };
  return { label: '', color: '#6B84A0' };
}

/* Meeting type label */
function meetTypeLabel(t) {
  return t === 'mid' ? 'منتصف الشهر' : 'نهاية الشهر';
}


/* ══ BOARD: Render — unified chronological list, upcoming only ══ */

function renderBoardSection() {
  var today    = new Date(); today.setHours(0,0,0,0);
  var upcoming = BOARD_MEETINGS
    .filter(function(m){ return parseDate(m.date) >= today; })
    .sort(function(a,b){ return parseDate(a.date) - parseDate(b.date); });

  /* Sidebar badge */
  var badge = document.getElementById('board-upcoming-badge');
  if(badge){ badge.textContent = upcoming.length > 0 ? toArabicNum(upcoming.length) : ''; }

  /* Section count */
  var sc = document.getElementById('board-section-count');
  if(sc) sc.textContent = toArabicNum(upcoming.length) + ' اجتماع قادم';

  var el = document.getElementById('board-cards-all');
  if(!el) return;

  if(upcoming.length === 0){
    el.innerHTML = '<div class="board-empty-state">لا توجد اجتماعات قادمة</div>';
    return;
  }

  el.innerHTML = upcoming.map(function(m, i){
    var diff   = daysDiff(m.date);
    var isSwa  = m.boardType === 'swa';
    var color  = isSwa ? '#1971E5' : '#C07000';
    var isNext = i === 0;

    /* Countdown pill */
    var cdPill;
    if(diff === 0)
      cdPill = '<span class="bcd-pill bcd-today">اليوم</span>';
    else if(diff === 1)
      cdPill = '<span class="bcd-pill bcd-urgent">غداً</span>';
    else if(diff <= 7)
      cdPill = '<span class="bcd-pill bcd-urgent">متبقي ' + toArabicNum(diff) + ' أيام</span>';
    else if(diff <= 30)
      cdPill = '<span class="bcd-pill bcd-soon">متبقي ' + toArabicNum(diff) + ' يوم</span>';
    else {
      var mo  = Math.round(diff / 30);
      var ml  = mo === 1 ? 'شهر' : mo === 2 ? 'شهرين' : toArabicNum(mo) + ' أشهر';
      cdPill  = '<span class="bcd-pill bcd-far">متبقي ' + ml + '</span>';
    }

    return '<div class="bcard' + (isNext ? ' bcard-next' : '') + '" style="border-right-color:' + color + ';">' +
      '<div class="bcard-top">' +
        '<div class="bcard-title">' + m.title + '</div>' +
        cdPill +
      '</div>' +
      '<div class="bcard-meta">' +
        '<span class="bcard-meta-item">' +
          '<svg width="12" height="12" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="9" r="7"/><path d="M9 5v4l2 2"/></svg>' +
          formatDateAr(m.date) + ' · ' + m.time +
        '</span>' +
      '</div>' +
    '</div>';
  }).join('');
}

/* kept for compatibility */
function renderBoardCards() {}



function renderCommittees() {
  var today = new Date(); today.setHours(0,0,0,0);
  var upcoming = OTHER_COMMITTEES
    .filter(function(c){ return parseDate(c.date) >= today; })
    .sort(function(a,b){ return parseDate(a.date)-parseDate(b.date); });

  var badge = document.getElementById('comm-upcoming-badge');
  if(badge){ badge.textContent = upcoming.length > 0 ? toArabicNum(upcoming.length) : ''; }

  var sc = document.getElementById('comm-section-count');
  if(sc) sc.textContent = toArabicNum(upcoming.length) + ' قادمة';

  var el = document.getElementById('committee-list');
  if(!el) return;
  if(upcoming.length === 0){
    el.innerHTML = '<div class="board-empty-state">لا توجد اجتماعات قادمة</div>';
    return;
  }

  el.innerHTML = upcoming.map(function(c){
    var diff = daysDiff(c.date);
    var cdPill;
    if(diff === 0)      cdPill = '<span class="bcd-pill bcd-today">اليوم</span>';
    else if(diff === 1) cdPill = '<span class="bcd-pill bcd-urgent">غداً</span>';
    else if(diff <= 7)  cdPill = '<span class="bcd-pill bcd-urgent">متبقي '+toArabicNum(diff)+' أيام</span>';
    else if(diff <= 30) cdPill = '<span class="bcd-pill bcd-soon">متبقي '+toArabicNum(diff)+' يوم</span>';
    else { var mo=Math.round(diff/30); cdPill='<span class="bcd-pill bcd-far">متبقي '+(mo===1?'شهر':mo===2?'شهرين':toArabicNum(mo)+' أشهر')+'</span>'; }

    /* Attendees chip — only if data exists */
    var att = COMM_ATTENDEES[c.id] || [];
    var attChip = att.length > 0
      ? '<span class="att-chip" onclick="openCommAttendees(\''+c.id+'\',\''+c.title+'\');event.stopPropagation();">'+toArabicNum(att.length)+'</span>'
      : '';

    return '<div class="ccard">'+
      '<div class="ccard-left">'+
        '<div class="ccard-title">'+c.title+'</div>'+
        '<div class="ccard-meta">'+
          '<span>'+c.committee+'</span>'+
          (c.entity ? '<span>·</span><span>'+c.entity+'</span>' : '')+
          '<span>·</span>'+
          '<span>'+
            '<svg width="11" height="11" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="9" r="7"/><path d="M9 5v4l2 2"/></svg>'+
            formatDateAr(c.date)+
            (c.time ? ' · '+c.time : '')+
          '</span>'+
        '</div>'+
      '</div>'+
      '<div class="ccard-right">'+
        attChip+
        cdPill+
      '</div>'+
    '</div>';
  }).join('');
}

/* Open attendees popup for a committee meeting */
function openCommAttendees(commId, title) {
  var chip = document.getElementById('att-meeting-chip');
  if(chip) chip.textContent = '📅 ' + title;

  var body = document.getElementById('att-list-body');
  if(!body) return;

  var att = COMM_ATTENDEES[commId] || [];
  body.innerHTML = att.map(function(a){
    return '<div class="att-item">'+
      '<div class="att-avatar" style="background:'+a.color+';">'+a.initial+'</div>'+
      '<div>'+
        '<div class="att-name">'+a.name+'</div>'+
        '<div class="att-dept">'+a.role+'</div>'+
      '</div>'+
    '</div>';
  }).join('');

  openModal('modal-attendees');
}


/* ══ stubs ══════════════════════════════════════════════════════ */
function setBoardFilter(){}
function setCommFilter(){}
function toggleBoardHistory(){}
function openBoardAddModal(){}
function editBoardMeeting(){}
function saveBoardMeeting(){}
function deleteBoardMeeting(){}
function openCommitteeAddModal(){}
function saveCommitteeMeeting(){}
function deleteCommittee(){}
function renderBoardCalendar(){}
function renderBoardUpcoming(){ renderBoardSection(); }
function refreshBoardSection(){ renderBoardSection(); }
function boardCalPrev(){}
function boardCalNext(){}
function getBoardFiltered(){ return BOARD_MEETINGS; }
function buildBoardCard(){}
function buildBoardRow(){}
function buildCommRow(){}
function buildCountdown(){ return {label:'',unit:'',cls:'far'}; }




/* ══ AUTO-UPDATE: Countdown refresh every minute ════════════════ */
setInterval(function(){
  /* Re-render countdowns if the board section is visible */
  var bs = document.getElementById('sec-exec-board');
  if(bs && bs.style.display !== 'none'){
    renderBoardSection();
  }
  var cs = document.getElementById('sec-exec-committees');
  if(cs && cs.style.display !== 'none'){
    renderCommittees();
  }
}, 60000);


/* ══ AUTO-UPDATE: Dashboard refreshes when data changes ═════════
   If MEETINGS or COMMS arrays are modified elsewhere, call
   refreshDashboard() to push updates to the exec dashboard KPIs.
   ═══════════════════════════════════════════════════════════ */
function refreshDashboard() {
  /* Update meetings count KPI */
  var kpiMeet = document.querySelector('#sec-exec-dash .kpi-card:first-child .kpi-value');
  if(kpiMeet) kpiMeet.textContent = toArabicNum(MEETINGS.length);
  var kpiSub  = document.querySelector('#sec-exec-dash .kpi-card:first-child .kpi-sub');
  if(kpiSub){
    var confirmed = MEETINGS.filter(function(m){ return m.status === 'confirmed'; }).length;
    var modified  = MEETINGS.filter(function(m){ return m.status === 'modified'; }).length;
    if(confirmed || modified)
      kpiSub.innerHTML = toArabicNum(confirmed) + ' مؤكدة · <b>' + toArabicNum(modified) + ' معدّل</b>';
  }
  /* Update comms count KPI */
  var kpiComm = document.querySelector('#sec-exec-dash .kpi-card:nth-child(2) .kpi-value');
  if(kpiComm) kpiComm.textContent = toArabicNum(COMMS.length);
  /* Update sidebar comms badge */
  var sb = document.querySelector('.sb-item[data-sec="sec-exec-comms"] .sb-badge');
  if(sb) sb.textContent = toArabicNum(COMMS.length);
}


/* ══ INIT: Render new sections on page load ══════════════════════ */
(function initNewSections(){
  renderBoardSection();
  renderCommittees();
})();



/* ============================================================
   NEW: مكتب الرئيس — إدارة الاجتماعات + MoM + المهام
   ============================================================ */

/* ══ DATA ═══════════════════════════════════════════════════ */

var MANAGED_MEETINGS = [
  { id:'mm-001', title:'استعراض خطة التحول الرقمي',         entity:'قطاع تقنية المعلومات',    date:'2026-04-11', time:'٩:٠٠ ص',  room:'قاعة المركز التنفيذي',        priority:'high',   notes:'', agenda:['استعراض التقدم المحرز','مناقشة التحديات','الخطوات القادمة'] },
  { id:'mm-002', title:'الاجتماع الدوري لمتابعة سير الأعمال',entity:'مكتب الرئيس',            date:'2026-04-11', time:'١٠:٠٠ ص', room:'قاعة اجتماعات المعالي',       priority:'medium', notes:'', agenda:['متابعة قرارات الجلسة السابقة','تقارير النشاط'] },
  { id:'mm-003', title:'اجتماع الجاهزية المؤسسية',           entity:'إدارة المخاطر',           date:'2026-04-11', time:'١:٣٠ م',  room:'قاعة المركز التنفيذي',        priority:'medium', notes:'', agenda:['مراجعة مؤشرات الجاهزية','خطط الطوارئ'] },
  { id:'mm-004', title:'مناقشة نظام التعريفة المائية',       entity:'الشؤون التنظيمية',        date:'2026-04-15', time:'١٠:٠٠ ص', room:'قاعة اجتماعات المعالي',       priority:'high',   notes:'', agenda:['مراجعة اللوائح التنظيمية','التعديلات المقترحة'] },
  { id:'mm-005', title:'لقاء مع الوفد الكوري لتقنيات المياه',entity:'العلاقات الدولية',        date:'2026-04-20', time:'١١:٠٠ ص', room:'قاعة المركز التنفيذي',        priority:'high',   notes:'مطلوب ترجمة فورية', agenda:['التعريف بالهيئة','استعراض التقنيات المقدمة','نقاش الشراكة'] },
  { id:'mm-006', title:'مراجعة تقرير الجودة الفصلي',         entity:'الجودة والرقابة',          date:'2026-04-28', time:'٩:٠٠ ص',  room:'طاولة مكتب المعالي للاجتماعات', priority:'normal', notes:'', agenda:['نتائج التدقيق','التوصيات'] }
];

var MOM_LIST = [
  { id:'mom-001', meetingTitle:'استعراض خطة التحول الرقمي', date:'2026-04-11', summary:'تم استعراض التقدم المحرز في خطة التحول الرقمي للمياه 2026 وتحديد التحديات الرئيسية.', decisions:['اعتماد ميزانية إضافية للبنية التحتية','تشكيل فريق عمل متخصص بحلول 15 أبريل'], notes:'يُرفع تقرير تفصيلي خلال أسبوعين.' },
  { id:'mom-002', meetingTitle:'الاجتماع الدوري لمتابعة سير الأعمال', date:'2026-04-11', summary:'مراجعة شاملة لتقدم جميع المبادرات الاستراتيجية وأداء الوحدات.', decisions:['تسريع تسليم مشروع البنية التحتية','مراجعة خطة التوظيف للربع الثالث'], notes:'' },
  { id:'mom-003', meetingTitle:'اجتماع الجاهزية المؤسسية', date:'2026-04-11', summary:'مراجعة مؤشرات الجاهزية التشغيلية وخطط استمرارية الأعمال.', decisions:['تحديث دليل إجراءات الطوارئ','تنظيم تدريب على إدارة الأزمات'], notes:'موعد التنفيذ: نهاية أبريل.' }
];

var TASKS_LIST = [
  { id:'task-001', title:'إعداد أجندة اجتماع مجلس الإدارة الثاني',  assignee:'تركي بن عتيق',       due:'2026-04-14', priority:'high',   status:'pending', meeting:'اجتماع مجلس إدارة الهيئة' },
  { id:'task-002', title:'إشعار الحضور باجتماع الوفد الكوري',        assignee:'م. خالد الرشيد',     due:'2026-04-13', priority:'high',   status:'pending', meeting:'لقاء مع الوفد الكوري' },
  { id:'task-003', title:'توفير مترجم فوري للاجتماع الدولي',          assignee:'م. نورة السالم',     due:'2026-04-15', priority:'high',   status:'pending', meeting:'لقاء مع الوفد الكوري' },
  { id:'task-004', title:'حجز قاعة المركز التنفيذي ليوم الخميس',      assignee:'تركي بن عتيق',       due:'2026-04-12', priority:'medium', status:'done',    meeting:'' },
  { id:'task-005', title:'إرسال محضر اجتماع التحول الرقمي للحضور',    assignee:'تركي بن عتيق',       due:'2026-04-13', priority:'medium', status:'pending', meeting:'استعراض خطة التحول الرقمي' },
  { id:'task-006', title:'متابعة قرار تشكيل فريق العمل التقني',       assignee:'م. عبدالله المدني',  due:'2026-04-15', priority:'medium', status:'done',    meeting:'استعراض خطة التحول الرقمي' },
  { id:'task-007', title:'تحديث دليل إجراءات الطوارئ',                assignee:'م. المالكي',          due:'2026-04-30', priority:'normal', status:'pending', meeting:'اجتماع الجاهزية المؤسسية' },
  { id:'task-008', title:'إعداد تقرير الجودة الفصلي',                 assignee:'م. ريم الحارثي',     due:'2026-04-25', priority:'normal', status:'done',    meeting:'مراجعة تقرير الجودة الفصلي' }
];

var _mgmtFilter   = 'all';
var _taskFilter   = 'all';
var _mgmtSearch   = '';
var _mgmtSort     = 'date';

/* ══ HELPERS ════════════════════════════════════════════════ */

function priorityLabel(p) {
  if(p==='high')   return '<span class="pill high">عاجل</span>';
  if(p==='medium') return '<span class="pill medium">متوسط</span>';
  return '<span class="pill">عادي</span>';
}

function statusLabel(s, due) {
  var today = new Date(); today.setHours(0,0,0,0);
  var dueD  = due ? new Date(due) : null;
  if(s==='done') return '<span class="pill confirmed">✓ مكتملة</span>';
  if(dueD && dueD < today) return '<span class="pill high">متأخرة</span>';
  return '<span class="pill pending">معلقة</span>';
}

function formatDateAr2(d) {
  if(!d) return '—';
  var parts = d.split('-');
  var mo = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  return toArabicNum(+parts[2])+' '+mo[+parts[1]-1]+' '+toArabicNum(+parts[0]);
}

function isOverdue(s, due) {
  if(s==='done') return false;
  var today = new Date(); today.setHours(0,0,0,0);
  return due && new Date(due) < today;
}

function updateTaskCounts() {
  var pending  = TASKS_LIST.filter(function(t){ return t.status==='pending' && !isOverdue(t.status,t.due); }).length;
  var done     = TASKS_LIST.filter(function(t){ return t.status==='done'; }).length;
  var overdue  = TASKS_LIST.filter(function(t){ return isOverdue(t.status,t.due); }).length;
  var total    = TASKS_LIST.length;
  var el;
  el = document.getElementById('tasks-pending-count');  if(el) el.textContent = toArabicNum(pending+overdue);
  el = document.getElementById('tasks-done-count');     if(el) el.textContent = toArabicNum(done);
  el = document.getElementById('tasks-overdue-count');  if(el) el.textContent = toArabicNum(overdue);
  el = document.getElementById('tasks-section-count');  if(el) el.textContent = toArabicNum(total)+' مهمة';
  el = document.getElementById('tasks-badge');          if(el) el.textContent = toArabicNum(pending+overdue) || '';
}

/* ══ MEETINGS MGMT RENDER ═══════════════════════════════════ */

function getMgmtFiltered() {
  var today = new Date(); today.setHours(0,0,0,0);
  return MANAGED_MEETINGS.filter(function(m) {
    var d = new Date(m.date);
    if(_mgmtFilter==='upcoming' && d < today) return false;
    if(_mgmtFilter==='past'     && d >= today) return false;
    if(_mgmtSearch && m.title.indexOf(_mgmtSearch)===-1 && m.entity.indexOf(_mgmtSearch)===-1) return false;
    return true;
  }).sort(function(a,b) {
    if(_mgmtSort==='date')     return new Date(a.date)-new Date(b.date);
    if(_mgmtSort==='priority') { var o={high:0,medium:1,normal:2}; return o[a.priority]-o[b.priority]; }
    return a.title.localeCompare(b.title);
  });
}

function renderMeetingsMgmt() {
  var list = getMgmtFiltered();
  var el   = document.getElementById('meetings-mgmt-list');
  if(!el) return;
  var mc   = document.getElementById('mgmt-count');
  if(mc) mc.textContent = toArabicNum(list.length)+' اجتماع';

  if(list.length===0) {
    el.innerHTML='<div class="board-empty-state">لا توجد اجتماعات في هذا التصنيف</div>';
    return;
  }

  el.innerHTML = list.map(function(m) {
    var today = new Date(); today.setHours(0,0,0,0);
    var mDate = new Date(m.date);
    var isPast = mDate < today;
    return '<div class="mm-card'+(isPast?' mm-past':'')+'">'
      +'<div class="mm-card-main">'
        +'<div class="mm-card-title">'+m.title+'</div>'
        +'<div class="mm-card-meta">'
          +'<span class="mm-meta-item"><svg width="11" height="11" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="9" r="7"/><path d="M9 5v4l2 2"/></svg>'+formatDateAr2(m.date)+' · '+m.time+'</span>'
          +'<span class="mm-meta-item"><svg width="11" height="11" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 14c0-2.5 2-4 4-4s4 1.5 4 4"/><circle cx="6" cy="6" r="3"/></svg>'+m.entity+'</span>'
          +'<span class="mm-meta-item">📍 '+m.room+'</span>'
          +(m.agenda.length ? '<span class="mm-meta-item">📋 '+toArabicNum(m.agenda.length)+' بنود أجندة</span>' : '')
        +'</div>'
      +'</div>'
      +'<div class="mm-card-right">'
        +priorityLabel(m.priority)
        +'<button class="mm-btn" onclick="viewMeetingDetail(\''+m.id+'\')">عرض</button>'
        +'<button class="mm-btn" onclick="editMeetingMgmt(\''+m.id+'\')">تعديل</button>'
        +'<button class="mm-btn mm-btn-del" onclick="deleteMeetingMgmt(\''+m.id+'\')">حذف</button>'
      +'</div>'
    +'</div>';
  }).join('');
}

function filterMeetingsMgmt() {
  _mgmtSearch = (document.getElementById('mgmt-search')||{}).value||'';
  renderMeetingsMgmt();
}
function setMgmtFilter(f, el) {
  _mgmtFilter=f;
  document.querySelectorAll('#sec-dir-meetings-mgmt .dir-filter-tab').forEach(function(b){b.classList.remove('active');});
  if(el) el.classList.add('active');
  renderMeetingsMgmt();
}
function sortMeetingsMgmt(v) { _mgmtSort=v; renderMeetingsMgmt(); }

/* ══ MEETING MGMT CRUD ══════════════════════════════════════ */

function openMeetingMgmtModal() {
  document.getElementById('meet-mgmt-edit-id').value='';
  document.getElementById('meet-mgmt-modal-title').textContent='إنشاء اجتماع جديد';
  document.getElementById('mm-title').value='';
  document.getElementById('mm-entity').value='';
  document.getElementById('mm-date').value='';
  document.getElementById('mm-notes').value='';
  document.getElementById('mm-priority').value='medium';
  renderAgendaItems([]);
  openModal('modal-meeting-mgmt');
}

function editMeetingMgmt(id) {
  var m=MANAGED_MEETINGS.find(function(x){return x.id===id;});
  if(!m) return;
  document.getElementById('meet-mgmt-edit-id').value=id;
  document.getElementById('meet-mgmt-modal-title').textContent='تعديل الاجتماع';
  document.getElementById('mm-title').value=m.title;
  document.getElementById('mm-entity').value=m.entity;
  document.getElementById('mm-date').value=m.date;
  document.getElementById('mm-notes').value=m.notes||'';
  document.getElementById('mm-priority').value=m.priority;
  renderAgendaItems(m.agenda||[]);
  openModal('modal-meeting-mgmt');
}

function saveMeetingMgmt() {
  var id    = document.getElementById('meet-mgmt-edit-id').value;
  var title = document.getElementById('mm-title').value.trim();
  var entity= document.getElementById('mm-entity').value.trim();
  var date  = document.getElementById('mm-date').value;
  var time  = document.getElementById('mm-time').value;
  var room  = document.getElementById('mm-room').value;
  var prio  = document.getElementById('mm-priority').value;
  var notes = document.getElementById('mm-notes').value.trim();
  var agenda= getAgendaItems();

  if(!title||!date){ showToast('⚠','يرجى تعبئة العنوان والتاريخ'); return; }

  if(id) {
    var idx=MANAGED_MEETINGS.findIndex(function(x){return x.id===id;});
    if(idx>-1) Object.assign(MANAGED_MEETINGS[idx],{title,entity,date,time,room,priority:prio,notes,agenda});
    showToast('✓','تم تعديل الاجتماع بنجاح');
  } else {
    MANAGED_MEETINGS.push({id:'mm-'+Date.now(),title,entity,date,time,room,priority:prio,notes,agenda});
    showToast('✓','تم إنشاء الاجتماع بنجاح');
  }
  closeModal('modal-meeting-mgmt');
  renderMeetingsMgmt();
}

function deleteMeetingMgmt(id) {
  var idx=MANAGED_MEETINGS.findIndex(function(x){return x.id===id;});
  if(idx>-1){ MANAGED_MEETINGS.splice(idx,1); renderMeetingsMgmt(); showToast('🗑','تم حذف الاجتماع'); }
}

/* Agenda items inside modal */
var _agendaItems = [];
function renderAgendaItems(items) {
  _agendaItems = items.slice();
  var el=document.getElementById('agenda-items-list'); if(!el) return;
  if(_agendaItems.length===0){el.innerHTML='';return;}
  el.innerHTML=_agendaItems.map(function(a,i){
    return '<div class="agenda-item-row">'
      +'<span class="agenda-num">'+toArabicNum(i+1)+'.</span>'
      +'<input class="form-input agenda-input" value="'+a+'" oninput="_agendaItems['+i+']=this.value">'
      +'<button class="mm-btn mm-btn-del" onclick="removeAgendaItem('+i+')">×</button>'
    +'</div>';
  }).join('');
}
function addAgendaItem(){ _agendaItems.push(''); renderAgendaItems(_agendaItems); }
function removeAgendaItem(i){ _agendaItems.splice(i,1); renderAgendaItems(_agendaItems); }
function getAgendaItems(){ return _agendaItems.filter(function(a){return a.trim()!==''}); }

/* Meeting detail view */
function viewMeetingDetail(id) {
  var m=MANAGED_MEETINGS.find(function(x){return x.id===id;}); if(!m) return;
  var relTasks=TASKS_LIST.filter(function(t){return t.meeting&&t.meeting.indexOf(m.title)>-1;});
  var relMom  =MOM_LIST.filter(function(mo){return mo.meetingTitle===m.title;});

  var html='<div class="detail-header">'
    +'<div class="detail-title">'+m.title+'</div>'
    +'<div class="detail-meta">'
      +'<span>📅 '+formatDateAr2(m.date)+' · '+m.time+'</span>'
      +'<span>📍 '+m.room+'</span>'
      +'<span>🏢 '+m.entity+'</span>'
      +priorityLabel(m.priority)
    +'</div>'
  +'</div>';

  if(m.agenda&&m.agenda.length){
    html+='<div class="detail-section"><div class="detail-section-label">الأجندة</div><ol class="detail-agenda">'
      +m.agenda.map(function(a){return '<li>'+a+'</li>';}).join('')
    +'</ol></div>';
  }
  if(m.notes){ html+='<div class="detail-section"><div class="detail-section-label">ملاحظات</div><p class="detail-notes">'+m.notes+'</p></div>'; }
  if(relMom.length){
    html+='<div class="detail-section"><div class="detail-section-label">محاضر الاجتماع ('+toArabicNum(relMom.length)+')</div>';
    relMom.forEach(function(mo){ html+='<div class="detail-mom-row">📋 '+mo.date+'  —  '+mo.summary.substring(0,60)+'...</div>'; });
    html+='</div>';
  }
  if(relTasks.length){
    html+='<div class="detail-section"><div class="detail-section-label">المهام المرتبطة ('+toArabicNum(relTasks.length)+')</div>';
    relTasks.forEach(function(t){
      html+='<div class="detail-task-row">'+statusLabel(t.status,t.due)+' '+t.title+' — '+t.assignee+'</div>';
    });
    html+='</div>';
  }

  document.getElementById('detail-content').innerHTML=html;
  var eb=document.getElementById('detail-edit-btn');
  if(eb) eb.onclick=function(){ closeModal('modal-meeting-detail'); editMeetingMgmt(id); };
  openModal('modal-meeting-detail');
}

/* ══ MOM CRUD ═══════════════════════════════════════════════ */

var _momDecisions = [];

function renderMomList() {
  var el=document.getElementById('mom-list'); if(!el) return;
  if(MOM_LIST.length===0){ el.innerHTML='<div class="board-empty-state">لا توجد محاضر بعد</div>'; return; }
  el.innerHTML=MOM_LIST.map(function(mo){
    return '<div class="mom-card">'
      +'<div class="mom-card-top">'
        +'<div class="mom-card-title">'+mo.meetingTitle+'</div>'
        +'<span class="mom-date">'+formatDateAr2(mo.date)+'</span>'
      +'</div>'
      +'<p class="mom-summary">'+mo.summary+'</p>'
      +(mo.decisions.length?'<div class="mom-decisions"><div class="mom-dec-label">القرارات ('+toArabicNum(mo.decisions.length)+')</div>'
        +mo.decisions.map(function(d,i){return '<div class="mom-dec-item"><span class="mom-dec-num">'+toArabicNum(i+1)+'</span>'+d+'</div>';}).join('')
      +'</div>':'')
      +'<div class="mom-actions">'
        +'<button class="mm-btn" onclick="editMom(\''+mo.id+'\')">تعديل</button>'
        +'<button class="mm-btn mm-btn-del" onclick="deleteMom(\''+mo.id+'\')">حذف</button>'
      +'</div>'
    +'</div>';
  }).join('');
}

function openMomModal() {
  document.getElementById('mom-edit-id').value='';
  document.getElementById('mom-modal-title').textContent='محضر اجتماع جديد';
  document.getElementById('mom-summary').value='';
  document.getElementById('mom-notes').value='';
  _momDecisions=[];
  renderMomDecisions();
  openModal('modal-mom');
}

function editMom(id) {
  var mo=MOM_LIST.find(function(x){return x.id===id;}); if(!mo) return;
  document.getElementById('mom-edit-id').value=id;
  document.getElementById('mom-modal-title').textContent='تعديل المحضر';
  document.getElementById('mom-meeting').value=mo.meetingTitle;
  document.getElementById('mom-date').value=mo.date;
  document.getElementById('mom-summary').value=mo.summary;
  document.getElementById('mom-notes').value=mo.notes||'';
  _momDecisions=mo.decisions.slice();
  renderMomDecisions();
  openModal('modal-mom');
}

function saveMom() {
  var id      = document.getElementById('mom-edit-id').value;
  var meeting = document.getElementById('mom-meeting').value;
  var date    = document.getElementById('mom-date').value;
  var summary = document.getElementById('mom-summary').value.trim();
  var notes   = document.getElementById('mom-notes').value.trim();
  var decs    = _momDecisions.filter(function(d){return d.trim()!=='';});
  if(!summary){ showToast('⚠','يرجى كتابة ملخص الاجتماع'); return; }
  if(id) {
    var idx=MOM_LIST.findIndex(function(x){return x.id===id;});
    if(idx>-1) Object.assign(MOM_LIST[idx],{meetingTitle:meeting,date,summary,notes,decisions:decs});
    showToast('✓','تم تعديل المحضر');
  } else {
    MOM_LIST.push({id:'mom-'+Date.now(),meetingTitle:meeting,date:date||new Date().toISOString().slice(0,10),summary,notes,decisions:decs});
    showToast('✓','تم حفظ المحضر');
  }
  closeModal('modal-mom');
  renderMomList();
}

function deleteMom(id) {
  var idx=MOM_LIST.findIndex(function(x){return x.id===id;});
  if(idx>-1){ MOM_LIST.splice(idx,1); renderMomList(); showToast('🗑','تم حذف المحضر'); }
}

function renderMomDecisions() {
  var el=document.getElementById('mom-decisions-list'); if(!el) return;
  el.innerHTML=_momDecisions.map(function(d,i){
    return '<div class="agenda-item-row">'
      +'<span class="agenda-num">'+toArabicNum(i+1)+'.</span>'
      +'<input class="form-input agenda-input" value="'+d+'" oninput="_momDecisions['+i+']=this.value">'
      +'<button class="mm-btn mm-btn-del" onclick="removeMomDecision('+i+')">×</button>'
    +'</div>';
  }).join('');
}
function addMomDecision(){ _momDecisions.push(''); renderMomDecisions(); }
function removeMomDecision(i){ _momDecisions.splice(i,1); renderMomDecisions(); }

/* ══ TASKS CRUD ═════════════════════════════════════════════ */

function renderTasks() {
  var today = new Date(); today.setHours(0,0,0,0);
  var list  = TASKS_LIST.filter(function(t) {
    if(_taskFilter==='pending') return t.status==='pending' && !isOverdue(t.status,t.due);
    if(_taskFilter==='done')    return t.status==='done';
    if(_taskFilter==='overdue') return isOverdue(t.status,t.due);
    return true;
  });

  var el=document.getElementById('tasks-list'); if(!el) return;
  if(list.length===0){ el.innerHTML='<div class="board-empty-state">لا توجد مهام في هذا التصنيف</div>'; return; }

  el.innerHTML = list.map(function(t) {
    var overdue = isOverdue(t.status,t.due);
    return '<div class="task-row'+(overdue?' task-overdue':'')+(t.status==='done'?' task-done':'')+'">'
      +'<div class="task-check-wrap">'
        +'<button class="task-check-btn'+(t.status==='done'?' checked':'')+'" onclick="toggleTask(\''+t.id+'\')" title="تغيير الحالة">'
          +(t.status==='done'?'✓':'')
        +'</button>'
      +'</div>'
      +'<div class="task-info">'
        +'<div class="task-title">'+(t.status==='done'?'<s>':'')+t.title+(t.status==='done'?'</s>':'')+'</div>'
        +'<div class="task-meta">'
          +(t.assignee?'<span>👤 '+t.assignee+'</span>':'')
          +(t.due?'<span>'+(overdue?'⚠ ':'📅 ')+formatDateAr2(t.due)+'</span>':'')
          +(t.meeting?'<span>🗓 '+t.meeting+'</span>':'')
        +'</div>'
      +'</div>'
      +'<div class="task-right">'
        +statusLabel(t.status,t.due)
        +priorityLabel(t.priority)
        +'<button class="mm-btn" onclick="editTask(\''+t.id+'\')">تعديل</button>'
        +'<button class="mm-btn mm-btn-del" onclick="deleteTask(\''+t.id+'\')">حذف</button>'
      +'</div>'
    +'</div>';
  }).join('');
  updateTaskCounts();
}

function toggleTask(id) {
  var t=TASKS_LIST.find(function(x){return x.id===id;}); if(!t) return;
  t.status = t.status==='done' ? 'pending' : 'done';
  renderTasks();
  showToast(t.status==='done'?'✓':'⟳', t.status==='done'?'تم الإكمال':'تم إعادة فتح المهمة');
}

function setTaskFilter(f, el) {
  _taskFilter=f;
  document.querySelectorAll('#sec-dir-tasks .dir-filter-tab').forEach(function(b){b.classList.remove('active');});
  if(el) el.classList.add('active');
  renderTasks();
}

function openTaskModal() {
  document.getElementById('task-edit-id').value='';
  document.getElementById('task-modal-title').textContent='إضافة مهمة جديدة';
  document.getElementById('task-title').value='';
  document.getElementById('task-assignee').value='';
  document.getElementById('task-due').value='';
  document.getElementById('task-meeting').value='';
  document.getElementById('task-priority').value='medium';
  openModal('modal-task');
}

function editTask(id) {
  var t=TASKS_LIST.find(function(x){return x.id===id;}); if(!t) return;
  document.getElementById('task-edit-id').value=id;
  document.getElementById('task-modal-title').textContent='تعديل المهمة';
  document.getElementById('task-title').value=t.title;
  document.getElementById('task-assignee').value=t.assignee||'';
  document.getElementById('task-due').value=t.due||'';
  document.getElementById('task-meeting').value=t.meeting||'';
  document.getElementById('task-priority').value=t.priority;
  openModal('modal-task');
}

function saveTask() {
  var id       = document.getElementById('task-edit-id').value;
  var title    = document.getElementById('task-title').value.trim();
  var assignee = document.getElementById('task-assignee').value.trim();
  var due      = document.getElementById('task-due').value;
  var meeting  = document.getElementById('task-meeting').value;
  var priority = document.getElementById('task-priority').value;
  if(!title){ showToast('⚠','يرجى كتابة عنوان المهمة'); return; }
  if(id) {
    var idx=TASKS_LIST.findIndex(function(x){return x.id===id;});
    if(idx>-1) Object.assign(TASKS_LIST[idx],{title,assignee,due,meeting,priority});
    showToast('✓','تم تعديل المهمة');
  } else {
    TASKS_LIST.push({id:'task-'+Date.now(),title,assignee,due,meeting,priority,status:'pending'});
    showToast('✓','تم إضافة المهمة');
  }
  closeModal('modal-task');
  renderTasks();
}

function deleteTask(id) {
  var idx=TASKS_LIST.findIndex(function(x){return x.id===id;});
  if(idx>-1){ TASKS_LIST.splice(idx,1); renderTasks(); showToast('🗑','تم حذف المهمة'); }
}

/* ══ INIT ════════════════════════════════════════════════════ */
renderMeetingsMgmt();
renderMomList();
renderTasks();
updateTaskCounts();
