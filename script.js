const books = [
  {
    id: 1,
    title: "中国神话故事：山海经",
    author: "佚名",
    language: "中文",
    difficulty: "挑战",
    tags: ["中文", "神话", "经典", "冒险"],
    source: "维基文库",
    readUrl: "https://zh.wikisource.org/wiki/%E5%B1%B1%E6%B5%B7%E7%B6%93",
    note: "中国神话与奇异地理经典，适合亲子共读。",
  },
  {
    id: 2,
    title: "搜神记",
    author: "干宝",
    language: "中文",
    difficulty: "挑战",
    tags: ["中文", "神话", "经典", "奇幻"],
    source: "维基文库",
    readUrl: "https://zh.wikisource.org/wiki/%E6%90%9C%E7%A5%9E%E8%A8%98",
    note: "古代志怪故事集，可挑选篇章阅读。",
  },
  {
    id: 3,
    title: "西游记",
    author: "吴承恩",
    language: "中文",
    difficulty: "挑战",
    tags: ["中文", "经典", "奇幻", "冒险"],
    source: "维基文库",
    readUrl: "https://zh.wikisource.org/wiki/%E8%A5%BF%E9%81%8A%E8%A8%98",
    note: "取经冒险故事，适合按章节慢慢读。",
  },
  {
    id: 4,
    title: "三国演义",
    author: "罗贯中",
    language: "中文",
    difficulty: "挑战",
    tags: ["中文", "经典", "历史"],
    source: "维基文库",
    readUrl: "https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E6%BC%94%E7%BE%A9",
    note: "历史演义名著，建议配合人物关系图阅读。",
  },
  {
    id: 5,
    title: "水浒传",
    author: "施耐庵",
    language: "中文",
    difficulty: "挑战",
    tags: ["中文", "经典", "冒险"],
    source: "维基文库",
    readUrl: "https://zh.wikisource.org/wiki/%E6%B0%B4%E6%BB%B8%E5%82%B3",
    note: "人物众多，可先读感兴趣的英雄故事。",
  },
  {
    id: 6,
    title: "镜花缘",
    author: "李汝珍",
    language: "中文",
    difficulty: "适中",
    tags: ["中文", "经典", "奇幻", "冒险"],
    source: "维基文库",
    readUrl: "https://zh.wikisource.org/wiki/%E9%8F%A1%E8%8A%B1%E7%B7%A3",
    note: "奇妙国度游历故事，想象力很丰富。",
  },
  {
    id: 7,
    title: "封神演义",
    author: "许仲琳",
    language: "中文",
    difficulty: "挑战",
    tags: ["中文", "神话", "经典", "奇幻"],
    source: "维基文库",
    readUrl: "https://zh.wikisource.org/wiki/%E5%B0%81%E7%A5%9E%E6%BC%94%E7%BE%A9",
    note: "中国神话英雄故事，适合和《西游记》对照阅读。",
  },
  {
    id: 8,
    title: "聊斋志异",
    author: "蒲松龄",
    language: "中文",
    difficulty: "挑战",
    tags: ["中文", "经典", "奇幻"],
    source: "维基文库",
    readUrl: "https://zh.wikisource.org/wiki/%E8%81%8A%E9%BD%8B%E8%AA%8C%E7%95%B0",
    note: "短篇志怪名作，建议家长先帮孩子挑选篇目。",
  },
  {
    id: 9,
    title: "唐诗三百首",
    author: "蘅塘退士 编",
    language: "中文",
    difficulty: "适中",
    tags: ["中文", "诗歌", "经典"],
    source: "维基文库",
    readUrl: "https://zh.wikisource.org/wiki/%E5%94%90%E8%A9%A9%E4%B8%89%E7%99%BE%E9%A6%96",
    note: "每天读几首，适合朗读和背诵。",
  },
  {
    id: 10,
    title: "朝花夕拾",
    author: "鲁迅",
    language: "中文",
    difficulty: "适中",
    tags: ["中文", "经典", "成长"],
    source: "维基文库",
    readUrl: "https://zh.wikisource.org/wiki/%E6%9C%9D%E8%8A%B1%E5%A4%95%E6%8B%BE",
    note: "童年与成长回忆，适合亲子讨论。",
  },
  {
    id: 11,
    title: "呐喊",
    author: "鲁迅",
    language: "中文",
    difficulty: "挑战",
    tags: ["中文", "经典", "成长"],
    source: "维基文库",
    readUrl: "https://zh.wikisource.org/wiki/%E5%91%90%E5%96%8A",
    note: "文学经典，建议选读《故乡》《社戏》等篇章。",
  },
  {
    id: 12,
    title: "儒林外史",
    author: "吴敬梓",
    language: "中文",
    difficulty: "挑战",
    tags: ["中文", "经典"],
    source: "维基文库",
    readUrl: "https://zh.wikisource.org/wiki/%E5%84%92%E6%9E%97%E5%A4%96%E5%8F%B2",
    note: "讽刺小说名著，可先读故事性强的章节。",
  },
  {
    id: 13,
    title: "东周列国志",
    author: "冯梦龙、蔡元放",
    language: "中文",
    difficulty: "挑战",
    tags: ["中文", "经典", "历史"],
    source: "维基文库",
    readUrl: "https://zh.wikisource.org/wiki/%E6%9D%B1%E5%91%A8%E5%88%97%E5%9C%8B%E5%BF%97",
    note: "春秋战国故事，可配合历史地图阅读。",
  },
  {
    id: 14,
    title: "木兰诗",
    author: "佚名",
    language: "中文",
    difficulty: "轻松",
    tags: ["中文", "诗歌", "经典", "冒险"],
    source: "维基文库",
    readUrl: "https://zh.wikisource.org/wiki/%E6%9C%A8%E8%98%AD%E8%A9%A9",
    note: "篇幅短，适合作为古诗文入门。",
  },
  {
    id: 15,
    title: "千家诗",
    author: "佚名 编",
    language: "中文",
    difficulty: "适中",
    tags: ["中文", "诗歌", "经典"],
    source: "维基文库",
    readUrl: "https://zh.wikisource.org/wiki/%E5%8D%83%E5%AE%B6%E8%A9%A9",
    note: "传统诗歌选本，可按主题慢慢读。",
  },
  {
    id: 16,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupery",
    language: "英文",
    difficulty: "适中",
    tags: ["英文", "经典", "成长", "奇幻"],
    source: "One More Library",
    readUrl: "https://onemorelibrary.com/index.php/en/the-little-prince",
    note: "《小王子》英文在线版，页面标注 Public Domain。",
  },
  {
    id: 17,
    title: "Twenty Thousand Leagues under the Sea",
    author: "Jules Verne",
    language: "英文",
    difficulty: "挑战",
    tags: ["英文", "经典", "冒险", "科幻"],
    source: "Project Gutenberg",
    readUrl: "https://www.gutenberg.org/files/164/164-h/164-h.htm",
    note: "《海底两万里》英文全文，适合挑战阅读。",
  },
  {
    id: 18,
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    language: "英文",
    difficulty: "适中",
    tags: ["英文", "经典", "奇幻", "冒险"],
    source: "Project Gutenberg",
    readUrl: "https://www.gutenberg.org/files/11/11-h/11-h.htm",
    note: "想象力经典，章节短，适合原版入门。",
  },
  {
    id: 19,
    title: "Through the Looking-Glass",
    author: "Lewis Carroll",
    language: "英文",
    difficulty: "适中",
    tags: ["英文", "经典", "奇幻"],
    source: "Project Gutenberg",
    readUrl: "https://www.gutenberg.org/files/12/12-h/12-h.htm",
    note: "《爱丽丝镜中奇遇》英文全文。",
  },
  {
    id: 20,
    title: "The Wonderful Wizard of Oz",
    author: "L. Frank Baum",
    language: "英文",
    difficulty: "适中",
    tags: ["英文", "经典", "奇幻", "冒险"],
    source: "Project Gutenberg",
    readUrl: "https://www.gutenberg.org/files/55/55-h/55-h.htm",
    note: "奥兹国冒险故事，情节清楚有趣。",
  },
  {
    id: 21,
    title: "Peter Pan",
    author: "J. M. Barrie",
    language: "英文",
    difficulty: "适中",
    tags: ["英文", "经典", "奇幻", "冒险"],
    source: "Project Gutenberg",
    readUrl: "https://www.gutenberg.org/files/16/16-h/16-h.htm",
    note: "永无岛故事，适合喜欢幻想冒险的孩子。",
  },
  {
    id: 22,
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    language: "英文",
    difficulty: "挑战",
    tags: ["英文", "经典", "成长"],
    source: "Project Gutenberg",
    readUrl: "https://www.gutenberg.org/files/17396/17396-h/17396-h.htm",
    note: "关于友情、自然和成长的经典。",
  },
  {
    id: 23,
    title: "A Little Princess",
    author: "Frances Hodgson Burnett",
    language: "英文",
    difficulty: "适中",
    tags: ["英文", "经典", "成长"],
    source: "Project Gutenberg",
    readUrl: "https://www.gutenberg.org/files/146/146-h/146-h.htm",
    note: "温暖坚韧的成长故事。",
  },
  {
    id: 24,
    title: "Anne of Green Gables",
    author: "L. M. Montgomery",
    language: "英文",
    difficulty: "挑战",
    tags: ["英文", "经典", "成长"],
    source: "Project Gutenberg",
    readUrl: "https://www.gutenberg.org/files/45/45-h/45-h.htm",
    note: "《绿山墙的安妮》英文全文。",
  },
  {
    id: 25,
    title: "Treasure Island",
    author: "Robert Louis Stevenson",
    language: "英文",
    difficulty: "挑战",
    tags: ["英文", "经典", "冒险"],
    source: "Project Gutenberg",
    readUrl: "https://www.gutenberg.org/files/120/120-h/120-h.htm",
    note: "海盗、藏宝图与冒险精神。",
  },
  {
    id: 26,
    title: "Black Beauty",
    author: "Anna Sewell",
    language: "英文",
    difficulty: "适中",
    tags: ["英文", "经典", "动物"],
    source: "Project Gutenberg",
    readUrl: "https://www.gutenberg.org/files/271/271-h/271-h.htm",
    note: "从马的视角讲述善良与同理心。",
  },
  {
    id: 27,
    title: "The Jungle Book",
    author: "Rudyard Kipling",
    language: "英文",
    difficulty: "适中",
    tags: ["英文", "经典", "动物", "冒险"],
    source: "Project Gutenberg",
    readUrl: "https://www.gutenberg.org/files/236/236-h/236-h.htm",
    note: "森林故事集，适合喜欢动物主题的孩子。",
  },
  {
    id: 28,
    title: "The Wind in the Willows",
    author: "Kenneth Grahame",
    language: "英文",
    difficulty: "适中",
    tags: ["英文", "经典", "动物", "冒险"],
    source: "Project Gutenberg",
    readUrl: "https://www.gutenberg.org/files/289/289-h/289-h.htm",
    note: "河岸动物朋友的温柔冒险。",
  },
  {
    id: 29,
    title: "The Adventures of Pinocchio",
    author: "Carlo Collodi",
    language: "英文",
    difficulty: "适中",
    tags: ["英文", "经典", "奇幻", "成长"],
    source: "Project Gutenberg",
    readUrl: "https://www.gutenberg.org/files/500/500-h/500-h.htm",
    note: "《木偶奇遇记》英文全文。",
  },
  {
    id: 30,
    title: "Grimms' Fairy Tales",
    author: "Jacob Grimm and Wilhelm Grimm",
    language: "英文",
    difficulty: "适中",
    tags: ["英文", "经典", "童话", "奇幻"],
    source: "Project Gutenberg",
    readUrl: "https://www.gutenberg.org/files/2591/2591-h/2591-h.htm",
    note: "格林童话英文选集，可按篇目阅读。",
  },
];

const storageKey = "littleLibraryReadingProgress";
const rewardMilestones = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
const badgeRules = [
  {
    id: "chinese-reader",
    name: "中文小书虫",
    description: "读完 3 本中文书",
    isEarned: (stats) => stats.chineseCompleted >= 3,
  },
  {
    id: "english-warrior",
    name: "英文勇士",
    description: "读完 3 本英文书",
    isEarned: (stats) => stats.englishCompleted >= 3,
  },
  {
    id: "classic-explorer",
    name: "经典探索者",
    description: "读完 3 本经典名著",
    isEarned: (stats) => stats.tagCounts["经典"] >= 3,
  },
  {
    id: "myth-reader",
    name: "神话探索者",
    description: "读完 2 本神话或奇幻作品",
    isEarned: (stats) =>
      new Set([...(stats.completedByTag["神话"] || []), ...(stats.completedByTag["奇幻"] || [])])
        .size >= 2,
  },
  {
    id: "adventurer",
    name: "奇幻冒险家",
    description: "读完 2 本冒险主题书",
    isEarned: (stats) => stats.tagCounts["冒险"] >= 2,
  },
  {
    id: "animal-friend",
    name: "动物朋友",
    description: "读完 2 本动物主题书",
    isEarned: (stats) => stats.tagCounts["动物"] >= 2,
  },
  {
    id: "halfway",
    name: "半程勋章",
    description: "读完 15 本书",
    isEarned: (stats) => stats.completedCount >= 15,
  },
  {
    id: "daily-star",
    name: "坚持之星",
    description: "连续 7 天阅读打卡",
    isEarned: (stats) => stats.currentStreak >= 7,
  },
  {
    id: "complete",
    name: "完成勋章",
    description: "完成 30 本阅读计划",
    isEarned: (stats) => stats.completedCount === books.length,
  },
];

let activeFilter = "all";
let appState = loadState();

function today() {
  return new Date().toISOString().slice(0, 10);
}

function loadState() {
  const fallback = {
    completedBooks: {},
    ratings: {},
    rewardWishes: {},
    dailyCheckins: [],
  };

  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey));
    return {
      ...fallback,
      ...parsed,
      completedBooks: parsed?.completedBooks || {},
      ratings: parsed?.ratings || {},
      rewardWishes: parsed?.rewardWishes || {},
      dailyCheckins: parsed?.dailyCheckins || [],
    };
  } catch (error) {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(appState));
}

function calculateBookPoints(book) {
  const languagePoints = book.language === "英文" ? 2 : 1;
  const challengeBonus = book.difficulty === "挑战" ? 1 : 0;
  return languagePoints + challengeBonus;
}

function getCompletedBooks() {
  return books.filter((book) => appState.completedBooks[book.id]);
}

function calculateStreak() {
  const checkins = [...new Set(appState.dailyCheckins)].sort().reverse();
  if (!checkins.length) {
    return 0;
  }

  let cursor = new Date(today());
  let streak = 0;

  for (const date of checkins) {
    const expectedDate = cursor.toISOString().slice(0, 10);
    if (date === expectedDate) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    } else if (streak === 0) {
      cursor.setDate(cursor.getDate() - 1);
      if (date === cursor.toISOString().slice(0, 10)) {
        streak += 1;
        cursor.setDate(cursor.getDate() - 1);
      }
    } else {
      break;
    }
  }

  return streak;
}

function getStats() {
  const completed = getCompletedBooks();
  const tagCounts = {};
  const completedByTag = {};

  completed.forEach((book) => {
    book.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      completedByTag[tag] = completedByTag[tag] || [];
      completedByTag[tag].push(book.id);
    });
  });

  return {
    completed,
    completedCount: completed.length,
    chineseCompleted: completed.filter((book) => book.language === "中文").length,
    englishCompleted: completed.filter((book) => book.language === "英文").length,
    points: completed.reduce((total, book) => total + calculateBookPoints(book), 0),
    tagCounts,
    completedByTag,
    currentStreak: calculateStreak(),
  };
}

function getEarnedBadges(stats) {
  return badgeRules.filter((badge) => badge.isEarned(stats));
}

function getBookBadgeNames(book, stats) {
  const names = [];
  const earnedBadges = getEarnedBadges(stats);
  const completedOrder = getCompletedBooks().findIndex((item) => item.id === book.id);

  if (completedOrder === -1) {
    return names;
  }

  earnedBadges.forEach((badge) => {
    if (badge.id === "chinese-reader" && book.language === "中文") names.push(badge.name);
    if (badge.id === "english-warrior" && book.language === "英文") names.push(badge.name);
    if (badge.id === "classic-explorer" && book.tags.includes("经典")) names.push(badge.name);
    if (badge.id === "myth-reader" && (book.tags.includes("神话") || book.tags.includes("奇幻"))) {
      names.push(badge.name);
    }
    if (badge.id === "adventurer" && book.tags.includes("冒险")) names.push(badge.name);
    if (badge.id === "animal-friend" && book.tags.includes("动物")) names.push(badge.name);
  });

  if (completedOrder + 1 === 15) names.push("半程勋章");
  if (completedOrder + 1 === 30) names.push("完成勋章");

  return [...new Set(names)];
}

function getRewardLabel(bookId) {
  if (!rewardMilestones.includes(bookId)) {
    return "";
  }
  if (bookId === 15) {
    return "半程奖励";
  }
  if (bookId === 30) {
    return "30 本大奖励";
  }
  return "三本奖励";
}

function renderProgress(stats) {
  const percent = Math.round((stats.completedCount / books.length) * 100);
  const nextMilestone = rewardMilestones.find((milestone) => milestone > stats.completedCount);

  document.getElementById("completed-count").textContent = stats.completedCount;
  document.getElementById("progress-percent").textContent = `${percent}%`;
  document.getElementById("points-count").textContent = stats.points;
  document.getElementById("progress-fill").style.width = `${percent}%`;
  document.getElementById("next-reward").textContent = nextMilestone
    ? `还差 ${nextMilestone - stats.completedCount} 本`
    : "全部完成";

  const grid = document.getElementById("progress-grid");
  grid.innerHTML = "";
  books.forEach((book) => {
    const cell = document.createElement("span");
    const isComplete = Boolean(appState.completedBooks[book.id]);
    const isMilestone = rewardMilestones.includes(book.id);
    cell.className = `progress-cell${isComplete ? " is-complete" : ""}${
      isMilestone ? " is-milestone" : ""
    }`;
    cell.textContent = book.id;
    cell.title = `${book.title}${isMilestone ? " - 奖励节点" : ""}`;
    grid.appendChild(cell);
  });
}

function renderRewards(stats) {
  const list = document.getElementById("reward-list");
  list.innerHTML = "";

  rewardMilestones.forEach((milestone) => {
    const available = stats.completedCount >= milestone;
    const wish = appState.rewardWishes[milestone];
    const item = document.createElement("div");
    item.className = `reward-item${available ? " is-available" : ""}`;

    let title = "向妈妈要 1 个奖励";
    if (milestone === 15) title = "半程奖励";
    if (milestone === 30) title = "30 本大奖励";

    item.innerHTML = `
      <div>
        <strong>读完 ${milestone} 本：${title}</strong>
        <p>${wish ? `奖励愿望：${wish}` : available ? "可以填写奖励愿望啦" : `还差 ${milestone - stats.completedCount} 本`}</p>
      </div>
      <button type="button" data-milestone="${milestone}" ${available ? "" : "disabled"}>
        ${wish ? "修改愿望" : "填写愿望"}
      </button>
    `;
    list.appendChild(item);
  });
}

function renderBadges(stats) {
  const list = document.getElementById("badge-list");
  list.innerHTML = "";

  badgeRules.forEach((badge) => {
    const earned = badge.isEarned(stats);
    const item = document.createElement("div");
    item.className = `badge${earned ? " is-earned" : ""}`;
    item.innerHTML = `
      <span class="badge__icon">${earned ? "★" : "☆"}</span>
      <div>
        <strong>${badge.name}</strong>
        <p>${badge.description}</p>
      </div>
    `;
    list.appendChild(item);
  });
}

function renderDailyCheckin(stats) {
  const button = document.getElementById("daily-checkin-button");
  const status = document.getElementById("daily-status");
  const checkedToday = appState.dailyCheckins.includes(today());

  button.disabled = checkedToday;
  button.textContent = checkedToday ? "今天已打卡" : "今天已阅读";
  status.innerHTML = `
    <span>当前连续阅读：<strong>${stats.currentStreak}</strong> 天</span>
    <span>累计每日打卡：<strong>${appState.dailyCheckins.length}</strong> 天</span>
  `;
}

function renderBooks(stats) {
  const grid = document.getElementById("book-grid");
  grid.innerHTML = "";

  books
    .filter((book) => {
      if (activeFilter === "all") return true;
      if (activeFilter === "completed") return Boolean(appState.completedBooks[book.id]);
      return book.language === activeFilter;
    })
    .forEach((book) => {
      const isCompleted = Boolean(appState.completedBooks[book.id]);
      const card = document.createElement("article");
      const badges = getBookBadgeNames(book, stats);
      const rewardLabel = getRewardLabel(book.id);
      card.className = `book-card${isCompleted ? " is-complete" : ""}`;
      card.innerHTML = `
        <div class="book-card__top">
          <span class="book-number">#${book.id}</span>
          <span class="language-pill">${book.language}</span>
        </div>
        <h3>${book.title}</h3>
        <p class="book-author">${book.author}</p>
        <p class="book-note">${book.note}</p>
        <div class="meta-row">
          <span class="difficulty difficulty--${book.difficulty}">${book.difficulty}</span>
          <span>${book.source}</span>
        </div>
        <div class="tag-list">
          ${book.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="card-actions">
          <a class="read-button" href="${book.readUrl}" target="_blank" rel="noopener noreferrer">
            去阅读
          </a>
          <label class="complete-toggle">
            <input type="checkbox" data-book-id="${book.id}" ${isCompleted ? "checked" : ""} />
            ${isCompleted ? "已读" : "打卡"}
          </label>
        </div>
        <div class="card-footer">
          <span>读完日期：${appState.completedBooks[book.id] || "-"}</span>
          <span>积分：${isCompleted ? calculateBookPoints(book) : 0}</span>
        </div>
        <label class="rating-label">
          评分
          <select data-rating-id="${book.id}" aria-label="${book.title} 评分">
            ${[0, 1, 2, 3, 4, 5]
              .map(
                (rating) => `
                  <option value="${rating}" ${
                    Number(appState.ratings[book.id] || 0) === rating ? "selected" : ""
                  }>
                    ${rating === 0 ? "未评分" : "★".repeat(rating)}
                  </option>
                `
              )
              .join("")}
          </select>
        </label>
        <div class="earned-list">
          ${badges.map((badge) => `<span>${badge}</span>`).join("")}
          ${rewardLabel ? `<span class="reward-chip">${rewardLabel}</span>` : ""}
        </div>
      `;
      grid.appendChild(card);
    });
}

function render() {
  const stats = getStats();
  renderProgress(stats);
  renderRewards(stats);
  renderBadges(stats);
  renderDailyCheckin(stats);
  renderBooks(stats);
}

function toggleBook(bookId, checked) {
  if (checked) {
    appState.completedBooks[bookId] = today();
  } else {
    delete appState.completedBooks[bookId];
  }
  saveState();
  render();
}

function updateRating(bookId, rating) {
  if (Number(rating) === 0) {
    delete appState.ratings[bookId];
  } else {
    appState.ratings[bookId] = Number(rating);
  }
  saveState();
}

function saveRewardWish(milestone) {
  const currentWish = appState.rewardWishes[milestone] || "";
  const wish = window.prompt("写下想向妈妈提出的奖励愿望：", currentWish);
  if (wish === null) return;

  const trimmedWish = wish.trim();
  if (trimmedWish) {
    appState.rewardWishes[milestone] = trimmedWish;
  } else {
    delete appState.rewardWishes[milestone];
  }
  saveState();
  render();
}

function checkinToday() {
  const date = today();
  if (!appState.dailyCheckins.includes(date)) {
    appState.dailyCheckins.push(date);
    appState.dailyCheckins.sort();
    saveState();
    render();
  }
}

function resetRecords() {
  if (!window.confirm("确定要清空所有打卡、评分、奖励愿望和勋章进度吗？")) {
    return;
  }
  appState = {
    completedBooks: {},
    ratings: {},
    rewardWishes: {},
    dailyCheckins: [],
  };
  saveState();
  render();
}

document.getElementById("book-grid").addEventListener("change", (event) => {
  const bookId = event.target.dataset.bookId;
  const ratingId = event.target.dataset.ratingId;

  if (bookId) {
    toggleBook(bookId, event.target.checked);
  }
  if (ratingId) {
    updateRating(ratingId, event.target.value);
  }
});

document.getElementById("reward-list").addEventListener("click", (event) => {
  const milestone = event.target.dataset.milestone;
  if (milestone) {
    saveRewardWish(milestone);
  }
});

document.getElementById("daily-checkin-button").addEventListener("click", checkinToday);
document.getElementById("reset-button").addEventListener("click", resetRecords);

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach((item) => {
      item.classList.remove("is-active");
    });
    button.classList.add("is-active");
    activeFilter = button.dataset.filter;
    render();
  });
});

render();
