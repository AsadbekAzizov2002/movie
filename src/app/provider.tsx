import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const AppProvider = ({ children }: { children: ReactNode }) => {
	return (
		<BrowserRouter>    
			<Provider store={store}>
				<QueryClientProvider client={client}>
					{children}
				</QueryClientProvider>
			</Provider>
		</BrowserRouter>
	);
};

export default AppProvider;


// BrowserRouter  Router uchun yani saxifadan saxifaga utish uchun javob beradi 

//Provider bu esa reduxni ishlatish uchun javob beradi 

//QueryClientProvider API ay uchun malumotni keshlash uchun ishlatiladi 




//Loyihani eng kotta urab turadigan qismi shu yerda byuladi  kelajakda qushish uchun ham shu yerga yozamiz ekan