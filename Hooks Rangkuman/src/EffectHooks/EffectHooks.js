import { useState, useEffect } from "react";


export default function EffectHooks() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]); 
    //useEffect digunakan untuk menghindari side effect 
    //kode diatas menggunakan dependancy [count] sehingga data akan dirender saat pertama kali dan saat state count berubah

    return (
        <>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
        </>
    );
    }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);
//penjelasan hook bisa cek disini https://medium.com/@falzee/react-hooks-part-1-38cb28e07e41