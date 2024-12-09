import Dessert from "./Desserts";
import Drink from "./Drinks";
import Experience from "./Experience";
import Hero from "./Hero";
import MainCours from "./MainCourse";
import PartnersAndClients from "./Partner";
import StarterMenu from "./StartMenu";



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