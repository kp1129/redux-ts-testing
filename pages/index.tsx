import type { NextPage } from "next";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectValue } from "../slices/counterSlice";
import { setLight, setDark, selectDarkMode } from "../slices/darkModeSlice";

const Home: NextPage = () => {
  const count = useSelector(selectValue);
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={`w-full flex justify-center bg-green-400/70`}>
        <div className="h-10 w-[80px] bg-white rounded-md flex items-center relative">
          <div
            onClick={() => dispatch(darkMode ? setLight() : setDark())}
            className={`w-8 h-8 rounded-full cursor-pointer absolute duration-75 mx-1 left-0 ${
              darkMode ? `bg-primary left-10` : `bg-secondary `
            }`}
          />
        </div>
      </nav>
      <main
        className={`flex w-full flex-1 flex-col items-center justify-center px-20 text-center ${
          darkMode ? `bg-secondary` : "bg-primary"
        }`}
      >
        <h1
          data-testid="header"
          className={`text-6xl font-bold ${
            darkMode ? `text-textDark` : `text-textLight`
          }`}
        >
          The value of counter is {count}
        </h1>
        <button
          className="w-full h-10  mt-5 mb-5 rounded-md bg-green-400/50 text-textDark"
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
        <button
          className="w-full h-10  rounded-md bg-red-400/50 text-textDark"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
      </main>
    </div>
  );
};

export default Home;
