import pin from "../images/geo-pin.png";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--img-cont">
                <img className="card--img" src={props.image} />
            </div>
            <div className="card--info">
                <img className="card--pin" src={pin}/>
                <span className="card--country">{props.country}</span>
                <span className="grey underline">View on Google Maps</span>
                <h1 className="card--title bold">{props.title}</h1>
                <span className="bold">{props.startDate}{props.endDate !== "" && props.endDate}</span>
                <p>{props.discription}</p>
            </div>
        </div>
    )
}