import Dessert from "../components/Desserts";
import Drink from "../components/Drinks";
import Experience from "../components/Experience";
import MainCours from "../components/MainCourse";
import PartnersAndClients from "../components/Partner";
import StarterMenu from "../components/StartMenu";
import Hero from "../SignUp/HeroS";



export default function Menu() {
  return (
<div>
  <Hero/>
  <StarterMenu/>
  <MainCours/>
  <Experience/>
  <Dessert/>
  <Drink/>	
  <PartnersAndClients/>
</div>
  );
}