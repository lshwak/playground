import {useState} from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const ControlMenu = ({value, onChange, optionList}) => {
    return (
        <select value={value} onChange={(e)=>onChange(e.target.value)}>
            {optionList.map((it,idx)=> (
                <option key={idx} value={it.value}>
                    {it.name}
                </option>
            ))}
        </select>
    );
};

const sortTypeOption = [
    {value:"latest",name:"최신순"},
    {value:"oldest",name:"오래된순"}
]

const filterOptionList = [
    {value:"all",name:"전부다"},
    {value:"good",name:"좋은 감정만"},
    {value:"bad",name:"안좋은 감정만"}
]

const DiaryList = ({diaryList}) => {
    const navigate = useNavigate();
    const [sortType, setSortType] = useState("latest");
    const [filter, setFilter] = useState("all");

    const getProcessedDiaryList = () => {

        const filterCallBack = (item) => {
            if (filter === "good") {
                return parseInt(item.emotion) <= 3;
            } else {
                return parseInt(item.emotion) > 3;
            }
        }

        const compare = (a,b) => {
            if (sortType === 'latest') {
                return parseInt(b.date) - parseInt(a.date);
            } else {
                return parseInt(a.date) - parseInt(b.date);
            }
        }
        const copyList = JSON.parse(JSON.stringify(diaryList));
        const filteredList = filter === "all" ? copyList : copyList.filter((it)=>filterCallBack(it));
        const sortedList = filteredList.sort(compare);
        return sortedList;
    };

    return (
        <div>
            <ControlMenu value={sortType} onChange={setSortType} optionList={sortTypeOption} />
            <ControlMenu
                value={filter}
                onChange={setFilter}
                optionList={filterOptionList}
            />
            <MyButton type={"positive"} text={"새 일기쓰기"} onClick={()=>navigate("/new")} />
            {getProcessedDiaryList().map((it)=> (
                <div key={it.id}>{it.content}{it.emotion}</div>
            ))}
        </div>
    );
};

DiaryList.defaultProps = {
  disryList: []
};

export default DiaryList;