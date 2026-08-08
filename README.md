# resume.sungd.uk

조성덕 이력서 공개 페이지. 빌드 없이 정적 파일 그대로 GitHub Pages로 서빙.

## 구성

```
index.html      한국어
en/index.html   영어
style.css       두 페이지 공용 스타일 (여기서만 디자인 수정)
script.js       재직 기간 자동 계산 — <html lang>에 따라 "4년 5개월" / "4 yrs 5 mos"
fonts/          Inter (sungd.uk 사이트에서 가져옴)
```

두 언어 페이지는 **같은 구조·같은 클래스**를 쓴다. 한쪽 내용을 고치면 다른 쪽도 같이 고칠 것.
경력 기간은 `data-from` / `data-to` 속성만 넣으면 오늘 날짜 기준으로 자동 계산된다.

## 지금 상태 (2026-07-25)

옛 tech.sungd.uk/resume/ 페이지의 포맷·내용을 그대로 옮겨온 뒤 다듬은 것.
그 사이트는 지금 sungd.uk 이고, tech.sungd.uk 주소는 없어졌다.
`dev/resume-studio`(master 파이프라인)에 더 최신·상세한 이력 데이터가 있지만,
**무엇을 반영할지는 아직 정하지 않았다** — 사용자와 상의 후 결정. 그전까지 이 저장소의
HTML을 직접 고쳐도 된다(master 산출물이 아니라 손으로 관리하는 페이지).

Courses 섹션은 `hidden`으로 숨겨둠(코드는 보존). Experience에 성과를 채운 뒤 노출 여부 재검토.

## 로컬 확인

절대 경로(`/style.css`)를 쓰므로 `file://`로 열면 스타일이 안 붙는다. 서버로 열 것:

```sh
python3 -m http.server 8899
# http://127.0.0.1:8899/  ·  http://127.0.0.1:8899/en/
```

## 배포

GitHub Pages, 커스텀 도메인 `resume.sungd.uk` (CNAME 참고). `main` 브랜치 루트를 그대로 서빙.
`.nojekyll` 있음 — Jekyll 처리 없이 정적 파일로만 나간다.
