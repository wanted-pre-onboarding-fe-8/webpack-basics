function component() {
  const element = document.createElement('div');

  element.innerHTML = '내가 보이면 웹팩 설정 성공!';

  return element;
}

document.body.appendChild(component());
