# resume.sungd.uk

조성덕 이력서 공개 페이지. 정적 파일(`index.html` + `resume.pdf`) 그대로 GitHub Pages로 서빙.

## 마스터가 진실 — 여기는 산출물

내용을 직접 고치지 말 것. 진짜 원본은 `dev/apps/resume` (`master/*.yaml`)에 있고, 이 저장소의
`index.html`·`resume.pdf`는 거기서 빌드해 복사해 넣은 결과물이다.

## 갱신 방법

`dev/apps/resume`에서 master 내용을 고친 뒤:

```sh
cd dev/apps/resume
node build/build.mjs --mode onepage --plain --public \
  --dlbar "이력서 PDF=./resume.pdf" --pdf --out resume

cp out/resume.html ../../sites/resume/index.html
cp out/resume.pdf  ../../sites/resume/resume.pdf
```

1페이지 요약본만 배포한다(경력기술서 상세·포트폴리오는 제외 — 2026-07-25 결정).

그다음 이 저장소에서 커밋·푸시하면 GitHub Pages가 자동 반영한다.

## 배포

GitHub Pages, 커스텀 도메인 `resume.sungd.uk` (CNAME 파일 참고). 빌드 없이 `main` 브랜치 루트를 그대로 서빙.
