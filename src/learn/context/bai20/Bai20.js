
import classNames from "classnames";
import { useContext, useState } from "react";
import ThemeProvider, { ThemeContext } from "./ThemeContext";

function ContentA() {
  const themeContext = useContext(ThemeContext);
  return (
    <>
      <h1>
        This is content component A
      </h1>
      <button onClick={themeContext.toogleTheme}>Toogle theme</button>
      <ContentB/>
    </>
  )
}

function ContentB() {
  return (
    <>
      <h2>
        This is content component B
      </h2>
      <ContentC/>
    </>
  )
}

function ContentC() {
  const themeContext = useContext(ThemeContext);
  return (
    <>
      <h3 className={classNames(themeContext.theme)}>
        This is content component C
      </h3>
    </>
  )
}
function Bai4() {
  const [toogle, setToogle] = useState(false);

  const handleToogle = () => {
    setToogle(!toogle);
  }

  return (
    <>
      <button onClick={handleToogle}>Toogle Component</button>
      {
        toogle &&
        <ThemeProvider>
          <ContentA/>
        </ThemeProvider>
      }
    </>
  )
}

export default Bai4;
