import {useState} from "react";

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

const DiaryList = ({diaryList}) => {
    const [sortType, setSortType] = useState("latest");

    const getProcessedDiaryList = () => {
        const compare = (a,b) => {
            if (sortType === 'latest') {
                return parseInt(b.date) - parseInt(a.date);
            } else {
                return parseInt(a.date) - parseInt(b.date);
            }
        }
        const copyList = JSON.parse(JSON.stringify(diaryList));
        const sortedList = copyList.sort(compare);
        return sortedList;
    };

    return (
        <div>
            <ControlMenu value={sortType} onChange={setSortType} optionList={sortTypeOption} />
            {getProcessedDiaryList().map((it)=> (
                <div key={it.id}>{it.content}</div>
            ))}
        </div>
    );
};

DiaryList.defaultProps = {
  disryList: []
};

export default DiaryList;