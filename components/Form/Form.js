export default function Form() {
    return (
        <>

            <div className="container-fluid fondo3 my-3 p-3" >
                <div className="row my-3 p-3" >
                    <h2 className="text-center titulo">CONTÁCTANOS</h2>


                    <form className="my-3">

                        <div className="row my-3">
                            <div className="col-sm my-3 texto">
                                <label for="inputName" className="form-label"><strong>Nombre:</strong></label>
                                <input type="name" id="inputName" className="form-control" />
                            </div>

                            <div className="col-sm my-3 texto">
                                <label for="inputPhone" className="form-label"><strong>Telefono:</strong> </label>
                                <input type="phone" id="inputPhone" className="form-control" />
                            </div>
                        </div>

                        <div className="row my-3">

                            <div className="col-sm texto my-3">
                                <label for="inputEmail" className="form-label"><strong>Correo:</strong></label>
                                <input type="email" id="inputEmail" className="form-control" />
                            </div>

                            <div className="col-sm texto my-3">
                                <label for="inputWebsite" className="form-label"><strong>Website:</strong></label>
                                <input type="Website" id="inputWebsite" className="form-control" />
                            </div>

                        </div>

                        <div className="my-3 texto">
                            <label for="inputComents" className="form-label"><strong>Comentarios:</strong></label>
                            <textarea className="form-control" id="Coments" rows="3"></textarea>
                        </div>

                        <div className="row">
                            <div className="col texto text-center">
                                <button type="submit" className="btn btn-secondary">Enviar</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>

    );
}