# sungd.uk

네 사이트로 가는 랜딩 한 장. 빌드 없이 GitHub Pages 가 `main` 루트를 그대로 서빙한다.

```
index.html    전부 (스타일 인라인)
404.html      옛 글 주소로 온 사람 안내
CNAME · favicon.svg · robots.txt
```

## 로컬 확인

```sh
python3 -m http.server 8899
```

## 사이트 구성

이 표는 여기에만 둔다. 다른 repo 의 README 는 자기 사이트만 설명한다.
**repo 이름이 곧 주소다** — `newhigen/resume.sungd.uk` 처럼.

| 주소                                         | 내용                              |
| -------------------------------------------- | --------------------------------- |
| [sungd.uk](https://sungd.uk)                 | 랜딩 (이 repo)                    |
| [resume.sungd.uk](https://resume.sungd.uk)   | 이력서 + 프로젝트                 |
| [writing.sungd.uk](https://writing.sungd.uk) | 글 — 책·생각·기술                 |
| [ai.sungd.uk](https://ai.sungd.uk)           | Claude Code·Codex 릴리스 큐레이션 |

## 404 가 하는 일

이 주소는 원래 글 블로그였다. 예전 링크·북마크가 전부 여기로 온다.

`404.html` 은 갈 곳을 안내하고, **들어온 주소를 그대로 writing 에서 여는 링크**를 만들어준다.
`sungd.uk/the-go-giver-1/` → `writing.sungd.uk/the-go-giver-1/`.

넘김(리다이렉트)은 안 건다. 필요해지면 조건식이 `resume.sungd.uk` repo 의
`docs/reorg/cloudflare.md` 에 있다.
