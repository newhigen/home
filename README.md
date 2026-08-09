# sungd.uk

sungd.uk 랜딩. 소개 한 줄과 세 사이트로 가는 링크만 있는 한 장짜리 정적 페이지.
빌드 없음, GitHub Pages 가 `main` 루트를 그대로 서빙한다.

```
index.html    전부 (스타일 인라인)
favicon.svg
robots.txt
CNAME         sungd.uk
```

## 사이트 구성

| 주소                                             | 내용                              | repo         |
| ------------------------------------------------ | --------------------------------- | ------------ |
| [sungd.uk](https://sungd.uk)                     | 랜딩 (이 repo)                    | home         |
| [resume.sungd.uk](https://resume.sungd.uk)       | 이력서 + 프로젝트                 | resume       |
| [writing.sungd.uk](https://writing.sungd.uk)     | 글 — 책·생각·기술                 | blog-writing |
| [ai.sungd.uk](https://ai.sungd.uk)               | Claude Code·Codex 릴리스 큐레이션 | ai-pick      |

## 로컬 확인

```sh
python3 -m http.server 8899
```
