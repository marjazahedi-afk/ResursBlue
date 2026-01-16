//
//  ContentView.swift
//  ResursBlue
//
//  Created by Marjan Zahedi on 2026-01-16.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 0) {
            ZStack {
                Text("Resurs")
                    .font(.system(size: 17, weight: .semibold))
                    .foregroundStyle(.primary)
                HStack {
                    Button("Close") {}
                        .font(.system(size: 16, weight: .medium))
                        .foregroundStyle(.blue)
                    Spacer()
                }
            }
            .padding(.horizontal, 20)
            .padding(.top, 12)

            VStack(spacing: 20) {
                Image("Icon1")
                    .resizable()
                    .scaledToFill()
                    .frame(width: 88, height: 88)
                    .clipShape(Circle())

                VStack(alignment: .leading, spacing: 12) {
                    Text("BankID is temporarily unavailable")
                        .font(.system(size: 26, weight: .semibold))
                        .foregroundStyle(.primary)

                    Text("We couldn't complete the identification because BankID is not responding right now.")
                        .font(.system(size: 16, weight: .regular))
                        .foregroundStyle(.secondary)
                        .fixedSize(horizontal: false, vertical: true)

                    Text("Your identification was not completed.")
                        .font(.system(size: 16, weight: .regular))
                        .foregroundStyle(.secondary)
                        .fixedSize(horizontal: false, vertical: true)

                    Text("Please try again in a few minutes.")
                        .font(.system(size: 16, weight: .regular))
                        .foregroundStyle(.secondary)
                        .fixedSize(horizontal: false, vertical: true)
                }

                Button(action: {}) {
                    Text("Try again")
                        .font(.system(size: 17, weight: .semibold))
                        .foregroundStyle(.white)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 14)
                }
                .frame(maxWidth: 260)
                .background(
                    LinearGradient(
                        colors: [Color(red: 0.22, green: 0.36, blue: 0.46),
                                 Color(red: 0.33, green: 0.52, blue: 0.72)],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .clipShape(Capsule())
                .shadow(color: Color.black.opacity(0.15), radius: 8, x: 0, y: 4)

                Button("NEED HELP?") {}
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(.blue)

                Spacer(minLength: 0)

                Text("v1.73.8+3033 (prod)")
                    .font(.system(size: 12, weight: .medium))
                    .foregroundStyle(.secondary)
            }
            .padding(.horizontal, 24)
            .padding(.top, 40)
            .padding(.bottom, 24)
        }
    }
}

#Preview {
    ContentView()
}
