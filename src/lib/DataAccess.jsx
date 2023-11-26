/**
 * すべてのデータ取得処理
 * @param {*} url
 * @param {*} setData
 */
export const getAllData = (url, setData) => {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((results) => {
      setData(results);
    });
};

/**
 * 条件付きデータ取得処理
 * @param {*} url
 * @param {*} setData
 * @param {*} where
 */
export const getData = (url, setData, where) => {
  fetch(url + "get", {
    body: JSON.stringify(where),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      setData(result);
    });
};

/**
 * データ追加処理
 * @param {*} url
 * @param {*} setData
 * @param {*} data
 */
export const addData = (url, setData, data, where = null) => {
  fetch(url + "set", {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => getData(url, setData, where));
};

/**
 * ログインチェック
 * @param {*} url
 * @param {*} setData
 * @param {*} data
 */
export const loginCheck = (url, setData, data) => {
  fetch(url, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((user_id) => {
      setData(user_id);
    });
};

/**
 * 新規アカウント作成
 * @param {*} url
 * @param {*} info
 */
export const createAccount = (url, info) => {
  fetch(url + "addUser", {
    body: JSON.stringify(info),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

/**
 * データ編集処理
 * @param {*} url
 * @param {*} setData
 * @param {*} data
 */
export const editData = (url, setData, data, where = null) => {
  const requestUrl = url + data.id;
  fetch(requestUrl, {
    body: JSON.stringify(data),
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => getData(url, setData, where));
};

/**
 * データ削除処理
 * @param {*} url
 * @param {*} setData
 * @param {*} id
 */
export const deleteData = (url, setData, id, where) => {
  const requestUrl = url + id;
  fetch(requestUrl, {
    method: "DELETE",
  }).then(() => getData(url, setData, where));
};
