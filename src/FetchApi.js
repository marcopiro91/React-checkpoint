/* 1. Create un componente e fare un fetch a questo url: https://jsonplaceholder.typicode.com/todos
2. Renderizzare i dati ottenuti:
• il campo title rappresenta il testo del todo
• il campo completed indica lo stato del todo (usare checkbox)
3. Implementare una logica per cambiare lo stato di un todo (completato / non completato)
4. Applicare del css agli elementi per creare dello spazio e fare in modo che i todo completati siano
riconoscibili dagli altri
BONUS
5. Implementare una logica per modificare il testo di un todo
6. Implementare una logica per eliminare un todo
7. Implementare una logica per aggiungere un todo
8. Al click sul bottone “Modifica” viene fatto un focus sull’input
9. Al click sul bottone “Aggiungi” viene svuotato l’input */

import React, { useEffect, useState } from "react";
import { FetchApiItem } from "./FetchApiItem";


export function FetchApi() {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [InputChecked, setInputChecked] = useState(false)


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(json => setData(json))
        .catch((error) => setError(error))
    }, [])

    
  

    function handleCheckboxRemove(index) {
        const updatedArray = [...data];
        updatedArray.splice(index, 1)
        setData(updatedArray)
    } 



    return (
        <div>
            {error && <p>Errore: {error}</p>}
            <ul>
                {data && data.map((item, index) => <li key={index}>{item.title}<FetchApiItem /><button onClick={() => handleCheckboxRemove(index)}>Remove</button></li> )}
            </ul>
        </div>
    )
}