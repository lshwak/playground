import {useRef, useState} from "react";
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);
  
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };  // 새로운 일기 추가 onCreate

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it)=>it.id !== targetId);
    setData(newDiaryList);
  };  // 일기 삭제

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) => 
        it.id === targetId ? { ...it, content : newContent } : it
      )
    );
  };  // 일기 수정.

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data}/>
    </div>
  );
}

export default App;



// const dummyList = [
//   {
//     id:1,
//     author: "zunik",
//     content: "hello1",
//     emotion: 5,
//     created_date: new Date().getTime()
//   },
//   {
//     id:2,
//     author: "hwak",
//     content: "hello2",
//     emotion: 2,
//     created_date: new Date().getTime()
//   },
//   {
//     id:3,
//     author: "youg",
//     content: "hello3",
//     emotion: 1,
//     created_date: new Date().getTime()
//   },
// ]