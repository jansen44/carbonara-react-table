export type IconButtons = 'leftArrow' | 'rightArrow'

export type IconButtonProps = {
  className?: string,
  onClick: () => void,
  icon: IconButtons
  disabled?: boolean
}
