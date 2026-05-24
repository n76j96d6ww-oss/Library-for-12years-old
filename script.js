const books = [
  {
    id: 1,
    title: "草房子",
    author: "曹文轩",
    language: "中文",
    difficulty: "适中",
    tags: ["中文", "成长", "校园", "经典"],
  },
  {
    id: 2,
    title: "青铜葵花",
    author: "曹文轩",
    language: "中文",
    difficulty: "适中",
    tags: ["中文", "成长", "经典"],
  },
  {
    id: 3,
    title: "城南旧事",
    author: "林海音",
    language: "中文",
    difficulty: "适中",
    tags: ["中文", "成长", "经典"],
  },
  {
    id: 4,
    title: "我要做好孩子",
    author: "黄蓓佳",
    language: "中文",
    difficulty: "轻松",
    tags: ["中文", "校园", "成长"],
  },
  {
    id: 5,
    title: "男生贾里全传",
    author: "秦文君",
    language: "中文",
    difficulty: "轻松",
    tags: ["中文", "校园", "成长"],
  },
  {
    id: 6,
    title: "女生贾梅全传",
    author: "秦文君",
    language: "中文",
    difficulty: "轻松",
    tags: ["中文", "校园", "成长"],
  },
  {
    id: 7,
    title: "狼王梦",
    author: "沈石溪",
    language: "中文",
    difficulty: "适中",
    tags: ["中文", "动物", "冒险"],
  },
  {
    id: 8,
    title: "第七条猎狗",
    author: "沈石溪",
    language: "中文",
    difficulty: "适中",
    tags: ["中文", "动物", "冒险"],
  },
  {
    id: 9,
    title: "寄小读者",
    author: "冰心",
    language: "中文",
    difficulty: "挑战",
    tags: ["中文", "经典"],
  },
  {
    id: 10,
    title: "西游记（青少版）",
    author: "吴承恩",
    language: "中文",
    difficulty: "挑战",
    tags: ["中文", "经典", "奇幻", "冒险"],
  },
  {
    id: 11,
    title: "三国演义（青少版）",
    author: "罗贯中",
    language: "中文",
    difficulty: "挑战",
    tags: ["中文", "经典", "历史"],
  },
  {
    id: 12,
    title: "小王子（中文版）",
    author: "安托万·德·圣-埃克苏佩里",
    language: "中文",
    difficulty: "轻松",
    tags: ["中文", "经典", "奇幻"],
  },
  {
    id: 13,
    title: "爱的教育",
    author: "埃迪蒙托·德·亚米契斯",
    language: "中文",
    difficulty: "适中",
    tags: ["中文", "经典", "成长"],
  },
  {
    id: 14,
    title: "海底两万里",
    author: "儒勒·凡尔纳",
    language: "中文",
    difficulty: "挑战",
    tags: ["中文", "经典", "冒险", "科幻"],
  },
  {
    id: 15,
    title: "汤姆·索亚历险记",
    author: "马克·吐温",
    language: "中文",
    difficulty: "适中",
    tags: ["中文", "经典", "冒险"],
  },
  {
    id: 16,
    title: "Magic Tree House",
    author: "Mary Pope Osborne",
    language: "英文",
    difficulty: "轻松",
    tags: ["英文", "桥梁书", "奇幻", "冒险"],
  },
  {
    id: 17,
    title: "A to Z Mysteries",
    author: "Ron Roy",
    language: "英文",
    difficulty: "轻松",
    tags: ["英文", "桥梁书", "侦探"],
  },
  {
    id: 18,
    title: "The Boxcar Children",
    author: "Gertrude Chandler Warner",
    language: "英文",
    difficulty: "轻松",
    tags: ["英文", "桥梁书", "冒险"],
  },
  {
    id: 19,
    title: "Charlotte's Web",
    author: "E. B. White",
    language: "英文",
    difficulty: "适中",
    tags: ["英文", "经典", "动物"],
  },
  {
    id: 20,
    title: "Matilda",
    author: "Roald Dahl",
    language: "英文",
    difficulty: "适中",
    tags: ["英文", "成长", "奇幻"],
  },
  {
    id: 21,
    title: "Charlie and the Chocolate Factory",
    author: "Roald Dahl",
    language: "英文",
    difficulty: "适中",
    tags: ["英文", "奇幻", "冒险"],
  },
  {
    id: 22,
    title: "The BFG",
    author: "Roald Dahl",
    language: "英文",
    difficulty: "适中",
    tags: ["英文", "奇幻", "冒险"],
  },
  {
    id: 23,
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    language: "英文",
    difficulty: "挑战",
    tags: ["英文", "经典", "成长"],
  },
  {
    id: 24,
    title: "Anne of Green Gables",
    author: "L. M. Montgomery",
    language: "英文",
    difficulty: "挑战",
    tags: ["英文", "经典", "成长"],
  },
  {
    id: 25,
    title: "The Lion, the Witch and the Wardrobe",
    author: "C. S. Lewis",
    language: "英文",
    difficulty: "挑战",
    tags: ["英文", "经典", "奇幻", "冒险"],
  },
  {
    id: 26,
    title: "Wonder",
    author: "R. J. Palacio",
    language: "英文",
    difficulty: "适中",
    tags: ["英文", "成长", "校园"],
  },
  {
    id: 27,
    title: "Because of Winn-Dixie",
    author: "Kate DiCamillo",
    language: "英文",
    difficulty: "适中",
    tags: ["英文", "动物", "成长"],
  },
  {
    id: 28,
    title: "Holes",
    author: "Louis Sachar",
    language: "英文",
    difficulty: "挑战",
    tags: ["英文", "冒险", "成长"],
  },
  {
    id: 29,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    language: "英文",
    difficulty: "挑战",
    tags: ["英文", "奇幻", "冒险"],
  },
  {
    id: 30,
    title: "Percy Jackson and the Olympians: The Lightning Thief",
    author: "Rick Riordan",
    language: "英文",
    difficulty: "挑战",
    tags: ["英文", "奇幻", "冒险"],
  },
];

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
    description: "读完 3 本经典 / 名著",
    isEarned: (stats) => stats.tagCounts["经典"] >= 3,
  },
  {
    id: "fantasy-adventurer",
    name: "奇幻冒险家",
    description: "读完 2 本奇幻或冒险书",
    isEarned: (stats) =>
      new Set([...stats.completedByTag["奇幻"], ...stats.completedByTag["冒险"]])
        .size >= 2,
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
    id: "story-sharer",
    name: "分享达人",
    description: "读完 6 本书后，给妈妈讲一本最喜欢的书",
    isEarned: (stats) => stats.completedCount >= 6,
  },
  {
    id: "complete",
    name: "完成勋章",
    description: "完成 30 本阅读计划",
    isEarned: (stats) => stats.completedCount === books.length,
  },
];

const storageKey = "libraryReadingTracker";
const today = () => new Date().toISOString().slice(0, 10);

let appState = loadState();
let activeFilter = "all";

function loadState() {
  const fallback = {
    completedBooks: {},
    ratings: {},
    rewardWishes: {},
    dailyCheckins: [],
  };

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return {
      ...fallback,
      ...saved,
      completedBooks: saved?.completedBooks || {},
      ratings: saved?.ratings || {},
      rewardWishes: saved?.rewardWishes || {},
      dailyCheckins: saved?.dailyCheckins || [],
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
  const days = [...new Set(appState.dailyCheckins)].sort().reverse();
  if (!days.length) {
    return 0;
  }

  let cursor = new Date(today());
  let streak = 0;

  for (const day of days) {
    const currentDay = cursor.toISOString().slice(0, 10);
    if (day === currentDay) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    } else if (streak === 0) {
      cursor.setDate(cursor.getDate() - 1);
      if (day === cursor.toISOString().slice(0, 10)) {
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
  const completedByTag = {};
  const tagCounts = {};

  books.forEach((book) => {
    book.tags.forEach((tag) => {
      if (!completedByTag[tag]) {
        completedByTag[tag] = [];
      }
    });
  });

  completed.forEach((book) => {
    book.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      completedByTag[tag].push(book.id);
    });
  });

  return {
    completed,
    completedCount: completed.length,
    chineseCompleted: completed.filter((book) => book.language === "中文").length,
    englishCompleted: completed.filter((book) => book.language === "英文").length,
    points: completed.reduce((sum, book) => sum + calculateBookPoints(book), 0),
    tagCounts,
    completedByTag,
    currentStreak: calculateStreak(),
  };
}

function getEarnedBadges(stats) {
  return badgeRules.filter((badge) => badge.isEarned(stats));
}

function getBookBadges(book, stats) {
  const earned = getEarnedBadges(stats);
  const badges = [];
  const completedOrder = getCompletedBooks().findIndex(
    (completedBook) => completedBook.id === book.id
  );

  if (completedOrder === -1) {
    return badges;
  }

  if (book.language === "中文" && stats.chineseCompleted >= 3) {
    badges.push("中文小书虫");
  }

  if (book.language === "英文" && stats.englishCompleted >= 3) {
    badges.push("英文勇士");
  }

  if (book.tags.includes("经典") && stats.tagCounts["经典"] >= 3) {
    badges.push("经典探索者");
  }

  if (
    (book.tags.includes("奇幻") || book.tags.includes("冒险")) &&
    earned.some((badge) => badge.id === "fantasy-adventurer")
  ) {
    badges.push("奇幻冒险家");
  }

  if (book.tags.includes("动物") && stats.tagCounts["动物"] >= 2) {
    badges.push("动物朋友");
  }

  if (completedOrder + 1 === 15) {
    badges.push("半程勋章");
  }

  if (completedOrder + 1 === 30) {
    badges.push("完成勋章");
  }

  return [...new Set(badges)];
}

function renderProgress(stats) {
  const percentage = Math.round((stats.completedCount / books.length) * 100);
  const nextRewardAt = rewardMilestones.find(
    (milestone) => milestone > stats.completedCount
  );

  document.getElementById("completed-count").textContent = stats.completedCount;
  document.getElementById("progress-text").textContent = `${percentage}%`;
  document.getElementById("points-count").textContent = stats.points;
  document.getElementById("progress-fill").style.width = `${percentage}%`;
  document.getElementById("next-reward").textContent = nextRewardAt
    ? `还差 ${nextRewardAt - stats.completedCount} 本`
    : "全部完成";

  const progressGrid = document.getElementById("progress-grid");
  progressGrid.innerHTML = "";

  books.forEach((book, index) => {
    const cell = document.createElement("span");
    const isCompleted = Boolean(appState.completedBooks[book.id]);
    const milestone = rewardMilestones.includes(index + 1);

    cell.className = `progress-cell${isCompleted ? " is-complete" : ""}${
      milestone ? " is-milestone" : ""
    }`;
    cell.textContent = index + 1;
    cell.title = milestone ? `第 ${index + 1} 本奖励节点` : book.title;
    progressGrid.appendChild(cell);
  });
}

function renderRewards(stats) {
  const rewardList = document.getElementById("reward-list");
  rewardList.innerHTML = "";

  rewardMilestones.forEach((milestone) => {
    const isAvailable = stats.completedCount >= milestone;
    const isSpecial = milestone === 15 || milestone === 30;
    const rewardItem = document.createElement("div");
    rewardItem.className = `reward-item${isAvailable ? " is-available" : ""}`;

    const title = isSpecial
      ? milestone === 15
        ? "半程奖励"
        : "30 本大奖励"
      : "向妈妈要 1 个奖励";
    const wish = appState.rewardWishes[milestone];

    rewardItem.innerHTML = `
      <div>
        <strong>读完 ${milestone} 本：${title}</strong>
        <p>${wish ? `奖励愿望：${wish}` : isAvailable ? "可以填写奖励愿望啦" : `还差 ${milestone - stats.completedCount} 本`}</p>
      </div>
      <button type="button" ${isAvailable ? "" : "disabled"} data-milestone="${milestone}">
        ${wish ? "修改愿望" : "填写愿望"}
      </button>
    `;

    rewardList.appendChild(rewardItem);
  });
}

function renderBadges(stats) {
  const badgeList = document.getElementById("badge-list");
  badgeList.innerHTML = "";

  badgeRules.forEach((badge) => {
    const earned = badge.isEarned(stats);
    const badgeItem = document.createElement("div");
    badgeItem.className = `badge${earned ? " is-earned" : ""}`;
    badgeItem.innerHTML = `
      <span class="badge__icon">${earned ? "★" : "☆"}</span>
      <div>
        <strong>${badge.name}</strong>
        <p>${badge.description}</p>
      </div>
    `;
    badgeList.appendChild(badgeItem);
  });
}

function renderDailyCheckin(stats) {
  const dailyStatus = document.getElementById("daily-status");
  const button = document.getElementById("daily-checkin-button");
  const checkedToday = appState.dailyCheckins.includes(today());

  button.textContent = checkedToday ? "今天已打卡" : "今天已阅读";
  button.disabled = checkedToday;
  dailyStatus.innerHTML = `
    <span>当前连续阅读：<strong>${stats.currentStreak}</strong> 天</span>
    <span>累计每日打卡：<strong>${appState.dailyCheckins.length}</strong> 天</span>
  `;
}

function renderBooks(stats) {
  const table = document.getElementById("book-table");
  table.innerHTML = "";

  books
    .filter((book) => {
      if (activeFilter === "all") {
        return true;
      }
      if (activeFilter === "completed") {
        return Boolean(appState.completedBooks[book.id]);
      }
      return book.language === activeFilter;
    })
    .forEach((book) => {
      const isCompleted = Boolean(appState.completedBooks[book.id]);
      const row = document.createElement("tr");
      const badges = getBookBadges(book, stats);
      const rewardLabel = rewardMilestones.includes(book.id)
        ? book.id === 15
          ? "半程奖励"
          : book.id === 30
            ? "30 本大奖励"
            : "三本奖励"
        : "";

      row.className = isCompleted ? "is-complete" : "";
      row.innerHTML = `
        <td>${book.id}</td>
        <td>
          <strong>${book.title}</strong>
          <span>${book.author}</span>
        </td>
        <td>${book.language}</td>
        <td><span class="difficulty difficulty--${book.difficulty}">${book.difficulty}</span></td>
        <td>
          <label class="check-label">
            <input type="checkbox" data-book-id="${book.id}" ${isCompleted ? "checked" : ""} />
            ${isCompleted ? "已读" : "完成"}
          </label>
        </td>
        <td>${appState.completedBooks[book.id] || "-"}</td>
        <td>
          <select data-rating-id="${book.id}" aria-label="${book.title} 评分">
            ${[0, 1, 2, 3, 4, 5]
              .map(
                (rating) =>
                  `<option value="${rating}" ${
                    Number(appState.ratings[book.id] || 0) === rating ? "selected" : ""
                  }>${rating === 0 ? "未评分" : "★".repeat(rating)}</option>`
              )
              .join("")}
          </select>
        </td>
        <td>${isCompleted ? calculateBookPoints(book) : 0}</td>
        <td>
          <div class="tag-stack">
            ${badges.map((badge) => `<span class="mini-tag">${badge}</span>`).join("")}
            ${rewardLabel ? `<span class="mini-tag reward-tag">${rewardLabel}</span>` : ""}
            ${!badges.length && !rewardLabel ? "<span>-</span>" : ""}
          </div>
        </td>
      `;

      table.appendChild(row);
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

  if (wish === null) {
    return;
  }

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
  const currentDay = today();
  if (!appState.dailyCheckins.includes(currentDay)) {
    appState.dailyCheckins.push(currentDay);
    appState.dailyCheckins.sort();
    saveState();
    render();
  }
}

function resetRecords() {
  const confirmed = window.confirm("确定要清空所有打卡、评分、奖励和勋章进度吗？");
  if (!confirmed) {
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

document.getElementById("book-table").addEventListener("change", (event) => {
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
    document
      .querySelectorAll(".filter-button")
      .forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    activeFilter = button.dataset.filter;
    render();
  });
});

render();
