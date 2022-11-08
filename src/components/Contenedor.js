import "../App.css";
import img1 from "../img/belleza-banner-1.png"
export default function Contendor() {
  return (
    <> 
      <main className="contenedor">
        <article>
          <div className="card">
            <img src={img1} alt=""></img>
            <div className="card-body"></div>
            <h4>My title</h4>
            <p className="cad-text text-secondary">P rueba de card rueba de card rueba de card 
            rueba de card rueba de card</p>
          </div>
        </article>
      </main>
    </>
  );
}



