
import Footer from "../../components/Footer/Footer";

export default function PreguntaPage(){

    return(
        <>
        <div className="container-fluid fondo my-3">       
       <div className=" text-center row">
           <h1>¿En que podemos ayudarte?</h1>
           <div className="col my-3">
               <h3>Planes disponibles</h3>
               <p>Abir plan familiar</p>
           </div>
           <div className="col my-3">
               <h3>Ayuda sobre cobros</h3>
               <p>¿Cómo realizo el pago?</p>
           </div>
           <div className="col my-3">
               <h3>Inicio de sesión</h3>
               <p>¿Cómo creo un perfil en la página?</p>
           </div>
           <div className="col my-3">
               <h3>Seguridad</h3>
               <p>¿Quién tiene acceso a mis datos personales?</p>
           </div>
       </div>       
        </div>
       <Footer/> 
       </>
    )
}