import { useNavigation } from '@react-navigation/native';
import { YStack, Image, Text, Heading, ScrollView } from 'tamagui';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate('signUp');
  }

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <YStack f={1} ph='$10'>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
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
          Acesse sua conta
        </Heading>

        <Input
          placeholder='E-mail'
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <Input placeholder='Senha' secureTextEntry />

        <Button title='Acessar' />

        <Text
          color='$gray100'
          fontSize='$sm'
          mb='$3'
          mt='$28'
          fontFamily='$body'
          textAlign='center'
        >
          Ainda não tem acesso?
        </Text>

        <Button
          title='Criar conta'
          variant='outlined'
          onPress={handleNewAccount}
        />
      </YStack>
    </ScrollView>
  );
}
