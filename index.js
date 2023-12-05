// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "한 시간이면 만든다고 해서 도전했는데 두 시간 걸림" },
  { "number": 2, "message": "그래도 만들고 나니 뿌듯해용" },
  { "number": 3, "message": "무슨 멘트가 있을까 하나하나 열어보는 당신! 칭찬 스티커 드립니다 짝짝짝" },
  { "number": 4, "message": "아이콘도 바꾸고 싶었는데 이미 새벽 1시라 pass.." },
  { "number": 5, "message": "멘트 24개 써야 하는데 쉽지 않네요" },
  { "number": 6, "message": "내일은 뭐라고 쓸지 궁금하지?" },
  { "number": 7, "message": "내가 제일 좋아하는 건.. 더보기" },
  { "number": 8, "message": "사실 조금 후회 중" },
  { "number": 9, "message": "그냥 잠이나 잘걸 그랬나?" },
  { "number": 10, "message": "크리스마스에 눈이 올까요?" },
  { "number": 11, "message": "Bobby Caldwell-what you won't do for love" },
  { "number": 12, "message": "여기까지 열어본 당신을 근성 짱으로 임명합니다" },
  { "number": 13, "message": "오늘의 추천곡은요 Green Day-Last night on earth" },
  { "number": 14, "message": "하이 또 왔네 방가방가 햄토리" },
  { "number": 15, "message": "Grover Washington Jr.-just the two of us" },
  { "number": 16, "message": "여기까지 열어보는 사람이 있을까?" },
  { "number": 17, "message": "Q-take me where your heart is" },
  { "number": 18, "message": "Her-Blossom Roses" },
  { "number": 19, "message": "멘트 고갈이라 오늘의 추천곡 컨셉 밀어넣은 거 맞음" },
  { "number": 20, "message": "낯간지러워서 이런데에 글 잘 못쓰는 편..ㅎㅎ" },
  { "number": 21, "message": "christmas everywhere" },
  { "number": 22, "message": "행복한 하루 보냈나요?" },
  { "number": 23, "message": "오늘은 크리스마스 이브의 이브라네" },
  { "number": 24, "message": "Frohe Weihnachten!" }
];
