import "../App.css";

export default function Card({title, img, description}) {
  return (
    <> 

    <div className="card text-center">
        <img src={img} alt=""></img>
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="cad-text text-secondary">{description}</p>
            <a href="#!" className="btn btn-outline-secondary rounded-0">
            Buy now!
            </a>
        </div>
    </div>
    </>
  );
}
