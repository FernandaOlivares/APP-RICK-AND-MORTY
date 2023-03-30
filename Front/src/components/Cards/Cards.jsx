import Card from '../Card/Card.jsx';
import styles from './Cards.module.css'

function Cards({characters,onClose}) {

   return (
      <div className={styles.cardsContainer}>
         {
            characters.map(({ id, name, species, gender, image }) => {
               return (
                 <Card
                   id={id} // agregar una propiedad "key" única
                   name={name}
                   species={species}
                   gender={gender}
                   image={image}
                   onClose={onClose}
                 />
               )
             })
         }
      </div>);
   }

export default Cards;