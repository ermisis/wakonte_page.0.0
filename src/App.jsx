import React from "react";
import { Route, Routes } from "react-router-dom";
// import { AuthContextProvider } from "./context/AuthContext";
// import Login from "./pages/Login";
import Register from "./pages/Register";
import MainPage from "./pages/MainPage";
import TempPage from "./pages/Temp";

export default function App() {
  return (
    // <AuthContextProvider>
    <Routes>
      {/* <Route path="/" element={<Register />} /> */}
      <Route path="/" element={<MainPage />} />
      <Route path="temppage" element={<TempPage />} />
    </Routes>
    // </AuthContextProvider>
  );
}

// const App = () => (
//   <div className="bg-light">
//     <div className={`${styles.flexCenter}`}>
//       <div className={`${styles.boxWidth}`}>
//         <Navbar />
//       </div>
//     </div>

//     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//       <div className={`${styles.boxWidth}`}>
//         <Hero />
//       </div>
//     </div>

//     <div className={`${styles.flexCenter}`}>
//       <div className={`${styles.boxWidth}`}>
//         <CardSection />
//       </div>
//     </div>
//     <div className={`${styles.flexCenter}`}>
//       <div className={`${styles.boxWidth}`}>
//         <AppSection />
//       </div>
//     </div>
//     <div className={`${styles.flexStart}`}>
//       <div className={`${styles.boxWidth}`}>
//         <TrafficSection />
//       </div>
//     </div>
//     <div className={`${styles.flexStart}`}>
//       <div className={`${styles.boxWidth}`}>
//         <MemberSection />
//       </div>
//     </div>
//   </div>
// )

// export default App;
