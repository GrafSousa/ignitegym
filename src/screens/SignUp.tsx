import { YStack, Image, Text, Heading, ScrollView } from 'tamagui';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignUp() {
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <YStack f={1} bg='$gray700' ph='$10'>
        <Image
          source={BackgroundImg}
          alt='Pessoas treinando'
          resizeMode='contain'
          position='absolute'
        />

        <YStack mv='$32' alignItems='center'>
          <LogoSvg />

          <Text color='$gray100' fontSize='$sm'>
            Treine sua mente e o seu corpo
          </Text>
        </YStack>

        <Heading
          color='$gray100'
          mb='$4'
          fontSize='$xl'
          fontFamily='$heading'
          textAlign='center'
        >
          Crie sua conta
        </Heading>

        <Input placeholder='Nome' />

        <Input
          placeholder='E-mail'
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <Input placeholder='Senha' secureTextEntry />

        <Button title='Criar e acessar' />

        <Button title='Voltar para o login' variant='outlined' mt='$24' />
      </YStack>
    </ScrollView>
  );
}
