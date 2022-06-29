import axios from "axios";
import { useEffect, useState, useMemo } from "react";

export default function MemoHooks() {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    //fetching data
    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            setData(response.data);
        });
    }, []);
    //fungsi untuk mencari nama terpanjang
    const findLongestName = (comments) => {
        if (!comments) return null;

        let longestName = "";
        for (let i = 0; i < comments.length; i++) {
        let currentName = comments[i].name;
        if (currentName.length > longestName.length) {
            longestName = currentName;
        }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
    };

    const getLongestName = useMemo(() => findLongestName(data), [toggle]);//fungsi findLongestName hanya akan dirender apabila toggle di trigger sehingga menghindari re rendering berulang
    //useMemo akan mengingat nilai dari fungsinya 

    return (
        <div className="App">
        <div> {getLongestName} </div>

        <button
            onClick={() => {
            setToggle(!toggle);
            }}
        >
            {" "}
            Toggle
        </button>
        {toggle && <h1> toggle </h1>}
        </div>
    );
}
//penjelasan hook bisa cek disini https://medium.com/@falzee/react-hooks-part-1-b6a49a88d38d
