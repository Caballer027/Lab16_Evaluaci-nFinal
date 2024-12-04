import React, { useState, useEffect } from 'react'
import CategoriaService from '../services/CategoriaService';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const AddCategoriaComponent = () => {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const navigate = useNavigate();

    const {id} = useParams();

    const saveOrUpdatCategoria = (e) =>{
       
        e.preventDefault();
        const categoria ={nombre,descripcion};

        if(id){

            CategoriaService.updateCategoria(id,categoria).then((response)=>{
                console.log(categoria);
                navigate('/categorias');    
            }).catch(error=>{
                console.log(error)
            })
        }
        else{
            CategoriaService.createCategoria(categoria).then((response)=>{
                console.log(categoria);
                navigate('/categorias');    
            }).catch(error=>{
                console.log(error)
            })
        }
    }

    useEffect(()=>{
        CategoriaService.getCategoriaById(id).then(response =>{
            setNombre(response.data.nombre);
            setDescripcion(response.data.descripcion);
            
        }).catch(error =>{
            console.log(error);
        })
    },[id]);

    const titulo =()=>{
        if(id){
            return <h2 className='text-center'>Actualizar Categoria</h2>
        }
        else{
            return <h2 className='text-center'>Registrar Categoria</h2>
        }
    }

    return (
        <div>
            <div className='container' style={{ marginTop: "80px" }}>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        
                        <h2> {titulo()}</h2>

                            <div className='card-body'>
                                <form>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Nombre:</label>
                                            <input
                                                type='text'
                                                placeholder='Escriba el nombre del producto'
                                                name='txtNombre'
                                                className='form-control'
                                                value={ nombre } onChange={ (e) => setNombre(e.target.value) }
                                            />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Descripción:</label>
                                            <input
                                                type='text'
                                                placeholder='Escriba la descripcion del producto'
                                                name='txtDescripcion'
                                                className='form-control'
                                                value={ descripcion } onChange={ (e) => setDescripcion(e.target.value) }
                                            />
                                    </div>
                                    <div className='botones'>
                                        <button className='btn btn-danger' onClick={(e)=> saveOrUpdatCategoria(e)}>Guardar</button>                                        
                                        <Link to='/productos' className='btn btn-primary'>Cancelar</Link>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCategoriaComponent;