import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { EntityAgencia } from '../modelo-entitys-agencias/entity-agencia';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ConsumoApiAgenciasService {

  //-- Variables globales
  //--private urlEndPind:String="http://springapidaotraveling-env.eba-ja34dpuu.us-west-2.elasticbeanstalk.com/agencias/";
  //private urlEndPind: String= "http://localhost:8090/api/traveling-api/agencias/";
  private urlEndPind: String= "http://localhost:8080/agencias/";





  //-- Peticion Listar Agencias
  public listarAgencias():Observable<EntityAgencia[]>{
    return  this.http.get(this.urlEndPind+"list").pipe(
      map(respuesta => respuesta as EntityAgencia[]),
      catchError(e=>{
        return throwError(e);
      })
    );
  }

  //-- Peticion Buscar Agencia ByID
  public buscarAgenciaById(idAgencia: any){
    return this.http.get(this.urlEndPind+"show/"+idAgencia).pipe(
      map(respuesta=> respuesta as EntityAgencia),
      catchError(e =>{
        return throwError(e);
      })
    )
  } 

  
  //-- Peticion Eliminar Agencia
  public eliminarAgencia( idAgencia:any ):Observable<EntityAgencia>{
    return this.http.delete(this.urlEndPind+"delete/"+idAgencia).pipe(
      map( (respuesta) => respuesta as EntityAgencia),
      catchError(e=>{
        return throwError(e);
      })
    )
  }

  //-- Peticion Guardar
  public guardarAgencia(entityAgencia: EntityAgencia ):Observable<EntityAgencia>{
    return this.http.post(this.urlEndPind+"save", entityAgencia).pipe(
      map((respuesta) => respuesta as EntityAgencia),
      catchError(e =>{
        return throwError(e);
      })
    )
  }

  public editarAgencia(entityAgencia:EntityAgencia):Observable<EntityAgencia>{
    return this.http.put(this.urlEndPind+"update/"+entityAgencia.idAgencia,entityAgencia).pipe(
      map((respuesta) => respuesta as EntityAgencia),
      catchError(e=>{
        return throwError(e);
      })
    )
  }


  //-- Crear he inicializar variables
  constructor(
    private http: HttpClient
  ) { }
}
