import { ChangeEvent } from 'react'
//@ts-ignore
import s from './MySelect.module.css'

type MySelectPropsType = {
  options: Array<string>
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const MySelect: React.FC<MySelectPropsType> = ({
  options,
  ...props
}) => {
  return (
    <select className={s.select} {...props}>
      <option>Please choose one option</option>
      {options.map((option, index) => {
        return <option key={index}>{option}</option>
      })}
    </select>
  )
}
