export const CATEGORY_TO_COCOON: Record<string, string> = {
  "Company Formation": "company-formation",
  "Tax & Accounting": "tax-accounting",
  "Immigration": "immigration",
  "Licensing & Permits": "licensing",
  "Banking & Finance": "banking",
  "IP & Commercial Law": "intellectual-property",
  "Company Administration": "corporate-services",
  "Corporate Transactions": "corporate-transactions",
  "Employment Law": "employment-law",
  "Swiss Legal System": "corporate-services",
  "Swiss Corporate Law": "tax-accounting",
};

export const COCOON_META: Record<string, { title: string; description: string }> = {
  "company-formation": {
    title: "Company Formation in Switzerland",
    description: "Expert guides on forming companies in Switzerland: AG, GmbH, branches, foundations, cooperatives and more. Practical advice from Swiss corporate lawyers.",
  },
  "tax-accounting": {
    title: "Tax & Accounting in Switzerland",
    description: "Swiss tax guides covering corporate tax, VAT, withholding tax, payroll, cantonal rates, and accounting requirements for businesses.",
  },
  "immigration": {
    title: "Immigration to Switzerland",
    description: "Guides on Swiss immigration: work permits, residence permits, citizenship, family reunification, and relocating to Switzerland as a foreigner.",
  },
  "licensing": {
    title: "Licensing & Permits in Switzerland",
    description: "Swiss licensing guides: FINMA authorisation, crypto licences, banking permits, fintech, SRO membership, and other regulatory requirements.",
  },
  "banking": {
    title: "Banking & Finance in Switzerland",
    description: "Swiss banking guides: opening accounts, private banking, cantonal banks, corporate accounts, and understanding the Swiss banking system.",
  },
  "intellectual-property": {
    title: "IP & Commercial Law in Switzerland",
    description: "Intellectual property guides for Switzerland: trademarks, patents, copyright, design registration, and commercial law essentials.",
  },
  "corporate-services": {
    title: "Corporate Services in Switzerland",
    description: "Swiss corporate services guides: registered addresses, nominee directors, virtual offices, accounting software, and company administration.",
  },
  "corporate-transactions": {
    title: "Corporate Transactions in Switzerland",
    description: "Guides on Swiss corporate transactions: mergers and acquisitions, due diligence, restructuring, venture capital, and buying companies.",
  },
  "employment-law": {
    title: "Employment Law in Switzerland",
    description: "Swiss employment law guides: contracts, termination, working hours, and employer obligations under Swiss labour law.",
  },
};

export function getCocoon(category: string): string {
  return CATEGORY_TO_COCOON[category] || "corporate-services";
}
