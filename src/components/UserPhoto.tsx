import { Avatar, AvatarImageProps, SizeTokens } from 'tamagui';

type Props = AvatarImageProps & {
  size: SizeTokens;
};

export function UserPhoto({ size, mr, ...rest }: Props) {
  return (
    <Avatar
      mr={mr}
      borderWidth='$0.5'
      borderColor='$gray400'
      circular
      size={size}
    >
      <Avatar.Image alt='Imagem do usuário' {...rest} />

      <Avatar.Fallback delayMs={600} bg='$red' />
    </Avatar>
  );
}
