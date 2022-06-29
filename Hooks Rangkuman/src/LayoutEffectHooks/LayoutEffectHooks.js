import { useLayoutEffect, useEffect, useRef } from "react";

export default function LayoutEffectHooks() {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);//fungsinya sama dengan useEffect 

    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, []);

    return (
        <div className="App">
        <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} />
        </div>
    );
}

//penjelasan hook bisa cek disini https://medium.com/@falzee/react-hooks-part-1-38cb28e07e41

