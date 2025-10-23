# AI Model Benchmark Leaderboard

一个现代化的AI模型性能排行榜，支持实时搜索、排序和统计功能。

## 功能特性

- 🏆 **排行榜展示** - 清晰展示模型排名和性能分数
- 🔍 **实时搜索** - 支持按模型名称或组织搜索
- 📊 **多维度排序** - 支持按分数、日期、模型名称、组织排序
- 📈 **统计信息** - 显示总模型数、平均分数、最高分数、参与组织数
- 🎨 **现代化UI** - 响应式设计，支持移动端和桌面端
- 📱 **移动端友好** - 自适应布局，完美支持各种屏幕尺寸

## 项目结构

```
leader board/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript逻辑
├── data.json           # 数据文件
├── config.json         # 配置文件
├── package.json        # 项目配置
└── README.md           # 说明文档
```

## 快速开始

### 方法1：直接打开
```bash
# 在浏览器中直接打开 index.html
open index.html
```

### 方法2：本地服务器
```bash
# 使用Python启动本地服务器
python -m http.server 8000

# 或使用Node.js
npx http-server -p 8000

# 或使用live-server（支持热重载）
npx live-server --port=8000
```

### 方法3：使用npm脚本
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 或启动静态服务器
npm run serve
```

## 数据格式

数据文件 `data.json` 格式：
```json
[
  {
    "model": "GPT-4o",
    "score": 95.8,
    "org": "OpenAI",
    "date": "2024-05-13"
  }
]
```

## 自定义配置

在 `config.json` 中可以配置：
- 页面标题和描述
- 默认排序方式
- 列配置
- 主题颜色
- 其他设置

## 添加新数据

1. 编辑 `data.json` 文件
2. 添加新的模型数据
3. 刷新页面即可看到更新

## 部署

### GitHub Pages
1. 将项目推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择主分支作为源

### 其他静态托管
- Netlify
- Vercel
- 任何支持静态文件的托管服务

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- JSON数据格式

## 许可证

MIT License

## 贡献

欢迎提交Issue和Pull Request！

## 更新日志

### v1.0.0
- 初始版本发布
- 基础排行榜功能
- 搜索和排序功能
- 响应式设计
