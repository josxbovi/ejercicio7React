import EmpleadoList from './components/EmpleadoList';

let empleados = [
  { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "./img/empleado1.png" },
  { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "./img/empleado2.png" },
  { id: 3, fullName: "Jensen Combs", title: "CFO", department: "Business", pic: "./img/empleado3.png" },
  { id: 4, fullName: "Hadassah Hartman", title: "CTO", department: "Engineering", pic: "./img/empleado4.png" },
  { id: 5, fullName: "Renee Mcintosh", title: "Art Director", department: "Marketing", pic: "./img/empleado5.png"},
  // más empleados aquí
];

function App() {
  return <EmpleadoList empleados={empleados} />;
}

export default App;