export default function Table() {
    return (


<table className="table table-secondary">
  <thead>
    <tr>
      <th scope="col">Dias</th>
      <th scope="col">Dia1</th>
      <th scope="col">Dia2</th>
      <th scope="col">Dia3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Actividades</th>
      <td>Visita al castillo</td>
      <td>Presentacion princesas</td>
      <td>Noche de despedida</td>
    </tr>
    <tr>
      <th scope="row">Incluye</th>
      <td>Desayuno y souvenirs</td>
      <td>Traje temático</td>
      <td>Cena de cortesía</td>
    </tr>
    
  </tbody>
</table>
    );
}