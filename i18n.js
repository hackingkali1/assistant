// i18n.js
const UI_STRINGS = {
  en: {
    nav_home: '🏠 Home', nav_overview: '🌐 Overview', nav_video: '🎬 Video Guide', nav_voting: '🗳️ Voting Steps', nav_timeline: '📅 Timeline', nav_concepts: '💡 Key Concepts', nav_govt: '🏛️ Government', nav_ref: '📋 Quick Ref', nav_quiz: '🧠 Quiz', nav_chat: '💬 Ask Me',
    hero_badge: '🇮🇳 Interactive Learning Guide', hero_title: 'How India Votes', hero_subtitle: 'Understand India\'s election system — from voter registration to government formation — in the simplest and most interactive way possible.', btn_start: 'Start Learning →', btn_ask: 'Ask a Question 💬', stat_voters: 'Registered Voters', stat_seats: 'Lok Sabha Seats', stat_phases: 'Avg. Poll Phases',
    tag_overview: 'Big Picture', title_overview: 'The Indian Election System', sub_overview: 'India is the world\'s largest democracy. Here\'s a high-level look at how it all works.',
    tag_video: 'Accessible Learning', title_video: 'Voting Process Explained', sub_video: 'Watch the official step-by-step guide with subtitles and Indian Sign Language (ISL) support.',
    fallback_title: 'Interactive Walkthrough', fallback_desc: 'Prefer reading at your own pace? Use our animated visual guide below.', btn_prev: '← Prev', btn_next: 'Next →',
    tag_voting: 'Step-by-Step', title_voting: 'Your Voting Experience', sub_voting: 'Here\'s exactly what happens when you go to vote on Election Day.',
    tag_timeline: 'Timeline', title_timeline: 'Election Calendar', sub_timeline: 'From announcement to results — a typical Lok Sabha election spans 6–8 weeks.',
    tag_concepts: 'Key Concepts', title_concepts: 'Understanding the Basics', sub_concepts: 'Click any concept card to expand its explanation.',
    tag_govt: 'After Results', title_govt: 'How Government is Formed', sub_govt: 'Once votes are counted, here\'s what happens next.',
    tag_ref: 'Quick Reference', title_ref: 'Voter vs Candidate (MP)', sub_ref: 'A side-by-side comparison of eligibility requirements.',
    tag_chat: 'Interactive', title_chat: 'Ask Chunav Saathi 💬', sub_chat: 'Powered by Gemini AI — ask anything about Indian government, elections, MLAs, MPs, the Constitution, and more.',
    tag_quiz: 'Test Yourself', title_quiz: 'Election Quiz 🧠', sub_quiz: '10 questions to test your knowledge of the Indian election system. Can you score 10/10?',
    
    // Missing Elements
    overview_card1_title: 'Election Commission of India (ECI)', overview_card1_desc: 'An independent constitutional body that conducts free and fair elections across India. It sets dates, enforces the Model Code of Conduct, and oversees the entire process.',
    overview_card2_title: 'Lok Sabha Elections', overview_card2_desc: 'National Parliament elections held every 5 years. 543 constituencies, one MP elected from each. Determines who forms the Central Government.',
    overview_card3_title: 'Vidhan Sabha Elections', overview_card3_desc: 'State Legislature elections, also held every 5 years. Determines who forms the State Government and who becomes the Chief Minister.',
    overview_card4_title: 'Local Body Elections', overview_card4_desc: 'Municipal corporations, panchayats, and town councils. Closest to citizens — handles local infrastructure, sanitation, and development.',
    info_banner: 'India uses the <strong>First Past the Post (FPTP)</strong> system — the candidate with the <strong>most votes</strong> in a constituency wins, even without a majority.',
    
    vote_step1_title: 'Arrive at Your Polling Booth', vote_step1_desc: 'Find your assigned polling station using your Voter ID slip or the ECI Voter Helpline (1950). Booths are open <strong>7 AM – 6 PM</strong>.', vote_step1_tip: '💡 Tip: Bring your Voter ID card, Aadhaar, or any approved photo ID.',
    vote_step2_title: 'Queue & Registration Check', vote_step2_desc: 'Officers check your name in the Electoral Roll and verify your photo identity document.',
    vote_step3_title: 'Indelible Ink Mark', vote_step3_desc: 'A permanent ink mark is applied to your left index finger. This prevents anyone from voting twice — a simple but powerful safeguard.',
    vote_step4_title: 'Press the EVM Button', vote_step4_desc: 'Inside the voting compartment, press the button next to your chosen candidate\'s name and symbol on the <strong>Electronic Voting Machine (EVM)</strong>. A beep confirms your vote.',
    vote_step5_title: 'VVPAT Verification', vote_step5_desc: 'A paper slip from the <strong>Voter Verifiable Paper Audit Trail (VVPAT)</strong> machine shows your candidate\'s name and symbol for 7 seconds, then drops into a sealed box. This lets you verify your vote was recorded correctly.', vote_step5_tip: '✅ Done! You\'ve successfully cast your vote.',

    time_week0: 'Week 0', time_title0: '📢 Election Announcement', time_desc0: 'ECI announces dates. Model Code of Conduct kicks in immediately.',
    time_week1: 'Week 1–2', time_title1: '📝 Nomination Filing', time_desc1: 'Candidates file nominations with the Returning Officer. Scrutiny and withdrawal follows.',
    time_week2: 'Week 2–6', time_title2: '📣 Campaign Period', time_desc2: 'Parties and candidates campaign. No campaigning allowed within 48 hrs of polling (Silence Period).',
    time_week3: 'Week 3–8', time_title3: '🗳️ Multi-Phase Polling', time_desc3: 'Voting happens across multiple phases (up to 7) to deploy security forces efficiently. Polling time: <strong>7 AM – 6 PM</strong>.',
    time_week9: 'Week 9–10', time_title9: '🏛️ Government Formation', time_desc9: 'Winning party or coalition stakes claim. President invites the leader to form the government.',
    
    concept1_title: 'First Past The Post (FPTP)', concept1_desc: 'The candidate who gets the <strong>most votes</strong> in their constituency wins — even if they don\'t have more than 50% of the total votes.', concept1_ex: '<strong>Example:</strong> In a 4-way race — A gets 35%, B gets 30%, C gets 20%, D gets 15%. Candidate A wins with just 35% of the votes!',
    concept2_title: 'Constituencies', concept2_desc: 'India is divided into <strong>543 Lok Sabha constituencies</strong>. Each area elects exactly one Member of Parliament (MP) who represents that region in the national parliament.', concept2_ex: '<strong>Example:</strong> If you live in Mumbai North, you vote for one MP who represents all of Mumbai North in the Lok Sabha.',
    concept3_title: 'Multi-Phase Elections', concept3_desc: 'India is too large to vote on a single day. Polling is spread across <strong>multiple phases</strong> (typically 4–7) so that security forces can be redeployed efficiently.', concept3_ex: '<strong>Example:</strong> In the 2024 Lok Sabha election, voting happened in 7 phases between April 19 and June 1.',
    concept4_title: 'EVM & VVPAT', concept4_desc: '<strong>EVM</strong> (Electronic Voting Machine) records your vote electronically. <strong>VVPAT</strong> (Voter Verifiable Paper Audit Trail) prints a paper slip showing your chosen candidate for 7 seconds so you can verify it.', concept4_ex: '<strong>Why it matters:</strong> VVPAT adds a paper trail that can be audited to verify EVM results if needed.',
    concept5_title: 'Magic Number: 272', concept5_desc: 'To form a majority government in the Lok Sabha, a party or coalition needs <strong>at least 272 seats</strong> (more than half of 543).', concept5_ex: '<strong>Simple math:</strong> 543 ÷ 2 = 271.5 → Round up → 272 seats needed for majority.',
    concept6_title: 'Model Code of Conduct', concept6_desc: 'A set of guidelines issued by ECI that all parties and candidates must follow during the election period. It prevents misuse of government power for campaign advantage.', concept6_ex: '<strong>Example rule:</strong> No new government schemes or freebies can be announced after the MCC kicks in.',

    govt_step1_title: 'Results Declared', govt_step1_desc: 'The Election Commission declares results. The party or alliance with the most seats is identified.',
    govt_step2_title: 'President Invites', govt_step2_desc: 'The President invites the leader of the party/alliance with majority support (272+ seats) to form the government.',
    govt_step3_title: 'PM Takes Oath', govt_step3_desc: 'The Prime Minister and Cabinet are sworn in by the President at Rashtrapati Bhavan.',
    hung_title: 'What is a Hung Parliament?', hung_desc: 'When <strong>no single party wins 272+ seats</strong>, it\'s called a Hung Parliament. Parties then negotiate to form a <strong>coalition government</strong>. The President gives the largest party/alliance a chance to prove majority through a <strong>floor test</strong> in Parliament.',
    hung_ex1: '📅 1996 elections led to a hung parliament', hung_ex2: '📅 1999 — NDA coalition was formed', hung_ex3: '📅 2004 — UPA coalition was formed',

    th_criteria: 'Criteria', th_voter: '🗳️ Voter', th_mp: '🏛️ Candidate (MP)',
    tr1_cri: 'Minimum Age', tr1_voter: '18 years', tr1_mp: '25 years',
    tr2_cri: 'Citizenship', tr2_voter: 'Indian Citizen', tr2_mp: 'Indian Citizen',
    tr3_cri: 'Registration', tr3_voter: 'Must be on Electoral Roll', tr3_mp: 'Must be a voter in some constituency',
    tr4_cri: 'Mental Fitness', tr4_voter: 'Must be of sound mind', tr4_mp: 'Must not be declared unsound by court',
    tr5_cri: 'Criminal Record', tr5_voter: 'No restriction for voters', tr5_mp: 'Disqualified if convicted with 2+ years sentence',
    tr6_cri: 'Government Post', tr6_voter: 'No restriction', tr6_mp: 'Must resign from government/office of profit',
    tr7_cri: 'NRI Status', tr7_voter: 'Can register as overseas voter', tr7_mp: 'Must be resident citizen',

    qf_title: '⚡ Quick Facts', qf_1: '🕖 Polling: 7 AM – 6 PM', qf_2: '📞 Voter Helpline: 1950', qf_3: '🖊️ Indelible Ink: Left index finger', qf_4: '📋 NOTA: Available on EVM', qf_5: '⏳ Term: 5 years', qf_6: '🏆 Winner: Most votes in constituency',

    chat_msg1: 'Namaste! 🙏 I\'m <strong>Chunav Saathi</strong>, your Indian Government & Election guide.',
    chat_msg2: 'With Gemini AI connected, I can answer <em>anything</em> — MLAs, MPs, Constitution, Panchayati Raj, State Govts, and more. Try:',
    prompt1: 'What is an MLA\'s role?', prompt2: 'How does voting work?', prompt3: 'What is FPTP?', prompt4: 'MLA vs MP?', prompt5: 'Hung Parliament?', prompt6: 'Panchayati Raj?', prompt7: 'Candidate eligibility?', prompt8: 'What is NOTA?',
    
    quiz_start_title: 'Ready to Test Your Knowledge?', quiz_start_desc: '10 multiple-choice questions covering voting, EVM, FPTP, government formation, and more.',
    quiz_rule1: '✅ 10 Questions', quiz_rule2: '⏱️ No Time Limit', quiz_rule3: '🏆 Instant Feedback', quiz_rule4: '🔄 Retake Anytime',
    quiz_btn_start: 'Start Quiz →', quiz_btn_retake: '🔄 Retake Quiz', quiz_btn_review: '📖 Review Content'
  },
  hi: {
    nav_home: '🏠 मुख्य पृष्ठ', nav_overview: '🌐 अवलोकन', nav_video: '🎬 वीडियो गाइड', nav_voting: '🗳️ मतदान प्रक्रिया', nav_timeline: '📅 समयरेखा', nav_concepts: '💡 मुख्य बातें', nav_govt: '🏛️ सरकार', nav_ref: '📋 संदर्भ', nav_quiz: '🧠 क्विज़', nav_chat: '💬 पूछें',
    hero_badge: '🇮🇳 इंटरैक्टिव लर्निंग गाइड', hero_title: 'भारत कैसे वोट करता है', hero_subtitle: 'भारत की चुनाव प्रणाली को समझें — मतदाता पंजीकरण से लेकर सरकार गठन तक — सबसे सरल और इंटरैक्टिव तरीके से।', btn_start: 'सीखना शुरू करें →', btn_ask: 'प्रश्न पूछें 💬', stat_voters: 'पंजीकृत मतदाता', stat_seats: 'लोकसभा सीटें', stat_phases: 'औसत मतदान चरण',
    tag_overview: 'बड़ी तस्वीर', title_overview: 'भारतीय चुनाव प्रणाली', sub_overview: 'भारत दुनिया का सबसे बड़ा लोकतंत्र है। आइए देखें यह कैसे काम करता है।',
    tag_video: 'सुलभ शिक्षा', title_video: 'मतदान प्रक्रिया समझाई गई', sub_video: 'उपशीर्षक और भारतीय सांकेतिक भाषा (ISL) समर्थन के साथ आधिकारिक चरण-दर-चरण मार्गदर्शिका देखें।',
    fallback_title: 'इंटरएक्टिव वॉकथ्रू', fallback_desc: 'अपनी गति से पढ़ना पसंद करते हैं? नीचे हमारे एनिमेटेड विज़ुअल गाइड का उपयोग करें।', btn_prev: '← पिछला', btn_next: 'अगला →',
    tag_voting: 'चरण-दर-चरण', title_voting: 'आपका मतदान अनुभव', sub_voting: 'जब आप चुनाव के दिन वोट डालने जाते हैं तो वास्तव में क्या होता है।',
    tag_timeline: 'समयरेखा', title_timeline: 'चुनाव कैलेंडर', sub_timeline: 'घोषणा से लेकर परिणाम तक — एक आम लोकसभा चुनाव में 6-8 सप्ताह लगते हैं।',
    tag_concepts: 'मुख्य बातें', title_concepts: 'बुनियादी बातें समझना', sub_concepts: 'स्पष्टीकरण देखने के लिए किसी भी कार्ड पर क्लिक करें।',
    tag_govt: 'परिणाम के बाद', title_govt: 'सरकार कैसे बनती है', sub_govt: 'वोटों की गिनती होने के बाद आगे क्या होता है।',
    tag_ref: 'त्वरित संदर्भ', title_ref: 'मतदाता बनाम उम्मीदवार (सांसद)', sub_ref: 'पात्रता आवश्यकताओं की तुलनात्मक जानकारी।',
    tag_chat: 'इंटरैक्टिव', title_chat: 'चुनाव साथी से पूछें 💬', sub_chat: 'जेमिनी एआई द्वारा संचालित — भारत सरकार, चुनाव, विधायकों, सांसदों, संविधान और बहुत कुछ के बारे में पूछें।',
    tag_quiz: 'स्वयं का परीक्षण करें', title_quiz: 'चुनाव क्विज़ 🧠', sub_quiz: 'भारतीय चुनाव प्रणाली के आपके ज्ञान का परीक्षण करने के लिए 10 प्रश्न। क्या आप 10/10 स्कोर कर सकते हैं?',

    // Missing Elements
    overview_card1_title: 'भारत निर्वाचन आयोग (ECI)', overview_card1_desc: 'एक स्वतंत्र संवैधानिक निकाय जो पूरे भारत में स्वतंत्र और निष्पक्ष चुनाव कराता है। यह तिथियां निर्धारित करता है, आदर्श आचार संहिता लागू करता है, और पूरी प्रक्रिया की निगरानी करता है।',
    overview_card2_title: 'लोकसभा चुनाव', overview_card2_desc: 'हर 5 साल में राष्ट्रीय संसद चुनाव होते हैं। 543 निर्वाचन क्षेत्र, प्रत्येक से एक सांसद चुना जाता है। निर्धारित करता है कि केंद्र सरकार कौन बनाता है।',
    overview_card3_title: 'विधानसभा चुनाव', overview_card3_desc: 'राज्य विधानमंडल चुनाव, यह भी हर 5 साल में होते हैं। निर्धारित करता है कि राज्य सरकार कौन बनाता है और मुख्यमंत्री कौन बनता है।',
    overview_card4_title: 'स्थानीय निकाय चुनाव', overview_card4_desc: 'नगर निगम, पंचायतें और नगर परिषद। नागरिकों के सबसे करीब — स्थानीय बुनियादी ढांचे, स्वच्छता और विकास को संभालता है।',
    info_banner: 'भारत <strong>फ़र्स्ट पास्ट द पोस्ट (FPTP)</strong> प्रणाली का उपयोग करता है — निर्वाचन क्षेत्र में <strong>सबसे अधिक वोट</strong> पाने वाला उम्मीदवार जीतता है, भले ही उसके पास बहुमत न हो।',

    vote_step1_title: 'अपने मतदान केंद्र पर पहुँचें', vote_step1_desc: 'अपनी वोटर आईडी पर्ची या ECI वोटर हेल्पलाइन (1950) का उपयोग करके अपना निर्धारित मतदान केंद्र खोजें। बूथ <strong>सुबह 7 बजे से शाम 6 बजे</strong> तक खुले रहते हैं।', vote_step1_tip: '💡 टिप: अपना वोटर आईडी कार्ड, आधार, या कोई अनुमोदित फोटो आईडी साथ लाएं।',
    vote_step2_title: 'कतार और पंजीकरण जांच', vote_step2_desc: 'अधिकारी निर्वाचक नामावली में आपका नाम जांचते हैं और आपके फोटो पहचान दस्तावेज को सत्यापित करते हैं।',
    vote_step3_title: 'अमिट स्याही का निशान', vote_step3_desc: 'आपकी बायीं तर्जनी पर एक स्थायी स्याही का निशान लगाया जाता है। यह किसी को भी दो बार वोट करने से रोकता है — एक सरल लेकिन शक्तिशाली सुरक्षा उपाय।',
    vote_step4_title: 'EVM बटन दबाएं', vote_step4_desc: 'मतदान कक्ष के अंदर, <strong>इलेक्ट्रॉनिक वोटिंग मशीन (EVM)</strong> पर अपने चुने हुए उम्मीदवार के नाम और चुनाव चिन्ह के आगे वाला बटन दबाएं। एक बीप आपके वोट की पुष्टि करती है।',
    vote_step5_title: 'VVPAT सत्यापन', vote_step5_desc: '<strong>वोटर वेरिफिएबल पेपर ऑडिट ट्रेल (VVPAT)</strong> मशीन से एक पेपर स्लिप 7 सेकंड के लिए आपके उम्मीदवार का नाम और चुनाव चिन्ह दिखाती है, फिर एक सील बंद बॉक्स में गिर जाती है। इससे आप सत्यापित कर सकते हैं कि आपका वोट सही ढंग से दर्ज किया गया था।', vote_step5_tip: '✅ हो गया! आपने सफलतापूर्वक अपना वोट डाल दिया है।',

    time_week0: 'सप्ताह 0', time_title0: '📢 चुनाव की घोषणा', time_desc0: 'ECI तारीखों की घोषणा करता है। आदर्श आचार संहिता तुरंत लागू हो जाती है।',
    time_week1: 'सप्ताह 1-2', time_title1: '📝 नामांकन दाखिल करना', time_desc1: 'उम्मीदवार रिटर्निंग ऑफिसर के पास नामांकन दाखिल करते हैं। उसके बाद जांच और नाम वापसी होती है।',
    time_week2: 'सप्ताह 2-6', time_title2: '📣 प्रचार की अवधि', time_desc2: 'पार्टियां और उम्मीदवार प्रचार करते हैं। मतदान के 48 घंटे के भीतर प्रचार की अनुमति नहीं है (मौन अवधि)।',
    time_week3: 'सप्ताह 3-8', time_title3: '🗳️ बहु-चरणीय मतदान', time_desc3: 'सुरक्षा बलों को कुशलतापूर्वक तैनात करने के लिए मतदान कई चरणों (7 तक) में होता है। मतदान का समय: <strong>सुबह 7 बजे से शाम 6 बजे तक</strong>।',
    time_week9: 'सप्ताह 9-10', time_title9: '🏛️ सरकार का गठन', time_desc9: 'जीतने वाली पार्टी या गठबंधन दावा पेश करता है। राष्ट्रपति नेता को सरकार बनाने के लिए आमंत्रित करते हैं।',

    concept1_title: 'फ़र्स्ट पास्ट द पोस्ट (FPTP)', concept1_desc: 'वह उम्मीदवार जिसे अपने निर्वाचन क्षेत्र में <strong>सबसे अधिक वोट</strong> मिलते हैं, जीत जाता है — भले ही उसके पास कुल वोटों का 50% से अधिक न हो।', concept1_ex: '<strong>उदाहरण:</strong> 4-तरफ़ा दौड़ में — A को 35%, B को 30%, C को 20%, D को 15% मिलते हैं। उम्मीदवार A केवल 35% वोटों के साथ जीतता है!',
    concept2_title: 'निर्वाचन क्षेत्र', concept2_desc: 'भारत <strong>543 लोकसभा क्षेत्रों</strong> में विभाजित है। प्रत्येक क्षेत्र बिल्कुल एक संसद सदस्य (MP) का चुनाव करता है जो राष्ट्रीय संसद में उस क्षेत्र का प्रतिनिधित्व करता है।', concept2_ex: '<strong>उदाहरण:</strong> यदि आप मुंबई उत्तर में रहते हैं, तो आप एक सांसद के लिए वोट करते हैं जो लोकसभा में पूरे मुंबई उत्तर का प्रतिनिधित्व करता है।',
    concept3_title: 'बहु-चरणीय चुनाव', concept3_desc: 'भारत एक ही दिन में वोट करने के लिए बहुत बड़ा है। मतदान <strong>कई चरणों</strong> (आमतौर पर 4-7) में फैला हुआ है ताकि सुरक्षा बलों को कुशलतापूर्वक तैनात किया जा सके।', concept3_ex: '<strong>उदाहरण:</strong> 2024 के लोकसभा चुनाव में, 19 अप्रैल से 1 जून के बीच 7 चरणों में मतदान हुआ।',
    concept4_title: 'EVM और VVPAT', concept4_desc: '<strong>EVM</strong> (इलेक्ट्रॉनिक वोटिंग मशीन) आपके वोट को इलेक्ट्रॉनिक रूप से रिकॉर्ड करती है। <strong>VVPAT</strong> (वोटर वेरिफिएबल पेपर ऑडिट ट्रेल) 7 सेकंड के लिए आपके चुने हुए उम्मीदवार को दिखाने वाली एक पेपर स्लिप प्रिंट करती है ताकि आप इसे सत्यापित कर सकें।', concept4_ex: '<strong>यह क्यों मायने रखता है:</strong> VVPAT एक पेपर ट्रेल जोड़ता है जिसका यदि आवश्यक हो तो EVM परिणामों को सत्यापित करने के लिए ऑडिट किया जा सकता है।',
    concept5_title: 'जादुई संख्या: 272', concept5_desc: 'लोकसभा में बहुमत की सरकार बनाने के लिए, एक पार्टी या गठबंधन को <strong>कम से कम 272 सीटों</strong> (543 के आधे से अधिक) की आवश्यकता होती है।', concept5_ex: '<strong>सरल गणित:</strong> 543 ÷ 2 = 271.5 → राउंड अप → बहुमत के लिए 272 सीटों की आवश्यकता।',
    concept6_title: 'आदर्श आचार संहिता', concept6_desc: 'ECI द्वारा जारी दिशा-निर्देशों का एक समूह जिसका चुनाव अवधि के दौरान सभी दलों और उम्मीदवारों को पालन करना चाहिए। यह चुनाव प्रचार के लाभ के लिए सरकारी शक्ति के दुरुपयोग को रोकता है।', concept6_ex: '<strong>उदाहरण नियम:</strong> MCC लागू होने के बाद किसी भी नई सरकारी योजना या मुफ्त की घोषणा नहीं की जा सकती है।',

    govt_step1_title: 'परिणाम घोषित', govt_step1_desc: 'चुनाव आयोग परिणाम घोषित करता है। सबसे अधिक सीटों वाली पार्टी या गठबंधन की पहचान की जाती है।',
    govt_step2_title: 'राष्ट्रपति आमंत्रित करते हैं', govt_step2_desc: 'राष्ट्रपति सरकार बनाने के लिए बहुमत के समर्थन (272+ सीटों) वाली पार्टी/गठबंधन के नेता को आमंत्रित करते हैं।',
    govt_step3_title: 'प्रधानमंत्री ने ली शपथ', govt_step3_desc: 'राष्ट्रपति द्वारा राष्ट्रपति भवन में प्रधानमंत्री और कैबिनेट को शपथ दिलाई जाती है।',
    hung_title: 'त्रिशंकु संसद क्या है?', hung_desc: 'जब <strong>कोई एक पार्टी 272+ सीटें नहीं जीतती है</strong>, तो इसे त्रिशंकु संसद कहा जाता है। इसके बाद पार्टियां <strong>गठबंधन सरकार</strong> बनाने के लिए बातचीत करती हैं। राष्ट्रपति सबसे बड़ी पार्टी/गठबंधन को संसद में <strong>फ्लोर टेस्ट</strong> के माध्यम से बहुमत साबित करने का मौका देते हैं।',
    hung_ex1: '📅 1996 के चुनावों में त्रिशंकु संसद बनी', hung_ex2: '📅 1999 — NDA गठबंधन बना', hung_ex3: '📅 2004 — UPA गठबंधन बना',

    th_criteria: 'मानदंड', th_voter: '🗳️ मतदाता', th_mp: '🏛️ उम्मीदवार (सांसद)',
    tr1_cri: 'न्यूनतम आयु', tr1_voter: '18 वर्ष', tr1_mp: '25 वर्ष',
    tr2_cri: 'नागरिकता', tr2_voter: 'भारतीय नागरिक', tr2_mp: 'भारतीय नागरिक',
    tr3_cri: 'पंजीकरण', tr3_voter: 'निर्वाचक नामावली में होना चाहिए', tr3_mp: 'किसी निर्वाचन क्षेत्र में मतदाता होना चाहिए',
    tr4_cri: 'मानसिक फिटनेस', tr4_voter: 'स्वस्थ दिमाग का होना चाहिए', tr4_mp: 'अदालत द्वारा अस्वस्थ घोषित नहीं किया जाना चाहिए',
    tr5_cri: 'आपराधिक रिकॉर्ड', tr5_voter: 'मतदाताओं के लिए कोई प्रतिबंध नहीं', tr5_mp: '2+ साल की सजा होने पर अयोग्य',
    tr6_cri: 'सरकारी पद', tr6_voter: 'कोई प्रतिबंध नहीं', tr6_mp: 'सरकार/लाभ के पद से इस्तीफा देना होगा',
    tr7_cri: 'NRI स्थिति', tr7_voter: 'प्रवासी मतदाता के रूप में पंजीकरण कर सकते हैं', tr7_mp: 'निवासी नागरिक होना चाहिए',

    qf_title: '⚡ त्वरित तथ्य', qf_1: '🕖 मतदान: सुबह 7 बजे – शाम 6 बजे', qf_2: '📞 मतदाता हेल्पलाइन: 1950', qf_3: '🖊️ अमिट स्याही: बायीं तर्जनी', qf_4: '📋 NOTA: EVM पर उपलब्ध', qf_5: '⏳ कार्यकाल: 5 वर्ष', qf_6: '🏆 विजेता: निर्वाचन क्षेत्र में सबसे अधिक वोट',

    chat_msg1: 'नमस्ते! 🙏 मैं <strong>चुनाव साथी</strong> हूँ, आपका भारत सरकार और चुनाव मार्गदर्शक।',
    chat_msg2: 'जेमिनी एआई के जुड़े होने से, मैं <em>कुछ भी</em> जवाब दे सकता हूं — विधायक, सांसद, संविधान, पंचायती राज, राज्य सरकारें, और बहुत कुछ। प्रयास करें:',
    prompt1: 'विधायक की भूमिका क्या है?', prompt2: 'मतदान कैसे काम करता है?', prompt3: 'FPTP क्या है?', prompt4: 'विधायक बनाम सांसद?', prompt5: 'त्रिशंकु संसद?', prompt6: 'पंचायती राज?', prompt7: 'उम्मीदवार की पात्रता?', prompt8: 'NOTA क्या है?',

    quiz_start_title: 'क्या आप अपने ज्ञान का परीक्षण करने के लिए तैयार हैं?', quiz_start_desc: 'मतदान, EVM, FPTP, सरकार गठन, और बहुत कुछ को कवर करने वाले 10 बहुविकल्पीय प्रश्न।',
    quiz_rule1: '✅ 10 प्रश्न', quiz_rule2: '⏱️ कोई समय सीमा नहीं', quiz_rule3: '🏆 त्वरित प्रतिक्रिया', quiz_rule4: '🔄 कभी भी फिर से लें',
    quiz_btn_start: 'क्विज़ शुरू करें →', quiz_btn_retake: '🔄 क्विज़ फिर से लें', quiz_btn_review: '📖 सामग्री की समीक्षा करें'
  },
  ta: {
    nav_home: '🏠 முகப்பு', nav_overview: '🌐 கண்ணோட்டம்', nav_video: '🎬 வீடியோ வழிகாட்டி', nav_voting: '🗳️ வாக்களிப்பு', nav_timeline: '📅 காலக்கோடு', nav_concepts: '💡 கருத்துகள்', nav_govt: '🏛️ அரசு', nav_ref: '📋 குறிப்பு', nav_quiz: '🧠 வினாடிவினா', nav_chat: '💬 கேள்',
    hero_badge: '🇮🇳 ஊடாடும் கற்றல் வழிகாட்டி', hero_title: 'இந்தியா எப்படி வாக்களிக்கிறது', hero_subtitle: 'இந்திய தேர்தல் முறையைப் புரிந்து கொள்ளுங்கள் — வாக்காளர் பதிவு முதல் அரசாங்க உருவாக்கம் வரை — மிகவும் எளிமையான முறையில்.', btn_start: 'கற்க தொடங்குங்கள் →', btn_ask: 'கேள்வி கேள் 💬', stat_voters: 'பதிவுசெய்த வாக்காளர்கள்', stat_seats: 'மக்களவை இடங்கள்', stat_phases: 'சராசரி தேர்தல் கட்டங்கள்',
    tag_overview: 'பெரிய படம்', title_overview: 'இந்திய தேர்தல் முறை', sub_overview: 'இந்தியா உலகின் மிகப்பெரிய ஜனநாயக நாடு. இது எப்படி இயங்குகிறது என்று பார்ப்போம்.',
    tag_video: 'அணுகக்கூடிய கற்றல்', title_video: 'வாக்களிக்கும் செயல்முறை விளக்கப்பட்டது', sub_video: 'துணைத்தலைப்புகள் மற்றும் இந்திய சைகை மொழி (ISL) ஆதரவுடன் அதிகாரப்பூர்வ படிப்படியான வழிகாட்டியைப் பார்க்கவும்.',
    fallback_title: 'ஊடாடும் ஒத்திகை', fallback_desc: 'உங்கள் சொந்த வேகத்தில் படிக்க விரும்புகிறீர்களா? கீழே உள்ள எங்கள் அனிமேஷன் காட்சி வழிகாட்டியைப் பயன்படுத்தவும்.', btn_prev: '← முந்தைய', btn_next: 'அடுத்தது →',
    tag_voting: 'படிப்படியாக', title_voting: 'உங்கள் வாக்களிப்பு அனுபவம்', sub_voting: 'தேர்தல் நாளில் நீங்கள் வாக்களிக்கச் செல்லும்போது சரியாக என்ன நடக்கிறது.',
    tag_timeline: 'காலக்கோடு', title_timeline: 'தேர்தல் நாட்காட்டி', sub_timeline: 'அறிவிப்பு முதல் முடிவுகள் வரை — ஒரு வழக்கமான மக்களவைத் தேர்தல் 6-8 வாரங்கள் எடுக்கும்.',
    tag_concepts: 'முக்கிய கருத்துகள்', title_concepts: 'அடிப்படைகளைப் புரிந்துகொள்வது', sub_concepts: 'விளக்கத்தைக் காண எந்தக் கார்டையும் கிளிக் செய்யவும்.',
    tag_govt: 'முடிவுகளுக்குப் பிறகு', title_govt: 'அரசாங்கம் எப்படி உருவாகிறது', sub_govt: 'வாக்குகள் எண்ணப்பட்ட பிறகு அடுத்து என்ன நடக்கும்.',
    tag_ref: 'விரைவு குறிப்பு', title_ref: 'வாக்காளர் vs வேட்பாளர் (எம்.பி)', sub_ref: 'தகுதித் தேவைகளின் ஒப்பீடு.',
    tag_chat: 'ஊடாடும்', title_chat: 'Chunav Saathi யிடம் கேளுங்கள் 💬', sub_chat: 'Gemini AI ஆல் இயக்கப்படுகிறது — இந்திய அரசு, தேர்தல்கள், எம்எல்ஏக்கள், எம்பிக்கள், அரசியலமைப்பு பற்றி கேளுங்கள்.',
    tag_quiz: 'உங்களை சோதிக்கவும்', title_quiz: 'தேர்தல் வினாடி வினா 🧠', sub_quiz: 'இந்திய தேர்தல் முறை குறித்த உங்கள் அறிவைச் சோதிக்க 10 கேள்விகள். நீங்கள் 10/10 எடுக்க முடியுமா?',

    // Missing Elements
    overview_card1_title: 'இந்திய தேர்தல் ஆணையம் (ECI)', overview_card1_desc: 'இந்தியா முழுவதும் சுதந்திரமான மற்றும் நியாயமான தேர்தல்களை நடத்தும் ஒரு சுதந்திரமான அரசியலமைப்பு அமைப்பு. இது தேதிகளை அமைக்கிறது, மாதிரி நடத்தை விதிகளை அமல்படுத்துகிறது மற்றும் முழு செயல்முறையையும் மேற்பார்வை செய்கிறது.',
    overview_card2_title: 'மக்களவைத் தேர்தல்கள்', overview_card2_desc: '5 ஆண்டுகளுக்கு ஒருமுறை நடைபெறும் தேசிய நாடாளுமன்றத் தேர்தல்கள். 543 தொகுதிகள், ஒவ்வொன்றிலிருந்தும் ஒரு எம்பி தேர்ந்தெடுக்கப்படுகிறார். மத்திய அரசை யார் அமைப்பது என்பதை தீர்மானிக்கிறது.',
    overview_card3_title: 'சட்டமன்றத் தேர்தல்கள்', overview_card3_desc: 'மாநில சட்டமன்றத் தேர்தல்களும் ஒவ்வொரு 5 வருடங்களுக்கும் நடைபெறுகின்றன. மாநில அரசாங்கத்தை யார் அமைப்பது, யார் முதல்வர் என்பதை தீர்மானிக்கிறது.',
    overview_card4_title: 'உள்ளாட்சித் தேர்தல்கள்', overview_card4_desc: 'மாநகராட்சிகள், பஞ்சாயத்துகள் மற்றும் பேரூராட்சிகள். குடிமக்களுக்கு மிக நெருக்கமானது — உள்ளூர் உள்கட்டமைப்பு, சுகாதாரம் மற்றும் வளர்ச்சியை கையாள்கிறது.',
    info_banner: 'இந்தியா <strong>First Past the Post (FPTP)</strong> முறையைப் பயன்படுத்துகிறது — ஒரு தொகுதியில் <strong>அதிக வாக்குகள்</strong> பெறும் வேட்பாளர் பெரும்பான்மை இல்லாவிட்டாலும் வெற்றி பெறுவார்.',

    vote_step1_title: 'உங்கள் வாக்குச்சாவடியை அடையுங்கள்', vote_step1_desc: 'உங்கள் வாக்காளர் அடையாள அட்டை சீட்டு அல்லது ECI வாக்காளர் உதவி மையத்தை (1950) பயன்படுத்தி உங்களுக்கு ஒதுக்கப்பட்ட வாக்குச்சாவடியைக் கண்டறியவும். சாவடிகள் <strong>காலை 7 மணி முதல் மாலை 6 மணி வரை</strong> திறந்திருக்கும்.', vote_step1_tip: '💡 உதவிக்குறிப்பு: உங்கள் வாக்காளர் அடையாள அட்டை, ஆதார் அல்லது ஏதேனும் அங்கீகரிக்கப்பட்ட புகைப்பட அடையாளத்தைக் கொண்டு வாருங்கள்.',
    vote_step2_title: 'வரிசை மற்றும் பதிவு சரிபார்ப்பு', vote_step2_desc: 'அதிகாரிகள் வாக்காளர் பட்டியலில் உங்கள் பெயரைச் சரிபார்த்து, உங்கள் புகைப்பட அடையாள ஆவணத்தைச் சரிபார்க்கிறார்கள்.',
    vote_step3_title: 'அழிக்க முடியாத மை குறி', vote_step3_desc: 'உங்கள் இடது ஆள்காட்டி விரலில் நிரந்தர மை குறி பயன்படுத்தப்படுகிறது. இது எவரும் இரண்டு முறை வாக்களிப்பதைத் தடுக்கிறது - இது ஒரு எளிய ஆனால் சக்திவாய்ந்த பாதுகாப்பு.',
    vote_step4_title: 'EVM பட்டனை அழுத்தவும்', vote_step4_desc: 'வாக்குப்பதிவு பெட்டிக்குள், <strong>மின்னணு வாக்குப்பதிவு இயந்திரத்தில் (EVM)</strong> நீங்கள் தேர்ந்தெடுத்த வேட்பாளரின் பெயர் மற்றும் சின்னத்திற்கு அடுத்துள்ள பொத்தானை அழுத்தவும். ஒரு பீப் உங்கள் வாக்கை உறுதிப்படுத்துகிறது.',
    vote_step5_title: 'VVPAT சரிபார்ப்பு', vote_step5_desc: '<strong>வாக்காளர் சரிபார்க்கக்கூடிய காகித தணிக்கை பாதை (VVPAT)</strong> இயந்திரத்தில் இருந்து ஒரு காகித சீட்டு 7 வினாடிகளுக்கு உங்கள் வேட்பாளரின் பெயர் மற்றும் சின்னத்தை காட்டுகிறது, பின்னர் சீல் செய்யப்பட்ட பெட்டியில் விழும். உங்கள் வாக்கு சரியாகப் பதிவு செய்யப்பட்டதைச் சரிபார்க்க இது உங்களை அனுமதிக்கிறது.', vote_step5_tip: '✅ முடிந்தது! நீங்கள் உங்கள் வாக்கை வெற்றிகரமாக செலுத்திவிட்டீர்கள்.',

    time_week0: 'வாரம் 0', time_title0: '📢 தேர்தல் அறிவிப்பு', time_desc0: 'ECI தேதிகளை அறிவிக்கிறது. மாதிரி நடத்தை விதி உடனடியாக அமலுக்கு வருகிறது.',
    time_week1: 'வாரம் 1-2', time_title1: '📝 வேட்புமனு தாக்கல்', time_desc1: 'வேட்பாளர்கள் தேர்தல் அதிகாரியிடம் வேட்புமனு தாக்கல் செய்கிறார்கள். ஆய்வு மற்றும் திரும்பப் பெறுதல் தொடர்கிறது.',
    time_week2: 'வாரம் 2-6', time_title2: '📣 பிரச்சார காலம்', time_desc2: 'கட்சிகள் மற்றும் வேட்பாளர்கள் பிரச்சாரம். வாக்குப்பதிவுக்கு 48 மணி நேரத்திற்குள் (அமைதி காலம்) பிரச்சாரம் செய்ய அனுமதி இல்லை.',
    time_week3: 'வாரம் 3-8', time_title3: '🗳️ பல கட்ட வாக்குப்பதிவு', time_desc3: 'பாதுகாப்புப் படைகளைத் திறமையாக நிறுத்துவதற்குப் பல கட்டங்களாக (7 வரை) வாக்குப்பதிவு நடக்கிறது. வாக்குப்பதிவு நேரம்: <strong>காலை 7 மணி - மாலை 6 மணி</strong>.',
    time_week9: 'வாரம் 9-10', time_title9: '🏛️ அரசாங்கம் அமைத்தல்', time_desc9: 'வெற்றிபெறும் கட்சி அல்லது கூட்டணி உரிமை கோருகிறது. பெரும்பான்மை ஆதரவு கொண்ட தலைவரை ஆட்சி அமைக்க ஜனாதிபதி அழைக்கிறார்.',

    concept1_title: 'First Past The Post (FPTP)', concept1_desc: 'ஒரு தொகுதியில் <strong>அதிக வாக்குகள்</strong> பெறும் வேட்பாளர் வெற்றி பெறுவார் — மொத்த வாக்குகளில் 50%க்கு மேல் அவர்கள் பெறாவிட்டாலும்.', concept1_ex: '<strong>எடுத்துக்காட்டு:</strong> 4-வழி போட்டியில் — A 35%, B 30%, C 20%, D 15%. வேட்பாளர் A வெறும் 35% வாக்குகளுடன் வெற்றி பெறுகிறார்!',
    concept2_title: 'தொகுதிகள்', concept2_desc: 'இந்தியா <strong>543 மக்களவை தொகுதிகளாக</strong> பிரிக்கப்பட்டுள்ளது. ஒவ்வொரு பகுதியும் தேசிய நாடாளுமன்றத்தில் அந்தப் பகுதியைப் பிரதிநிதித்துவப்படுத்தும் சரியாக ஒரு நாடாளுமன்ற உறுப்பினரை (எம்.பி) தேர்ந்தெடுக்கிறது.', concept2_ex: '<strong>எடுத்துக்காட்டு:</strong> நீங்கள் மும்பை வடக்கில் வசிக்கிறீர்கள் என்றால், மக்களவையில் மும்பை வடக்கு முழுவதையும் பிரதிநிதித்துவப்படுத்தும் ஒரு எம்.பிக்கு வாக்களிப்பீர்கள்.',
    concept3_title: 'பல கட்ட தேர்தல்கள்', concept3_desc: 'ஒரே நாளில் வாக்களிக்க முடியாத அளவுக்கு இந்தியா மிகப் பெரிய நாடு. பாதுகாப்புப் படைகளைத் திறமையாக நிறுத்துவதற்கு வாக்குப்பதிவு <strong>பல கட்டங்களாக</strong> (பொதுவாக 4-7) பரப்பப்படுகிறது.', concept3_ex: '<strong>எடுத்துக்காட்டு:</strong> 2024 மக்களவைத் தேர்தலில், ஏப்ரல் 19 மற்றும் ஜூன் 1க்கு இடையில் 7 கட்டங்களாக வாக்குப்பதிவு நடந்தது.',
    concept4_title: 'EVM & VVPAT', concept4_desc: '<strong>EVM</strong> (மின்னணு வாக்குப்பதிவு இயந்திரம்) உங்கள் வாக்கை மின்னணு முறையில் பதிவு செய்கிறது. <strong>VVPAT</strong> (வாக்காளர் சரிபார்க்கக்கூடிய காகித தணிக்கை பாதை) 7 வினாடிகளுக்கு நீங்கள் தேர்ந்தெடுத்த வேட்பாளரைக் காட்டும் காகித சீட்டை அச்சிடுகிறது, எனவே நீங்கள் அதைச் சரிபார்க்கலாம்.', concept4_ex: '<strong>இது ஏன் முக்கியம்:</strong> தேவைப்பட்டால் EVM முடிவுகளைச் சரிபார்க்க தணிக்கை செய்யக்கூடிய காகிதத் தடத்தை VVPAT சேர்க்கிறது.',
    concept5_title: 'மேஜிக் எண்: 272', concept5_desc: 'மக்களவையில் பெரும்பான்மை அரசை அமைக்க, ஒரு கட்சி அல்லது கூட்டணிக்கு <strong>குறைந்தது 272 இடங்கள்</strong> (543ல் பாதிக்கும் மேல்) தேவை.', concept5_ex: '<strong>எளிய கணிதம்:</strong> 543 ÷ 2 = 271.5 → ரவுண்ட் அப் → பெரும்பான்மைக்கு 272 இடங்கள் தேவை.',
    concept6_title: 'மாதிரி நடத்தை விதி', concept6_desc: 'தேர்தல் காலத்தில் அனைத்து கட்சிகளும் வேட்பாளர்களும் பின்பற்ற வேண்டிய ECI வழங்கும் வழிகாட்டுதல்களின் தொகுப்பு. இது பிரச்சார லாபத்திற்காக அரசு அதிகாரத்தை தவறாக பயன்படுத்துவதை தடுக்கிறது.', concept6_ex: '<strong>உதாரண விதி:</strong> MCC அமலுக்கு வந்த பிறகு புதிய அரசு திட்டங்களோ அல்லது இலவசங்களோ அறிவிக்கப்படக்கூடாது.',

    govt_step1_title: 'முடிவுகள் அறிவிக்கப்பட்டன', govt_step1_desc: 'தேர்தல் ஆணையம் முடிவுகளை அறிவிக்கிறது. அதிக இடங்களைக் கொண்ட கட்சி அல்லது கூட்டணி அடையாளம் காணப்படுகிறது.',
    govt_step2_title: 'ஜனாதிபதி அழைக்கிறார்', govt_step2_desc: 'பெரும்பான்மை ஆதரவு (272+ இடங்கள்) உள்ள கட்சி/கூட்டணியின் தலைவரை ஆட்சி அமைக்க ஜனாதிபதி அழைக்கிறார்.',
    govt_step3_title: 'பிரதமர் பதவியேற்பு', govt_step3_desc: 'ஜனாதிபதி மாளிகையில் பிரதமர் மற்றும் அமைச்சரவைக்கு ஜனாதிபதி பதவிப் பிரமாணம் செய்து வைக்கிறார்.',
    hung_title: 'தொங்கு பாராளுமன்றம் என்றால் என்ன?', hung_desc: '<strong>எந்த ஒரு கட்சியும் 272+ இடங்களில் வெற்றிபெறவில்லை</strong> என்றால் அது தொங்கு பாராளுமன்றம் எனப்படும். அதன் பிறகு கட்சிகள் பேச்சுவார்த்தை நடத்தி <strong>கூட்டணி அரசை</strong> அமைக்கின்றன. பாராளுமன்றத்தில் <strong>நம்பிக்கை வாக்கெடுப்பு</strong> மூலம் பெரும்பான்மையை நிரூபிக்க மிகப்பெரிய கட்சி/கூட்டணிக்கு ஜனாதிபதி வாய்ப்பளிக்கிறார்.',
    hung_ex1: '📅 1996 தேர்தல்கள் தொங்கு நாடாளுமன்றத்திற்கு வழிவகுத்தன', hung_ex2: '📅 1999 — NDA கூட்டணி உருவானது', hung_ex3: '📅 2004 — UPA கூட்டணி உருவானது',

    th_criteria: 'தகுதிகள்', th_voter: '🗳️ வாக்காளர்', th_mp: '🏛️ வேட்பாளர் (எம்.பி)',
    tr1_cri: 'குறைந்தபட்ச வயது', tr1_voter: '18 வயது', tr1_mp: '25 வயது',
    tr2_cri: 'குடியுரிமை', tr2_voter: 'இந்திய குடிமகன்', tr2_mp: 'இந்திய குடிமகன்',
    tr3_cri: 'பதிவு', tr3_voter: 'வாக்காளர் பட்டியலில் இருக்க வேண்டும்', tr3_mp: 'ஏதேனும் ஒரு தொகுதியில் வாக்காளராக இருக்க வேண்டும்',
    tr4_cri: 'மன நிலை', tr4_voter: 'நல்ல மனநலம் கொண்டவராக இருக்க வேண்டும்', tr4_mp: 'நீதிமன்றத்தால் புத்திசுவாதீனம் இல்லாதவர் என அறிவிக்கப்படக்கூடாது',
    tr5_cri: 'குற்றப் பின்னணி', tr5_voter: 'வாக்காளர்களுக்கு எந்த தடையும் இல்லை', tr5_mp: '2+ ஆண்டுகள் சிறை தண்டனை பெற்றால் தகுதி நீக்கம்',
    tr6_cri: 'அரசு பதவி', tr6_voter: 'எந்த தடையும் இல்லை', tr6_mp: 'அரசு/ஆதாய பதவியை ராஜினாமா செய்ய வேண்டும்',
    tr7_cri: 'என்.ஆர்.ஐ நிலை', tr7_voter: 'வெளிநாட்டு வாக்காளராக பதிவு செய்யலாம்', tr7_mp: 'இந்தியாவில் வசிக்கும் குடிமகனாக இருக்க வேண்டும்',

    qf_title: '⚡ விரைவான உண்மைகள்', qf_1: '🕖 வாக்குப்பதிவு: காலை 7 மணி – மாலை 6 மணி', qf_2: '📞 வாக்காளர் உதவி எண்: 1950', qf_3: '🖊️ அழிக்க முடியாத மை: இடது ஆள்காட்டி விரல்', qf_4: '📋 நோட்டா: EVM இல் கிடைக்கும்', qf_5: '⏳ பதவிக்காலம்: 5 ஆண்டுகள்', qf_6: '🏆 வெற்றியாளர்: தொகுதியில் அதிக வாக்குகள்',

    chat_msg1: 'வணக்கம்! 🙏 நான் <strong>சுனாவ் சாத்தி</strong>, உங்கள் இந்திய அரசு மற்றும் தேர்தல் வழிகாட்டி.',
    chat_msg2: 'ஜெமினி AI இணைக்கப்பட்ட நிலையில், நான் <em>எதற்கும்</em> பதிலளிக்க முடியும் — எம்.எல்.ஏ.க்கள், எம்.பி.க்கள், அரசியலமைப்பு, பஞ்சாயத்து ராஜ், மாநில அரசுகள் மற்றும் பல. முயற்சிக்கவும்:',
    prompt1: 'எம்எல்ஏவின் பங்கு என்ன?', prompt2: 'வாக்களிப்பது எப்படி நடக்கிறது?', prompt3: 'FPTP என்றால் என்ன?', prompt4: 'எம்எல்ஏ vs எம்பி?', prompt5: 'தொங்கு பாராளுமன்றம்?', prompt6: 'பஞ்சாயத்து ராஜ்?', prompt7: 'வேட்பாளர் தகுதி?', prompt8: 'நோட்டா என்றால் என்ன?',

    quiz_start_title: 'உங்கள் அறிவை சோதிக்க தயாரா?', quiz_start_desc: 'வாக்குப்பதிவு, EVM, FPTP, அரசாங்கம் அமைத்தல் மற்றும் பலவற்றை உள்ளடக்கிய 10 பல தேர்வு கேள்விகள்.',
    quiz_rule1: '✅ 10 கேள்விகள்', quiz_rule2: '⏱️ நேர வரம்பு இல்லை', quiz_rule3: '🏆 உடனடி கருத்து', quiz_rule4: '🔄 எப்போது வேண்டுமானாலும் திரும்ப எடுக்கலாம்',
    quiz_btn_start: 'வினாடி வினாவைத் தொடங்கு →', quiz_btn_retake: '🔄 வினாடி வினாவை மீண்டும் எடு', quiz_btn_review: '📖 உள்ளடக்கத்தை மதிப்பாய்வு செய்'
  },
  te: {
    nav_home: '🏠 హోమ్', nav_overview: '🌐 అవలోకనం', nav_video: '🎬 వీడియో గైడ్', nav_voting: '🗳️ ఓటింగ్ దశలు', nav_timeline: '📅 కాలక్రమం', nav_concepts: '💡 కాన్సెప్ట్స్', nav_govt: '🏛️ ప్రభుత్వం', nav_ref: '📋 రిఫరెన్స్', nav_quiz: '🧠 క్విజ్', nav_chat: '💬 అడగండి',
    hero_badge: '🇮🇳 ఇంటరాక్టివ్ లెర్నింగ్ గైడ్', hero_title: 'భారతదేశం ఎలా ఓటు వేస్తుంది', hero_subtitle: 'భారతదేశ ఎన్నికల వ్యవస్థను అర్థం చేసుకోండి — ఓటరు నమోదు నుండి ప్రభుత్వ ఏర్పాటు వరకు.', btn_start: 'నేర్చుకోవడం ప్రారంభించండి →', btn_ask: 'ప్రశ్న అడగండి 💬', stat_voters: 'నమోదైన ఓటర్లు', stat_seats: 'లోక్‌సభ స్థానాలు', stat_phases: 'సగటు పోలింగ్ దశలు',
    tag_overview: 'పెద్ద చిత్రం', title_overview: 'భారత ఎన్నికల వ్యవస్థ', sub_overview: 'భారతదేశం ప్రపంచంలోనే అతిపెద్ద ప్రజాస్వామ్యం. ఇది ఎలా పనిచేస్తుందో చూద్దాం.',
    tag_video: 'యాక్సెస్ చేయగల అభ్యాసం', title_video: 'ఓటింగ్ ప్రక్రియ వివరణ', sub_video: 'ఉపశీర్షికలు మరియు భారతీయ సంకేత భాష (ISL) మద్దతుతో అధికారిక దశల వారీ మార్గదర్శిని చూడండి.',
    fallback_title: 'ఇంటరాక్టివ్ వాక్‌త్రూ', fallback_desc: 'మీ స్వంత వేగంతో చదవడానికి ఇష్టపడతారా? దిగువ మా యానిమేటెడ్ విజువల్ గైడ్‌ని ఉపయోగించండి.', btn_prev: '← మునుపటి', btn_next: 'తదుపరి →',
    tag_voting: 'దశలవారీగా', title_voting: 'మీ ఓటింగ్ అనుభవం', sub_voting: 'ఎన్నికల రోజున మీరు ఓటు వేయడానికి వెళ్ళినప్పుడు సరిగ్గా ఏమి జరుగుతుంది.',
    tag_timeline: 'కాలక్రమం', title_timeline: 'ఎన్నికల క్యాలెండర్', sub_timeline: 'ప్రకటన నుండి ఫలితాల వరకు — ఒక సాధారణ లోక్‌సభ ఎన్నికలకు 6-8 వారాలు పడుతుంది.',
    tag_concepts: 'ముఖ్య కాన్సెప్ట్స్', title_concepts: 'ప్రాథమికాలను అర్థం చేసుకోవడం', sub_concepts: 'వివరణను చూడటానికి ఏదైనా కార్డ్‌ని క్లిక్ చేయండి.',
    tag_govt: 'ఫలితాల తర్వాత', title_govt: 'ప్రభుత్వం ఎలా ఏర్పడుతుంది', sub_govt: 'ఓట్ల లెక్కింపు పూర్తయిన తర్వాత ఏమి జరుగుతుంది.',
    tag_ref: 'శీఘ్ర సూచన', title_ref: 'ఓటరు vs అభ్యర్థి (ఎంపీ)', sub_ref: 'అర్హత అవసరాల పోలిక.',
    tag_chat: 'ఇంటరాక్టివ్', title_chat: 'చూనావ్ సాథీని అడగండి 💬', sub_chat: 'Gemini AI ద్వారా ఆధారితం — భారత ప్రభుత్వం, ఎన్నికలు, ఎమ్మెల్యేలు, ఎంపీలు, రాజ్యాంగం గురించి అడగండి.',
    tag_quiz: 'మిమ్మల్ని మీరు పరీక్షించుకోండి', title_quiz: 'ఎన్నికల క్విజ్ 🧠', sub_quiz: 'భారత ఎన్నికల వ్యవస్థ గురించి మీ జ్ఞానాన్ని పరీక్షించడానికి 10 ప్రశ్నలు.',

    // Missing Elements
    overview_card1_title: 'భారత ఎన్నికల సంఘం (ECI)', overview_card1_desc: 'భారతదేశం అంతటా స్వేచ్ఛాయుత మరియు నిష్పాక్షిక ఎన్నికలను నిర్వహించే స్వతంత్ర రాజ్యాంగ సంస్థ. ఇది తేదీలను సెట్ చేస్తుంది, మోడల్ కోడ్ ఆఫ్ కండక్ట్‌ని అమలు చేస్తుంది మరియు మొత్తం ప్రక్రియను పర్యవేక్షిస్తుంది.',
    overview_card2_title: 'లోక్‌సభ ఎన్నికలు', overview_card2_desc: 'ప్రతి 5 సంవత్సరాలకు జరిగే జాతీయ పార్లమెంటు ఎన్నికలు. 543 నియోజకవర్గాలు, ఒక్కొక్కరి నుండి ఒక ఎంపీ ఎన్నికయ్యారు. కేంద్ర ప్రభుత్వాన్ని ఎవరు ఏర్పాటు చేస్తారో నిర్ణయిస్తుంది.',
    overview_card3_title: 'విధాన సభ ఎన్నికలు', overview_card3_desc: 'రాష్ట్ర శాసనసభ ఎన్నికలు కూడా ప్రతి 5 సంవత్సరాలకు జరుగుతాయి. రాష్ట్ర ప్రభుత్వాన్ని ఎవరు ఏర్పాటు చేస్తారు మరియు ముఖ్యమంత్రి ఎవరు అవుతారో నిర్ణయిస్తుంది.',
    overview_card4_title: 'స్థానిక సంస్థల ఎన్నికలు', overview_card4_desc: 'మునిసిపల్ కార్పొరేషన్లు, పంచాయతీలు మరియు టౌన్ కౌన్సిల్స్. పౌరులకు అత్యంత చేరువలో - స్థానిక మౌలిక సదుపాయాలు, పారిశుధ్యం మరియు అభివృద్ధిని నిర్వహిస్తుంది.',
    info_banner: 'భారతదేశం <strong>First Past the Post (FPTP)</strong> వ్యవస్థను ఉపయోగిస్తుంది - నియోజకవర్గంలో <strong>అత్యధిక ఓట్లు</strong> పొందిన అభ్యర్థి మెజారిటీ లేకపోయినా విజయం సాధిస్తాడు.',

    vote_step1_title: 'మీ పోలింగ్ బూత్‌కు చేరుకోండి', vote_step1_desc: 'మీ ఓటర్ ID స్లిప్ లేదా ECI ఓటర్ హెల్ప్‌లైన్ (1950) ఉపయోగించి మీ కేటాయించిన పోలింగ్ స్టేషన్‌ను కనుగొనండి. బూత్‌లు <strong>ఉదయం 7 - సాయంత్రం 6</strong> వరకు తెరిచి ఉంటాయి.', vote_step1_tip: '💡 చిట్కా: మీ ఓటరు ID కార్డ్, ఆధార్ లేదా ఏదైనా ఆమోదించబడిన ఫోటో IDని తీసుకురండి.',
    vote_step2_title: 'క్యూ & రిజిస్ట్రేషన్ తనిఖీ', vote_step2_desc: 'అధికారులు ఎలక్టోరల్ రోల్‌లో మీ పేరును తనిఖీ చేసి, మీ ఫోటో గుర్తింపు పత్రాన్ని ధృవీకరిస్తారు.',
    vote_step3_title: 'చెరగని సిరా గుర్తు', vote_step3_desc: 'మీ ఎడమ చూపుడు వేలికి శాశ్వత సిరా గుర్తు వర్తించబడుతుంది. ఇది ఎవరైనా రెండుసార్లు ఓటు వేయకుండా నిరోధిస్తుంది - సరళమైన కానీ శక్తివంతమైన రక్షణ.',
    vote_step4_title: 'EVM బటన్ నొక్కండి', vote_step4_desc: 'పోలింగ్ కంపార్ట్‌మెంట్ లోపల, <strong>ఎలక్ట్రానిక్ ఓటింగ్ మెషిన్ (EVM)</strong>లో మీరు ఎంచుకున్న అభ్యర్థి పేరు మరియు గుర్తు పక్కన ఉన్న బటన్‌ను నొక్కండి. బీప్ మీ ఓటును నిర్ధారిస్తుంది.',
    vote_step5_title: 'VVPAT ధృవీకరణ', vote_step5_desc: '<strong>ఓటర్ వెరిఫైయబుల్ పేపర్ ఆడిట్ ట్రైల్ (VVPAT)</strong> మెషిన్ నుండి వచ్చిన పేపర్ స్లిప్ మీ అభ్యర్థి పేరు మరియు చిహ్నాన్ని 7 సెకన్ల పాటు చూపుతుంది, ఆపై సీల్డ్ బాక్స్‌లో పడిపోతుంది. మీ ఓటు సరిగ్గా నమోదు చేయబడిందో లేదో తనిఖీ చేయడానికి ఇది మిమ్మల్ని అనుమతిస్తుంది.', vote_step5_tip: '✅ పూర్తయింది! మీరు విజయవంతంగా ఓటు వేశారు.',

    time_week0: 'వారం 0', time_title0: '📢 ఎన్నికల ప్రకటన', time_desc0: 'ECI తేదీలను ప్రకటిస్తుంది. మోడల్ కోడ్ ఆఫ్ కండక్ట్ వెంటనే అమలులోకి వస్తుంది.',
    time_week1: 'వారం 1-2', time_title1: '📝 నామినేషన్ దాఖలు', time_desc1: 'అభ్యర్థులు రిటర్నింగ్ అధికారికి నామినేషన్లు దాఖలు చేస్తారు. పరిశీలన మరియు ఉపసంహరణ అనుసరించబడుతుంది.',
    time_week2: 'వారం 2-6', time_title2: '📣 ప్రచార వ్యవధి', time_desc2: 'పార్టీలు మరియు అభ్యర్థులు ప్రచారం చేస్తారు. పోలింగ్‌కు 48 గంటల ముందు (సైలెన్స్ పీరియడ్) ప్రచారం అనుమతించబడదు.',
    time_week3: 'వారం 3-8', time_title3: '🗳️ బహుళ దశల పోలింగ్', time_desc3: 'భద్రతా బలగాలను సమర్థవంతంగా మోహరించేందుకు పలు దశల్లో (7 వరకు) ఓటింగ్ జరుగుతుంది. పోలింగ్ సమయం: <strong>ఉదయం 7 - సాయంత్రం 6</strong>.',
    time_week9: 'వారం 9-10', time_title9: '🏛️ ప్రభుత్వ ఏర్పాటు', time_desc9: 'గెలిచిన పార్టీ లేదా కూటమి దావా వేస్తుంది. ప్రభుత్వాన్ని ఏర్పాటు చేసేందుకు మెజారిటీ మద్దతు ఉన్న నాయకుడిని రాష్ట్రపతి ఆహ్వానిస్తారు.',

    concept1_title: 'ఫస్ట్ పాస్ట్ ది పోస్ట్ (FPTP)', concept1_desc: 'నియోజకవర్గంలో <strong>అత్యధిక ఓట్లు</strong> పొందిన అభ్యర్థి గెలుస్తాడు - వారికి మొత్తం ఓట్లలో 50% కంటే ఎక్కువ లేనప్పటికీ.', concept1_ex: '<strong>ఉదాహరణ:</strong> 4-మార్గం రేసులో — A కి 35%, B కి 30%, C కి 20%, D కి 15% వస్తాయి. కేవలం 35% ఓట్లతో అభ్యర్థి A గెలుస్తాడు!',
    concept2_title: 'నియోజకవర్గాలు', concept2_desc: 'భారతదేశం <strong>543 లోక్‌సభ నియోజకవర్గాలుగా</strong> విభజించబడింది. ప్రతి ప్రాంతం జాతీయ పార్లమెంటులో ఆ ప్రాంతానికి ప్రాతినిధ్యం వహించే సరిగ్గా ఒక పార్లమెంటు సభ్యుడిని (ఎంపీ) ఎన్నుకుంటుంది.', concept2_ex: '<strong>ఉదాహరణ:</strong> మీరు ముంబై నార్త్‌లో నివసిస్తుంటే, లోక్‌సభలో ముంబై నార్త్ మొత్తానికి ప్రాతినిధ్యం వహించే ఒక ఎంపీకి ఓటు వేస్తారు.',
    concept3_title: 'బహుళ దశల ఎన్నికలు', concept3_desc: 'ఒకే రోజు ఓటు వేయడానికి భారతదేశం చాలా పెద్దది. భద్రతా బలగాలను సమర్థవంతంగా మోహరించేందుకు పోలింగ్ <strong>బహుళ దశల్లో</strong> (సాధారణంగా 4-7) విస్తరించబడింది.', concept3_ex: '<strong>ఉదాహరణ:</strong> 2024 లోక్‌సభ ఎన్నికలలో, ఏప్రిల్ 19 మరియు జూన్ 1 మధ్య 7 దశల్లో ఓటింగ్ జరిగింది.',
    concept4_title: 'EVM & VVPAT', concept4_desc: '<strong>EVM</strong> (ఎలక్ట్రానిక్ ఓటింగ్ మెషిన్) మీ ఓటును ఎలక్ట్రానిక్‌గా రికార్డ్ చేస్తుంది. <strong>VVPAT</strong> (ఓటర్ వెరిఫైయబుల్ పేపర్ ఆడిట్ ట్రయల్) 7 సెకన్ల పాటు మీరు ఎంచుకున్న అభ్యర్థిని చూపే పేపర్ స్లిప్‌ను ప్రింట్ చేస్తుంది కాబట్టి మీరు దాన్ని ధృవీకరించవచ్చు.', concept4_ex: '<strong>ఇది ఎందుకు ముఖ్యం:</strong> అవసరమైతే EVM ఫలితాలను ధృవీకరించడానికి ఆడిట్ చేయగల పేపర్ ట్రయిల్‌ను VVPAT జోడిస్తుంది.',
    concept5_title: 'మ్యాజిక్ నంబర్: 272', concept5_desc: 'లోక్‌సభలో మెజారిటీ ప్రభుత్వాన్ని ఏర్పాటు చేయడానికి, ఒక పార్టీ లేదా కూటమికి <strong>కనీసం 272 సీట్లు</strong> కావాలి (543లో సగానికి పైగా).', concept5_ex: '<strong>సింపుల్ మ్యాథ్:</strong> 543 ÷ 2 = 271.5 → రౌండ్ అప్ → మెజారిటీకి 272 సీట్లు కావాలి.',
    concept6_title: 'మోడల్ కోడ్ ఆఫ్ కండక్ట్', concept6_desc: 'ఎన్నికల సమయంలో అన్ని పార్టీలు మరియు అభ్యర్థులు పాటించాల్సిన ECI జారీ చేసిన మార్గదర్శకాల సమితి. ప్రచార ప్రయోజనాల కోసం ప్రభుత్వ అధికారాన్ని దుర్వినియోగం చేయడాన్ని ఇది నిరోధిస్తుంది.', concept6_ex: '<strong>ఉదాహరణ నియమం:</strong> MCC అమలులోకి వచ్చిన తర్వాత కొత్త ప్రభుత్వ పథకాలు లేదా ఉచితాలు ప్రకటించబడవు.',

    govt_step1_title: 'ఫలితాలు ప్రకటించబడ్డాయి', govt_step1_desc: 'ఎన్నికల సంఘం ఫలితాలను ప్రకటిస్తుంది. అత్యధిక సీట్లు సాధించిన పార్టీ లేదా కూటమిని గుర్తిస్తారు.',
    govt_step2_title: 'రాష్ట్రపతి ఆహ్వానిస్తారు', govt_step2_desc: 'ప్రభుత్వాన్ని ఏర్పాటు చేయడానికి మెజారిటీ మద్దతు (272+ సీట్లు) ఉన్న పార్టీ/కూటమి నాయకుడిని రాష్ట్రపతి ఆహ్వానిస్తారు.',
    govt_step3_title: 'ప్రధాని ప్రమాణ స్వీకారం', govt_step3_desc: 'ప్రధాన మంత్రి మరియు క్యాబినెట్‌తో రాష్ట్రపతి భవన్‌లో రాష్ట్రపతి ప్రమాణ స్వీకారం చేయిస్తారు.',
    hung_title: 'హంగ్ పార్లమెంట్ అంటే ఏమిటి?', hung_desc: '<strong>ఏ ఒక్క పార్టీ 272+ సీట్లు గెలుచుకోలేనప్పుడు</strong>, దానిని హంగ్ పార్లమెంట్ అంటారు. ఆ తర్వాత పార్టీలు చర్చలు జరిపి <strong>సంకీర్ణ ప్రభుత్వాన్ని</strong> ఏర్పాటు చేస్తాయి. పార్లమెంటులో <strong>ఫ్లోర్ టెస్ట్</strong> ద్వారా మెజారిటీని నిరూపించుకునే అవకాశం అతిపెద్ద పార్టీ/కూటమికి రాష్ట్రపతి ఇస్తారు.',
    hung_ex1: '📅 1996 ఎన్నికలు హంగ్ పార్లమెంట్‌కు దారితీశాయి', hung_ex2: '📅 1999 — NDA సంకీర్ణం ఏర్పడింది', hung_ex3: '📅 2004 — UPA సంకీర్ణం ఏర్పడింది',

    th_criteria: 'ప్రమాణాలు', th_voter: '🗳️ ఓటరు', th_mp: '🏛️ అభ్యర్థి (ఎంపీ)',
    tr1_cri: 'కనీస వయస్సు', tr1_voter: '18 సంవత్సరాలు', tr1_mp: '25 సంవత్సరాలు',
    tr2_cri: 'పౌరసత్వం', tr2_voter: 'భారతీయ పౌరుడు', tr2_mp: 'భారతీయ పౌరుడు',
    tr3_cri: 'నమోదు', tr3_voter: 'ఓటరు జాబితాలో ఉండాలి', tr3_mp: 'ఏదో ఒక నియోజకవర్గంలో ఓటరు అయి ఉండాలి',
    tr4_cri: 'మానసిక ఆరోగ్యం', tr4_voter: 'ఆరోగ్యకరమైన మనస్సు కలిగి ఉండాలి', tr4_mp: 'కోర్టు ద్వారా మతిస్థిమితం లేని వ్యక్తిగా ప్రకటించబడకూడదు',
    tr5_cri: 'నేర చరిత్ర', tr5_voter: 'ఓటర్లకు ఎటువంటి పరిమితి లేదు', tr5_mp: '2+ సంవత్సరాల శిక్ష విధించబడితే అనర్హులు',
    tr6_cri: 'ప్రభుత్వ పదవి', tr6_voter: 'ఎటువంటి పరిమితి లేదు', tr6_mp: 'ప్రభుత్వం/లాభదాయక పదవికి రాజీనామా చేయాలి',
    tr7_cri: 'ఎన్నారై హోదా', tr7_voter: 'ఓవర్సీస్ ఓటరుగా నమోదు చేసుకోవచ్చు', tr7_mp: 'నివాస పౌరుడిగా ఉండాలి',

    qf_title: '⚡ శీఘ్ర వాస్తవాలు', qf_1: '🕖 పోలింగ్: ఉదయం 7 – సాయంత్రం 6', qf_2: '📞 ఓటర్ హెల్ప్‌లైన్: 1950', qf_3: '🖊️ చెరగని సిరా: ఎడమ చూపుడు వేలు', qf_4: '📋 NOTA: EVMలో అందుబాటులో ఉంది', qf_5: '⏳ పదవీకాలం: 5 సంవత్సరాలు', qf_6: '🏆 విజేత: నియోజకవర్గంలో అత్యధిక ఓట్లు',

    chat_msg1: 'నమస్తే! 🙏 నేను <strong>చూనావ్ సాథీ</strong>, మీ భారత ప్రభుత్వం & ఎన్నికల గైడ్.',
    chat_msg2: 'జెమిని AI కనెక్ట్ చేయబడినందున, నేను <em>దేనికైనా</em> సమాధానం ఇవ్వగలను — ఎమ్మెల్యేలు, ఎంపీలు, రాజ్యాంగం, పంచాయతీ రాజ్, రాష్ట్ర ప్రభుత్వాలు మరియు మరిన్ని. ప్రయత్నించండి:',
    prompt1: 'ఎమ్మెల్యే పాత్ర ఏమిటి?', prompt2: 'ఓటింగ్ ఎలా పనిచేస్తుంది?', prompt3: 'FPTP అంటే ఏమిటి?', prompt4: 'ఎమ్మెల్యే vs ఎంపీ?', prompt5: 'హంగ్ పార్లమెంట్?', prompt6: 'పంచాయతీ రాజ్?', prompt7: 'అభ్యర్థి అర్హత?', prompt8: 'NOTA అంటే ఏమిటి?',

    quiz_start_title: 'మీ జ్ఞానాన్ని పరీక్షించడానికి సిద్ధంగా ఉన్నారా?', quiz_start_desc: 'ఓటింగ్, EVM, FPTP, ప్రభుత్వ ఏర్పాటు మరియు మరిన్నింటిని కవర్ చేసే 10 బహుళ-ఎంపిక ప్రశ్నలు.',
    quiz_rule1: '✅ 10 ప్రశ్నలు', quiz_rule2: '⏱️ సమయ పరిమితి లేదు', quiz_rule3: '🏆 తక్షణ ఫీడ్‌బ్యాక్', quiz_rule4: '🔄 ఎప్పుడైనా మళ్లీ తీసుకోండి',
    quiz_btn_start: 'క్విజ్ ప్రారంభించండి →', quiz_btn_retake: '🔄 క్విజ్ మళ్లీ తీసుకోండి', quiz_btn_review: '📖 కంటెంట్‌ను సమీక్షించండి'
  }
};

function applyTranslations(langCode) {
  const t = UI_STRINGS[langCode] || UI_STRINGS['en'];
  
  // Find all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });
}
