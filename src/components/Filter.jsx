import React, {useRef} from 'react';
import { addFilter, delFilter } from "../store/action";
import { connect } from "react-redux";

const Filter = ( { addFilter, delFilter } ) => {
  const formFilter = useRef(null);

  const handleFilter = (event) => {
    event.preventDefault();
    const formData = new FormData(formFilter.current); 
    let filterName = formData.get('filterName');
    console.log("Ahora estamos filtrando por " + filterName);
    addFilter(filterName);
  }

  const handleDelFilter = (event) => {
    event.preventDefault();
    delFilter();
  }

  return (
    <form action="/" className="filter" ref={formFilter}>
      <input type="text" name="filterName" placeholder="Filtro de Nombre"/>
      <button onClick={ handleFilter }>Filtrar</button>
      <button onClick={ handleDelFilter }>Quitar Filtro</button>
    </form>
  );
}

export default connect(null,{ addFilter, delFilter }) (Filter);