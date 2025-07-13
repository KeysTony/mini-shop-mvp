function processQuery() {
  const input = document.getElementById("queryInput").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `<p>🔍 Анализируем запрос...</p>`;

  parseUserQuery(input).then(type => {
    resultsDiv.innerHTML = `<p>🔍 Вы ищете: ${type}</p>`;
    
    if (type === "cafe") {
      resultsDiv.innerHTML += `
        <h3>☕ Найденные кафе:</h3>
        <ul>
          <li>Starbucks — 0.5 км</li>
          <li>Coffee Time — 0.8 км</li>
          <li>Local Roasters — 1.2 км</li>
        </ul>
        <button onclick="buyItem()">Купить за 1.5 TON</button>
      `;
    } else if (type === "event") {
      resultsDiv.innerHTML += `
        <h3>🎫 Билеты:</h3>
        <ul>
          <li>Концерт Coldplay — 20 мая</li>
          <li>Футбол: Россия vs Испания — 10 июня</li>
        </ul>
        <button onclick="buyItem()">Купить за 3 TON</button>
      `;
    } else if (type === "shop") {
      resultsDiv.innerHTML += `
        <h3>🛍️ Магазины:</h3>
        <ul>
          <li>Zara — 0.6 км</li>
          <li>H&M — 1.0 км</li>
        </ul>
        <button onclick="buyItem()">Купить за 5 TON</button>
      `;
    } else {
      resultsDiv.innerHTML += `<p>😕 Не удалось распознать запрос.</p>`;
    }
  });
}

async function buyItem() {
  try {
    await window.Telegram.WebApp.ready();
    alert("💡 Открыть Tonkeeper для оплаты");
  } catch (err) {
    alert("Ошибка оплаты: " + err.message);
  }
}