import React from "react";
import "./dieta.css"

export const Dieta = () => {
    return (
        <section id="diets">
              <h1 id="diet">Recetas para Todos <i className="fa-solid fa-wheat-awn-circle-exclamation"></i></h1>

              <p>La comida no es la excepción a la inclusión. Cada vez es más la gente con dietas 
                  que "prohiben" el consumo de cierto alimento, ya sea por salud, gustos o ideales. 
                  En iCook pensamos en todos nuestros usuarios actuales y potenciales, por lo que 
                  ofrecemos recetas que satisfacen a todos.
              </p>
              <br></br>
              <p>Seleccione a continuación toda restricción que quiera aplicar a su receta:</p>

              <div className="input-group mb-3">
                  <label className="input-group-text" for="inputGroupSelect01">Dietas</label>
                  <select className="form-select" id="inputGroupSelect01">
                      <option selected>Elija...</option>
                      <option value="1">Vegetariano</option>
                      <option value="2">Vegano</option>
                      <option value="3">Celiaco</option>
                      <option value="4">Diabetico</option>
                      <option value="5">Hipertenso</option>
                      <option value="6">Ninguna</option>
                  </select>
              </div>

                  <button type="button" className="btn btn-outline-success">Buscar</button>
          </section>
    )
}