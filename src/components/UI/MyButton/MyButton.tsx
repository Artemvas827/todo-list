//@ts-ignore
import s from './MyButton.module.css'

type MyButtonPropsType = {
  children: string
  onClick?: any
  onMouseDown?: any
  small?: boolean
  disabled?: boolean
}

export const MyButton: React.FC<MyButtonPropsType> = ({
  children,
  small,
  ...props
}) => {
  return (
    <button className={`${s.button} ${small ? s.small : ''}`} {...props}>
      {children}
    </button>
  )
}
