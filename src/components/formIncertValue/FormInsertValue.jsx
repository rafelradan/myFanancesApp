
import { useState } from 'react'
import { useDispatch } from 'react-redux'



import './FormInsertValue.scss'

export default function FormInsertValue( {triger} ){
    const dispatch = useDispatch()

    const [activeRadio, setActiveRadio] = useState(true)
    const [descripition, setDescripition] = useState()
    const [insertValue, setInsertValue] = useState(0)
    const [ prohibited, setProhibited ] = useState([])
    const [ id, setId ] = useState(Math.round(Math.random(1) * 1000))
    var dataValues = []
    
   
    function generateId(){
        setId(Math.round(Math.random(0) * 1000))
    }
    
    function addNewValue() {
        generateId()
        

        if (descripition === '' || insertValue === 0){
            return alert('Descrição ou valor invalido!')
        };
       

        if (activeRadio === true) {
            var addType = 'Entrada'
            
        }else{
            var addType = 'Saída'
        }

        dispatch({
           type: 'ADD_NEWVALUE',
           obj:{
            'id': id,
            'newDescripition':descripition,
            'newValue': insertValue,
            'addType' : addType
           }
        })
       
        
        handdleClearInps()
        triger()
    }

    function handdleClearInps(){
        setDescripition('')
        setInsertValue('')
    }
    
    function handdleChangeRadio(){
        setActiveRadio(!activeRadio)
    }


   
    return(
        <div className="form-incert-value">
            <div className="form-head">
                <h4>Inserir Dados</h4>
            </div>
            <div className="form-content">
                <div className="incert-datas">
                    <label>Descrição</label>
                    <input type="text" className="descripition" onChange={(e) => setDescripition(e.target.value)} value={descripition}/>
                </div>
                <div className="incert-datas">
                    <label>Valor</label>
                    <input type="number" className="value" onChange={(e) => setInsertValue(e.target.value)} value={insertValue}  />
                </div>
                <div className="check">
                    <section>
                        <input type={'radio'} className='entrada' onChange={handdleChangeRadio} checked={activeRadio ? true : false}  />
                        <span>Entrada</span>
                    </section>

                    <section>
                        <input type={'radio'} className='entrada'  onChange={handdleChangeRadio} checked={!activeRadio ? true : false}  />
                        <span>Saída</span>
                    </section>
                    
                </div>

                <button className='btn-add' onClick={addNewValue}>Adicionar</button>
                
               

            </div>
        </div>
    )
}
