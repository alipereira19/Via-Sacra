import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext'; // Asegúrate de importar el contexto correctamente

const Chart1_1 = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getAllUsers(); // Llama a la función para obtener los datos
  }, [actions]); // Dependencia correcta

  return (
    <div>
      {store.users && store.users.length > 0 ? (
        store.users.map(user => (
          <div key={user.id}>
            {user.name}
          </div>
        ))
      ) : (
        <p>Cargando usuarios...</p>
      )}
    </div>
  );
};

export default Chart1_1;
