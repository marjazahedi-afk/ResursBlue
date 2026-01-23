import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography, borderRadius, shadows } from '../styles/theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const ProductsScreen = ({ navigation }) => {
  const mainProducts = [
    { id: 'loans', icon: '💰', title: 'Loans', desc: 'Personal & car loans', color: '#E8F5E9' },
    { id: 'insurance', icon: '🛡️', title: 'Insurance', desc: 'Protect yourself & your items', color: '#E3F2FD' },
    { id: 'savings', icon: '🎯', title: 'Savings', desc: 'Build your future', color: '#FFF3E0' },
    { id: 'invest', icon: '📈', title: 'Investments', desc: 'Funds & stocks', color: '#F3E5F5' },
  ];

  const quickServices = [
    { id: 'statements', icon: '📄', label: 'Statements' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
    { id: 'cards', icon: '💳', label: 'Card Mgmt' },
    { id: 'limits', icon: '📊', label: 'Limits' },
    { id: 'notifications', icon: '🔔', label: 'Alerts' },
    { id: 'security', icon: '🔐', label: 'Security' },
  ];

  const supportOptions = [
    { id: 'chat', icon: '💬', title: 'Chat with us', desc: 'Quick answers 24/7', badge: 'Online' },
    { id: 'call', icon: '📞', title: 'Call support', desc: '+46 771-22 11 22', badge: null },
    { id: 'faq', icon: '❓', title: 'FAQ', desc: 'Find answers yourself', badge: null },
    { id: 'offices', icon: '📍', title: 'Find offices', desc: 'Visit us locally', badge: null },
  ];

  const offers = [
    { 
      id: 1, 
      title: 'Free transfers', 
      desc: 'Send money without fees', 
      icon: '⚡',
      bgColor: colors.primaryLight,
      textColor: colors.primary,
    },
    { 
      id: 2, 
      title: 'Cashback', 
      desc: 'Get 2% back', 
      icon: '💸',
      bgColor: colors.accent + '20',
      textColor: colors.accent,
    },
    { 
      id: 3, 
      title: 'Refer a friend', 
      desc: 'Earn 500 SEK', 
      icon: '🎁',
      bgColor: '#F3E5F5',
      textColor: '#7B1FA2',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Products</Text>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>🔍</Text>
          </TouchableOpacity>
        </View>

        {/* Main Products Grid */}
        <View style={styles.mainProductsGrid}>
          {mainProducts.map((product) => (
            <TouchableOpacity key={product.id} style={styles.mainProductCard}>
              <View style={[styles.mainProductIcon, { backgroundColor: product.color }]}>
                <Text style={styles.mainProductIconText}>{product.icon}</Text>
              </View>
              <Text style={styles.mainProductTitle}>{product.title}</Text>
              <Text style={styles.mainProductDesc}>{product.desc}</Text>
              <View style={styles.mainProductArrow}>
                <Text style={styles.mainProductArrowText}>→</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Offers Carousel */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Offers</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.offersContainer}
          >
            {offers.map((offer) => (
              <TouchableOpacity 
                key={offer.id} 
                style={[styles.offerCard, { backgroundColor: offer.bgColor }]}
              >
                <View style={styles.offerHeader}>
                  <Text style={styles.offerIcon}>{offer.icon}</Text>
                </View>
                <Text style={[styles.offerTitle, { color: offer.textColor }]}>
                  {offer.title}
                </Text>
                <Text style={styles.offerDesc}>{offer.desc}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Quick Services */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Services</Text>
          <View style={styles.quickServicesGrid}>
            {quickServices.map((service) => (
              <TouchableOpacity key={service.id} style={styles.quickServiceItem}>
                <View style={styles.quickServiceIcon}>
                  <Text style={styles.quickServiceIconText}>{service.icon}</Text>
                </View>
                <Text style={styles.quickServiceLabel}>{service.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Support Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Help & Support</Text>
          <View style={styles.supportList}>
            {supportOptions.map((option, index) => (
              <TouchableOpacity 
                key={option.id} 
                style={[
                  styles.supportItem,
                  index === supportOptions.length - 1 && styles.supportItemLast,
                ]}
              >
                <View style={styles.supportIcon}>
                  <Text style={styles.supportIconText}>{option.icon}</Text>
                </View>
                <View style={styles.supportInfo}>
                  <Text style={styles.supportTitle}>{option.title}</Text>
                  <Text style={styles.supportDesc}>{option.desc}</Text>
                </View>
                {option.badge && (
                  <View style={styles.supportBadge}>
                    <Text style={styles.supportBadgeText}>{option.badge}</Text>
                  </View>
                )}
                <Text style={styles.supportArrow}>›</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* App Info */}
        <View style={styles.appInfo}>
          <View style={styles.appLogo}>
            <Text style={styles.appLogoText}>R</Text>
          </View>
          <Text style={styles.appName}>Resurs Bank</Text>
          <Text style={styles.appVersion}>Version 2.5.1</Text>
          <View style={styles.appLinks}>
            <TouchableOpacity>
              <Text style={styles.appLink}>Privacy Policy</Text>
            </TouchableOpacity>
            <Text style={styles.appLinkDivider}>·</Text>
            <TouchableOpacity>
              <Text style={styles.appLink}>Terms of Service</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.xl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
  title: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: '700',
    color: colors.textPrimary,
  },
  searchButton: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.full,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.sm,
  },
  searchButtonText: {
    fontSize: 20,
  },
  mainProductsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
  },
  mainProductCard: {
    width: (SCREEN_WIDTH - spacing.lg * 2 - spacing.md) / 2,
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    ...shadows.sm,
  },
  mainProductIcon: {
    width: 52,
    height: 52,
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  mainProductIconText: {
    fontSize: 26,
  },
  mainProductTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  mainProductDesc: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: spacing.md,
    lineHeight: 18,
  },
  mainProductArrow: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    width: 28,
    height: 28,
    borderRadius: borderRadius.full,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainProductArrowText: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  section: {
    marginTop: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  offersContainer: {
    gap: spacing.md,
  },
  offerCard: {
    width: 160,
    padding: spacing.lg,
    borderRadius: borderRadius.xl,
  },
  offerHeader: {
    marginBottom: spacing.sm,
  },
  offerIcon: {
    fontSize: 28,
  },
  offerTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  offerDesc: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  quickServicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.md,
    ...shadows.sm,
  },
  quickServiceItem: {
    width: '33.33%',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  quickServiceIcon: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.md,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  quickServiceIconText: {
    fontSize: 22,
  },
  quickServiceLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: '500',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  supportList: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    ...shadows.sm,
  },
  supportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  supportItemLast: {
    borderBottomWidth: 0,
  },
  supportIcon: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.md,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  supportIconText: {
    fontSize: 20,
  },
  supportInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  supportTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  supportDesc: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  supportBadge: {
    backgroundColor: colors.success,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    marginRight: spacing.sm,
  },
  supportBadgeText: {
    fontSize: typography.fontSize.xs,
    fontWeight: '600',
    color: colors.white,
  },
  supportArrow: {
    fontSize: 24,
    color: colors.textLight,
    fontWeight: '300',
  },
  appInfo: {
    alignItems: 'center',
    marginTop: spacing['2xl'],
    paddingTop: spacing.xl,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    marginHorizontal: spacing.lg,
  },
  appLogo: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  appLogoText: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.white,
  },
  appName: {
    fontSize: typography.fontSize.lg,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  appVersion: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  appLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appLink: {
    fontSize: typography.fontSize.sm,
    color: colors.primary,
    fontWeight: '500',
  },
  appLinkDivider: {
    marginHorizontal: spacing.sm,
    color: colors.textLight,
  },
});

export default ProductsScreen;
