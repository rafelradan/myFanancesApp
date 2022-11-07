
import SquareContent from '../squareContent/SquareContent'
import './Resume.scss'

import AddIcon from '../../assets/addIcon.png'
import RemoveIcon from '../../assets/removeIcon.png'
import MoneyIcon from '../../assets/moneyIcon.png'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Resume({income, expense}){
    const [ result, setResul ] = useState(income - expense)

    useEffect(() =>{
        setResul(income - expense)
    },[income, expense])

    return(
        <div className="all-content">
            <div className="resume">
                <SquareContent value={income} title={'ENTRADAS'} icon={AddIcon}/>
                <SquareContent value={expense} title={'SAÍDAS'} icon={RemoveIcon}/>
                <SquareContent value={result.toFixed(2)} title={'CAIXA'} icon={MoneyIcon}/>
            </div>

        </div>

    )
}
