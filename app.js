/* ===================================
   Chunav Saathi — app.js
   Interactive Indian Election Guide
   =================================== */

// =============================================
// ===== MULTILINGUAL SUPPORT =====
// =============================================

const LANGUAGES = [
  {
    code:'en', name:'English', native:'English', flag:'🇬🇧', dir:'ltr',
    placeholder:'Ask anything about Indian government or elections...',
    welcome:'Namaste! 🙏 I\'m <strong>Chunav Saathi</strong>, your Indian Government & Election guide.<br/>With Gemini AI, I can answer <em>anything</em> — MLAs, MPs, Constitution, Panchayati Raj, and more.',
    prompts:['What is an MLA\'s role?','How does voting work?','What is FPTP?','MLA vs MP?','Hung Parliament?','What is NOTA?'],
    toastMsg:'Language set to English 🇬🇧'
  },
  {
    code:'hi', name:'Hindi', native:'हिन्दी', flag:'🇮🇳', dir:'ltr',
    placeholder:'भारतीय सरकार या चुनाव के बारे में कुछ भी पूछें...',
    welcome:'नमस्ते! 🙏 मैं <strong>चुनाव साथी</strong> हूँ — आपका भारतीय सरकार और चुनाव गाइड।<br/>Gemini AI से जुड़कर मैं MLA, MP, संविधान, पंचायती राज सब कुछ समझा सकता हूँ।',
    prompts:['MLA की क्या भूमिका है?','वोट कैसे करें?','FPTP क्या है?','MLA और MP में अंतर?','त्रिशंकु संसद क्या है?','NOTA क्या है?'],
    toastMsg:'भाषा हिन्दी में बदल दी गई 🇮🇳'
  },
  {
    code:'ta', name:'Tamil', native:'தமிழ்', flag:'🇮🇳', dir:'ltr',
    placeholder:'இந்திய அரசாங்கம் பற்றி எதுவும் கேளுங்கள்...',
    welcome:'வணக்கம்! 🙏 நான் <strong>Chunav Saathi</strong> — உங்கள் இந்திய தேர்தல் வழிகாட்டி.<br/>MLA, MP, அரசியலமைப்பு பற்றி எதுவும் கேளுங்கள்!',
    prompts:['MLA பங்கு என்ன?','வாக்களிப்பு எப்படி?','FPTP என்றால் என்ன?','MLA vs MP?','தொங்கு நாடாளுமன்றம்?','NOTA என்றால் என்ன?'],
    toastMsg:'மொழி தமிழாக மாற்றப்பட்டது 🇮🇳'
  },
  {
    code:'te', name:'Telugu', native:'తెలుగు', flag:'🇮🇳', dir:'ltr',
    placeholder:'భారత సర్కారం గురించి ఏదైనా అడగండి...',
    welcome:'నమస్కారం! 🙏 నేను <strong>Chunav Saathi</strong> — మీ భారత ప్రభుత్వ మరియు ఎన్నికల గైడ్.<br/>MLA, MP, రాజ్యాంగం గురించి ఏదైనా అడగండి!',
    prompts:['MLA పాత్ర ఏమిటి?','ఓటు ఎలా వేయాలి?','FPTP అంటే ఏమిటి?','MLA vs MP?','వేలాడే పార్లమెంటు?','NOTA అంటే ఏమిటి?'],
    toastMsg:'భాష తెలుగులోకి మార్చబడింది 🇮🇳'
  },
  {
    code:'kn', name:'Kannada', native:'ಕನ್ನಡ', flag:'🇮🇳', dir:'ltr',
    placeholder:'ಭಾರತ ಸರ್ಕಾರದ ಬಗ್ಗೆ ಏನಾದರೂ ಕೇಳಿ...',
    welcome:'ನಮಸ್ಕಾರ! 🙏 ನಾನು <strong>Chunav Saathi</strong> — ನಿಮ್ಮ ಭಾರತೀಯ ಚುನಾವಣೆ ಮಾರ್ಗದರ್ಶಿ.<br/>MLA, MP, ಸಂವಿಧಾನ ಬಗ್ಗೆ ಏನಾದರೂ ಕೇಳಿ!',
    prompts:['MLA ಪಾತ್ರ ಏನು?','ಮತ ಹಾಕುವುದು ಹೇಗೆ?','FPTP ಎಂದರೇನು?','MLA vs MP?','ಅಲ್ಪಮತ ಸಂಸತ್ತು?','NOTA ಎಂದರೇನು?'],
    toastMsg:'ಭಾಷೆ ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ 🇮🇳'
  },
  {
    code:'ml', name:'Malayalam', native:'മലയാളം', flag:'🇮🇳', dir:'ltr',
    placeholder:'ഇന്ത്യൻ സർക്കാരിനെക്കുറിച്ച് എന്തും ചോദിക്കൂ...',
    welcome:'നമസ്കാരം! 🙏 ഞാൻ <strong>Chunav Saathi</strong> — നിങ്ങളുടെ ഇന്ത്യൻ ഇലക്ഷൻ ഗൈഡ്.<br/>MLA, MP, ഭരണഘടന ഇവയെക്കുറിച്ച് ഏതും ചോദിക്കൂ!',
    prompts:['MLAയുടെ ഭൂമിക?','വോട്ട് ചെയ്യുന്നത് എങ്ങനെ?','FPTP എന്താണ്?','MLA vs MP?','തൂക്കുസഭ?','NOTA എന്താണ്?'],
    toastMsg:'ഭാഷ മലയാളത്തിലേക്ക് മാറ്റി 🇮🇳'
  },
  {
    code:'bn', name:'Bengali', native:'বাংলা', flag:'🇮🇳', dir:'ltr',
    placeholder:'ভারতীয় সরকার সম্পর্কে যেকোনো প্রশ্ন করুন...',
    welcome:'নমস্কার! 🙏 আমি <strong>Chunav Saathi</strong> — আপনার ভারতীয় নির্বাচন গাইড।<br/>MLA, MP, সংবিধান সম্পর্কে যেকোনো প্রশ্ন করুন!',
    prompts:['MLAর ভূমিকা কী?','ভোট দেবেন কীভাবে?','FPTP কী?','MLA vs MP?','ঝুলন্ত সংসদ?','NOTA কী?'],
    toastMsg:'ভাষা বাংলায় পরিবর্তিত হয়েছে 🇮🇳'
  },
  {
    code:'mr', name:'Marathi', native:'मराठी', flag:'🇮🇳', dir:'ltr',
    placeholder:'भारतीय सरकारबद्दल काहीही विचारा...',
    welcome:'नमस्कार! 🙏 मी <strong>Chunav Saathi</strong> — तुमचा भारतीय सरकार आणि निवडणूक मार्गदर्शक.<br/>MLA, MP, राज्यघटना याबद्दल काहीही विचारा!',
    prompts:['MLA ची भूमिका काय?','मत कसे द्यायचे?','FPTP म्हणजे काय?','MLA vs MP?','त्रिशंकू संसद?','NOTA म्हणजे काय?'],
    toastMsg:'भाषा मराठीत बदलली 🇮🇳'
  },
  {
    code:'gu', name:'Gujarati', native:'ગુજરાતી', flag:'🇮🇳', dir:'ltr',
    placeholder:'ભારત સરકાર વિશે કંઈ પણ પૂછો...',
    welcome:'નમસ્તે! 🙏 હું <strong>Chunav Saathi</strong> — તમારો ભારતીય ચૂંટણી માર્ગદર્શક.<br/>MLA, MP, બંધારણ વિશે ગમે તે પૂછો!',
    prompts:['MLAની ભૂમિકા શું?','મત કેવી રીતે આપવો?','FPTP શું છે?','MLA vs MP?','ત્રિશંકુ સંસદ?','NOTA શું છે?'],
    toastMsg:'ભાષા ગુજરાતીમાં બદલી 🇮🇳'
  },
  {
    code:'pa', name:'Punjabi', native:'ਪੰਜਾਬੀ', flag:'🇮🇳', dir:'ltr',
    placeholder:'ਭਾਰਤੀ ਸਰਕਾਰ ਬਾਰੇ ਕੁਝ ਵੀ ਪੁੱਛੋ...',
    welcome:'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! 🙏 ਮੈਂ <strong>Chunav Saathi</strong> ਹਾਂ — ਤੁਹਾਡਾ ਭਾਰਤੀ ਚੋਣ ਗਾਈਡ।<br/>MLA, MP, ਸੰਵਿਧਾਨ ਬਾਰੇ ਕੁਝ ਵੀ ਪੁੱਛੋ!',
    prompts:['MLA ਦੀ ਭੂਮਿਕਾ?','ਵੋਟ ਕਿਵੇਂ ਪਾਉਣੀ?','FPTP ਕੀ ਹੈ?','MLA vs MP?','ਲਟਕਦੀ ਸੰਸਦ?','NOTA ਕੀ ਹੈ?'],
    toastMsg:'ਭਾਸ਼ਾ ਪੰਜਾਬੀ ਵਿੱਚ ਬਦਲ ਦਿੱਤੀ 🇮🇳'
  },
  {
    code:'ur', name:'Urdu', native:'اردو', flag:'🇵🇰', dir:'rtl',
    placeholder:'ہندوستانی حکومت کے بارے میں کچھ بھی پوچھیں...',
    welcome:'!آداب 🙏 میں <strong>Chunav Saathi</strong> ہوں — آپ کا ہندوستانی انتخابات گائیڈ<br/>!MLA، MP، آئین کے بارے میں کچھ بھی پوچھیں',
    prompts:['MLA کا کردار؟','ووٹ کیسے ڈالیں؟','FPTP کیا ہے؟','MLA vs MP؟','معلق پارلیمنٹ؟','NOTA کیا ہے؟'],
    toastMsg:'زبان اردو میں تبدیل کر دی گئی 🇵🇰'
  },
  {
    code:'or', name:'Odia', native:'ଓଡ଼ିଆ', flag:'🇮🇳', dir:'ltr',
    placeholder:'ଭାରତ ସରକାର ବିଷୟରେ ଯାହା ହେଉ ପଚାର...',
    welcome:'ନମସ୍କାର! 🙏 ମୁଁ <strong>Chunav Saathi</strong> — ଆପଣଙ୍କ ଭାରତୀୟ ନିର୍ବାଚନ ଗାଇଡ।<br/>MLA, MP, ସମ୍ବିଧାନ ବିଷୟରେ ଯାହା ହେଉ ପଚାରନ୍ତୁ!',
    prompts:['MLA ର ଭୂମିକା?','ଭୋଟ୍ ଦେବେ କିପରି?','FPTP କ\'ଣ?','MLA vs MP?','ଝୁଲନ୍ତ ସଂସଦ?','NOTA କ\'ଣ?'],
    toastMsg:'ଭାଷା ଓଡ଼ିଆରେ ବଦଳାଗଲା 🇮🇳'
  },
];

// Module-level current language (reliable, not window._chatLang)
let currentLang = LANGUAGES.find(l => l.code === (localStorage.getItem('chunav_lang') || 'en')) || LANGUAGES[0];

function buildLangGrid() {
  const grid = document.getElementById('langGrid');
  if (!grid) return;
  grid.innerHTML = '';
  LANGUAGES.forEach(lang => {
    const card = document.createElement('div');
    card.className = 'lang-card' + (lang.code === currentLang.code ? ' active-lang' : '');
    card.innerHTML = `
      <span class="lang-card-flag">${lang.flag}</span>
      <span class="lang-card-native">${lang.native}</span>
      <span class="lang-card-name">${lang.name}</span>
    `;
    card.addEventListener('click', () => selectLanguage(lang));
    grid.appendChild(card);
  });
}

function selectLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('chunav_lang', lang.code);

  // Update sidebar indicator
  const flagEl  = document.getElementById('langFlag');
  const labelEl = document.getElementById('langLabel');
  if (flagEl)  flagEl.textContent  = lang.flag;
  if (labelEl) labelEl.textContent = lang.native;

  // Update chat input placeholder + direction
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    chatInput.placeholder = lang.placeholder;
    chatInput.style.direction = lang.dir || 'ltr';
  }

  // Update chat window welcome message & quick prompts
  updateChatWelcome(lang);

  // Hide overlay with animation
  closeLangPicker();

  // Show toast notification
  showToast(lang.toastMsg);

  // Apply UI text translations
  if (typeof applyTranslations === 'function') {
    applyTranslations(lang.code);
  }
}

function updateChatWelcome(lang) {
  const chatWindow = document.getElementById('chatWindow');
  if (!chatWindow) return;
  chatWindow.innerHTML = `
    <div class="chat-msg bot">
      <div class="msg-avatar">🗳️</div>
      <div class="msg-bubble" style="direction:${lang.dir||'ltr'}">
        <p>${lang.welcome}</p>
        <div class="quick-prompts">
          ${lang.prompts.map(p => `<button class="prompt-btn" onclick="askQuestion('${p.replace(/'/g,"\\'")}')"> ${p}</button>`).join('')}
        </div>
      </div>
    </div>`;
}

function closeLangPicker() {
  const overlay = document.getElementById('langOverlay');
  if (!overlay) return;
  overlay.classList.add('hiding');
  setTimeout(() => overlay.classList.add('hidden'), 480);
}

function openLangPicker() {
  const overlay = document.getElementById('langOverlay');
  if (!overlay) return;
  buildLangGrid(); // refresh active highlight
  overlay.classList.remove('hidden', 'hiding');
}

function showToast(msg) {
  let toast = document.getElementById('langToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'langToast';
    toast.className = 'lang-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}


// ===== SIDEBAR TOGGLE =====

const sidebar   = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
    sidebar.classList.remove('open');
  }
});

// ===== ACTIVE NAV ON SCROLL =====
const sections  = document.querySelectorAll('.section');
const navLinks  = document.querySelectorAll('.nav-link');

const observerOpts = { root: null, threshold: 0.3 };

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, observerOpts);

sections.forEach(s => sectionObserver.observe(s));

// ===== CONCEPT CARD TOGGLE =====
function toggleConcept(card) {
  const wasOpen = card.classList.contains('open');
  document.querySelectorAll('.concept-card').forEach(c => c.classList.remove('open'));
  if (!wasOpen) card.classList.add('open');
}

// ===== CHAT KNOWLEDGE BASE =====
const KB = [
  {
    keys: ['vote', 'voting', 'how to vote', 'cast vote', 'booth'],
    answer: `**Voting in India — Step by Step** 🗳️

1. **Arrive** at your assigned polling booth between **7 AM – 6 PM**.
2. **Show ID** — Voter ID, Aadhaar, passport or any approved photo document.
3. **Ink mark** is applied to your left index finger (prevents double voting).
4. **Press the EVM button** next to your chosen candidate — a beep confirms your vote.
5. **VVPAT slip** shows your candidate's name for 7 seconds, then drops into a sealed box.

✅ That's it — you've voted!`
  },
  {
    keys: ['fptp', 'first past the post', 'how winner is decided', 'who wins'],
    answer: `**First Past the Post (FPTP)** 🏆

India uses the FPTP system. The candidate with the **most votes** in a constituency wins — even without getting 50%+ of votes.

**Example:** In a 4-way race:
- Candidate A → 35% ✅ **WINNER**
- Candidate B → 30%
- Candidate C → 20%
- Candidate D → 15%

Candidate A wins with just 35%! This is why large vote splits can produce surprising results.`
  },
  {
    keys: ['hung parliament', 'hung', 'no majority', 'coalition'],
    answer: `**Hung Parliament** ⚠️

When **no single party wins 272+ seats** in the Lok Sabha, it's called a **Hung Parliament**.

**What happens next:**
- The President invites the **largest party/alliance** to form the government.
- Parties negotiate and form a **coalition**.
- The coalition must prove its majority through a **floor test** in Parliament.

**Historical examples:**
- 1996 elections → Hung parliament, 3 PMs in 2 years
- 1999 → NDA coalition formed under Vajpayee
- 2004 → UPA coalition formed under Manmohan Singh`
  },
  {
    keys: ['candidate', 'mp', 'stand for election', 'contest', 'eligibility'],
    answer: `**Who Can Be a Candidate (MP)?** 🏛️

To stand for Lok Sabha elections, a person must:

✅ Be an **Indian citizen**
✅ Be at least **25 years old**
✅ Be a registered voter in any constituency
✅ Not hold any government office of profit
✅ Not be declared bankrupt or of unsound mind by a court
✅ Not have been convicted with **2+ years imprisonment**

Candidates must resign from government posts before filing nominations.`
  },
  {
    keys: ['nota', 'none of the above'],
    answer: `**NOTA — None of The Above** 📋

NOTA was introduced by the Supreme Court in 2013. It allows voters to **reject all candidates** on the ballot.

- NOTA appears as the **last option** on the EVM.
- If NOTA gets the most votes, the candidate with the **next highest votes** still wins (NOTA doesn't invalidate the election).
- It serves as a **protest vote** — sending a message to parties about candidate quality.

NOTA is represented by a cross (✗) symbol on the EVM.`
  },
  {
    keys: ['evm', 'electronic voting machine', 'vvpat', 'machine'],
    answer: `**EVM & VVPAT — India's Voting Technology** 🔲

**EVM (Electronic Voting Machine):**
- Replaced paper ballots in Indian elections
- Stores votes electronically in a tamper-proof chip
- Runs on battery (no internet connection — fully offline)
- Consists of: Ballot Unit + Control Unit

**VVPAT (Voter Verifiable Paper Audit Trail):**
- Attached to the EVM
- Prints a paper slip showing your chosen candidate's name + symbol
- Slip is visible for **7 seconds**, then drops into sealed box
- Allows physical audit of electronic votes if needed

Together, they make voting secure, accurate, and verifiable.`
  },
  {
    keys: ['timeline', 'how long', 'duration', 'phases', 'schedule'],
    answer: `**Election Timeline** 📅

A typical Lok Sabha election spans **6–10 weeks**:

| Phase | Duration | Activity |
|-------|----------|----------|
| Week 0 | Day 1 | ECI announces dates, MCC begins |
| Week 1–2 | ~2 weeks | Nomination filing & scrutiny |
| Week 2–6 | ~4 weeks | Campaign period |
| Week 3–8 | ~5 weeks | Multi-phase polling (up to 7 phases) |
| Week 8–9 | 1–2 days | Vote counting & results |
| Week 9–10 | ~1 week | Government formation |

**Polling hours:** 7 AM – 6 PM on polling day.
**Phases:** Up to 7 phases to allow security redeployment across India.`
  },
  {
    keys: ['eci', 'election commission', 'who conducts', 'authority'],
    answer: `**Election Commission of India (ECI)** ⚖️

The ECI is an **independent constitutional body** established under Article 324 of the Constitution.

**Key roles:**
- Announces election dates and schedules
- Enforces the **Model Code of Conduct** (MCC)
- Registers political parties and candidates
- Deploys central security forces
- Monitors campaign spending
- Declares results and certifies winners

**Structure:** Led by the **Chief Election Commissioner (CEC)** + 2 Election Commissioners.

The ECI operates completely independently of the government in power — ensuring free and fair elections.`
  },
  {
    keys: ['government formation', 'prime minister', 'pm', 'after results', 'who becomes pm'],
    answer: `**How the Government is Formed** 🏛️

After results are declared:

1. **272+ seats** → Majority party's leader is invited by the **President** to form the government.
2. **Less than 272** → Hung parliament. Parties negotiate a coalition. Largest alliance proves majority.
3. **PM is sworn in** by the President at Rashtrapati Bhavan.
4. PM selects Cabinet ministers — sworn in together.
5. **Floor Test**: If there's doubt, PM must prove majority by winning a vote in Parliament.

The President plays a **ceremonial but crucial** role in inviting the PM and administering the oath of office.`
  },
  {
    keys: ['constituency', 'lok sabha seat', 'how many seats', 'parliament'],
    answer: `**Constituencies & Parliament** 🗺️

India's Lok Sabha has **543 constituencies** — each elects exactly **one MP**.

- Each constituency is a geographic area with roughly equal population.
- Boundaries are drawn by the **Delimitation Commission**.
- There are **131 reserved constituencies** — 84 for SC (Scheduled Castes), 47 for ST (Scheduled Tribes).

**Rajya Sabha** (Upper House):
- 245 seats (238 elected by state legislatures + 12 nominated by President)
- Not directly elected by voters — state MLAs vote for Rajya Sabha MPs.

The Lok Sabha has **more power** — only Lok Sabha can pass the budget and give a confidence vote to the PM.`
  },
  {
    keys: ['model code of conduct', 'mcc', 'rules during election'],
    answer: `**Model Code of Conduct (MCC)** 📜

The MCC is a set of guidelines issued by the ECI that all parties, candidates, and the government must follow during elections.

**It comes into effect** immediately when election dates are announced.

**Key rules:**
- No new government schemes or freebies can be announced
- Government resources can't be used for campaign work
- No hate speech or communal appeals
- **Silence period:** No campaigning 48 hours before polling
- Star campaigners must get ECI permission for rallies

**Violation** can lead to disqualification of candidates or legal action.`
  }
];

// Fallback responses for unrecognized questions
const FALLBACKS = [
  `That's a great question! I don't have a specific answer for that yet. Try asking about:
- **How voting works** step by step
- **FPTP** (how winners are decided)
- **EVM & VVPAT** machines
- **Government formation** after results
- **Who can be a candidate**
- **The election timeline**`,

  `Hmm, I'm still learning about that topic! Here are some things I *can* explain:
- 🗳️ The voting experience at a booth
- 📅 The election timeline (6–8 weeks)
- 🏆 How winners are decided (FPTP)
- 🏛️ How the PM and government are formed
- ❌ What NOTA means`,

  `I'm not sure about that specific detail. You might want to visit the **Election Commission's official website** at eci.gov.in for authoritative information. Meanwhile, I can explain things like the voting process, key concepts, or government formation!`
];

// ===== GEMINI API CONFIG =====
const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// Conversation history for context
let conversationHistory = [];
const MAX_HISTORY = 10; // keep last 10 exchanges

function getSystemPrompt() {
  const lang = currentLang ? currentLang.name : 'English';
  return `You are **Chunav Saathi**, a friendly, expert Indian civics and government education assistant.

Your expertise covers:
- Indian elections (Lok Sabha, Vidhan Sabha, Panchayat, local body elections)
- Government structure (President, PM, Cabinet, Parliament, State Governments, Governor)
- Roles & duties of MLA, MP, CM, Ministers, Panchayat members
- The Indian Constitution (Fundamental Rights, Directive Principles, Amendments)
- Voting process, EVM, VVPAT, NOTA, Election Commission of India
- Political parties, coalitions, hung parliament, floor test
- Panchayati Raj, municipal bodies, local governance

Response Guidelines:
1. Explain topics in **simple, structured steps** using bullet points, numbered lists, and examples.
2. Avoid complex legal jargon — write as if explaining to a first-time voter.
3. Use bold (**text**) for key terms and important facts.
4. Keep answers concise (4-8 bullet points or 3-5 short paragraphs) unless more detail is needed.
5. Include a real-world example or analogy when possible to make concepts relatable.
6. Always stay **strictly neutral** — no political opinions, party bias, or endorsements.
7. If asked something unrelated to Indian government/elections, politely redirect.
8. The user may ask follow-up questions like "explain that simpler" or "tell me more" — use the conversation context to understand what they refer to.
9. CRITICAL: You MUST respond ONLY in **${lang}**. Do not use any other language regardless of what language the question is asked in.`;
}

const DEFAULT_API_KEY   = 'AIzaSyCjZGY2fgtgdZB9i4UYvDeKXV9ega-hAgY';
let geminiApiKey = localStorage.getItem('chunav_gemini_key') || DEFAULT_API_KEY;

// ===== ON LOAD: language + API key =====
window.addEventListener('DOMContentLoaded', () => {
  buildLangGrid();

  const savedLangCode = localStorage.getItem('chunav_lang');
  if (savedLangCode) {
    // Returning visitor: restore language silently (no overlay)
    const lang = LANGUAGES.find(l => l.code === savedLangCode) || LANGUAGES[0];
    currentLang = lang;

    // Update sidebar indicator
    const flagEl  = document.getElementById('langFlag');
    const labelEl = document.getElementById('langLabel');
    if (flagEl)  flagEl.textContent  = lang.flag;
    if (labelEl) labelEl.textContent = lang.native;

    // Update input placeholder + direction
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
      chatInput.placeholder    = lang.placeholder;
      chatInput.style.direction = lang.dir || 'ltr';
    }

    // Update chat welcome in chosen language
    updateChatWelcome(lang);

    // Hide overlay immediately (no animation)
    const overlay = document.getElementById('langOverlay');
    if (overlay) {
      overlay.classList.add('hidden');
    }

    // Apply UI text translations
    if (typeof applyTranslations === 'function') {
      applyTranslations(lang.code);
    }
  }
  // else: first visit — overlay stays visible

  if (geminiApiKey) {
    applyConnectedState(true);
  }
});



// ===== SAVE / CLEAR API KEY =====
function saveApiKey() {
  const input = document.getElementById('apiKeyInput');
  const key   = input.value.trim();
  if (!key) {
    input.style.borderColor = 'var(--red)';
    setTimeout(() => input.style.borderColor = '', 1500);
    return;
  }
  geminiApiKey = key;
  localStorage.setItem('chunav_gemini_key', key);
  input.value = '';
  applyConnectedState(true);
  addMessage('✅ **Gemini AI connected!** You can now ask me anything about Indian government, MLAs, MPs, the Constitution, and much more. Go ahead — ask away! 🎉', false);
}

function clearApiKey() {
  geminiApiKey = '';
  localStorage.removeItem('chunav_gemini_key');
  applyConnectedState(false);
  addMessage('🔌 Gemini AI disconnected. I will now use my built-in knowledge base to answer questions.', false);
}

function applyConnectedState(connected) {
  const banner   = document.getElementById('apiBanner');
  const dot      = document.getElementById('apiStatusDot');
  const title    = document.getElementById('apiBannerTitle');
  const sub      = document.getElementById('apiBannerSub');
  const keyRow   = document.getElementById('apiKeyRow');
  const clearBtn = document.getElementById('apiClearBtn');
  const saveBtn  = document.querySelector('.api-save-btn');
  const keyInput = document.getElementById('apiKeyInput');

  if (connected) {
    banner.classList.add('connected');
    dot.classList.add('active');
    title.textContent  = '✅ Gemini AI Connected — Ask anything!';
    sub.innerHTML      = 'AI is active. You can ask about MLAs, MPs, Constitution, Panchayati Raj, State Governments, and more.';
    keyInput.style.display = 'none';
    saveBtn.style.display  = 'none';
    clearBtn.style.display = 'inline-flex';
  } else {
    banner.classList.remove('connected');
    dot.classList.remove('active');
    title.textContent  = '🔑 Connect Gemini AI for unlimited answers';
    sub.innerHTML      = 'Get a free API key at <a href="https://aistudio.google.com/app/apikey" target="_blank">aistudio.google.com</a> — paste it below to unlock full AI answers.';
    keyInput.style.display = '';
    saveBtn.style.display  = '';
    clearBtn.style.display = 'none';
  }
}

// ===== GEMINI API CALL =====
async function callGeminiApi(question) {
  // Build contents array with conversation history for context
  const contents = [];
  
  // Add recent conversation history for follow-up support
  conversationHistory.forEach(entry => {
    contents.push({ role: 'user', parts: [{ text: entry.user }] });
    contents.push({ role: 'model', parts: [{ text: entry.bot }] });
  });
  
  // Add current question
  contents.push({ role: 'user', parts: [{ text: question }] });

  const body = {
    system_instruction: { parts: [{ text: getSystemPrompt() }] },
    contents: contents,
    generationConfig: { temperature: 0.7, maxOutputTokens: 800 }
  };

  const resp = await fetch(`${GEMINI_ENDPOINT}?key=${geminiApiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!resp.ok) {
    const err = await resp.json().catch(() => ({}));
    const msg = err?.error?.message || `HTTP ${resp.status}`;
    if (resp.status === 400 || resp.status === 401 || resp.status === 403) {
      throw new Error(`Invalid API key or access denied: ${msg}`);
    }
    throw new Error(msg);
  }

  const data = await resp.json();
  const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I did not get a response. Please try again.';
  
  // Save to conversation history
  conversationHistory.push({ user: question, bot: answer });
  if (conversationHistory.length > MAX_HISTORY) {
    conversationHistory.shift(); // trim oldest
  }
  
  return answer;
}

let fallbackIndex = 0;

// Smart routing: decide whether to use KB or AI
function isComplexQuery(question) {
  const q = question.toLowerCase().trim();
  // Follow-up phrases always go to AI (need context)
  const followUpPhrases = ['explain that', 'tell me more', 'what do you mean', 'simplify', 'elaborate', 'why', 'how come', 'can you clarify', 'in detail', 'give example', 'compare'];
  if (followUpPhrases.some(p => q.includes(p))) return true;
  // Long queries (>8 words) are likely complex
  if (q.split(/\s+/).length > 8) return true;
  // Questions with multiple concepts
  if ((q.match(/\b(and|vs|versus|between|difference|compare|relation)\b/g) || []).length > 0) return true;
  return false;
}

function findKBAnswer(question) {
  const q = question.toLowerCase();
  for (const item of KB) {
    if (item.keys.some(k => q.includes(k))) return item.answer;
  }
  return null;
}

async function findAnswer(question) {
  // If Gemini key is set
  if (geminiApiKey) {
    const kbAnswer = findKBAnswer(question);
    const complex = isComplexQuery(question);
    
    // Use KB for simple, direct matches; AI for complex/follow-ups
    if (kbAnswer && !complex) {
      // Save KB answer to history too so AI knows context
      conversationHistory.push({ user: question, bot: kbAnswer });
      if (conversationHistory.length > MAX_HISTORY) conversationHistory.shift();
      return { text: kbAnswer, source: 'kb' };
    }
    
    // Use Gemini AI
    try {
      const aiAnswer = await callGeminiApi(question);
      return { text: aiAnswer, source: 'ai' };
    } catch (err) {
      if (err.message.includes('Invalid API key') || err.message.includes('access denied')) {
        geminiApiKey = '';
        localStorage.removeItem('chunav_gemini_key');
        applyConnectedState(false);
        return { text: `⚠️ **API key issue:** ${err.message}\n\nI've disconnected the key. Please check your key and reconnect.`, source: 'error' };
      }
      // AI failed, try KB fallback
      if (kbAnswer) return { text: kbAnswer, source: 'kb' };
      return { text: `⚠️ **Connection error:** ${err.message}\n\nPlease check your internet and try again.`, source: 'error' };
    }
  }

  // No API key: local KB only
  const kbAnswer = findKBAnswer(question);
  if (kbAnswer) return { text: kbAnswer, source: 'kb' };
  
  const resp = FALLBACKS[fallbackIndex % FALLBACKS.length];
  fallbackIndex++;
  return { text: resp, source: 'fallback' };
}

// ===== RENDER MARKDOWN (SIMPLE) =====
function renderMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^### (.+)$/gm, '<h4>$1</h4>')
    .replace(/^## (.+)$/gm, '<h3>$1</h3>')
    .replace(/^# (.+)$/gm, '<h2>$1</h2>')
    .replace(/\n\| (.+) \|\n\|[-| ]+\|\n((?:\| .+ \|\n?)+)/g, (_, header, rows) => {
      const ths = header.split('|').map(h => `<th>${h.trim()}</th>`).join('');
      const trs = rows.trim().split('\n').map(row => {
        const tds = row.replace(/^\||\|$/g, '').split('|').map(d => `<td>${d.trim()}</td>`).join('');
        return `<tr>${tds}</tr>`;
      }).join('');
      return `<table style="width:100%;border-collapse:collapse;margin:10px 0"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table>`;
    })
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, m => `<ul style="padding-left:18px;margin:8px 0">${m}</ul>`)
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br/>')
    .replace(/^(?!<[hupbtl])(.+)/gm, '<p>$1</p>');
}

// ===== ADD MESSAGE TO CHAT =====
function addMessage(text, isUser = false, source = null) {
  const chatWindow = document.getElementById('chatWindow');
  const msg = document.createElement('div');
  msg.className = `chat-msg ${isUser ? 'user' : 'bot'}`;

  const avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = isUser ? '👤' : '🗳️';

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  bubble.innerHTML = renderMarkdown(text);
  
  // Add source label for bot messages
  if (!isUser && source) {
    const sourceLabel = document.createElement('div');
    sourceLabel.className = 'msg-source';
    if (source === 'ai') {
      sourceLabel.innerHTML = '🤖 <span>Generated by Gemini AI</span>';
      sourceLabel.classList.add('source-ai');
    } else if (source === 'kb') {
      sourceLabel.innerHTML = '📚 <span>From knowledge base</span>';
      sourceLabel.classList.add('source-kb');
    } else if (source === 'error') {
      sourceLabel.innerHTML = '⚠️ <span>Error</span>';
      sourceLabel.classList.add('source-error');
    }
    bubble.appendChild(sourceLabel);
  }

  msg.appendChild(avatar);
  msg.appendChild(bubble);
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
  return msg;
}

// ===== TYPING EFFECT FOR BOT RESPONSES =====
function addMessageWithTyping(text, source = null) {
  return new Promise(resolve => {
    const chatWindow = document.getElementById('chatWindow');
    const msg = document.createElement('div');
    msg.className = 'chat-msg bot';

    const avatar = document.createElement('div');
    avatar.className = 'msg-avatar';
    avatar.textContent = '🗳️';

    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    bubble.innerHTML = '<span class="typing-cursor">▍</span>';

    msg.appendChild(avatar);
    msg.appendChild(bubble);
    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    const fullHTML = renderMarkdown(text);
    // Extract plain text for typing, then reveal full HTML
    const plainText = text.replace(/\*\*|\*|#{1,3} /g, '').substring(0, 120);
    let charIndex = 0;
    const speed = 15; // ms per character

    function typeNext() {
      if (charIndex < plainText.length) {
        bubble.innerHTML = plainText.substring(0, charIndex + 1) + '<span class="typing-cursor">▍</span>';
        charIndex++;
        chatWindow.scrollTop = chatWindow.scrollHeight;
        setTimeout(typeNext, speed);
      } else {
        // Typing done — reveal full formatted response
        bubble.innerHTML = fullHTML;
        
        // Add source label
        if (source) {
          const sourceLabel = document.createElement('div');
          sourceLabel.className = 'msg-source';
          if (source === 'ai') {
            sourceLabel.innerHTML = '🤖 <span>Generated by Gemini AI</span>';
            sourceLabel.classList.add('source-ai');
          } else if (source === 'kb') {
            sourceLabel.innerHTML = '📚 <span>From knowledge base</span>';
            sourceLabel.classList.add('source-kb');
          } else if (source === 'error') {
            sourceLabel.innerHTML = '⚠️ <span>Error</span>';
            sourceLabel.classList.add('source-error');
          }
          bubble.appendChild(sourceLabel);
        }
        
        chatWindow.scrollTop = chatWindow.scrollHeight;
        resolve(msg);
      }
    }
    typeNext();
  });
}

// ===== TYPING INDICATOR =====
function showTyping(label) {
  const chatWindow = document.getElementById('chatWindow');
  const msg = document.createElement('div');
  msg.className = 'chat-msg bot';
  msg.id = 'typingIndicator';

  const avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = '🗳️';

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  bubble.innerHTML = `<div class="typing-indicator">
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
    <span class="thinking-label">${label || '🤖 AI is thinking…'}</span>
  </div>`;

  msg.appendChild(avatar);
  msg.appendChild(bubble);
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function hideTyping() {
  const indicator = document.getElementById('typingIndicator');
  if (indicator) indicator.remove();
}

// ===== SEND MESSAGE =====
function sendMessage() {
  const input = document.getElementById('chatInput');
  const text  = input.value.trim();
  if (!text) return;

  addMessage(text, true);
  input.value = '';
  input.disabled = true;

  // Determine thinking label
  const kbMatch = findKBAnswer(text);
  const complex = isComplexQuery(text);
  const willUseAI = geminiApiKey && (!kbMatch || complex);
  const thinkLabel = willUseAI ? '🤖 AI is thinking…' : '📚 Searching knowledge base…';
  showTyping(thinkLabel);

  // findAnswer is now async (Gemini or local KB)
  findAnswer(text).then(async (result) => {
    hideTyping();
    await addMessageWithTyping(result.text, result.source);
    input.disabled = false;
    input.focus();
  }).catch(() => {
    hideTyping();
    addMessage('⚠️ Something went wrong. Please try again.', false, 'error');
    input.disabled = false;
  });
}

function askQuestion(question) {
  document.getElementById('chatInput').value = question;
  sendMessage();
  // Scroll to chat section
  document.getElementById('chat').scrollIntoView({ behavior: 'smooth' });
}

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      sidebar.classList.remove('open');
    }
  });
});

// ===== ENTRANCE ANIMATIONS =====
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.overview-card, .flow-step, .tl-card, .concept-card, .govt-step').forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  animObserver.observe(el);
});

// =============================================
// ===== WALKTHROUGH SLIDER =====
// =============================================
const track = document.getElementById('sliderTrack');
const slides = Array.from(document.querySelectorAll('.slide'));
const nextBtn = document.getElementById('sliderNext');
const prevBtn = document.getElementById('sliderPrev');
const dotsContainer = document.getElementById('sliderDots');

let currentSlide = 0;

// Create dots
if (slides.length > 0 && dotsContainer) {
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  function updateSlider() {
    track.style.transform = `translateX(-${currentSlide * 20}%)`;
    
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });
    
    const dots = Array.from(dotsContainer.children);
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
    
    if (prevBtn) prevBtn.disabled = currentSlide === 0;
    if (nextBtn) nextBtn.disabled = currentSlide === slides.length - 1;
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlider();
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentSlide < slides.length - 1) goToSlide(currentSlide + 1);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) goToSlide(currentSlide - 1);
    });
  }

  // Initial setup
  updateSlider();
}

// =============================================
// ===== QUIZ ENGINE =====
// =============================================

const QUIZ_QUESTIONS = [
  {
    q: 'What is the minimum age to vote in India?',
    options: ['16 years', '18 years', '21 years', '25 years'],
    answer: 1,
    explanation: '✅ The minimum voting age in India is **18 years**, as per the 61st Constitutional Amendment of 1988.'
  },
  {
    q: 'How many seats does a party need to win a majority in the Lok Sabha?',
    options: ['200 seats', '250 seats', '272 seats', '300 seats'],
    answer: 2,
    explanation: '✅ A party or alliance needs **272 seats** (more than half of 543) to form a majority government.'
  },
  {
    q: 'What does EVM stand for?',
    options: ['Electronic Voting Monitor', 'Electronic Voting Machine', 'Election Verification Method', 'Electoral Voting Matrix'],
    answer: 1,
    explanation: '✅ EVM stands for **Electronic Voting Machine** — it replaced paper ballots in Indian elections.'
  },
  {
    q: 'Which constitutional body conducts elections in India?',
    options: ['Supreme Court of India', 'Parliament of India', 'Election Commission of India', 'NITI Aayog'],
    answer: 2,
    explanation: '✅ The **Election Commission of India (ECI)** is the independent constitutional body under Article 324 that conducts all elections.'
  },
  {
    q: 'What does FPTP mean in the context of Indian elections?',
    options: ['First Party Takes Power', 'First Past The Post', 'Federal Party Transfer Protocol', 'Final Phase Total Poll'],
    answer: 1,
    explanation: '✅ **FPTP (First Past The Post)** means the candidate with the most votes in a constituency wins — even without 50%+ of votes.'
  },
  {
    q: 'On which finger is indelible ink applied during voting?',
    options: ['Right index finger', 'Right thumb', 'Left index finger', 'Left thumb'],
    answer: 2,
    explanation: '✅ Indelible (permanent) ink is applied to the **left index finger** to prevent duplicate voting.'
  },
  {
    q: 'What is the minimum age to become a Member of Parliament (Lok Sabha)?',
    options: ['18 years', '21 years', '25 years', '30 years'],
    answer: 2,
    explanation: '✅ The minimum age to contest a Lok Sabha election is **25 years** (as per Article 84 of the Constitution).'
  },
  {
    q: 'What is NOTA on the EVM?',
    options: ['Name Of The Applicant', 'None Of The Above', 'National Option To Abstain', 'No Official Tally Allowed'],
    answer: 1,
    explanation: '✅ **NOTA (None of The Above)** allows a voter to reject all candidates. It was introduced by the Supreme Court in 2013.'
  },
  {
    q: 'How long does the VVPAT paper slip remain visible to the voter?',
    options: ['3 seconds', '5 seconds', '7 seconds', '10 seconds'],
    answer: 2,
    explanation: '✅ The VVPAT slip is visible for **7 seconds** after pressing the EVM button, then drops into a sealed box.'
  },
  {
    q: 'What happens when no single party wins 272 seats in the Lok Sabha?',
    options: ['A re-election is called immediately', 'The President dissolves Parliament', 'It is called a Hung Parliament and parties form a coalition', 'The outgoing PM continues indefinitely'],
    answer: 2,
    explanation: '✅ When no party wins 272+ seats, it is called a **Hung Parliament**. Parties then negotiate to form a coalition government.'
  }
];

// State
let quizQuestions   = [];
let currentQIndex   = 0;
let score           = 0;
let userAnswers     = []; // { selected, correct }

// ===== Shuffle helper =====
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// ===== Show/hide quiz screens =====
function showScreen(id) {
  ['quizStartScreen', 'quizPlayScreen', 'quizResultScreen'].forEach(s => {
    const el = document.getElementById(s);
    if (el) el.classList.toggle('hidden', el.id !== id);
  });
}

// ===== START QUIZ =====
function startQuiz() {
  quizQuestions = shuffle(QUIZ_QUESTIONS);
  currentQIndex = 0;
  score         = 0;
  userAnswers   = [];
  showScreen('quizPlayScreen');
  renderQuestion();
}

// ===== RENDER QUESTION =====
function renderQuestion() {
  const q      = quizQuestions[currentQIndex];
  const total  = quizQuestions.length;
  const num    = currentQIndex + 1;
  const pct    = ((num - 1) / total) * 100;

  // Progress
  document.getElementById('quizProgressBar').style.width = pct + '%';
  document.getElementById('quizCounter').textContent = `Question ${num} / ${total}`;
  document.getElementById('liveScore').textContent   = score;
  document.getElementById('liveTotal').textContent   = total;

  // Question text
  document.getElementById('quizQNum').textContent  = `Q${num}`;
  document.getElementById('quizQText').textContent = q.q;

  // Feedback & next btn
  const fb      = document.getElementById('quizFeedback');
  const nextBtn = document.getElementById('quizNextBtn');
  fb.className      = 'quiz-feedback hidden';
  fb.innerHTML      = '';
  nextBtn.className = 'btn btn-primary quiz-next-btn hidden';

  // Options
  const optContainer = document.getElementById('quizOptions');
  optContainer.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.innerHTML = `
      <span class="opt-letter">${letters[i]}</span>
      <span class="opt-text">${opt}</span>
      <span class="opt-result-icon"></span>
    `;
    btn.addEventListener('click', () => selectAnswer(i));
    optContainer.appendChild(btn);
  });
}

// ===== SELECT ANSWER =====
function selectAnswer(selectedIndex) {
  const q       = quizQuestions[currentQIndex];
  const correct = q.answer;
  const isRight = selectedIndex === correct;

  // Record
  userAnswers.push({ selected: selectedIndex, correct, isRight, question: q });
  if (isRight) score++;

  // Disable all options
  const opts = document.querySelectorAll('.quiz-option');
  opts.forEach((btn, i) => {
    btn.disabled = true;
    const icon = btn.querySelector('.opt-result-icon');
    if (i === correct) {
      btn.classList.add('correct');
      icon.textContent = '✅';
    } else if (i === selectedIndex && !isRight) {
      btn.classList.add('wrong');
      icon.textContent = '❌';
    }
  });

  // Feedback
  const fb = document.getElementById('quizFeedback');
  fb.className = `quiz-feedback ${isRight ? 'correct-fb' : 'wrong-fb'}`;
  fb.innerHTML = isRight
    ? `<strong>🎉 Correct!</strong> ${q.explanation.replace('✅ ', '')}`
    : `<strong>❌ Incorrect.</strong> ${q.explanation.replace('✅ ', '')}`;

  // Update live score
  document.getElementById('liveScore').textContent = score;

  // Show Next button
  const nextBtn = document.getElementById('quizNextBtn');
  nextBtn.className = 'btn btn-primary quiz-next-btn';
  nextBtn.textContent = currentQIndex === quizQuestions.length - 1 ? 'See Results 🏆' : 'Next →';
}

// ===== NEXT QUESTION =====
function nextQuestion() {
  currentQIndex++;
  if (currentQIndex >= quizQuestions.length) {
    showResults();
  } else {
    // Animate card out/in
    const card = document.getElementById('quizQuestionCard');
    card.style.opacity   = '0';
    card.style.transform = 'translateX(30px)';
    setTimeout(() => {
      renderQuestion();
      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      card.style.opacity    = '1';
      card.style.transform  = 'translateX(0)';
    }, 200);
  }
}

// ===== SHOW RESULTS =====
function showResults() {
  const total = quizQuestions.length;
  const pct   = score / total;

  // Determine tier
  let trophy, title, message, ringColor;
  if (pct === 1) {
    trophy = '🏆'; title = 'Perfect Score!';
    message = 'Outstanding! You aced every question. You clearly know India\'s election system inside out!';
    ringColor = '#ffd166';
  } else if (pct >= 0.8) {
    trophy = '🥇'; title = 'Excellent!';
    message = 'Great work! You have a strong grasp of the Indian election process. Review any missed questions to perfect your score.';
    ringColor = '#06d6a0';
  } else if (pct >= 0.6) {
    trophy = '🥈'; title = 'Good Job!';
    message = 'Solid effort! You know the basics well. Revisit the Key Concepts and Voting Steps sections to level up.';
    ringColor = '#4ea8de';
  } else if (pct >= 0.4) {
    trophy = '🥉'; title = 'Keep Learning!';
    message = 'You\'re on the right track! Review the Overview and Key Concepts sections, then retake the quiz.';
    ringColor = '#ff6b35';
  } else {
    trophy = '📚'; title = 'Let\'s Review!';
    message = 'Don\'t worry — everyone starts somewhere! Go through the guide section by section, then come back and try again.';
    ringColor = '#ef476f';
  }

  document.getElementById('resultTrophy').textContent  = trophy;
  document.getElementById('resultTitle').textContent   = title;
  document.getElementById('resultMessage').textContent = message;
  document.getElementById('resultScoreNum').textContent = score;

  // Animate score ring
  const circle     = document.getElementById('scoreRingCircle');
  const circumference = 314; // 2π × 50
  const offset     = circumference - (pct * circumference);
  circle.style.stroke = ringColor;
  // Force reflow then animate
  circle.style.strokeDashoffset = circumference;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      circle.style.strokeDashoffset = offset;
    });
  });

  // Build breakdown
  const bd = document.getElementById('resultBreakdown');
  bd.innerHTML = '';
  userAnswers.forEach((ans, i) => {
    const item = document.createElement('div');
    item.className = `breakdown-item ${ans.isRight ? 'bd-correct' : 'bd-wrong'}`;
    item.innerHTML = `
      <span class="bd-icon">${ans.isRight ? '✅' : '❌'}</span>
      <div class="bd-text">
        <strong>Q${i + 1}: ${ans.question.q}</strong>
        ${ans.isRight
          ? `Your answer: <em>${ans.question.options[ans.selected]}</em>`
          : `Your answer: <em>${ans.question.options[ans.selected]}</em> · Correct: <em>${ans.question.options[ans.correct]}</em>`
        }
      </div>
    `;
    bd.appendChild(item);
  });

  // Full progress bar
  document.getElementById('quizProgressBar').style.width = '100%';

  showScreen('quizResultScreen');
}

// ===== RETAKE QUIZ =====
function retakeQuiz() {
  showScreen('quizStartScreen');
}

