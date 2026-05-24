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
      
      <h4 className={styles.sectionTitle}>VENDOR SERVICES AGREEMENT</h4>
      
      <p>This Vendor Services Agreement (hereinafter referred to as "this Agreement" or "VSA") is entered into as of <strong>{date}</strong> by and between <strong>VYESSFMS Private Limited</strong>, a company duly incorporated and existing under the laws of India, having its registered office at such address as may be notified from time to time (hereinafter referred to as "VYESSFMS" or "the Company"), and <strong>{companyName}</strong> represented by <strong>{contactName}</strong> located at <strong>{address}</strong> (hereinafter referred to as "Vendor" or "Service Provider"). VYESSFMS and the Vendor shall hereinafter be individually referred to as a "Party" and collectively as the "Parties."</p>

      <p><strong>WHEREAS</strong>, VYESSFMS operates a technology-enabled marketplace platform that connects skilled service professionals and vendors with end consumers seeking a wide variety of home services, facility management services, professional services, and other on-demand services (hereinafter referred to as the "Platform"); and</p>

      <p><strong>WHEREAS</strong>, the Vendor possesses the necessary skills, qualifications, licenses, certifications, tools, and competencies required to perform the services enumerated in Schedule A of this Agreement (hereinafter referred to as the "Services"); and</p>

      <p><strong>WHEREAS</strong>, VYESSFMS desires to engage the Vendor to provide the Services to end consumers through the Platform on a non-exclusive basis, and the Vendor desires to be so engaged, subject to the terms, conditions, covenants, representations, warranties, and obligations set forth in this Agreement; and</p>

      <p><strong>WHEREAS</strong>, the Parties acknowledge that this Agreement governs the entire commercial and operational relationship between VYESSFMS and the Vendor and supersedes all prior negotiations, understandings, representations, warranties, and agreements, whether oral or written, relating to the subject matter hereof;</p>

      <p><strong>NOW, THEREFORE</strong>, in consideration of the mutual covenants and agreements set forth herein, the sufficiency and adequacy of which are hereby acknowledged by the Parties, and intending to be legally bound, the Parties hereby agree as follows:</p>

      <h4 className={styles.sectionTitle}>1. DEFINITIONS AND INTERPRETATION</h4>
      <p>In this Agreement, unless the context otherwise requires, the following expressions shall bear the meanings assigned to them hereunder...</p>
      <ul className={styles.list}>
        <li><strong>"VYESSFMS Platform" or "Platform"</strong> means the proprietary mobile application, web-based portal, API interfaces... owned, operated, and controlled exclusively by VYESSFMS Private Limited.</li>
        <li><strong>"Vendor"</strong> means the individual professional, freelancer, contractor, sole proprietor, partnership, LLP, private limited company, or any other legal entity that has been onboarded by VYESSFMS...</li>
        <li><strong>"Services"</strong> means all tasks, works, professional activities, labour services, maintenance services, installation services, repair services, cleaning services, beauty services, wellness services, pest control services, plumbing services, electrical services, carpentry services, painting services, appliance repair services, tutoring services, or any other category of services as defined in Schedule A.</li>
        <li><strong>"Consumer" or "Customer"</strong> means any individual, household, business entity, institution, or organization that books or avails Services through the VYESSFMS Platform.</li>
        <li><strong>"Service Order"</strong> means a booking, request, job order, work order, or assignment generated through the Platform...</li>
        <li><strong>"Commission" or "Platform Fee"</strong> means the percentage of the Service Fee charged by VYESSFMS for access to the Platform... as detailed in Schedule B.</li>
        <li><strong>"Service Fee"</strong> means the total amount charged to the Consumer for the Services...</li>
        <li><strong>"Vendor Payout" or "Net Service Amount"</strong> means the amount payable to the Vendor after deduction of Commission, applicable taxes, penalties, deductions, chargebacks, refunds...</li>
      </ul>

      <h4 className={styles.sectionTitle}>2. SCOPE OF ENGAGEMENT AND PLATFORM ACCESS</h4>
      <p>VYESSFMS hereby grants the Vendor a limited, revocable, non-exclusive, non-transferable, and non-sublicensable license to access and use the VYESSFMS Platform solely for the purpose of receiving Service Orders, communicating with Consumers in relation to assigned Services, tracking job status, receiving payments, and accessing Vendor-specific features...</p>
      <p>The Vendor expressly acknowledges and agrees that VYESSFMS reserves the absolute and unconditional right to determine the scope, nature, volume, type, and geographic distribution of Service Orders assigned to or made available to the Vendor...</p>

      <h4 className={styles.sectionTitle}>3. VENDOR ONBOARDING, ELIGIBILITY, AND COMPLIANCE</h4>
      <p>The Vendor represents, warrants, and covenants that at the time of execution of this Agreement and continuously throughout the Term, the Vendor: (a) is of legal age to enter into binding contracts; (b) possesses all necessary licenses, permits, certificates; (c) has provided accurate, complete, and truthful information; (d) has not been convicted of any criminal offense...</p>
      <p>The Vendor hereby grants VYESSFMS and its authorized third-party partners full consent and authorization to conduct comprehensive background verification checks...</p>

      <h4 className={styles.sectionTitle}>4. VENDOR OBLIGATIONS AND CONDUCT STANDARDS</h4>
      <p>The Vendor shall perform all Services with the highest degree of professionalism, skill, diligence, care, and expertise. The Vendor shall adhere strictly to the scheduled Service Order timings... Unauthorized cancellations or no-shows shall attract monetary penalties as specified in Schedule C.</p>
      <p>During the performance of Services, the Vendor shall: (a) wear the VYESSFMS-issued uniform; (b) use only VYESSFMS-approved tools; (c) maintain personal hygiene; (d) treat Consumers with respect; (e) not smoke or consume alcohol; (f) not carry unauthorized persons; (g) not cause damage; (h) not engage in solicitation.</p>

      <h4 className={styles.sectionTitle}>5. VYESSFMS OBLIGATIONS AND PLATFORM SUPPORT</h4>
      <p>VYESSFMS shall use commercially reasonable efforts to: (a) maintain the Platform; (b) provide the Vendor with access to a dedicated vendor dashboard; (c) facilitate secure and timely payment processing; (d) offer basic training materials.</p>

      <h4 className={styles.sectionTitle}>6. COMMISSION STRUCTURE AND PLATFORM FEE POLICY</h4>
      <p>The Vendor agrees to pay to VYESSFMS a Commission on all Service Fees generated through the Platform, at the rates specified in Schedule B. The Commission shall be calculated on the gross Service Fee inclusive of applicable goods and services tax (GST)...</p>

      <h4 className={styles.sectionTitle}>7. PAYMENT TERMS AND SETTLEMENT PROCESS</h4>
      <p>VYESSFMS shall process and disburse Vendor Payouts in accordance with the settlement cycle specified in Schedule B. Payouts shall be conditional upon successful completion and absence of pending Consumer complaints...</p>

      <h4 className={styles.sectionTitle}>8. QUALITY STANDARDS AND PERFORMANCE MANAGEMENT</h4>
      <p>VYESSFMS shall collect, analyze, and act upon Consumer feedback, ratings, and reviews. The Vendor agrees that Consumer ratings are an essential feature of the Platform's trust and transparency model...</p>

      <h4 className={styles.sectionTitle}>9. EQUIPMENT, TOOLS, UNIFORMS, AND MATERIALS</h4>
      <p>The Vendor shall be responsible for procuring, maintaining, and providing all tools, equipment, and materials necessary for the professional and safe performance of Services...</p>

      <h4 className={styles.sectionTitle}>10. INTELLECTUAL PROPERTY RIGHTS</h4>
      <p>All Intellectual Property, including trademarks, service marks, logos, brand identities... are and shall remain the exclusive property of VYESSFMS.</p>

      <h4 className={styles.sectionTitle}>11. CONFIDENTIALITY AND DATA PROTECTION</h4>
      <p>The Vendor acknowledges that they will receive Confidential Information... and shall not, directly or indirectly, disclose, publish, communicate, share, or use any Confidential Information for any purpose other than the performance of Services.</p>

      <h4 className={styles.sectionTitle}>12. INSURANCE AND INDEMNIFICATION</h4>
      <p>The Vendor shall maintain, at its own cost and expense, adequate insurance coverage... The Vendor shall indemnify, defend, and hold harmless VYESSFMS from and against any claims, suits, actions, proceedings, losses, liabilities arising out of Vendor's acts.</p>

      <h4 className={styles.sectionTitle}>13. PENALTY AND DEDUCTION FRAMEWORK</h4>
      <p>The Vendor acknowledges and accepts the penalty framework (Schedule C) including Cancellation Penalty, Late Arrival Penalty, Quality Failure Penalty, Misconduct Penalty, and Fraudulent Practices Penalty.</p>

      <h4 className={styles.sectionTitle}>14. NON-COMPETE AND NON-SOLICITATION</h4>
      <p>During the Term of this Agreement and for a period of twelve (12) months following termination, the Vendor shall not engage in competing businesses or solicit Consumers introduced through the Platform.</p>

      <h4 className={styles.sectionTitle}>15. REPRESENTATIONS AND WARRANTIES</h4>
      <p>Each Party represents and warrants that it has full legal capacity, authority, and power to enter into this Agreement.</p>

      <h4 className={styles.sectionTitle}>16. LIMITATION OF LIABILITY</h4>
      <p>VYESSFMS's total aggregate liability shall not exceed the total Vendor Payouts received in the 3 months preceding the event. VYESSFMS shall under no circumstances be liable for indirect, special, incidental, consequential, or punitive damages.</p>

      <h4 className={styles.sectionTitle}>17. COMPLIANCE WITH LAWS</h4>
      <p>The Vendor shall at all times comply with all applicable central, state, and local laws, statutes, ordinances, rules, regulations, orders, circulars, notifications...</p>

      <h4 className={styles.sectionTitle}>18. DISPUTE RESOLUTION</h4>
      <p>Any dispute shall be referred to and finally resolved by arbitration in accordance with the Arbitration and Conciliation Act 1996. The seat and venue of arbitration shall be in Bangalore, Karnataka, India.</p>

      <h4 className={styles.sectionTitle}>19. SUSPENSION AND DEACTIVATION POLICY</h4>
      <p>VYESSFMS shall have the right to immediately suspend the Vendor's access to the Platform in circumstances of fraud, severe complaints, or continued poor performance.</p>

      <h4 className={styles.sectionTitle}>20. HEALTH, SAFETY, AND ENVIRONMENTAL STANDARDS</h4>
      <p>The Vendor shall adhere to applicable health and safety laws, provide appropriate PPE to employees, and handle hazardous materials safely.</p>

      <h4 className={styles.sectionTitle}>21. ANTI-BRIBERY AND ETHICAL CONDUCT</h4>
      <p>The Vendor shall comply with all applicable anti-bribery and anti-corruption laws, including the Prevention of Corruption Act 1988.</p>

      <h4 className={styles.sectionTitle}>22. AMENDMENT AND VARIATION</h4>
      <p>VYESSFMS reserves the right to amend, modify, update, or supplement any provision of this Agreement with prior notice.</p>

      <h4 className={styles.sectionTitle}>23. TERMINATION AND 30-DAY PAPER RELIEVING PROCESS</h4>
      <p>VYESSFMS or the Vendor may terminate this Agreement by providing 30 days written notice. Early exit without notice attracts a penalty of 3x Monthly Average Earnings.</p>

      <h4 className={styles.sectionTitle}>24. FORCE MAJEURE</h4>
      <p>Neither Party shall be liable for delay caused by a Force Majeure Event, provided they notify the other Party promptly.</p>

      <h4 className={styles.sectionTitle}>25. NOTICES</h4>
      <p>All notices must be in writing and delivered to the registered addresses or through the official Vendor Portal.</p>

      <h4 className={styles.sectionTitle}>26. GENERAL PROVISIONS</h4>
      <p>This Agreement constitutes the entire agreement. It includes provisions for Waiver, Severability, Assignment, Counterparts, Relationship of Parties (Independent Contractor), and Survival.</p>

      <hr className={styles.divider} />

      <h3 className={styles.mainTitle}>TERMS AND CONDITIONS — VENDOR PLATFORM USAGE POLICY</h3>
      <ul className={styles.list}>
        <li><strong>T&C 1: Platform Access and Account Management</strong> - Vendor is responsible for account security. Monitoring is permitted.</li>
        <li><strong>T&C 2: Service Order Acceptance and Completion</strong> - Vendor must maintain minimum Acceptance Rate. Fraudulent reporting is prohibited.</li>
        <li><strong>T&C 3: Consumer Interaction Standards</strong> - Professionalism required. Privacy must be respected.</li>
        <li><strong>T&C 4: Use of VYESSFMS Brand and Marketing</strong> - Brand use requires written approval.</li>
        <li><strong>T&C 5: Training and Skill Development</strong> - Mandatory training participation required.</li>
        <li><strong>T&C 6: Technical Requirements and Data</strong> - Vendor must maintain a compatible smartphone. All generated data belongs to VYESSFMS.</li>
        <li><strong>T&C 7: Anti-Fraud and Platform Integrity</strong> - Strict action against fraud, fake orders, and collusion.</li>
        <li><strong>T&C 8: Subcontracting</strong> - Prohibited without prior written consent.</li>
        <li><strong>T&C 9: Grievance Mechanism for Vendors</strong> - Escalation pathways available via Vendor Support Centre.</li>
        <li><strong>T&C 10: Changes to T&C</strong> - VYESSFMS reserves the right to modify terms with notice.</li>
      </ul>

      <hr className={styles.divider} />

      <h3 className={styles.mainTitle}>SCHEDULE A — APPROVED SERVICE CATEGORIES</h3>
      <ul className={styles.list}>
        <li>Home Cleaning Service and Maintenance</li>
        <li>Appliance Repair and Maintenance</li>
        <li>Plumbing Services</li>
        <li>Carpentry Services</li>
        <li>Painting and Waterproofing Services</li>
        <li>Pest Control Services</li>
        <li>Beauty and Wellness Services</li>
        <li>Facility Management Services</li>
        <li>Other Services (As approved)</li>
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
      <p className={styles.tableNote}>Note: Commission rates are exclusive of GST. TDS shall be deducted as per applicable provisions. Minimum Acceptance Rate: 70%.</p>

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
