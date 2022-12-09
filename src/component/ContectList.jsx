import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ContectItem from "./ContectItem";
import SearchBox from "./SearchBox";
const ContectList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      let book = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(book);
    } else {
      //입력값이 없을때
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);
  return (
    <div>
      <SearchBox />
      <div>
        인원:{filteredList.length} 명
        {filteredList.map((item) => (
          <ContectItem item={item} />
          //item={item} 바로 자식으로 보낼때는 굳이 리덕스 안해도됨
        ))}
      </div>
    </div>
  );
};

export default ContectList;
