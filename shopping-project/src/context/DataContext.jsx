//Context에 대한 내용은 React 공식 홈페이지 참조
// Context를 사용하여 value값을 현재 파일에서 지정하고 내보내기
import { createContext, useState } from "react";

// 내보핸
const DataContext = createContext();

// 미리 Provider를 작성하여 value값을 가진 componet를 내보냄
const DataProvider = ({ children }) => {
  // 사용할 값들을 useState를 통해 들고옴
  // user정보 {name: '홍길동', profile : picture, likelist : []}
  const [user, setUser] = useState({
    name: "홍길동",
    profile: null,
    likelist: [],
  });
  // 상품정보 : 배열로 들어감
  const [productList, setProductList] = useState([
    {
      productId: 1,
      productName: "React",
      productDetail: "How to learn React",
      productColor: ["white", "black"],
      productPicture: "book1.png",
    },
    {
      productId: 2,
      productName: "JavaScript",
      productDetail: "How to learn JS",
      productColor: ["white", "black"],
      productPicture: "book1.png",
    },
  ]);
  // 댓글 정보

  // 사용할 value값을 state와 action으로 분리하여 사용
  const value = {
    state: { user, productList },
    action: [setUser, setProductList],
  };
  // DataProvider를 사용할 때 DataContext.Provider를 사용할 수 있도록 함
  // children은 Provider를 쓸 때 데이터를 공용으로 쓰는 component
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// consumer 작성
// DataContext의 값을 가져와 DataConsumer의 이름으로 사용
const { Consumer: DataConsumer } = DataContext;

// component로 사용하기 위해 export -> .Provider 대신 사용할 component : App 전체를 감쌈
export { DataConsumer, DataProvider };
// 값을 사용하기 위해 가져오는 context export -> useContext로 가져올 것
export default DataContext;
