import { create } from 'zustand';

interface PreferencesState {
  loadingPreferences: boolean;
  setLoadingPreferences: (loadingPreferences: boolean) => void;
  isStaff: boolean;
  setIsStaff: (isStaff: boolean) => void;
  isGardener: boolean;
  setIsGardener: (isGardener: boolean) => void;
  isLensMember: boolean;
  setIsLensMember: (isLensMember: boolean) => void;
  staffMode: boolean;
  setStaffMode: (staffMode: boolean) => void;
  gardenerMode: boolean;
  setGardenerMode: (gardenerMode: boolean) => void;
  isPride: boolean;
  setIsPride: (isPride: boolean) => void;
  highSignalNotificationFilter: boolean;
  setHighSignalNotificationFilter: (
    highSignalNotificationFilter: boolean
  ) => void;
  featureFlags: string[];
  setFeatureFlags: (featureFlags: string[]) => void;
  resetPreferences: () => void;
}

export const usePreferencesStore = create<PreferencesState>((set) => ({
  loadingPreferences: true,
  setLoadingPreferences: (loadingPreferences) =>
    set(() => ({ loadingPreferences })),
  isStaff: false,
  setIsStaff: (isStaff) => set(() => ({ isStaff })),
  isGardener: false,
  setIsGardener: (isGardener) => set(() => ({ isGardener })),
  isLensMember: false,
  setIsLensMember: (isLensMember) => set(() => ({ isLensMember })),
  staffMode: false,
  setStaffMode: (staffMode) => set(() => ({ staffMode })),
  gardenerMode: false,
  setGardenerMode: (gardenerMode) => set(() => ({ gardenerMode })),
  isPride: false,
  setIsPride: (isPride) => set(() => ({ isPride })),
  highSignalNotificationFilter: false,
  setHighSignalNotificationFilter: (highSignalNotificationFilter) =>
    set(() => ({ highSignalNotificationFilter })),
  featureFlags: [],
  setFeatureFlags: (featureFlags) => set(() => ({ featureFlags })),
  resetPreferences: () =>
    set(() => ({
      isStaff: false,
      isGardener: false,
      isLensMember: false,
      staffMode: false,
      gardenerMode: false,
      isPride: false,
      highSignalNotificationFilter: false,
      featureFlags: []
    }))
}));

export const featureFlags = () => usePreferencesStore.getState().featureFlags;