# 《我想回家了》表單遊戲外掛程序
[《我想回家了》](https://docs.google.com/forms/d/e/1FAIpQLSdqaej6VBQYnHDIxUqowmhzAqg_c9IzDoOf5rEjWYp0uPJthw/viewform)很好玩喔～

玩過之後在想，好像可以試試說做一個外掛。剛好可以體驗一下如何製作 Chrome Extension 的說。

## 偽。流程圖
1. 用戶在輸入欄輸入與答案長度相符的「000」占位符，並且嘗試提交，網頁顯示資料錯誤
2. 按下快捷鍵【Ctrl + Shift + f】或者點擊流覽器外掛程序的圖示
3. 程序在輸入欄測試 0000 到 10000 的數字組合
4. 當網頁不再顯示錯誤，停止測試數字組合
