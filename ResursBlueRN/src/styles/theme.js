// Resurs Bank Color Palette - Official branding colors
export const colors = {
  // Brand colors
  primary: '#00A19A',        // Resurs teal/green
  primaryDark: '#007A75',    // Darker teal for pressed states
  primaryLight: '#E6F7F6',   // Light teal background
  secondary: '#1A1F36',      // Dark navy for text
  accent: '#FF6B35',         // Orange accent
  
  // Backgrounds
  background: '#F8FAFA',
  backgroundSecondary: '#FFFFFF',
  backgroundDark: '#1A1F36',
  
  // Text colors
  textPrimary: '#1A1F36',
  textSecondary: '#6B7685',
  textLight: '#9CA3AF',
  textOnPrimary: '#FFFFFF',
  
  // Status colors
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  
  // Card colors
  cardGradientStart: '#00A19A',
  cardGradientEnd: '#007A75',
  cardVisa: '#1A1F71',
  cardMastercard: '#EB001B',
  
  // Borders
  border: '#E2E8F0',
  borderLight: '#F1F5F9',
  
  // White and black
  white: '#FFFFFF',
  black: '#000000',
  
  // Overlay
  overlay: 'rgba(26, 31, 54, 0.5)',
};

// Typography
export const typography = {
  fontFamily: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },
  fontSize: {
    xs: 11,
    sm: 13,
    base: 15,
    lg: 17,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// Spacing
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
};

// Border radius
export const borderRadius = {
  none: 0,
  sm: 6,
  md: 12,
  lg: 16,
  xl: 24,
  '2xl': 32,
  full: 9999,
};

// Shadows
export const shadows = {
  sm: {
    shadowColor: '#1A1F36',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  md: {
    shadowColor: '#1A1F36',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  lg: {
    shadowColor: '#1A1F36',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
  },
  card: {
    shadowColor: '#00A19A',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
};

export default {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
};
