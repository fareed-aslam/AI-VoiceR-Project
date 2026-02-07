import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { Polar } from "@polar-sh/sdk";

import { checkout, polar, portal, webhooks } from "@polar-sh/better-auth";
import { env } from "~/env";
import { db } from "~/server/db";

const polarClient = new Polar({
  accessToken: env.POLAR_ACCESS_TOKEN,
  server: "sandbox",
});

const prisma = new PrismaClient();
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
  },

  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: [
            {
              productId: "307a18ec-7b72-4f48-a8e4-37aa8d6e8bfb",
              slug: "small",
            },
            {
              productId: "29cd1f3c-f6cb-49e7-a73d-cdfcc838dc99",
              slug: "medium",
            },
            {
              productId: "249b8b93-3a89-47c9-9a77-bc175e60025f",
              slug: "large",
            },
          ],
          successUrl: "/dashboard",
          authenticatedUsersOnly: true,
        }),
        portal(),
        webhooks({
          secret: env.POLAR_WEBHOOK_SECRET,
          onOrderPaid: async (order) => {
            const externalCustomerId = order.data.customer.externalId;

            if (!externalCustomerId) {
              console.error("No external customer ID found.");
              throw new Error("No external customer id found.");
            }

            const productId = order.data.productId;

            let creditsToAdd = 0;

            switch (productId) {
              case "307a18ec-7b72-4f48-a8e4-37aa8d6e8bfb":
                creditsToAdd = 60;
                break;
              case "29cd1f3c-f6cb-49e7-a73d-cdfcc838dc99":
                creditsToAdd = 200;
                break;
              case "249b8b93-3a89-47c9-9a77-bc175e60025f":
                creditsToAdd = 5000;
                break;
            }

            await db.user.update({
              where: { id: externalCustomerId },
              data: {
                credits: {
                  increment: creditsToAdd,
                },
              },
            });
          },
        }),
      ],
    }),
  ],
});
