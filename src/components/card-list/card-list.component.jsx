import Card from "../card/card.component";
import './card-list.styles.css';
 const CardList = ({monster}) => (

            <div className="card-list">
                {
                    monster.map((monster) => (
                        <Card monster = {monster} />
                    ))
                }
            </div>
 );
export default CardList;