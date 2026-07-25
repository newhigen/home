## 2026-07-25 — 신설: tech.sungd.uk/resume/ 대체

tech.sungd.uk 안에 손으로 쓴 정적 이력서 페이지가 있었으나 내용이 자주 밀렸다(마스터 파이프라인과 별개로 관리됨).
`dev/apps/resume`의 master 빌드 파이프라인 산출물을 그대로 옮겨와 독립 도메인으로 분리.

**왜**
- 이력서는 독립 도메인이 더 적절 — 명함·이메일 서명·지원서에 붙이기 깔끔한 URL.
- 손으로 쓴 페이지는 master 갱신과 따로 놀아 내용이 stale해지는 문제가 있었음. 파이프라인 산출물을 그대로 배포하면 갱신 경로가 하나로 합쳐진다.

**결정**
- 도메인: `resume.sungd.uk` (검토: `cv.sungd.uk`도 후보였으나 더 보편적인 표현을 택함)
- 배포: GitHub Pages, 빌드 스텝 없이 정적 파일 그대로(`ai-pick`과 같은 legacy 방식)
- `dev/apps/resume/build/build.mjs`에 `--public`(커리어 키트 전용 `/d/` 토글 숨김)·`--dlbar`(PDF 다운로드 바) 옵션 추가해 독립 배포용 렌더를 지원
- 내용 범위: 상세 경력기술서·포트폴리오는 빼고 **1페이지 요약**만(`--mode onepage`) — 사용자 승인. tech.sungd.uk/resume/의 원래 분량(소개·경력·스킬·학력·논문/대회/외국어)에 맞춤
