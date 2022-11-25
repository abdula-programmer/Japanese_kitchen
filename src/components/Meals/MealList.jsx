import styles from './MealList.module.css';
import Card from './../UI/Card';
import MealItem from './MealItem';

const DUMMY_MEALS = [
  {
    id: "m1",
    name: 'Ролл "Наоми"',
    description:
      "Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Спайс в лососе",
    description: "Рис, лосось, соус спайс",
    price: 3.99,
  },
  {
    id: "m3",
    name: "Суши с угрем",
    description: "Угорь копченый, соус унаги, кунжут",
    price: 4.99,
  },
  {
    id: "m4",
    name: 'Салат "Поке с лососем"',
    description:
      "Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый",
    price: 7.99,
  },
];

const MealList = () => {
  
   const mealList = DUMMY_MEALS.map(({id ,name, description, price}) => <MealItem key={id} id={id} name={name} description={description} price={price}/>)
  
   return (
    <section className={styles.meals}>
      <ul>
         <Card>
            {mealList}
         </Card>
         
      </ul>
    </section>
  );
};

export default MealList;
