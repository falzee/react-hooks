import React, { useState } from "react";


export default function StateHooks(){
    const [color,setColor] = useState("Black")//membuat state menggunakan useState()
    //state tidak bisa diubah secara langsung untuk diubah kita membutuhkan parameter kedua (klo dr contoh setColor)
    const change = () => setColor("Yellow")
    return (
        <div>
        <h1>My favorite color is {color}!</h1>
        <button
            type="button"
            onClick={change}
        >Change</button>
        </div>
    );
};
//penjelasan hook bisa cek disini https://medium.com/@falzee/react-hooks-part-1-38cb28e07e41