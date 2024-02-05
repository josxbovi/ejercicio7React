import EmpleadoRow from './EmpleadoRow';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function EmpleadoList({ empleados }) {
  return (
    <div className="container mt-5">
        <div className="row mb-3">
      {empleados.map((empleado) => (
        <div className="col-sm-6 col-md-4 col-lg-6 mb-4 mx-5">
        <EmpleadoRow key={empleado.id} {...empleado} />
        </div>
      ))}
    </div>
    </div>
  );
}

export default EmpleadoList;