import EmpleadoRow from './EmpleadoRow';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function EmpleadoAvatar({ pic }) {
    return <img src={pic} alt="Empleado" />;
  }

export default EmpleadoAvatar;