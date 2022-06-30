# vue3Model

vue3 模板

项目构建 vite

项目采用 vue3+ts+element-plus

状态管理 pinia mitt

高亮代码 代码对比 v-code-diff

代码规范 eslint prettier

提交规范 husky  
npx husky add .husky/commit-msg "npx --no-install commitlint --edit "$1""  
npx husky add .husky/pre-commit "npx eslint --ext .js,.jsx,.ts,.tsx,vue src"  
npm run lint:lint-staged

当前 dev 与 prod 的区别  
dev 使用 mock
prod 使用 anyMock
