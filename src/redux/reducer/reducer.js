let initialState = { contactList: [], keyword: "" }; //초기값으로 contactList이름의 빈배열 //새 state추가(keywor))

function reducer(state = initialState, action) {
  let { type, payload } = action; //??
  switch (type) {
    case "ADD_CONTACT":
      state.contactList.push({
        name: payload.name,
        phonNumber: payload.phonNumber,
      });

      break;
    case "SUERCH_BY_NAME":
      state.keyword = payload.keyword;
      break;
  }

  return { ...state };
}

export default reducer;
