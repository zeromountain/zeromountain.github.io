# zeromountain.github.io

돼지런 앱 링크 인증용 루트 사이트. 돼지런 웹 페이지는 [zeromountain/pig-run](https://github.com/zeromountain/pig-run) 의 `site/` 에서 `/pig-run/` 으로 올라간다 (이 저장소와 상관없음).

| 파일 | 용도 |
|---|---|
| `.well-known/assetlinks.json` | Android 앱 링크 인증 — 짝꿍 초대 주소 `https://zeromountain.github.io/pig-run/join/?code=…` 를 누르면 돼지런이 바로 열리게 한다. pig-run 의 `tool/site/assetlinks.py` 로 만든다 (pig-run `docs/W16_INVITE_LINK_PLAN.md` §6-1) |
| `.well-known/apple-app-site-association` | iOS 유니버설 링크 인증 — 같은 초대 주소를 iPhone 에서 누르면 돼지런이 바로 열리게 한다. 확장자 없이 둔다. pig-run 의 `tool/site/aasa.py` 로 만든다 (팀 ID·번들 ID 를 pig-run 의 Xcode 프로젝트에서 읽는다) |
| `.nojekyll` | Jekyll 을 끈다. 없으면 점으로 시작하는 `.well-known` 폴더가 빠진 채 올라간다 |

- 루트에 `pig-run` 이라는 폴더를 만들지 않는다 (프로젝트 사이트 `/pig-run/` 을 가린다).
- 앱을 서명하는 키가 늘면(스토어 출시 — Play 앱 서명 키) 지문을 추가해 `assetlinks.json` 을 다시 만든다.
- Pages 설정: Settings → Pages → Source: `main` 브랜치 `/ (root)`.
