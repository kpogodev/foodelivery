import CustomSelect from 'components/reusable/custom_select/CustomSelect'
import { useContext } from 'react'
import { MenuContext } from 'components/homepage/menu/MenuContext'
import styles from './Filter.module.css'

const genderOptions = ['All', 'Male', 'Female']
const sizeOptions = ['All', 'Small', 'Medium', 'Large']
const preferenceOptions = ['All', 'Vegetarian', 'Vegan', 'Gluten Free']

function Filter() {
  const ctx = useContext(MenuContext)

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Choose a ration for yourself</h2>
      <div className={styles.inputs_wrap}>
        <CustomSelect
          initialValue={ctx.genderFilter}
          options={genderOptions}
          onChange={ctx.handleGenderChange}
          label='Gender'
        />
        <CustomSelect
          initialValue={ctx.sizeFilter}
          options={sizeOptions}
          onChange={ctx.handleSizeChange}
          label='Size'
        />
        <CustomSelect
          initialValue={ctx.preferenceFilter}
          options={preferenceOptions}
          onChange={ctx.handlePreferenceChange}
          label='Preference'
        />
      </div>
    </div>
  )
}

export default Filter
