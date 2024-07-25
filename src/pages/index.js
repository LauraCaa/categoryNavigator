import "@/assets/styles.css";
import { useRouter } from 'next/router';
import Data from "@/utils/categories.json";

export default function Categories() {
    const router = useRouter();

    function handleClick(id) {
      //Cambia la url en la que esta a la que se le asigne
      router.push(`/category/${id}`);
    };

    const columns = [[], [], []];
    Data.forEach((category, index) => {
      //divide cada index en 3 y lo oragniza dependiendo su grupo 0, 1 o 2
      columns[index % 3].push(category);
    });

    return (
      <div className="main-container">
          <div className="title">
            <h1>Categories</h1>
          </div>
          <div className="categories-container">
            {columns.map((column, columnIndex) => (
            <div key={columnIndex}>
              {column.map((category, index) => (
              <div className={`category ${category.name.toLowerCase()}`} key={index}>
                <button onClick={() => handleClick(category.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                  </svg>
                </button>
                <h3>{category.name}</h3>
                <span>{category.articles} articles</span>
                <p>{category.content}</p>
                <div>
                  <img src={category.image} alt={category.name} />
                </div>
              </div>
              ))}
            </div>
            ))}
          </div>
      </div>
    );
}
