import { QueryClient, QueryClientProvider } from "react-query";
import Portfolio from "./Portfolio";

import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Banner from "./Banner";

const Main = () => {
  const queryClient = new QueryClient();

  return (
    <main>
      <Banner></Banner>
      
      <About></About>

      <Skills></Skills>

      <QueryClientProvider client={queryClient}>
        <Portfolio></Portfolio>
      </QueryClientProvider>

      <Contact></Contact>
    </main>
  );
};

export default Main;
