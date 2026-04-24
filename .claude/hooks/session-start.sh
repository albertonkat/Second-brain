#!/bin/bash
set -euo pipefail

# Only run in remote Claude Code environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Print vault context for the session
echo "=== Second Brain Vault ==="
echo "Date: $(date '+%Y-%m-%d')"
echo ""

# Recent commits
echo "--- Recent vault activity ---"
git -C "${CLAUDE_PROJECT_DIR}" log --oneline -5 2>/dev/null || true
echo ""

# Inbox status
INBOX="${CLAUDE_PROJECT_DIR}/00-Inbox/Inbox.md"
if [ -f "$INBOX" ]; then
  LINES=$(wc -l < "$INBOX")
  echo "--- Inbox (${LINES} lines) ---"
  cat "$INBOX"
  echo ""
fi

# Latest daily note
LATEST_DAILY=$(ls -1 "${CLAUDE_PROJECT_DIR}/06-Daily-Notes/"*.md 2>/dev/null | sort | tail -1)
if [ -n "$LATEST_DAILY" ]; then
  echo "--- Latest daily note: $(basename "$LATEST_DAILY") ---"
  cat "$LATEST_DAILY"
  echo ""
fi

echo "=== Vault context loaded ==="
