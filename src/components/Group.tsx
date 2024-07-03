import { Text, Button, ButtonProps } from 'tamagui';

type Props = ButtonProps & {
  name: string;
  isActive: boolean;
};

export function Group({ name, isActive, onPress }: Props) {
  return (
    <Button
      unstyled
      mr='$3'
      w='$24'
      h='$10'
      borderRadius='$1'
      bg='$gray600'
      justifyContent='center'
      alignItems='center'
      overflow='hidden'
      borderColor={isActive ? '$green500' : ''}
      borderWidth={isActive ? 1 : 0}
      pressStyle={{
        borderColor: '$green500',
        borderWidth: 1,
        borderRadius: '$1',
      }}
      onPress={onPress}
    >
      <Text
        color={isActive ? '$green500' : '$gray200'}
        textTransform='uppercase'
        fontSize='$xs'
        fontWeight='bold'
      >
        {name}
      </Text>
    </Button>
  );
}
