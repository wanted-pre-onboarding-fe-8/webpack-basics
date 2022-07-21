# ✍️ 웹팩 설정하기 예제

## 0. 실행 방법

```bash
yarn install
```

```bash
yarn start
```

## 1. 프로젝트 소개

웹팩5 설정 과정을 정리하여 필요한 때 참고한다.

## 2. 구조

```
.
├── src
│   ├── index.js
│   └── template.html
├── README.md
├── package.json
├── webpack.config.js
└── yarn.lock
```

## 3. 해설

### 📦 기본 번들링

타겟 JS 파일을 찾아 번들링을 처리하여 출력하는지 확인

- 설치: webpack, webpack-cli

```bash
yarn add -D webpack webpack-cli
```

- 생성: src/index.js
- 생성: webpack.config.js
  - entry, output 설정 추가
- 스크립트 추가: build
- 확인: 빌드 결과물

### 🔌 플러그인: HTML 템플릿

템플릿 HTML을 기반으로 빌드된 HTML 파일을 생성해주는 플러그인 설정

- 설치: html-webpack-plugin

```bash
yarn add -D html-webpack-plugin
```

- 생성: src/template.html
- 편집: webpack.config.js 설정 추가
- 확인: 빌드 결과물에 html 파일 생성 확인
- 확인: 브라우저에서 html 파일 실행
- 편집: src/index.js DOM 조작 로직 추가
- 확인: 브라우저에서 결과 확인

### 🔌 플러그인: clean

빌드할 때마다 기존 결과물들을 제거해주는 플러그인 설정

- 설치: clean-webpack-plugin

```bash
yarn add -D clean-webpack-plugin
```

- 편집: webpack.config.js 설정 추가

### 📦 로더: babel

최신 버전의 JS로 작성된 작업물을 브라우저 호환성이 높은 버전으로 트랜스파일

- 설치: 바벨 관련 패키지

```bash
yarn add -D babel-loader @babel/core @babel/preset-env @babel/preset-env @babel/plugin-proposal-class-properties
```

- 편집: webpack.config.js 설정 추가
- 생성: .babelrc

> 로더 제외 항목:  
> styled-components 패키지는 로더 사용 불필요  
> 이미지, 폰트 파일은 사용 예정 없음

### ⚙️ 개발 서버

- 설치: webpack-dev-server

```bash
yarn add -D webpack-dev-server
```

- 편집: webpack.config.js 설정 추가
- 편집: start 스크립트 추가
- 확인: start 스크립트 실행 결과 확인

## 4. 참고자료

- [Webpack Docs - Getting Started](https://webpack.js.org/guides/getting-started/#root)
- [Github - taniarascia/webpack-boilerplate](https://github.com/taniarascia/webpack-boilerplate)
- [Blog - Webpack Tutorial: How to Set Up webpack 5 From Scratch](https://www.taniarascia.com/how-to-use-webpack/)
