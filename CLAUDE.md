# Second Brain — Claude Context

## What This Repo Is

A personal knowledge management vault using the **PARA method** (Projects, Areas, Resources, Archive), written in Markdown, managed in Obsidian, and versioned with Git.

## Folder Structure

```
00-Inbox/        # Quick capture — dump here first, process later
01-Projects/     # Active work with a specific outcome and deadline
02-Areas/        # Ongoing responsibilities with no end date
03-Resources/    # Reference material, guides, domain knowledge
04-Archive/      # Completed, paused, or inactive items
05-Templates/    # Templater templates — do NOT edit frontmatter variables like {{date}}
06-Daily-Notes/  # Daily notes, named YYYY-MM-DD.md
07-MOCs/         # Maps of Content — index/navigation notes only
Home.md          # Dashboard entry point
```

## Note Conventions

- **Filenames**: Title Case with spaces (e.g. `Z-Wave Protocol.md`)
- **Daily notes**: `YYYY-MM-DD.md` in `06-Daily-Notes/`
- **Frontmatter**: Every note should have `tags:` at minimum; project notes also carry `status: active|paused|done`
- **Internal links**: Use Obsidian wiki-link syntax `[[Note Title]]` — do not use relative Markdown paths
- **Templates**: Files in `05-Templates/` use Templater syntax (`{{date:YYYY-MM-DD}}`, `{{title}}`). Never resolve these at edit time — leave them as-is

## Installed Plugins (context only — do not manage these)

| Plugin | Purpose |
|---|---|
| Templater | Dynamic templates |
| Dataview | Query notes like a database |
| Calendar (beta) | Visual daily note navigator |
| Tasks | Cross-vault task tracking |
| Obsidian Git | Auto-commit/push on schedule |
| Make.md | Enhanced file manager |
| Smart Second Brain | AI-assisted note linking |
| Google Calendar | Calendar sync |
| PDF+ | PDF annotation |
| Advanced Canvas | Mind maps / visual notes |

## Git Commit Style

```
vault: <short description>
```

Examples:
- `vault: add Healthcare IoT MOC`
- `vault: daily note 2026-04-28`
- `vault: move project X to archive`

Always stage specific files — never `git add .` blindly, as Obsidian writes cache/workspace state to `.obsidian/`.

## Focus Domains

- **Healthcare IoT**: Z-Wave, Zigbee, remote patient monitoring, device integration
- **SmartThings Development**: Device Handlers, SmartApps, SmartThings IDE, platform APIs

## What NOT to Touch

- `.obsidian/` — Obsidian app config and plugin state; Claude should never edit these
- `.space/` — Make.md internal state
- `.makemd/` — Make.md cache
- `05-Templates/` — only edit if explicitly asked to change a template
