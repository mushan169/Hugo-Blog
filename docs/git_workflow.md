# GitHub 初始化与分支流程

## 1. 首次推送到 GitHub

先在 GitHub 网页端创建一个空仓库，不要勾选 `README`、`.gitignore` 和 `license`。

然后在项目根目录执行：

```powershell
git branch -M main
git add .
git commit -m "chore: initial blog setup"
git remote add origin https://github.com/<your-name>/<repo-name>.git
git push -u origin main
```

如果你使用 SSH，把 `remote add` 换成：

```powershell
git remote add origin git@github.com:<your-name>/<repo-name>.git
```

## 2. 日常开发流程

开始新功能前：

```powershell
git switch main
git pull
git switch -c feature/<short-name>
```

开发完成后：

```powershell
git add .
git commit -m "feat: <summary>"
git push -u origin feature/<short-name>
```

然后到 GitHub 创建 Pull Request，把分支合并回 `main`。

## 3. 推荐分支命名

- `main`: 稳定主分支
- `feature/<name>`: 新功能
- `fix/<name>`: Bug 修复
- `chore/<name>`: 配置、依赖、工程维护
- `docs/<name>`: 文档更新

示例：

- `feature/home-banner`
- `fix/mobile-footer-overlap`
- `chore/hugo-gitignore`

## 4. 推荐提交信息

- `feat: add homepage banner shell`
- `fix: prevent footer overlap on small screens`
- `chore: ignore Hugo build artifacts`
- `docs: add git workflow notes`

## 5. 首次提交前建议检查

```powershell
git status
git remote -v
```

确认以下内容不会被提交：

- `public/`
- `resources/_gen/`
- `node_modules/`
- `.hugo_build.lock`

## 6. 适合当前项目的协作习惯

- 模板、内容、静态资源、主题代码提交到仓库
- 构建产物不提交，统一通过 `hugo` 本地或部署时生成
- 每个功能尽量单独分支，合并前先检查首页和移动端表现
