import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import './App.css';

const dummyList = [
  {
    id:1,
    author: "zunik",
    content: "hello1",
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id:2,
    author: "hwak",
    content: "hello2",
    emotion: 2,
    created_date: new Date().getTime()
  },
  {
    id:3,
    author: "youg",
    content: "hello3",
    emotion: 1,
    created_date: new Date().getTime()
  },

]

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
