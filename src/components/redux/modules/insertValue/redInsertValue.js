//***** HOW TO CREATE AND USE REDUX *****\\

//STEP TREE IS CREATE A REDUCER, IT MUST BE A FUNCTION

export default function redInsertValue( state = [], action ){

    localStorage.mfValues ? state = JSON.parse(localStorage.getItem('mfValues')) : state = [{'newDescripition':'Sem lançamentos',
    'newValue': 0, 'addType': 'Saída', 'id':0}]

    
    switch(action.type){
        case 'ADD_NEWVALUE':
            return  (
              //  localStorage.mfValues ? mfValues.push(state) : console.log('não'),
              //  localStorage.setItem('mfValues', JSON.stringify(mfValues))
                localStorage.mfValues ? state = JSON.parse(localStorage.getItem('mfValues')) : state = [],
                localStorage.setItem('mfValues', JSON.stringify([...state, action.obj])),
                state = [...state, action.obj]
            );
            break;

        case 'DEL_ITEM':
           
            function handdleDelItem(){
                state = JSON.parse(localStorage.getItem('mfValues'));
                const newArray = state.filter((item) => item.id !== action.obj.id);
                
                localStorage.setItem('mfValues', JSON.stringify(newArray))
            }

           
           
        return (
            handdleDelItem(),
            localStorage.mfValues ? state = JSON.parse(localStorage.getItem('mfValues')) : state = []
           
        );
            break;
        default:
            return state;
            break;
        
    }

}