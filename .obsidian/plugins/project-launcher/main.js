"use strict";
Object.defineProperties(exports, {
    __esModule: { value: true },
    [Symbol.toStringTag]: { value: "Module" }
});
const obsidian = require("obsidian");

const PROJECTS_FOLDER = "01-Projects";

// Parse YAML frontmatter value for a given key (simple single-line values only)
function parseFrontmatterField(content, key) {
    const match = content.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
    return match ? match[1].trim() : null;
}

class ProjectModal extends obsidian.SuggestModal {
    constructor(app) {
        super(app);
        this.setPlaceholder("Type to search projects…");
        this.setInstructions([
            { command: "↑↓", purpose: "navigate" },
            { command: "↵", purpose: "open project" },
            { command: "esc", purpose: "dismiss" },
        ]);
    }

    async getSuggestions(query) {
        const files = this.app.vault.getFiles().filter(
            (f) => f.path.startsWith(PROJECTS_FOLDER + "/") && f.extension === "md"
        );

        const withMeta = await Promise.all(
            files.map(async (file) => {
                const content = await this.app.vault.cachedRead(file);
                const status = parseFrontmatterField(content, "status") || "unknown";
                return { file, status };
            })
        );

        const lower = query.toLowerCase();
        const filtered = lower
            ? withMeta.filter((item) => item.file.basename.toLowerCase().includes(lower))
            : withMeta;

        // Active projects first
        filtered.sort((a, b) => {
            const order = { active: 0, "in-progress": 0, completed: 1, archive: 2, unknown: 3 };
            return (order[a.status] ?? 3) - (order[b.status] ?? 3);
        });

        return filtered;
    }

    renderSuggestion(item, el) {
        const wrap = el.createDiv({ cls: "project-launcher-item" });
        wrap.createEl("span", { text: item.file.basename, cls: "project-launcher-name" });

        const badge = wrap.createEl("span", {
            text: item.status,
            cls: `project-launcher-badge project-launcher-status-${item.status}`,
        });
        // Inline styles so we don't need a separate CSS file
        Object.assign(badge.style, {
            marginLeft: "8px",
            fontSize: "11px",
            padding: "1px 6px",
            borderRadius: "4px",
            background: item.status === "active" ? "var(--color-green)" : "var(--background-modifier-border)",
            color: item.status === "active" ? "var(--text-on-accent)" : "var(--text-muted)",
        });
    }

    onChooseSuggestion(item, _evt) {
        this.app.workspace.openLinkText(item.file.path, "", false);
    }
}

class ProjectLauncherPlugin extends obsidian.Plugin {
    async onload() {
        this.addCommand({
            id: "open-project-from-chat",
            name: "Open Project",
            callback: () => new ProjectModal(this.app).open(),
        });

        this.addRibbonIcon("folder-open", "Open Project", () =>
            new ProjectModal(this.app).open()
        );
    }

    onunload() {}
}

exports.default = ProjectLauncherPlugin;
