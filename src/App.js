import { ToastContainer } from "react-toastify";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div className="App min-h-[100vh] bg-gray-700">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
