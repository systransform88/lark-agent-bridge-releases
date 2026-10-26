# Lark Agent Bridge

Connect your Lark bot to Codex or Claude Code running on your own computer.

This is the official desktop download and support repository. Development is maintained in a separate private repository.

<!-- downloads:start -->
## Downloads

**Latest testing release: [v0.2.0-alpha.2](https://github.com/systransform88/lark-agent-bridge-releases/releases/tag/v0.2.0-alpha.2)**

| Your computer | Download |
| --- | --- |
| Windows x64 | [Windows installer](https://github.com/systransform88/lark-agent-bridge-releases/releases/download/v0.2.0-alpha.2/Lark-Agent-Bridge-0.2.0-alpha.2-win-x64.exe) |
| Mac with Apple Silicon (ARM64) | Signing correction in progress. The alpha.2 Mac app can show a damaged-app warning; please wait for the corrected testing build. |
| Linux x64 | [AppImage](https://github.com/systransform88/lark-agent-bridge-releases/releases/download/v0.2.0-alpha.2/Lark-Agent-Bridge-0.2.0-alpha.2-linux-x86_64.AppImage) · [Debian/Ubuntu package](https://github.com/systransform88/lark-agent-bridge-releases/releases/download/v0.2.0-alpha.2/Lark-Agent-Bridge-0.2.0-alpha.2-linux-amd64.deb) |

[All releases](https://github.com/systransform88/lark-agent-bridge-releases/releases) · [SHA-256 checksums](https://github.com/systransform88/lark-agent-bridge-releases/releases/download/v0.2.0-alpha.2/SHA256SUMS.txt)

Downloads are public and do not require a GitHub account. Intel Mac builds are not included in this release.
<!-- downloads:end -->

## Install and connect

1. Download the installer for your operating system and processor from the release assets. You do not need the automatically generated **Source code** ZIP or tar.gz; those contain this download page.
2. Install and open **Lark Agent Bridge**. On Windows, run the `.exe` installer; on macOS, open the `.dmg` and drag the app into Applications; on Linux, install the `.deb` or allow the AppImage to run as a program in its file properties.
3. Follow the four setup steps: choose your AI agent, create or connect a Lark bot, choose a work folder and access level, then send a test message in Lark.

You need Codex CLI or Claude Code installed and signed in with your own account. The app includes the bridge runtime and Lark CLI. Your Lark organization may require administrator approval for bot creation or permissions.

Keep the computer awake and online while the bot is running. Closing the window keeps the bridge in the system tray when a tray is available; choose Quit to exit. Use Pause bot to disconnect or Cancel task to interrupt work.

## Testing builds

These early builds are unsigned and are intended for testing. Windows or macOS may show an unidentified-publisher notice. If your organization blocks unsigned applications, ask its administrator; the app does not change your computer's security policy.

Start with **Read files only**. **Create files and run commands** gives the agent your computer account's permissions, beyond the selected folder. Agent and Lark service charges, if any, belong to your own accounts.

Updates are installed manually by downloading a newer installer. Your existing local settings and memories are kept. There is no automatic update service or bridge account registration in this testing version.

## Help and feedback

Use [Issues](https://github.com/systransform88/lark-agent-bridge-releases/issues) for setup problems and bug reports. Include the app version, operating system and the error message. Remove app secrets, sign-in codes, access tokens and private conversation or document contents before posting.

## Licence

Lark Agent Bridge's own code is proprietary; see [LICENSE.txt](LICENSE.txt). Each release includes its licence and third-party notices. Third-party components retain their respective licences and rights.
