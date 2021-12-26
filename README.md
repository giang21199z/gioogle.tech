## hook
1. Chỉ dùng cho function component không dành cho class component
2. Component đơn giản và trở nên dễ hiểu

# useState hook
### Dùng khi nào?
Khi muốn dữ liệu thay đổi thì giao diện tự động cập nhật ( render lại giao diện )

### Lưu ý
- Component được re-render sau khi `setState`
- Initial state chỉ dùng cho lần đầu
- setState với callback 
  setCount(prevState => prevState + 1);
- Inital state với call back
- Khi setState thì đi thay thế giá trị mới

# useEffect hook
Có 3 loại useEffect
1. useEffect(callback)
- gọi callback mỗi khi component được render
- gọi callback mỗi khi component được thêm vào dom
2. useEffect(callback, [])
- chỉ gọi call back mõi khi component được mount tương tự ngOnit
- Sử dụng cho listen dom event
3. useEffect(callback, [deps])
- callback sẽ được gọi khi deps khi thay đổi bởi việc so sánh ===
### Chú ý
1. callback luôn được gọi khi component được mount
2. cleanup function luôn được gọi trước khi component được unmount
3. cleanup function luôn được gọi trước khi callback được gọi trừ lần mounted

# useLayoutEffect hook
Khác với useEffect một chút đoạn render UI sẽ không được ưu tiên bằng callback trong useLayoutEffect

So sánh khác nhau giữa useEffect & useLayoutEffect
## useEffect
1. Cập nhật lại state
2. Cập nhật lại DOM
3. Render lại UI
4. Gọi cleanup nếu deps thay đổi
5. Gọi useEffect callback

## useLayoutEffect
1. Cập nhật lại state
2. Cập nhật lại DOM
3. Gọi cleanup nếu deps thay đổi (sync)
4. Gọi useLayoutEffect callback
5. Render lại UI

## useRef
const ref = useRef(initialValue);
Luôn trả về 1 object có key là current
initialValue chỉ khởi tạo một lần giống hệt useState

## memo
Chức năng ghi nhớ component không cần render khi không cần thiết
Chủ yếu sử dụng để tối ưu không nên lạm dụng
Kiểm tra === ít nhất 1 prop của con thì mới render lại component con

## useCallback
Ví dụ đưa cái button increase vào component con để tương tác ngược lại với component cha
UseCallback phải + với memo

## useMemo
Tránh thực hiện lại một logic nào đó không cần thiết
Chỉ tính lại khi deps thay đổi
useMemo(callback, [deps])

## useReducer
Sử dụng để phân tách logic nếu với các trường hợp quá nhiều state
Các bước làm việc với reducer
1. Initial state
2. Action
3. Reducer
4. Dispatch

useReducer(reducer, initialState) tra ve state & dispatch
const [count, dispatch] = useReducer(reducer, initialState)

## useContext
Sử dụng để truyền context từ thằng component cha sang component con mà không cần phải sử dụng prop
tạo ra 1 file context có state và toogleState
sử dụng export ThemeContext = createContext()

const value = {
  theme,
  toogleTheme
}
truyền data value thông qua
<ThemeContext.Provider value={value}>
{children}
</ThemeContext>

ở component con sử dụng useContext
const themeContext = useContext(ThemeContext)
đối tượng themeContext chính là consumer có các thuộc tính là theme, toogleTheme

sử dụng useContext kết hợp với useReduce tương tự với state cần tách được các file: action, reproduce


## useImperativeHandle

Sử dụng để đóng gói truyền Ref từ cha xuống con.
Sử dụng kèm với forwardRef.
Chú ý phần component con khi sử dụng với forwardRef cần lưu ý chứa cả hai tham số props và ref