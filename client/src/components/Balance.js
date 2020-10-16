import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import PropTypes from 'prop-types'

const Balance = props => {
  const {transactions} = useContext(GlobalContext)

  const amount = transactions.map(transaction => transaction.amount)

  const total = amount.reduce((a,b) => (a+=b), 0).toFixed(2)
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  )
}

Balance.propTypes = {

}

export default Balance
