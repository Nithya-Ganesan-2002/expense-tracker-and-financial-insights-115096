#!/bin/bash
cd /home/kavia/workspace/code-generation/expense-tracker-and-financial-insights-115096/expense_tracker_backend
npm run lint
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

