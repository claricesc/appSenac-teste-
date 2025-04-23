import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Switch } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { createAvatar } from '@dicebear/core';
import { funEmoji } from '@dicebear/collection';
import { auth } from './Firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [avatarSvg, setAvatarSvg] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setEmail(user.email);
      setNome(user.displayName || 'Nome não informado');
      const avatar = createAvatar(funEmoji, {
        seed: user.email,
      }).toString();
      setAvatarSvg(avatar);
    } else {
      setEmail('Usuário não autenticado');
    }
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Alert.alert('Logout', 'Você saiu com sucesso!');
        navigation.replace('Login');
      })
      .catch((error) => {
        Alert.alert('Erro', 'Não foi possível sair. Tente novamente.');
        console.error(error);
      });
  };

  const handleEditProfile = () => {
    navigation.navigate('EditarPerfil');
  };

  return (
    <View style={styles.container}>
      {avatarSvg ? <SvgXml xml={avatarSvg} style={styles.profileImage} /> : null}

      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.info}>{nome}</Text>

      <Text style={styles.label}>E-mail do usuário:</Text>
      <Text style={styles.info}>{email}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
          <Text style={styles.buttonText}>Sair da conta</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  info: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#005594',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#f78b1f',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
