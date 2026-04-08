---
title: "VASP Registration Switzerland: SRO Guide (2026)"
description: "VASP registration in Switzerland under AMLA: SRO membership, VQF application process, AML compliance costs from CHF 3,000, and timelines."
date: "13.08.2026"
publishDate: "2026-08-13"
heroImage: "/images/crypto-blockchain-hero.webp"
category: "Licensing & Permits"
categoryHref: "/licensing/"
readTime: "14 min read"
faqItems:
  - question: "Do I need a VASP registration if my platform is non-custodial?"
    answer: "If your platform never holds, controls, or has the technical ability to move client virtual assets, the custodial VASP analysis generally does not apply. However, if your platform facilitates exchanges between clients, the exchange activity may still constitute a VASP activity under AMLA. A business model assessment is required."
  - question: "How long does VQF membership take?"
    answer: "For a well-prepared application with complete documentation, the typical timeline is three to six months. Incomplete applications or those requiring multiple supplemental submissions take longer. Applicants with novel or complex business models should allow six to nine months."
  - question: "Can a foreign company register as a Swiss VASP without a Swiss entity?"
    answer: "No. Swiss AMLA registration requires a Swiss legal entity — a GmbH or AG registered in the Swiss Commercial Register. A branch of a foreign company may qualify in limited circumstances, but the standard approach is to establish a Swiss operating entity before applying for SRO membership."
  - question: "What is the difference between VQF membership and a FINMA licence?"
    answer: "VQF membership satisfies the AMLA affiliation requirement for financial intermediaries at the SRO level. A FINMA licence is a direct regulatory authorisation carrying higher capital, governance, and reporting requirements. Most VASPs require VQF membership, not a FINMA licence. The two are not mutually exclusive."
  - question: "How much does VASP registration cost in Switzerland?"
    answer: "VQF first-year membership fees range from CHF 3,000 to CHF 15,000 depending on business size. AML compliance programme preparation typically costs CHF 10,000 to CHF 30,000 in legal and consulting fees. Annual ongoing compliance maintenance runs CHF 5,000-12,000 for a mid-sized VASP."
  - question: "Does a Swiss VASP need to comply with the Travel Rule?"
    answer: "Yes. Swiss VASPs must comply with the Travel Rule under FINMA guidance, transmitting originator and beneficiary information for virtual asset transfers above CHF 1,000. The obligation applies to both on-chain and off-chain transfers between VASPs."
  - question: "Can a VASP hold client fiat currency in Switzerland?"
    answer: "Holding client fiat funds may constitute deposit-taking, which requires a banking licence from FINMA. Most VASPs structure operations to avoid holding client fiat directly, instead using segregated client accounts at licensed Swiss banks or payment institutions."
  - question: "What AML training requirements apply to Swiss VASPs?"
    answer: "VQF members must provide annual AML training to all employees involved in client onboarding, transaction monitoring, and compliance functions. Training must cover current typologies, sanctions screening, and reporting obligations. Records of training must be maintained for audit purposes."
  - question: "How does Switzerland classify stablecoins for VASP purposes?"
    answer: "FINMA classifies stablecoins based on their underlying structure. Asset-backed stablecoins may qualify as deposits (banking regulation) or collective investment schemes. Algorithmic stablecoins are treated as payment tokens. The classification determines which regulatory framework applies to the VASP handling them."
  - question: "What ongoing reporting must a registered Swiss VASP provide to VQF?"
    answer: "VQF members must submit an annual self-assessment questionnaire, report suspicious activity to MROS within the statutory deadline, maintain transaction records for ten years, and undergo periodic on-site audits by VQF-appointed auditors. Material changes to business activities must be reported promptly."
tocItems:
  - id: "what-is-a-vasp-under-swiss-law"
    title: "What Is a VASP Under Swiss Law?"
  - id: "swiss-vasp-registration-routes"
    title: "Swiss VASP Registration Routes"
  - id: "when-is-vasp-registration-required"
    title: "When Is VASP Registration Required?"
  - id: "the-vqf-application-process"
    title: "The VQF Application Process"
  - id: "vasp-registration-requirements-checklist"
    title: "VASP Registration Requirements Checklist"
  - id: "costs-what-to-budget"
    title: "Costs: What to Budget"
  - id: "common-reasons-for-vqf-application-rejection"
    title: "Common Reasons for VQF Application Rejection"
  - id: "vasp-company-structure-operating-entity-and-foundation"
    title: "VASP + Company Structure: Operating Entity and Foundation"
  - id: "swiss-vasp-registration-as-an-international-credential"
    title: "Swiss VASP Registration as an International Credential"
  - id: "real-world-scenario"
    title: "Real-World Scenario"
  - id: "how-lawsupport-supports-your-vasp-registration"
    title: "How Morgan Hartley Consulting Supports Your VASP Registration"
  - id: "get-your-swiss-vasp-registration-right"
    title: "Get Your Swiss VASP Registration Right"
relatedArticles:
  - title: "Crypto Licence Switzerland: FINMA & VASP Guide"
    href: "/licensing/crypto-license-switzerland/"
  - title: "SRO Membership Switzerland: Requirements & Costs"
    href: "/licensing/sro-membership-switzerland/"
  - title: "ICO & Token Issuance Switzerland: FINMA Rules"
    href: "/licensing/ico-token-issuance-switzerland/"
---


Switzerland has established one of the most clearly structured regulatory frameworks for virtual asset service providers in the world. If your company exchanges cryptocurrencies, custodies digital assets for clients, or provides crypto payment infrastructure, you are almost certainly a VASP under Swiss law and must register with a FINMA-recognised Self-Regulatory Organisation (SRO) before operating. VASP registration in Switzerland is governed by the Anti-Money Laundering Act (AMLA), with the VQF as the principal SRO for crypto businesses. First-year VQF membership fees start at CHF 3,000, and the application process typically takes three to six months. This guide explains exactly what that means, how the process works, and what it costs.

---

## What Is a VASP Under Swiss Law?

The term "virtual asset service provider" does not appear as a standalone category in a dedicated Swiss VASP law. Instead, the obligation flows from the **Anti-Money Laundering Act (AMLA / Geldwaeschereigesetz, GwG)**. Under AMLA, any natural or legal person who carries out financial intermediation as a main business activity is a *financial intermediary* and must either join a FINMA-recognised SRO or obtain direct [FINMA authorisation](/licensing/finma-licensing-switzerland/).

Since Switzerland adopted the updates to **FATF Recommendation 15** through an amendment to AMLA and related FINMA ordinances, virtual asset service activities have been explicitly brought within the scope of financial intermediation. A company is a VASP under Swiss AMLA when its main business involves one or more of the following:

- **Exchanging** virtual assets against fiat currency or against other virtual assets for clients
- **Transferring** virtual assets on behalf of clients
- **Safekeeping (custodying)** virtual assets or private keys for clients
- **Issuing** tokens or virtual assets in a service capacity
- **Participating in or providing financial services related to** an issuer's offer or sale of virtual assets

"Virtual assets" under the Swiss framework includes cryptocurrencies (Bitcoin, Ether, and similar), stablecoins, and other crypto-assets that function as a medium of exchange or store of value — consistent with the FATF definition.

The key threshold is **main activity**. If virtual asset services are ancillary to another licensed activity, a separate analysis is required. For most crypto businesses — exchanges, brokers, custodians, payment processors — the activity is plainly the main business.

---

## Swiss VASP Registration Routes

There are two routes to compliant VASP status in Switzerland.

### Route 1: SRO Membership (Most VASPs)

The standard route for virtual asset service providers is **membership in a FINMA-recognised Self-Regulatory Organisation**. The SRO supervises the member's compliance with AMLA obligations. Once accepted, the member is deemed to have fulfilled the affiliation requirement under AMLA Art. 14.

The principal SRO for crypto businesses in Switzerland is **VQF (Verein zur Qualitaetssicherung von Finanzdienstleistungen)**. VQF has over 1,000 members and has developed specific AML compliance standards for virtual asset businesses. Other FINMA-recognised SROs include PolyReg and the SRO of the Swiss Cantonal Banks, but VQF is the dominant choice for crypto VASPs.

SRO membership is appropriate when the VASP activity does not, in itself, also trigger a requirement for a banking licence or a securities dealer authorisation. Most token exchanges, crypto brokers, and custodians fall within this category. For a broader overview of [crypto licensing requirements in Switzerland](/licensing/crypto-license-switzerland/), including activity-specific licence thresholds, see our dedicated guide.

### Route 2: Direct FINMA Authorisation (Larger VASPs)

If the scale or nature of the business triggers additional regulated activities — for example, accepting deposits from the public (banking licence threshold) or trading securities on a proprietary basis — the entity will require **direct FINMA authorisation** rather than, or in addition to, SRO membership.

VASPs operating at institutional scale, running a multilateral trading facility, or acting as a crypto bank must engage directly with FINMA and meet the full capitalisation, governance, and risk management requirements that apply to the relevant licence category. Details on the [FINMA licensing process](/licensing/finma-licensing-switzerland/) are covered in our separate guide.

---

## When Is VASP Registration Required?

Your company requires AMLA registration (SRO membership or FINMA authorisation) if its main business includes any of the following:

| Activity | Registration Required? |
|---|---|
| Fiat-to-crypto exchange for clients | Yes |
| Crypto-to-crypto exchange for clients | Yes |
| Custodying crypto or private keys for clients | Yes |
| Crypto payment processing for merchants | Yes |
| Token issuance with ongoing service obligations | Yes (case-by-case) |
| Operating a crypto lending or yield platform | Yes (case-by-case) |
| DeFi protocol with no central service provider | No |
| Pure software development, no client asset handling | No |
| Bitcoin mining operations only | No |
| Running a non-custodial wallet (no asset control) | Generally No |

The line between "custodial" and "non-custodial" is closely scrutinised. If your platform ever holds, controls, or has the technical ability to move client assets — even temporarily — the custodial analysis applies.

---

## The VQF Application Process

The VQF membership application is a structured compliance process. The typical timeline is **three to six months** from submission of a complete application to formal acceptance.

### Step 1: Pre-Application Assessment

Before submitting, the business model must be mapped against AMLA obligations. This includes identifying which VASP activities the company performs, which client relationships trigger KYC obligations, and what transaction monitoring approach is appropriate for the specific asset classes handled.

### Step 2: AML Compliance Programme Preparation

VQF requires a written AML compliance programme before application. This is not a template document — it must reflect the actual business model. The programme must cover:

- **Written AML policy and procedures** specific to the company's services
- **KYC/CDD procedures** aligned with AMLA Art. 3-8: client identification above thresholds, identity verification, source of funds determination for higher-risk clients
- **Transaction monitoring system**: rules-based or analytics-based monitoring appropriate to the volume and risk profile
- **MROS reporting procedures**: clear internal escalation path to file suspicious activity reports with the Money Laundering Reporting Office Switzerland
- **Staff training programme**: documented onboarding and annual AML training for all relevant personnel
- **Risk classification framework**: tiering of clients and products by AML risk

### Step 3: Application Submission

The formal application to VQF includes: corporate documents, business model description, AML compliance programme, CVs and background documentation for directors and ultimate beneficial owners, and a regulatory questionnaire.

### Step 4: VQF Compliance Committee Review

VQF's compliance committee reviews the application in full. They will typically raise questions on the KYC procedures, the transaction monitoring methodology, and the business model's risk profile. Directors and beneficial owners are subject to a background check and must meet the fit-and-proper standard.

A practical warning: VQF can raise additional requests at any stage, and the timeline for these requests is unpredictable. There is no fixed number of review rounds. Applicants with novel or complex business models should expect multiple supplemental submissions and allow six to nine months rather than three to six.

### Step 5: Acceptance and Ongoing Obligations

Upon acceptance, the VASP is a regulated financial intermediary under Swiss law. Ongoing obligations include:

- Annual compliance reporting to VQF
- Periodic compliance inspections (on-site or document-based)
- Immediate notification of material changes to the business model, ownership, or AML programme
- Maintenance of the AML compliance programme as the business evolves

<!-- VIDEO: AML compliance programme design walkthrough for Swiss VASP registration applicants -->

---

## VASP Registration Requirements Checklist

| Requirement | Detail |
|---|---|
| Swiss legal entity | GmbH or AG registered in the [Commercial Register](/company-formation/commercial-register-switzerland/) |
| Fit and proper directors | No criminal history; relevant professional background |
| Fit and proper beneficial owners | Disclosure of full UBO chain; FINMA/VQF background check |
| Written AML policy | Specific to business model; updated annually |
| KYC/CDD procedures | Client identification and verification per AMLA Art. 3-8 |
| Transaction monitoring | Documented system with escalation procedures |
| MROS reporting process | Internal workflow for suspicious activity reporting |
| Staff AML training | Documented training records |
| Registered business address in Switzerland | Physical or legally valid domicile |
| VQF application fee paid | Fee varies by business size |

---

## Costs: What to Budget

**VQF membership fees**: The first-year membership fee ranges from approximately **CHF 3,000 to CHF 15,000**, depending on the size and revenue of the business. Annual ongoing fees apply and are similarly scaled.

**SRO application legal work**: The initial retainer for SRO application assistance is typically CHF 10,000 (fixed), covering document preparation and submission. However, this is rarely the full cost. Regulatory work — responding to VQF follow-up queries, building out compliance documentation, and managing the committee review — regularly pushes total costs to CHF 25,000 or more. One recent engagement totalled CHF 38,321 across 36+ hours of work before the client withdrew. Budget CHF 25,000-35,000 for a realistic total cost estimate, and treat the initial CHF 10,000 retainer as a starting point, not a ceiling.

**Turnkey licensed financial intermediary**: For companies that want to skip the application process entirely, acquiring a pre-licensed entity with existing SRO membership is possible but expensive — current market pricing is approximately CHF 480,000 for a turnkey licensed financial intermediary.

**AML compliance programme preparation**: For a first-time applicant without existing AML infrastructure, legal and consulting fees to design and document a compliant programme typically run **CHF 10,000 to CHF 30,000**. Complex business models — multi-asset platforms, cross-border services, institutional custody — sit at the upper end.

**Ongoing costs**: Annual compliance reporting, periodic legal review of the AML programme, and staff training should be budgeted as recurring operational costs. For a mid-sized VASP, CHF 5,000-12,000 per year in compliance maintenance costs is a reasonable planning estimate.

---

## Common Reasons for VQF Application Rejection

Applications fail for predictable reasons. The most frequent:

**Insufficient KYC procedures.** Generic KYC documentation that does not reflect the specific client onboarding flow, threshold logic, or enhanced [due diligence](/corporate-transactions/due-diligence-switzerland/) triggers for the actual business model will be rejected. VQF expects procedures that match the real operation.

**Unclear business model.** If the application does not clearly establish what services are provided, to whom, in what jurisdictions, and at what volumes, the committee cannot assess the risk profile. Ambiguity is treated as a red flag.

**Problematic director or beneficial owner background.** Any adverse regulatory history, criminal conviction, or undisclosed connection to sanctioned persons in the ownership or management structure will result in rejection. A pre-application fit-and-proper self-assessment is essential.

---

## VASP + Company Structure: Operating Entity and Foundation

Many Swiss crypto projects operate a **dual structure**: a Swiss AG or GmbH as the operating entity (the VASP), and a Swiss foundation (Stiftung) that holds the protocol treasury, manages token reserves, and pursues the non-commercial mission of the project.

Under this structure, the VASP registration attaches to the operating entity. The foundation is a separate legal person and, if it does not itself conduct VASP activities for clients, does not require its own SRO membership. The boundary between the two entities must be clearly maintained in governance documents, treasury management, and operational practice.

For guidance on establishing the operating entity, see our guides on [GmbH formation](/company-formation/gmbh-formation-switzerland/) and [AG formation in Switzerland](/company-formation/ag-formation-switzerland/).

---

## Swiss VASP Registration as an International Credential

AMLA-registered Swiss VASPs occupy a recognised regulatory position that matters beyond Swiss borders. Many regulated exchanges and institutional counterparties require that onboarding VASPs hold a demonstrable regulated status. Swiss SRO membership satisfies this requirement in a large number of counterparty due diligence frameworks.

Switzerland's FATF-compliant VASP framework is well understood by correspondent banks, custodians, and regulated platforms in the EU, UK, Singapore, and the United States. Operating as a registered Swiss VASP is a material advantage when negotiating banking relationships, exchange listings, and institutional partnerships. Companies that need to open a [corporate bank account in Switzerland](/banking/corporate-bank-account-switzerland/) will find that VQF membership significantly accelerates the bank onboarding process.

---

## Real-World Scenarios

### Successful VQF Registration: Coinbridge AG

Coinbridge AG, a Zug-domiciled crypto brokerage, obtained VQF membership after a structured compliance build-out. The company subsequently established a strategic partnership with Binance Pay and operated as a regulated Swiss financial intermediary. The total process from initial retainer to VQF acceptance required sustained legal work — the initial fixed retainer of CHF 10,000 covered the application preparation, but additional regulatory work brought total costs above CHF 25,000 before membership was confirmed. Coinbridge later listed its regulated entity for sale, demonstrating that a VQF-registered Swiss crypto company carries material commercial value on the secondary market.

### The PolyrReg Bilateral Contract Problem: PayDeal Solutions AG

Not every SRO path runs smoothly. PayDeal Solutions AG chose PolyrReg as its SRO rather than VQF. The company intended to integrate Binance's payment infrastructure, but PolyrReg required a bilateral signed contract with Binance as a condition of compliance approval. Binance, however, operates exclusively through standard Terms of Service (AGB) and does not enter into bilateral contracts with individual partners. This created a deadlock: the SRO demanded documentation that the counterparty would not produce. The legal argument — that Binance's standard AGB constitutes a functional equivalent of a bilateral agreement — remains unresolved. The case illustrates a practical risk of choosing an SRO other than VQF: different SROs interpret compliance requirements differently, and a requirement that seems procedural can become a genuine blocker.

### The Failed Application: PumpX Labs

A crypto startup engaged legal counsel for VQF membership with an initial CHF 10,000 retainer. During the application process, the founders changed the business model mid-stream — pivoting from a simple exchange to a more complex DeFi-adjacent product. This forced a restart of the compliance analysis. Total billed work reached CHF 38,321 (including VAT) across 36+ hours of legal time. The client ultimately abandoned the application, receiving a CHF 5,000 partial refund. The lesson: VQF assesses the business model as presented. Changing the model during the process is not an iteration — it is a restart.

### The Three-Month Audit Trap

What most applicants do not anticipate is what happens after VQF acceptance. Three months after membership is granted, VQF conducts an initial audit. If the AML officer or a director demonstrates insufficient knowledge of the company's own compliance procedures during this audit, VQF can revoke the membership. This is not a theoretical risk — finding a qualified AML officer who genuinely understands both the regulatory framework and the specific business model is one of the hardest practical steps in the process. Companies that treat the AML officer appointment as a formality discover the consequences at the three-month mark.

---

## VQF vs PolyReg vs Direct FINMA: Choosing Your VASP Registration Path

| Criterion | VQF | PolyReg | Direct FINMA |
|---|---|---|---|
| Application timeline | 3-6 months | 2-4 months | 12-18 months |
| Total first-year cost (CHF) | 25,000-40,000 | 20,000-35,000 | 80,000-130,000 |
| Crypto expertise | Dedicated VASP track | Blockchain-native | Case-by-case |
| Bank account opening | Materially easier | Recognised but smaller network | Strongest credential |
| Partner contract requirements | Standard AGB accepted | May require bilateral contracts | N/A |
| Post-approval audit | 3 months after grant | 3 months after grant | Ongoing FINMA supervision |
| Best suited for | Most VASPs | Pure crypto/DeFi businesses | VASPs above CHF 100M deposits |

The choice has downstream consequences. PayDeal Solutions AG chose PolyReg and faced a deadlock when PolyReg required a bilateral signed contract with Binance, but Binance only offers standard Terms of Service. The argument that AGB constitutes a functional equivalent remains unresolved. VQF does not impose this requirement.

---

## How Morgan Hartley Consulting Supports Your VASP Registration

Morgan Hartley Consulting (Morgan Hartley Consulting) manages the full VASP registration process for clients. We do not hand clients a template and step back — we act as a practitioner partner through every stage.

**What we deliver:**

- **Business model analysis**: determining which AMLA obligations apply to your specific activities before any application is filed
- **AML compliance programme design**: drafting a VQF-ready AML policy, KYC procedures, transaction monitoring framework, and MROS reporting process tailored to your operations
- **VQF interface**: preparing and submitting the application, managing VQF committee correspondence, and responding to follow-up questions
- **Director and UBO preparation**: guiding fit-and-proper documentation for all persons requiring background assessment
- **Ongoing SRO reporting coordination**: annual reporting preparation and compliance programme maintenance

We work with crypto exchanges, custodians, token issuers, payment processors, and DeFi-adjacent businesses.

For a broader overview, see our guide to [Crypto & Fintech Licensing](/licensing/crypto-fintech-licensing-switzerland/).

---

## Frequently Asked Questions

**Do I need a VASP registration if my platform is non-custodial?**

If your platform never holds, controls, or has the technical ability to move client virtual assets, the custodial VASP analysis generally does not apply. However, if your platform facilitates exchanges between clients — even without holding assets — the exchange activity may still constitute a VASP activity under AMLA. A business model assessment is required before concluding that no registration is needed.

**How long does VQF membership take?**

For a well-prepared application with complete documentation, the typical timeline is three to six months. Incomplete applications or those requiring multiple supplemental submissions take longer. Applicants with novel or complex business models should allow six to nine months.

**Can a foreign company register as a Swiss VASP without a Swiss entity?**

No. Swiss AMLA registration requires a Swiss legal entity — a GmbH or AG registered in the Swiss [Commercial Register](/company-formation/commercial-register-switzerland/). A branch of a foreign company may qualify in limited circumstances, but the standard approach is to establish a Swiss operating entity before applying for SRO membership.

**What is the difference between VQF membership and a FINMA licence?**

VQF membership satisfies the AMLA affiliation requirement for financial intermediaries and is supervised at the SRO level. A [FINMA licence](/licensing/finma-licensing-switzerland/) (such as a banking licence, securities dealer licence, or FINMA-authorised fund management licence) is a direct regulatory authorisation issued by FINMA itself, carrying higher capital, governance, and reporting requirements. Most VASPs require VQF membership, not a FINMA licence. The two are not mutually exclusive — some VASPs hold both.

**What happens if we operate as a VASP in Switzerland without registering?**

Operating as an unregistered financial intermediary under <a href="https://www.fedlex.admin.ch/eli/cc/1997/2465_2465_2465/en" target="_blank" rel="nofollow noopener">AMLA</a> is a criminal offence in Switzerland. Penalties include fines and, in serious cases, criminal prosecution of responsible individuals. Unregistered VASPs also face the practical consequence of being denied banking services and exchange relationships, as Swiss banks conduct AMLA due diligence on crypto business clients.

**How much does VASP registration cost in Switzerland?**

VQF first-year membership fees range from CHF 3,000 to CHF 15,000 depending on business size. AML compliance programme preparation typically costs CHF 10,000 to CHF 30,000 in legal and consulting fees. Annual ongoing compliance maintenance runs CHF 5,000-12,000 for a mid-sized VASP.

**What AML compliance documents are required for VQF membership?**

VQF requires a written AML policy specific to your business model, KYC/CDD procedures aligned with AMLA Art. 3-8, a transaction monitoring system, MROS suspicious activity reporting procedures, a documented staff training programme, and a risk classification framework for clients and products.

**Can a Swiss VASP also hold a FINMA banking licence?**

Yes. VASPs operating at institutional scale, running a multilateral trading facility, or accepting deposits from the public may require both VQF membership and a <a href="https://www.finma.ch" target="_blank" rel="nofollow noopener">FINMA</a> banking licence. The two authorisations are not mutually exclusive and cover different regulatory obligations.

**What is the fit-and-proper requirement for VASP directors in Switzerland?**

Directors and ultimate beneficial owners must pass a background check conducted by VQF. They must have no criminal history relevant to financial services, demonstrate relevant professional qualifications, and disclose any adverse regulatory history or connections to sanctioned persons.

**Does Swiss VASP registration satisfy international regulatory requirements?**

Swiss AMLA-registered VASPs hold a recognised regulatory position under Switzerland's FATF-compliant framework. Many regulated exchanges and institutional counterparties accept Swiss SRO membership as sufficient regulated status for counterparty due diligence in the EU, UK, Singapore, and the United States.

---

## Get Your Swiss VASP Registration Right

VASP registration in Switzerland is achievable for well-structured businesses with a clear compliance programme. The process rewards preparation: applicants who submit complete, business-specific documentation pass through VQF review significantly faster and with fewer complications.

**Request a Free Assessment** — contact Morgan Hartley at Morgan Hartley Consulting to discuss your VASP registration requirements.

**Morgan Hartley Consulting (Morgan Hartley Consulting)**
Baarerstrasse 135, 6300 Zug, Switzerland
Phone: [+41 44 51 52 592](tel:+41445152592)
Email: [info@lawsupport.ch](mailto:info@lawsupport.ch)
Web: [lawsupport.ch](https://lawsupport.ch)

[Request a Free Assessment](/contacts/)
