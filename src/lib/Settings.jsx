// データ形式(初期値)
export const initData = {
  id: null,
  classification: "",
  amount: "",
  record_date: "",
  user_id: 0,
};

export const initLoginInfo = {
  user_name: "",
  passcode: "",
};

// サーバーURL
export const API_URL = "http://localhost:3000/";

// ログインテーブルURL
export const LOGIN_URL = "http://localhost:3000/users/";

// 分類
export const options = [
  "未選択",
  "食費",
  "ガス代",
  "電気代",
  "水道代",
  "通信費",
  "雑費",
];

// 曜日
export const week = ["日", "月", "火", "水", "木", "金", "土"];
