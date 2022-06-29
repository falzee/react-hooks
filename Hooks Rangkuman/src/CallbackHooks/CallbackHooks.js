import { useCallback, useState } from "react";
import Child from "./Child";

export default function CallBackHooks() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel!");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]//dirender saat data berubah dan saat pertama kali
  );//mirip seperti useMemo bedanya useCallback mengingat fungsi callbacknya

  return (
    <div className="App">
      <Child returnComment={returnComment} />

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
