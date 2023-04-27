import { useRef, useState } from "react";

const DiaryItem = ({onEdit, onRemove, author, content, created_date, emotion, id}) => {

    const [isEdit, setIsEdit] = useState(false);
    const toggleEdit = () => setIsEdit(!isEdit);    // 본문 수정 토글

    const [localContent,setLocalContent] = useState(content);
    const localContentInput = useRef();

    const handleRemove = () => {
        if(window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
            onRemove(id);
        }
    };  // 일기 데이터 삭제

    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    };  // 수정 취소 시 초기화
    
    const handleEdit = () => {
        if (localContent.length < 5) {
            localContentInput.current.focus();
            return;
        }
        if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
            onEdit(id,localContent);
            toggleEdit();
        }  
    };  // 수정완료를 눌렀을때 이벤트를 처리할 함수
    
    return (
        <div className="DiaryItem">
            <div className="info">
                <span>
                    작성자 : {author} | 감정점수 : {emotion}
                </span>
                <br />
                <span className="date">{new Date(created_date).toLocaleDateString()}</span>                
            </div>
            <div className="content">
                {isEdit ? (
                    <>
                        <textarea
                            ref={localContentInput}
                            value = {localContent}
                            onChange={(e) => setLocalContent(e.target.value)}
                        />
                    </> 
                ) : (
                <>{content}</>
                )}
            </div>

            {isEdit ? (
                <>
                    <button onClick={handleQuitEdit}>수정취소</button>
                    <button onClick={handleEdit}>수정완료</button>
                </> 
            ) : (
                <>
                    <button onClick={handleRemove}>삭제하기</button>
                    <button onClick={toggleEdit}>수정하기</button>
                </>
            )}
        </div>
    );
}
export default DiaryItem;