import React, { Fragment, useMemo, useCallback, useRef } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import BottomSheet, { BottomSheetModal, BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { BASE_ROUTE_NAMES } from '@/app/navigation';
import { MAIN_ROUTE_NAMES } from '@/app/navigation/drawer';
import { ROOT_ROUTE_NAMES } from '@/app/navigation/root';
import { APP_ROUTE_NAMES } from '@/app/navigation/root/tabs';
import {
  DASHBOARD_ROUTE_NAMES
  //   EVENTS_ROUTE_NAMES,
  //   COMMUNITIES_ROUTE_NAMES,
  //   SEARCH_ROUTE_NAMES,
  //   PROFILE_ROUTE_NAMES
} from '@/features/dashboard';
import { useNavigationTheme } from '@/app/providers';
import { Languages, fallbackLng } from '@/shared';
import {
  BaseIcon,
  BaseIconName,
  BaseIconSize,
  //   getLanguageName,
  //   BaseButton,
  //   BaseButtonRadius,
  //   BaseButtonAngle,
  //   BaseButtonColor,
  //   BaseButtonLoader,
  BaseText,
  BaseTextVariant,
  //   BaseCheckBox,
  config
  //   BaseButtonIconPosition,
  //   getActiveRouteName
} from '@/shared';
import { useStyles } from './styles';

const {
  components: {
    drawer: {
      buttons: { activeOpacity, hitSlop }
    }
  }
} = config || {};

interface LabelProps {
  focused: boolean;
}

interface DrawerItemProps {
  label: string;
  focused?: boolean;
  iconName: BaseIconName;
  onPress: () => void;
  divider?: boolean;
  disabled?: boolean;
}

export const DrawerScreen = ({ state, navigation, ...rest }: DrawerContentComponentProps) => {
  const { t, i18n } = useTranslation();

  const { toggleTheme } = useNavigationTheme();

  //   const activeRouteName = getActiveRouteName(state);

  const isAuthorized = true;

  const toggleDrawer = useCallback(() => {
    navigation.toggleDrawer();
  }, [navigation]);

  const theme = useTheme();
  const styles = useStyles(theme);

  const {
    dark,
    palette: {
      colors: { white, gray, blue }
    }
  } = theme;

  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log('handleSheetChanges', index);
  // }, []);

  const handleClosePress = () => bottomSheetRef?.current?.close();

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handlePresentModalPress = useCallback(() => {
    // bottomSheetRef.current?.present();
    bottomSheetRef.current?.expand();
  }, []);

  //   const languageName = useMemo(() => {
  //     const langCode = i18n.language;
  //     const langName = getLanguageName(langCode);
  //     return langName;
  //   }, [i18n]);

  //   const themeIconName = useMemo(() => {
  //     return dark ? BaseIconName.DarkTheme : BaseIconName.LightTheme;
  //   }, [dark]);

  /*
  const drawerItems: DrawerItemProps[] = useMemo(
    () => [
      {
        label: t('screens.menu.my-profile'),
        iconName: BaseIconName.User,
        disabled: !isAuthorized,
        focused: activeRouteName === PROFILE_ROUTE_NAMES.Profile,
        onPress: () => {
          navigation.navigate(BASE_ROUTE_NAMES.Base, {
            screen: MAIN_ROUTE_NAMES.Main,
            params: {
              screen: ROOT_ROUTE_NAMES.App,
              params: {
                screen: APP_ROUTE_NAMES.Profile,
                params: {
                  screen: PROFILE_ROUTE_NAMES.Profile
                }
              }
            }
          });
        }
      },
      {
        label: languageName,
        iconName: BaseIconName.Language,
        divider: true,
        onPress: () => {
          handlePresentModalPress();
        }
      },
      {
        label: t('screens.menu.events'),
        iconName: BaseIconName.Events,
        focused: activeRouteName === EVENTS_ROUTE_NAMES.Events,
        onPress: () => {
          navigation.navigate(BASE_ROUTE_NAMES.Base, {
            screen: MAIN_ROUTE_NAMES.Main,
            params: {
              screen: ROOT_ROUTE_NAMES.App,
              params: {
                screen: APP_ROUTE_NAMES.Events,
                params: {
                  screen: EVENTS_ROUTE_NAMES.Events
                }
              }
            }
          });
        }
      },
      {
        label: t('screens.menu.communities'),
        iconName: BaseIconName.CommunitiesBottom,
        focused: activeRouteName === COMMUNITIES_ROUTE_NAMES.Communities,
        onPress: () => {
          navigation.navigate(BASE_ROUTE_NAMES.Base, {
            screen: MAIN_ROUTE_NAMES.Main,
            params: {
              screen: ROOT_ROUTE_NAMES.App,
              params: {
                screen: APP_ROUTE_NAMES.Communities,
                params: {
                  screen: COMMUNITIES_ROUTE_NAMES.Communities
                }
              }
            }
          });
        }
      },
      {
        label: t('screens.menu.create-activity'),
        iconName: BaseIconName.CreateEvent,
        divider: true,
        onPress: () => {}
      },
      {
        label: t('screens.menu.ideas-feedback'),
        iconName: BaseIconName.Feedback,
        divider: true,
        onPress: () => {}
      },
      {
        label: t('screens.menu.privacy-policy'),
        iconName: BaseIconName.PrivacyPolicy,
        onPress: () => {}
      }

      /**
      {
        label: t('screens.menu.privacy-policy'),
        iconName: BaseIconName.PrivacyPolicy
      },
      {
        label: t('screens.menu.privacy-policy'),
        iconName: BaseIconName.PrivacyPolicy
      },
      {
        label: t('screens.menu.privacy-policy'),
        iconName: BaseIconName.PrivacyPolicy
      },
      {
        label: t('screens.menu.privacy-policy'),
        iconName: BaseIconName.PrivacyPolicy
      },
      {
        label: t('screens.menu.privacy-policy'),
        iconName: BaseIconName.PrivacyPolicy
      },
      {
        label: t('screens.menu.privacy-policy'),
        iconName: BaseIconName.PrivacyPolicy
      },
      {
        label: t('screens.menu.privacy-policy'),
        iconName: BaseIconName.PrivacyPolicy
      },
      {
        label: t('screens.menu.privacy-policy'),
        iconName: BaseIconName.PrivacyPolicy
      },
      {
        label: t('screens.menu.privacy-policy'),
        iconName: BaseIconName.PrivacyPolicy
      },
      {
        label: t('screens.menu.privacy-policy'),
        iconName: BaseIconName.PrivacyPolicy
      }
        
    ],
    [t, languageName, isAuthorized, navigation, activeRouteName, handlePresentModalPress]
  );

  const DrawerItem = useCallback(
    ({ label, iconName, divider, disabled, onPress, focused }: DrawerItemProps) => {
      const color = disabled ? gray['500'] : focused ? blue['500'] : white.base;
      const onPressHandler = () => {
        if (disabled) {
          return;
        }
        if (focused) {
          toggleDrawer();
        }
        // navigation.navigate('MyModal');
        onPress && typeof onPress === 'function' && onPress();
      };

      return (
        <Fragment>
          <TouchableOpacity
            style={styles.drawerItem}
            activeOpacity={disabled ? 1 : activeOpacity}
            hitSlop={hitSlop}
            onPress={onPressHandler}
          >
            <BaseIcon name={iconName} size={BaseIconSize.lg} color={color} />
            <BaseText variant={BaseTextVariant.CaptionH1} color={color}>
              {label}
            </BaseText>
          </TouchableOpacity>
          {divider ? (
            <View style={styles.dividerBox}>
              <View style={styles.divider} />
            </View>
          ) : null}
        </Fragment>
      );
    },
    [styles, gray, white, blue, toggleDrawer]
  );

  const drawerItemList = useMemo(() => {
    return drawerItems.map(
      ({ label, iconName, divider, disabled, onPress, focused }: DrawerItemProps, index: number) => {
        const key = `${label.replace(' ', '-')}-${index}`;
        return (
          <DrawerItem
            key={key}
            label={label}
            iconName={iconName}
            divider={divider}
            disabled={disabled}
            onPress={onPress}
            focused={focused}
          />
        );
      }
    );
  }, [drawerItems]);

  const actionButtons = useMemo(() => {
    return (
      <View style={styles.buttonBox}>
        {isAuthorized ? (
          <BaseButton
            labelColor={white.base}
            label={t('screens.menu.log-out')}
            iconPosition={BaseButtonIconPosition.Left}
            contentGap={24}
            icon={<BaseIcon name={BaseIconName.Logout} size={BaseIconSize.lg} color={white.base} />}
            // loader={BaseButtonLoader.Ellipsis}
          />
        ) : (
          <Fragment>
            <BaseButton
              containerStyle={styles.signinBtn}
              labelColor={white.base}
              uppercase={true}
              label={t('screens.menu.sign-in')}
              // loader={BaseButtonLoader.Ellipsis}
            />
            <BaseButton
              containerStyle={styles.signupBtn}
              uppercase={true}
              label={t('screens.menu.register')}
              labelColor={blue['300']}
              radius={BaseButtonRadius.RightVertical}
              color={BaseButtonColor.White}
              angle={BaseButtonAngle.BottomLeft}
              // loader={BaseButtonLoader.Ellipsis}
            />
          </Fragment>
        )}
      </View>
    );
  }, [t, styles, white, isAuthorized]);
*/
  const snapPoints = useMemo(() => ['50%', '100%'], []);

  const renderBackdrop = useCallback(
    (props) => <BottomSheetBackdrop {...props} disappearsOnIndex={1} appearsOnIndex={2} />,
    []
  );

  return (
    <View style={styles.drawerScreen}>
      <View style={styles.drawerHeader}>
        <View style={styles.drawerTheme}>
          <TouchableOpacity
            style={styles.iconButton}
            activeOpacity={activeOpacity}
            hitSlop={hitSlop}
            onPress={() => {}}
          >
            <BaseIcon name={BaseIconName.FontSizeUp} size={BaseIconSize.lg} color={white.base} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            activeOpacity={activeOpacity}
            hitSlop={hitSlop}
            onPress={toggleTheme}
          >
            <BaseIcon name={themeIconName} size={BaseIconSize.lg} color={white.base} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.iconButton}
          activeOpacity={activeOpacity}
          hitSlop={hitSlop}
          onPress={toggleDrawer}
        >
          <BaseIcon name={BaseIconName.Close} size={BaseIconSize.lg} color={white.base} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollBox} contentContainerStyle={styles.scrollContentBox}>
        {drawerItemList}
      </ScrollView>
      {actionButtons}

      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enableDynamicSizing={false}
        handleStyle={{
          padding: 8
        }}
        handleIndicatorStyle={{
          width: 56,
          height: 4,
          backgroundColor: gray['500'],
          borderRadius: 4
          // marginTop: -2
        }}
        // enableContentPanningGesture={true}
        // enableHandlePanningGesture={true}
        enablePanDownToClose={true}
        // bottomInset={150}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              handleClosePress();
            }}
          >
            <BaseText>Lorem Ipsum</BaseText>
          </TouchableOpacity>
          <View>
            <BaseText>Lorem Ipsum</BaseText>
          </View>
          <View>
            <BaseText>Lorem Ipsum</BaseText>
          </View>
          <View>
            <BaseText>Lorem Ipsum</BaseText>
          </View>
          {/**
          <BaseCheckBox />
          <BaseCheckBox checked={true} />
          <BaseCheckBox />
           */}
          {Languages.map(({ languageName }) => (
            <View>
              <Text>{languageName}</Text>
            </View>
          ))}
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};
