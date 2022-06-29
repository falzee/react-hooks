import React, { useRef } from "react";
import Button from "./Button";//import komonen anak

export default function ImperativeHandleHooks() {
    const buttonRef = useRef(null);
    return (
        <div>
        <button
            onClick={() => {
            buttonRef.current.alterToggle();//fungsi bisa langsung diakses
            }}
        >
            Button From Parent
        </button>
        <Button ref={buttonRef} />
        </div>
    );
}
//penjelasan hook bisa cek disini https://medium.com/@falzee/react-hooks-part-1-b6a49a88d38d

