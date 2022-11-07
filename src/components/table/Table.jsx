
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './Table.scss'

const TableRow = ({ tblId,  tblType, tblDescripition, tblValue, tblTriger }) => {
    const dispatch = useDispatch()

    function handdleDelItem(){
        console.log('Clicou no Del!', tblDescripition, tblId);
       
        dispatch({
            type: 'DEL_ITEM',
            obj: {'id': tblId},
            triger: tblTriger
        })

       tblTriger() 
    }

    return(
        <tr >
          
            <td>{tblDescripition}</td>
            <td>{tblValue}</td>
            <td>{tblType}</td>
            <td>
                <button className='btnExcluir' onClick={handdleDelItem}>Excluir</button>
                
                {/* <span>{tblId}</span> */}
            </td>
        </tr>
    )

}



export default function Table( {triger} ){
    const [ data, setData ] = useState([])
   
    const mfValues = useSelector(state => state.redInsertValue)
    useEffect(() => {
     function handleGetValuesFromLocalStorage(){
        setData(mfValues)
    }
    
        handleGetValuesFromLocalStorage()
        triger()
    }, [ mfValues ])


    
    return(
        <div className='content'>
          
            <section>
                <table>
                    <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Tipo</th>
                        <th>Ação</th>
                    </tr>
                    </thead>
                   <tbody>
                    {data.map(item =>(
                        <TableRow key={item.id}
                           
                            tblId={item.id}
                            tblDescripition={item.newDescripition}
                            tblValue={item.newValue}
                            tblType={item.addType}
                            tblTriger={triger}

                        ></TableRow>
                    ))}
                                
                   </tbody>
                   
                </table>
            </section>
        </div>
    )
}