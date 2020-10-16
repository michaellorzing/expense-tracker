import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = props => {
  const {addTransaction} = useContext(GlobalContext)
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const onSubmit = e => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
    setText('')
    setAmount(0)
  }

  return (
    <div>
       <h3>Add new transaction</h3>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-control">
          <label>Text</label>
          <input type="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label 
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </div>
        <button className="btn" >Add transaction</button>
      </form>
    </div>
  )
}

AddTransaction.propTypes = {

}

export default AddTransaction
