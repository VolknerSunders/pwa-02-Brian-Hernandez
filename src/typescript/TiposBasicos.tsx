import React from 'react'
export const TiposBasicos = () => {
    
let FicIdNombre: string | number = "Frank";
FicIdNombre = 706;
const FicNombre: string = "Francisco";
const FicApellidos: string = "Ibarra Carlos"
let FicLibros = [];
FicLibros.push(706);
FicLibros.push(true);
FicLibros.push('El Principito');
const FicNumControl: number = 706;
const FicNumControl2 = 1074;
const FicFechaReg: Date =  new Date();
let FicExperiencia = 20;
let FicActivo: boolean = true;
FicExperiencia = 25;
    return (
        <>
          <h3>Tipos Básicos</h3> 
          Alias: {FicIdNombre},<br></br>
          Nombre: {FicNombre},<br></br>
          Apellidos: {FicApellidos},<br></br>
          No. Control: {FicNumControl},<br></br>
          No. Control 2: {FicNumControl2},<br></br>
          Fecha de registro: {FicFechaReg.toString()},<br></br>
          Años de experiencia: {FicExperiencia},<br></br>
          Estatus: {(FicActivo) ? 'Activo' : 'No Activo'},
        <br></br>
          Libros: {FicLibros[0]}, 
                  {(FicLibros[1]) ? 'Activo' : 'No Activo'}, 
                  {FicLibros[2]}
        </>
    )
}