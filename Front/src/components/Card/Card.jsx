import styles from './Card.module.css'

function Card({id,name,species,gender,image,onClose}) {
   return (
      <div className={styles.container}>
         <button className={styles.claseButton} onClick={() => onClose(id)}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt={name} className={styles.img} />
      </div>
   );
}

export default Card;