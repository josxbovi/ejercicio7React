import EmpleadoAvatar from './EmpleadoAvatar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function EmpleadoRow({ fullName, title, department, pic }) {
  return (
    <div className="card mb-12">
      <div className="row g-0">
        <div className="col-md-12">
          <EmpleadoAvatar pic={pic} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{fullName}</h5>
            <p className="card-text text-danger">{title}</p>
            <p className="card-text">{department}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpleadoRow;