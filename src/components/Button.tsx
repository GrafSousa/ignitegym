import { Button as TamaguiButton, ButtonProps, Text } from 'tamagui';

type Props = Omit<ButtonProps, 'variant'> & {
  title: string;
  variant?: 'solid' | 'outlined';
};

export function Button({ title, variant = 'solid', ...rest }: Props) {
  return (
    <TamaguiButton
      w='full'
      height='$14'
      bg={variant === 'outlined' ? 'transparent' : '$green700'}
      borderWidth={variant === 'outlined' ? 1 : 0}
      borderColor='$green500'
      borderRadius='$2'
      pressStyle={{
        bg: variant === 'outlined' ? '$gray500' : '$green500',
      }}
      {...rest}
    >
      <Text
        color={variant === 'outlined' ? '$green500' : '$white'}
        fontFamily='$heading'
        fontSize='$sm'
      >
        {title}
      </Text>
    </TamaguiButton>
  );
}
