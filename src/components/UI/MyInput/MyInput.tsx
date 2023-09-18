//@ts-ignore
import s from './MyInput.module.css'

export const MyInput = (props: any) => {
  return <input className={s.input} {...props} />
}
