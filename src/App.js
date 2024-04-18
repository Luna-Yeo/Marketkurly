import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import MainContents from "./pages/Main/MainPage";
import Visual from "./components/Main/Visual/Visual";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
  {
    // 라우터를 설정할 수 있는 라이브러리를 설치해야 사용할 수 있는 메서드이다.
    // a태그에 주소를 넣고 클릭했을 때, 보여지는 페이지를 설정할 수 있다.
    // 만약 루트 경로인 "/"로 들어왔을 때 보여지는 페이지는 Main 페이지이다.
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <MainContents>
            <Visual />
          </MainContents>
        ),
      },
      {
        path: "/member/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
