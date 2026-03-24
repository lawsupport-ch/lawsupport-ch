---
title: "DLT Trading Facility Switzerland: Licence, Requirements & Process (2026)"
description: "Switzerland's DLT Trading Facility licence under the DLT Act 2021: who needs it, FINMA requirements, capital, and how it differs from a traditional exchange."
date: "19.03.2026"
category: "Licensing & Permits"
categoryHref: "/services/financial-licensing/"
readTime: "8 min read"
tocItems:
  - id: "legal-basis-the-dlt-act-and-the-fmia"
    title: "Legal Basis: The DLT Act and the FMIA"
  - id: "what-a-dlt-trading-facility-is-and-what-it-can-do"
    title: "What a DLT Trading Facility Is — and What It Can Do"
  - id: "the-critical-distinction-retail-access"
    title: "The Critical Distinction: Retail Access"
  - id: "who-needs-a-dlt-trading-facility-licence"
    title: "Who Needs a DLT Trading Facility Licence"
  - id: "comparison-dlt-trading-facility-vs-traditional-exchange-vs-s"
    title: "Comparison: DLT Trading Facility vs. Traditional Exchange vs. Securities Firm"
  - id: "finma-licensing-requirements"
    title: "FINMA Licensing Requirements"
  - id: "application-process-and-timeline"
    title: "Application Process and Timeline"
  - id: "market-status-in-2026"
    title: "Market Status in 2026"
  - id: "how-this-compares-to-other-swiss-licences"
    title: "How This Compares to Other Swiss Licences"
  - id: "next-steps"
    title: "Next Steps"
faqItems:
  - question: "Can a DLT Trading Facility trade cryptocurrencies like Bitcoin or Ether?"
    answer: "No. The DLT Trading Facility licence specifically covers **DLT securities** — ledger-based securities within the meaning of Art. 973d OR (Swiss Code of Obligations). Bitcoin and Ether are payment tokens or utility tokens, not securities, and do not qualify as Registerwertrechte. Trading those assets may fall under other regulatory frameworks, including VASP registration obligations, but not the DLT Trading Facility regime."
  - question: "Do we need a separate banking licence to operate a DLT Trading Facility?"
    answer: "Not necessarily. The DLT Trading Facility licence authorises trading, post-trade services, and custody of DLT securities. However, if the operator accepts cash deposits from clients — for example, as settlement funds — and those deposits exceed the FinTech licence threshold (CHF 100 million) or are held for longer than permitted under the FinTech regime, a banking licence becomes necessary. The exact structuring of cash flows through the platform is a critical licensing design question."
  - question: "How long does a DLT Trading Facility licence application realistically take?"
    answer: "FINMA has not published a fixed statutory timeline for DLT Trading Facility applications. Based on the applications processed since 2021, a realistic end-to-end timeline — from first FINMA engagement to licence grant — is **12 to 18 months**. Applications that arrive at FINMA with complete documentation, approved legal opinions, and finalised operating rules move faster. Applications requiring significant back-and-forth on the operating rules or IT security architecture take longer."
  - question: "What is the minimum capital required for a DLT Trading Facility in Switzerland?"
    answer: "A full DLT Trading Facility requires CHF 10 million minimum own funds. A limited-scope facility requires CHF 5 million. Capital must be held as paid-in equity and remain available at all times. Capital requirements are among the most significant barriers to entry for this licence category."
  - question: "Can retail investors trade on a DLT Trading Facility directly?"
    answer: "Yes. Unlike a traditional Swiss stock exchange, a DLT Trading Facility can admit non-professional participants directly. However, admitting retail participants triggers enhanced conduct-of-business and investor protection obligations that must be addressed in the operating rules submitted to FINMA for approval."
  - question: "What assets can be traded on a DLT Trading Facility?"
    answer: "Only DLT securities — ledger-based securities (Registerwertrechte) as defined under Art. 973d of the Swiss Code of Obligations. This includes tokenised bonds, equity interests, and structured products issued on a compliant DLT register. Cryptocurrencies such as Bitcoin are not DLT securities and cannot be traded on a DLT Trading Facility."
  - question: "Does a DLT Trading Facility need FINMA approval for its operating rules?"
    answer: "Yes. FINMA must approve the operating rules before the facility opens. Any material amendment to the rules after licensing also requires FINMA approval. This is a substantive review — not a notification procedure — and reviewing and approving operating rules typically adds several months to the application timeline."
  - question: "How does a DLT Trading Facility differ from a securities firm licence?"
    answer: "A securities firm licence authorises dealing in securities as principal or agent on behalf of clients. It does not authorise operating a trading venue. A securities firm that wants to run a DLT platform needs a separate DLT Trading Facility licence for the venue itself. The two licences serve different regulatory functions and are not interchangeable."
  - question: "Is SDX (SIX Digital Exchange) an example of a DLT Trading Facility?"
    answer: "SDX operates under the exchange licence framework as a subsidiary of SIX Group rather than as a standalone DLT Trading Facility applicant — an important structural distinction. Independent operators have progressed through FINMA's licensing pipeline since 2022 and represent the emerging cohort of genuine DLT Trading Facility licensees."
  - question: "What happens if you operate a DLT Trading Facility without a FINMA licence?"
    answer: "Operating without a licence is a criminal offence under Art. 44 FINMASA, with personal liability for management. FINMA can also issue injunctions, impose conditions, or order the cessation of business. The regulatory consequences of unlicensed operation are severe and extend to individuals responsible for the management of the entity."
---


Switzerland created a dedicated regulatory category for blockchain-based trading platforms when the DLT Act entered into force in February 2021. If you are building or operating a platform that enables the trading of tokenised securities on a distributed ledger, you are operating a **DLT Trading Facility** (DLT-Handelssystem) under Swiss law — and you need a FINMA licence to do it legally.

This guide covers the legal basis, what the licence permits, who needs it, capital and organisational requirements, and how the application process works in practice.

---

## Legal Basis: The DLT Act and the FMIA

Switzerland's DLT Trading Facility licence is created by **Articles 73a–73e of the Federal Financial Market Infrastructure Act (FMIA)**. These provisions were inserted by the Federal Act on the Adaptation of Federal Law to Developments in Distributed Ledger Technology — commonly called the **DLT Act** — which came into force on **1 February 2021**.

The DLT Act also amended the Swiss Code of Obligations (CO) to introduce **ledger-based securities** (*Registerwertrechte*) under Art. 973d OR. These are traditional securities — shares, bonds, structured products, derivatives — that are issued and transferred on a DLT-based register rather than through a conventional central securities depository. Legally, ledger-based securities are equivalent to book-entry securities. They are the asset class that a DLT Trading Facility is designed to trade.

FINMA's supervisory framework for DLT Trading Facilities sits within its existing financial market infrastructure regulation, but with rules calibrated specifically to distributed ledger-based systems. The <a href="https://www.fedlex.admin.ch/eli/fga/2020/2208/de" target="_blank" rel="nofollow noopener">full text of the DLT Act is available on Fedlex</a>.

---

## What a DLT Trading Facility Is — and What It Can Do

A DLT Trading Facility is a **trading platform that operates on a distributed ledger** and facilitates the buying and selling of DLT securities among participants. The legal definition in Art. 73a FMIA requires three elements: operation on a DLT, multilateral trading of DLT securities, and a rule-based system governing price formation.

Beyond trading, the DLT Trading Facility framework allows the **same licensed entity** to perform functions that traditional market infrastructure separates:

- **Trading** — matching buy and sell orders in DLT securities between admitted participants
- **Post-trade services** — clearing and settlement of trades, executed on the same DLT infrastructure rather than routed through a separate central counterparty or CSD
- **Custody** — safekeeping of DLT securities on behalf of participants

This vertical integration is explicitly prohibited for traditional Swiss stock exchanges, where trading, clearing, and custody must be handled by distinct entities. The DLT Trading Facility licence recognises that a single smart-contract-based system can perform all three functions simultaneously, and regulates it accordingly.

---

## The Critical Distinction: Retail Access

The most commercially significant difference between a DLT Trading Facility and a conventional Swiss exchange is **participant admission**.

A traditional stock exchange — including SIX Swiss Exchange — may only admit **professional participants**: regulated banks, securities firms, and equivalent institutions. Retail investors access the exchange indirectly through their bank or broker.

A DLT Trading Facility can admit **non-professional participants directly**. This means retail investors can, in principle, trade tokenised securities on the platform without going through an intermediary. That changes the distribution economics of tokenised assets substantially and is one reason the licence category attracted serious industry attention immediately after 2021.

The caveat: admitting retail participants triggers enhanced conduct-of-business and investor protection obligations. The operating rules submitted to FINMA must address how retail participants are onboarded, informed, and protected.

---

## Who Needs a DLT Trading Facility Licence

Any person who **operates a DLT Trading Facility commercially in Switzerland** requires a licence from FINMA under Art. 73a FMIA. The key triggers:

- You run a platform on a distributed ledger
- The platform facilitates multilateral trading (not just bilateral OTC)
- The assets traded are DLT securities (*Registerwertrechte*) within the meaning of Art. 973d OR
- You operate this as a business (commercial purpose, not a one-off transaction)

Operating without a licence is a criminal offence under Art. 44 FINMASA, with personal liability for management.

---

## Comparison: DLT Trading Facility vs. Traditional Exchange vs. Securities Firm

| Feature | DLT Trading Facility | Traditional Swiss Exchange | Securities Firm |
|---|---|---|---|
| Legal basis | Art. 73a–73e FMIA | Art. 26–38 FMIA | FinIA Art. 41 et seq. |
| Assets traded | DLT securities (Registerwertrechte) | Listed securities (equities, bonds, derivatives) | Any securities (as agent or principal) |
| Retail participants admitted | Yes (permitted) | No (professional only) | N/A — not a venue |
| Post-trade / clearing | Can be integrated in same entity | Separate CCP/CSD required | N/A |
| Custody | Can be provided by same entity | Not permitted at exchange level | Requires separate authorisation |
| Minimum capital (full scope) | CHF 10,000,000 | CHF 10,000,000+ (SIX level) | CHF 1,500,000–10,000,000 (varies by category) |
| FINMA authorisation required | Yes | Yes | Yes |
| Operating rules approval | Yes — FINMA must approve | Yes | No equivalent |

A **securities firm licence** authorises dealing in securities as principal or agent on behalf of clients. It does not authorise the operation of a trading venue. A securities firm that wanted to run a DLT platform would need a separate DLT Trading Facility licence for the venue itself. See our guide on [Crypto Licence Switzerland](/blog/crypto-license-switzerland/) for the broader licensing map.

---

## FINMA Licensing Requirements

### Minimum Capital

FINMA applies a two-tier capital structure:

- **Full DLT Trading Facility**: CHF **10,000,000** minimum own funds
- **Limited-scope DLT Trading Facility**: CHF **5,000,000** minimum own funds

The limited-scope category applies where the operator restricts the facility to certain participant types or asset classes, as defined in the FMIA and FMIO-FINMA regulations. In both cases, capital must be held as paid-in equity and must remain available at all times.

### Fit and Proper Management

Persons responsible for the management and administration of a DLT Trading Facility must demonstrate:

- Professional qualifications and relevant industry experience
- Good reputation — no criminal convictions for relevant offences, no regulatory sanctions
- No conflicts of interest that would compromise the integrity of the facility

FINMA assesses each key person individually. For foreign nationals in management roles, equivalent overseas regulatory standing is evaluated.

### Organisational Requirements

A DLT Trading Facility must establish and maintain:

- **Governance structure**: clear allocation of responsibilities, independent oversight functions, and board-level accountability for risk
- **Risk management**: documented frameworks covering operational risk, technology risk (including smart contract risk), liquidity risk, and counterparty risk
- **AML/KYC systems**: compliance with the Anti-Money Laundering Act (AMLA); participant onboarding must include identity verification, beneficial ownership determination, and transaction monitoring — this applies whether participants are institutional or retail
- **IT security**: FINMA-compliant cybersecurity architecture, penetration testing, incident response procedures, and business continuity planning
- **Operational resilience**: segregation of client assets, recovery and resolution planning

### Operating Rules

The operator must draft **operating rules** covering:

- Criteria and procedure for admitting participants (including any retail onboarding standards)
- Trading rules: order types, price formation mechanism, trading hours, suspension and cancellation of trades
- Clearing and settlement procedures
- Custody arrangements for DLT securities
- Default management procedures
- Fee structures

FINMA must **approve the operating rules** before the facility opens. Any material amendment to the rules after licensing also requires FINMA approval. This is a substantive review — not a notification procedure.

---

## Application Process and Timeline

A DLT Trading Facility licence application is a major regulatory project. Based on current FINMA practice, applicants should plan for:

| Phase | Content | Typical Duration |
|---|---|---|
| Pre-application engagement | Preliminary discussion with FINMA; scoping of licence category | 1–3 months |
| Application preparation | Legal documentation, business plan, operating rules, key person dossiers, IT architecture review, AML framework | 4–8 months |
| FINMA formal review | FINMA assessment, clarification rounds, operating rules review | 6–10 months |
| Licence grant | Conditions precedent satisfied; licence issued | 1–2 months |
| **Total** | | **12–18 months** |

The application package typically runs to several hundred pages. FINMA requires a **business plan** covering at minimum three years of projected financials, a full description of the DLT system, legal opinions on the classification of assets as Registerwertrechte, and a complete set of draft operating rules.

FINMA may grant a licence subject to conditions — for example, requiring certain IT audits to be completed within six months of licensing, or restricting participant admission to professional counterparties initially.

---

## Market Status in 2026

Switzerland has moved from legislation to live infrastructure. **SDX (SIX Digital Exchange)**, the digital asset subsidiary of SIX Group, operates a FINMA-regulated DLT-based platform for the issuance and trading of digital securities. SDX operates under the exchange licence framework as a subsidiary of SIX rather than as a standalone DLT Trading Facility applicant — an important structural distinction.

Independent operators have progressed through FINMA's licensing pipeline since 2022. As of early 2026, Switzerland has issued initial DLT Trading Facility licences to independent applicants, establishing the category as a functioning part of Swiss financial market infrastructure rather than a legislative aspiration.

The pipeline of applicants includes operators targeting tokenised bonds, real estate securities, and private equity interests — asset classes where the liquidity benefits of a regulated secondary market, combined with potential retail access, are commercially meaningful.

---

## How This Compares to Other Swiss Licences

Operators in the digital asset space often ask how the DLT Trading Facility relates to adjacent licence categories:

- **FinTech licence (Art. 1b BA)**: Permits deposit-taking up to CHF 100 million and limited financial services. Does not authorise operating a trading venue for securities. See our [FINMA licensing Switzerland](/blog/finma-licensing-switzerland/) guide.
- **Banking licence**: Required for deposit-taking above FinTech thresholds. SEBA Bank (now AMINA) and Sygnum Bank hold full banking licences covering crypto asset services — but as banks, not as DLT Trading Facilities. The trading venue function requires a separate authorisation.
- **VASP registration**: Switzerland requires registration as a Virtual Asset Service Provider under AMLA for certain crypto activities. Registration is an AML compliance measure, not a licence to operate a trading venue for securities.
- **ICO / token issuance**: Issuing tokenised securities requires analysis of whether the tokens qualify as securities under FinSA and whether the ledger-based securities framework applies. See our [crypto licence Switzerland](/blog/crypto-license-switzerland/) guide for the full licensing map.
- **[Company formation Switzerland](/blog/company-formation-switzerland/)**: Any DLT Trading Facility must be incorporated as a Swiss entity — the licence cannot be held by a foreign company operating in Switzerland without a local entity.

---

## Frequently Asked Questions

**Can a DLT Trading Facility trade cryptocurrencies like Bitcoin or Ether?**

No. The DLT Trading Facility licence specifically covers **DLT securities** — ledger-based securities within the meaning of Art. 973d OR (Swiss Code of Obligations). Bitcoin and Ether are payment tokens or utility tokens, not securities, and do not qualify as Registerwertrechte. Trading those assets may fall under other regulatory frameworks, including VASP registration obligations, but not the DLT Trading Facility regime.

**Do we need a separate banking licence to operate a DLT Trading Facility?**

Not necessarily. The DLT Trading Facility licence authorises trading, post-trade services, and custody of DLT securities. However, if the operator accepts cash deposits from clients — for example, as settlement funds — and those deposits exceed the FinTech licence threshold (CHF 100 million) or are held for longer than permitted under the FinTech regime, a banking licence becomes necessary. The exact structuring of cash flows through the platform is a critical licensing design question.

**How long does a DLT Trading Facility licence application realistically take?**

FINMA has not published a fixed statutory timeline for DLT Trading Facility applications. Based on the applications processed since 2021, a realistic end-to-end timeline — from first FINMA engagement to licence grant — is **12 to 18 months**. Applications that arrive at FINMA with complete documentation, approved legal opinions, and finalised operating rules move faster. Applications requiring significant back-and-forth on the operating rules or IT security architecture take longer.

**What is the minimum capital required for a DLT Trading Facility in Switzerland?**

A full DLT Trading Facility requires CHF 10 million minimum own funds. A limited-scope facility requires CHF 5 million. Capital must be held as paid-in equity and remain available at all times. Capital requirements are among the most significant barriers to entry for this licence category.

**Can retail investors trade on a DLT Trading Facility directly?**

Yes. Unlike a traditional Swiss stock exchange, a DLT Trading Facility can admit non-professional participants directly. However, admitting retail participants triggers enhanced conduct-of-business and investor protection obligations that must be addressed in the operating rules submitted to FINMA for approval.

**What assets can be traded on a DLT Trading Facility?**

Only DLT securities — ledger-based securities (Registerwertrechte) as defined under Art. 973d of the Swiss Code of Obligations. This includes tokenised bonds, equity interests, and structured products issued on a compliant DLT register. Cryptocurrencies such as Bitcoin are not DLT securities and cannot be traded on a DLT Trading Facility.

**Does a DLT Trading Facility need FINMA approval for its operating rules?**

Yes. FINMA must approve the operating rules before the facility opens. Any material amendment to the rules after licensing also requires FINMA approval. This is a substantive review — not a notification procedure — and reviewing and approving operating rules typically adds several months to the application timeline.

**How does a DLT Trading Facility differ from a securities firm licence?**

A securities firm licence authorises dealing in securities as principal or agent on behalf of clients. It does not authorise operating a trading venue. A securities firm that wants to run a DLT platform needs a separate DLT Trading Facility licence for the venue itself. The two licences serve different regulatory functions and are not interchangeable.

**Is SDX (SIX Digital Exchange) an example of a DLT Trading Facility?**

SDX operates under the exchange licence framework as a subsidiary of SIX Group rather than as a standalone DLT Trading Facility applicant — an important structural distinction. Independent operators have progressed through FINMA's licensing pipeline since 2022 and represent the emerging cohort of genuine DLT Trading Facility licensees.

**What happens if you operate a DLT Trading Facility without a FINMA licence?**

Operating without a licence is a criminal offence under Art. 44 FINMASA, with personal liability for management. FINMA can also issue injunctions, impose conditions, or order the cessation of business. The regulatory consequences of unlicensed operation are severe and extend to individuals responsible for the management of the entity.

---

## Next Steps

A DLT Trading Facility licence is a major regulatory undertaking. The minimum capital thresholds, the depth of the application package, and FINMA's substantive review of operating rules mean that this is a project requiring specialist legal and regulatory support from the outset — not something to assemble reactively during the FINMA review.

Lawsupport (Morgan Hartley Consulting GmbH) advises clients on the full licensing process: from initial assessment of whether the DLT Trading Facility is the right licence category, through application preparation, FINMA engagement, and post-licensing compliance. We work with operators across the digital asset and traditional financial services sectors from our base in Zug.

[Request a Free Assessment](/contacts/) to discuss your specific licensing situation, timeline, and how the DLT Trading Facility fits alongside other Swiss financial licences.

**Morgan Hartley | Senior Corporate Lawyer & Partner**
Lawsupport (Morgan Hartley Consulting GmbH)
Grafenauweg 4, Zug, Switzerland
+41 44 51 52 592 | info@lawsupport.ch

*Further reading: <a href="https://www.finma.ch/en/authorisation/" target="_blank" rel="nofollow noopener">FINMA — DLT Trading Facility overview</a> | <a href="https://www.fedlex.admin.ch/eli/fga/2020/2208/de" target="_blank" rel="nofollow noopener">DLT Act full text on Fedlex</a> | <a href="https://www.seco.admin.ch/" target="_blank" rel="nofollow noopener">SECO — Swiss financial market regulation</a>*
