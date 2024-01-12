import Home from "../components/Home";
import NavBar from "../components/NavBar";
import GlobalStyles from "../styles/GlobalStyles";
import { MainDiv } from "../ui/Main";

export default function HomePage() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <MainDiv>
        <Home />
      </MainDiv>
    </>
  );
}
