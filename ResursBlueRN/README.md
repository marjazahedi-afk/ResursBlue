# ResursBlue - React Native MVP Prototype

A React Native prototype application built with Expo, Redux Toolkit, and React Navigation.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Xcode (for iOS Simulator) - Mac only
- Android Studio (for Android Emulator)
- Expo Go app (for testing on physical device)

### Installation

```bash
cd ResursBlueRN
npm install
```

### Running the App

Start the development server:
```bash
npm start
```

This will open Expo Dev Tools. From there you can:

#### 📱 iOS Simulator (Mac only)
Press `i` in the terminal, or click "Run on iOS simulator" in Expo Dev Tools.

#### 🤖 Android Emulator
1. Open Android Studio
2. Go to Tools → Device Manager → Create/Start a virtual device
3. Press `a` in the terminal, or click "Run on Android device/emulator"

#### 📲 Physical Device
1. Install "Expo Go" from App Store (iOS) or Play Store (Android)
2. Scan the QR code shown in terminal with your phone's camera
3. The app will open in Expo Go

### Other Commands
```bash
npm run ios       # Run directly on iOS simulator
npm run android   # Run directly on Android emulator
npm run web       # Run in web browser
```

## 📁 Project Structure

```
ResursBlueRN/
├── App.js                 # Main app entry point
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Button.js      # Button component with variants
│   │   ├── Card.js        # Card component
│   │   └── index.js       # Component exports
│   ├── screens/           # App screens
│   │   ├── HomeScreen.js
│   │   ├── ProfileScreen.js
│   │   └── SettingsScreen.js
│   ├── navigation/        # Navigation configuration
│   │   └── AppNavigator.js
│   ├── store/             # Redux store
│   │   ├── index.js       # Store configuration
│   │   └── appSlice.js    # App state slice
│   ├── styles/            # Styling & theming
│   │   └── theme.js       # Colors, typography, spacing
│   ├── utils/             # Utility functions
│   └── assets/            # Images, fonts, etc.
├── assets/                # Expo assets (icons, splash)
└── package.json
```

## 🎨 Design System

The theme is defined in `src/styles/theme.js`:

### Colors
- **Primary**: #2563EB (Blue)
- **Secondary**: #7C3AED (Purple)
- **Accent**: #F59E0B (Amber)

### Typography
Pre-defined font sizes from `xs` (12px) to `4xl` (36px)

### Spacing
Consistent spacing scale: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`

## 🔧 Tech Stack

- **React Native** 0.81.5 - Cross-platform mobile framework
- **Expo** 54 - Development platform and tools
- **Redux Toolkit** 2.x - State management
- **React Navigation** 7.x - Navigation library
- **React Native Safe Area Context** - Safe area handling

## 💡 Tips for UI/UX Designers

1. **Hot Reload**: Save any file and changes appear instantly on the simulator
2. **Component Preview**: You can test individual components by temporarily rendering them in HomeScreen
3. **Theme Changes**: Modify `src/styles/theme.js` to update colors/fonts globally
4. **New Screens**: Create new files in `src/screens/` and add them to `AppNavigator.js`

## 📝 Next Steps

1. Customize the theme colors to match your brand
2. Add more screens for your prototype flows
3. Create additional reusable components as needed
4. Replace placeholder content with actual UI designs
