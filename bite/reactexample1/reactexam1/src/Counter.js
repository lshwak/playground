import React,{useState} from 'react'; // state는 react의 기능이라서 리액트를 임포트. useState메소드 사용.
const Counter = () => {

    // 0에서 출발
    // 1씩 증가하고
    // 1씩 감소하는
    // count 상태 

    console.log("counter 호출!")

    // 0번째 index로 count == 상태의 값으로,1번째 index로 setCount == count값을 변화시키는 상태변화함수로 사용. useState메소드 인자0은 초기값.
    const [count,setCount] = useState(0)

    // 1씩 증가하는 함수
    const onIncrease = () => {
        setCount(count + 1);
    }
    //1씩 감소하는 함수
    const onDecrease = () => {
        setCount(count - 1);
    }
    
    const [count2,setCount2] = useState(0)

    const onIncrease2 = () => {
        setCount2(count2 + 1);
    }
    const onDecrease2 = () => {
        setCount2(count2 - 1);
    }

    return (
        <div>
            <h2>{count}</h2>   
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>

            <h2>{count2}</h2>   
            <button onClick={onIncrease2}>+</button>
            <button onClick={onDecrease2}>-</button>
        </div>
    );
};
export default Counter;