/**
 * Vibe-Research - Main JavaScript
 * Shared utilities, localStorage helpers, modal & toast
 */

// ============================================
// Tag Cloud Data
// ============================================
const tagData = {
  ai: {
    label: 'AI / 大模型',
    summary: [
      '阿里巴巴禁止员工使用Claude Code，企业AI工具管控趋严。',
      'Anthropic推出Claude Science Beta，多智能体AI工作台赋能科学研究。',
      'NVIDIA发布ASPIRE机器人框架，零样本任务性能达31%。',
      'GPT-5.6三大模型传闻定档7月7日，或引行业关注。',
      '光象科技完成数亿元天使轮融资，布局物理原生基座模型。',
    ],
  },
  semiconductor: {
    label: '半导体 / 芯片',
    summary: [
      '台积电2nm工艺良率突破60%，预计2026Q4量产。',
      '国产EUV光刻机取得关键技术突破，光源系统通过验证。',
      '三星HBM4样品送测英伟达，有望Q3获得认证。',
      '中芯国际Q2营收同比增长18%，产能利用率回升至85%。',
      'MCU芯片价格触底反弹，库存周期拐点或已出现。',
    ],
  },
  robot: {
    label: '机器人 / 自动化',
    summary: [
      '特斯拉Optimus Gen3预计年底发布，灵巧手自由度提升至22个。',
      '优必选Walker S进入汽车工厂，与东风汽车达成合作。',
      '宇树科技H1人形机器人售价9.9万元，开启消费级市场。',
      '减速器龙头绿的谐波订单排至Q4，产能紧张。',
      'Figure AI获6.75亿美元B轮融资，估值超20亿美元。',
    ],
  },
  car: {
    label: '汽车 / 新能源车',
    summary: [
      '比亚迪6月销量突破40万辆，创历史新高。',
      '小米SU7累计交付超10万辆，产能瓶颈缓解。',
      '固态电池量产时间表提前，2027年有望装车。',
      '欧盟对中国电动车加征关税正式生效，影响几何？',
      '华为智选车模式扩展至江淮、北汽，合作车型年内发布。',
    ],
  },
  energy: {
    label: '能源 / 新能源',
    summary: [
      '宁德时代发布神行电池Plus，续航突破1000公里。',
      '光伏组件价格跌至0.8元/W，行业洗牌加速。',
      '海上风电招标回暖，2026年装机量有望翻倍。',
      '储能电芯价格跌破0.3元/Wh，进入成本驱动阶段。',
      '氢能产业政策加码，绿氢制备成本下降30%。',
    ],
  },
  biotech: {
    label: '生物医药 / 健康',
    summary: [
      '药明康德剥离美国细胞治疗业务，地缘政治风险缓释。',
      '国产PD-1出海加速，百济神州替雷利珠单抗获FDA批准。',
      '减肥药GLP-1赛道竞争激烈，口服制剂成新焦点。',
      '基因编辑疗法CRISPR商业化加速，首款产品定价220万美元。',
      'AI制药进入临床验证阶段，英矽智能首个管线进III期。',
    ],
  },
  space: {
    label: '航天 / 太空',
    summary: [
      'SpaceX星舰第五次试飞成功，筷子夹火箭首次实现。',
      '中国商业航天发射次数上半年超30次，同比增长50%。',
      '蓝箭航天朱雀三号成功入轨，液氧甲烷发动机再验证。',
      '卫星互联网星座加速组网，低轨卫星竞争白热化。',
      '航天晨光子公司获卫星零部件大额订单，业绩有望增厚。',
    ],
  },
  security: {
    label: '网络安全',
    summary: [
      'CrowdStrike更新导致全球Windows蓝屏，供应链安全引关注。',
      '中国发布《数据安全法》配套细则，合规要求趋严。',
      'AI驱动的网络攻击增长300%，防御技术升级迫在眉睫。',
      '量子计算威胁传统加密，后量子密码标准推进中。',
      '奇安信、深信服等头部厂商Q2订单增速回升。',
    ],
  },
  tech: {
    label: '科技 / 互联网',
    summary: [
      '字节跳动AI产品线全面发力，豆包大模型日活破千万。',
      '腾讯混元大模型开放API，定价低于GPT-4 50%。',
      '阿里通义千问2.5发布，多模态能力大幅提升。',
      '小红书启动IPO，估值目标超200亿美元。',
      'B站盈利拐点临近，Q2广告收入有望增长30%。',
    ],
  },
  consumer: {
    label: '消费电子 / 数码',
    summary: [
      'iPhone 16系列发布倒计时，AI功能是最大看点。',
      '华为Mate 70系列曝光，搭载全新麒麟芯片。',
      'VR/AR设备出货量回暖，苹果Vision Pro二代传闻曝光。',
      'PC市场复苏信号明确，AI PC渗透率预计达25%。',
      '可穿戴设备向健康监测深度延伸，血糖检测成新战场。',
    ],
  },
  finance: {
    label: '财经 / 宏观',
    summary: [
      '美联储7月利率决议前瞻：市场预计维持不变。',
      '中国6月CPI同比涨0.3%，通缩压力有所缓解。',
      '人民币汇率中间价调升，央行释放稳定信号。',
      '北向资金本周净流入156亿元，外资回流趋势明显。',
      '10年期国债收益率下行至2.2%，债市持续走强。',
    ],
  },
  science: {
    label: '科学 / 前沿',
    summary: [
      '室温超导复现实验进展：韩国LK-99新变体展现零电阻迹象。',
      '量子计算机实现1000量子比特里程碑，纠错算法突破。',
      '可控核聚变装置Q值突破1.5，商业化路径更清晰。',
      '脑机接口Neuralink完成第10例人体植入，效果良好。',
      '新型钙钛矿太阳能电池效率突破33%，接近理论极限。',
    ],
  },
};

// ============================================
// localStorage helpers
// ============================================
function lsGet(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
}
function lsSet(key, value) { localStorage.setItem(key, JSON.stringify(value)); }

// ============================================
// Toast
// ============================================
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ============================================
// Save Note Modal (used by index.html)
// ============================================
let pendingNoteTitle = '';
let pendingNoteContent = '';

function openSaveModal(tagLabel, items) {
  pendingNoteTitle = tagLabel + ' 资讯要点 ' + new Date().toISOString().slice(0, 10);
  pendingNoteContent = items.join('\n');
  const modal = document.getElementById('saveNoteModal');
  if (modal) {
    document.getElementById('noteTitleInput').value = pendingNoteTitle;
    document.getElementById('noteContentInput').value = pendingNoteContent;
    modal.classList.add('show');
  }
}

function closeSaveModal() {
  const modal = document.getElementById('saveNoteModal');
  if (modal) modal.classList.remove('show');
}

function confirmSaveNote() {
  const title = document.getElementById('noteTitleInput').value.trim();
  const content = document.getElementById('noteContentInput').value.trim();
  if (!title || !content) { showToast('标题和内容不能为空'); return; }
  const notes = lsGet('researchNotes', []);
  notes.unshift({
    id: Date.now(),
    title,
    content,
    date: new Date().toISOString().slice(0, 10),
    tags: ['资讯雷达'],
  });
  lsSet('researchNotes', notes);
  closeSaveModal();
  showToast('已存入研究记录');
}

// ============================================
// Tag Cloud Filtering (index.html)
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const tagButtons = document.querySelectorAll('#tagCloud .btn-tag');
  const summaryBody = document.getElementById('summaryBody');
  const currentTagLabel = document.getElementById('currentTagLabel');

  if (tagButtons.length && summaryBody && currentTagLabel) {
    tagButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        tagButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const tagKey = btn.dataset.tag;
        const data = tagData[tagKey];
        if (data) {
          currentTagLabel.textContent = data.label;
          summaryBody.innerHTML = data.summary.map((item) => `<li>${item}</li>`).join('');
        }
      });
    });
  }
});