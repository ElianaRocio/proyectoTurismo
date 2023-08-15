import Disneyland from "../Disneyland/Disneyland";
import Legoland from "../Legoland/Legoland";
import Village from "../Village/Village";
import Wizard from "../Wizard/Wizard";

export default function Menu() {
  return (
    <div className="my-3 p-3">

      <div className="container-fluid fondo my-3">

      <div className="row">
          <h1 className=" text-center titulo2  my-3">PAQUETES</h1>
        </div>
        <div className="row my-3 menu">

          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="Disneyland-tab" data-bs-toggle="tab" data-bs-target="#Disneyland" type="button" role="tab" aria-controls="Disneyland" aria-selected="true">Magic Kingdom</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="Legoland-tab" data-bs-toggle="tab" data-bs-target="#Legoland" type="button" role="tab" aria-controls="Legoland" aria-selected="false">Legoland</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="Wizard-tab" data-bs-toggle="tab" data-bs-target="#Wizard" type="button" role="tab" aria-controls="Wizard" aria-selected="false">Wizarding World</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="Village-tab" data-bs-toggle="tab" data-bs-target="#Village" type="button" role="tab" aria-controls="Village" aria-selected="false">Village Santa Claus</button>
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane active" id="Disneyland" role="tabpanel" aria-labelledby="Disneyland-tab" tabindex="0"><Disneyland /> </div>
            <div class="tab-pane" id="Legoland" role="tabpanel" aria-labelledby="Legoland-tab" tabindex="0"><Legoland /> </div>
            <div class="tab-pane" id="Wizard" role="tabpanel" aria-labelledby="Wizard-tab" tabindex="0"><Wizard /></div>
            <div class="tab-pane" id="Village" role="tabpanel" aria-labelledby="Village-tab" tabindex="0"><Village /></div>
          </div>

        </div>
      </div>
    </div>

  );
}