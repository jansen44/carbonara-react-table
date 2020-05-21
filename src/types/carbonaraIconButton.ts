export type CarbonaraIconButtonProps = {
  className?: string,
  onClick: () => void,
  icon: CarbonaraIconButtons
  disabled?: boolean
}

// ? Possible available icons
export type CarbonaraIconButtons = 'leftArrow' | 'rightArrow'
