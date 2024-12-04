import React, { useEffect, useState } from 'react';
import CategoriaService from '../services/CategoriaService';
import { Link } from 'react-router-dom';

export const ListCategoriaComponent = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(()=>{
      listarCategorias()
    },[])

    const listarCategorias = () =>{
        CategoriaService.getAllCategorias().then(response =>{
            setCategorias(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

const deleteCategoria = (categoriaId) =>{
    CategoriaService.deleteCategoria(categoriaId).then(response => {
        listarCategorias();
        
    }).catch(error =>{
        console.log(error);
    })
}

    return (
        <div className='container' style={{ marginTop: "80px" }}>
            <h2 className='text-center'>Listado de Categorias</h2>

            <Link to='/add-categoria' className='btn btn-primary'>Agregar Categoria</Link>
            
            <table class="table table-secondary table-hover" style={{ marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categorias.map(categoria => (
                            <tr key={categoria.id}>
                               <td>{categoria.id}</td>
                                <td>{categoria.nombre}</td>
                                <td>{categoria.descripcion}</td>
                                <td>
                                    <Link className='btn btn-info' to={`/edit-categoria/${categoria.id}`}>Actualizar</Link>
                                    <button style={{marginLeft:"10px"}} className='btn btn-danger' onClick={() => deleteCategoria(categoria.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
export default ListCategoriaComponent;
