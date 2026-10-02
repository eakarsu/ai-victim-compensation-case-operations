# Victim Compensation Case Operations

Assemble applications, supporting expenses, payer offsets, reviewer decisions, payment records and appeals.

## Implemented records

- **Compensation Case**: name, case Number, applicant Reference, program, incident At, submitted At, status.
- **Expense Claim**: title, category, incurred At, provider, claimed Cents, currency, evidence, status.
- **Payer Offset**: title, payer, received Cents, received At, evidence, status.
- **Case Document**: title, document Type, source Reference, received At, description, author, status.
- **Eligibility Review**: title, reviewer, reviewed At, rule Version, findings, decision Rationale, status.
- **Expense Decision**: title, allowed Cents, reason, decision At, reviewer, status.
- **Award Decision**: title, awarded Cents, rule Version, decided At, authorized By, rationale, status.
- **Case Payment**: title, paid At, payee, amount Cents, method, receipt, status.
- **Compensation Appeal**: title, submitted At, reason, additional Evidence, response Due At, reviewer, status.
- **Operational Task**: title, owner, priority, start At, due At, done, notes, status.
- **Rule Version**: title, jurisdiction, version, effective At, expires At, source Url, requirement Text, status.
- **Document Requirement**: title, category, required By, source Reference, evidence Reference, review Notes, status.

## AI workflows

- Expense document extraction: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Offset reconciliation brief: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Application completeness review: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Reviewer decision preparation: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Award explanation draft: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Appeal evidence organization: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Evidence completeness review: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Operations handoff draft: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.

## Calculations

- Expense offset calculation: Calculate a reviewed-expense net amount after payer offsets and entered cap; no eligibility decision or disbursement.
- Compensation Case evidence checklist: Check source presence against an explicitly supplied document list; reviewer assesses adequacy.
- Operational deadline queue: Compute overdue items from entered dates and completed flags; no external notifications.

## Workspace features

Role-based login and account management; validated create/edit/delete; required parent and sibling relationships; search and pagination; atomic JSON imports; CSV/JSON exports; optimistic concurrency; two independent human reviews; immutable source-text uploads with independent review; dated task calendar; aggregate reports; searchable audit trail; model catalog and administrator AI settings; configured HTTPS connectors with approval, idempotency and receipt checks.

## Integration boundaries

A finite working scope, not every conceivable feature. No production regulator, insurer, carrier, court, university or clinical integration is preconfigured. Source uploads support text/CSV/JSON/Markdown, not OCR/PDF parsing. AI produces drafts and cannot authorize clinical handling, adjudicate rights, select recipients or jurors, establish eligibility, certify regulatory compliance or send submissions. Live external execution requires a configured adapter and independent human approval of the current record. Calculations use supplied rules and units; example rules are fictional.
