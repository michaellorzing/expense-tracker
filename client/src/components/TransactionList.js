import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import Transaction from './Transaction'
import { GlobalContext } from '../context/GlobalState'

const TransactionList = props => {
  const {transactions, getTransactions} = useContext(GlobalContext)

  useEffect(() => {
    getTransactions()
  }, [])
  
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
        
      </ul>
    </>
  )
}

TransactionList.propTypes = {

}

export default TransactionList
