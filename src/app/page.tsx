import Herosection from "./components/Herosection";
import Editorspick from "./components/Editorspick";
import Featureproduct from "./components/Featureproduct";
import Greensection from "./components/Greensection";
import Universe from "./components/Universe";
import FeaturedPost from "./components/FeaturedPost";

export default function Home() {
  return (
    
    <div>
      
      <Herosection/> 
      <Editorspick/>
       <Featureproduct/>  
       <Greensection/>
      <Universe/> 
      <FeaturedPost/>
      
    </div>
  );
}
