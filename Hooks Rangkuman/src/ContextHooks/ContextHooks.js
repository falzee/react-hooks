import { useState, createContext, useContext } from "react";

const UserContext = createContext();//inisialisasi dengan createContext 

function Component1() {
    const [user, setUser] = useState("Jesse Hall");

    return (
        //agar dapat dikirim ke komponen lainnya komponen perlu dimasukkan dalam wrapper “value.Provider”
        //perlu diisi value yang akan diteruskan ke komponen lain klo mau pass value doang cukup user klo ngubah value ganti setValue klo butuh 2 2 nya bisa juga jangan lupa jadi 2 kurung kurawa {{value,setValue}}
        <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
        </UserContext.Provider>
    );
}

function Component2() {
    return (
        <>
        <h1>Component 2</h1>
        <Component3 />
        </>
    );
}

function Component3() {
    return (
        <>
        <h1>Component 3</h1>
        <Component4 />
        </>
    );
}

function Component4() {
    return (
        <>
        <h1>Component 4</h1>
        <Component5 />
        </>
    );
}

function Component5() {
    const user = useContext(UserContext);//state di komponen 1 bisa diakses disini tanpa menggunakan prop drilling di etiap komponen

    return (
        <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}
//penjelasan hook bisa cek disini https://medium.com/@falzee/react-hooks-part-1-b6a49a88d38d

