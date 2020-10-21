import React from 'react';
import './App.css';
import store from "./Store/store";
import { Provider } from "react-redux";
import Title from "./Components/Title/Title";
import InputSection from "./Components/InputSection/InputSection";
import Result from "./Components/ResultSection/Result";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Title />
        <InputSection />
        <Result />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
