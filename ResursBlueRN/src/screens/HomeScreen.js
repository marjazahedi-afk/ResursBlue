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

const HomeScreen = ({ navigation }) => {
  const user = {
    name: 'Anna',
    totalBalance: 156432.50,
    monthlySpending: 24680,
    savingsGoal: 50000,
    currentSavings: 32500,
  };

  const accounts = [
    { id: 1, name: 'Checking Account', balance: 45230.50, type: 'checking', icon: '💰' },
    { id: 2, name: 'Savings Account', balance: 87500.00, type: 'savings', icon: '🏦' },
    { id: 3, name: 'Buffer Account', balance: 23702.00, type: 'buffer', icon: '🛡️' },
  ];

  const quickActions = [
    { id: 'transfer', icon: '↔️', label: 'Transfer' },
    { id: 'pay', icon: '💳', label: 'Pay' },
    { id: 'save', icon: '🎯', label: 'Save' },
    { id: 'loan', icon: '📊', label: 'Loan' },
  ];

  const insights = [
    { id: 1, title: 'Groceries', value: 4520, change: -12, icon: '🛒' },
    { id: 2, title: 'Dining & Entertainment', value: 2180, change: 8, icon: '🍽️' },
    { id: 3, title: 'Transport', value: 1450, change: -5, icon: '🚗' },
  ];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'SEK',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const savingsProgress = (user.currentSavings / user.savingsGoal) * 100;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi, {user.name}! 👋</Text>
            <Text style={styles.date}>
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                day: 'numeric', 
                month: 'long' 
              })}
            </Text>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Text style={styles.notificationIcon}>🔔</Text>
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>

        {/* Total Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceCardPattern}>
            <View style={[styles.patternShape, styles.patternShape1]} />
            <View style={[styles.patternShape, styles.patternShape2]} />
          </View>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceValue}>{formatCurrency(user.totalBalance)}</Text>
          <View style={styles.balanceStats}>
            <View style={styles.balanceStat}>
              <Text style={styles.statLabel}>This Month</Text>
              <Text style={styles.statValue}>-{formatCurrency(user.monthlySpending)}</Text>
            </View>
            <View style={styles.balanceStatDivider} />
            <View style={styles.balanceStat}>
              <Text style={styles.statLabel}>Compared to last</Text>
              <Text style={[styles.statValue, styles.statPositive]}>↓ 8%</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          {quickActions.map((action) => (
            <TouchableOpacity key={action.id} style={styles.quickAction}>
              <View style={styles.quickActionIcon}>
                <Text style={styles.quickActionIconText}>{action.icon}</Text>
              </View>
              <Text style={styles.quickActionLabel}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Accounts */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Accounts</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.accountsList}>
            {accounts.map((account) => (
              <TouchableOpacity key={account.id} style={styles.accountItem}>
                <View style={styles.accountIcon}>
                  <Text style={styles.accountIconText}>{account.icon}</Text>
                </View>
                <View style={styles.accountInfo}>
                  <Text style={styles.accountName}>{account.name}</Text>
                  <Text style={styles.accountType}>
                    {account.type === 'checking' ? 'Transaction Account' : 
                     account.type === 'savings' ? 'Savings Account' : 'Buffer Account'}
                  </Text>
                </View>
                <Text style={styles.accountBalance}>{formatCurrency(account.balance)}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Savings Goal */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Savings Goal</Text>
          <View style={styles.savingsCard}>
            <View style={styles.savingsHeader}>
              <View style={styles.savingsGoalIcon}>
                <Text style={styles.savingsGoalIconText}>🎯</Text>
              </View>
              <View style={styles.savingsInfo}>
                <Text style={styles.savingsTitle}>Vacation 2026</Text>
                <Text style={styles.savingsSubtitle}>
                  {formatCurrency(user.currentSavings)} of {formatCurrency(user.savingsGoal)}
                </Text>
              </View>
              <Text style={styles.savingsPercentage}>{Math.round(savingsProgress)}%</Text>
            </View>
            <View style={styles.savingsProgress}>
              <View 
                style={[styles.savingsProgressFill, { width: `${savingsProgress}%` }]} 
              />
            </View>
            <TouchableOpacity style={styles.savingsButton}>
              <Text style={styles.savingsButtonText}>Save More</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Spending Insights */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Spending Overview</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>Details</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.insightsContainer}
          >
            {insights.map((insight) => (
              <View key={insight.id} style={styles.insightCard}>
                <View style={styles.insightIconContainer}>
                  <Text style={styles.insightIcon}>{insight.icon}</Text>
                </View>
                <Text style={styles.insightTitle}>{insight.title}</Text>
                <Text style={styles.insightValue}>{formatCurrency(insight.value)}</Text>
                <View style={[
                  styles.insightChange,
                  insight.change < 0 ? styles.insightChangePositive : styles.insightChangeNegative,
                ]}>
                  <Text style={[
                    styles.insightChangeText,
                    insight.change < 0 ? styles.insightChangeTextPositive : styles.insightChangeTextNegative,
                  ]}>
                    {insight.change < 0 ? '↓' : '↑'} {Math.abs(insight.change)}%
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Promotional Banner */}
        <View style={styles.promoBanner}>
          <View style={styles.promoContent}>
            <Text style={styles.promoTitle}>Apply for higher credit limit</Text>
            <Text style={styles.promoText}>
              You may be eligible for up to 50,000 SEK extra credit
            </Text>
            <TouchableOpacity style={styles.promoButton}>
              <Text style={styles.promoButtonText}>Learn More</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.promoEmoji}>💎</Text>
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
  greeting: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  date: {
    fontSize: typography.fontSize.base,
    color: colors.textSecondary,
    textTransform: 'capitalize',
  },
  notificationBtn: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.full,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.sm,
  },
  notificationIcon: {
    fontSize: 22,
  },
  notificationBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.error,
    borderWidth: 2,
    borderColor: colors.white,
  },
  balanceCard: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    overflow: 'hidden',
    ...shadows.card,
  },
  balanceCardPattern: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  patternShape: {
    position: 'absolute',
    borderRadius: 9999,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  patternShape1: {
    width: 180,
    height: 180,
    top: -60,
    right: -40,
  },
  patternShape2: {
    width: 120,
    height: 120,
    bottom: -40,
    left: -20,
  },
  balanceLabel: {
    fontSize: typography.fontSize.base,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: spacing.xs,
  },
  balanceValue: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: '700',
    color: colors.white,
    marginBottom: spacing.lg,
  },
  balanceStats: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: borderRadius.lg,
    padding: spacing.md,
  },
  balanceStat: {
    flex: 1,
  },
  balanceStatDivider: {
    width: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginHorizontal: spacing.md,
  },
  statLabel: {
    fontSize: typography.fontSize.sm,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: spacing.xs,
  },
  statValue: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.white,
  },
  statPositive: {
    color: '#86EFAC',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xl,
  },
  quickAction: {
    alignItems: 'center',
  },
  quickActionIcon: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
    ...shadows.sm,
  },
  quickActionIconText: {
    fontSize: 24,
  },
  quickActionLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: '500',
    color: colors.textSecondary,
  },
  section: {
    marginTop: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  seeAll: {
    fontSize: typography.fontSize.sm,
    fontWeight: '600',
    color: colors.primary,
  },
  accountsList: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    ...shadows.sm,
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  accountIcon: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.md,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountIconText: {
    fontSize: 22,
  },
  accountInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  accountName: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  accountType: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  accountBalance: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  savingsCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    ...shadows.sm,
  },
  savingsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  savingsGoalIcon: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.md,
    backgroundColor: colors.accent + '20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  savingsGoalIconText: {
    fontSize: 22,
  },
  savingsInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  savingsTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  savingsSubtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  savingsPercentage: {
    fontSize: typography.fontSize.xl,
    fontWeight: '700',
    color: colors.primary,
  },
  savingsProgress: {
    height: 8,
    backgroundColor: colors.background,
    borderRadius: 4,
    marginBottom: spacing.lg,
    overflow: 'hidden',
  },
  savingsProgressFill: {
    height: '100%',
    backgroundColor: colors.accent,
    borderRadius: 4,
  },
  savingsButton: {
    backgroundColor: colors.primaryLight,
    paddingVertical: spacing.sm + 2,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  savingsButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.primary,
  },
  insightsContainer: {
    gap: spacing.md,
  },
  insightCard: {
    width: 140,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    ...shadows.sm,
  },
  insightIconContainer: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.md,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  insightIcon: {
    fontSize: 18,
  },
  insightTitle: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  insightValue: {
    fontSize: typography.fontSize.lg,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  insightChange: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    alignSelf: 'flex-start',
  },
  insightChangePositive: {
    backgroundColor: colors.success + '15',
  },
  insightChangeNegative: {
    backgroundColor: colors.error + '15',
  },
  insightChangeText: {
    fontSize: typography.fontSize.xs,
    fontWeight: '600',
  },
  insightChangeTextPositive: {
    color: colors.success,
  },
  insightChangeTextNegative: {
    color: colors.error,
  },
  promoBanner: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.xl,
    backgroundColor: colors.secondary,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  promoContent: {
    flex: 1,
  },
  promoTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: '700',
    color: colors.white,
    marginBottom: spacing.xs,
  },
  promoText: {
    fontSize: typography.fontSize.sm,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: spacing.md,
    lineHeight: 20,
  },
  promoButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    alignSelf: 'flex-start',
  },
  promoButtonText: {
    fontSize: typography.fontSize.sm,
    fontWeight: '600',
    color: colors.white,
  },
  promoEmoji: {
    fontSize: 48,
    marginLeft: spacing.md,
  },
});

export default HomeScreen;
