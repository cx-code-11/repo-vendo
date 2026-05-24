import React from 'react';
import styles from './AgreementContent.module.css';

interface AgreementContentProps {
  companyName: string;
  contactName: string;
  address: string;
  date: string;
  signatureImage?: string | null;
}

export const AgreementContent: React.FC<AgreementContentProps> = ({ companyName, contactName, address, date, signatureImage }) => {
  return (
    <div className={styles.agreementText}>
      {/* COVER PAGE */}
      <div className={styles.coverPage}>
        <div className={styles.signatureHeaderRow}>
          <h3 className={styles.signatureDocTitle}>VYESSFMS PRIVATE LIMITED</h3>
          <span className={styles.signatureDocSubtitle}>VENDOR SERVICES AGREEMENT</span>
        </div>
        <div className={styles.blueDivider}></div>

        <div className={styles.coverTitles}>
          <h1 className={styles.coverMainTitle}>VYESSFMS PRIVATE LIMITED</h1>
          <div className={styles.blueDividerCenter}></div>
          <h2 className={styles.coverSubTitle}>VENDOR SERVICES AGREEMENT</h2>
        </div>

        <table className={styles.coverTable}>
          <tbody>
            <tr>
              <td className={styles.coverTdLabel}><strong>Document Type</strong></td>
              <td className={styles.coverTdValue}><strong>Vendor Services Agreement</strong></td>
            </tr>
            <tr>
              <td className={styles.coverTdLabel}><strong>Issuing Party</strong></td>
              <td className={styles.coverTdValue}><strong>VYESSFMS Private Limited</strong></td>
            </tr>
            <tr>
              <td className={styles.coverTdLabel}><strong>Classification</strong></td>
              <td className={styles.coverTdValue}><strong>Strictly Confidential</strong></td>
            </tr>
          </tbody>
        </table>

        <div className={styles.coverDisclaimer}>
          <h4 className={styles.redText}>FOR OFFICIAL USE ONLY</h4>
          <p className={styles.grayText}>This document constitutes a legally binding agreement between VYESSFMS Private Limited and the Vendor as identified herein. Unauthorized disclosure is strictly prohibited.</p>
        </div>

        <div className={styles.coverFooter}>
          <span className={styles.grayText}>Confidential — VYESSFMS Private Limited</span>
          <span className={styles.grayText}>Page 1</span>
        </div>
      </div>

      <div className={styles.pageBreak}></div>

      {/* CONTENT START - PAGE 2 */}
      <div className={styles.signatureHeaderRow}>
        <h3 className={styles.signatureDocTitle}>VYESSFMS PRIVATE LIMITED</h3>
        <span className={styles.signatureDocSubtitle}>VENDOR SERVICES AGREEMENT</span>
      </div>
      <div className={styles.blueDivider}></div>
      <h3 className={styles.signatureMainTitle}>VENDOR SERVICES AGREEMENT</h3>
      
      <p>This Vendor Services Agreement (hereinafter referred to as "this Agreement" or "VSA") is entered into as of <strong>{date}</strong> by and between <strong>VYESSFMS Private Limited</strong>, a company duly incorporated and existing under the laws of India, having its registered office at such address as may be notified from time to time (hereinafter referred to as "VYESSFMS" or "the Company"), and <strong>{companyName}</strong> represented by <strong>{contactName}</strong> located at <strong>{address}</strong> (hereinafter referred to as "Vendor" or "Service Provider"). VYESSFMS and the Vendor shall hereinafter be individually referred to as a "Party" and collectively as the "Parties."</p>

      <p><strong>WHEREAS</strong>, VYESSFMS operates a technology-enabled marketplace platform that connects skilled service professionals and vendors with end consumers seeking a wide variety of home services, facility management services, professional services, and other on-demand services (hereinafter referred to as the "Platform"); and</p>

      <p><strong>WHEREAS</strong>, the Vendor possesses the necessary skills, qualifications, licenses, certifications, tools, and competencies required to perform the services enumerated in Schedule A of this Agreement (hereinafter referred to as the "Services"); and</p>

      <p><strong>WHEREAS</strong>, VYESSFMS desires to engage the Vendor to provide the Services to end consumers through the Platform on a non-exclusive basis, and the Vendor desires to be so engaged, subject to the terms, conditions, covenants, representations, warranties, and obligations set forth in this Agreement; and</p>

      <p><strong>WHEREAS</strong>, the Parties acknowledge that this Agreement governs the entire commercial and operational relationship between VYESSFMS and the Vendor and supersedes all prior negotiations, understandings, representations, warranties, and agreements, whether oral or written, relating to the subject matter hereof;</p>

      <p><strong>NOW, THEREFORE</strong>, in consideration of the mutual covenants and agreements set forth herein, the sufficiency and adequacy of which are hereby acknowledged by the Parties, and intending to be legally bound, the Parties hereby agree as follows:</p>

      <h4 className={styles.sectionTitle}>1. DEFINITIONS AND INTERPRETATION</h4>
      <p>In this Agreement, unless the context otherwise requires, the following expressions shall bear the meanings assigned to them hereunder, and such definitions shall be applicable to both singular and plural forms, masculine and feminine genders, and shall encompass all derivative forms of the defined terms as the context demands.</p>
      <ul className={styles.list}>
        <li><strong>"VYESSFMS Platform" or "Platform"</strong> means the proprietary mobile application, web-based portal, API interfaces, backend technology systems, algorithms, databases, and all associated digital infrastructure owned, operated, and controlled exclusively by VYESSFMS Private Limited, through which Services are offered, booked, managed, tracked, and delivered to consumers.</li>
        <li><strong>"Vendor"</strong> means the individual professional, freelancer, contractor, sole proprietor, partnership, LLP, private limited company, or any other legal entity that has been onboarded by VYESSFMS to provide Services through the Platform, including all their employees, agents, sub-contractors, and representatives engaged in the performance of Services under this Agreement.</li>
        <li><strong>"Services"</strong> means all tasks, works, professional activities, labour services, maintenance services, installation services, repair services, cleaning services, beauty services, wellness services, pest control services, plumbing services, electrical services, carpentry services, painting services, appliance repair services, tutoring services, or any other category of services as defined in Schedule A, which the Vendor agrees to perform for consumers through the Platform.</li>
        <li><strong>"Consumer" or "Customer"</strong> means any individual, household, business entity, institution, or organization that books or avails Services through the VYESSFMS Platform.</li>
        <li><strong>"Service Order"</strong> means a booking, request, job order, work order, or assignment generated through the Platform by a Consumer and accepted by the Vendor, constituting a commitment to perform the specified Services at the designated location and time.</li>
        <li><strong>"Commission" or "Platform Fee"</strong> means the percentage of the Service Fee charged by VYESSFMS for access to the Platform, lead generation, booking management, payment collection, insurance coverage, consumer acquisition, and all associated support services, as detailed in Schedule B of this Agreement.</li>
        <li><strong>"Service Fee"</strong> means the total amount charged to the Consumer for the Services, as determined or approved by VYESSFMS, inclusive of all applicable taxes, surcharges, and platform levies.</li>
        <li><strong>"Vendor Payout" or "Net Service Amount"</strong> means the amount payable to the Vendor after deduction of Commission, applicable taxes, penalties, deductions, chargebacks, refunds, and any other amounts rightfully retained by VYESSFMS pursuant to this Agreement.</li>
        <li><strong>"Intellectual Property"</strong> means all patents, trademarks, service marks, trade names, logos, designs, software code, algorithms, databases, domain names, copyrights, know-how, trade secrets, and all other proprietary rights, whether registered or unregistered, subsisting or arising in any jurisdiction worldwide.</li>
        <li><strong>"Confidential Information"</strong> means all technical, commercial, financial, operational, strategic, consumer, and other information disclosed by VYESSFMS to the Vendor in connection with this Agreement that is designated as confidential or that ought reasonably to be considered confidential given the nature of the information and the circumstances of disclosure.</li>
        <li><strong>"Term"</strong> means the initial period of this Agreement and all renewal periods, commencing from the date of execution of this Agreement until terminated in accordance with Section 23.</li>
        <li><strong>"Force Majeure Event"</strong> means any event beyond the reasonable control of the affected Party, including acts of God, natural disasters, epidemics, pandemics, strikes, lockouts, war, terrorism, government actions, regulatory changes, or failures of third-party infrastructure.</li>
        <li><strong>"Background Verification"</strong> means the pre-onboarding and periodic identity verification, police clearance, skill assessment, credential verification, address verification, and other checks conducted by VYESSFMS or its authorized partners in respect of the Vendor.</li>
      </ul>

      <h4 className={styles.sectionTitle}>2. SCOPE OF ENGAGEMENT AND PLATFORM ACCESS</h4>
      <p>VYESSFMS hereby grants the Vendor a limited, revocable, non-exclusive, non-transferable, and non-sublicensable license to access and use the VYESSFMS Platform solely for the purpose of receiving Service Orders, communicating with Consumers in relation to assigned Services, tracking job status, receiving payments, and accessing Vendor-specific features of the Platform as enabled by VYESSFMS from time to time. This license does not confer any ownership interest, intellectual property rights, or proprietary claim over the Platform or any component thereof.</p>
      <p>The Vendor expressly acknowledges and agrees that VYESSFMS reserves the absolute and unconditional right to determine the scope, nature, volume, type, and geographic distribution of Service Orders assigned to or made available to the Vendor through the Platform. VYESSFMS makes no representation, warranty, or guarantee as to the minimum or maximum number of Service Orders that will be made available to the Vendor in any given period, and the Vendor shall have no claim for loss of earnings, opportunity costs, or consequential damages arising from any variation in the volume of Service Orders.</p>
      <p>The Vendor agrees and acknowledges that the relationship between the Vendor and VYESSFMS is that of an independent contractor and principal respectively, and nothing in this Agreement shall be construed to create an employer-employee relationship, agency, joint venture, franchise, partnership, or any other legal relationship between the Parties, except as expressly stated herein. The Vendor shall be solely responsible for all taxes, social security contributions, provident fund obligations, insurance premiums as promises and all other statutory and regulatory obligations arising from or in connection with the Vendor's independent contractor status.</p>
      <p>VYESSFMS may, at its sole and absolute discretion, without any obligation to provide reasons and without incurring any liability, expand, restrict, modify, suspend, or withdraw the Services available on the Platform, change the geographic service areas, alter the operating hours, introduce or remove service categories, revise pricing frameworks, or make any other changes to the Platform and the manner of engagement of Vendors, with reasonable notice provided to Vendors where practicable.</p>

      <h4 className={styles.sectionTitle}>3. VENDOR ONBOARDING, ELIGIBILITY, AND COMPLIANCE</h4>
      <p>The Vendor represents, warrants, and covenants that at the time of execution of this Agreement and continuously throughout the Term, the Vendor: (a) is of legal age to enter into binding contracts under applicable law; (b) possesses all necessary licenses, permits, certificates, registrations, and authorizations required by applicable central, state, and local laws, rules, and regulations to perform the Services; (c) has provided accurate, complete, and truthful information during the onboarding process and shall promptly update VYESSFMS of any changes to such information; (d) has not been convicted of any criminal offense, is not subject to any pending criminal investigation, and has no disqualifying antecedents that would render the Vendor ineligible to perform the Services or enter this Agreement.</p>
      <p>The Vendor hereby grants VYESSFMS and its authorized third-party partners full consent and authorization to conduct, at any time during the Term and within a reasonable period post-termination, comprehensive background verification checks, including but not limited to identity verification through Aadhaar, PAN, passport, or other government-issued documents; address verification through physical visits or digital means; police clearance certificate verification; court record checks; skill assessment and certification validation; and character references. The Vendor agrees that failure to cooperate with any such verification or the discovery of adverse information shall entitle VYESSFMS to immediately suspend or terminate the Vendor's access to the Platform without any liability or obligation.</p>
      <p>VYESSFMS shall maintain a Vendor Performance Score, Quality Rating, Consumer Feedback Index, and Compliance Rating for each Vendor, based on criteria determined solely by VYESSFMS. Such ratings shall be used to determine the Vendor's eligibility to receive Service Orders, the volume and category of assignments offered, promotional opportunities, and continued engagement under this Agreement. The Vendor acknowledges that ratings and scoring systems are entirely within VYESSFMS's discretion and that no legal challenge shall be made to any scoring determination.</p>
      <p>The Vendor shall at all times during the performance of Services comply fully with all applicable laws, regulations, standards, codes of practice, and guidelines issued by competent regulatory and governmental authorities in India, including but not limited to the Consumer Protection Act, the Information Technology Act, the Shops and Establishments Act, GST regulations, labour laws, environmental regulations, and all industry-specific standards relevant to the category of Services provided.</p>

      <h4 className={styles.sectionTitle}>4. VENDOR OBLIGATIONS AND CONDUCT STANDARDS</h4>
      <p>The Vendor shall perform all Services with the highest degree of professionalism, skill, diligence, care, and expertise, in strict accordance with: (a) the service specifications and standard operating procedures issued by VYESSFMS from time to time; (b) the instructions and reasonable requests of the Consumer; (c) applicable laws and regulations; and (d) industry best practices and quality standards. The Vendor shall at all times maintain conduct that upholds the reputation and values of the VYESSFMS brand.</p>
      <p>The Vendor shall adhere strictly to the scheduled Service Order timings communicated through the Platform. The Vendor shall arrive at the Consumer's designated location on time and shall not reschedule, delay, or cancel Service Orders without providing prior notice of not less than four (4) hours to VYESSFMS through the Platform and obtaining explicit written consent from VYESSFMS. Unauthorized cancellations or no-shows shall attract monetary penalties as specified in Schedule C, which may be deducted from the Vendor's pending payouts.</p>
      <p>During the performance of Services, the Vendor shall: (a) wear the VYESSFMS-issued or VYESSFMS-approved uniform and carry proper identification at all times; (b) use only VYESSFMS-approved tools, equipment, materials, and products, unless otherwise agreed in writing; (c) maintain personal hygiene and professional appearance; (d) treat Consumers, their family members, and their property with utmost respect and courtesy; (e) not smoke, consume alcohol, or use any intoxicating substances on the Consumer's premises or during duty hours; (f) not carry or bring unauthorized persons to the Consumer's premises; (g) not misappropriate, misuse, or cause damage to Consumer property; (h) not engage in any form of solicitation, advertising, or promotion of competing services or personal businesses to Consumers.</p>
      <p>The Vendor shall immediately report to VYESSFMS any accidents, injuries, property damage, Consumer complaints, suspicious activities, safety hazards, or other incidents arising in connection with the performance of Services, and shall fully cooperate with any investigation or inquiry conducted by VYESSFMS in relation thereto. The Vendor shall not make any public statement, press release, social media post, or communicate with media representatives regarding any incident without prior written approval from VYESSFMS.</p>
      <p>The Vendor expressly agrees and undertakes not to solicit, approach, engage, or enter into any direct commercial arrangement with any Consumer introduced through the VYESSFMS Platform for the provision of any services, whether similar to or different from the Services, for a period of twenty-four (24) months following the termination of this Agreement or the last Service Order performed for such Consumer, whichever is later. Any breach of this obligation shall entitle VYESSFMS to seek immediate injunctive relief, specific performance, liquidated damages, and all other remedies available at law or equity.</p>

      <h4 className={styles.sectionTitle}>5. VYESSFMS OBLIGATIONS AND PLATFORM SUPPORT</h4>
      <p>VYESSFMS shall use commercially reasonable efforts to: (a) maintain the Platform in reasonably functional and accessible condition during standard operating hours; (b) provide the Vendor with access to a dedicated vendor dashboard for viewing Service Orders, tracking payments, and managing profile information; (c) facilitate secure and timely payment processing for completed Service Orders in accordance with the payment terms set out in Section 7; (d) offer basic training materials, onboarding guidance, and operational support to assist the Vendor in complying with VYESSFMS's service delivery standards.</p>
      <p>VYESSFMS reserves the right to modify, upgrade, update, rebrand, migrate, or restructure the Platform at any time, with or without prior notice to the Vendor. VYESSFMS shall not be liable for any loss of earnings, disruption of services, or damages incurred by the Vendor as a result of planned or unplanned maintenance, upgrades, or technical failures of the Platform.</p>
      <p>VYESSFMS shall handle Consumer-facing marketing, customer acquisition, customer support, payment gateway management, and brand promotion. The Vendor acknowledges that VYESSFMS's obligations in this regard are at the Company's sole commercial discretion, and the Vendor shall have no right to demand specific marketing activities, lead volumes, or consumer acquisition targets.</p>

      <h4 className={styles.sectionTitle}>6. COMMISSION STRUCTURE AND PLATFORM FEE POLICY</h4>
      <p>In consideration of the access to the VYESSFMS Platform, Consumer leads, booking management services, payment infrastructure, insurance coverage, brand association, marketing support, and all other services and benefits provided by VYESSFMS to the Vendor, the Vendor agrees to pay to VYESSFMS a Commission on all Service Fees generated through the Platform, at the rates specified in Schedule B of this Agreement. The Vendor acknowledges that Commission rates are subject to revision by VYESSFMS with notice of not less than fifteen (15) days, and the Vendor's continued use of the Platform after receipt of such notice shall constitute acceptance of the revised Commission rates.</p>
      <p>The Commission shall be calculated on the gross Service Fee inclusive of applicable goods and services tax (GST) or any other tax levy applicable to the transaction. VYESSFMS shall be entitled to deduct the Commission amount, all applicable TDS (Tax Deducted at Source) as mandated under the Income Tax Act 1961, platform service charges, insurance premiums, material costs, and all other deductible amounts from the Service Fee before computing the Vendor Payout. The Vendor shall be solely responsible for maintaining proper books of accounts, filing applicable tax returns, and ensuring compliance with all tax obligations arising from income received under this Agreement.</p>
      <p>VYESSFMS shall issue a monthly commission statement detailing the Service Fees collected, Commission deducted, taxes withheld, penalties applied, and net Vendor Payout for each settlement cycle. The Vendor shall review such statements within five (5) business days of receipt and raise any dispute in writing within such period. Failure to raise a dispute within the stipulated timeframe shall constitute conclusive acceptance of the statement by the Vendor.</p>
      <p>VYESSFMS shall have the right to implement surge pricing, dynamic pricing, promotional discounts, seasonal offers, bundle pricing, or any other pricing model at its sole discretion. The Vendor shall not have the right to override, modify, or reject prices determined by VYESSFMS for Service Orders listed on the Platform. The Vendor further agrees that VYESSFMS may offer price guarantees or discount schemes to Consumers, and the cost of such schemes shall be borne by VYESSFMS unless otherwise explicitly communicated to the Vendor in advance.</p>

      <h4 className={styles.sectionTitle}>7. PAYMENT TERMS AND SETTLEMENT PROCESS</h4>
      <p>VYESSFMS shall process and disburse Vendor Payouts in accordance with the settlement cycle specified in Schedule B, which may be on a weekly, fortnightly, or monthly basis as determined by VYESSFMS from time to time. All payouts shall be processed to the bank account registered by the Vendor in the Platform's vendor portal. The Vendor shall ensure that valid, operational bank account details and KYC documentation are maintained at all times, and VYESSFMS shall not be liable for any delay or failure in payment resulting from inaccurate or outdated bank details provided by the Vendor.</p>
      <p>Payouts shall be conditional upon: (a) successful completion and Consumer confirmation of the Service Order; (b) absence of pending Consumer complaints, chargebacks, or quality disputes relating to the relevant Service Order; (c) the Vendor's compliance with all applicable KYC, AML, and tax documentation requirements; (d) the Vendor not being subject to any active suspension, investigation, or penalty proceedings under this Agreement. VYESSFMS reserves the right to withhold Vendor Payouts during the pendency of any investigation or dispute, for a period not exceeding sixty (60) days, after which any withheld amounts shall be disbursed subject to the outcome of the investigation.</p>
      <p>VYESSFMS shall have the unilateral right to deduct from any pending or future Vendor Payouts any amounts owed by the Vendor to VYESSFMS, including but not limited to: penalty amounts for cancellations, no-shows, delayed arrivals, quality failures, Consumer refunds caused by Vendor negligence, property damage claims, regulatory fines attributable to Vendor conduct, kit costs, uniform charges, training fees (as applicable), and any other dues outstanding. Such deductions shall be itemized in the settlement statement.</p>
      <p>In the event that the Vendor's payout balance is insufficient to cover all outstanding deductions, VYESSFMS shall issue a debit notice to the Vendor, and the Vendor shall settle the outstanding amount within fifteen (15) days of receipt of such notice, failing which VYESSFMS may pursue recovery through legal proceedings and the Vendor shall be liable for all costs and expenses including legal fees incurred in such recovery.</p>
      <p>VYESSFMS shall not be obligated to process payouts for Services that are disputed by Consumers, subject to fraud investigation, or where there is reasonable suspicion of collusion between the Vendor and Consumer to circumvent the Platform's payment systems. In such cases, VYESSFMS may freeze the relevant payout pending investigation and take appropriate legal action.</p>
      <p>All payments made under this Agreement shall be in Indian Rupees (INR) unless otherwise agreed in writing. No interest shall accrue on delayed payouts unless the delay exceeds thirty (30) calendar days beyond the applicable settlement date and is solely attributable to VYESSFMS's operational failure, not including external banking delays, payment gateway outages, or regulatory holds.</p>

      <h4 className={styles.sectionTitle}>8. QUALITY STANDARDS AND PERFORMANCE MANAGEMENT</h4>
      <p>VYESSFMS shall implement and maintain a comprehensive Quality Management Framework applicable to all Vendors engaged through the Platform. The Vendor agrees to comply fully with all quality standards, service delivery protocols, time management benchmarks, consumer satisfaction targets, and all other performance indicators established under such framework, as may be updated by VYESSFMS from time to time with thirty (30) days' prior notice to the Vendor.</p>
      <p>VYESSFMS shall collect, analyze, and act upon Consumer feedback, ratings, and reviews submitted in respect of Services performed by the Vendor. The Vendor agrees that Consumer ratings are an essential feature of the Platform's trust and transparency model and that VYESSFMS may publish, display, share, or utilize such ratings in any manner it deems appropriate. The Vendor shall not attempt to manipulate, fabricate, or incentivize Consumer feedback and shall not pressure, threaten, or harass Consumers to modify or withdraw reviews. Any such conduct shall constitute a material breach entitling VYESSFMS to immediately terminate this Agreement.</p>
      <p>Performance reviews shall be conducted by VYESSFMS on a monthly or quarterly basis. Vendors whose performance falls below the minimum threshold established by VYESSFMS shall be placed on a performance improvement plan (PIP) with specific targets to be met within a defined timeframe. Failure to achieve PIP targets shall entitle VYESSFMS to suspend or terminate the Vendor's access to the Platform. The determination of performance thresholds and PIP outcomes shall be at VYESSFMS's sole discretion.</p>
      <p>VYESSFMS shall have the right to conduct mystery audits, quality spot-checks, physical inspections, Consumer interviews, digital monitoring, and any other assessment mechanism to evaluate the quality of Services delivered by the Vendor. The Vendor consents to such audits and agrees to cooperate fully with VYESSFMS representatives and authorized auditors.</p>

      <h4 className={styles.sectionTitle}>9. EQUIPMENT, TOOLS, UNIFORMS, AND MATERIALS</h4>
      <p>The Vendor shall be responsible for procuring, maintaining, and providing all tools, equipment, and materials necessary for the professional and safe performance of Services, unless otherwise specified in the Service Order or agreed in writing by VYESSFMS. All equipment used by the Vendor must meet applicable safety and quality standards, be in good working condition, and comply with relevant BIS or ISI standards where applicable.</p>
      <p>VYESSFMS may, at its discretion, supply the Vendor with branded uniforms, identification cards, toolkits, consumable materials, or other items for use in the performance of Services. Any such items supplied by VYESSFMS shall remain the exclusive property of VYESSFMS. The Vendor shall maintain supplied items in good condition, use them exclusively for VYESSFMS-related Services, and return them promptly upon termination of this Agreement or upon VYESSFMS's written request. The cost of any unreturned, damaged, or misused items shall be deducted from Vendor Payouts.</p>
      <p>The Vendor shall not modify, deface, remove, or obscure any VYESSFMS branding, logo, or identification from any items supplied by VYESSFMS. The Vendor shall not use VYESSFMS-branded items, uniforms, or materials in connection with any non-VYESSFMS services, businesses, or activities.</p>

      <h4 className={styles.sectionTitle}>10. INTELLECTUAL PROPERTY RIGHTS</h4>
      <p>All Intellectual Property, including but not limited to trademarks, service marks, logos, brand identities, mobile applications, software, algorithms, databases, website content, training materials, Standard Operating Procedures, operational manuals, proprietary methodologies, service delivery frameworks, consumer data, and all other proprietary assets created, owned, or controlled by VYESSFMS, are and shall remain the exclusive property of VYESSFMS. The Vendor is granted no ownership rights, license rights, sublicense rights, or any other Intellectual Property rights beyond the limited operational license granted under Section 2 of this Agreement.</p>
      <p>Any suggestions, recommendations, feedback, innovations, improvements, ideas, or other contributions made by the Vendor in relation to the Platform, Services, or operational processes shall be deemed to be and shall immediately upon creation vest as the exclusive property of VYESSFMS, without any additional compensation or consideration payable to the Vendor. The Vendor hereby irrevocably assigns to VYESSFMS all rights, title, and interest in and to any such contributions, and shall execute such further documents as VYESSFMS may require to perfect such assignment.</p>
      <p>The Vendor shall not, during or after the Term of this Agreement: (a) use the VYESSFMS name, logo, brand identity, or any confusingly similar marks in connection with any business or commercial activity without express written consent; (b) develop, market, promote, or launch any product, service, platform, or application that competes with or is substantially similar to the VYESSFMS Platform or any service category offered therein; (c) reverse engineer, decompile, disassemble, or attempt to derive the source code or architecture of the VYESSFMS Platform.</p>

      <h4 className={styles.sectionTitle}>11. CONFIDENTIALITY AND DATA PROTECTION</h4>
      <p>The Vendor acknowledges that in the course of engagement under this Agreement, the Vendor will receive, access, or become aware of Confidential Information belonging to VYESSFMS. The Vendor undertakes to maintain the strictest confidentiality with respect to all such information and shall not, directly or indirectly, disclose, publish, communicate, share, or use any Confidential Information for any purpose other than the performance of Services under this Agreement.</p>
      <p>The Vendor shall not, during the Term of this Agreement or at any time after its termination, communicate, disclose, or share any Consumer personal data, Consumer contact information, Consumer address, Consumer order history, or any other Consumer-related data obtained through the Platform, to any third party or for any purpose other than the performance of the relevant Service Order. Any breach of Consumer data privacy shall constitute a material breach of this Agreement and may expose the Vendor to significant legal liability under applicable data protection laws.</p>
      <p>The Vendor agrees to comply with all applicable data protection and privacy laws in India, including but not limited to the Digital Personal Data Protection Act 2023 and associated rules, the Information Technology Act 2000 and Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules 2011, and all other applicable data governance frameworks. The Vendor shall implement and maintain appropriate technical and organisational security measures to safeguard Consumer data in its possession.</p>
      <p>The Vendor shall promptly notify VYESSFMS upon becoming aware of any actual or suspected breach of Confidential Information or Consumer data, and shall fully cooperate with VYESSFMS in investigating and remedying such breach. The Vendor shall be solely liable for all losses, damages, penalties, regulatory fines, and legal costs arising from any breach of this Section attributable to the Vendor's actions or omissions.</p>

      <h4 className={styles.sectionTitle}>12. INSURANCE AND INDEMNIFICATION</h4>
      <p>The Vendor shall maintain, at its own cost and expense, adequate insurance coverage for the entire duration of this Agreement, including but not limited to: (a) third-party liability insurance covering bodily injury and property damage to Consumers and third parties arising out of the performance of Services; (b) professional indemnity insurance covering errors, omissions, and negligence in the performance of Services; (c) personal accident insurance for the Vendor and any employees or sub-contractors engaged in the performance of Services; and (d) any other insurance required by applicable law or reasonably requested by VYESSFMS. The Vendor shall provide proof of current insurance coverage to VYESSFMS upon request and shall ensure that VYESSFMS is named as an additional insured party on all such policies where applicable.</p>
      <p>The Vendor shall, to the fullest extent permitted by law, indemnify, defend, and hold harmless VYESSFMS, its directors, officers, employees, agents, affiliates, successors, and assigns (collectively, "Indemnified Parties") from and against any and all claims, suits, actions, proceedings, losses, liabilities, damages, judgments, settlements, fines, penalties, costs, and expenses (including reasonable legal fees and court costs) arising out of or in connection with: (a) any breach by the Vendor of any representation, warranty, covenant, or obligation under this Agreement; (b) any negligent, reckless, or wilful act or omission of the Vendor in the performance of Services; (c) any bodily injury, death, or property damage caused by the Vendor; (d) any violation by the Vendor of applicable laws, regulations, or third-party rights; (e) any claim by any Consumer arising from substandard, defective, or incomplete Services delivered by the Vendor; (f) any tax liability, employment claim, or regulatory action arising from the Vendor's independent contractor relationship.</p>
      <p>VYESSFMS shall maintain, at its own cost, reasonable platform liability insurance covering VYESSFMS's direct operational liabilities. However, VYESSFMS's indemnification obligations under this Agreement are strictly limited to losses directly and solely attributable to VYESSFMS's own proven wilful misconduct, gross negligence, or fraud, and shall expressly exclude all consequential, indirect, special, or punitive damages, as well as any loss of profits, loss of business, or opportunity costs.</p>

      <h4 className={styles.sectionTitle}>13. PENALTY AND DEDUCTION FRAMEWORK</h4>
      <p>The Vendor acknowledges and accepts the following penalty and deduction framework as a proportionate and reasonable mechanism for maintaining service quality and consumer trust on the VYESSFMS Platform. All penalty amounts specified herein or in Schedule C shall be subject to revision by VYESSFMS with fifteen (15) days' prior written notice.</p>
      <p>Cancellation Penalty: The Vendor shall be liable to pay a cancellation penalty as per Schedule C for each Service Order that is cancelled by the Vendor within four (4) hours of the scheduled service time or after the Vendor has accepted the Order but fails to attend without reasonable prior notice. Repeated cancellations may result in suspension or permanent deactivation of the Vendor's profile.</p>
      <p>Late Arrival Penalty: If the Vendor arrives at the Consumer's premises more than thirty (30) minutes after the confirmed service time without prior notice and Consumer consent, a late arrival penalty shall be levied as specified in Schedule C.</p>
      <p>Quality Failure Penalty: Where VYESSFMS receives Consumer complaints substantiated upon investigation that indicate a failure by the Vendor to perform Services to the required standard, VYESSFMS may levy a quality failure penalty and may require the Vendor to perform rework at no additional cost to the Consumer.</p>
      <p>Misconduct Penalty: Any verified incident of Vendor misconduct, including but not limited to rude behaviour, harassment, theft, fraud, intoxication during duty, or any other conduct that damages the reputation of VYESSFMS, shall attract a misconduct penalty in addition to potential immediate termination of this Agreement.</p>
      <p>Fraudulent Practices Penalty: Any attempt by the Vendor to manipulate the Platform, submit fraudulent Service Order completions, collude with Consumers to generate false orders, bypass platform payment systems, or engage in any other fraudulent activity shall attract the maximum penalty as specified in Schedule C, in addition to criminal prosecution and civil recovery proceedings.</p>

      <h4 className={styles.sectionTitle}>14. NON-COMPETE AND NON-SOLICITATION</h4>
      <p>The Vendor expressly acknowledges and agrees that VYESSFMS has made substantial and ongoing investments in building its consumer base, brand identity, technology infrastructure, operational processes, and market positioning, and that the protection of VYESSFMS's legitimate business interests is a material consideration for the continuation of this Agreement. In light of the foregoing, the Vendor covenants and agrees to the following restrictions:</p>
      <p>During the Term of this Agreement and for a period of twelve (12) months following the date of termination or expiry thereof (the "Restricted Period"), the Vendor shall not, directly or indirectly, whether individually, through a company, in partnership, as an employee, agent, consultant, director, officer, or in any other capacity: (a) engage in, operate, manage, advise, invest in, or provide services to any business that offers services through a technology platform in competition with VYESSFMS in any geographic area where VYESSFMS operates; (b) solicit, approach, canvass, or accept business from any Consumer, client, or customer of VYESSFMS introduced through the Platform; (c) solicit, recruit, or induce any Vendor, employee, officer, consultant, or contractor of VYESSFMS to terminate their relationship with VYESSFMS.</p>
      <p>The Vendor acknowledges that the above restrictions are reasonable in scope, duration, and geographic extent, are necessary for the protection of VYESSFMS's legitimate business interests, and shall not cause undue hardship to the Vendor given the fair compensation, training, and market access provided by VYESSFMS. The Vendor agrees that any breach of this Section would cause VYESSFMS irreparable harm for which damages would be an inadequate remedy, and that VYESSFMS shall be entitled to seek immediate injunctive and other equitable relief without the requirement to post a bond.</p>

      <h4 className={styles.sectionTitle}>15. REPRESENTATIONS AND WARRANTIES</h4>
      <p>Each Party represents, warrants, and covenants to the other as of the date of execution of this Agreement and continuously throughout the Term that: (a) it has full legal capacity, authority, and power to enter into, perform, and be bound by this Agreement; (b) this Agreement has been duly authorised, executed, and delivered and constitutes a legal, valid, and binding obligation enforceable against it in accordance with its terms; (c) the execution, delivery, and performance of this Agreement do not and will not violate any applicable law, regulation, order, judgment, agreement, or obligation by which it is bound.</p>
      <p>The Vendor further specifically represents, warrants, and covenants that: (a) the information provided to VYESSFMS during the onboarding process and throughout the Term is and shall remain accurate, complete, and up-to-date; (b) the Vendor holds all valid professional licenses, certifications, and authorizations required for the performance of the Services; (c) the Vendor shall perform all Services in a professional, workmanlike manner consistent with the highest industry standards; (d) the Vendor shall not engage in any activity that constitutes a violation of applicable anti-corruption, anti-bribery, anti-money laundering, or financial crime laws; (e) the Vendor shall maintain all necessary health, hygiene, and safety certifications and compliances throughout the Term.</p>

      <h4 className={styles.sectionTitle}>16. LIMITATION OF LIABILITY</h4>
      <p>To the fullest extent permitted by applicable law, VYESSFMS's total aggregate liability to the Vendor under or in connection with this Agreement, regardless of the theory of liability, shall not exceed the total Vendor Payouts actually received by the Vendor in the three (3) calendar months immediately preceding the event giving rise to the claim. VYESSFMS shall under no circumstances be liable to the Vendor for: (a) loss of profits, revenue, business, contracts, anticipated savings, or goodwill; (b) indirect, special, incidental, consequential, or punitive damages; (c) loss of data or information; (d) damages arising from reliance on third-party service providers or infrastructure; (e) any claim relating to the volume or frequency of Service Orders made available through the Platform.</p>
      <p>VYESSFMS makes no warranty, express or implied, regarding the Platform or its performance, including no warranty of merchantability, fitness for a particular purpose, uninterrupted availability, freedom from errors or bugs, or compatibility with any particular hardware or software. The Vendor acknowledges that the Platform is provided on an 'as is' and 'as available' basis, and VYESSFMS shall not be held responsible for Platform downtime, technical failures, or loss of data.</p>

      <h4 className={styles.sectionTitle}>17. COMPLIANCE WITH LAWS AND REGULATORY OBLIGATIONS</h4>
      <p>The Vendor shall at all times comply with all applicable central, state, and local laws, statutes, ordinances, rules, regulations, orders, circulars, notifications, and bye-laws as applicable to the Vendor's business, the Services, and all activities performed in connection with this Agreement. This includes but is not limited to: the Consumer Protection Act 2019, the Indian Contract Act 1872, the Micro, Small and Medium Enterprises Development Act 2006, all applicable GST legislation, the Environment Protection Act 1986, the Motor Vehicles Act 1988 (for transport-related services), relevant labour and employment laws applicable to the Vendor's workforce, and all building, fire safety, and electrical safety regulations applicable to the Service location.</p>
      <p>The Vendor shall maintain all business registrations, trade licenses, GST registrations, shop establishment registrations, and all other government-mandated registrations and renewals in current and valid status throughout the Term. VYESSFMS shall be promptly notified in writing within forty-eight (48) hours of the Vendor becoming aware of any actual or threatened cancellation, suspension, investigation, or inquiry relating to any such registration or license.</p>
      <p>The Vendor agrees to cooperate fully with any inspection, audit, or investigation conducted by government authorities, regulatory bodies, consumer forums, or courts in connection with the Vendor's performance of Services under this Agreement. The Vendor shall promptly notify VYESSFMS of any such government inquiry and shall keep VYESSFMS fully informed of the progress and outcome thereof.</p>

      <h4 className={styles.sectionTitle}>18. DISPUTE RESOLUTION AND CONSUMER COMPLAINTS</h4>
      <p>VYESSFMS shall maintain a Consumer Grievance Redressal Mechanism in accordance with the Consumer Protection Act 2019 and associated regulations. All Consumer complaints received by VYESSFMS in relation to Services performed by the Vendor shall be investigated by VYESSFMS's quality team, and the findings of such investigations shall be communicated to the Vendor. The Vendor shall cooperate fully in the investigation process and shall provide all necessary information, evidence, and access within the timeframes specified by VYESSFMS.</p>
      <p>Where a Consumer complaint is found to be substantiated upon investigation, VYESSFMS shall have the right to: (a) initiate and process refunds to the Consumer from the Vendor's pending payout; (b) apply quality failure penalties to the Vendor's account; (c) place the Vendor on a performance improvement plan; (d) suspend or terminate the Vendor's access to the Platform. The Vendor shall have the right to submit a written representation within five (5) business days of receiving the complaint investigation outcome, and VYESSFMS shall consider such representation in good faith before making a final determination.</p>
      <p>Any dispute between the Parties arising out of or relating to this Agreement, its interpretation, performance, breach, or termination, that cannot be resolved through good faith negotiations within thirty (30) days of written notice by either Party, shall be referred to and finally resolved by arbitration in accordance with the Arbitration and Conciliation Act 1996, as amended. The arbitration shall be conducted by a sole arbitrator mutually agreed upon by the Parties, or in the absence of agreement, appointed by the appropriate court. The seat and venue of arbitration shall be in Bangalore, Karnataka, India. The arbitration shall be conducted in the English language. The arbitral award shall be final and binding on both Parties.</p>
      <p>This Agreement shall be governed by and construed in accordance with the laws of India. Subject to the arbitration clause above, the Courts of Bangalore, Karnataka, India shall have exclusive jurisdiction over any matter arising out of or in connection with this Agreement.</p>

      <h4 className={styles.sectionTitle}>19. SUSPENSION AND DEACTIVATION POLICY</h4>
      <p>VYESSFMS shall have the right to immediately suspend the Vendor's access to the Platform, without prior notice and without any liability, in the following circumstances: (a) receipt of a serious Consumer complaint alleging fraud, theft, assault, harassment, or any other criminal conduct by the Vendor; (b) discovery of false, fabricated, or misleading information provided by the Vendor; (c) the Vendor's performance score falling below the minimum acceptable threshold; (d) evidence of Vendor attempting to manipulate Platform systems or commit fraud; (e) non-compliance with any regulatory requirement resulting in reputational risk to VYESSFMS; (f) the Vendor being subject to any criminal investigation or proceedings.</p>
      <p>Upon suspension, VYESSFMS shall conduct an internal investigation within fifteen (15) business days. The Vendor shall be provided with an opportunity to present their version of events in writing within five (5) business days of receiving the suspension notice. Based on the outcome of the investigation, VYESSFMS may: (a) reinstate the Vendor with or without conditions; (b) maintain the suspension for an extended period; or (c) permanently deactivate the Vendor's profile. All decisions of VYESSFMS regarding suspension and deactivation shall be final and shall not be subject to any challenge except through the dispute resolution mechanism set out in Section 18.</p>
      <p>During any period of suspension, the Vendor shall not attempt to access the Platform through alternative accounts, third-party credentials, or by any other means. Any such circumvention of the suspension shall constitute a material breach entitling VYESSFMS to permanently ban the Vendor and pursue legal remedies.</p>

      <h4 className={styles.sectionTitle}>20. HEALTH, SAFETY, AND ENVIRONMENTAL STANDARDS</h4>
      <p>The Vendor shall at all times, while performing Services at a Consumer's premises or any other location in connection with this Agreement, adhere to applicable health and safety laws, regulations, guidelines, and standards, including but not limited to the Occupational Safety, Health and Working Conditions Code 2020, relevant fire safety regulations, electrical safety standards, and all building and construction safety norms applicable to the Services performed.</p>
      <p>The Vendor shall provide their employees and sub-contractors with appropriate personal protective equipment (PPE) as required for the safe performance of the relevant Services, and shall ensure that all personnel are adequately trained in the use of such equipment and in relevant emergency procedures. The cost of PPE and safety equipment shall be borne by the Vendor unless otherwise agreed in writing.</p>
      <p>The Vendor shall handle, use, store, transport, and dispose of all chemicals, hazardous materials, waste, and other substances in accordance with applicable environmental laws and safety regulations. The Vendor shall not leave any waste, debris, chemical residue, or environmental hazards at any Consumer premises or in any public area following the performance of Services.</p>

      <h4 className={styles.sectionTitle}>21. ANTI-BRIBERY AND ETHICAL CONDUCT</h4>
      <p>The Vendor represents, warrants, and undertakes that neither the Vendor nor any of its representatives, employees, sub-contractors, or agents has offered, given, agreed to give, or received, any gift, payment, commission, hospitality, or other advantage to or from any person for the purpose of improperly influencing any decision related to this Agreement, the awarding of Service Orders, or any business activity connected to VYESSFMS. The Vendor shall comply with all applicable anti-bribery and anti-corruption laws, including the Prevention of Corruption Act 1988.</p>
      <p>The Vendor shall maintain and enforce a code of conduct, anti-bribery policies, and appropriate due diligence procedures within its own operations, and shall ensure that its employees and sub-contractors are aware of and comply with the provisions of this Section. The Vendor shall promptly report to VYESSFMS any known or suspected violation of this Section, and shall cooperate fully in any investigation there of.</p>

      <h4 className={styles.sectionTitle}>22. AMENDMENT AND VARIATION</h4>
      <p>VYESSFMS reserves the right to amend, modify, update, or supplement any provision of this Agreement, including the Schedules attached hereto, at any time during the Term, by providing the Vendor with written notice of the proposed changes through the Platform, email, or any other communication channel registered by the Vendor. Changes to Commission rates, penalty structures, and service delivery standards shall require fifteen (15) days' prior notice. Changes to operational guidelines, service protocols, and non-financial terms may take effect upon notice or within such shorter period as VYESSFMS determines to be operationally necessary.</p>
      <p>The Vendor's continued use of the Platform or acceptance of Service Orders following the effective date of any amendment shall constitute the Vendor's irrevocable acceptance of such amendment. If the Vendor objects to any proposed amendment, the Vendor's sole remedy shall be to terminate this Agreement by providing thirty (30) days' written notice as specified in Section 23, prior to the effective date of the amendment.</p>
      <p>No amendment, modification, or waiver proposed by the Vendor shall be effective unless expressly agreed to in writing by a duly authorized representative of VYESSFMS. Any attempt by the Vendor to unilaterally modify the terms of this Agreement or impose different terms shall be null and void.</p>

      <h4 className={styles.sectionTitle}>SECTION 23: TERMINATION AND 30-DAY PAPER RELIEVING PROCESS</h4>
      <p>This Section sets out the comprehensive termination framework, notice requirements, exit obligations, and the formal relieving process applicable upon conclusion of the Vendor's engagement with VYESSFMS. Both Parties agree that an orderly, professionally managed exit process is essential to protect the interests of Consumers, uphold platform integrity, ensure regulatory compliance, and safeguard the reputational and financial interests of VYESSFMS.</p>
      
      <h5>23.1 Termination by VYESSFMS Without Cause</h5>
      <p>VYESSFMS may terminate this Agreement at any time, for any reason or no reason, by providing the Vendor with a written termination notice specifying a notice period of thirty (30) calendar days from the date of such notice (the 'Notice Period'). During the Notice Period, the Vendor shall continue to perform all assigned Service Orders diligently, maintain full compliance with this Agreement, and assist VYESSFMS in transitioning ongoing consumer relationships to other Vendors.</p>
      <p>During the Notice Period, VYESSFMS shall process Vendor Payouts in the normal course for completed and verified Service Orders. VYESSFMS's right to deduct penalties, chargebacks, and other dues shall remain fully operative throughout the Notice Period.</p>
      
      <h5>23.2 Termination by VYESSFMS for Cause</h5>
      <p>VYESSFMS may terminate this Agreement immediately, without any notice period and without any liability, upon the occurrence of any of the following events: (a) a material breach by the Vendor of any provision of this Agreement that is not remedied within five (5) business days of written notice from VYESSFMS; (b) fraud, dishonesty, wilful misconduct, theft, violence, or criminal conduct by the Vendor; (c) serious violation of Consumer trust, safety, or privacy; (d) insolvency, bankruptcy, or appointment of a receiver or liquidator in respect of the Vendor's business; (e) sustained and unacceptable performance below minimum quality thresholds; (f) breach of confidentiality, non-compete, or non-solicitation obligations; (g) false misrepresentation at onboarding or during the Term; (h) use of the Platform for any fraudulent, illegal, or unauthorised purpose; or (i) any conduct that exposes VYESSFMS to legal liability, regulatory sanction, or significant reputational harm.</p>
      <p>In cases of immediate termination for cause, VYESSFMS shall be entitled to withhold all pending Vendor Payouts pending audit and final settlement, and shall apply all applicable penalties and deductions before releasing any final settlement amount.</p>
      
      <h5>23.3 Termination by Vendor</h5>
      <p>The Vendor may terminate this Agreement by providing VYESSFMS with a written notice of termination (the '30-Day Resignation Notice') through the Vendor Portal or by registered post to VYESSFMS's registered address, specifying a notice period of thirty (30) calendar days from the date of such notice. The Vendor expressly agrees that the thirty (30) day notice period is non-negotiable and that the Vendor shall not cease performing Services, abandon assigned Service Orders, or deactivate from the Platform prior to the expiry of the Notice Period.</p>
      <p>During the Notice Period, the Vendor shall: (a) diligently perform all Service Orders accepted prior to the Notice Date and all Service Orders assigned during the Notice Period within the Vendor's normal operational capacity; (b) provide VYESSFMS with a complete handover of all Consumer property, keys, access cards, materials, and equipment in the Vendor's possession; (c) return all VYESSFMS-issued uniforms, identification materials, toolkits, and branded items in good condition; (d) cooperate with VYESSFMS's onboarding team to brief replacement Vendors on ongoing Consumer accounts, if required by VYESSFMS; (e) complete all pending documentation, invoices, and compliance formalities.</p>
      <p>If the Vendor abandons the engagement or ceases to perform Services before the expiry of the Notice Period without VYESSFMS's express written consent, VYESSFMS shall be entitled to: (a) forfeit all pending Vendor Payouts outstanding as of the date of abandonment; (b) levy an early exit penalty equivalent to the Vendor's average monthly earnings over the preceding three (3) months; (c) offset all such penalties and forfeitures against any amounts owed by VYESSFMS to the Vendor; and (d) pursue legal recovery for any remaining balance.</p>

      <h5>23.4 30-Day Paper Relieving Process — Formal Procedure</h5>
      <p>Upon the Vendor completing the thirty (30) day notice period in full compliance with the obligations set out in Section 23.3, VYESSFMS shall initiate the formal Paper Relieving Process. The Paper Relieving Process shall comprise the following sequential steps, all of which must be completed within thirty (30) calendar days of the last working day, to arrive at the final full and final settlement of accounts.</p>
      <p>Step 1 — Last Working Day Declaration: The Vendor shall formally confirm the last working day in writing to VYESSFMS at least five (5) business days before the proposed last date. VYESSFMS shall acknowledge the same and issue a checklist of exit formalities to be completed.</p>
      <p>Step 2 — Equipment and Asset Return: Within two (2) business days of the last working day, the Vendor shall return to VYESSFMS's designated location or authorized representative all VYESSFMS-issued assets, uniforms, ID cards, toolkits, branded materials, Consumer property in Vendor's custody, and any other items belonging to VYESSFMS or its Consumers. VYESSFMS shall issue an asset receipt acknowledgment upon verification of returned items.</p>
      <p>Step 3 — Final Account Audit: VYESSFMS shall conduct a comprehensive final account audit within ten (10) business days of the last working day, covering all completed and pending Service Orders, outstanding payouts, pending penalties, chargeback amounts, material costs, advances, kit costs, and all other financial entries. The audit outcome shall be communicated to the Vendor.</p>
      <p>Step 4 — NOC and Clearance from Consumers: VYESSFMS may, at its discretion, contact active Consumers serviced by the Vendor to verify satisfaction with completed work and obtain clearance before proceeding with final payout. Any pending Consumer complaints shall be resolved before final settlement.</p>
      <p>Step 5 — Full and Final Settlement: Within fifteen (15) business days of completion of the final account audit and clearance of all pending items, VYESSFMS shall process the full and final settlement, comprising all verified payouts less all outstanding deductions, penalties, tax withholdings, and dues. The full and final settlement statement shall be provided to the Vendor, and the Vendor shall acknowledge receipt and acceptance in writing.</p>
      <p>Step 6 — Issuance of Relieving Letter: Upon successful completion of all exit formalities, return of assets, clearance of all dues, and acceptance of the full and final settlement, VYESSFMS shall issue a formal Relieving Letter to the Vendor acknowledging the Vendor's association with VYESSFMS and confirming the conclusion of the engagement. The Relieving Letter shall be issued within thirty (30) calendar days of the last working day, subject to the Vendor's fulfilment of all obligations. VYESSFMS shall not be obligated to issue a Relieving Letter if the Vendor has outstanding dues, unresolved Consumer complaints, or any other pending obligations.</p>
      <p>Step 7 — Post-Relieving Obligations: Even after the issuance of the Relieving Letter, the Vendor's obligations under Sections 10, 11, 14, and 15 of this Agreement shall remain in full force and effect for the periods specified therein.</p>

      <h5>23.5 Effect of Termination</h5>
      <p>Upon termination or expiry of this Agreement: (a) all licenses and access rights granted to the Vendor under this Agreement shall immediately cease; (b) the Vendor shall immediately cease all use of the VYESSFMS Platform, brand, Confidential Information, and intellectual property; (c) each Party shall return or destroy all Confidential Information of the other Party, except as required by law; (d) all accrued rights, liabilities, obligations, and remedies of the Parties shall survive termination to the extent expressly stated in this Agreement.</p>

      <h4 className={styles.sectionTitle}>24. FORCE MAJEURE</h4>
      <p>Neither Party shall be liable for any delay or failure in the performance of its obligations under this Agreement (other than payment obligations) to the extent such delay or failure is caused by a Force Majeure Event, provided that: (a) the affected Party promptly notifies the other Party in writing upon becoming aware of the Force Majeure Event and its expected duration; (b) the affected Party takes all reasonable steps to minimize the impact of the Force Majeure Event and resume performance as soon as practicable; and (c) the affected Party keeps the other Party regularly updated on the status of the Force Majeure Event.</p>
      <p>If a Force Majeure Event persists for more than sixty (60) days, either Party may terminate this Agreement by providing thirty (30) days' written notice, without liability for such termination except for payment of amounts due for Services performed prior to the Force Majeure Event. VYESSFMS shall have the right to adjust Commission rates, operational requirements, and Service categories during any period of Force Majeure to reflect changed market conditions.</p>

      <h4 className={styles.sectionTitle}>25. NOTICES</h4>
      <p>All notices, demands, requests, consents, approvals, and other communications required or permitted under this Agreement shall be in writing and shall be deemed duly given when: (a) personally delivered; (b) sent by nationally recognized overnight courier with delivery confirmation; (c) sent by registered or certified mail, postage prepaid, return receipt requested; or (d) sent by email with acknowledgment of receipt, to the addresses set out in Schedule D or as otherwise updated by written notice.</p>
      <p>Notices to VYESSFMS shall be addressed to the Vendor Relations Manager, VYESSFMS Private Limited, at the company's registered address. Notices may also be sent through the official Vendor Portal and shall be deemed received upon the Vendor logging into the Portal within forty-eight (48) hours of the notice being posted. VYESSFMS's communication through the Platform shall be deemed valid and binding notice for all operational and contractual purposes.</p>

      <h4 className={styles.sectionTitle}>26. GENERAL PROVISIONS</h4>
      <p>Entire Agreement: This Agreement, including all Schedules, annexures, and policies incorporated herein by reference, constitutes the entire agreement between the Parties with respect to the subject matter hereof and supersedes all prior negotiations, representations, warranties, agreements, and understandings, whether written or oral. No statement, promise, or representation made before or during negotiations leading to this Agreement shall be binding on either Party unless incorporated into this Agreement.</p>
      <p>Waiver: No waiver by VYESSFMS of any breach or default of any term of this Agreement shall be deemed a waiver of any subsequent or continuing breach or default, and shall not affect the other terms of this Agreement. The failure of VYESSFMS to exercise or enforce any right or provision of this Agreement shall not constitute a waiver of such right or provision.</p>
      <p>Severability: If any provision of this Agreement is held by a court of competent jurisdiction or arbitral tribunal to be invalid, illegal, or unenforceable, such provision shall be modified to the minimum extent necessary to make it enforceable, and the remaining provisions of this Agreement shall remain in full force and effect.</p>
      <p>Assignment: The Vendor shall not assign, transfer, sublicense, or sub-contract any rights or obligations under this Agreement without the prior written consent of VYESSFMS. VYESSFMS may freely assign this Agreement and its rights and obligations hereunder to any affiliate, successor entity, or in connection with any merger, acquisition, restructuring, or sale of assets.</p>
      <p>Counterparts: This Agreement may be executed in one or more counterparts, including electronically, each of which shall be deemed an original, and all of which together shall constitute one and the same instrument.</p>
      <p>Relationship of Parties: Nothing in this Agreement shall be construed to create a partnership, joint venture, employment, or agency relationship between the Parties. The Vendor is and shall remain an independent contractor for all purposes.</p>
      <p>Survival: Sections 10, 11, 12, 14, 15, 16, 18, 23.5, and all other provisions that by their nature ought to survive, shall survive the termination or expiry of this Agreement.</p>

      <hr className={styles.divider} />

      <h3 className={styles.mainTitle}>TERMS AND CONDITIONS — VENDOR PLATFORM USAGE POLICY</h3>
      <p>The following Terms and Conditions (T&C) govern the Vendor's access to and use of the VYESSFMS Platform, in addition to the substantive rights and obligations set out in the Agreement above. These T&C form an integral and binding part of the Vendor Services Agreement and shall be read in conjunction therewith. In the event of any conflict between these T&C and the main body of the Agreement, the main body of the Agreement shall prevail.</p>
      
      <h4 className={styles.sectionTitle}>T&C 1: Platform Access and Account Management</h4>
      <p>The Vendor shall be issued a unique Vendor ID and login credentials upon successful completion of the onboarding process. The Vendor shall be solely responsible for maintaining the security and confidentiality of all login credentials, and shall not share, transfer, or permit any third party to use the Vendor account. VYESSFMS shall not be liable for any unauthorized access resulting from the Vendor's failure to secure their credentials. The Vendor shall immediately notify VYESSFMS of any actual or suspected unauthorized use of the Vendor account.</p>
      <p>The Vendor acknowledges and agrees that VYESSFMS may at any time, at its absolute discretion and without prior notice, access, monitor, audit, or review any information, activity, or content on the Vendor's account for the purposes of quality assurance, fraud prevention, compliance monitoring, consumer protection, and operational management. The Vendor consents to such monitoring as a condition of Platform access.</p>
      <p>The Vendor shall not attempt to: (a) access restricted areas of the Platform; (b) interfere with the Platform's functionality, security, or data integrity; (c) introduce malware, viruses, or harmful code; (d) scrape, crawl, or copy Platform data; (e) use automated tools or bots; or (f) impersonate VYESSFMS, its employees, or other Vendors. Any violation of this provision shall result in immediate account termination and legal action.</p>

      <h4 className={styles.sectionTitle}>T&C 2: Service Order Acceptance and Completion</h4>
      <p>The Vendor shall maintain a Service Order Acceptance Rate of not less than the minimum threshold specified in Schedule B. Persistent low acceptance rates may result in the Vendor receiving fewer Service Order allocations and may trigger review under the performance management framework. The Vendor is not obligated to accept any specific Service Order, but the overall acceptance behaviour shall be monitored as part of the Vendor's performance assessment.</p>
      <p>Once a Service Order is accepted by the Vendor through the Platform, the Vendor shall be bound to perform the Services as specified in the Order. Any variation in the scope, pricing, or materials required for the Services must be communicated to the Consumer and documented through the Platform before implementation. The Vendor shall not charge the Consumer any amount beyond what is approved through the Platform's pricing structure without VYESSFMS's prior written consent.</p>
      <p>The Vendor shall mark Service Orders as completed only upon actual completion of the Services to the Consumer's satisfaction. Marking Service Orders as complete before actual completion, or without the Consumer's acknowledgment, shall constitute fraudulent reporting and shall be treated as a material breach of this Agreement.</p>

      <h4 className={styles.sectionTitle}>T&C 3: Consumer Interaction Standards</h4>
      <p>The Vendor shall interact with Consumers at all times in a professional, courteous, respectful, and helpful manner. The Vendor shall not engage in any form of verbal abuse, aggressive behaviour, discrimination, sexual harassment, or any other conduct that could reasonably cause distress, offence, or discomfort to Consumers, their family members, or any person present at the service location. Any verified complaint of misconduct shall be dealt with in accordance with VYESSFMS's disciplinary framework, which may include immediate termination.</p>
      <p>The Vendor shall maintain strict adherence to Consumer privacy and dignity. The Vendor shall not photograph, video record, or otherwise document the Consumer's premises, personal belongings, family members, or any private information without the Consumer's explicit consent. The Vendor shall not solicit personal information from Consumers beyond what is strictly necessary for the performance of Services.</p>

      <h4 className={styles.sectionTitle}>T&C 4: Use of VYESSFMS Brand and Marketing</h4>
      <p>The Vendor may represent themselves as a VYESSFMS-associated professional only in the context of performing Services booked through the Platform. The Vendor shall not use the VYESSFMS brand, logo, name, or associated intellectual property in any marketing materials, social media profiles, business cards, advertisements, or other communications without prior written approval from VYESSFMS's marketing team. Extra third party branding also</p>
      <p>The Vendor shall not make any public statements, give media interviews, post reviews, or publish content relating to VYESSFMS's business, Platform, Consumers, or operations on any public forum, social media platform, review website, or news outlet without VYESSFMS's prior written approval. Any positive testimonial, case study, or endorsement that the Vendor wishes to make in connection with VYESSFMS shall also require prior approval. Negative or defamatory public statements about VYESSFMS shall be treated as a material breach of this Agreement.</p>

      <h4 className={styles.sectionTitle}>T&C 5: Training and Skill Development</h4>
      <p>The Vendor agrees to participate in all mandatory training programmes, skill upgradation workshops, safety briefings, and onboarding sessions specified by VYESSFMS as a condition of continued engagement. Such training may be conducted online through the Platform or in person at VYESSFMS-designated venues. VYESSFMS shall provide advance notice of mandatory training requirements and shall endeavour to offer flexible scheduling to minimize disruption to the Vendor's service delivery schedule.</p>
      <p>Any professional certifications, skill badges, or platform endorsements earned through VYESSFMS-administered training programmes are the property of VYESSFMS and are associated with the Vendor's Platform account. Such certifications shall not be transferred to competing platforms and shall not be represented on third-party credentials unless VYESSFMS grants written approval for such representation.</p>

      <h4 className={styles.sectionTitle}>T&C 6: Technical Requirements and Data</h4>
      <p>The Vendor shall maintain a smartphone or other compatible device with the VYESSFMS Vendor App installed, updated to the latest available version, with adequate internet connectivity to ensure uninterrupted access to the Platform during working hours. The Vendor shall bear all costs related to device procurement, maintenance, and data connectivity. VYESSFMS shall not be responsible for Service Order failures arising from the Vendor's inadequate device or connectivity.</p>
      <p>All data generated by the Vendor's use of the Platform, including location data, Service Order history, consumer ratings, transaction records, and performance metrics, shall be the exclusive property of VYESSFMS. The Vendor grants VYESSFMS a perpetual, irrevocable, worldwide, royalty-free license to collect, use, store, process, analyse, aggregate, and share all such data for any business, operational, analytical, commercial, or regulatory purpose, subject to applicable data protection laws.</p>

      <h4 className={styles.sectionTitle}>T&C 7: Anti-Fraud and Platform Integrity</h4>
      <p>VYESSFMS employs advanced fraud detection systems, AI-based anomaly detection, and human review teams to monitor Platform activity. Any Vendor found to be engaging in fraudulent activities, including but not limited to: creating fake Service Orders, manipulating geolocation data, submitting false completion reports, colluding with Consumers to defraud VYESSFMS, using multiple accounts, gaming the review system, or circumventing payment channels, shall face immediate permanent deactivation, forfeiture of all pending payouts, and criminal prosecution.</p>
      <p>The Vendor shall immediately report to VYESSFMS any suspected fraud, system abuse, collusion, or irregularity observed in connection with the Platform, whether by other Vendors, Consumers, or third parties. The Vendor shall be protected from retaliation for good-faith reporting of suspected fraud or misconduct.</p>

      <h4 className={styles.sectionTitle}>T&C 8: Subcontracting</h4>
      <p>The Vendor shall not subcontract, delegate, or assign the performance of any Service Order to any other individual or entity without the prior written consent of VYESSFMS. Any approved subcontracting shall not relieve the Vendor of primary responsibility for the quality, timeliness, and compliance of the Services. The Vendor shall ensure that all approved sub-contractors are duly verified, qualified, insured, and compliant with VYESSFMS's standards and applicable laws, and the Vendor shall be fully liable for the acts and omissions of all sub-contractors.</p>

      <h4 className={styles.sectionTitle}>T&C 9: Grievance Mechanism for Vendors</h4>
      <p>VYESSFMS shall maintain a designated Vendor Support Centre accessible through the Platform or via the designated Vendor helpline number. Vendors may raise operational, payment, or policy grievances through the Vendor Support Centre. VYESSFMS undertakes to acknowledge all Vendor grievances within three (3) business days and to provide a substantive response or resolution within fifteen (15) business days of receipt. Escalation pathways shall be available for unresolved grievances as published in VYESSFMS's Vendor Support Policy.</p>

      <h4 className={styles.sectionTitle}>T&C 10: Changes to T&C</h4>
      <p>VYESSFMS reserves the right to modify, update, supplement, or replace these Terms and Conditions at any time. Updated T&C shall be published on the Platform and communicated to Vendors via the registered email address or through in-app notifications. The Vendor's continued use of the Platform following the communication of updated T&C shall constitute acceptance of such changes. Vendors who do not accept the updated T&C may terminate this Agreement in accordance with Section 23.</p>

      <hr className={styles.divider} />

      <h3 className={styles.mainTitle}>SCHEDULE A — APPROVED SERVICE CATEGORIES</h3>
      <p>The following service categories are approved for the Vendor's engagement under this Agreement, subject to the Vendor's verified credentials and applicable geographic availability. Additional service categories may be added or removed by VYESSFMS with appropriate notice to the Vendor:</p>
      <ul className={styles.list}>
        <li><strong>Home Cleaning Service and Maintenance</strong> — deep cleaning, bathroom cleaning, sofa shampooing, kitchen cleaning, floor scrubbing, glass cleaning, carpet cleaning, and complete home sanitation services.</li>
        <li><strong>Appliance Repair and Maintenance</strong> — air conditioner, microwave, geyser, and all home appliances</li>
        <li><strong>Plumbing Services</strong> — Pipe fitting, tap repair, drainage, water heater installation, bathroom fitting, and emergency plumbing</li>
        <li><strong>Carpentry Services</strong> — Furniture assembly, door repair, window fitting, cabinet installation, and general woodwork</li>
        <li><strong>Painting and Waterproofing Services</strong> — Interior painting, exterior painting, texture painting, waterproofing, and polishing</li>
        <li><strong>Pest Control Services</strong> — Cockroach treatment, termite control, rodent control, bed bug treatment, and general fumigation</li>
        <li><strong>Beauty and Wellness Services</strong> — Haircut, facial, waxing, manicure, pedicure, and other beauty treatments</li>
        <li><strong>Facility Management Services</strong> — Office cleaning, pantry maintenance, housekeeping staffing, and commercial property maintenance</li>
        <li><strong>Other Services</strong> — As approved by VYESSFMS and notified to the Vendor from time to time</li>
      </ul>

      <hr className={styles.divider} />

      <h3 className={styles.mainTitle}>SCHEDULE B — COMMISSION AND PAYMENT TERMS</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Service Category</th>
            <th>Settlement Cycle</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Appliance Repair</td><td>24 hrs</td></tr>
          <tr><td>Electrical Services</td><td>24 hrs</td></tr>
          <tr><td>Plumbing Services</td><td>24 hrs</td></tr>
          <tr><td>Carpentry Services</td><td>24 hrs</td></tr>
          <tr><td>Painting Services</td><td>24 hrs</td></tr>
          <tr><td>Pest Control</td><td>24 hrs</td></tr>
          <tr><td>Beauty & Wellness</td><td>24 hrs</td></tr>
          <tr><td>Tutoring Services</td><td>24 hrs</td></tr>
          <tr><td>Facility Management</td><td>24 hrs</td></tr>
        </tbody>
      </table>
      <p className={styles.tableNote}>Note: Commission rates are exclusive of GST. TDS shall be deducted as per applicable provisions of the Income Tax Act. Minimum Acceptance Rate: 70%. All rates are subject to revision by VYESSFMS with "15 days" notice.</p>

      <hr className={styles.divider} />

      <h3 className={styles.mainTitle}>SCHEDULE C — PENALTY STRUCTURE</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Violation / Breach</th>
            <th>Penalty Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Late Cancellation (&lt;4 hours)</td><td>INR 200 per instance</td><td>Warning + Deduction</td></tr>
          <tr><td>No-Show / Abandonment</td><td>INR 500 per instance</td><td>Suspension Review</td></tr>
          <tr><td>Late Arrival (&gt;30 min)</td><td>INR 100 per instance</td><td>Warning</td></tr>
          <tr><td>Quality Failure (Complaint)</td><td>INR 300 per verified complaint</td><td>PIP Trigger</td></tr>
          <tr><td>Misconduct — First Instance</td><td>INR 1,000</td><td>Suspension</td></tr>
          <tr><td>Misconduct — Repeat</td><td>INR 2,500 + Termination</td><td>Permanent Ban</td></tr>
          <tr><td>Data Privacy Breach</td><td>INR 5,000 + Legal Action</td><td>Immediate Termination</td></tr>
          <tr><td>Platform Fraud</td><td>Full Payout Forfeiture + FIR</td><td>Permanent Ban</td></tr>
          <tr><td>Direct Solicitation</td><td>INR 10,000 per instance</td><td>Termination + Legal Action</td></tr>
          <tr><td>Early Exit (No-Notice)</td><td>3x Monthly Average Earnings</td><td>Payout Forfeiture</td></tr>
        </tbody>
      </table>

      <div className={styles.signaturePageDivider}></div>

      <div className={styles.signatureHeaderRow}>
        <h3 className={styles.signatureDocTitle}>VYESSFMS PRIVATE LIMITED</h3>
        <span className={styles.signatureDocSubtitle}>VENDOR SERVICES AGREEMENT</span>
      </div>
      
      <div className={styles.blueDivider}></div>
      <h3 className={styles.signatureMainTitle}>SIGNATURE PAGE — EXECUTION OF AGREEMENT</h3>
      <div className={styles.blueDivider}></div>

      <p className={styles.signatureIntro}>
        IN WITNESS WHEREOF, the Parties hereto have executed this Vendor Services Agreement as of the date first written below, intending to be legally bound by its terms and conditions. Each Party acknowledges that it has read, understood, and agrees to all provisions of this Agreement and the Schedules attached hereto, and that this Agreement has been entered into freely and without duress, coercion, misrepresentation, or undue influence.
      </p>

      <div className={styles.signatureBoxes}>
        {/* Left Box - VYESSFMS */}
        <div className={styles.sigBox}>
          <div className={styles.sigHeader}>VYESSFMS Private Limited</div>
          <div className={styles.sigRow}>
            <div className={styles.sigLine}></div>
            <div className={styles.sigLabel}>Signature</div>
          </div>
          
          <div className={styles.sigHeader}>Authorized Signatory</div>
          <div className={styles.sigRow}>
            <div className={styles.sigLine}></div>
            <div className={styles.sigLabel}>Name & Designation</div>
          </div>
          
          <div className={styles.sigHeader}>Date:</div>
          <div className={styles.sigRow}>
            <div className={styles.sigLineFilled}>{date}</div>
          </div>
          
          <div className={styles.sigHeader}>Company Seal:</div>
          <div className={styles.sigRowEmpty}></div>
        </div>

        {/* Right Box - Vendor */}
        <div className={styles.sigBox}>
          <div className={styles.sigHeader}>Vendor / Service Provider</div>
          <div className={styles.sigRow}>
            {signatureImage ? (
              <div className={styles.sigImageContainer}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={signatureImage} alt="Vendor Signature" className={styles.sigImage} />
              </div>
            ) : (
              <div className={styles.sigLine}></div>
            )}
            <div className={styles.sigLabel}>Signature</div>
          </div>
          
          <div className={styles.sigHeader}>Vendor Full Name / Business Name</div>
          <div className={styles.sigRow}>
            <div className={styles.sigLineFilled}>{companyName} ({contactName})</div>
            <div className={styles.sigLabel}>Name</div>
          </div>
          
          <div className={styles.sigHeader}>Vendor ID:</div>
          <div className={styles.sigRow}>
            <div className={styles.sigLineFilled}>[To be generated]</div>
          </div>
          
          <div className={styles.sigHeader}>Date:</div>
          <div className={styles.sigRow}>
            <div className={styles.sigLineFilled}>{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
