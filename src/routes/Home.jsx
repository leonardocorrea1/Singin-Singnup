import { useNavigate } from "react-router-dom"
import ButtonForm from "../components/Button/ButtonForm"
import useAuth from "../hooks/useAuth"

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <title>Home</title>
      <ButtonForm text="Sair" onClick={() => [signout(), navigate("/")]}/>
    </div>
  );
};

export default Home;

