import "../App.css";
import logo from "../img/Amazon_logo.png"

export default function Nav() {
  return (
    <> 
	<nav className="menu" id="menu">
		
    <div className="contenedor contenedor-botones-menu">
        <button id="btn-menu-barras" className="btn-menu-barras"><i className="fas fa-bars"></i></button>
        <button id="btn-menu-cerrar" className="btn-menu-cerrar"><i className="fas fa-times"></i></button>
    </div>

    <div className="contenedor contenedor-enlaces-nav">
			<img src={logo} className="logo"></img>
			<div className="btn-departamentos" id="btn-departamentos">
				<p>Todos los <span>Departamentos</span></p>
				<i className="fas fa-caret-down"></i>
			</div>

			<div className="enlaces">
				<a href="#">Cuenta</a>
				<a href="#">Promociones</a>
				<a href="#">Mesa de Regalos</a>
				<a href="#">Ayuda</a>
			</div>
		</div>
    <div className="contenedor contenedor-grid">
			<div className="grid" id="grid">
				<div className="categorias">
					<button className="btn-regresar"><i className="fas fa-arrow-left"></i> Regresar</button>
					<h3 className="subtitulo">Categorias</h3>

					<a href="#" data-categoria="tecnologia-y-computadoras">Tecnología y Computadoras <i className="fas fa-angle-right"></i></a>
					<a href="#" data-categoria="libros">Libros <i className="fas fa-angle-right"></i></a>
					<a href="#" data-categoria="ropa-y-accesorios">Ropa y Accesorios <i className="fas fa-angle-right"></i></a>
					<a href="#" data-categoria="hogar-y-cocina">Hogar y Cocina <i className="fas fa-angle-right"></i></a>
					<a href="#" data-categoria="juegos-y-juguetes">Juegos y Juguetes <i className="fas fa-angle-right"></i></a>
					<a href="#" data-categoria="salud-y-belleza">Salud y Belleza <i className="fas fa-angle-right"></i></a>
					<a href="#" data-categoria="alimentos-y-bebidas">Alimentos y Bebidas <i className="fas fa-angle-right"></i></a>
				</div>

				<div className="contenedor-subcategorias">
					<div className="subcategoria " data-categoria="tecnologia-y-computadoras">
						<div className="enlaces-subcategoria">
							<button className="btn-regresar"><i className="fas fa-arrow-left"></i>Regresar</button>
							<h3 className="subtitulo">Tecnología y Computadoras</h3>
							<a href="#">Laptops</a>
							<a href="#">Tablets</a>
							<a href="#">Computadoras de Escritorio</a>
							<a href="#">Monitores</a>
							<a href="#">Componentes</a>
						</div>

						<div className="banner-subcategoria">
							<a href="#">
								<img src="./img/tecnologia-banner-1.png" alt=""></img>
							</a>
						</div>

						<div className="galeria-subcategoria">
							<a href="#">
								<img src="./img/tecnologia-galeria-1.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/tecnologia-galeria-2.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/tecnologia-galeria-3.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/tecnologia-galeria-4.png" alt=""></img>
							</a>
						</div>
					</div>

					<div className="subcategoria" data-categoria="libros">
						<div className="enlaces-subcategoria">
							<button className="btn-regresar"><i className="fas fa-arrow-left"></i>Regresar</button>
							<h3 className="subtitulo">Libros</h3>
							<a href="#">Top Sellers</a>
							<a href="#">Ciencia Ficcion</a>
							<a href="#">Fantasia</a>
							<a href="#">Miedo</a>
						</div>

						<div className="banner-subcategoria">
							<a href="#">
								<img src="./img/libros-banner-1.png" alt=""></img>
							</a>
						</div>

						<div className="galeria-subcategoria">
							<a href="#">
								<img src="./img/libros-galeria-1.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/libros-galeria-2.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/libros-galeria-3.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/libros-galeria-4.png" alt=""></img>
							</a>
						</div>
					</div>

					<div className="subcategoria" data-categoria="ropa-y-accesorios">
						<div className="enlaces-subcategoria">
							<button className="btn-regresar"><i className="fas fa-arrow-left"></i>Regresar</button>
							<h3 className="subtitulo">Ropa y Accesorios</h3>
							<a href="#">Ropa</a>
							<a href="#">Zapatos</a>
							<a href="#">Accesorios</a>
							<a href="#">Relojes</a>
						</div>

						<div className="banner-subcategoria">
							<a href="#">
								<img src="./img/ropa-banner-1.png" alt=""></img>
							</a>
						</div>

						<div className="galeria-subcategoria">
							<a href="#">
								<img src="./img/ropa-galeria-1.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/ropa-galeria-2.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/ropa-galeria-3.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/ropa-galeria-4.png" alt=""></img>
							</a>
						</div>
					</div>

					<div className="subcategoria" data-categoria="hogar-y-cocina">
						<div className="enlaces-subcategoria">
							<button className="btn-regresar"><i className="fas fa-arrow-left"></i>Regresar</button>
							<h3 className="subtitulo">Hogar y Cocina</h3>
							<a href="#">Cocina</a>
							<a href="#">Electrodomesticos</a>
							<a href="#">Limpieza</a>
							<a href="#">Baño</a>
							<a href="#">Decoracion</a>
							<a href="#">Arte</a>
							<a href="#">Manualidades</a>
							<a href="#">Jardin</a>
						</div>

						<div className="banner-subcategoria">
							<a href="#">
								<img src="./img/hogar-banner-1.png" alt=""></img>
							</a>
						</div>

						<div className="galeria-subcategoria">
							<a href="#">
								<img src="./img/hogar-galeria-1.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/hogar-galeria-2.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/hogar-galeria-3.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/hogar-galeria-4.png" alt=""></img>
							</a>
						</div>
					</div>

					<div className="subcategoria" data-categoria="juegos-y-juguetes">
						<div className="enlaces-subcategoria">
							<button className="btn-regresar"><i className="fas fa-arrow-left"></i>Regresar</button>
							<h3 className="subtitulo">Juegos y Juguetes</h3>
							<a href="#">Juguetes</a>
							<a href="#">Juegos de Mesa</a>
							<a href="#">Aire Libre</a>
							<a href="#">Muñecas</a>
						</div>

						<div className="banner-subcategoria">
							<a href="#">
								<img src="./img/juegos-banner-1.png" alt=""></img>
							</a>
						</div>

						<div className="galeria-subcategoria">
							<a href="#">
								<img src="./img/juegos-galeria-1.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/juegos-galeria-2.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/juegos-galeria-3.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/juegos-galeria-4.png" alt=""></img>
							</a>
						</div>
					</div>

					<div className="subcategoria" data-categoria="salud-y-belleza">
						<div className="enlaces-subcategoria">
							<button className="btn-regresar"><i className="fas fa-arrow-left"></i>Regresar</button>
							<h3 className="subtitulo">Salud y Belleza</h3>
							<a href="#">Cuidado de la Piel</a>
							<a href="#">Maquillaje</a>
							<a href="#">Lociones</a>
							<a href="#">Shampoo</a>
						</div>

						<div className="banner-subcategoria">
							<a href="#">
								<img src="./img/belleza-banner-1.png" alt=""></img>
							</a>
						</div>

						<div className="galeria-subcategoria">
							<a href="#">
								<img src="./img/belleza-galeria-1.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/belleza-galeria-2.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/belleza-galeria-3.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/belleza-galeria-4.png" alt=""></img>
							</a>
						</div>
					</div>

					<div className="subcategoria" data-categoria="alimentos-y-bebidas">
						<div className="enlaces-subcategoria">
							<button className="btn-regresar"><i className="fas fa-arrow-left"></i>Regresar</button>
							<h3 className="subtitulo">Alimentos y Bebidas</h3>
							<a href="#">Alimentos</a>
							<a href="#">Bebidas</a>
						</div>

						<div className="banner-subcategoria">
							<a href="#">
								<img src="./img/comida-banner-1.png" alt=""></img>
							</a>
						</div>

						<div className="galeria-subcategoria">
							<a href="#">
								<img src="./img/comida-galeria-1.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/comida-galeria-2.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/comida-galeria-3.png" alt=""></img>
							</a>
							<a href="#">
								<img src="./img/comida-galeria-4.png" alt=""></img>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
  </nav>
    </>
  );
}
