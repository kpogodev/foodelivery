import React, { useId } from 'react'
import styles from './CustomSelect.module.css'
import { v4 as uuid } from 'uuid'

interface CustomSelectProps {
  options: string[]
  label?: string
  initialValue: string
  onChange: (value: string) => void
}

function CustomSelect({ options, label, initialValue, onChange }: CustomSelectProps) {
  const selectId = useId()

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    value
      .split(' ')
      .map((word) => word.charAt(0).toLowerCase)
      .join('-')
    onChange(value)
  }

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={selectId}>
          {label}
        </label>
      )}
      <div className={styles.select}>
        <select id={selectId} onChange={handleSelect} value={initialValue}>
          {options.map((option) => (
            <option key={uuid()} className={styles.option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default CustomSelect
