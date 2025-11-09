# Grammair - AI 문법 교정 크롬 확장 프로그램

![Grammair Logo](./public/Grammair-logo-no-bg.png)

**Grammair**는 AI 기반으로 영어 문법을 즉시 교정해 주는 크롬 확장 프로그램입니다. 글쓰기 실수를 바로잡고, 더 나은 영어 문장을 작성할 수 있도록 도와줍니다.

## ✨ 주요 기능

-   **실시간 문법 검사**: AI를 통해 문법, 철자, 구두점 오류를 실시간으로 찾아냅니다.
-   **명확한 피드백**: 어떤 부분이 왜 틀렸는지에 대한 설명을 제공하여 언어 실력 향상에 도움을 줍니다.
-   **간편한 사용성**: 어떤 텍스트 입력창이든 쉽게 복사-붙여넣기하여 검사를 받을 수 있습니다.

## 🚀 시작하기

### 사전 요구 사항

-   [Node.js](https://nodejs.org/) (v18 이상 권장)
-   [npm](https://www.npmjs.com/) 또는 [Bun](https://bun.sh/)

### 설치 및 실행

1.  **저장소 복제:**
    ```bash
    git clone https://github.com/bonzonkim/grammair-chrome-extension.git
    cd grammair-chrome-extension
    ```

2.  **의존성 설치:**
    ```bash
    npm install
    ```
    또는
    ```bash
    bun install
    ```

3.  **개발 서버 실행:**
    ```bash
    npm run dev
    ```
    > **참고**: 이 확장 프로그램은 로컬 백엔드 서버(`http://localhost:8080/api/grammair`)와 통신해야 정상적으로 작동합니다. 개발 시 백엔드 서버를 함께 실행해 주세요.

## 📦 빌드하기

프로덕션용으로 확장 프로그램을 빌드하려면 다음 명령어를 실행하세요.

```bash
npm run build
```

빌드가 완료되면 `build` 디렉토리에 압축되지 않은 확장 프로그램 파일이 생성됩니다.

## chrome에 확장 프로그램 설치하기

1.  Chrome 브라우저를 열고 주소창에 `chrome://extensions`를 입력합니다.
2.  우측 상단의 **'개발자 모드(Developer mode)'**를 활성화합니다.
3.  **'압축 해제된 확장 프로그램을 로드합니다(Load unpacked)'** 버튼을 클릭합니다.
4.  프로젝트의 `build` 디렉토리를 선택합니다.
5.  이제 Grammair 확장 프로그램이 브라우저에 추가되었습니다!

---

<details>
<summary>🇺🇸 English</summary>

# Grammair - AI English Grammar Corrector Chrome Extension

![Grammair Logo](./public/Grammair-logo-no-bg.png)

**Grammair** is a Chrome extension that instantly corrects your English grammar using AI. It helps you fix writing mistakes and compose better English sentences.

## ✨ Key Features

-   **Real-time Grammar Check**: Detects grammar, spelling, and punctuation errors in real-time with AI.
-   **Clear Feedback**: Provides explanations on what was wrong and why, helping you improve your Language skills.
-   **Easy to Use**: Simply copy and paste text from any input field to get it checked.

## 🚀 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or higher recommended)
-   [npm](https://www.npmjs.com/) or [Bun](https://bun.sh/)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/bonzonkim/grammair-chrome-extension.git
    cd grammair-chrome-extension
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    bun install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    > **Note**: This extension requires communication with a local backend server (`http://localhost:8080/api/grammair`) to function correctly. Please run the backend server concurrently during development.

## 📦 Building the Extension

To build the extension for production, run the following command:

```bash
npm run build
```

Once the build is complete, the unpacked extension files will be generated in the `build` directory.

## 🔧 Installing on Chrome

1.  Open the Chrome browser and navigate to `chrome://extensions`.
2.  Enable **'Developer mode'** in the top right corner.
3.  Click the **'Load unpacked'** button.
4.  Select the `build` directory from your project.
5.  The Grammair extension is now added to your browser!

</details>
