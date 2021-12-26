import { useState, useEffect } from "react";

function Bai10() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => {setShow(!show)}}>Toogle</button>
      <div>
        <i>Lưu ý cần phải xóa bỏ file khi chọn ảnh khác bằng cách sử dụng URL.revokeObjectURL</i>
      </div>
      {show &&  <Content/>}
    </>
  )
}

function Content() {
  const [file, setFile] = useState();

  const handleChooseFile = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setFile(file);
  }

  useEffect(() => {
    return () => {
      file && URL.revokeObjectURL(file.preview)
    }
    
  }, [file]);

  return (
    <>
      <div>
        <input
          type="file"
          onChange={handleChooseFile}
        />
      </div>
      {
      file &&
      <img src={file.preview} width="400"/>
      }
    </>
  )  
}
export default Bai10;