export interface PageConfig {
  label: string;
  href: string;
  description: string;
  entities: string[];
  workflows: string[];
}

export interface EntityConfig {
  name: string;
  label: string;
  fields: Array<{ name: string; kind: "string" | "number" | "boolean" | "date" }>;
}

export interface WorkflowConfig {
  slug: string;
  title: string;
  description: string;
  prompt: string;
  fields: string[];
}

export const appConfig = {
  "slug": "ai-victim-compensation-case-operations",
  "title": "Victim Compensation Case Operations",
  "tagline": "Assemble applications, supporting expenses, payer offsets, reviewer decisions, payment records and appeals.",
  "accent": "rose"
};
export const pages: PageConfig[] = [
  {
    "label": "Intake & registers",
    "href": "/registers",
    "description": "Assemble applications, supporting expenses, payer offsets, reviewer decisions, payment records and appeals.",
    "entities": [
      "CompensationCase",
      "ExpenseClaim",
      "PayerOffset"
    ],
    "workflows": [
      "expense-document-extraction",
      "offset-reconciliation-brief"
    ]
  },
  {
    "label": "Operational records",
    "href": "/workflow",
    "description": "Assemble applications, supporting expenses, payer offsets, reviewer decisions, payment records and appeals.",
    "entities": [
      "CaseDocument",
      "EligibilityReview",
      "ExpenseDecision"
    ],
    "workflows": [
      "application-completeness-review",
      "reviewer-decision-preparation"
    ]
  },
  {
    "label": "Review & delivery",
    "href": "/delivery",
    "description": "Assemble applications, supporting expenses, payer offsets, reviewer decisions, payment records and appeals.",
    "entities": [
      "AwardDecision",
      "CasePayment",
      "CompensationAppeal"
    ],
    "workflows": [
      "award-explanation-draft",
      "appeal-evidence-organization"
    ]
  },
  {
    "label": "Tasks & requirements",
    "href": "/operations",
    "description": "Assignments, versioned rules and document requirements.",
    "entities": [
      "OperationalTask",
      "RuleVersion",
      "DocumentRequirement"
    ],
    "workflows": [
      "evidence-completeness-review",
      "operations-handoff-draft"
    ]
  }
];
export const entities: Record<string, EntityConfig> = {
  "CompensationCase": {
    "name": "CompensationCase",
    "label": "Compensation Case",
    "fields": [
      {
        "name": "name",
        "kind": "string"
      },
      {
        "name": "caseNumber",
        "kind": "string"
      },
      {
        "name": "applicantReference",
        "kind": "string"
      },
      {
        "name": "program",
        "kind": "string"
      },
      {
        "name": "incidentAt",
        "kind": "date"
      },
      {
        "name": "submittedAt",
        "kind": "date"
      },
      {
        "name": "status",
        "kind": "string"
      }
    ]
  },
  "ExpenseClaim": {
    "name": "ExpenseClaim",
    "label": "Expense Claim",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "category",
        "kind": "string"
      },
      {
        "name": "incurredAt",
        "kind": "date"
      },
      {
        "name": "provider",
        "kind": "string"
      },
      {
        "name": "claimedCents",
        "kind": "number"
      },
      {
        "name": "currency",
        "kind": "string"
      },
      {
        "name": "evidence",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "compensationCaseId",
        "kind": "string"
      }
    ]
  },
  "PayerOffset": {
    "name": "PayerOffset",
    "label": "Payer Offset",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "expenseClaimId",
        "kind": "string"
      },
      {
        "name": "payer",
        "kind": "string"
      },
      {
        "name": "receivedCents",
        "kind": "number"
      },
      {
        "name": "receivedAt",
        "kind": "date"
      },
      {
        "name": "evidence",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "compensationCaseId",
        "kind": "string"
      }
    ]
  },
  "CaseDocument": {
    "name": "CaseDocument",
    "label": "Case Document",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "documentType",
        "kind": "string"
      },
      {
        "name": "sourceReference",
        "kind": "string"
      },
      {
        "name": "receivedAt",
        "kind": "date"
      },
      {
        "name": "description",
        "kind": "string"
      },
      {
        "name": "author",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "compensationCaseId",
        "kind": "string"
      }
    ]
  },
  "EligibilityReview": {
    "name": "EligibilityReview",
    "label": "Eligibility Review",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "reviewer",
        "kind": "string"
      },
      {
        "name": "reviewedAt",
        "kind": "date"
      },
      {
        "name": "ruleVersion",
        "kind": "string"
      },
      {
        "name": "findings",
        "kind": "string"
      },
      {
        "name": "decisionRationale",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "compensationCaseId",
        "kind": "string"
      }
    ]
  },
  "ExpenseDecision": {
    "name": "ExpenseDecision",
    "label": "Expense Decision",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "expenseClaimId",
        "kind": "string"
      },
      {
        "name": "allowedCents",
        "kind": "number"
      },
      {
        "name": "reason",
        "kind": "string"
      },
      {
        "name": "decisionAt",
        "kind": "date"
      },
      {
        "name": "reviewer",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "compensationCaseId",
        "kind": "string"
      }
    ]
  },
  "AwardDecision": {
    "name": "AwardDecision",
    "label": "Award Decision",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "awardedCents",
        "kind": "number"
      },
      {
        "name": "ruleVersion",
        "kind": "string"
      },
      {
        "name": "decidedAt",
        "kind": "date"
      },
      {
        "name": "authorizedBy",
        "kind": "string"
      },
      {
        "name": "rationale",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "compensationCaseId",
        "kind": "string"
      }
    ]
  },
  "CasePayment": {
    "name": "CasePayment",
    "label": "Case Payment",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "paidAt",
        "kind": "date"
      },
      {
        "name": "payee",
        "kind": "string"
      },
      {
        "name": "amountCents",
        "kind": "number"
      },
      {
        "name": "method",
        "kind": "string"
      },
      {
        "name": "receipt",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "compensationCaseId",
        "kind": "string"
      }
    ]
  },
  "CompensationAppeal": {
    "name": "CompensationAppeal",
    "label": "Compensation Appeal",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "submittedAt",
        "kind": "date"
      },
      {
        "name": "reason",
        "kind": "string"
      },
      {
        "name": "additionalEvidence",
        "kind": "string"
      },
      {
        "name": "responseDueAt",
        "kind": "date"
      },
      {
        "name": "reviewer",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "compensationCaseId",
        "kind": "string"
      }
    ]
  },
  "OperationalTask": {
    "name": "OperationalTask",
    "label": "Operational Task",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "owner",
        "kind": "string"
      },
      {
        "name": "priority",
        "kind": "string"
      },
      {
        "name": "startAt",
        "kind": "date"
      },
      {
        "name": "dueAt",
        "kind": "date"
      },
      {
        "name": "done",
        "kind": "boolean"
      },
      {
        "name": "notes",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "compensationCaseId",
        "kind": "string"
      }
    ]
  },
  "RuleVersion": {
    "name": "RuleVersion",
    "label": "Rule Version",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "jurisdiction",
        "kind": "string"
      },
      {
        "name": "version",
        "kind": "string"
      },
      {
        "name": "effectiveAt",
        "kind": "date"
      },
      {
        "name": "expiresAt",
        "kind": "date"
      },
      {
        "name": "sourceUrl",
        "kind": "string"
      },
      {
        "name": "requirementText",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "compensationCaseId",
        "kind": "string"
      }
    ]
  },
  "DocumentRequirement": {
    "name": "DocumentRequirement",
    "label": "Document Requirement",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "category",
        "kind": "string"
      },
      {
        "name": "requiredBy",
        "kind": "date"
      },
      {
        "name": "sourceReference",
        "kind": "string"
      },
      {
        "name": "evidenceReference",
        "kind": "string"
      },
      {
        "name": "reviewNotes",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "compensationCaseId",
        "kind": "string"
      }
    ]
  }
};
export const workflows: WorkflowConfig[] = [
  {
    "slug": "expense-document-extraction",
    "title": "Expense document extraction",
    "description": "Expense document extraction using selected compensation case records and supplied evidence.",
    "prompt": "Expense document extraction for Victim Compensation Case Operations. Operational scope: Assemble applications, supporting expenses, payer offsets, reviewer decisions, payment records and appeals. Specific AI scope: Extract expense evidence and identify incomplete packets; staff decide eligibility. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "offset-reconciliation-brief",
    "title": "Offset reconciliation brief",
    "description": "Offset reconciliation brief using selected compensation case records and supplied evidence.",
    "prompt": "Offset reconciliation brief for Victim Compensation Case Operations. Operational scope: Assemble applications, supporting expenses, payer offsets, reviewer decisions, payment records and appeals. Specific AI scope: Extract expense evidence and identify incomplete packets; staff decide eligibility. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "application-completeness-review",
    "title": "Application completeness review",
    "description": "Application completeness review using selected compensation case records and supplied evidence.",
    "prompt": "Application completeness review for Victim Compensation Case Operations. Operational scope: Assemble applications, supporting expenses, payer offsets, reviewer decisions, payment records and appeals. Specific AI scope: Extract expense evidence and identify incomplete packets; staff decide eligibility. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "reviewer-decision-preparation",
    "title": "Reviewer decision preparation",
    "description": "Reviewer decision preparation using selected compensation case records and supplied evidence.",
    "prompt": "Reviewer decision preparation for Victim Compensation Case Operations. Operational scope: Assemble applications, supporting expenses, payer offsets, reviewer decisions, payment records and appeals. Specific AI scope: Extract expense evidence and identify incomplete packets; staff decide eligibility. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "award-explanation-draft",
    "title": "Award explanation draft",
    "description": "Award explanation draft using selected compensation case records and supplied evidence.",
    "prompt": "Award explanation draft for Victim Compensation Case Operations. Operational scope: Assemble applications, supporting expenses, payer offsets, reviewer decisions, payment records and appeals. Specific AI scope: Extract expense evidence and identify incomplete packets; staff decide eligibility. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "appeal-evidence-organization",
    "title": "Appeal evidence organization",
    "description": "Appeal evidence organization using selected compensation case records and supplied evidence.",
    "prompt": "Appeal evidence organization for Victim Compensation Case Operations. Operational scope: Assemble applications, supporting expenses, payer offsets, reviewer decisions, payment records and appeals. Specific AI scope: Extract expense evidence and identify incomplete packets; staff decide eligibility. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "evidence-completeness-review",
    "title": "Evidence completeness review",
    "description": "Evidence completeness review using selected compensation case records and supplied evidence.",
    "prompt": "Evidence completeness review for Victim Compensation Case Operations. Operational scope: Assemble applications, supporting expenses, payer offsets, reviewer decisions, payment records and appeals. Specific AI scope: Extract expense evidence and identify incomplete packets; staff decide eligibility. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "operations-handoff-draft",
    "title": "Operations handoff draft",
    "description": "Operations handoff draft using selected compensation case records and supplied evidence.",
    "prompt": "Operations handoff draft for Victim Compensation Case Operations. Operational scope: Assemble applications, supporting expenses, payer offsets, reviewer decisions, payment records and appeals. Specific AI scope: Extract expense evidence and identify incomplete packets; staff decide eligibility. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  }
];
export function findPage(href:string){return pages.find(p=>p.href===href);}
