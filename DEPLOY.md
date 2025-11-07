# GitHub Pages 배포 가이드

## 🚀 자동 배포 설정 완료

GitHub Actions를 통해 `main` 브랜치에 push할 때마다 자동으로 GitHub Pages에 배포됩니다.

## 📋 GitHub 저장소 설정 단계

### 1. GitHub 저장소에 코드 push

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

### 2. GitHub Pages 설정

1. GitHub 저장소 페이지로 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - **Source**: `GitHub Actions` 선택
   
   ![GitHub Pages Settings](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/publishing-source-drop-down.webp)

### 3. 배포 확인

1. 코드를 push하면 자동으로 **Actions** 탭에서 배포 진행 상황 확인
2. 배포 완료 후 아래 URL로 접속:
   ```
   https://[your-username].github.io/seed-info/
   ```

## 🔄 배포 프로세스

- **자동 배포**: `main` 브랜치에 push할 때마다 자동 실행
- **수동 배포**: Actions 탭 > "Deploy to GitHub Pages" > Run workflow 버튼으로 수동 실행 가능

## 📝 파일 설명

### `.github/workflows/deploy.yml`
GitHub Actions workflow 파일
- Node.js 20 환경 설정
- 의존성 설치 (`npm ci`)
- 프로젝트 빌드 (`npm run build`)
- GitHub Pages에 자동 배포

### `vite.config.js`
```javascript
base: '/seed-info/'  // GitHub Pages용 base path 설정
```

## ⚠️ 주의사항

1. **브랜치 이름**: 기본 브랜치가 `master`인 경우 `.github/workflows/deploy.yml`의 `main`을 `master`로 변경
2. **저장소 이름**: 저장소 이름이 변경되면 `vite.config.js`의 `base` 값도 변경 필요
3. **첫 배포**: 첫 push 후 Actions 탭에서 workflow가 정상 실행되는지 확인

## 🐛 트러블슈팅

### 404 오류가 발생하는 경우
- `vite.config.js`의 `base` 경로가 저장소 이름과 일치하는지 확인
- GitHub Pages 설정에서 Source가 "GitHub Actions"로 설정되었는지 확인

### 배포가 실행되지 않는 경우
- Actions 탭에서 workflow 권한 확인
- Settings > Actions > General > Workflow permissions: "Read and write permissions" 선택

### CSS/JS 파일이 로드되지 않는 경우
- `base` 경로 확인
- 브라우저 개발자 도구 Console에서 에러 확인

## 📞 문제 발생 시

1. Actions 탭에서 실패한 workflow 로그 확인
2. Issues 탭에 문제 보고

