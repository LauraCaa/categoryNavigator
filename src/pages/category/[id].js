import "@/assets/id.css";
import { useRouter } from 'next/router';
import Data from "@/utils/categories.json";
import { useEffect, useState } from 'react';

export default function CategoryPage() {
    const router = useRouter();
    //Es la informacion que va despues del ? de la url en nuestro caso el id
    const { id } = router.query;
    const [category, setCategory] = useState(null);

    useEffect(() => {
        if (id) {
            const foundCategory = Data.find(categoryData => categoryData.id === id);
            setCategory(foundCategory);
        }
    }, [id]);

    if (!category) {
        return <p>Category not found</p>;
    };

    return(
        <main>
            <div className={`category-page ${category.name.toLowerCase()}`}>
                <button onClick={() => router.push('/')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                </button>
                <div className="category-page-header">
                    <h3>Category</h3>
                    <h1>{category.name}</h1>
                    <span>{category.articles} articles</span>
                </div>
                <p>{category.content}</p>
                <div>
                    <img src={category.image} alt={category.name} />
                </div>
            </div>
        </main>
    );
}
