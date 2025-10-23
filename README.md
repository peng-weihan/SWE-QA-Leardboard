# SWE-QA Benchmark Leaderboard

一个专门针对软件工程问答(SWE-QA)基准测试的排行榜，支持实时搜索、排序和统计功能。

## 关于SWE-QA

理解和推理整个软件仓库是智能软件工程工具的基本能力。虽然现有的基准测试如CoSQA和CodeQA已经推进了该领域的发展，但它们主要关注小的、自包含的代码片段。这些设置无法捕捉真实世界仓库的复杂性，其中有效的理解和推理通常需要导航多个文件、理解软件架构，并在长距离代码依赖中建立答案基础。

SWE-QA是一个仓库级代码问答基准测试，旨在促进在真实代码环境中自动化问答系统的研究。SWE-QA包含576个高质量的问题-答案对，涵盖多样化的类别，包括意图理解、跨文件推理和多跳依赖分析。

该基准测试基于从11个流行仓库的77,100个GitHub问题中提取的自然开发者问题构建，涵盖以下Python库：astropy、django、flask、matplotlib、pylint、pytest、requests、scikit-learn、sphinx、sqlfluff、xarray、sympy。

- 📊 **数据集**: [Hugging Face SWE-QA-Benchmark](https://huggingface.co/datasets/swe-qa/SWE-QA-Benchmark)
- 📄 **论文**: [SWE-QA: A Benchmark for Software Engineering Question Answering](https://arxiv.org/abs/2509.14635)

## 功能特性

- 🏆 **排行榜展示** - 清晰展示模型在SWE-QA基准测试上的排名和性能分数
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
