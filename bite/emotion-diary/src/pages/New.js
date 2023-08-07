import {useEffect} from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {

    useEffect(()=> {
        const titleElemnet = document.getElementsByTagName('title')[0];
        titleElemnet.innerHTML = `감정 일기장 - 새 일기`;
    },[]);

    return <div>
        <DiaryEditor />
    </div>
};

export default New;