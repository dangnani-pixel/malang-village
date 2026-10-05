'use strict';
const characters = [
 {name:'복숭아 강아지',emoji:'🐶',quote:'너도 와! 같이 하면 더 재밌잖아!',desc:'사람이 모이면 에너지가 생기는 마을의 초대 담당. 좋은 일이 생기면 혼자 좋아하기 아까워요.',quirk:'모두를 챙겨놓고 집에 가서는 “나 오늘 너무 떠들었나?” 생각해요.',love:'좋아하는 티가 말과 표정에 묻어나요. 반응이 돌아오면 더 신나요.',work:'첫 대화와 아이디어 회의를 열어요. 마무리 약속을 잡아두면 더 잘 달려요.',friend:'“지금 잠깐 나올래?”가 가능한 번개 친구.',charge:'네가 와서 분위기가 좋아졌어!'},
 {name:'딸기 토끼',emoji:'🐰',quote:'너 이거 좋아한다고 했잖아!',desc:'생일과 취향을 기억하는 다정한 약속 요정. 함께하는 시간이 즐겁도록 미리 작은 준비를 해요.',quirk:'“아무거나 괜찮아!”라고 했지만 저장한 맛집은 이미 다섯 곳.',love:'작은 기념일과 둘만의 습관을 소중히 여겨요.',work:'사람과 일정을 함께 챙겨요. 부탁을 너무 많이 맡지 않도록 경계선도 필요해요.',friend:'모임 끝나고 “잘 들어갔어?”를 보내는 친구.',charge:'네가 챙겨준 거, 나 기억하고 있어.'},
 {name:'젤리 수달',emoji:'🦦',quote:'재밌겠는데? 일단 내가 해볼게!',desc:'새로운 걸 발견하면 직접 만져보는 행동파. 어색한 분위기도 함께할 활동 하나로 풀어버려요.',quirk:'잠깐 구경하러 갔다가 체험 수업까지 듣고 와요.',love:'같이 경험하고 웃으면서 가까워져요.',work:'막힌 일에 첫 시도를 만들어요. 시작한 일을 공유하면 동료들이 따라오기 쉬워요.',friend:'취미 체험과 당일치기 여행의 단짝.',charge:'너랑 하면 처음 하는 것도 덜 어렵다!'},
 {name:'꿀단지 곰',emoji:'🐻',quote:'일단 밥 먹자. 그다음 같이 해결하자.',desc:'마음이 쓰이면 실제로 도와주는 마을의 든든한 주민. 약속한 일은 잘 끝내고 싶어요.',quirk:'본인은 무심하다고 생각하지만 남의 충전기까지 챙겨 다녀요.',love:'꾸준한 연락과 실질적인 배려로 마음을 보여줘요.',work:'역할을 나누고 일을 끝까지 끌고 가요. 해결 전에 상대 의견을 물으면 더 좋아요.',friend:'곤란할 때 전화하면 함께 방법을 찾아주는 친구.',charge:'덕분에 마음이 놓였어.'},
 {name:'솜사탕 고양이',emoji:'🐱',quote:'조용히 같이 있어도 좋잖아.',desc:'자기 속도로 가까워지며 소소한 분위기를 즐겨요. 편해진 사람에게는 엉뚱한 농담과 취향을 잔뜩 꺼내놓아요.',quirk:'단체 채팅방에서는 조용한데 친한 친구에게는 밈 열두 개 전송.',love:'부담 없이 함께하는 시간 속에서 마음이 열려요.',work:'혼자 생각할 시간을 얻으면 섬세한 의견을 보태요.',friend:'목적 없이 걷고 각자 할 일을 해도 편한 친구.',charge:'천천히 말해도 돼. 듣고 있어.'},
 {name:'푸딩 펭귄',emoji:'🐧',quote:'우리 다음에도 여기 올까?',desc:'익숙한 사람과 쌓는 작은 추억을 좋아해요. 눈에 잘 띄지 않는 배려를 오래 기억합니다.',quirk:'새 메뉴를 고민하는 척하다가 늘 먹던 최애 메뉴를 주문해요.',love:'일정하고 다정한 표현에서 편안함을 느껴요.',work:'미리 준비하고 꼼꼼히 살펴요. 갑작스러운 변경은 조금 일찍 알려주면 좋아요.',friend:'몇 달 만에 만나도 어제 본 것 같은 오래가는 친구.',charge:'우리 약속, 나도 소중해.'},
 {name:'귤 여우',emoji:'🦊',quote:'더 간단한 방법이 있을 것 같은데?',desc:'혼자 탐색하다가 뜻밖의 해결책을 들고 나타나요. 방식은 유연하지만 쓸모가 있는지는 직접 확인하고 싶어요.',quirk:'관심 없는 주제에는 말이 없다가 취향 이야기가 나오면 갑자기 해설자.',love:'서로의 취향과 시간을 존중하면서 가까워져요.',work:'재량이 있으면 새로운 해결책을 찾아요. 중간 상황도 알려주면 협업이 편해져요.',friend:'신기한 장소와 숨은 취미를 알려주는 친구.',charge:'네 방식이 궁금해. 보여줄래?'},
 {name:'쿠키 햄스터',emoji:'🐹',quote:'혹시 몰라서 하나 더 챙겼어.',desc:'작은 준비로 큰 혼란을 막는 마을의 살림꾼. 드러내지 않아도 주변을 꽤 자세히 보고 있어요.',quirk:'가방에서 밴드, 간식, 보조배터리가 차례대로 나와요.',love:'말한 것을 기억하고 약속을 지키며 애정을 표현해요.',work:'빠진 부분을 발견하고 완성도를 높여요. 필요한 기준이 명확하면 편해요.',friend:'여행 준비물과 정산을 믿고 맡길 수 있는 친구.',charge:'네가 신경 쓴 부분 덕분에 잘됐어.'}
];
// Four independent preferences; this is an original party game, not a validated assessment.
const prototypes = [[90,85,75,20],[70,90,35,85],[90,25,95,15],[70,25,30,85],[15,80,80,20],[20,85,15,75],[25,20,90,45],[15,25,15,95]];
const axes = [
 ['다가가는 속도','천천히 친해져요','먼저 다가가요'],
 ['마음을 돌보는 방식','해결부터 챙겨요','공감부터 건네요'],
 ['새로움의 취향','익숙한 게 좋아요','새로운 게 좋아요'],
 ['약속을 굴리는 방식','흐름에 맡겨요','미리 정해둬요']
];
// [scene, prompt, axis, [[answer, score], ...]]. Answer position is counterbalanced.
const questions = [
 ['💬 단톡방 입장','처음 보는 사람 7명과 같은 팀이 됐다. 첫 10분의 나는?',0,[['“우리 이름부터 외워요!” 먼저 한 바퀴 말을 건다.',100],['옆 사람 한 명과 소소하게 이야기한다.',50],['전체 분위기를 보고, 나에게 말이 오면 자연스럽게 받는다.',0]]],
 ['🍜 점심 메뉴 대란','늘 가던 맛집 옆에 처음 보는 가게가 생겼다. 오늘의 선택은?',2,[['검증된 최애 메뉴. 점심은 실패하고 싶지 않다.',0],['메뉴판이 끌리면 새 가게, 아니면 원래 가게.',50],['처음 보는 메뉴로! 실패해도 다음에 할 이야기는 생긴다.',100]]],
 ['☔ 친구의 흐린 날','친구가 “발표 망했어…”라고 연락했다. 먼저 보낼 말은?',1,[['“많이 속상하지. 어떤 순간이 제일 힘들었어?”',100],['“들어줄까, 다음 발표 같이 준비할까?”',50],['“어디서 막혔어? 다음에 쓸 방법 같이 찾아보자.”',0]]],
 ['🧳 여행 전날 밤','친구들과 떠나는 1박 여행. 내 휴대폰에 있는 것은?',3,[['숙소 주소 하나. 나머지는 그때 끌리는 대로.',0],['꼭 갈 곳 두 군데와 몇 가지 후보.',50],['동선, 예약, 비 올 때 대안까지 있는 메모.',100]]],
 ['🎤 회의의 정적','“의견 있으세요?” 아무도 말하지 않는 회의. 나는?',0,[['생각을 메모했다가 정리된 의견을 전달한다.',0],['아직 덜 다듬어졌어도 먼저 꺼내 같이 굴린다.',100],['한두 사람이 말한 뒤 내 의견을 보탠다.',50]]],
 ['🎁 작은 선물','친구가 요즘 지쳐 보인다. 더 나답게 준비하는 선물은?',1,[['필요하다던 물건이나 귀찮은 일을 대신 해주기.',0],['좋아하는 간식과 “요즘 어때?”라는 짧은 메모.',50],['둘만 아는 추억을 담은 편지와 작은 선물.',100]]],
 ['🛸 뜻밖의 초대','친구가 생전 처음 듣는 취미 원데이 클래스를 제안했다.',2,[['설명과 후기를 조금 보고 재미있으면 간다.',50],['처음이라 더 궁금하다. 일정부터 확인한다.',100],['그 시간에 이미 좋아하는 취미를 함께하자고 한다.',0]]],
 ['📅 내일의 약속','친구가 “내일 오후쯤 만나자!”라고 했다. 나는?',3,[['시간과 장소를 지금 정해두면 마음이 편하다.',100],['대략 몇 시인지 정하고 장소는 내일 고른다.',50],['내일 일어나서 서로 연락하면 충분하다.',0]]],
 ['🔋 주말 배터리','한 주가 끝났다. 가장 회복되는 토요일은?',0,[['좋아하는 사람들과 만나 신나게 수다 떠는 날.',100],['혼자 놀다가 저녁에 친한 사람 한 명과 만나는 날.',50],['누구에게도 설명하지 않고 내 속도로 보내는 날.',0]]],
 ['🧯 마감 직전 SOS','동료가 실수해서 마감이 위험해졌다. 내 첫 행동은?',1,[['괜찮다고 안심시키고, 같이 상황을 정리한다.',100],['당장 복구할 부분부터 나눠 처리한다.',0],['많이 놀랐는지 확인한 뒤 바로 복구에 합류한다.',50]]],
 ['🎮 게임 설명서','친구가 새 보드게임을 꺼냈다. 더 끌리는 쪽은?',2,[['해봤고 재밌었던 게임으로 바로 시작하기.',0],['이런 규칙은 처음인데? 새 게임을 배워보기.',100],['설명을 듣고 내 취향이면 해보기.',50]]],
 ['🧩 갑작스러운 변경','약속 한 시간 전, 장소가 바뀌었다. 불편함의 정도는?',3,[['동선만 괜찮으면 별생각 없다. 새 장소도 좋지!',0],['가능은 한데, 다음에는 조금 일찍 알려줬으면.',50],['맞춰둔 계획을 다시 짜야 해서 꽤 신경 쓰인다.',100]]],
 ['🐣 새 친구 환영회','늦게 도착했더니 이미 작은 대화 그룹들이 생겼다.',0,[['아는 얼굴 옆에 앉아 천천히 합류한다.',0],['“무슨 얘기 중이에요?” 궁금한 그룹에 먼저 들어간다.',100],['눈이 마주치는 사람과 먼저 인사한다.',50]]],
 ['📝 초안 피드백','친한 동료가 “솔직하게 어때?”라며 초안을 보여줬다.',1,[['좋은 점을 말하고, 고치면 좋을 점도 정리한다.',50],['핵심 문제와 고칠 순서를 바로 이야기한다.',0],['어떤 의도였는지 듣고, 받아들이기 편하게 제안한다.',100]]],
 ['🍿 영화 고르기','오늘 저녁에 더 보고 싶은 영화는?',2,[['전혀 모르는 세계를 보여줄 낯선 장르.',100],['좋아하는 배우가 나오는 익숙한 장르.',50],['다시 봐도 좋은 나의 최애 영화.',0]]],
 ['🛠️ 자유 과제','“다음 주까지 자유롭게 만들어주세요.” 나는 먼저?',3,[['손을 움직여 초안을 만들며 방향을 잡는다.',0],['완료 기준과 할 일을 나눈 다음 시작한다.',100],['대략적인 목표만 정하고 중간에 조정한다.',50]]],
 ['📸 좋은 소식','기다리던 일이 잘됐다! 가장 먼저 하는 행동은?',0,[['가까운 한두 사람에게 먼저 알려준다.',50],['단톡방에 소식을 전하고 같이 기뻐한다.',100],['혼자 충분히 기뻐한 뒤 만났을 때 이야기한다.',0]]],
 ['💛 화해의 언어','작게 다툰 뒤 상대가 해주면 더 풀릴 것 같은 행동은?',1,[['다음에 어떻게 다르게 할지 구체적으로 약속하기.',0],['내가 왜 서운했는지 알아주고 마음을 말해주기.',100],['서운함도 들어주고 다음 약속도 함께 정하기.',50]]],
 ['🏕️ 팀의 작은 축제','올해 팀 행사를 고른다면?',2,[['지난번 반응이 좋았던 코스를 더 편하게 다듬기.',0],['아예 새로운 콘셉트를 작게라도 시도하기.',100],['익숙한 코스에 새로운 활동 하나 넣기.',50]]],
 ['🧺 준비물 요정','피크닉 출발 30분 전. 내 가방은?',3,[['필수품 체크 완료. 필요한 사람이 있을까 봐 여분도.',100],['지갑과 휴대폰. 나머지는 가면서 해결한다.',0],['필수품은 넣었고 간식은 가는 길에 고른다.',50]]]
];
const extras = [
 ['분위기 시동 담당','반응이 없으면 혼자 머릿속에서 회의를 열어요.','“아무도 싫다고 안 했으니 다 좋아하는 거겠지?”','초대 담당','마음 표현 담당','번개 모임 담당'],
 ['취향 기억 수집가','챙겨준 만큼 알아봐주지 않으면 서운함이 쌓여요.','“내가 하는 게 빠르니까…” 하며 또 맡아버려요.','사람과 일정 담당','작은 기념일 담당','모임 큐레이터'],
 ['재미를 실행하는 사람','새 프로젝트를 열다가 지난 프로젝트가 잠들어요.','“금방 끝나!”의 금방이 가끔 길어져요.','실험과 시제품 담당','새로운 데이트 담당','체험 활동 담당'],
 ['현실을 구하는 해결사','도와주고 싶은 마음이 잔소리처럼 들릴 때가 있어요.','상대는 위로가 필요한데 해결책 세 개가 먼저 나와요.','우선순위와 실행 담당','일상의 안정 담당','모임의 든든한 총무'],
 ['조용한 취향 부자','혼자 충전하는 시간이 필요한데 말없이 사라져요.','“괜찮아”라고 했지만 혼자 생각할 게 남아 있어요.','분위기와 디테일 담당','둘만의 시간 담당','느긋한 산책 담당'],
 ['익숙함을 지키는 친구','갑작스러운 변화에 적응할 시간이 필요해요.','서운함을 참다가 오래전 일까지 한꺼번에 떠올려요.','꾸준한 점검 담당','약속과 기억 담당','단골 장소 담당'],
 ['지름길 발견 전문가','설명을 생략해서 사람들이 내 결론을 못 따라와요.','논리적으로 맞는 말인데 상대 표정을 놓칠 때가 있어요.','분석과 새 방법 담당','서로의 자유 담당','숨은 장소 탐험 담당'],
 ['빈틈을 채우는 준비왕','확실해질 때까지 준비하다 출발이 늦어져요.','예상 밖 변경에 “그러니까 미리 말했잖아”가 나올 뻔해요.','일정과 검수 담당','꾸준한 행동 담당','준비물과 동선 담당']
];
// Handwritten story recommendations, symmetric and different for each relationship.
// a,b,title,reason,friction,shared mission. These are fictional pairings, not predictive scores.
const matches = {
 work:[
 [0,7,'아이디어와 체크리스트','강아지가 사람과 아이디어를 모으면 햄스터가 빠진 준비와 마감을 잡아요. 시작과 완성이 이어지는 조합!','강아지의 즉흥 변경이 햄스터에게는 재작업이 될 수 있어요.','아이디어는 마음껏, 변경 마감은 하나만 정하기.'],
 [1,6,'다정한 번역가와 지름길 탐정','토끼가 사람들의 요구를 모으고 여우가 덜 복잡한 방법을 찾아요. 좋은 해법을 모두가 이해하게 만들 수 있어요.','여우의 짧은 피드백을 토끼가 차갑게 느낄 수 있어요.','“좋은 점 하나 + 바꿀 점 하나”로 피드백하기.'],
 [2,5,'실험실과 안전기지','수달이 새 시도를 열고 펭귄이 잘된 방법을 꾸준히 지켜줘요. 실험이 일회성 이벤트로 끝나지 않아요.','수달은 당장 바꾸고 싶고 펭귄은 익숙해질 시간이 필요해요.','새 방식은 하루만 시험하고 함께 검토하기.'],
 [3,4,'추진력과 섬세한 눈','곰이 실행 순서를 잡고 고양이가 놓치기 쉬운 사용자의 느낌을 살펴요. 빠르게 만들되 어색한 부분까지 챙겨요.','곰이 답을 재촉하면 고양이의 생각이 숨어버려요.','회의 전에 초안을 보내고 의견 적을 시간 주기.'],
 [0,3,'출발 버튼과 완주 버튼','강아지의 에너지에 곰의 실행력이 붙으면 회의가 실제 행동으로 이어져요.','둘 다 이끌려다 담당이 겹칠 수 있어요.','대외 소통과 최종 결정을 나누기.'],
 [1,2,'일정 있는 놀이터','토끼가 참여하기 편한 자리를 만들고 수달이 몸소 시도해봐요. 워크숍이나 행사를 함께 만들기 좋아요.','토끼가 수달의 뒷정리를 전부 맡기 쉬워요.','시작할 때 마무리 담당도 정하기.'],
 [4,5,'조용한 완성도','고양이의 감각과 펭귄의 꾸준함이 합쳐져 작은 불편을 잘 다듬어요.','둘 다 말을 아끼면 문제 발견이 늦게 공유돼요.','매일 한 번 “걸리는 것 하나” 나누기.'],
 [6,7,'지름길에도 표지판','여우가 더 간단한 방법을 찾고 햄스터가 조건과 예외를 확인해요.','여우는 규칙이 답답하고 햄스터는 생략이 불안해요.','생략해도 되는 단계와 꼭 지킬 단계 표시하기.']
 ],
 friend:[
 [0,2,'오늘도 에피소드 생성','강아지가 “나올래?”를 보내면 수달이 “이거 해보자!”로 받아요. 만나기만 해도 새 이야기가 생겨요.','재미에 취해 서로의 피로를 못 볼 수 있어요.','귀가 시간 한 번은 서로 확인하기.'],
 [1,5,'우리만의 단골석','토끼가 취향을 기억하고 펭귄이 같은 추억을 오래 간직해요. 반복되는 약속이 둘만의 의식이 돼요.','서운한 걸 서로 눈치로 알아주길 기다릴 수 있어요.','아쉬운 건 그날 작은 말로 꺼내기.'],
 [3,7,'여행 가방 안의 평화','곰은 이동과 선택을, 햄스터는 준비물과 빈틈을 챙겨요. 함께 여행하면 생활이 편해져요.','함께 쉬러 가서도 할 일만 하게 될 수 있어요.','아무 일정 없는 한 시간 넣기.'],
 [4,6,'조용한 취향 탐험대','고양이의 감각과 여우의 호기심이 만나 남들은 모르는 장소를 발견해요. 말이 적어도 심심하지 않아요.','둘 다 먼저 연락하지 않아 약속이 사라질 수 있어요.','발견한 장소 하나를 다음 약속으로 연결하기.'],
 [0,7,'초대장과 피크닉 바구니','강아지가 사람을 모으고 햄스터가 편하게 놀 준비를 해요. 즉흥적인 모임에도 작은 안전망이 생겨요.','햄스터에게 예약과 정리가 몰릴 수 있어요.','이번 예약은 강아지, 다음 예약은 햄스터!'],
 [2,6,'이상한 취미 동아리','수달의 행동력과 여우의 탐구심이 만나 처음 보는 취미도 놀이가 돼요.','하고 싶은 건 많은데 마지막 약속이 흐릿해져요.','다음 활동은 하나만 골라 날짜 잡기.'],
 [4,5,'담요 두 장의 우정','고양이는 편한 분위기를, 펭귄은 익숙한 약속을 만들어요. 말없이 쉬는 날에도 함께할 수 있어요.','고양이의 갑작스러운 일정 변경은 펭귄을 서운하게 해요.','혼자 쉬고 싶은 날에는 짧게 먼저 알려주기.'],
 [1,3,'간식과 우산을 챙긴 둘','토끼는 좋아하는 간식을, 곰은 필요한 우산을 챙겨요. 서로 다른 방식으로 곁을 지켜주는 친구예요.','쉬는 날에도 서로를 챙기느라 바쁠 수 있어요.','오늘은 각자 원하는 것 하나씩 말하기.']
 ],
 love:[
 [0,5,'햇살과 포근한 둥지','강아지의 밝은 애정 표현과 펭귄의 꾸준한 기억이 만나요. 설렘과 익숙함을 함께 키우는 이야기예요.','강아지의 번개 약속이 펭귄에게는 예고 없는 변화예요.','즉흥 데이트라도 출발 전 한 번 묻기.'],
 [1,3,'딸기잼과 따뜻한 빵','토끼는 마음을 표현하고 곰은 일상에서 챙겨줘요. 말과 행동이 서로에게 번역되는 조합이에요.','토끼의 속상함을 곰이 바로 해결하려 들 수 있어요.','“오늘은 안아주기 먼저?”라고 물어보기.'],
 [2,4,'산책하다 발견한 마음','수달은 새로운 경험으로 초대하고 고양이는 둘만의 분위기를 더해요. 작은 모험이 추억이 돼요.','수달의 빠른 속도에 고양이가 지칠 수 있어요.','밖에서 노는 날과 집에서 쉬는 날 번갈아 갖기.'],
 [6,7,'자유에도 돌아갈 주소','여우의 독립적인 탐색과 햄스터의 꾸준한 배려가 만나 서로의 시간을 지키는 관계를 상상해요.','여우의 유연함과 햄스터의 약속 기준이 다를 수 있어요.','연락 간격과 꼭 지킬 약속을 구체적으로 맞추기.'],
 [0,4,'다가감과 머무름','강아지는 먼저 다가가고 고양이는 편해지면 깊은 취향을 보여줘요. 서로 다른 속도를 알아가는 재미가 있어요.','조용한 시간을 관심 없음으로 오해할 수 있어요.','혼자 쉬는 날에도 짧은 애정 표현 하나 남기기.'],
 [1,7,'사소한 것을 기억하는 둘','토끼는 좋아하는 것을, 햄스터는 필요한 것을 기억해요. 작은 배려가 많은 관계예요.','챙김이 기대와 의무로 바뀔 수 있어요.','“고마워”와 “오늘은 내가 할게”를 번갈아 말하기.'],
 [2,5,'모험 뒤에 돌아오는 곳','수달은 새 이야기를 가져오고 펭귄은 익숙한 자리를 만들어요.','새로움과 반복 중 무엇을 할지 자주 달라요.','단골 데이트 한 번, 새 데이트 한 번 번갈아 고르기.'],
 [3,6,'나란히 걷는 독립파','곰의 현실 감각과 여우의 자율성이 만나 각자의 목표를 응원할 수 있어요.','둘 다 해결책에 강해서 감정 이야기를 건너뛰기 쉬워요.','해결 없는 안부 시간 10분 만들기.']
 ]
};
// Remove duplicate story edges so every recommended card is a distinct character.
matches.friend=matches.friend.filter((e,i,all)=>all.findIndex(x=>x[0]===e[0]&&x[1]===e[1])===i);
const modeNames={work:'💼 업무',friend:'🍿 친구',love:'💌 연애'};
const app=document.getElementById('app');
let answers=[],step=0,myResult=null,resultId=0,partner=1,mode='work',preview=false;
function animal(id,cls=''){
 const widths=[425,335,360,356,407,329,400,346], starts=[0,445,795,1180,0,430,780,1190];
 return `<div class="animal ${cls}" role="img" aria-label="${characters[id].name}" style="background-size:${1536/widths[id]*100}% 200%;background-position:${starts[id]/(1536-widths[id])*100}% ${id<4?0:100}%"></div>`;
}
function screen(html){app.innerHTML=html;window.scrollTo({top:0,behavior:'instant'});const title=app.querySelector('h1,h2');if(title){title.tabIndex=-1;title.focus({preventScroll:true});}}
function calculate(a){
 if(a.length!==questions.length||a.some(v=>!Number.isInteger(v)||v<0||v>2))throw Error('Complete all questions first');
 const sums=[0,0,0,0],counts=[0,0,0,0];
 questions.forEach((q,i)=>{sums[q[2]]+=q[3][a[i]][1];counts[q[2]]++;});
 const profile=sums.map((s,i)=>s/counts[i]);
 const ranking=prototypes.map((p,id)=>({id,d:Math.sqrt(p.reduce((sum,v,j)=>sum+(v-profile[j])**2,0)/4)})).sort((a,b)=>a.d-b.d||a.id-b.id);
 return {id:ranking[0].id,second:ranking[1].id,profile,close:ranking[1].d-ranking[0].d<6,balanced:profile.every(v=>Math.abs(v-50)<=10)};
}
function begin(){answers=[];step=0;myResult=null;preview=false;quiz();}
function home(){screen(`<section class="card"><p class="eyebrow">MALLANG VILLAGE · NEW CHAPTER</p><h1>귀여운 얼굴 뒤,<br>진짜 내 캐릭터는?</h1><p class="intro">단톡방, 여행, 마감 직전, 좋아하는 사람 앞에서.<br>스무 가지 장면 속 나와, 잘 맞는 친구를 만나요.</p><div class="version-tags"><span class="pill">✦ 20문항</span><span class="pill">약 4분</span><span class="pill">관계별 단짝 추천</span></div><button class="primary wide" id="start">나의 캐릭터 & 단짝 찾기 →</button><div class="cast">${characters.map((c,i)=>`<div>${animal(i)}<p class="mini-name">${c.name}</p></div>`).join('')}</div><p class="meta">비슷해 보여도, 친해지는 방식은 꽤 다를 거예요.</p><button class="text-button" id="browse">여덟 친구의 캐릭터 도감 ↗</button></section>`);document.getElementById('start').onclick=begin;document.getElementById('browse').onclick=directory;}
function quiz(){const q=questions[step];screen(`<section class="card question-card"><div class="progress-row"><span>${['첫인상 탐색 중','마음의 언어 수집 중','취향의 차이 발견 중','숨은 캐릭터 조립 중'][Math.floor(step/5)]}</span><span>${step+1} / ${questions.length}</span></div><progress value="${step}" max="${questions.length}" aria-label="완료한 질문"></progress><p class="scene">${q[0]}</p><p class="eyebrow">SCENE ${String(step+1).padStart(2,'0')}</p><h2>${q[1]}</h2><div class="options">${q[3].map((v,i)=>`<button class="option ${answers[step]===i?'selected':''}" aria-pressed="${answers[step]===i}" data-answer="${i}"><b>${'ABC'[i]}</b><span>${v[0]}</span></button>`).join('')}</div><div class="question-bottom"><button class="text-button" id="prev" ${step===0?'disabled':''}>← 이전 질문</button><span>실제로 자주 하는 행동을 골라요.</span><button class="text-button" id="exit">처음으로</button></div></section>`);
 app.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{answers[step]=Number(b.dataset.answer);if(step===questions.length-1){myResult=calculate(answers);resultId=myResult.id;preview=false;partner=recommendations(resultId,mode)[0];result();}else{step++;quiz();}});
 document.getElementById('prev').onclick=()=>{if(step>0){step--;quiz();}};document.getElementById('exit').onclick=home;
}
function story(a,b,m){return matches[m].find(e=>(e[0]===a&&e[1]===b)||(e[0]===b&&e[1]===a));}
function recommendations(id,m){
 const primary=matches[m].slice(0,4),secondary=matches[m].slice(4);
 const picks=[...primary,...secondary].filter(e=>e[0]===id||e[1]===id).map(e=>e[0]===id?e[1]:e[0]);
 if(picks.length<2){const rest=characters.map((_,i)=>i).filter(i=>i!==id&&!picks.includes(i)).sort((a,b)=>distance(prototypes[id],prototypes[a])-distance(prototypes[id],prototypes[b]));picks.push(...rest);}
 return [...new Set(picks)].slice(0,2);
}
function distance(a,b){return a.reduce((s,v,i)=>s+Math.abs(v-b[i]),0);}
function chemistryData(a,b,m){
 const custom=story(a,b,m);if(custom)return {title:custom[2],why:custom[3],snag:custom[4],mission:custom[5]};
 const role=m==='work'?3:m==='love'?4:5;
 if(a===b)return {title:`${extras[a][0]} × 2`,why:`둘 다 ${extras[a][role]}에 익숙해요. 원하는 것을 설명하기 편하지만, 같은 부분에서 함께 멈칫할 수도 있어요.`,snag:extras[a][1],mission:['역할 하나씩 바꿔 맡아보기.','평소와 다른 데이트를 번갈아 제안하기.','이번 약속은 한 명이 초대하고 다른 한 명이 마무리하기.'][m==='work'?0:m==='love'?1:2]};
 const difference=prototypes[a].map((v,i)=>({i,d:Math.abs(v-prototypes[b][i])})).sort((x,y)=>y.d-x.d)[0].i;
 const snags=['한쪽은 바로 대화하고 싶고 다른 쪽은 생각할 시간이 필요해요.','한쪽은 마음부터, 다른 쪽은 해결부터 살펴 오해가 생길 수 있어요.','새로운 시도와 익숙한 선택 중 무엇이 좋은지 다를 수 있어요.','즉흥적으로 바꿔도 되는 범위가 서로 달라요.'];
 const missions=['이야기할 시간과 혼자 생각할 시간을 함께 정하기.','“들어줄까, 같이 해결할까?” 먼저 묻기.','익숙한 선택 하나에 새로운 선택 하나만 더하기.','꼭 지킬 약속 하나와 바꿔도 되는 것 하나 정하기.'];
 return {title:`${characters[a].name.split(' ')[1]}와 ${characters[b].name.split(' ')[1]}의 ${m==='work'?'합작 프로젝트':m==='love'?'둘만의 리듬':'주말 에피소드'}`,why:`${characters[a].name}는 ${extras[a][role]}, ${characters[b].name}는 ${extras[b][role]} 쪽에 가까워요. 서로의 역할을 알아주면 두 가지 방식으로 관계를 채울 수 있어요.`,snag:snags[difference],mission:missions[difference]};
}
function profileHTML(){const p=myResult.profile;return `<div class="profile"><h2 class="section-title">내 답변에 담긴 네 가지 취향</h2><p class="meta">능력 점수가 아니라, 이번 선택이 향한 쪽이에요.</p>${axes.map((x,i)=>`<div class="axis"><strong>${x[0]}</strong><div class="axis-labels"><span>${x[1]}</span><span>${x[2]}</span></div><div class="axis-track" role="img" aria-label="${x[0]}: ${p[i]<40?x[1]:p[i]>60?x[2]:'상황에 따라 달라요'}"><span style="left:${p[i]}%"></span></div><p>${p[i]<40?x[1]+' 쪽':p[i]>60?x[2]+' 쪽':'상황에 따라 두 방식을 섞어요'}</p></div>`).join('')}</div>`;}
function personalNote(){const p=myResult.profile;const special=p.map((v,i)=>({i,strength:Math.abs(v-50),v})).sort((a,b)=>b.strength-a.strength)[0];if(special.strength<20)return ['상황 따라 변신하는 카멜레온','한쪽만 고르기보다 사람과 상황에 맞춰 움직이는 답이 많았어요. 아래 캐릭터는 임시 별명처럼 가볍게 읽어주세요.'];const notes=[['조용히 친해지는 반전 매력','처음부터 넓게 만나기보다 내 속도로 관계를 여는 답이 두드러졌어요.'],['모임의 시작 버튼','누군가 시작해주길 기다리기보다 먼저 움직이는 답이 두드러졌어요.'],['행동으로 건네는 마음','마음을 실질적인 도움과 다음 행동으로 표현하는 답이 두드러졌어요.'],['마음에 자막을 달아주는 사람','해결 전에 감정과 의도를 알아주는 답이 두드러졌어요.'],['취향에도 단골이 있는 사람','새로움 자체보다 이미 좋아하는 경험을 지키는 답이 두드러졌어요.'],['취향의 탐험가','모르는 것을 직접 만나보고 싶은 답이 두드러졌어요.'],['흐름을 타는 유연함','미리 확정하기보다 상황을 보며 움직이는 답이 두드러졌어요.'],['준비에서 얻는 여유','기준과 약속을 먼저 맞춰두는 답이 두드러졌어요.']];return notes[special.i*2+(special.v>50?1:0)];}
function result(){const c=characters[resultId],e=extras[resultId],note=!preview?personalNote():null;screen(`<section class="card"><p class="eyebrow">${preview?'CHARACTER BOOK':'YOUR MALLANG CHARACTER'}</p><div class="result-top"><div class="result-art">${animal(resultId)}</div><div><p class="meta">${preview?'이 친구의 기본 설정':myResult.balanced?'균형형 응답 · 가장 가까운 이야기':'지금 내 답변과 가장 가까운 친구'}</p><h1>${c.name}</h1><span class="pill">${e[0]}</span><p class="quote">“${c.quote}”</p><p class="description">${c.desc}</p></div></div>${!preview?`<div class="personal-note"><strong>✦ 이번 답변의 포인트 · ${note[0]}</strong><p>${note[1]}</p>${myResult.close?`<p>두 캐릭터가 비슷하게 가까워요. <strong>${characters[myResult.second].name}</strong>의 모습도 함께 있어요.</p>`:''}</div>`:''}<div class="quirk">🤭 들켰다! · ${c.quirk}</div><div class="blindspot"><strong>🙈 친해지면 보이는 빈틈</strong><p>${e[1]}</p><span>${e[2]}</span></div><div class="mode-grid"><div class="mode"><h3>💼 일할 때</h3><p>${c.work}</p></div><div class="mode"><h3>🍿 친구일 때</h3><p>${c.friend}</p></div><div class="mode"><h3>💌 연애할 때</h3><p>${c.love}</p></div></div><div class="charge">🔋 나의 충전 버튼<br><strong>“${c.charge}”</strong></div>${!preview?profileHTML():''}<div class="divider"></div><h2 class="section-title">그래서, 누구랑 잘 맞을까?</h2><p class="intro">일할 때의 단짝과 놀 때의 단짝은 다를 수 있어요.</p><div class="tabs" role="group" aria-label="궁합 종류">${Object.entries(modeNames).map(([id,label])=>`<button class="tab ${mode===id?'active':''}" aria-pressed="${mode===id}" data-mode="${id}">${label} 궁합</button>`).join('')}</div><div id="recommendations"></div><p class="meta">캐릭터 설정으로 만든 재미용 추천이에요. 실제 관계의 순위는 아니에요.</p><h3 class="compare-title">다른 친구와도 직접 비교해볼까요?</h3><div class="partner-row"><label for="partner">함께 볼 친구</label><select id="partner">${characters.map((x,i)=>`<option value="${i}" ${partner===i?'selected':''}>${x.emoji} ${x.name}</option>`).join('')}</select></div><div id="chemistry" aria-live="polite"></div><p class="team-tip">팀에서 해보기 · 내 캐릭터와 추천 단짝을 소개해요.<br>“맞는 한 줄 / 아닌 한 줄”을 골라 이야기해보세요.<br>연애 궁합은 원하는 사람만 즐겨요.</p><div class="actions"><button class="secondary" id="again">${preview?'나도 테스트하기':'다시 테스트하기'}</button><button class="secondary" id="all">캐릭터 도감</button>${preview&&myResult?'<button class="secondary" id="mine">내 결과로 돌아가기</button>':''}</div><details class="method"><summary>캐릭터는 어떻게 정해지나요?</summary><p>20개 상황에서 네 가지 취향을 각각 5번 물어요. 선택마다 해당 취향에 0·50·100을 더해 평균을 내고, 여덟 캐릭터의 설정 중 평균 차이가 가장 작은 이야기를 골라요. 선택지 위치만으로 결과가 정해지지 않아요. 비슷한 캐릭터는 함께 표시합니다. 단짝은 응답 통계가 아닌 관계별 캐릭터 서사로 추천해요. 심리검사로 검증된 모델은 아닙니다.</p></details></section>`);
 document.getElementById('partner').onchange=e=>{partner=Number(e.target.value);chemistry();};
 app.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{mode=b.dataset.mode;partner=recommendations(resultId,mode)[0];document.getElementById('partner').value=partner;app.querySelectorAll('[data-mode]').forEach(t=>{t.classList.toggle('active',t.dataset.mode===mode);t.setAttribute('aria-pressed',String(t.dataset.mode===mode));});renderRecommendations();chemistry();});
 document.getElementById('again').onclick=begin;document.getElementById('all').onclick=directory;if(document.getElementById('mine'))document.getElementById('mine').onclick=showMine;renderRecommendations();chemistry();
}
function renderRecommendations(){document.getElementById('recommendations').innerHTML=`<div class="match-grid">${recommendations(resultId,mode).map((id,i)=>{const data=chemistryData(resultId,id,mode);return `<button class="match-card" data-match="${id}" aria-label="${characters[id].name}와 ${modeNames[mode].slice(3)} 궁합 자세히 보기"><span class="match-badge">${i?'다른 맛의 단짝':'추천 단짝'}</span>${animal(id)}<strong>${characters[id].name}</strong><span class="match-title">${data.title}</span><p>${data.why}</p><span class="match-link">우리 케미 자세히 ↓</span></button>`;}).join('')}</div>`;app.querySelectorAll('[data-match]').forEach(b=>b.onclick=()=>{partner=Number(b.dataset.match);document.getElementById('partner').value=partner;chemistry();document.getElementById('chemistry').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});});}
function chemistry(){const data=chemistryData(resultId,partner,mode);document.getElementById('chemistry').innerHTML=`<div class="compat"><p class="eyebrow">${modeNames[mode]} · 우리 둘의 이야기</p><div class="pair">${animal(resultId)}<span class="pair-symbol">${mode==='love'?'♡':'＋'}</span>${animal(partner)}</div><p class="pair-names">${characters[resultId].name} × ${characters[partner].name}</p><h3>${data.title}</h3><div class="chem-section"><strong>✨ 잘 맞는 이유</strong><p>${data.why}</p></div><div class="chem-section"><strong>💥 여기서 삐걱할 수 있어요</strong><p>${data.snag}</p></div><div class="mission"><strong>🎯 둘만의 케미 미션</strong><p>${data.mission}</p></div></div>`;}
function showMine(){resultId=myResult.id;preview=false;partner=recommendations(resultId,mode)[0];result();}
function directory(){screen(`<section class="card"><p class="eyebrow">OUR LITTLE NEIGHBORS</p><h1>같이 있으면 더 재밌는<br>여덟 친구</h1><p class="intro">귀여운 반전부터 관계별 단짝까지 살펴보세요.</p><div class="directory">${characters.map((c,i)=>`<button class="resident" data-resident="${i}">${animal(i)}<strong>${c.name}</strong><p>${extras[i][0]}</p></button>`).join('')}</div><button class="secondary" id="back">${myResult?'내 결과로 돌아가기':'처음으로'}</button></section>`);app.querySelectorAll('[data-resident]').forEach(b=>b.onclick=()=>{resultId=Number(b.dataset.resident);preview=true;partner=recommendations(resultId,mode)[0];result();});document.getElementById('back').onclick=myResult?showMine:home;}
home();
