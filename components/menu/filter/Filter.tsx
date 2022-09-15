import CustomSelect from 'components/reusable/custom_select/CustomSelect'
import React, { useState, useCallback } from 'react'
import styles from './Filter.module.css'

const genderOptions = ['All', 'Male', 'Female']
const sizeOptions = ['All', 'Small', 'Medium', 'Large']
const categoryOptions = ['All', 'Vegetarian', 'Vegan', 'Gluten Free']

function Filter() {
  const [gender, setGender] = useState('All')
  const [size, setSize] = useState('All')
  const [category, setCategory] = useState('All')

  const handleGenderChange = useCallback((value: string) => {
    console.log(value)
    setGender(value)
  }, [])

  const handleSizeChange = useCallback((value: string) => {
    setSize(value)
  }, [])

  const handleCategoryChange = useCallback((value: string) => {
    setCategory(value)
  }, [])

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Choose a ration for yourself</h2>
      <div className={styles.inputs_wrap}>
        <CustomSelect initialValue={gender} options={genderOptions} onChange={handleGenderChange} label='Gender' />
        <CustomSelect initialValue={size} options={sizeOptions} onChange={handleSizeChange} label='Size' />
        <CustomSelect initialValue={category} options={categoryOptions} onChange={handleCategoryChange} label='Category' />
      </div>
    </div>
  )
}

export default Filter
