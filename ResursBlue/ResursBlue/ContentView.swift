//
//  ContentView.swift
//  ResursBlue
//
//  Created by Marjan Zahedi on 2026-01-16.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        TabView {
            DashboardView()
                .tabItem {
                    Label("Home", systemImage: "house.fill")
                }

            CardsView()
                .tabItem {
                    Label("Cards", systemImage: "creditcard.fill")
                }

            ProfileView()
                .tabItem {
                    Label("Profile", systemImage: "person.crop.circle")
                }
        }
    }
}

private struct DashboardView: View {
    var body: some View {
        ZStack {
            Color(.systemGroupedBackground)
                .ignoresSafeArea()

            VStack(spacing: 0) {
                header

                ScrollView {
                    VStack(spacing: 20) {
                        topSummary
                        cardSection
                        actionRow
                        quickActions
                        recentActivity
                        Spacer(minLength: 24)
                    }
                    .padding(.horizontal, 20)
                    .padding(.top, 8)
                }
            }
        }
    }
}

private struct CardsView: View {
    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 16) {
                    cardTile(
                        title: "Resurs Gold",
                        subtitle: "Primary credit card",
                        balance: "20 000 kr",
                        gradient: [Color(red: 0.06, green: 0.36, blue: 0.33),
                                   Color(red: 0.03, green: 0.22, blue: 0.20)]
                    )
                    cardTile(
                        title: "Everyday",
                        subtitle: "Virtual card",
                        balance: "4 250 kr",
                        gradient: [Color(red: 0.20, green: 0.32, blue: 0.55),
                                   Color(red: 0.12, green: 0.18, blue: 0.36)]
                    )
                }
                .padding(.horizontal, 20)
                .padding(.top, 12)
            }
            .navigationTitle("Cards")
            .background(Color(.systemGroupedBackground))
        }
    }

    private func cardTile(title: String, subtitle: String, balance: String, gradient: [Color]) -> some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(title)
                .font(.system(size: 18, weight: .semibold))
                .foregroundStyle(.white)
            Text(subtitle)
                .font(.system(size: 14, weight: .regular))
                .foregroundStyle(.white.opacity(0.8))
            Spacer()
            Text(balance)
                .font(.system(size: 22, weight: .semibold))
                .foregroundStyle(.white)
        }
        .padding(16)
        .frame(maxWidth: .infinity, minHeight: 140, alignment: .leading)
        .background(
            LinearGradient(colors: gradient, startPoint: .topLeading, endPoint: .bottomTrailing)
        )
        .clipShape(RoundedRectangle(cornerRadius: 18, style: .continuous))
        .shadow(color: Color.black.opacity(0.12), radius: 10, x: 0, y: 6)
    }
}

private struct ProfileView: View {
    var body: some View {
        NavigationStack {
            List {
                Section("Account") {
                    profileRow(title: "Personal info", icon: "person.fill")
                    profileRow(title: "Security", icon: "lock.fill")
                    profileRow(title: "Notifications", icon: "bell.fill")
                }
                Section("Support") {
                    profileRow(title: "Help center", icon: "questionmark.circle.fill")
                    profileRow(title: "Contact us", icon: "message.fill")
                }
            }
            .navigationTitle("Profile")
        }
    }

    private func profileRow(title: String, icon: String) -> some View {
        HStack(spacing: 12) {
            Image(systemName: icon)
                .foregroundStyle(.blue)
                .frame(width: 28)
            Text(title)
                .font(.system(size: 16, weight: .medium))
            Spacer()
            Image(systemName: "chevron.right")
                .foregroundStyle(.secondary)
        }
        .padding(.vertical, 6)
    }
}

private extension DashboardView {
    var header: some View {
        HStack {
            Button(action: {}) {
                Image(systemName: "chevron.left")
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundStyle(.primary)
            }

            Text("Resurs Gold")
                .font(.system(size: 16, weight: .semibold))
                .foregroundStyle(.primary)

            Spacer()

            Button(action: {}) {
                Image(systemName: "ellipsis")
                    .font(.system(size: 18, weight: .semibold))
                    .foregroundStyle(.primary)
                    .rotationEffect(.degrees(90))
            }
        }
        .padding(.horizontal, 20)
        .padding(.top, 10)
        .padding(.bottom, 8)
    }

    var topSummary: some View {
        VStack(spacing: 12) {
            Text("Kalle Anka")
                .font(.system(size: 20, weight: .semibold))
                .foregroundStyle(.primary)

            VStack(spacing: 6) {
                Text("Available credit")
                    .font(.system(size: 15, weight: .regular))
                    .foregroundStyle(.secondary)

                Text("20 000 kr")
                    .font(.system(size: 32, weight: .semibold))
                    .foregroundStyle(.primary)
            }

            HStack(spacing: 8) {
                Text("Bonus points")
                    .font(.system(size: 15, weight: .regular))
                    .foregroundStyle(.secondary)
                Text("10 000 points")
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundStyle(.primary)
            }
        }
        .frame(maxWidth: .infinity)
    }

    var cardSection: some View {
        ZStack(alignment: .topTrailing) {
            VStack(spacing: 16) {
                RoundedRectangle(cornerRadius: 18, style: .continuous)
                    .fill(
                        LinearGradient(
                            colors: [
                                Color(red: 0.06, green: 0.36, blue: 0.33),
                                Color(red: 0.03, green: 0.22, blue: 0.20)
                            ],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .frame(height: 180)
                    .overlay(
                        VStack(alignment: .leading, spacing: 8) {
                            Text("CREDIT")
                                .font(.system(size: 11, weight: .semibold))
                                .foregroundStyle(Color.white.opacity(0.7))

                            Spacer()

                            HStack(spacing: 8) {
                                Image(systemName: "lock.fill")
                                    .font(.system(size: 14, weight: .semibold))
                                    .foregroundStyle(.white)
                                Text("Not activated")
                                    .font(.system(size: 16, weight: .semibold))
                                    .foregroundStyle(.white)
                                Image(systemName: "speaker.wave.2.fill")
                                    .font(.system(size: 14, weight: .semibold))
                                    .foregroundStyle(.white)
                            }
                        }
                        .padding(16)
                    )
            }

            HStack(spacing: -10) {
                Circle()
                    .fill(Color(red: 0.95, green: 0.25, blue: 0.17))
                    .frame(width: 50, height: 50)
                    .overlay(
                        Text("J")
                            .font(.system(size: 20, weight: .semibold))
                            .foregroundStyle(.white)
                    )

                Circle()
                    .fill(Color.white)
                    .frame(width: 50, height: 50)
                    .overlay(
                        Image(systemName: "person.fill")
                            .font(.system(size: 18, weight: .semibold))
                            .foregroundStyle(.secondary)
                    )
                    .shadow(color: Color.black.opacity(0.12), radius: 6, x: 0, y: 4)

                Circle()
                    .fill(Color.white)
                    .frame(width: 50, height: 50)
                    .overlay(
                        Image(systemName: "person.fill")
                            .font(.system(size: 18, weight: .semibold))
                            .foregroundStyle(.secondary)
                    )
                    .shadow(color: Color.black.opacity(0.12), radius: 6, x: 0, y: 4)
            }
            .offset(x: 12, y: -24)
        }
        .padding(.top, 8)
    }

    var actionRow: some View {
        HStack(spacing: 12) {
            Circle()
                .fill(Color(red: 0.77, green: 0.92, blue: 0.90))
                .frame(width: 44, height: 44)
                .overlay(
                    Image(systemName: "lock.fill")
                        .font(.system(size: 18, weight: .semibold))
                        .foregroundStyle(Color(red: 0.0, green: 0.52, blue: 0.47))
                )

            VStack(alignment: .leading, spacing: 4) {
                Text("Activate card")
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundStyle(.primary)
                Text("Activate your card to start using it")
                    .font(.system(size: 13, weight: .regular))
                    .foregroundStyle(.secondary)
            }

            Spacer()

            Image(systemName: "chevron.right")
                .font(.system(size: 16, weight: .semibold))
                .foregroundStyle(.secondary)
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 14)
        .background(Color.white)
        .clipShape(RoundedRectangle(cornerRadius: 16, style: .continuous))
        .shadow(color: Color.black.opacity(0.05), radius: 10, x: 0, y: 4)
    }

    var quickActions: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Quick actions")
                .font(.system(size: 16, weight: .semibold))
                .foregroundStyle(.primary)

            HStack(spacing: 12) {
                quickActionTile(title: "Pay bill", icon: "arrow.up.right.circle.fill", color: .blue)
                quickActionTile(title: "Transfer", icon: "arrow.left.arrow.right.circle.fill", color: .teal)
                quickActionTile(title: "Freeze", icon: "snowflake", color: .indigo)
            }
        }
        .frame(maxWidth: .infinity, alignment: .leading)
    }

    func quickActionTile(title: String, icon: String, color: Color) -> some View {
        VStack(spacing: 8) {
            Image(systemName: icon)
                .font(.system(size: 22, weight: .semibold))
                .foregroundStyle(color)
            Text(title)
                .font(.system(size: 13, weight: .medium))
                .foregroundStyle(.primary)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 12)
        .background(Color.white)
        .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
        .shadow(color: Color.black.opacity(0.05), radius: 8, x: 0, y: 4)
    }

    var recentActivity: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Recent activity")
                .font(.system(size: 16, weight: .semibold))
                .foregroundStyle(.primary)

            VStack(spacing: 12) {
                activityRow(title: "Grocery store", subtitle: "Today • Card payment", amount: "- 425 kr")
                activityRow(title: "Salary", subtitle: "Yesterday • Incoming transfer", amount: "+ 28 300 kr")
                activityRow(title: "Streaming", subtitle: "Jan 15 • Subscription", amount: "- 129 kr")
            }
        }
        .frame(maxWidth: .infinity, alignment: .leading)
    }

    func activityRow(title: String, subtitle: String, amount: String) -> some View {
        HStack {
            VStack(alignment: .leading, spacing: 4) {
                Text(title)
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundStyle(.primary)
                Text(subtitle)
                    .font(.system(size: 12, weight: .regular))
                    .foregroundStyle(.secondary)
            }

            Spacer()

            Text(amount)
                .font(.system(size: 15, weight: .semibold))
                .foregroundStyle(amount.hasPrefix("-") ? .primary : .green)
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 12)
        .background(Color.white)
        .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
        .shadow(color: Color.black.opacity(0.04), radius: 6, x: 0, y: 3)
    }
}

#Preview {
    ContentView()
}
