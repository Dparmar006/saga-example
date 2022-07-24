import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../../components/common/Card'
import { getMedicines } from '../../../redux/actions'
const ListMedicines = () => {
  const dispatch = useDispatch()
  const { medicines } = useSelector(state => state.medicines)
  useEffect(() => {
    dispatch(getMedicines())
  }, [])

  return (
    <React.Fragment>
      <div className='flex gap-2 p-5'>
        {medicines.map(med => (
          <Card title={med.name} btnText='Buy' />
        ))}
      </div>
    </React.Fragment>
  )
}

export default ListMedicines
