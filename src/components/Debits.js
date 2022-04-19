import React, {useState, useEffect} from 'react';
import '../styles/debits.css';

function Credits() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://moj-api.herokuapp.com/debits") // Fetch API
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true); // Set isLoaded state to true
                    setItems(result); // Set items to results from API
                },
                // Handle errors
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(items);
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h1 className='title'>Debits</h1>
                <div>
                    <form>
                        <input
                            type='text'
                            name='description'
                            placeholder='Enter description of debit'           
                        />
                        <input
                            type='number'
                            name='amount'
                        />
                        <button type='submit' onSubmit={handleSubmit}>Add Debit</button>
                    </form>
                </div>
                <ul className='list-container'>
                    {items.map(item => (
                        <li key={item.id}>
                            <h3>Description: </h3> {item.description}
                            <h3>Amount: </h3> {item.amount}
                            <h3>Date: </h3> {item.date}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Credits