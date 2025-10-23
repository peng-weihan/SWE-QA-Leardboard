// Leaderboard JavaScript
class Leaderboard {
    constructor() {
        this.data = [];
        this.currentData = [];
        this.currentSort = { column: 'score', order: 'desc' };
        this.init();
    }

    async init() {
        await this.loadData();
        this.setupEventListeners();
        this.renderTable();
        this.updateStats();
    }

    async loadData() {
        try {
            // 尝试从JSON文件加载数据
            const response = await fetch('data.json');
            if (response.ok) {
                this.data = await response.json();
            } else {
                // 如果文件不存在，使用默认数据
                this.data = this.getDefaultData();
            }
        } catch (error) {
            console.warn('无法加载外部数据文件，使用默认数据:', error);
            this.data = this.getDefaultData();
        }
        
        this.currentData = [...this.data];
    }

    getDefaultData() {
        return [
            { model: "GPT-4o", score: 95.8, org: "OpenAI", date: "2024-05-13" },
            { model: "Claude-3.5 Sonnet", score: 95.2, org: "Anthropic", date: "2024-06-20" },
            { model: "Gemini 1.5 Pro", score: 94.5, org: "Google", date: "2024-02-15" },
            { model: "GPT-4 Turbo", score: 94.1, org: "OpenAI", date: "2023-11-06" },
            { model: "Claude-3 Opus", score: 93.7, org: "Anthropic", date: "2024-03-04" },
            { model: "Gemini 1.0 Pro", score: 92.3, org: "Google", date: "2023-12-06" },
            { model: "LLaMA-3 70B", score: 91.8, org: "Meta", date: "2024-04-18" },
            { model: "ChatGLM-4", score: 90.5, org: "Zhipu AI", date: "2024-01-22" },
            { model: "Qwen-2.5 72B", score: 89.7, org: "Alibaba", date: "2024-09-25" },
            { model: "PaLM-2", score: 88.9, org: "Google", date: "2023-05-10" }
        ];
    }

    setupEventListeners() {
        // 搜索功能
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        }

        // 排序按钮
        const sortBtn = document.querySelector('.sort-btn');
        if (sortBtn) {
            sortBtn.addEventListener('click', () => this.applySorting());
        }

        // 表头点击排序
        document.querySelectorAll('th.sortable').forEach(th => {
            th.addEventListener('click', () => {
                const column = th.dataset.column;
                if (column) {
                    this.sortTable(column);
                }
            });
        });
    }

    handleSearch(query) {
        const searchTerm = query.toLowerCase();
        this.currentData = this.data.filter(item => 
            item.model.toLowerCase().includes(searchTerm) || 
            item.org.toLowerCase().includes(searchTerm)
        );
        this.renderTable();
        this.updateStats();
    }

    sortTable(column) {
        if (this.currentSort.column === column) {
            this.currentSort.order = this.currentSort.order === 'asc' ? 'desc' : 'asc';
        } else {
            this.currentSort.column = column;
            this.currentSort.order = 'desc';
        }

        this.currentData.sort((a, b) => {
            let aVal = a[column];
            let bVal = b[column];

            if (column === 'date') {
                aVal = new Date(aVal);
                bVal = new Date(bVal);
            }

            if (this.currentSort.order === 'asc') {
                return aVal > bVal ? 1 : -1;
            } else {
                return aVal < bVal ? 1 : -1;
            }
        });

        this.updateSortHeaders();
        this.renderTable();
    }

    updateSortHeaders() {
        document.querySelectorAll('th').forEach(th => {
            th.classList.remove('sort-asc', 'sort-desc');
            if (th.dataset.column === this.currentSort.column) {
                th.classList.add(`sort-${this.currentSort.order}`);
            }
        });
    }

    applySorting() {
        const sortBy = document.getElementById('sortBy')?.value;
        const sortOrder = document.getElementById('sortOrder')?.value;
        
        if (sortBy) {
            this.currentSort.column = sortBy;
            this.currentSort.order = sortOrder || 'desc';
            this.sortTable(sortBy);
        }
    }

    renderTable() {
        const tbody = document.getElementById('leaderboardTable');
        if (!tbody) return;

        tbody.innerHTML = '';

        if (this.currentData.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" class="loading">No matching data found</td></tr>';
            return;
        }

        this.currentData.forEach((item, index) => {
            const row = document.createElement('tr');
            const rank = index + 1;
            const medal = rank <= 3 ? this.getMedal(rank) : '';
            
            row.innerHTML = `
                <td class="rank">${medal} ${rank}</td>
                <td class="model-name">${item.model}</td>
                <td class="score">${item.score.toFixed(1)}</td>
                <td class="category">${item.category || 'N/A'}</td>
                <td class="org">${item.org}</td>
                <td class="date">${item.date}</td>
            `;
            tbody.appendChild(row);
        });
    }

    getMedal(rank) {
        switch(rank) {
            case 1: return '<span class="medal gold">🥇</span>';
            case 2: return '<span class="medal silver">🥈</span>';
            case 3: return '<span class="medal bronze">🥉</span>';
            default: return '';
        }
    }

    updateStats() {
        const totalModels = this.currentData.length;
        const avgScore = this.currentData.length > 0 ? 
            (this.currentData.reduce((sum, item) => sum + item.score, 0) / this.currentData.length).toFixed(1) : 0;
        const topScore = this.currentData.length > 0 ? Math.max(...this.currentData.map(item => item.score)) : 0;
        const totalOrgs = new Set(this.currentData.map(item => item.org)).size;
        const totalCategories = new Set(this.currentData.map(item => item.category)).size;

        this.updateElement('totalModels', totalModels);
        this.updateElement('avgScore', avgScore);
        this.updateElement('topScore', topScore.toFixed(1));
        this.updateElement('totalOrgs', totalOrgs);
        this.updateElement('totalCategories', totalCategories);
    }

    updateElement(id, value) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    }

    // 添加新数据的方法
    addData(newItem) {
        this.data.push(newItem);
        this.currentData = [...this.data];
        this.renderTable();
        this.updateStats();
    }

    // 导出数据的方法
    exportData() {
        const dataStr = JSON.stringify(this.currentData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'leaderboard_data.json';
        link.click();
        URL.revokeObjectURL(url);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    window.leaderboard = new Leaderboard();
});
