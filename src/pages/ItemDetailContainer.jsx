import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Tecnologia from '../data/Tecnologia.json';


const ItemDetailContainer = () => {
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);
  
  const { productsID } = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = Tecnologia.find((item) => item.id === productsID);
        setProductData(product);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productsID]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="divPadre">
      <div className="Cards ">
        <div key={productData.id} className="Card">
          <div className="Title">{productData.title}</div>
          <div className="Images">
            {productData.images.map((image, index) => (
              <img key={index} src={image} alt="productos-disponibles" />
            ))}
          </div>
        </div>
      </div>
      <div className="Description"><h2>Descripcion</h2>{productData.description}
      <div className="Previous">{productData.previous_price}</div>
          <div className="Price">${productData.price}</div>
          <div className="Stock">{productData.stock}</div>
          <button className="Boton-Agregar">Agregar al Carrito</button>
      </div>
    </div>
  );
      
      
};

export default ItemDetailContainer;
