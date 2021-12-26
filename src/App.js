import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Nav from './ui/nav/Nav';
import Bai1 from './learn/state/Bai1';
import Bai2 from './learn/state/Bai2';
import Bai3 from './learn/state/Bai3';
import Bai4 from './learn/state/Bai4';
import Bai5 from './learn/effect/Bai5';
import Bai6 from './learn/effect/Bai6';
import Bai7 from './learn/effect/Bai7';
import Bai8 from './learn/effect/Bai8';
import Bai9 from './learn/effect/Bai9';
import Bai10 from './learn/effect/Bai10';
import Bai11 from './learn/effect/Bai11';
import Bai12 from './learn/layoutEffect/Bai12';
import Bai14 from './learn/ref/Bai14';
import Bai15 from './learn/memo/Bai15';
import Bai16 from './learn/callback/Bai16';
import Bai17 from './learn/memo/Bai17';
import Bai18 from './learn/reducer/bai18/Bai18';
import Bai19 from './learn/reducer/bai19/Bai19';
import Bai20 from './learn/context/bai20/Bai20';
import Bai21 from './learn/context/bai21/Bai21';
import Bai22 from './learn/imperativeHandle/Bai22';

// fake comment: using Bai11
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Content of lession ${id}`
      })
    )
  }, 2000);
}
emitComment(1);
emitComment(2);
emitComment(3);
// end fake comment
function App() {
  return (
    <>
      <div className='w-50'>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bai1">[State] Bai1. Change state</Link>
            </li>
            <li>
              <Link to="/bai2">[State] Bai2. Two ways binding</Link>
            </li>
            <li>
              <Link to="/bai3">[State] Bai3. To do list</Link>
            </li>
            <li>
              <Link to="/bai4">[State] Bai4. Mount & Unmount</Link>
            </li>
            <li>
              ------------------------------
            </li>
            <li>
              <Link to="/bai5">[Effect] Bai5. Change title use only callback</Link>
            </li>
            <li>
              <Link to="/bai6">[Effect] Bai6. Call api using [] empty</Link>
            </li>
            <li>
              <Link to="/bai7">[Effect] Bai7. Call api using [deps]</Link>
            </li>
            <li>
              <Link to="/bai8">[Effect] Bai8. Listen DOM event</Link>
            </li>
            <li>
              <Link to="/bai9">[Effect] Bai9. Using with setInterval, setTimeout</Link>
            </li>
            <li>
              <Link to="/bai10">[Effect] Bai10. Choose image</Link>
            </li>
            <li>
              <Link to="/bai11">[Effect] Bai11. Fake chat</Link>
            </li>
            <li>
              ------------------------------
            </li>
            <li>
              <Link to="/bai12">[LayoutEffect] Bai12. Example when using layoutEffect</Link>
            </li>
            <li>
              ------------------------------
            </li>
            <li>
              <Link to="/bai14">[Ref] Bai14. Count down auto. Get prev state useRef and useEffect</Link>
            </li>
            <li>
              ------------------------------
            </li>
            <li>
              <Link to="/bai15">[Memo] Bai15. Memo dùng để nhớ component con không cần render lại</Link>
            </li>
            <li>
              ------------------------------
            </li>
            <li>
              <Link to="/bai16">[Callback] Bai16. Sử dụng useCallback để đưa action vào trong component con tương tác vs state component cha</Link>
            </li>
            <li>
              ------------------------------
            </li>
            <li>
              <Link to="/bai17">[useMemo] Bai17. Ghi nhớ logic tính tổng sản phẩm</Link>
            </li>
            <li>
              ------------------------------
            </li>
            <li>
              <Link to="/bai18">[useReducer] Bai18. Ví dụ counter sử dụng useReducer</Link>
            </li>
            <li>
              <Link to="/bai19">[useReducer] Bai19. Ví dụ todo List truyền object sử dụng useReducer</Link>
            </li>
            <li>
              ------------------------------
            </li>
            <li>
              <Link to="/bai20">[useContext] Bai20. Ví dụ toogle theme sử dụng context using state</Link>
            </li>
            <li>
              <Link to="/bai21">[useContext] Bai21. Todo list kết hợp global context & reducer</Link>
            </li>
            <li>
              ------------------------------
            </li>
            <li>
              <Link to="/bai22">[imperativeHandle] Bai22. Ví dụ với imperativeHandle play pause video</Link>
            </li>
          </ul>
        </Nav>
      </div>
      <div className='w-50'>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/bai1" element={<Bai1/>}/>
          <Route path="/bai2" element={<Bai2/>}/>
          <Route path="/bai3" element={<Bai3/>}/>
          <Route path="/bai4" element={<Bai4/>}/>
          <Route path="/bai5" element={<Bai5/>}/>
          <Route path="/bai6" element={<Bai6/>}/>
          <Route path="/bai7" element={<Bai7/>}/>
          <Route path="/bai8" element={<Bai8/>}/>
          <Route path="/bai9" element={<Bai9/>}/>
          <Route path="/bai10" element={<Bai10/>}/>
          <Route path="/bai11" element={<Bai11/>}/>
          <Route path="/bai12" element={<Bai12/>}/>
          <Route path="/bai14" element={<Bai14/>}/>
          <Route path="/bai15" element={<Bai15/>}/>
          <Route path="/bai16" element={<Bai16/>}/>
          <Route path="/bai17" element={<Bai17/>}/>
          <Route path="/bai18" element={<Bai18/>}/>
          <Route path="/bai19" element={<Bai19/>}/>
          <Route path="/bai20" element={<Bai20/>}/>
          <Route path="/bai21" element={<Bai21/>}/>
          <Route path="/bai22" element={<Bai22/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
