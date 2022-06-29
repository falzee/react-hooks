import { useRef } from "react";


export default function RefHooks() {
    const inputElement = useRef();//dalam kasus ini ref hooks digunakan untuk mengakses dom 
    //ref hooks juga bisa untuk menjaga nilai sebelumnya

    const focusInput = () => {
        inputElement.current.focus();//akan fokus saat tombol di klik
    };

    return (
        <>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
        </>
    );
}

//penjelasan hook bisa cek disini https://medium.com/@falzee/react-hooks-part-1-38cb28e07e41
