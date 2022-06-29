import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle() {
        setToggle(!toggle);
        },//fungsi yang mau di-pass
    }));//tidak menggunakan dependancy
    return (
        <>
        <button>Button From Child</button>
        {toggle && <span>Toggle</span>}
        </>
    );
});//forwardRef untuk nge-pass ref ke komponen lain (untuk kasus ini ke komonen induk)

export default Button;
