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
| [sungd.uk](https://sungd.uk)                     | 랜딩 (이 repo)                    | resume       |
| [resume.sungd.uk](https://resume.sungd.uk)       | 이력서 + 프로젝트                 | blog-tech    |
| [writing.sungd.uk](https://writing.sungd.uk)     | 글 — 책·생각·기술                 | blog-writing |
| [today.sungd.uk](https://today.sungd.uk)         | Claude Code·Codex 릴리스 큐레이션 | ai-pick      |

⚠ repo 이름이 내용과 어긋나 있다. 이 repo 는 원래 이력서였는데 이력서는
`blog-tech` 로 옮겨갔다. 이름 정리는 아직 안 했다 — `resume` → `home`,
`blog-tech` → `resume` 가 맞는 이름이다.

## 로컬 확인

```sh
python3 -m http.server 8899
```
