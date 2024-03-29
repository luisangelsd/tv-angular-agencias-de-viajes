import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError,map, catchError } from 'rxjs';
import { EntityDestino } from '../modelo-entitys-destinos/entity-destino';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiDestinosService {

  //-- Variables globales
 // private urlEndpoind: String="http://springapidaotraveling-env.eba-ja34dpuu.us-west-2.elasticbeanstalk.com/destinos/";
 //private urlEndpoind: String= "http://localhost:8090/api/traveling-api/destinos/";
 private urlEndpoind: String= "http://localhost:8080/destinos/";



  //-- Metodo listar todo
  public listarDestinos():Observable<EntityDestino[]>{
    return this.http.get(this.urlEndpoind+"list").pipe(
      map ( respuesta => respuesta as EntityDestino[]),
      catchError(e=>{
        return throwError(e);
      })
    );
  }


  //-- Metodo buscar por id
  public buscarPorId(idDestino:any):Observable<EntityDestino>{
    return this.http.get(this.urlEndpoind+"show/"+idDestino).pipe(
      map(respuesta => respuesta as EntityDestino),
      catchError(e=>{
        return throwError(e);
      })
    )
  }


  //-- Metodo eliminar por id
  public eliminarPorId(idDestino:any):Observable<EntityDestino>{
    return this.http.delete(this.urlEndpoind+"delete/"+idDestino).pipe(
      map(respuesta=> respuesta as EntityDestino),
      catchError(e=>{
        return throwError(e);
      })
    )
  }

//-- Metodo guardar
public guardar(entityDestino:EntityDestino):Observable<EntityDestino>{
  return this.http.post(this.urlEndpoind+"save",entityDestino).pipe(
    map(response=> response as EntityDestino),
    catchError(e=>{
      return throwError(e);
    })
  )
}


//-- Metodo editar
public editarPorId(entityDestino:EntityDestino):Observable<EntityDestino>{
  return this.http.put(this.urlEndpoind+"update/"+entityDestino.idDestino,entityDestino).pipe(
    map(respuesta=> respuesta as EntityDestino),
    catchError(e=>{
      return throwError(e);
    })
  )
}

  constructor(
    private http:HttpClient
  ) { }
}
