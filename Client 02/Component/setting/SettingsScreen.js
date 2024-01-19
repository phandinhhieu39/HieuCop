import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SettingPage = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const navigation = useNavigation();

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };
  const handleLoginPress = () => {
    navigation.navigate('Login');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Thông báo</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Cho phép thông báo</Text>
          <Switch value={notificationsEnabled} onValueChange={handleNotificationsToggle} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Giao diện</Text>
        <TouchableOpacity style={styles.settingItem} onPress={handleDarkModeToggle}>
          <Text style={styles.settingLabel}>Chế độ tối</Text>
          <Switch value={darkModeEnabled} onValueChange={handleDarkModeToggle} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Ngôn ngữ và khu vực</Text>
          <FontAwesome name="chevron-right" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Tài khoản</Text>
          <FontAwesome name="chevron-right" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Bảo mật</Text>
          <FontAwesome name="chevron-right" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Trợ giúp và hỗ trợ</Text>
          <FontAwesome name="chevron-right" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Về chúng tôi</Text>
          <FontAwesome name="chevron-right" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.settingItem} onPress={handleLoginPress}>
          <Text style={styles.settingLabel}>Đăng xuất</Text>
          <MaterialIcons name="logout" size={20} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  settingLabel: {
    fontSize: 16,
  },
});

export default SettingPage;