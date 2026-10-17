import React, { FC, useCallback } from 'react';
import { View, ViewStyle, TouchableOpacity, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { DASHBOARD_ROUTE_NAMES, DashboardParamsList } from '@/features/dashboard/navigation';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { BaseIcon, BaseIconName, BaseIconSize, BaseText, hideBootSplash } from '@/shared';
import { useNavigationTheme } from '@/app/providers';
import { NewAppScreen } from '@react-native/new-app-screen';

type DashboardScreenProps = StackScreenProps<DashboardParamsList, DASHBOARD_ROUTE_NAMES.Dashboard>;

interface DashboardScreenData extends DashboardScreenProps {}

export const DashboardScreen: FC<DashboardScreenData> = ({ navigation, route }) => {
  const { t } = useTranslation();

  const navigationTheme = useNavigationTheme();

  const safeAreaInsets = useSafeAreaInsets();

  console.log('@@@@@ useNavigationTheme', navigationTheme);

  const theme = useTheme();
  const styles = useStyles(theme);

  const { palette } = theme || {};
  const { colors } = palette || {};

  console.error('@@@@@ theme', theme);

  console.log('__DEV__', __DEV__);

  useFocusEffect(
    useCallback(() => {
      hideBootSplash(true);
    }, [navigation, route])
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            accessible={true}
            onPress={() => {
              navigationTheme.toggleTheme();
            }}
          >
            <BaseText>Change Theme</BaseText>
          </TouchableOpacity>
        </View>

        <BaseIcon name={BaseIconName.Close} size={BaseIconSize.md} color='red' />
        <BaseIcon name={BaseIconName.User} size={BaseIconSize.lg} color='red' />
        <BaseIcon name={BaseIconName.Bars} size={BaseIconSize.xl} color='red' />
        <BaseIcon name={BaseIconName.Calendar} size={BaseIconSize.xxl} color='red' />
        <NewAppScreen templateFileName='App.tsx' safeAreaInsets={safeAreaInsets} />
      </ScrollView>
    </SafeAreaView>
  );
};
