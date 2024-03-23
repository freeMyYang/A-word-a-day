// 获取保存的每日一言数组
function getQuotesArray() {
    var quotes = localStorage.getItem('quotes');
    if (quotes) {
        return JSON.parse(quotes);
    } else {
        return [];
    }
}

// 将每日一言添加到字符串数组中，并保存到本地存储中
function addQuoteToArr(quote) {
    var quotes = getQuotesArray();
    quotes.push(quote);
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

// 添加每日一言
function addQuote() {
    var quoteInput = document.getElementById("quote-input");
    var quote = quoteInput.value.trim();
    if (quote === "") {
        alert("请先输入每日一言！");
        return;
    }
    addQuoteToArr(quote);
    quoteInput.value = "";
    alert("已成功添加每日一言！");
}

// 显示每日一言
function displayQuotes() {
    var quotesDisplay = document.getElementById("quotes-display");
    quotesDisplay.innerHTML = "";
    var quotes = getQuotesArray().filter(function (quote) { return quote !== ""; });
    if (quotes.length === 0) {
        quotesDisplay.innerHTML = "还没有添加任何非空的每日一言！";
        return;
    }
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quoteDiv = document.createElement("div");
    quoteDiv.innerHTML = quotes[randomIndex];
    quotesDisplay.appendChild(quoteDiv);
}
