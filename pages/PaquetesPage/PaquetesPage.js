import Disneyland from "../../components/Disneyland/Disneyland";
import Legoland from "../../components/Legoland/Legoland";
import Wizard from "../../components/Wizard/Wizard";
import Village from "../../components/Village/Village";
export default function PaquetesPage() {

  return (

    <div className="container my-3">
      <Disneyland />
      <Legoland />
      <Wizard />
      <Village />
      <div className="container-fluid"> 
      </div>
      
    </div>

  );
}








