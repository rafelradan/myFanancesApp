import './SquareContent.scss'

export default function SquareContent({value, title, icon}){
   

    return(
        <div className="square">
            <div className="top">
                <p>{title}</p>
                <img src={icon} />
            </div>

            <div className="content">
                <p>$R: {value}</p>
            </div>
        </div>
    )
}