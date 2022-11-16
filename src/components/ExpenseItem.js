import './ExpenseItem.css'
function ExpenseItem(props) {
    const Month = props.date.toLocaleString('en-US', { month: 'long' });
    const Day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const Year = props.date.getFullYear();

    return (
        <div className="expense-item">
            <div>
                <div>{Year}</div>
                <div>{Month}</div>
                <div>{Day}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
