import { Input as TamaguiInput, InputProps } from 'tamagui';

export function Input({ ...rest }: InputProps) {
  return (
    <TamaguiInput
      bg='$gray700'
      h='$14'
      ph='$4'
      borderWidth={0}
      fontSize='$md'
      color='$white'
      fontFamily='$body'
      mb='$4'
      borderRadius='$2'
      placeholderTextColor='$gray300'
      focusStyle={{
        bg: '$gray700',
        borderWidth: 1,
        borderColor: '$green500',
      }}
      {...rest}
    />
  );
}
