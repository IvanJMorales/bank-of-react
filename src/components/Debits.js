import React, {useState, useEffect} from 'react';
import '../styles/debits.css';




function Debits(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [description, setDebitInfo] = useState('');
    const [amount, setDebitAmount] = useState('');

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://moj-api.herokuapp.com/credits") // Fetch API
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

    const addItem = (e) => {
        e.preventDefault();
        const newItem = {description, amount}
        setItems([ ... items, {
            id: items.length,
            description: description,
            amount: amount,
            date: new Date().toLocaleString
        }])
        console.log(newItem)
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h1 className='title'>Debits</h1>
                <h3>Account Balance: {props.accountBalance}</h3>
                <div>
                    <form>
                        <input
                            type='text'
                            name='description'
                            value={description}
                            placeholder='Enter description of debit'
                            onChange={(e) => setDebitInfo(e.target.value)}
                        />
                        <input
                            type='number'
                            name='amount'
                            value={amount}
                            placeholder='Enter amount' 
                            onChange={(e) => setDebitAmount(e.target.value)}
                        />
                        <button onClick={addItem}>Add Debit</button>
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
                {console.log(items)}
            </div>
        );
    }
}

export default Debits