import React, { useState } from 'react';
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

const PaymentScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('current');

  const tabs = [
    { id: 'current', label: 'Current' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'history', label: 'History' },
  ];

  const currentInvoices = [
    { 
      id: 1, 
      merchant: 'IKEA', 
      description: 'Furniture purchase',
      amount: 4299, 
      dueDate: 'Jan 28, 2026',
      daysLeft: 5,
      status: 'due_soon',
      icon: '🏠',
    },
    { 
      id: 2, 
      merchant: 'MediaMarkt', 
      description: 'Electronics',
      amount: 1899, 
      dueDate: 'Jan 31, 2026',
      daysLeft: 8,
      status: 'pending',
      icon: '📱',
    },
    { 
      id: 3, 
      merchant: 'H&M', 
      description: 'Clothing',
      amount: 756, 
      dueDate: 'Feb 3, 2026',
      daysLeft: 11,
      status: 'pending',
      icon: '👗',
    },
  ];

  const upcomingInvoices = [
    { 
      id: 4, 
      merchant: 'Netflix', 
      description: 'Monthly subscription',
      amount: 169, 
      dueDate: 'Feb 15, 2026',
      recurring: true,
      icon: '🎬',
    },
    { 
      id: 5, 
      merchant: 'Spotify', 
      description: 'Premium subscription',
      amount: 119, 
      dueDate: 'Feb 18, 2026',
      recurring: true,
      icon: '🎵',
    },
    { 
      id: 6, 
      merchant: 'Gym24', 
      description: 'Monthly membership',
      amount: 399, 
      dueDate: 'Feb 20, 2026',
      recurring: true,
      icon: '💪',
    },
    { 
      id: 7, 
      merchant: 'Elgiganten', 
      description: 'TV purchase - Installment 2/12',
      amount: 832, 
      dueDate: 'Feb 25, 2026',
      recurring: false,
      icon: '📺',
    },
  ];

  const historyInvoices = [
    { 
      id: 8, 
      merchant: 'ICA Maxi', 
      description: 'Groceries',
      amount: 523, 
      paidDate: 'Jan 20, 2026',
      status: 'paid',
      icon: '🛒',
    },
    { 
      id: 9, 
      merchant: 'Apple Store', 
      description: 'AirPods Pro',
      amount: 2799, 
      paidDate: 'Jan 15, 2026',
      status: 'paid',
      icon: '🍎',
    },
    { 
      id: 10, 
      merchant: 'Zalando', 
      description: 'Shoes & accessories',
      amount: 1245, 
      paidDate: 'Jan 10, 2026',
      status: 'paid',
      icon: '👟',
    },
    { 
      id: 11, 
      merchant: 'Clas Ohlson', 
      description: 'Home supplies',
      amount: 389, 
      paidDate: 'Jan 5, 2026',
      status: 'paid',
      icon: '🔧',
    },
    { 
      id: 12, 
      merchant: 'IKEA', 
      description: 'Kitchen items',
      amount: 1567, 
      paidDate: 'Dec 28, 2025',
      status: 'paid',
      icon: '🏠',
    },
  ];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'SEK',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getTotalDue = () => {
    return currentInvoices.reduce((sum, inv) => sum + inv.amount, 0);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'due_soon': return colors.warning;
      case 'overdue': return colors.error;
      case 'paid': return colors.success;
      default: return colors.textSecondary;
    }
  };

  const getStatusLabel = (status, daysLeft) => {
    switch (status) {
      case 'due_soon': return `Due in ${daysLeft} days`;
      case 'overdue': return 'Overdue';
      case 'paid': return 'Paid';
      default: return `Due in ${daysLeft} days`;
    }
  };

  const renderCurrentInvoices = () => (
    <View style={styles.invoicesSection}>
      {/* Summary Card */}
      <View style={styles.summaryCard}>
        <View style={styles.summaryContent}>
          <Text style={styles.summaryLabel}>Total Due</Text>
          <Text style={styles.summaryAmount}>{formatCurrency(getTotalDue())}</Text>
          <Text style={styles.summarySubtext}>{currentInvoices.length} invoices pending</Text>
        </View>
        <TouchableOpacity style={styles.payAllButton}>
          <Text style={styles.payAllButtonText}>Pay All</Text>
        </TouchableOpacity>
      </View>

      {/* Invoice List */}
      <View style={styles.invoicesList}>
        {currentInvoices.map((invoice) => (
          <TouchableOpacity key={invoice.id} style={styles.invoiceCard}>
            <View style={styles.invoiceIcon}>
              <Text style={styles.invoiceIconText}>{invoice.icon}</Text>
            </View>
            <View style={styles.invoiceInfo}>
              <Text style={styles.invoiceMerchant}>{invoice.merchant}</Text>
              <Text style={styles.invoiceDescription}>{invoice.description}</Text>
              <View style={styles.invoiceStatusRow}>
                <View style={[styles.statusDot, { backgroundColor: getStatusColor(invoice.status) }]} />
                <Text style={[styles.invoiceStatus, { color: getStatusColor(invoice.status) }]}>
                  {getStatusLabel(invoice.status, invoice.daysLeft)}
                </Text>
              </View>
            </View>
            <View style={styles.invoiceRight}>
              <Text style={styles.invoiceAmount}>{formatCurrency(invoice.amount)}</Text>
              <TouchableOpacity style={styles.payButton}>
                <Text style={styles.payButtonText}>Pay</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderUpcomingInvoices = () => (
    <View style={styles.invoicesSection}>
      {/* Info Banner */}
      <View style={styles.infoBanner}>
        <Text style={styles.infoBannerIcon}>📅</Text>
        <View style={styles.infoBannerContent}>
          <Text style={styles.infoBannerTitle}>Scheduled Payments</Text>
          <Text style={styles.infoBannerText}>
            These invoices will be due in the coming weeks
          </Text>
        </View>
      </View>

      {/* Upcoming List */}
      <View style={styles.invoicesList}>
        {upcomingInvoices.map((invoice) => (
          <TouchableOpacity key={invoice.id} style={styles.invoiceCard}>
            <View style={styles.invoiceIcon}>
              <Text style={styles.invoiceIconText}>{invoice.icon}</Text>
            </View>
            <View style={styles.invoiceInfo}>
              <View style={styles.merchantRow}>
                <Text style={styles.invoiceMerchant}>{invoice.merchant}</Text>
                {invoice.recurring && (
                  <View style={styles.recurringBadge}>
                    <Text style={styles.recurringBadgeText}>Recurring</Text>
                  </View>
                )}
              </View>
              <Text style={styles.invoiceDescription}>{invoice.description}</Text>
              <Text style={styles.invoiceDueDate}>Due {invoice.dueDate}</Text>
            </View>
            <View style={styles.invoiceRight}>
              <Text style={styles.invoiceAmount}>{formatCurrency(invoice.amount)}</Text>
              <TouchableOpacity style={styles.reminderButton}>
                <Text style={styles.reminderButtonText}>🔔</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderHistoryInvoices = () => (
    <View style={styles.invoicesSection}>
      {/* Filter Options */}
      <View style={styles.filterRow}>
        <TouchableOpacity style={[styles.filterChip, styles.filterChipActive]}>
          <Text style={[styles.filterChipText, styles.filterChipTextActive]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterChip}>
          <Text style={styles.filterChipText}>This Month</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterChip}>
          <Text style={styles.filterChipText}>Last Month</Text>
        </TouchableOpacity>
      </View>

      {/* History List */}
      <View style={styles.invoicesList}>
        {historyInvoices.map((invoice) => (
          <TouchableOpacity key={invoice.id} style={styles.invoiceCard}>
            <View style={styles.invoiceIcon}>
              <Text style={styles.invoiceIconText}>{invoice.icon}</Text>
            </View>
            <View style={styles.invoiceInfo}>
              <Text style={styles.invoiceMerchant}>{invoice.merchant}</Text>
              <Text style={styles.invoiceDescription}>{invoice.description}</Text>
              <View style={styles.invoiceStatusRow}>
                <View style={[styles.statusDot, { backgroundColor: colors.success }]} />
                <Text style={[styles.invoiceStatus, { color: colors.success }]}>
                  Paid on {invoice.paidDate}
                </Text>
              </View>
            </View>
            <View style={styles.invoiceRight}>
              <Text style={styles.invoiceAmountPaid}>{formatCurrency(invoice.amount)}</Text>
              <TouchableOpacity style={styles.receiptButton}>
                <Text style={styles.receiptButtonText}>📄</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Payments</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>📊</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[styles.tab, activeTab === tab.id && styles.tabActive]}
            onPress={() => setActiveTab(tab.id)}
          >
            <Text style={[styles.tabText, activeTab === tab.id && styles.tabTextActive]}>
              {tab.label}
            </Text>
            {activeTab === tab.id && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {activeTab === 'current' && renderCurrentInvoices()}
        {activeTab === 'upcoming' && renderUpcomingInvoices()}
        {activeTab === 'history' && renderHistoryInvoices()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
  },
  title: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: '700',
    color: colors.textPrimary,
  },
  headerButton: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.full,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.sm,
  },
  headerButtonText: {
    fontSize: 20,
  },
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.md,
    alignItems: 'center',
    position: 'relative',
  },
  tabActive: {},
  tabText: {
    fontSize: typography.fontSize.base,
    fontWeight: '500',
    color: colors.textSecondary,
  },
  tabTextActive: {
    color: colors.primary,
    fontWeight: '600',
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    left: spacing.lg,
    right: spacing.lg,
    height: 3,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.xl,
  },
  invoicesSection: {
    paddingTop: spacing.lg,
  },
  summaryCard: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    ...shadows.card,
  },
  summaryContent: {
    flex: 1,
  },
  summaryLabel: {
    fontSize: typography.fontSize.sm,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: spacing.xs,
  },
  summaryAmount: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: '700',
    color: colors.white,
    marginBottom: spacing.xs,
  },
  summarySubtext: {
    fontSize: typography.fontSize.sm,
    color: 'rgba(255,255,255,0.7)',
  },
  payAllButton: {
    backgroundColor: colors.white,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.lg,
  },
  payAllButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.primary,
  },
  invoicesList: {
    marginTop: spacing.lg,
    marginHorizontal: spacing.lg,
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    ...shadows.sm,
  },
  invoiceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  invoiceIcon: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.md,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  invoiceIconText: {
    fontSize: 22,
  },
  invoiceInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  merchantRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  invoiceMerchant: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  invoiceDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginTop: 2,
  },
  invoiceStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: spacing.xs,
  },
  invoiceStatus: {
    fontSize: typography.fontSize.sm,
    fontWeight: '500',
  },
  invoiceDueDate: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  invoiceRight: {
    alignItems: 'flex-end',
    gap: spacing.sm,
  },
  invoiceAmount: {
    fontSize: typography.fontSize.lg,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  invoiceAmountPaid: {
    fontSize: typography.fontSize.lg,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  payButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.xs + 2,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
  },
  payButtonText: {
    fontSize: typography.fontSize.sm,
    fontWeight: '600',
    color: colors.white,
  },
  reminderButton: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.md,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reminderButtonText: {
    fontSize: 16,
  },
  receiptButton: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.md,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  receiptButtonText: {
    fontSize: 16,
  },
  recurringBadge: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  recurringBadgeText: {
    fontSize: typography.fontSize.xs,
    fontWeight: '600',
    color: colors.primary,
  },
  infoBanner: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.primaryLight,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoBannerIcon: {
    fontSize: 28,
    marginRight: spacing.md,
  },
  infoBannerContent: {
    flex: 1,
  },
  infoBannerTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 2,
  },
  infoBannerText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
  },
  filterChip: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.full,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterChipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterChipText: {
    fontSize: typography.fontSize.sm,
    fontWeight: '500',
    color: colors.textSecondary,
  },
  filterChipTextActive: {
    color: colors.white,
  },
});

export default PaymentScreen;
