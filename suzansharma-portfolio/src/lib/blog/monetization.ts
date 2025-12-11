export interface AdConfig {
  position: 'before-content' | 'middle-content' | 'after-content';
  size: 'leaderboard' | 'rectangle' | 'mobile-banner';
  slot: string;
  enabled: boolean;
}

export const AD_CONFIGS: AdConfig[] = [
  {
    position: 'before-content',
    size: 'leaderboard',
    slot: '1234567890',
    enabled: true,
  },
  {
    position: 'middle-content',
    size: 'rectangle',
    slot: '0987654321',
    enabled:  true,
  },
  {
    position: 'after-content',
    size: 'leaderboard',
    slot: '5555555555',
    enabled: true,
  },
];

export function getAdConfig(position: string): AdConfig | undefined {
  return AD_CONFIGS.find(ad => ad.position === position);
}

export function getAdDimensions(size: string): { width: number; height: number } {
  const dimensions:  Record<string, { width: number; height: number }> = {
    leaderboard: { width: 728, height: 90 },
    rectangle: { width: 300, height: 250 },
    'mobile-banner': { width: 320, height: 50 },
  };
  return dimensions[size] || { width: 0, height: 0 };
}

export function isAdSenseEnabled(): boolean {
  return process.env.PUBLIC_ADSENSE_ENABLED === 'true';
}