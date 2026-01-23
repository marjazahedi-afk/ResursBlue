import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography, borderRadius, shadows } from '../styles/theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH - spacing.lg * 2;

const CreditCardsScreen = ({ navigation }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const cards = [
    {
      id: 1,
      type: 'Resurs Supreme',
      number: '**** **** **** 4582',
      holder: 'ANNA SVENSSON',
      expiry: '09/27',
      creditLimit: 75000,
      usedCredit: 23450,
      color: colors.primary,
      gradient: ['#00A19A', '#007A75'],
    },
    {
      id: 2,
      type: 'Resurs Flex',
      number: '**** **** **** 9821',
      holder: 'ANNA SVENSSON',
      expiry: '03/28',
      creditLimit: 35000,
      usedCredit: 8750,
      color: '#1A1F36',
      gradient: ['#2D3348', '#1A1F36'],
    },
  ];

  const creditOptions = [
    { id: 'increase', icon: '📈', label: 'Raise Limit', desc: 'Apply for increase' },
    { id: 'installment', icon: '📅', label: 'Installments', desc: 'Spread the cost' },
    { id: 'freeze', icon: '❄️', label: 'Freeze Card', desc: 'Temporarily block' },
    { id: 'pin', icon: '🔐', label: 'Show PIN', desc: 'View your PIN' },
  ];

  const transactions = [
    { id: 1, name: 'IKEA', amount: -2499, date: 'Today 14:32', category: 'Furniture', icon: '🏠' },
    { id: 2, name: 'H&M', amount: -899, date: 'Today 11:15', category: 'Clothing', icon: '👗' },
    { id: 3, name: 'Payment', amount: 5000, date: 'Yesterday', category: 'Payment', icon: '💰' },
    { id: 4, name: 'Apple Store', amount: -1299, date: 'Jan 21', category: 'Electronics', icon: '🍎' },
    { id: 5, name: 'Systembolaget', amount: -456, date: 'Jan 20', category: 'Other', icon: '🍷' },
  ];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'SEK',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const activeCard = cards[activeCardIndex];
  const availableCredit = activeCard.creditLimit - activeCard.usedCredit;
  const usedPercentage = (activeCard.usedCredit / activeCard.creditLimit) * 100;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Credit & Cards</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Cards Carousel */}
        <Animated.ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          onMomentumScrollEnd={(e) => {
            const index = Math.round(e.nativeEvent.contentOffset.x / CARD_WIDTH);
            setActiveCardIndex(index);
          }}
          contentContainerStyle={styles.cardsContainer}
        >
          {cards.map((card, index) => (
            <View key={card.id} style={styles.cardWrapper}>
              <View style={[styles.creditCard, { backgroundColor: card.color }]}>
                {/* Card Pattern */}
                <View style={styles.cardPattern}>
                  <View style={[styles.patternCircle, styles.patternCircle1]} />
                  <View style={[styles.patternCircle, styles.patternCircle2]} />
                </View>
                
                <View style={styles.cardHeader}>
                  <Text style={styles.cardType}>{card.type}</Text>
                  <Text style={styles.cardChip}>💳</Text>
                </View>
                
                <Text style={styles.cardNumber}>{card.number}</Text>
                
                <View style={styles.cardFooter}>
                  <View>
                    <Text style={styles.cardLabel}>CARD HOLDER</Text>
                    <Text style={styles.cardHolder}>{card.holder}</Text>
                  </View>
                  <View style={styles.cardExpiry}>
                    <Text style={styles.cardLabel}>VALID THRU</Text>
                    <Text style={styles.cardExpiryValue}>{card.expiry}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </Animated.ScrollView>

        {/* Card Indicators */}
        <View style={styles.indicators}>
          {cards.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index === activeCardIndex && styles.indicatorActive,
              ]}
            />
          ))}
        </View>

        {/* Credit Overview */}
        <View style={styles.creditOverview}>
          <View style={styles.creditHeader}>
            <Text style={styles.creditTitle}>Credit Overview</Text>
            <Text style={styles.creditCardName}>{activeCard.type}</Text>
          </View>
          
          <View style={styles.creditAmounts}>
            <View style={styles.creditAmountItem}>
              <Text style={styles.creditAmountLabel}>Used</Text>
              <Text style={styles.creditAmountValue}>{formatCurrency(activeCard.usedCredit)}</Text>
            </View>
            <View style={styles.creditDivider} />
            <View style={styles.creditAmountItem}>
              <Text style={styles.creditAmountLabel}>Available</Text>
              <Text style={[styles.creditAmountValue, styles.creditAmountAvailable]}>
                {formatCurrency(availableCredit)}
              </Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View 
                style={[
                  styles.progressFill, 
                  { width: `${usedPercentage}%` }
                ]} 
              />
            </View>
            <Text style={styles.progressText}>
              {Math.round(usedPercentage)}% of {formatCurrency(activeCard.creditLimit)} used
            </Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActions}>
            {creditOptions.map((option) => (
              <TouchableOpacity key={option.id} style={styles.actionCard}>
                <View style={styles.actionIcon}>
                  <Text style={styles.actionIconText}>{option.icon}</Text>
                </View>
                <Text style={styles.actionLabel}>{option.label}</Text>
                <Text style={styles.actionDesc}>{option.desc}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Transactions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Transactions</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>All</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.transactionsList}>
            {transactions.map((transaction) => (
              <TouchableOpacity key={transaction.id} style={styles.transactionItem}>
                <View style={styles.transactionIcon}>
                  <Text style={styles.transactionIconText}>{transaction.icon}</Text>
                </View>
                <View style={styles.transactionInfo}>
                  <Text style={styles.transactionName}>{transaction.name}</Text>
                  <Text style={styles.transactionMeta}>
                    {transaction.date} · {transaction.category}
                  </Text>
                </View>
                <Text style={[
                  styles.transactionAmount,
                  transaction.amount > 0 && styles.transactionAmountPositive,
                ]}>
                  {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                </Text>
              </TouchableOpacity>
            ))}
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
  addButton: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.md,
  },
  addButtonText: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.white,
  },
  cardsContainer: {
    paddingHorizontal: spacing.lg,
  },
  cardWrapper: {
    width: CARD_WIDTH,
    paddingRight: spacing.md,
  },
  creditCard: {
    width: '100%',
    aspectRatio: 1.586,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    overflow: 'hidden',
    ...shadows.card,
  },
  cardPattern: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  patternCircle: {
    position: 'absolute',
    borderRadius: 9999,
    opacity: 0.1,
    backgroundColor: colors.white,
  },
  patternCircle1: {
    width: 200,
    height: 200,
    top: -50,
    right: -50,
  },
  patternCircle2: {
    width: 150,
    height: 150,
    bottom: -30,
    left: -30,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardType: {
    fontSize: typography.fontSize.lg,
    fontWeight: '700',
    color: colors.white,
    letterSpacing: 0.5,
  },
  cardChip: {
    fontSize: 28,
  },
  cardNumber: {
    fontSize: typography.fontSize.xl,
    fontWeight: '600',
    color: colors.white,
    letterSpacing: 3,
    marginTop: 'auto',
    marginBottom: spacing.lg,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLabel: {
    fontSize: typography.fontSize.xs,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  cardHolder: {
    fontSize: typography.fontSize.sm,
    fontWeight: '600',
    color: colors.white,
    letterSpacing: 1,
  },
  cardExpiry: {
    alignItems: 'flex-end',
  },
  cardExpiryValue: {
    fontSize: typography.fontSize.sm,
    fontWeight: '600',
    color: colors.white,
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.sm,
    marginTop: spacing.lg,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.border,
  },
  indicatorActive: {
    width: 24,
    backgroundColor: colors.primary,
  },
  creditOverview: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.xl,
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    ...shadows.sm,
  },
  creditHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  creditTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  creditCardName: {
    fontSize: typography.fontSize.sm,
    fontWeight: '500',
    color: colors.textSecondary,
  },
  creditAmounts: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
  },
  creditAmountItem: {
    flex: 1,
  },
  creditDivider: {
    width: 1,
    backgroundColor: colors.border,
    marginHorizontal: spacing.lg,
  },
  creditAmountLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  creditAmountValue: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: '700',
    color: colors.textPrimary,
  },
  creditAmountAvailable: {
    color: colors.primary,
  },
  progressContainer: {
    gap: spacing.sm,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.background,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  progressText: {
    fontSize: typography.fontSize.sm,
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
    marginBottom: spacing.md,
  },
  seeAll: {
    fontSize: typography.fontSize.sm,
    fontWeight: '600',
    color: colors.primary,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  actionCard: {
    width: (SCREEN_WIDTH - spacing.lg * 2 - spacing.md) / 2,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    ...shadows.sm,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.md,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  actionIconText: {
    fontSize: 18,
  },
  actionLabel: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  actionDesc: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  transactionsList: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    ...shadows.sm,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  transactionIcon: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.md,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionIconText: {
    fontSize: 20,
  },
  transactionInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  transactionName: {
    fontSize: typography.fontSize.base,
    fontWeight: '500',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  transactionMeta: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  transactionAmount: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  transactionAmountPositive: {
    color: colors.success,
  },
});

export default CreditCardsScreen;
