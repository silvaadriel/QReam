import React from 'react';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { SafeAreaView } from './styles';

const Container: React.FC = ({ children }) => (
  <SafeAreaView>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
);

export default Container;
